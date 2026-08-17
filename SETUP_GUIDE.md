# Configuração de Desenvolvimento - PlanejaI

## ✅ Configurações Realizadas

### 1. **Prettier** - Formatação de Código

- ✅ Instalado e configurado
- ✅ Plugin para Tailwind CSS ativo
- ✅ Formata automaticamente ao salvar
- ✅ Espaçamento: 2 espaços por indentação
- ✅ Line width: 100 caracteres

**Arquivo config:** `.prettierrc`

### 2. **ESLint** - Linting de Código

- ✅ Configurado com suporte a TypeScript e React
- ✅ Integrado com Prettier (sem conflitos)
- ✅ Remove automaticamente variáveis não utilizadas
- ✅ Detecta imports não utilizados

**Arquivo config:** `eslint.config.js`

### 3. **VSCode** - Editor de Código

- ✅ Configurado para formato automático ao salvar
- ✅ Prettier como formatador padrão
- ✅ ESLint com correções automáticas
- ✅ Organização automática de imports
- ✅ Remoção automática de imports não utilizados
- ✅ Tab size: 2 espaços (sem tabs de verdade)
- ✅ Régua em 100 caracteres
- ✅ Auto-save ativado (após 1 segundo de inatividade)

**Arquivo config:** `.vscode/settings.json`

### 4. **Alias de Path** - Importações Simplificadas

- ✅ Alias `@/` aponta para a pasta `src/`
- ✅ Configurado em `vite.config.ts`
- ✅ Configurado em `tsconfig.app.json`

**Exemplos de uso:**

```typescript
// ✅ Correto (com alias)
import { greet } from '@/utils/example';

// ❌ Evitar (sem alias)
import { greet } from '../utils/example';
import { greet } from '../../src/utils/example';
```

### 5. **Plugin Prettier Tailwind** - Organização de Classes

- ✅ Instalado e ativo no `.prettierrc`
- ✅ Organiza automaticamente as classes Tailwind CSS
- ✅ Aplica a ordem recomendada pelo Tailwind

**Exemplo:**

```tsx
// Antes (desordenado)
<div className="text-lg p-4 bg-blue-500 font-bold rounded"></div>

// Depois (organizado automaticamente)
<div className="rounded bg-blue-500 p-4 font-bold text-lg"></div>
```

## 📦 Dependências Instaladas

```
prettier
prettier-plugin-tailwindcss
eslint-config-prettier
```

## 🚀 Como Usar

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Lint com auto-correção (ESLint)
npm run lint

# Formatar código (Prettier)
npm run format

# Preview da build
npm run preview
```

### Fluxo de Trabalho Automático

1. **Ao salvar um arquivo (.ts, .tsx, .js, .json)**:
   - ✅ Prettier formata automaticamente
   - ✅ ESLint aplica correções automáticas
   - ✅ Imports são organizados
   - ✅ Variáveis não utilizadas são detectadas

2. **VSCode detectará erros**:
   - 🔴 ESLint violations
   - 🟡 TypeScript warnings
   - 📋 Problemas de formatação (corrigidos ao salvar)

## 🔧 Extensões VSCode Recomendadas

As seguintes extensões são recomendadas (já listadas em `.vscode/extensions.json`):

- **Prettier - Code Formatter** (esbenp.prettier-vscode)
- **ESLint** (dbaeumer.vscode-eslint)
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
- **Makefile Tools** (ms-vscode.makefile-tools)

Para instalar as extensões recomendadas:

1. Abra a paleta de comandos (Ctrl+Shift+P / Cmd+Shift+P)
2. Digite: "Show Recommended Extensions"
3. Clique em "Install" para cada extensão

## 📝 Exemplos de Padrão de Código

### Importações Organizadas

```typescript
// Imports nativas do Node
import path from 'path';

// Imports de terceiros
import React from 'react';
import { defineConfig } from 'vite';

// Imports internos (usando alias @/)
import { greet } from '@/utils/example';
import { MyComponent } from '@/components/MyComponent';

// Exports
export default defineConfig({
  // ...
});
```

### Variáveis Não Utilizadas (Detectadas)

```typescript
// ❌ ESLint detectará isso como erro
const unused = 'value';

// ✅ Use underscore para variáveis intencionalmente não usadas
const _intentional = 'value';
```

### Classes Tailwind (Organizadas Automaticamente)

```tsx
// VSCode + Prettier + Tailwind Plugin organizarão automaticamente
<div className="mt-4 rounded bg-blue-500 p-2 text-lg font-bold hover:bg-blue-600">Conteúdo</div>
```

## ⚠️ Troubleshooting

### "Prettier não está formatando ao salvar"

1. Verifique se a extensão Prettier está instalada
2. Abra um arquivo `.ts` ou `.tsx`
3. Pressione `Cmd+Shift+P` (Mac) ou `Ctrl+Shift+P` (Windows/Linux)
4. Digite "Format Document"
5. Selecione "Prettier - Code Formatter"

### "ESLint não está funcionando"

1. Verifique se a extensão ESLint está instalada
2. Recarregue a janela do VSCode (Cmd+R ou Ctrl+Shift+F5)
3. Abra a aba "ESLint" na parte inferior do editor

### "Alias @/ não está funcionando"

1. Verifique se `vite.config.ts` possui a configuração
2. Verifique se `tsconfig.app.json` possui a configuração de paths
3. Reinicie o VSCode

## 🎯 Configuração Concluída!

Seu projeto agora possui:

- ✅ Formatação automática com Prettier
- ✅ Linting com ESLint
- ✅ Organização automática de classes Tailwind
- ✅ Imports organizados e limpos
- ✅ Alias `@/` para imports mais limpos
- ✅ Auto-save ativado
- ✅ VSCode completamente configurado
