---
title: "Boyce 2.2 Ejercicio 29"
exercise-id: boyce-c02-s02-e029
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 29"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.directa
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s02i03-p047.png
---

## Enunciado

$y' = ry - ky^2, \, r > 0 \text{ y } k > 0$. Esta ecuación es importante en la dinámica de las poblaciones y se analiza con detalle en la sección 2.6.

## Solución

La ecuación es de **primer orden**, **no lineal** y **separable**. Su solución general es

$$
y(x) = \frac{r}{k + C e^{-rx}},
$$

con $C$ constante arbitraria. La solución de equilibrio $y \equiv 0$ se obtiene como límite $C \to \infty$ (no es una solución singular en sentido estricto), y la solución de equilibrio $y \equiv r/k$ corresponde a $C = 0$.

## Resolución

La ecuación es autónoma y separable. Al factorizar el miembro derecho,

$$
y' = y(r - ky),
$$

se separan las variables para $y \ne 0$ y $y \ne r/k$:

$$
\frac{dy}{y(r - ky)} = dx.
$$

Se descompone el integrando en fracciones parciales. Con constantes $A$ y $B$ tales que

$$
\frac{1}{y(r - ky)} = \frac{A}{y} + \frac{B}{r - ky},
$$

al multiplicar por $y(r - ky)$ resulta $1 = A(r - ky) + By$. Igualando los coeficientes de las potencias de $y$ se obtiene $A = \dfrac{1}{r}$ y $B = \dfrac{k}{r}$, de modo que

$$
\frac{1}{y(r - ky)} = \frac{1}{r}\left(\frac{1}{y} + \frac{k}{r - ky}\right).
$$

Integrando ambos miembros,

$$
\begin{aligned}
\frac{1}{r}\int \left(\frac{1}{y} + \frac{k}{r - ky}\right) dy &= \int dx, \\
\frac{1}{r}\left(\ln|y| - \ln|r - ky|\right) &= x + C_1, \\
\frac{1}{r}\ln\left|\frac{y}{r - ky}\right| &= x + C_1.
\end{aligned}
$$

Multiplicando por $r$ y aplicando la exponencial,

$$
\left|\frac{y}{r - ky}\right| = e^{rx + rC_1}
\quad\Longrightarrow\quad
\frac{y}{r - ky} = A e^{rx}, \qquad A \ne 0,
$$

donde la constante arbitraria $A$ absorbe el signo. Despejando $y$,

$$
y = A e^{rx}(r - ky)
\;\Longrightarrow\;
y\left(1 + Ak e^{rx}\right) = Ar e^{rx}
\;\Longrightarrow\;
y = \frac{Ar e^{rx}}{1 + Ak e^{rx}}.
$$

Dividiendo numerador y denominador entre $Ak e^{rx}$ y renombrando la constante $C = \dfrac{1}{A} \ne 0$, se obtiene

$$
y(x) = \frac{r}{k + C e^{-rx}}, \qquad C \ne 0.
$$

Las soluciones constantes que se descartaron al separar variables son los puntos de equilibrio $y = 0$ y $y = r/k$. El valor $y = r/k$ se recupera en la familia con $C = 0$, que se admite por continuidad. En cambio, $y = 0$ no corresponde a ningún valor finito de $C$: es el límite $C \to \infty$ (equivalentemente $A \to 0$) y es una solución de equilibrio, no una solución singular en sentido estricto.

La familia está definida donde $k + Ce^{-rx} \ne 0$. Si $C \ge 0$, el denominador es positivo para todo $x$ y la solución es válida en $\mathbb{R}$. Si $C < 0$, el denominador se anula en $x = \dfrac{1}{r}\ln\!\left(-\dfrac{C}{k}\right)$, de modo que el intervalo de validez queda acotado por ese punto. La solución de equilibrio $y = 0$ está definida en todo $\mathbb{R}$.

## Observaciones

La ecuación es el modelo logístico de la dinámica de poblaciones, con tasa de crecimiento intrínseca $r$ y capacidad de carga $r/k$. Su análisis cualitativo detallado se desarrolla en la sección 2.6.

### Método alternativo: sustitución de Bernoulli

Al escribir la ecuación como $y' - ry = -ky^2$, se reconoce una ecuación de Bernoulli con $n = 2$. La sustitución $v = y^{1-n} = y^{-1}$ (con $v' = -y^{-2}y'$) reduce la ecuación, tras dividir entre $y^2$, a la ecuación lineal

$$
v' + rv = k,
$$

cuyo factor integrante es $\mu(x) = e^{rx}$. Integrando se obtiene $v = \dfrac{k}{r} + Ce^{-rx}$ y, al despejar $y = 1/v$, la misma familia $y = \dfrac{r}{k + Ce^{-rx}}$.
