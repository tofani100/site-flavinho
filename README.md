# Site Flavinho — Amor, Saúde e Palavra em Movimento

Site institucional de **Flavio Henrique Bachi** (Palestrante Espírita e Fisioterapeuta).  
Clonado e migrado na íntegra da plataforma Base44 para uma infraestrutura 100% autônoma, sem nenhuma dependência externa do Base44.

## 🚀 Acesso em Produção (Firebase Hosting)
- **URL Oficial:** [https://site-flavinho.web.app](https://site-flavinho.web.app)

---

## 🛠️ Tecnologias Utilizadas
- **React 18** + **Vite 6**
- **Tailwind CSS** (Cores personalizadas: Linen `#F9F7F2`, Umber `#2D2A26`, Sage `#2D8659`, Ochre `#1B7A4E`)
- **Lucide React** (Ícones modernos e otimizados)
- **Framer Motion** (Animações suaves e modais interativos)
- **Firebase Hosting** (Deploy CDN global de alta performance)
- **Docker / Cloud Run** (Compatível com container Docker e porta 8080)

---

## 📁 Estrutura de Pastas e Arquivos

```
site-flavinho/
├── public/
│   ├── manifest.json                  # PWA Manifest
│   └── assets/
│       └── images/                    # Imagens locais (100% independentes do Base44)
│           ├── favicon.png
│           ├── logo.png
│           ├── flavio-logo.png
│           ├── flavio-hero.png
│           ├── palestra-alongamento.png
│           ├── acao-social.png
│           └── palestra-doutrinaria.png
├── src/
│   ├── components/                    # Componentes modulares
│   │   ├── Navbar.jsx                 # Barra de navegação com menu responsivo e logo
│   │   ├── HeroSection.jsx            # Seção inicial com apresentação e estatísticas
│   │   ├── ActivitiesSection.jsx      # Seção com as 3 atividades e cards alternados
│   │   ├── KnowledgeSection.jsx       # Hub de conhecimento com cards dos 3 artigos
│   │   ├── ArticleModal.jsx           # Leitor modal multipágina com paginação suave
│   │   ├── ContactFooter.jsx          # Conexão Fraterna, WhatsApp e créditos
│   │   └── FloatingWhatsApp.jsx       # Botão flutuante de atendimento WhatsApp
│   ├── data/                          # Dados isolados para fácil edição
│   │   ├── navigation.js              # Links de navegação
│   │   ├── activities.js              # Dados das atividades e fotos
│   │   └── articles.js                # Textos completos dos artigos e páginas
│   ├── App.jsx                        # Layout principal
│   ├── main.jsx                       # Ponto de entrada React
│   └── index.css                      # Estilos globais e Tailwind
├── firebase.json                      # Configuração do Firebase Hosting
├── .firebaserc                        # Target 'site-flavinho' no projeto playcomunique-site
├── Dockerfile                         # Build para Cloud Run
├── nginx.conf                         # Configuração Nginx para container
├── tailwind.config.js
└── package.json
```

---

## 💻 Comandos de Desenvolvimento e Deploy

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em ambiente local
```bash
npm run dev
```

### 3. Gerar build de produção
```bash
npm run build
```

### 4. Fazer Deploy no Firebase Hosting
```bash
npm run deploy
# ou diretamente:
npx firebase-tools deploy --only hosting:site-flavinho
```
