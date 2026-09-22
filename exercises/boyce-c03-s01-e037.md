---
title: "Boyce 3.1 Ejercicio 37"
exercise-id: boyce-c03-s01-e037
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 37"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s01i03-p144.png
---

## Enunciado

En cada uno de los problemas 33 a 38 elimine las constantes $c_1$ y $c_2$ entre $y$, $y'$ y $y''$, para encontrar la ecuación diferencial que satisface la familia dada de funciones.

37. $y = c_1 x + c_2 x^2$

## Solución

La ecuación diferencial que satisface la familia es

$$
x^2 y'' - 2x y' + 2y = 0.
$$

## Resolución

La familia está formada por las funciones $y = c_1 x + c_2 x^2$. Se derivan una y dos veces:

$$
\begin{aligned}
y' &= c_1 + 2c_2 x, \\
y'' &= 2c_2.
\end{aligned}
$$

La segunda derivada solo depende de $c_2$, de modo que $c_2 = \dfrac{y''}{2}$. Al sustituir este valor en la expresión de $y'$ se obtiene

$$
y' = c_1 + x y'' \quad \Longrightarrow \quad c_1 = y' - x y''.
$$

Se sustituyen ahora $c_1$ y $c_2$ en la familia dada:

$$
y = \left(y' - x y''\right) x + \frac{y''}{2} x^2 = x y' - \frac{x^2}{2} y''.
$$

Al pasar todos los términos al mismo miembro y multiplicar por $-2$ resulta

$$
x^2 y'' - 2x y' + 2y = 0.
$$

La comprobación confirma el resultado. Al sustituir $y = c_1 x + c_2 x^2$, $y' = c_1 + 2c_2 x$ y $y'' = 2c_2$,

$$
x^2 (2c_2) - 2x\left(c_1 + 2c_2 x\right) + 2\left(c_1 x + c_2 x^2\right)
= 2c_2 x^2 - 2c_1 x - 4c_2 x^2 + 2c_1 x + 2c_2 x^2 = 0.
$$

## Observaciones

La ecuación obtenida es **de segundo orden** y **lineal**, lo que concuerda con que la familia dependa de dos constantes arbitrarias. En forma estándar es $y'' - \dfrac{2}{x} y' + \dfrac{2}{x^2} y = 0$, de modo que no está definida en $x = 0$; sus soluciones viven en intervalos que no contienen ese punto, como $(0, \infty)$ o $(-\infty, 0)$. La ecuación queda determinada salvo un factor multiplicativo no nulo.
