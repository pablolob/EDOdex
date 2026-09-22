---
title: "Boyce 6.1 Ejercicio 4"
exercise-id: boyce-c06-s01-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - algebra.factorizacion-polinomios
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

4. $\frac{3s}{s^2 - s - 6}$

## Solución

$$
\mathcal{L}^{-1}\left\{\frac{3s}{s^2-s-6}\right\}=\frac{9}{5}e^{3t}+\frac{6}{5}e^{-2t}.
$$

## Resolución

La función racional se descompone en fracciones parciales. El denominador factoriza como

$$
s^2-s-6=(s-3)(s+2),
$$

de modo que se buscan constantes $A$ y $B$ tales que

$$
\frac{3s}{(s-3)(s+2)}=\frac{A}{s-3}+\frac{B}{s+2}.
$$

Al multiplicar por $(s-3)(s+2)$ resulta

$$
3s=A(s+2)+B(s-3).
$$

La identidad se evalúa en las raíces del denominador. Con $s=3$,

$$
9=5A \quad\Longrightarrow\quad A=\frac{9}{5}.
$$

Con $s=-2$,

$$
-6=-5B \quad\Longrightarrow\quad B=\frac{6}{5}.
$$

Por tanto,

$$
\frac{3s}{s^2-s-6}=\frac{9}{5}\cdot\frac{1}{s-3}+\frac{6}{5}\cdot\frac{1}{s+2}.
$$

La **transformada inversa** es lineal y se aplica el par básico $\mathcal{L}^{-1}\left\{\dfrac{1}{s-a}\right\}=e^{at}$:

$$
\mathcal{L}^{-1}\left\{\frac{3s}{s^2-s-6}\right\}
=\frac{9}{5}\mathcal{L}^{-1}\left\{\frac{1}{s-3}\right\}
+\frac{6}{5}\mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\}
=\frac{9}{5}e^{3t}+\frac{6}{5}e^{-2t}.
$$

## Observaciones

La función original es una transformada racional propia con polos simples en $s=3$ y $s=-2$; cada polo aporta un término exponencial $e^{at}$. La expresión obtenida está definida para todo $t\ge 0$, que es el dominio de la variable de la transformada de Laplace.

### Método alternativo: coeficientes indeterminados

En lugar de evaluar en las raíces, se desarrolla el miembro derecho $A(s+2)+B(s-3)=(A+B)s+(2A-3B)$ e igualando coeficientes con $3s$ se resuelve el sistema $A+B=3$, $2A-3B=0$, cuya solución es $A=9/5$, $B=6/5$.
