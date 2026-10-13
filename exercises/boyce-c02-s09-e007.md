---
title: "Boyce 2.9 Ejercicio 7"
exercise-id: boyce-c02-s09-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.9, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.homogenea
  - resolver.homogenea-primer-orden
hidden-competencies:
  - seleccionar.metodo.sustitucion
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s09i01-p106.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$\frac{dy}{dx} = \frac{x + 3y}{x - y}$$

## Solución

La ecuación es **homogénea de primer orden**. Su solución general, en forma implícita, es

$$
\ln|x+y| + \frac{2x}{x+y} = C, \qquad x+y \ne 0.
$$

Además, $y = -x$ es una solución singular.

## Resolución

Se escribe el miembro derecho como $f(x,y) = \dfrac{x+3y}{x-y}$. Para $t \ne 0$,

$$
f(tx,ty) = \frac{tx+3ty}{tx-ty} = \frac{t(x+3y)}{t(x-y)} = \frac{x+3y}{x-y} = f(x,y),
$$

de modo que $f$ es homogénea de grado $0$ y la ecuación es **homogénea de primer orden**.

Se aplica la sustitución

$$
y = ux, \qquad y' = u + x u',
$$

donde $u$ es una función de $x$. Al sustituir en la ecuación,

$$
u + x u' = \frac{x + 3ux}{x - ux} = \frac{1 + 3u}{1 - u}.
$$

Al despejar la derivada de $u$,

$$
\begin{aligned}
x u' &= \frac{1+3u}{1-u} - u = \frac{1+3u-u+u^2}{1-u} = \frac{(1+u)^2}{1-u}, \\
\frac{1-u}{(1+u)^2}\,du &= \frac{dx}{x}.
\end{aligned}
$$

La ecuación resultante es **separable**. Para integrar el miembro izquierdo se escribe $1-u = 2-(1+u)$:

$$
\int \frac{1-u}{(1+u)^2}\,du
= \int \left(\frac{2}{(1+u)^2} - \frac{1}{1+u}\right) du
= -\frac{2}{1+u} - \ln|1+u|.
$$

La integración de ambos miembros da

$$
-\frac{2}{1+u} - \ln|1+u| = \ln|x| + C_1.
$$

Al deshacer la sustitución, $1+u = \dfrac{x+y}{x}$, se obtiene

$$
-\frac{2x}{x+y} - \ln\left|\frac{x+y}{x}\right| = \ln|x| + C_1
\quad\Longrightarrow\quad
-\frac{2x}{x+y} - \ln|x+y| = C_1.
$$

Al redefinir la constante, la solución general queda en forma implícita:

$$
\ln|x+y| + \frac{2x}{x+y} = C.
$$

La separación dividió entre $(1+u)^2$, que se anula en $u = -1$. La recta $y = -x$ satisface la ecuación original, pues $y' = -1$ y $\dfrac{x+3(-x)}{x-(-x)} = \dfrac{-2x}{2x} = -1$. Es una solución singular que no pertenece a la familia anterior.

## Observaciones

La ecuación original requiere $x - y \ne 0$, y la solución implícita requiere $x + y \ne 0$. Cada rama de la curva $\ln|x+y| + \dfrac{2x}{x+y} = C$ es una solución válida en un intervalo que no corta las rectas $y = x$ ni $y = -x$.

La solución singular $y = -x$ corresponde a $1 + u = 0$ y aparece como límite de la familia cuando la constante $C$ tiende a infinito.
