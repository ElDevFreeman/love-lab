# love-lab

Coleccion de proyectos romanticos desarrollados con TypeScript, HTML, CSS y Vite.

Cada proyecto es independiente, se ejecuta por separado y se publica individualmente en Vercel.

## Apps

| App | Descripcion |
|-----|-------------|
| `carta-interactiva` | Carta digital animada con sobre interactivo |
| `nuestra-historia` | Timeline romantico con contador de dias juntos |
| `frasco-de-mensajes` | Frasco con mensajes aleatorios de amor |
| `open-when` | Cartas "abre cuando..." para momentos especiales |
| `album-romantico` | Album visual con fotos y recuerdos |

## Ejecutar una app

```bash
cd apps/carta-interactiva
npm install
npm run dev
```

## Publicar en Vercel

Cada app se publica como proyecto independiente:

1. Importar el repositorio `love-lab` en Vercel
2. Crear un nuevo proyecto
3. Configurar:
   - **Root Directory**: `apps/carta-interactiva` (o la app deseada)
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

## Stack

- TypeScript
- HTML5
- CSS3
- Vite
- Node.js + npm

## Arquitectura

- Monorepo simple con apps independientes
- Sin dependencias compartidas obligatorias
- Cada app tiene su propio `package.json`, `tsconfig.json` y `vite.config.ts`
- Cada app compila y se despliega por si sola
