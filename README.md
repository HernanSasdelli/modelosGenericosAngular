# Modelos genéricos Angular

Pantallas básicas para copiar y pegar en proyectos nuevos.
El repo es un proyecto Angular que se ejecuta, así cada modelo se prueba antes de copiarlo.

## Ver los modelos

```
npm install
npm start
```

Abrir http://localhost:4200

## Qué hay

| Dónde | Qué es |
|---|---|
| `src/app/pages/login/` | Login con formulario reactivo y validaciones |
| `src/app/pages/registro/` | Registro con repetir contraseña |
| `src/app/pages/validadores/` | `contrasenaSegura` y `clavesIguales` |
| `src/styles.css` | Variables de color + recuadro y campos |
| `src/app/app.routes.ts` | Rutas de ejemplo |

## Copiar un modelo a otro proyecto

1. `ng new nombre-proyecto` (CSS, sin SSR)
2. En `src/app/app.html` dejar solo `<router-outlet />`
3. Copiar `src/styles.css` de acá al proyecto nuevo
4. Copiar las carpetas que hagan falta de `src/app/pages/` a `src/app/pages/` del proyecto nuevo
   (registro necesita también `validadores/`)
5. Agregar las rutas en `src/app/app.routes.ts` como en este repo

## Cambiar los colores

En `src/styles.css`, cambiar solo estas dos:

```css
--principal: #1f5fa8;
--fondo: #eef2f7;
```

## Agregar un modelo nuevo

1. `ng g c pages/nombre-del-modelo`
2. Agregar su ruta en `src/app/app.routes.ts`
3. Probarlo con `npm start`
4. Anotarlo en la tabla de arriba
