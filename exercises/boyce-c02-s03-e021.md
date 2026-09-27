---
title: "Boyce 2.3 Ejercicio 21"
exercise-id: boyce-c02-s03-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - algebra.division-polinomios
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Resuelva la ecuación

$$\frac{dy}{dx} = \frac{ay + b}{cy + d},$$

en donde $a$, $b$, $c$ y $d$ son constantes.

## Solución

La ecuación es **de primer orden** y **separable**. Para $a \neq 0$ y $ay + b \neq 0$, su solución general en forma implícita es

$$
\frac{c}{a}\,y + \frac{ad - bc}{a^{2}}\ln|ay + b| = x + C.
$$

Además, si $ad \neq bc$, la función constante

$$
y(x) = -\frac{b}{a}
$$

es solución de la ecuación.

## Resolución

La ecuación es **de primer orden** y **separable**, porque el miembro derecho depende únicamente de $y$. Se separan las variables tratando $y$ como variable independiente:

$$
\frac{cy + d}{ay + b}\,dy = dx, \qquad ay + b \neq 0.
$$

Para integrar el miembro izquierdo se divide el cociente. Con $a \neq 0$,

$$
\frac{cy + d}{ay + b} = \frac{c}{a} + \frac{ad - bc}{a(ay + b)}.
$$

Integrando ambos miembros,

$$
x = \int \frac{cy + d}{ay + b}\,dy
  = \frac{c}{a}\,y + \frac{ad - bc}{a^{2}}\ln|ay + b| + C.
$$

Al reordenar se obtiene la solución general en forma implícita:

$$
\frac{c}{a}\,y + \frac{ad - bc}{a^{2}}\ln|ay + b| = x + C.
$$

Se comprueba por derivación implícita de esta relación respecto de $x$. Como $y$ depende de $x$,

$$
\left( \frac{c}{a} + \frac{ad - bc}{a(ay + b)} \right) y' = 1
\quad\Longrightarrow\quad
\frac{cy + d}{ay + b}\,y' = 1
\quad\Longrightarrow\quad
y' = \frac{ay + b}{cy + d},
$$

que es la ecuación dada.

La separación exige $ay + b \neq 0$ y deja fuera el caso en que este factor se anula. Si $ay + b = 0$, es decir $y = -b/a$, el miembro derecho de la ecuación se anula; la función constante $y = -b/a$ es solución cuando $ad \neq bc$. Esta solución no pertenece a la familia implícita anterior, porque el logaritmo diverge en $ay + b = 0$, de modo que es una solución singular. La solución general está definida en todo intervalo que no contenga puntos donde $ay + b = 0$.

## Observaciones

La fórmula principal supone $a \neq 0$. Cuando $ad = bc$, el término logarítmico se anula y la solución se reduce a la recta $y = (a/c)x + C$ si $c \neq 0$. Cuando $a = 0$ y $b \neq 0$, la ecuación es $y' = b/(cy + d)$ y su solución implícita es

$$
\frac{c}{2}\,y^{2} + d\,y = b\,x + C.
$$
