# Segurança

## O que já está aplicado

- Nenhum dado do formulário é inserido com `innerHTML` ou executado como código.
- Campos do formulário possuem validação nativa e limites de tamanho.
- URLs geradas para o WhatsApp usam `encodeURIComponent`.
- Links externos com nova aba usam `noopener noreferrer`.
- `security.txt` informa o canal para reporte de vulnerabilidades.
- `_headers` define CSP, HSTS, `nosniff`, anti-iframe, referrer policy e Permissions Policy.

## Publicação obrigatória

O arquivo `_headers` deve ser suportado pelo host. Em outro servidor, reproduza as mesmas diretivas como headers HTTP. Nunca publique este site apenas com HTTP; use HTTPS e redirecione HTTP para HTTPS.

No GitHub Pages, `_headers` não é aplicado como header HTTP. Por isso, as páginas também possuem uma CSP via `<meta>`. HSTS, `X-Frame-Options`, `Permissions-Policy` e `nosniff` não podem ser enviados pelo GitHub Pages; mantenha o site sem dados sensíveis e use um proxy/CDN como Cloudflare caso esses headers sejam obrigatórios.

Antes de habilitar `Strict-Transport-Security` com `includeSubDomains` e `preload`, confirme que o domínio e todos os subdomínios funcionam exclusivamente em HTTPS.

## Limites deste projeto

Este é um site estático. Não há backend, autenticação, banco de dados ou armazenamento de dados no projeto. Por isso, rate limiting, WAF, proteção contra abuso e retenção de dados precisam ser configurados no provedor de hospedagem e no WhatsApp.

Faça uma varredura externa após publicar, por exemplo com Mozilla Observatory, Security Headers e Lighthouse. Não inclua chaves privadas, tokens ou credenciais neste repositório.
