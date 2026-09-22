---
title: "Boyce 2.2 Ejercicio 28"
exercise-id: boyce-c02-s02-e028
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 28"
statement-status: accepted
solution-status: draft
source-images:
  - c02s02i03-p047.png
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - verificar.soluciones-singulares
hidden-competencies:
  - clasificar.bernoulli
prerequisitos:
  - integracion.directa
  - derivacion.regla-cadena
difficulty:
  conceptual: 2
  technical: 2
metadata-status: pending
---

## Enunciado

$x^2y' + 2xy - y^3 = 0, \quad x > 0$

## Solución

La ecuación es una **ecuación de Bernoulli** con exponente $n=3$. La solución general, en forma implícita, es

$$
y^{-2} = \frac{2}{5x} + Cx^4, \qquad x > 0,
$$

equivalente a

$$
y = \pm\sqrt{\frac{5x}{2 + 5Cx^5}}.
$$

Además, $y = 0$ es solución.

## Resolución

Se divide la ecuación entre $x^2$, válido porque $x > 0$:

$$
y' + \frac{2}{x}y = \frac{1}{x^2}y^3.
$$

Esta es una **ecuación de Bernoulli** de la forma $y' + P(x)y = q(x)y^n$, con $P(x) = \dfrac{2}{x}$, $q(x) = \dfrac{1}{x^2}$ y $n = 3$. Se aplica la sustitución $v = y^{1-n} = y^{-2}$, para la cual

$$
v' = -2y^{-3}y'.
$$

Se multiplica la ecuación por $y^{-3}$ y se sustituye:

$$
\begin{aligned}
y^{-3}y' + \frac{2}{x}y^{-2} &= \frac{1}{x^2}, \\
-\frac{1}{2}v' + \frac{2}{x}v &= \frac{1}{x^2}, \\
v' - \frac{4}{x}v &= -\frac{2}{x^2}.
\end{aligned}
$$

La ecuación resultante es lineal de primer orden. Su factor integrante es

$$
\mu(x) = \exp\!\left(\int -\frac{4}{x}\,dx\right) = x^{-4}.
$$

Al multiplicar la ecuación por $\mu(x)$ se obtiene

$$
\frac{d}{dx}\!\left(x^{-4}v\right) = -2x^{-6}.
$$

Integrando,

$$
x^{-4}v = \frac{2}{5}x^{-5} + C,
$$

de donde

$$
v = \frac{2}{5x} + Cx^4.
$$

Se deshace la sustitución con $v = y^{-2}$:

$$
y^{-2} = \frac{2}{5x} + Cx^4 = \frac{2 + 5Cx^5}{5x}.
$$

Al invertir,

$$
y^2 = \frac{5x}{2 + 5Cx^5}, \qquad y = \pm\sqrt{\frac{5x}{2 + 5Cx^5}}.
$$

La división entre $y^3$ y la sustitución exigen $y \neq 0$. La función constante $y = 0$ satisface la ecuación original, por lo que es una solución adicional que no aparece en la familia anterior.

La familia está definida para $x > 0$ mientras $2 + 5Cx^5 \neq 0$. Si $C \ge 0$ es válida en todo $x > 0$; si $C < 0$, el intervalo máximo termina en $x = \left(\dfrac{-2}{5C}\right)^{1/5}$.

## Observaciones

La ecuación es no lineal, de modo que la familia de soluciones contiene las dos ramas del signo $\pm$. La solución $y = 0$ es la solución trivial común a toda ecuación de Bernoulli con $n > 0$; no proviene de ningún valor de $C$ y debe añadirse por separado. Al derivar implícitamente $y^{-2} = \dfrac{2}{5x} + Cx^4$ se recupera la ecuación original, lo que confirma la solución.
