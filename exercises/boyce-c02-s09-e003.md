---
title: "Boyce 2.9 Ejercicio 3"
exercise-id: boyce-c02-s09-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.9, ejercicio 3"
topics:
  - primer-orden
competencies:
  - clasificar.homogenea
  - resolver.homogenea-primer-orden
hidden-competencies:
  - seleccionar.metodo.sustitucion
prerequisitos:
  - derivacion.producto
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 2
solution-status: draft
statement-status: accepted
source-images:
  - c02s09i01-p106.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$\frac{dy}{dx} = \frac{x^2 + xy + y^2}{x^2}$$

## Solución

La ecuación es **homogénea de primer orden**. Su solución general es

$$
y = x\tan\!\left(\ln|x| + C\right).
$$

Está definida para $x \ne 0$ y en cada intervalo que no contenga puntos donde $\ln|x| + C = \dfrac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$.

## Resolución

Sea $f(x,y) = \dfrac{x^2 + xy + y^2}{x^2}$. Para $t \ne 0$,

$$
f(tx,ty) = \frac{t^2x^2 + t^2xy + t^2y^2}{t^2x^2} = \frac{x^2 + xy + y^2}{x^2} = f(x,y),
$$

por lo que la ecuación es homogénea. Se aplica la **sustitución** $y = ux$, con

$$
y' = u + xu',
$$

donde $u$ es una función de $x$. Al sustituir en la ecuación,

$$
u + xu' = \frac{x^2 + x(ux) + (ux)^2}{x^2} = 1 + u + u^2.
$$

Los términos en $u$ se cancelan y queda una ecuación separable:

$$
xu' = 1 + u^2, \qquad \frac{du}{1 + u^2} = \frac{dx}{x}.
$$

Se integran ambos miembros:

$$
\arctan u = \ln|x| + C.
$$

Al despejar $u$ y deshacer la sustitución, $y = ux$, resulta

$$
y = x\tan\!\left(\ln|x| + C\right).
$$

La división por $x$ exige $x \ne 0$; la división por $1 + u^2$ no impone restricción porque $1 + u^2 > 0$. La solución es válida en todo intervalo con $x \ne 0$ que no contenga puntos donde $\ln|x| + C = \dfrac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$, pues allí la tangente no está definida.

## Observaciones

No existen soluciones singulares. El factor $1 + u^2$ nunca se anula, de modo que la separación de variables no descarta ninguna solución.

La solución admite también la forma implícita

$$
\arctan\!\left(\frac{y}{x}\right) = \ln|x| + C,
$$

que evita introducir la tangente.
