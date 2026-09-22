---
title: "Boyce 6.1 Ejercicio 8"
exercise-id: boyce-c06-s01-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

8. $\frac{8s^2 - 4s + 12}{s(s^2 + 4)}$

## Solución

$$
\mathscr{L}^{-1}\!\left\{\frac{8s^2-4s+12}{s(s^2+4)}\right\}=3+5\cos(2t)-2\sin(2t),\qquad t\ge 0.
$$

## Resolución

La función dada es racional propia. Se descompone en **fracciones parciales** con un término simple para el factor lineal $s$ y un término con numerador lineal para el factor cuadrático irreducible $s^2+4$:

$$
\frac{8s^2-4s+12}{s(s^2+4)}=\frac{A}{s}+\frac{Bs+C}{s^2+4}.
$$

Al multiplicar por $s(s^2+4)$ resulta

$$
8s^2-4s+12=A(s^2+4)+(Bs+C)s.
$$

Se agrupan los términos según la potencia de $s$:

$$
8s^2-4s+12=(A+B)s^2+Cs+4A.
$$

La igualdad de coeficientes conduce al sistema

$$
\begin{aligned}
4A &= 12, \\
A+B &= 8, \\
C &= -4.
\end{aligned}
$$

De la primera ecuación $A=3$; de la segunda $B=5$; de la tercera $C=-4$. Por tanto,

$$
\frac{8s^2-4s+12}{s(s^2+4)}=\frac{3}{s}+\frac{5s-4}{s^2+4}
=\frac{3}{s}+5\frac{s}{s^2+4}-2\frac{2}{s^2+4}.
$$

La inversión emplea los pares de la tabla, con $b=2$:

$$
\mathscr{L}^{-1}\!\left\{\frac{1}{s}\right\}=1,\qquad
\mathscr{L}^{-1}\!\left\{\frac{s}{s^2+4}\right\}=\cos(2t),\qquad
\mathscr{L}^{-1}\!\left\{\frac{2}{s^2+4}\right\}=\sin(2t).
$$

Por linealidad,

$$
\mathscr{L}^{-1}\!\left\{\frac{8s^2-4s+12}{s(s^2+4)}\right\}=3+5\cos(2t)-2\sin(2t).
$$

La función resultante está definida para todo $t\ge 0$.

## Observaciones

La transformada $\mathscr{L}\{f(t)\}$ de la función obtenida converge para $\operatorname{Re}(s)>0$: los polos de $F(s)$ son $s=0$ y $s=\pm 2i$, todos sobre o a la izquierda del eje imaginario, de modo que la abscisa de convergencia es $\sigma=0$.

La descomposición en fracciones parciales es el procedimiento estándar para invertir una función racional propia. La tabla de pares convierte cada fracción simple en su función de $t$ correspondiente.
