---
title: "Boyce 3.4 Ejercicio 7"
exercise-id: boyce-c03-s04-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 7"
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
statement-status: accepted
metadata-status: pending
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

7. $y'' - 2y' + 2y = 0$

## Solución

$$
y(x) = e^{x}\left(c_1\cos x + c_2\sin x\right).
$$

## Resolución

La ecuación es **lineal**, **homogénea** y de **coeficientes constantes** de segundo orden. Se buscan soluciones de la forma $y = e^{rx}$. Al sustituir,

$$
\left(r^{2} - 2r + 2\right)e^{rx} = 0,
$$

y como $e^{rx} \neq 0$, se obtiene la ecuación característica

$$
r^{2} - 2r + 2 = 0.
$$

Sus raíces son

$$
r = \frac{2 \pm \sqrt{4 - 8}}{2}
= \frac{2 \pm \sqrt{-4}}{2}
= 1 \pm i.
$$

Son complejas conjugadas con parte real $\alpha = 1$ y parte imaginaria $\beta = 1$. Al aplicar la fórmula de Euler, las soluciones complejas

$$
e^{(1+i)x} = e^{x}\left(\cos x + i\sin x\right),
\qquad
e^{(1-i)x} = e^{x}\left(\cos x - i\sin x\right)
$$

dan lugar a las dos soluciones reales

$$
y_1(x) = e^{x}\cos x, \qquad y_2(x) = e^{x}\sin x.
$$

Estas funciones son linealmente independientes, pues su wronskiano es

$$
W(y_1,y_2)(x)
= \begin{vmatrix} e^{x}\cos x & e^{x}\sin x \\ e^{x}(\cos x - \sin x) & e^{x}(\sin x + \cos x) \end{vmatrix}
= e^{2x} \neq 0.
$$

Por tanto, $\{y_1, y_2\}$ es un conjunto fundamental de soluciones y la solución general es

$$
y(x) = c_1 e^{x}\cos x + c_2 e^{x}\sin x
= e^{x}\left(c_1\cos x + c_2\sin x\right),
$$

donde $c_1$ y $c_2$ son constantes arbitrarias.

## Observaciones

Las raíces complejas $r = \alpha \pm \beta i$ de la ecuación característica producen siempre soluciones reales de la forma $e^{\alpha x}\cos(\beta x)$ y $e^{\alpha x}\sin(\beta x)$. Aquí $\alpha = \beta = 1$.

La solución está definida para todo $x \in \mathbb{R}$, ya que la exponencial y las funciones trigonométricas carecen de singularidades. La ecuación es homogénea, por lo que no existen soluciones singulares asociadas a un término no homogéneo.
