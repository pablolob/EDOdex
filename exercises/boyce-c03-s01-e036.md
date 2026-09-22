---
title: "Boyce 3.1 Ejercicio 36"
exercise-id: boyce-c03-s01-e036
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 36"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - modelizar.formular-edo
prerequisitos:
  - derivacion.producto
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s01i03-p144.png
---

## Enunciado

En cada uno de los problemas 33 a 38 elimine las constantes $c_1$ y $c_2$ entre $y$, $y'$ y $y''$, para encontrar la ecuación diferencial que satisface la familia dada de funciones.

36. $y = (c_1 + c_2 x) e^x$

## Solución

La ecuación diferencial que satisface la familia es de **segundo orden**, **lineal** y **homogénea**:

$$
y''-2y'+y=0.
$$

## Resolución

Se deriva la familia dos veces. Con la regla del producto y la derivada de la exponencial,

$$
\begin{aligned}
y' &= c_2e^{x}+(c_1+c_2x)e^{x}=(c_1+c_2+c_2x)e^{x},\\
y'' &= c_2e^{x}+(c_1+c_2+c_2x)e^{x}=(c_1+2c_2+c_2x)e^{x}.
\end{aligned}
$$

En cada expresión la diferencia con la derivada anterior cancela $c_1$ y deja el mismo término con $c_2$:

$$
y'-y=c_2e^{x}, \qquad y''-y'=c_2e^{x}.
$$

Los segundos miembros coinciden, de modo que

$$
y''-y'=y'-y.
$$

Al agrupar términos se obtiene la ecuación diferencial

$$
y''-2y'+y=0,
$$

que satisface toda la familia.

## Observaciones

La familia contiene dos constantes arbitrarias, por lo que la ecuación que la describe es de segundo orden. Las funciones $e^{x}$ y $xe^{x}$ corresponden a la raíz doble $r=1$ de la ecuación característica $r^{2}-2r+1=0$, así que la familia es la solución general de la ecuación hallada.

Los datos $y(0)=c_1$ y $y'(0)=c_1+c_2$ fijan las constantes. La ecuación tiene coeficientes constantes y no presenta puntos singulares; sus soluciones están definidas para todo $x\in\mathbb{R}$.
