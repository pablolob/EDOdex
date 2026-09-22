---
title: "Boyce 6.1 Ejercicio 6"
exercise-id: boyce-c06-s01-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 6"
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

6. $\frac{2s - 3}{s^2 - 4}$

## Solución

$$
\mathcal{L}^{-1}\left\{\frac{2s-3}{s^2-4}\right\}=\frac{1}{4}e^{2t}+\frac{7}{4}e^{-2t}.
$$

## Resolución

La función racional se descompone en fracciones parciales. El denominador factoriza como

$$
s^2-4=(s-2)(s+2),
$$

de modo que se buscan constantes $A$ y $B$ tales que

$$
\frac{2s-3}{(s-2)(s+2)}=\frac{A}{s-2}+\frac{B}{s+2}.
$$

Al multiplicar por $(s-2)(s+2)$ resulta

$$
2s-3=A(s+2)+B(s-2).
$$

La identidad se evalúa en las raíces del denominador. Con $s=2$,

$$
1=4A \quad\Longrightarrow\quad A=\frac{1}{4}.
$$

Con $s=-2$,

$$
-7=-4B \quad\Longrightarrow\quad B=\frac{7}{4}.
$$

Por tanto,

$$
\frac{2s-3}{s^2-4}=\frac{1}{4}\cdot\frac{1}{s-2}+\frac{7}{4}\cdot\frac{1}{s+2}.
$$

La **transformada inversa** es lineal y se aplica el par básico $\mathcal{L}^{-1}\left\{\dfrac{1}{s-a}\right\}=e^{at}$:

$$
\mathcal{L}^{-1}\left\{\frac{2s-3}{s^2-4}\right\}
=\frac{1}{4}\mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\}
+\frac{7}{4}\mathcal{L}^{-1}\left\{\frac{1}{s+2}\right\}
=\frac{1}{4}e^{2t}+\frac{7}{4}e^{-2t}.
$$

## Observaciones

La función original es una transformada racional propia con polos simples en $s=2$ y $s=-2$; cada polo aporta un término exponencial $e^{at}$. La expresión obtenida está definida para todo $t\ge 0$, que es el dominio de la variable de la transformada de Laplace.

### Método alternativo: coeficientes indeterminados

En lugar de evaluar en las raíces, se desarrolla el miembro derecho $A(s+2)+B(s-2)=(A+B)s+(2A-2B)$ e igualando coeficientes con $2s-3$ se resuelve el sistema $A+B=2$, $2A-2B=-3$, cuya solución es $A=1/4$, $B=7/4$.
