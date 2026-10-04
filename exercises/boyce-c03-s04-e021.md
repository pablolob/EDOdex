---
title: "Boyce 3.4 Ejercicio 21"
exercise-id: boyce-c03-s04-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 17 a 22, resuelva el problema con valor inicial dado.

21. $y'' + y' + 1.25y = 0, \quad y(0) = 3, \quad y'(0) = 1$

## Solución

$$
y(x) = e^{-x/2}\left(3\cos x + \frac{5}{2}\sin x\right).
$$

## Resolución

La ecuación es lineal, homogénea y con coeficientes constantes. Se aplica el **método de la ecuación característica**. Sustituyendo $y = e^{rx}$ se obtiene

$$
r^2 + r + 1.25 = 0.
$$

Las raíces del polinomio auxiliar son

$$
\begin{aligned}
r &= \frac{-1 \pm \sqrt{1 - 4(1)(1.25)}}{2} \\
  &= \frac{-1 \pm \sqrt{1 - 5}}{2} \\
  &= \frac{-1 \pm 2i}{2} = -\frac{1}{2} \pm i.
\end{aligned}
$$

Son complejas conjugadas de la forma $\alpha \pm i\beta$ con $\alpha = -\dfrac{1}{2}$ y $\beta = 1$. La solución general es

$$
y(x) = e^{-x/2}\left(c_1\cos x + c_2\sin x\right).
$$

La condición $y(0) = 3$ da $c_1 = 3$. Derivando,

$$
y'(x) = e^{-x/2}\left[\left(-\frac{c_1}{2} + c_2\right)\cos x + \left(-\frac{c_2}{2} - c_1\right)\sin x\right].
$$

La condición $y'(0) = 1$ impone

$$
-\frac{c_1}{2} + c_2 = 1.
$$

Con $c_1 = 3$ resulta $c_2 = 1 + \dfrac{3}{2} = \dfrac{5}{2}$. Por tanto,

$$
y(x) = e^{-x/2}\left(3\cos x + \frac{5}{2}\sin x\right).
$$

La solución está definida y es derivable para todo $x \in \mathbb{R}$, de modo que su intervalo de validez es $(-\infty, \infty)$.

## Observaciones

La solución es un término oscilatorio de frecuencia $1$ multiplicado por la envolvente decreciente $e^{-x/2}$. Como $e^{-x/2} \to 0$ cuando $x \to \infty$, la solución tiende a cero: la fricción asociada al término $y'$ domina a largo plazo.
