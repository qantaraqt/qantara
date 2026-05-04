# Qantara SafeLink

**Ferramenta pública e gratuita para conferir se um link, boleto ou QR Code Pix é golpe — antes de pagar.**

→ <https://qantara.com.br/safelink/>

---

## O problema

No Brasil, mais de 80% das fraudes financeiras chegam por link, print de boleto ou QR Code Pix enviados via WhatsApp, Instagram e SMS. O destinatário não tem como conferir antes de pagar — quando descobre, o dinheiro já foi.

## O que o SafeLink faz

- **Checa o link** com 12 camadas: WHOIS, VirusTotal (92 engines), Google Safe Browsing, URLhaus, Wayback, certificado SSL, ASN/país, gateways de pagamento, formulário de cartão exposto, CNPJ na Receita, Reclame Aqui, redes sociais.
- **Lê print do WhatsApp / foto de boleto** com IA visual (Grok-vision) — detecta imitação de marca, mensagens urgentes, pedido de senha/CVV/SMS, boleto adulterado.
- **Decodifica QR Code Pix** e revela quem é o **recebedor real**, antes do pagamento sair.
- **Expande encurtadores** (bit.ly, t.co, etc) e analisa o destino real, não a casca.
- **Fast-path** com blocklist de golpes conhecidos e allowlist de bancos/governo — resposta em <50ms para domínios já catalogados.
- **Ações pós-veredito**: links diretos para denúncia (Polícia Federal, Consumidor.gov, Google Safe Browsing) e revalidação (Receita CNPJ, Reclame Aqui).

Veredicto em 3 níveis claros: **SEGURO** · **VERIFICAR** · **RISCO ALTO**.

## Como usar

### Como pessoa
1. Abra <https://qantara.com.br/safelink/>
2. Cole o link, **arraste o print** do WhatsApp, ou **cole imagem com Ctrl+V**
3. Em segundos: veredicto, motivos, recebedor do Pix, ações recomendadas

Sem cadastro, sem rastreamento, gratuito (5 verificações de URL/min e 3 imagens/min por IP, com cota diária por IP).

### Como API
Endpoint público (rate-limited, gratuito):

```bash
# Análise de URL
curl -X POST https://api.qantara.com.br/safelink/v1/public/check \
  -H "Content-Type: application/json" \
  -d '{"url": "https://exemplo.com.br"}'

# Análise de imagem (print, boleto, QR Pix)
curl -X POST https://api.qantara.com.br/safelink/v1/public/check-image \
  -F "file=@print-whatsapp.png"
```

Para uso intensivo, contato em <https://qantara.com.br/safelink/api>.

## Arquitetura

| Componente | Stack | Função |
|---|---|---|
| Frontend | Astro + JS vanilla | UI estática, drag/paste/clipboard, sem rastreamento |
| API | FastAPI + Redis + Postgres | Pipeline orquestrado, cache, rate limit |
| Fetcher | Playwright (chromium) | Carrega página real, captura DOM e screenshot |
| Heurísticas | Python | 12 sinais técnicos (WHOIS, SSL, DNS, gateways, formulários) |
| IA | Grok-vision (xAI) + Claude (OpenRouter) | Veredito visual + textual com consenso |
| QR/Pix | pyzbar + parser EMV-TLV | Decodifica QR e extrai recebedor do Pix BR Code |
| Cache | Redis | Resposta repetida em <100ms |

## Estrutura do repositório

```
src/                 # Astro frontend (qantara.com.br + /safelink)
  pages/safelink/    # Landing, API docs, admin
  components/        # UI Astro
safelink-api/        # Backend FastAPI (mantém-se fora do repositório público por enquanto)
  app/services/      # pipeline, heuristics, fetcher, ai_analyzer, image_analyzer, shortener, blocklist
  app/routers/       # public, private, admin
public/              # assets estáticos
```

## Status

Em produção desde 2025. Mantido pela [Qantara](https://qantara.com.br) — engenharia para resolver problemas reais.

## Licença

Código MIT. Dados de blocklist e modelos de IA seguem termos próprios de cada fonte.
