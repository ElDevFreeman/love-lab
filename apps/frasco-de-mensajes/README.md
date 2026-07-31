# frasco-de-mensajes

Frasco digital con mensajes romanticos aleatorios organizados por categorias.

## Funcionalidades
- Frasco visual con papelitos de colores
- Boton para sacar un mensaje aleatorio
- Categorias: razones de amor, animos, sonrisas, recuerdos
- Animaciones suaves y estilo tierno
- Tarjetas con mensajes personalizados

## Ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalizar

Editar los archivos en `src/data/` para cambiar los mensajes:
- `reasonsILoveYou.ts` - Razones por las que te amo
- `openWhenHappy.ts` - Cuando quieras sonreir
- `openWhenSad.ts` - Cuando estes triste
- `randomMemories.ts` - Recuerdos aleatorios

## Deploy en Vercel
- Root Directory: `apps/frasco-de-mensajes`
- Framework: Vite
- Build Command: `npm run build`
- Output: `dist`
