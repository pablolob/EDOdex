---
title: "Boyce 3.4 Ejercicio 19"
exercise-id: boyce-c03-s04-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 19"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - clasificar.coeficientes-constantes
  - clasificar.lineal-hom
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 17 a 22, resuelva el problema con valor inicial dado.

19. $y'' - 2y' + 5y = 0, \quad y(\pi/2) = 0, \quad y'(\pi/2) = 2$

## Solución

La solución del problema con valor inicial es

$$
y(x) = -e^{x-\pi/2}\sin(2x), \qquad x \in \mathbb{R}.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **segundo orden** y con **coeficientes constantes**. Se ensaya $y = e^{rx}$; al sustituir, el factor $e^{rx}$ no se anula y se obtiene la **ecuación característica**

$$
r^2 - 2r + 5 = 0.
$$

Sus raíces son complejas conjugadas:

$$
r = \frac{2 \pm \sqrt{4 - 20}}{2} = \frac{2 \pm 4i}{2} = 1 \pm 2i.
$$

Con parte real $\alpha = 1$ y parte imaginaria $\beta = 2$, la solución general es

$$
y(x) = e^{x}\left(C_1\cos(2x) + C_2\sin(2x)\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias. La derivada es

$$
\begin{aligned}
y'(x) &= e^{x}\left(C_1\cos(2x) + C_2\sin(2x)\right) + e^{x}\left(-2C_1\sin(2x) + 2C_2\cos(2x)\right) \\
&= e^{x}\left[\left(C_1 + 2C_2\right)\cos(2x) + \left(C_2 - 2C_1\right)\sin(2x)\right].
\end{aligned}
$$

Se aplican las condiciones iniciales. En $x = \pi/2$ se cumple $\cos\pi = -1$ y $\sin\pi = 0$. De $y(\pi/2) = 0$ se obtiene

$$
e^{\pi/2}\left(C_1(-1) + C_2\cdot 0\right) = -C_1 e^{\pi/2} = 0 \quad \Longrightarrow \quad C_1 = 0.
$$

Con $C_1 = 0$ la solución y su derivada se reducen a

$$
y(x) = C_2 e^{x}\sin(2x), \qquad y'(x) = C_2 e^{x}\left(2\cos(2x) + \sin(2x)\right).
$$

Al imponer $y'(\pi/2) = 2$ resulta

$$
C_2 e^{\pi/2}\left(2\cos\pi + \sin\pi\right) = -2C_2 e^{\pi/2} = 2 \quad \Longrightarrow \quad C_2 = -e^{-\pi/2}.
$$

Por tanto, la solución del problema con valor inicial es

$$
y(x) = -e^{-\pi/2} e^{x}\sin(2x) = -e^{x-\pi/2}\sin(2x).
$$

La comprobación confirma el resultado: $y(\pi/2) = 0$, y con $y'(x) = -e^{x-\pi/2}\left(\sin(2x) + 2\cos(2x)\right)$ se tiene $y'(\pi/2) = -1\cdot(2)(-1) = 2$.

## Observaciones

La parte real $\alpha = 1$ es positiva, de modo que el factor $e^{x}$ amplifica las oscilaciones de periodo $\pi$: la solución presenta oscilaciones de amplitud creciente y no está acotada cuando $x \to \infty$.

La solución está definida para todo $x \in \mathbb{R}$. Al ser la ecuación lineal homogénea con coeficientes constantes y raíces distintas, el conjunto fundamental $\{e^{x}\cos(2x), e^{x}\sin(2x)\}$ cubre todas las soluciones: no hay soluciones singulares ni pérdida de soluciones al aplicar las condiciones iniciales.
