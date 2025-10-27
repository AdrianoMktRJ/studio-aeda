# Studio AEDA Digital - TODO List

## 🎨 Atualização de Design e Branding

### Remover Elementos Roxos
- [x] Remover cor roxa (#5b3cc4) da Hero Section
- [x] Remover gradientes roxos do background
- [x] Remover bg-purple-100 dos cards de resultados
- [x] Remover text-purple-200 dos textos
- [x] Remover bg-purple-100 dos ícones de compromisso
- [x] Remover todos os elementos decorativos roxos (círculos, linhas)

### Remover Imagem da Coruja
- [x] Remover imagem da coruja (/owl-aeda.png) da Hero Section
- [x] Remover div decorativa ao redor da coruja
- [x] Ajustar layout da Hero para ficar centralizado sem a imagem

### Aplicar Cores da Marca AEDA
- [x] Aplicar verde petrol (#2D5F5D) como cor primária
- [x] Aplicar laranja queimado (#D97706) como cor secundária
- [x] Atualizar Hero Section com gradiente verde petrol
- [x] Atualizar cards com ícones verde petrol
- [x] Atualizar seção de compromisso com ícones laranja queimado
- [x] Atualizar CTA final com gradiente verde petrol

### Logo AEDA
- [ ] Verificar se logo AEDA (letra "A") está no projeto
- [ ] Adicionar logo no Header se necessário
- [ ] Verificar favicon com logo AEDA

## 🎯 Seletor de Perfil

### Modal de Seleção
- [x] Criar componente ProfileSelector.tsx
- [x] Implementar modal com dois cards: Advogado e Construtora
- [x] Adicionar delay de 3 segundos antes de mostrar
- [x] Implementar botão de fechar (X)
- [x] Implementar fechar ao clicar fora do modal
- [x] Estilizar com cores da marca (verde petrol + laranja queimado)

### Funcionalidade
- [x] Salvar seleção no localStorage
- [x] Não mostrar novamente se já foi selecionado
- [x] Personalizar conteúdo baseado na seleção
- [x] Configurar mensagens diferentes do WhatsApp por perfil

### Integração
- [x] Adicionar ProfileSelector no App.tsx ou Home.tsx
- [x] Criar contexto para gerenciar perfil selecionado
- [x] Atualizar componentes para usar perfil do contexto

## 📱 Componentes a Verificar
- [x] Header - verificar se usa cores corretas
- [x] Footer - verificar se usa cores corretas
- [x] WhatsAppButton - verificar se usa cores corretas
- [ ] Botões - atualizar para usar cores da marca

## 🧪 Testes
- [x] Testar responsividade mobile
- [x] Testar modal de perfil em diferentes dispositivos
- [x] Verificar que não há mais elementos roxos
- [x] Verificar que não há mais referências à coruja
- [x] Testar localStorage do perfil

## 🚀 Deploy
- [x] Fazer checkpoint após todas as mudanças
- [x] Testar localmente antes do deploy
- [ ] Fazer deploy para Vercel
- [ ] Verificar cache do Vercel
- [ ] Testar site em produção



### Logo AEDA Adicionado
- [x] Logo oficial AEDA (letra A) adicionado em client/public/logo-aeda.png
- [x] Header usando logo correto
- [x] Footer usando logo correto




## 🐛 Correções
- [x] Corrigir erro DialogTitle no ProfileSelector (acessibilidade)
- [x] Remover animação do logo no Header



## 🔧 Correção Deploy Vercel
- [x] Criar arquivo .env.production com variáveis de ambiente
- [ ] Corrigir erro "Failed to construct 'URL': Invalid URL"



## 🐛 Novos Bugs Reportados
- [x] Site em produção ainda está com design antigo (roxo)
- [x] Outras páginas (Sobre, Serviços, Contato) ainda estão roxas
- [x] Seletor de perfil não tem opção de voltar a escolher depois de selecionar

