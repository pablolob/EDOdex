---
title: "Boyce 2.9 Ejercicio 4"
exercise-id: boyce-c02-s09-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.9, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.homogenea
  - resolver-analiticamente.homogeneas-primer-orden
prerequisitos:
  - derivacion.producto
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s09i01-p106.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$\frac{dy}{dx} = \frac{x^2 + 3y^2}{2xy}$$

## Solución

La ecuación es **homogénea de primer orden**. Su solución general, en forma implícita, es

$$
x^2 + y^2 = Cx^3,
$$

con $C$ constante arbitraria no nula. Despejando $y$,

$$
y = \pm\sqrt{x^2\left(Cx - 1\right)}.
$$

## Resolución

Se escribe el miembro derecho como $f(x,y) = \dfrac{x^2+3y^2}{2xy}$. Al evaluar en $(tx,ty)$,

$$
f(tx,ty) = \frac{t^2x^2 + 3t^2y^2}{2t^2xy} = \frac{x^2+3y^2}{2xy} = f(x,y),
$$

luego $f$ es homogénea de grado $0$ y la ecuación también lo es.

Se aplica la sustitución $y = ux$, donde $u$ es función de $x$. Entonces $y' = u + xu'$ y la ecuación resulta

$$
u + xu' = \frac{x^2 + 3u^2x^2}{2x(ux)} = \frac{1+3u^2}{2u}.
$$

Al despejar $xu'$,

$$
xu' = \frac{1+3u^2}{2u} - u = \frac{1+u^2}{2u}.
$$

Con $x\ne 0$ y $u\ne 0$, se separan las variables:

$$
\frac{2u}{1+u^2}\,du = \frac{dx}{x}.
$$

La integración de ambos miembros da

$$
\ln\!\left(1+u^2\right) = \ln|x| + c.
$$

Al exponenciar y renombrar la constante, $1+u^2 = Cx$. Se deshace la sustitución, $u = y/x$:

$$
1 + \frac{y^2}{x^2} = Cx
\quad\Longrightarrow\quad
x^2 + y^2 = Cx^3.
$$

## Observaciones

La ecuación original no está definida en $x = 0$ ni en $y = 0$, de modo que cada solución es válida en un intervalo que no contiene esos puntos. En la forma explícita $y = \pm\sqrt{x^2(Cx-1)}$ el radicando exige $Cx - 1 \ge 0$: cada rama es válida en la semirrecta $(1/C, \infty)$ si $C>0$, o en $(-\infty, 1/C)$ si $C<0$.

No hay soluciones singulares que rescatar. La recta $y=0$ no satisface la ecuación porque el miembro derecho no está definido sobre ella, y la familia obtenida no pierde ninguna solución al separar las variables.
