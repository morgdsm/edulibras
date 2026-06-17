# EduLibras — Contexto do Projeto

## O que é
App web educacional bilíngue (Libras + Português) para uma aluna 
surda do 2º ano do ensino fundamental que não lê, não escreve e 
está aprendendo Libras. Visual lúdico e infantil, sem barreiras 
de texto na navegação.

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite)
- Deploy: morgana.dev (domínio próprio)
- Hospedagem: gratuita (definir — Vercel ou Netlify)

## Status atual
- [x] Scaffold base criado e validado (build + lint + dev ok)
- [x] Design sendo refinado no Figma Make
- [ ] Design aprovado e exportado
- [ ] Implementar telas com base no Figma
- [ ] Autenticação (cadastro por avatar + nome)
- [ ] Trilha de módulos com progresso
- [ ] Módulo de aprendizado com vídeo de Libras
- [ ] Atividade de associação (imagem ↔ sinal)
- [ ] Tela de conclusão com celebração
- [ ] Deploy no morgana.dev

## Próximos passos
1. Aprovar design no Figma Make
2. Implementar Home com trilha de módulos
3. Implementar tela de aprendizado
4. Implementar atividade interativa
5. Configurar deploy automático

## Regras de Commit
Usar Conventional Commits em português:

feat: nova funcionalidade
fix: correção de bug
style: mudança visual/CSS sem lógica
refactor: refatoração sem mudança de comportamento
chore: configuração, dependências, arquivos de projeto
docs: documentação

Exemplos:
feat: adiciona trilha de módulos na home
style: ajusta paleta de cores do design system
chore: configura tailwind com tokens do EduLibras
docs: atualiza status no CLAUDE.md

## Paleta de Cores
- Primary:   #7C3AED (roxo)
- Secondary: #F59E0B (âmbar)
- Success:   #22C55E (verde)
- Error:     #EF4444 (vermelho)
- Background:#FFF7ED (creme)
- Text:      #221830 (quase preto)

## Componentes planejados
- OwlMascot — coruja mascote SVG com expressões
- ModuleCircle — círculo do módulo com ícone SVG cartoon
- TrailPath — caminho sinuoso SVG conectando módulos
- XPBar — barra de progresso com gradiente
- BottomNav — navegação inferior fixa
- AvatarPicker — seletor de avatar no cadastro
- VideoCard — player de vídeo do sinal em Libras
- ActivityCard — atividade de associação

## Contexto pedagógico
- Aluna surda, 7-8 anos, sem fluência em Libras, sem leitura
- Navegação 100% visual — ícone sempre antes do texto
- Feedback sempre animado (acerto = verde + confete, erro = vermelho suave)
- Sem timer, sem pressão, ritmo próprio
- Vídeos/GIFs de Libras: acervo INES ou Spread the Sign
- Avatar VLibras (gov.br) para tradução texto→Libras (gratuito)
