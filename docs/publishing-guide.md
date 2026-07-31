# Publicacion en Vercel

Cada app del repositorio `love-lab` se publica por separado como un proyecto independiente.

## Pasos generales

1. Ir a [vercel.com](https://vercel.com) e importar el repositorio `love-lab`
2. Crear un proyecto nuevo para cada app
3. Seleccionar el **Root Directory** de la app deseada:
   - `apps/carta-interactiva`
   - `apps/nuestra-historia`
   - `apps/frasco-de-mensajes`
   - `apps/open-when`
   - `apps/album-romantico`
4. Configurar:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

## Importante

- No publicar desde la raiz del repositorio si solo se desea desplegar una app
- Siempre seleccionar la carpeta correcta dentro de `apps/`
- Cada app es completamente independiente

## Verificar antes de publicar

Antes de hacer deploy, verificar localmente que el build funcione:

```bash
cd apps/nombre-app
npm install
npm run build
npm run preview
```

## Dominios personalizados

Cada proyecto en Vercel puede tener su propio dominio personalizado:
- carta-interactiva -> carta.tudominio.com
- nuestra-historia -> historia.tudominio.com
- etc.

## Variables de entorno

Si alguna app necesita variables de entorno, configurarlas directamente en el panel de Vercel del proyecto correspondiente.
