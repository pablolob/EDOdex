---
title: "Boyce 3.4 Ejercicio 33"
exercise-id: boyce-c03-s04-e033
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 33"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.cambio-variable
  - resolver.lineal.homogenea.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i03-p168.png
---

## Enunciado

En cada uno de los problemas 33 a 36 aplique el resultado del problema 32 para resolver la ecuación dada, para $x > 0$.

33. $x^2 y'' + xy' + y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y del tipo **Cauchy-Euler**. Su solución general, para $x>0$, es

$$
y(x) = C_1\cos(\ln x) + C_2\sin(\ln x),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es una ecuación de Euler con $\alpha = 1$ y $\beta = 1$, pues tiene la forma $x^2 y'' + \alpha x y' + \beta y = 0$. El enunciado indica aplicar el resultado del problema 32, según el cual la sustitución $z = \ln x$ transforma la ecuación de Euler en la ecuación con coeficientes constantes

$$
\frac{d^2Y}{dz^2} + (\alpha - 1)\frac{dY}{dz} + \beta Y = 0,
$$

donde $Y(z) = y(e^{z})$. Con $\alpha = 1$ y $\beta = 1$, la ecuación transformada es

$$
\frac{d^2Y}{dz^2} + Y = 0.
$$

**Ecuación transformada.** La ecuación $Y'' + Y = 0$ tiene coeficientes constantes. Su ecuación característica es $r^2 + 1 = 0$, cuyas raíces son $r = \pm i$. Como las raíces son complejas conjugadas puras, la solución general en la variable $z$ es

$$
Y(z) = C_1\cos z + C_2\sin z.
$$

**Regreso a la variable original.** Se deshace el cambio con $z = \ln x$:

$$
y(x) = Y(\ln x) = C_1\cos(\ln x) + C_2\sin(\ln x).
$$

**Comprobación.** Se derivan la solución y sus derivadas sucesivas:

$$
\begin{aligned}
y' &= -\frac{C_1}{x}\sin(\ln x) + \frac{C_2}{x}\cos(\ln x), \\
y'' &= \frac{1}{x^2}\bigl[(C_1 - C_2)\sin(\ln x) - (C_1 + C_2)\cos(\ln x)\bigr].
\end{aligned}
$$

Al sustituir en la ecuación original,

$$
\begin{aligned}
x^2 y'' + xy' + y
&= \bigl[(C_1 - C_2)\sin(\ln x) - (C_1 + C_2)\cos(\ln x)\bigr] \\
&\quad + \bigl[-C_1\sin(\ln x) + C_2\cos(\ln x)\bigr] \\
&\quad + \bigl[C_1\cos(\ln x) + C_2\sin(\ln x)\bigr] = 0.
\end{aligned}
$$

Los términos en seno y en coseno se cancelan por separado. La solución satisface la ecuación para todo $x > 0$.

## Observaciones

El dominio declarado $x > 0$ es necesario para que $z = \ln x$ esté definida y el cambio sea invertible. Para $x < 0$ la solución análoga se obtiene con $z = \ln(-x)$, pero ese caso queda fuera del enunciado.

La solución tiene la forma general de las ecuaciones de Euler con raíces características complejas: $x^{a}\bigl[C_1\cos(b\ln x) + C_2\sin(b\ln x)\bigr]$, con $a = 0$ y $b = 1$.

