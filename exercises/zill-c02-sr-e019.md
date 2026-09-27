---
title: "Zill Repaso C2 Ejercicio 19"
exercise-id: zill-c02-sr-e019
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 19"
language: es
competencies:
  - resolver-analiticamente.variables-separables
  - verificar.solucion
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.directa
  - integracion.sustitucion
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri02-p095.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$(y^2 + 1) \, dx = y \sec^2 x \, dy$$

## Solución

La ecuación es **de primer orden** y **separable**. Su solución general, en forma implícita, es

$$
\ln(y^2+1) = x + \frac{1}{2}\sin 2x + C.
$$

Despejando $y$ se obtienen las dos ramas explícitas

$$
y(x) = \pm\sqrt{C_1 e^{\,x + \frac{1}{2}\sin 2x} - 1},
$$

con $C_1 > 0$.

## Resolución

La ecuación admite **separación de variables**. Se agrupan los términos de la variable $y$ en un miembro y los de $x$ en el otro:

$$
\frac{dx}{\sec^2 x} = \frac{y}{y^2+1}\, dy
\quad\Longrightarrow\quad
\cos^2 x\, dx = \frac{y}{y^2+1}\, dy.
$$

La división por $y^2+1$ y por $\sec^2 x$ es válida, pues ambos factores cumplen $y^2+1 \ge 1$ y $\sec^2 x \ge 1$. No se pierde ninguna solución en el proceso.

Se integran ambos miembros. En el miembro izquierdo se emplea la identidad $\cos^2 x = \dfrac{1+\cos 2x}{2}$:

$$
\int \cos^2 x\, dx = \frac{x}{2} + \frac{\sin 2x}{4}.
$$

En el miembro derecho se aplica la sustitución $u = y^2+1$, con $du = 2y\,dy$:

$$
\int \frac{y}{y^2+1}\, dy = \frac{1}{2}\ln(y^2+1).
$$

Al igualar los resultados,

$$
\frac{x}{2} + \frac{\sin 2x}{4} = \frac{1}{2}\ln(y^2+1) + C.
$$

Multiplicando por $2$ y renombrando la constante arbitraria, la solución general queda en forma implícita:

$$
\ln(y^2+1) = x + \frac{1}{2}\sin 2x + C.
$$

Exponenciando, con $C_1 = e^{C} > 0$,

$$
y^2+1 = C_1 e^{\,x + \frac{1}{2}\sin 2x}.
$$

Al despejar $y$ resultan las dos ramas correspondientes a los dos signos de la raíz:

$$
y(x) = \pm\sqrt{C_1 e^{\,x + \frac{1}{2}\sin 2x} - 1}.
$$

La familia se comprueba por derivación implícita de $\ln(y^2+1) - x - \dfrac{1}{2}\sin 2x = C$. Derivando respecto de $x$,

$$
\frac{2y\,y'}{y^2+1} - 1 - \cos 2x = 0.
$$

Con $1 + \cos 2x = 2\cos^2 x$ se despeja

$$
y' = \frac{(y^2+1)\cos^2 x}{y},
$$

que coincide con $\dfrac{dy}{dx}$ obtenida de la ecuación original. Cada rama es solución en todo intervalo donde el radicando es positivo.

## Observaciones

No hay soluciones singulares: los factores por los que se divide, $y^2+1$ y $\sec^2 x$, nunca se anulan. La ecuación original no está definida donde $\sec^2 x$ carece de valor, es decir, en $x = \dfrac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$; por ello el intervalo de validez de una solución es un intervalo que no contiene esos puntos y en el que $C_1 e^{\,x + \frac{1}{2}\sin 2x} > 1$.

La forma implícita y la explícita usan constantes distintas: $C_1 = e^{C}$. La rama elegida la fija el signo de $y$ en un punto dado cuando se impone una condición inicial.
