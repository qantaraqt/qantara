import { EmailMessage } from "cloudflare:email";
import { createMimeMessage, Mailbox } from "mimetext";

const MAX = { nome: 120, email: 200, empresa: 120, mensagem: 4000 };

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim());
  const ok = allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : allowed[0] || "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "600",
    Vary: "Origin",
  };
}

function json(body, status, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...extra },
  });
}

function clean(v, max) {
  return String(v ?? "").replace(/\r/g, "").trim().slice(0, max);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, env);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ ok: false, erro: "método não permitido" }, 405, cors);

    let data;
    try {
      const ct = request.headers.get("Content-Type") || "";
      data = ct.includes("application/json")
        ? await request.json()
        : Object.fromEntries((await request.formData()).entries());
    } catch {
      return json({ ok: false, erro: "corpo inválido" }, 400, cors);
    }

    // Honeypot: campo oculto que humanos não preenchem.
    if (clean(data.site, 200)) return json({ ok: true }, 200, cors);

    const nome = clean(data.nome, MAX.nome);
    const email = clean(data.email, MAX.email);
    const empresa = clean(data.empresa, MAX.empresa);
    const mensagem = clean(data.mensagem, MAX.mensagem);

    if (!nome || !email || !mensagem) return json({ ok: false, erro: "preencha nome, email e mensagem" }, 400, cors);
    if (!EMAIL_RE.test(email)) return json({ ok: false, erro: "email inválido" }, 400, cors);
    if (mensagem.length < 10) return json({ ok: false, erro: "conte um pouco mais sobre o projeto" }, 400, cors);

    const ip = request.headers.get("CF-Connecting-IP") || "";
    const pais = request.cf?.country || "";
    const quando = new Date().toISOString();

    const msg = createMimeMessage();
    msg.setSender({ name: "Qantara · site", addr: env.FROM_ADDRESS });
    msg.setRecipient(env.TO_ADDRESS);
    msg.setHeader("Reply-To", new Mailbox({ name: nome, addr: email }, { type: "Reply-To" }));
    msg.setSubject(`[qantara.com.br] ${nome}${empresa ? ` · ${empresa}` : ""}`);
    msg.addMessage({
      contentType: "text/plain",
      data: [
        `Nome:     ${nome}`,
        `Email:    ${email}`,
        `Empresa:  ${empresa || "-"}`,
        ``,
        mensagem,
        ``,
        `---`,
        `enviado em ${quando} · ip ${ip} ${pais}`,
      ].join("\n"),
    });

    try {
      await env.MAIL.send(new EmailMessage(env.FROM_ADDRESS, env.TO_ADDRESS, msg.asRaw()));
    } catch (e) {
      console.error("send_email failed:", e && e.message);
      return json({ ok: false, erro: "não consegui enviar agora; tente de novo em alguns minutos" }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  },
};
