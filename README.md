# Redação Reta Final - Landing Page

Uma página de vendas moderna e persuasiva para o curso "Redação Reta Final" com tema dark elegante.

## 🎯 Sobre o Projeto

Landing page desenvolvida para promover o curso de redação do ENEM "Redação Reta Final", focada em conversão e experiência do usuário. A página apresenta o método de estudo para quem está atrasado nos estudos e precisa de resultados rápidos.

## ✨ Características

- **Design Dark Moderno**: Interface elegante com gradientes e animações suaves
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Otimizada para Conversão**: Layout persuasivo com CTAs estratégicos
- **Performance**: Carregamento rápido com imagens otimizadas
- **SEO Friendly**: Meta tags e estrutura semântica

## 🚀 Funcionalidades

### Seções da Página

1. **Header de Urgência**: Contador de dias para o ENEM 2025
2. **Hero Section**: Apresentação do produto com badge animado
3. **Benefícios**: Lista visual dos materiais inclusos
4. **Depoimentos**: Imagens reais de conversas de WhatsApp
5. **Bônus**: Seção destacada com valores dos materiais extras
6. **Planos**: Comparação entre versão básica e completa
7. **Footer**: Informações legais e branding

### Recursos Técnicos

- **Animações CSS**: Efeitos de hover, transições suaves e animações de entrada
- **JavaScript Interativo**: Scroll suave, efeitos visuais e validações
- **Font Awesome**: Ícones modernos e profissionais
- **Google Fonts**: Tipografia Inter para melhor legibilidade
- **Intersection Observer**: Animações baseadas no scroll do usuário

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Flexbox e Grid Layout
  - Custom Properties (variáveis CSS)
  - Gradientes e efeitos de blur
  - Animações e transições
  - Media queries para responsividade
- **JavaScript ES6+**:
  - Manipulação do DOM
  - Event listeners
  - Intersection Observer API
  - Smooth scrolling

## 📱 Responsividade

A página é totalmente responsiva com breakpoints otimizados:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: até 767px
- **Mobile Pequeno**: até 480px

## 🎨 Paleta de Cores

- **Fundo Principal**: `#0a0a0a` (preto escuro)
- **Fundo Secundário**: `#1a1a1a` (cinza muito escuro)
- **Cards**: `#2a2a2a` (cinza escuro)
- **Accent Verde**: `#00ff88` (verde neon)
- **Accent Azul**: `#00a8ff` (azul vibrante)
- **Texto Principal**: `#ffffff` (branco)
- **Texto Secundário**: `#b0b0b0` (cinza claro)

## 📁 Estrutura de Arquivos

```
pagina-de-vendas/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Imagens dos depoimentos
│   ├── WhatsApp-Image-2025-09-24-at-09.02.14-_1__1758730095238-CiiGx8jI.webp
│   ├── WhatsApp-Image-2025-09-24-at-13.52.42_1_1758732852852-D5xrlTkW.webp
│   └── fa416ce9-745a-4f5a-93b9-8f23637d3005_1758733010403-hN0y4gxy.webp
├── .github/
│   └── copilot-instructions.md
└── README.md           # Documentação
```

## 🌐 Como Executar

### Opção 1: Servidor Python (Recomendado)
```bash
# No diretório do projeto
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 2: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

### Opção 3: Abrir Diretamente
Simplesmente abra o arquivo `index.html` no navegador

## 💰 Integração de Pagamento

A página está integrada com a plataforma Cakto para processamento de pagamentos:

- **Versão Básica (R$ 10)**: https://pay.cakto.com.br/399dwy9_585383
- **Versão Completa (R$ 27)**: https://pay.cakto.com.br/3bvthk8_588776

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary-bg: #0a0a0a;
    --accent-green: #00ff88;
    /* ... outras variáveis */
}
```

### Modificar Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua os arquivos na pasta `images/`
- **Links de Pagamento**: Modifique os URLs nos botões de CTA

### Adicionar Seções
1. Adicione o HTML na estrutura desejada
2. Estilize no `styles.css`
3. Adicione funcionalidades no `script.js` se necessário

## 📈 Otimizações de Performance

- **Imagens**: Formato WebP para menor tamanho
- **CSS**: Minificação recomendada para produção
- **JavaScript**: Carregamento assíncrono
- **Fonts**: Preload das fontes principais
- **Lazy Loading**: Imagens carregadas sob demanda

## 🔍 SEO

- Meta tags otimizadas
- Estrutura HTML semântica
- Alt text em imagens
- Schema markup (recomendado implementar)
- Sitemap.xml (para implementação futura)

## 📊 Analytics (Recomendado)

Para monitorar conversões, adicione:
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Hotjar (heatmaps)

## 🚀 Deploy

### Netlify (Recomendado)
1. Faça upload da pasta para o Netlify
2. Configure domínio personalizado
3. Ative HTTPS automático

### Vercel
1. Conecte o repositório GitHub
2. Deploy automático a cada commit
3. Preview de branches

### GitHub Pages
1. Envie para repositório GitHub
2. Ative GitHub Pages nas configurações
3. Acesse via `usuario.github.io/repositorio`

## 📝 Licença

Este projeto foi desenvolvido para fins comerciais. Todos os direitos reservados.

## 👨‍💻 Desenvolvimento

Desenvolvido com foco em:
- **UX/UI**: Interface intuitiva e atrativa
- **Performance**: Carregamento rápido
- **Conversão**: Layout otimizado para vendas
- **Manutenibilidade**: Código limpo e documentado

---

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte a documentação do código ou entre em contato.

**Redação Reta Final** - Conquiste sua aprovação no ENEM 2025! 🎓