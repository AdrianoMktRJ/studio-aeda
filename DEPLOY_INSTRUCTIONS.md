# 🚀 Guia de Deploy - Studio AEDA Digital

## Deploy no Vercel (Recomendado)

### Passo 1: Criar conta na Vercel
1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub" ou "Continue with Email"
4. Complete o cadastro

### Passo 2: Fazer Deploy do Projeto

**Opção A: Via GitHub (Recomendado)**
1. Crie um repositório no GitHub
2. Faça upload deste projeto para o GitHub
3. Na Vercel, clique em "Add New Project"
4. Selecione "Import Git Repository"
5. Escolha o repositório do Studio AEDA
6. Clique em "Deploy"

**Opção B: Via Upload Direto**
1. Na Vercel, clique em "Add New Project"
2. Clique em "Browse" ou arraste a pasta do projeto
3. Aguarde o upload
4. Clique em "Deploy"

### Passo 3: Configurar Variáveis de Ambiente

Na página do projeto na Vercel:
1. Vá em "Settings" > "Environment Variables"
2. Adicione as seguintes variáveis:

```
DATABASE_URL=sua_url_do_banco_de_dados
JWT_SECRET=seu_jwt_secret
WHATSAPP_ACCESS_TOKEN=seu_token_whatsapp
WHATSAPP_PHONE_NUMBER_ID=seu_phone_id
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret
GOOGLE_REFRESH_TOKEN=seu_google_refresh_token
BASE_URL=https://studioaeda.com.br
```

### Passo 4: Configurar Domínio Personalizado

1. Na Vercel, vá em "Settings" > "Domains"
2. Clique em "Add Domain"
3. Digite: `studioaeda.com.br`
4. A Vercel vai te dar instruções de DNS

### Passo 5: Configurar DNS no Registro.br

1. Acesse: https://registro.br
2. Faça login com sua conta
3. Vá em "Meus Domínios" > `studioaeda.com.br`
4. Clique em "Editar Zona"
5. Adicione os registros que a Vercel forneceu:

**Exemplo:**
```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

6. Salve as alterações
7. Aguarde propagação (até 48h, geralmente 1-2h)

### Passo 6: Verificar SSL

1. Após propagação do DNS, volte na Vercel
2. Em "Settings" > "Domains"
3. Verifique se aparece "SSL Certificate: Active"
4. Seu site estará disponível em: https://studioaeda.com.br

## ✅ Checklist Final

- [ ] Conta Vercel criada
- [ ] Projeto deployado
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio adicionado na Vercel
- [ ] DNS configurado no Registro.br
- [ ] SSL ativo
- [ ] Site acessível em https://studioaeda.com.br

## 🆘 Precisa de Ajuda?

Se tiver dúvidas em qualquer etapa, me avise que te ajudo!

## 📝 Notas Importantes

- O deploy inicial pode levar 5-10 minutos
- A propagação do DNS pode levar até 48h
- O SSL é configurado automaticamente pela Vercel
- Todas as atualizações futuras serão automáticas (se usar GitHub)
