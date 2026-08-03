# Planejamento Infantil BNCC

Sistema responsivo para criar planejamentos semanais da Educação Infantil, selecionar objetivos da BNCC e do Documento Curricular de Goiás, anexar atividades em miniatura e imprimir/salvar o plano em PDF.

## Rodar no computador

1. Instale Node.js 20 ou superior.
2. Execute `npm install`.
3. Copie `.env.example` para `.env` e informe os dados públicos do Supabase.
4. Execute `npm run dev`.

Sem `.env`, o sistema abre em modo de demonstração e salva os dados no navegador.

## Configurar o Supabase

1. Crie um projeto no Supabase.
2. Abra **SQL Editor**, cole e execute `supabase/schema.sql`.
3. Em **Authentication > URL Configuration**, adicione a URL do GitHub Pages.
4. Copie a URL e a chave pública `anon` para o arquivo `.env`.

## Publicar no GitHub Pages

1. Envie os arquivos para um repositório com a branch `main`.
2. Em **Settings > Secrets and variables > Actions**, crie `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
3. Em **Settings > Pages > Source**, selecione **GitHub Actions**.
4. A publicação ocorrerá automaticamente após cada envio para `main`.

## PDF

Use **Visualizar > Imprimir / salvar PDF**. Na janela de impressão, escolha **Salvar como PDF**, papel A4, escala 100% e desative cabeçalhos e rodapés do navegador.
