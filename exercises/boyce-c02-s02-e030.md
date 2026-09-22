---
title: "Boyce 2.2 Ejercicio 30"
exercise-id: boyce-c02-s02-e030
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 30"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
hidden-competencies:
  - clasificar.bernoulli
prerequisitos:
  - derivacion.regla-cadena
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s02i03-p047.png
---

## Enunciado

$y' = \epsilon y - \sigma y^3, \, \epsilon > 0 \text{ y } \sigma > 0$. Esta ecuación se presenta en el estudio de la estabilidad del flujo de fluidos.

## Solución

La ecuación es de **Bernoulli** con $n = 3$. Su solución general, para $y \neq 0$, es

$$
y(x) = \pm\left(\frac{\sigma}{\epsilon} + Ce^{-2\epsilon x}\right)^{-1/2},
$$

donde $C$ es una constante arbitraria. Además, $y(x) \equiv 0$ es una solución singular.

## Resolución

La ecuación se escribe en la forma de Bernoulli $y' + p(x)y = q(x)y^n$:

$$
y' - \epsilon y = -\sigma y^3,
$$

de modo que $p(x) = -\epsilon$, $q(x) = -\sigma$ y $n = 3$.

Se aplica la **sustitución de Bernoulli** $v = y^{1-n} = y^{-2}$, válida para $y \neq 0$. Al derivar,

$$
v' = -2y^{-3}y'.
$$

Multiplicando la ecuación por $-2y^{-3}$,

$$
\begin{aligned}
v' &= -2y^{-3}\left(\epsilon y - \sigma y^3\right) \\
&= -2\epsilon y^{-2} + 2\sigma \\
&= -2\epsilon v + 2\sigma.
\end{aligned}
$$

Así, la función $v$ satisface la ecuación lineal

$$
v' + 2\epsilon v = 2\sigma,
$$

cuyo **factor integrante** es $\mu(x) = e^{2\epsilon x}$. Al multiplicar por $\mu(x)$,

$$
\frac{d}{dx}\!\left(e^{2\epsilon x}v\right) = 2\sigma e^{2\epsilon x}.
$$

Integrando ambos miembros,

$$
e^{2\epsilon x}v = \frac{\sigma}{\epsilon}e^{2\epsilon x} + C,
$$

de donde

$$
v = \frac{\sigma}{\epsilon} + Ce^{-2\epsilon x}.
$$

Al invertir el cambio $v = y^{-2}$ resulta

$$
y^2 = \frac{1}{v} = \frac{1}{\dfrac{\sigma}{\epsilon} + Ce^{-2\epsilon x}},
$$

y por tanto

$$
y(x) = \pm\left(\frac{\sigma}{\epsilon} + Ce^{-2\epsilon x}\right)^{-1/2}.
$$

El signo queda determinado por la condición inicial. Para $C = 0$ se recuperan las soluciones constantes $y = \pm\sqrt{\epsilon/\sigma}$.

Comprobación: al derivar $y^{-2} = \dfrac{\sigma}{\epsilon} + Ce^{-2\epsilon x}$ respecto de $x$ se obtiene $-2y^{-3}y' = -2\epsilon Ce^{-2\epsilon x}$. Como $Ce^{-2\epsilon x} = y^{-2} - \dfrac{\sigma}{\epsilon}$,

$$
-2y^{-3}y' = -2\epsilon\left(y^{-2} - \frac{\sigma}{\epsilon}\right) = -2\epsilon y^{-2} + 2\sigma.
$$

Dividiendo entre $-2y^{-3}$,

$$
y' = \epsilon y - \sigma y^3,
$$

que es la ecuación dada.

La sustitución $v = y^{-2}$ exige $y \neq 0$ y deja fuera la solución $y \equiv 0$, que satisface la ecuación y no se obtiene de la familia anterior para ningún valor finito de $C$; es una solución singular. El radicando es positivo para todo $x$ cuando $C \geq 0$; cuando $C < 0$, la solución real existe en el intervalo $x > \dfrac{1}{2\epsilon}\ln\!\left(\dfrac{\epsilon |C|}{\sigma}\right)$.

## Observaciones

La ecuación es autónoma y tiene los puntos de equilibrio $y = 0$ y $y = \pm\sqrt{\epsilon/\sigma}$. Las soluciones con $|y(0)| \leq \sqrt{\epsilon/\sigma}$ están definidas para todo $x \geq 0$ y tienden a $\pm\sqrt{\epsilon/\sigma}$ según el signo inicial; las soluciones con $|y(0)| > \sqrt{\epsilon/\sigma}$ presentan una asíntota vertical en tiempo finito. Este comportamiento de saturación es el que se estudia en el contexto de estabilidad del flujo de fluidos.
