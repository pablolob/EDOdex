---
title: "Boyce 3.4 Ejercicio 34"
exercise-id: boyce-c03-s04-e034
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 34"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.cambio-variable
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i03-p168.png
---

## Enunciado

En cada uno de los problemas 33 a 36 aplique el resultado del problema 32 para resolver la ecuación dada, para $x > 0$.

34. $x^2 y'' + 4xy' + 2y = 0$

## Solución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y del tipo **Cauchy-Euler**. Su solución general, para $x>0$, es

$$
y(x) = \frac{C_1}{x} + \frac{C_2}{x^2},
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

La ecuación es de Euler con $\alpha = 4$ y $\beta = 2$, pues tiene la forma $x^2 y'' + \alpha x y' + \beta y = 0$. El enunciado pide aplicar el resultado del problema 32, según el cual la sustitución $z = \ln x$ transforma la ecuación de Euler en la ecuación con coeficientes constantes

$$
\frac{d^2Y}{dz^2} + (\alpha - 1)\frac{dY}{dz} + \beta Y = 0,
$$

donde $Y(z) = y(e^{z})$. Con $\alpha = 4$ y $\beta = 2$, la ecuación transformada es

$$
\frac{d^2Y}{dz^2} + 3\frac{dY}{dz} + 2Y = 0.
$$

**Ecuación transformada.** La ecuación $Y'' + 3Y' + 2Y = 0$ tiene coeficientes constantes. Su ecuación característica es

$$
r^2 + 3r + 2 = (r + 1)(r + 2) = 0,
$$

cuyas raíces reales distintas son $r = -1$ y $r = -2$. Por tanto, la solución general en la variable $z$ es

$$
Y(z) = C_1 e^{-z} + C_2 e^{-2z}.
$$

**Regreso a la variable original.** Se deshace el cambio con $z = \ln x$ y se usan las identidades $e^{-z} = e^{-\ln x} = x^{-1}$ y $e^{-2z} = x^{-2}$:

$$
y(x) = Y(\ln x) = C_1 x^{-1} + C_2 x^{-2}.
$$

**Comprobación.** Se derivan la solución y sus derivadas sucesivas:

$$
\begin{aligned}
y' &= -C_1 x^{-2} - 2C_2 x^{-3}, \\
y'' &= 2C_1 x^{-3} + 6C_2 x^{-4}.
\end{aligned}
$$

Al sustituir en la ecuación original,

$$
\begin{aligned}
x^2 y'' + 4xy' + 2y
&= \left(2C_1 x^{-1} + 6C_2 x^{-2}\right) \\
&\quad + \left(-4C_1 x^{-1} - 8C_2 x^{-2}\right) \\
&\quad + \left(2C_1 x^{-1} + 2C_2 x^{-2}\right) = 0.
\end{aligned}
$$

Los coeficientes de $x^{-1}$ y de $x^{-2}$ se cancelan por separado. La solución satisface la ecuación para todo $x > 0$.

## Observaciones

El dominio declarado $x > 0$ es necesario para que $z = \ln x$ esté definida y el cambio sea invertible. Para $x < 0$ la solución análoga se obtiene con $z = \ln(-x)$, caso que queda fuera del enunciado.

La solución tiene la forma general de las ecuaciones de Euler con raíces características reales distintas: $y = C_1 x^{r_1} + C_2 x^{r_2}$.
