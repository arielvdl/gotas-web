# Gotas

Aplicação moderna construída com Next.js, React e Catalyst UI em modo escuro por padrão.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Catalyst UI** - Componentes elegantes da equipe Tailwind
- **Headless UI** - Componentes acessíveis sem estilo
- **Heroicons** - Ícones SVG bonitos
- **Inter Font** - Tipografia moderna

## ✨ Características

- 🌙 **Modo escuro por padrão** - Interface otimizada para modo escuro
- 🎨 **Design moderno** - Componentes elegantes e acessíveis
- 📱 **Responsivo** - Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance** - Otimizado com Server Components
- 🔧 **TypeScript** - Tipagem estática para melhor DX
- 🎯 **SEO Ready** - Configurado para otimização de busca

## 🛠️ Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd gotas

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
gotas/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── button.tsx
│       └── link.tsx
├── public/
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🎨 Componentes

### Button
Componente de botão com variações de cor e estilo:

```tsx
import { Button } from '@/components/button'
import { PlusIcon } from '@heroicons/react/16/solid'

// Botão sólido
<Button>
  <PlusIcon />
  Clique aqui
</Button>

// Botão outline
<Button outline>
  Saiba mais
</Button>

// Botão como link
<Button href="/sobre">
  Ir para página
</Button>
```

### Link
Componente de link integrado com Next.js:

```tsx
import { Link } from '@/components/link'

<Link href="/sobre">
  Sobre nós
</Link>
```

## 🌙 Modo Escuro

O projeto está configurado para usar modo escuro por padrão. As variáveis CSS estão definidas em `globals.css` e o Tailwind está configurado com `darkMode: 'class'`.

## 📝 Scripts

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
