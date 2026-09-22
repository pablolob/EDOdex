---
title: "Boyce 6.2 Ejercicio 17"
exercise-id: boyce-c06-s02-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
hidden-competencies:
  - resolver-analiticamente.escalon-unitario
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.funcion-escalon
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s02i01-p332.png
---

## Enunciado

Encuentre la transformada inversa de la función dada:

17. $F(s) = \frac{(s - 2)e^{-s}}{s^2 - 4s + 3}$

## Solución

$$
f(t) = \mathcal{L}^{-1}\{F(s)\} = \frac{1}{2}\left(e^{t-1} + e^{3(t-1)}\right)u_1(t).
$$

## Resolución

El factor $e^{-s}$ indica una traslación en el eje $t$, de modo que se escribe

$$
F(s) = e^{-s}G(s), \qquad G(s) = \frac{s-2}{s^2-4s+3}.
$$

El denominador se factoriza como $s^2-4s+3=(s-1)(s-3)$. La función racional $G$ se descompone en **fracciones parciales**:

$$
G(s) = \frac{s-2}{(s-1)(s-3)} = \frac{A}{s-1} + \frac{B}{s-3}.
$$

Al multiplicar por $(s-1)(s-3)$ resulta la identidad

$$
s-2 = A(s-3) + B(s-1).
$$

La evaluación en $s=1$ y en $s=3$ da $A=\frac{1}{2}$ y $B=\frac{1}{2}$, respectivamente. Por tanto,

$$
G(s) = \frac{1/2}{s-1} + \frac{1/2}{s-3}.
$$

Los pares básicos $\mathcal{L}^{-1}\{1/(s-a)\}=e^{at}$ proporcionan la transformada inversa de $G$:

$$
g(t) = \mathcal{L}^{-1}\{G(s)\} = \frac{1}{2}e^{t} + \frac{1}{2}e^{3t}.
$$

El **segundo teorema de traslación** establece que

$$
\mathcal{L}^{-1}\{e^{-as}G(s)\} = g(t-a)\,u_a(t), \qquad a > 0.
$$

Con $a=1$ se obtiene la transformada inversa pedida:

$$
f(t) = g(t-1)\,u_1(t) = \frac{1}{2}\left(e^{t-1} + e^{3(t-1)}\right)u_1(t).
$$

## Observaciones

La función $u_1$ es la **función escalón unitario**, nula para $t<1$ y unitaria para $t\ge1$; por tanto, la solución es idénticamente nula antes de $t=1$ y presenta en $t=1$ una **discontinuidad de salto** de magnitud $1$, ya que $\lim_{t\to1^-}f(t)=0$ mientras que $f(1)=\frac{1}{2}(1+1)=1$.

La transformada $F(s)$ converge para $s>3$, abscisa fijada por el término $e^{3t}$, que es el de mayor crecimiento en $f$.
