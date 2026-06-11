# Elite Assessoria

Site institucional da **Elite Assessoria** — assessoria e consultoria empresarial especializada em gestão de departamento pessoal, folha de pagamento, RH, rotinas trabalhistas e consultoria em gestão.

Landing page única em pt-BR, construída com HTML + Tailwind CSS (Play CDN) + JavaScript vanilla, sem etapa de build.

## Estrutura

```
index.html            Página completa (SEO, hero, sobre, serviços, processo, diferenciais, contato)
assets/js/site.js     Script do site (cards de serviços, header dinâmico, menu mobile, reveal, modal, formulários, contadores)
assets/images/        Logos (logo.png, logo-light.png) e favicon (favicon.png)
robots.txt            Diretivas para mecanismos de busca
sitemap.xml           Mapa do site
```

## Como executar

Não há dependências nem build — basta abrir o `index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
npx serve .
```

### Publicação via GitHub Pages

1. Em **Settings → Pages**, selecione a branch `main` e a pasta raiz (`/`).
2. O site ficará disponível em `https://<usuario>.github.io/elitegestao/`.
3. Ao apontar um domínio próprio, atualize o `canonical`, Open Graph, `robots.txt` e `sitemap.xml`.

## Pendências (TODOs deixados no código)

Os pontos abaixo usam placeholders e estão marcados com `<!-- TODO: atualizar dados reais -->` (HTML) ou `/* TODO */` (JS):

- [ ] **E-mail**: `contato@eliteassessoria.com.br` — `index.html` (contato, footer, JSON-LD)
- [ ] **Domínio**: `https://www.eliteassessoria.com.br/` — `index.html` (canonical, OG, Twitter, JSON-LD), `robots.txt` e `sitemap.xml`
- [ ] **Ano de fundação**: constante `ANO_FUNDACAO = 2014` em `assets/js/site.js` (alimenta o contador "anos de experiência")
- [ ] **Estatísticas**: números da barra de stats (`data-count` em `index.html`) são ilustrativos — confirmar valores reais

## Recomendação futura

O site usa o **Tailwind Play CDN** para manter a mesma base do site de referência (zero build). Para produção em escala, o ideal é compilar o CSS com o Tailwind CLI (`npx tailwindcss -o assets/css/site.css --minify`) e trocar o `<script src="https://cdn.tailwindcss.com">` por um `<link rel="stylesheet">` — elimina o flash de página sem estilo e melhora o tempo de carregamento.
