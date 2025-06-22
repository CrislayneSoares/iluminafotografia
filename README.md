# Ilumina Fotografia 📸✨

Uma galeria de fotografia artística focada em retratos que capturam **emoção** e **magia**. Este projeto apresenta uma experiência visual única através de uma interface moderna e elegante.

## ✨ Características

- **Design Responsivo**: Adapta-se perfeitamente a qualquer dispositivo
- **Animações Suaves**: Utiliza Framer Motion para transições elegantes
- **Galeria Interativa**: Efeitos de hover que destacam cada imagem
- **Performance Otimizada**: Next.js com otimização automática de imagens
- **Tema Escuro Elegante**: Gradientes roxos e rosas que complementam as fotos

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos e elegantes

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd ilumina-fotografia
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
ilumina-fotografia/
├── src/
│   └── app/
│       ├── page.tsx          # Página principal da galeria
│       ├── layout.tsx        # Layout raiz da aplicação
│       └── globals.css       # Estilos globais
├── public/
│   └── imgs/                 # Pasta com as imagens da galeria
└── package.json
```

## 🎨 Personalização

### Adicionando Novas Imagens

1. Coloque suas imagens na pasta `public/imgs/`
2. Atualize o array `images` no arquivo `src/app/page.tsx`
3. Adicione o caminho e descrição da nova imagem

### Modificando o Design

- **Cores**: Edite as classes Tailwind no arquivo `page.tsx`
- **Animações**: Ajuste os parâmetros do Framer Motion
- **Layout**: Modifique o grid CSS para diferentes arranjos

## 📱 Responsividade

A galeria é totalmente responsiva:
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3-4 colunas
- **Large Desktop**: 4 colunas

## 🌟 Destaques do Design

- **Gradiente de Fundo**: Transição suave de roxo para rosa
- **Efeitos de Hover**: Zoom e overlay nas imagens
- **Animações de Entrada**: Cada imagem aparece com timing escalonado
- **Scrollbar Personalizada**: Estilo único que combina com o tema
- **Tipografia Gradiente**: Título com cores que se misturam

## 📸 Sobre as Fotos

As imagens selecionadas focam em retratos que transmitem:
- **Emoção profunda** através de expressões autênticas
- **Magia** capturada em momentos especiais
- **Arte** através da composição e iluminação

## 🚀 Deploy

Este projeto pode ser facilmente deployado em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- Qualquer plataforma que suporte Node.js

## 📄 Licença

Este projeto é de uso pessoal e educacional.

---

**Ilumina Fotografia** - Transformando momentos em arte eterna ✨
