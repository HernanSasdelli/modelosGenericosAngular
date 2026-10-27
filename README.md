# Modelos Angular

Pantallas básicas para copiar y pegar en un proyecto nuevo de Angular.
No es un proyecto que se ejecute solo: cada carpeta es un modelo suelto.

## Qué hay

| Carpeta | Qué tiene |
|---|---|
| `estilos/` | `variables.css` (colores) y `formulario.css` (recuadro y campos) |
| `validadores/` | `contrasenaSegura` y `clavesIguales` |
| `login/` | Login con formulario reactivo y validaciones |
| `registro/` | Registro con repetir contraseña |
| `rutas-ejemplo.ts` | Cómo quedan las rutas con las dos pantallas |

## Cómo usarlo en un proyecto nuevo

1. `ng new nombre-proyecto` (CSS, sin SSR)
2. En `src/app/app.html` dejar solo `<router-outlet />`
3. Pegar `estilos/variables.css` y abajo `estilos/formulario.css` en `src/styles.css`
4. Crear los componentes:
   ```
   ng g c pages/login
   ng g c pages/registro
   ```
5. Reemplazar el `.ts`, `.html` y `.css` de cada uno por los de este repo
6. Copiar la carpeta `validadores/` a `src/app/pages/validadores/`
   (si va en otro lado, cambiar el `import` de `registro.ts`)
7. Armar `src/app/app.routes.ts` como en `rutas-ejemplo.ts`

## Cambiar los colores

En `src/styles.css`, cambiar solo estas dos:

```css
--principal: #1f5fa8;
--fondo: #eef2f7;
```

## Pendiente agregar

- más modelos
