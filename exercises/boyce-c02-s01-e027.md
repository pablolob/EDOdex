---
title: "Boyce 2.1 Ejercicio 27"
exercise-id: boyce-c02-s01-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.1, ejercicio 27"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s01i03-p040.png
---

## Enunciado

En cada uno de los problemas 26 y 27, aplique el método del problema 25 para resolver la ecuación diferencial dada.

27. $y' + \frac{1}{x}y = 3 \cos 2x, \quad x > 0$

## Solución

La ecuación es **lineal de primer orden**. Su solución general, válida en $x > 0$, es

$$
y(x) = \frac{3}{2}\sin 2x + \frac{3}{4x}\cos 2x + \frac{C}{x}.
$$

## Resolución

La ecuación está en la forma $y' + p(x)y = g(x)$ con $p(x) = \dfrac{1}{x}$ y $g(x) = 3\cos 2x$.

El método del problema 25 propone una solución de la forma

$$
y = A(x)\exp\!\left[-\int p(x)\,dx\right],
$$

donde $A$ es una función de $x$ que debe satisfacer

$$
A'(x) = g(x)\exp\!\left[\int p(x)\,dx\right].
$$

Como $x > 0$, se tiene $\displaystyle\int p(x)\,dx = \int \frac{1}{x}\,dx = \ln x$, de modo que $\exp\!\left[\int p(x)\,dx\right] = x$ y $\exp\!\left[-\int p(x)\,dx\right] = \dfrac{1}{x}$. Por tanto,

$$
A'(x) = 3\cos 2x \cdot x = 3x\cos 2x.
$$

Integrando por partes, con $u = x$ y $dv = \cos 2x\,dx$,

$$
\begin{aligned}
A(x) &= \int 3x\cos 2x\,dx \\
&= 3\left(\frac{x\sin 2x}{2} + \frac{\cos 2x}{4}\right) + C.
\end{aligned}
$$

Sustituyendo $A(x)$ en la expresión de $y$ resulta

$$
y(x) = \frac{1}{x}\left(\frac{3x\sin 2x}{2} + \frac{3\cos 2x}{4} + C\right)
= \frac{3}{2}\sin 2x + \frac{3}{4x}\cos 2x + \frac{C}{x}.
$$

La solución general contiene la constante arbitraria $C$; no hay soluciones singulares porque la ecuación es lineal.

## Observaciones

El intervalo de validez es $(0, \infty)$. Los coeficientes $p(x) = 1/x$ y $g(x) = 3\cos 2x$ son continuos en ese intervalo, mientras que $x = 0$ queda excluido por el enunciado.

### Método alternativo: factor integrante

Se escribe la ecuación en forma estándar y se multiplica por $\mu(x) = \exp\!\left(\int \frac{1}{x}\,dx\right) = x$:

$$
xy' + y = 3x\cos 2x, \qquad \frac{d}{dx}(xy) = 3x\cos 2x.
$$

Integrando por partes, $xy = \dfrac{3x\sin 2x}{2} + \dfrac{3\cos 2x}{4} + C$, y al despejar $y$ se recupera la solución general.
