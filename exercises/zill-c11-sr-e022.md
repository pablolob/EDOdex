---
title: "Zill Repaso C11 Ejercicio 22"
exercise-id: zill-c11-sr-e022
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
competencies:
  - resolver-series.serie-legendre
  - analizar-espectralmente.ortogonalidad
hidden-competencies:
  - clasificar.paridad
prerequisitos:
  - algebra-lineal-avanzada.producto-interno
  - algebra-lineal-avanzada.ortogonalidad
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c11sri02-p472.png
---

## Enunciado

Desarrolle la función $y = x^4 - 1$, $-1 < x < 1$, en una serie de Fourier-Legendre.

## Solución

$$
x^4 - 1 = -\frac{4}{5}P_0(x) + \frac{4}{7}P_2(x) + \frac{8}{35}P_4(x).
$$

## Resolución

Los polinomios de Legendre $\{P_n\}$ son ortogonales en $[-1,1]$ con peso $1$, y su norma está dada por

$$
\int_{-1}^{1}P_m(x)P_n(x)\,dx=\frac{2}{2n+1}\,\delta_{mn}.
$$

Por tanto, el desarrollo de Fourier-Legendre de una función $f$ en $(-1,1)$ es

$$
f(x)=\sum_{n=0}^{\infty}c_nP_n(x),\qquad
c_n=\frac{2n+1}{2}\int_{-1}^{1}f(x)P_n(x)\,dx.
$$

La función $f(x)=x^4-1$ es par y el intervalo es simétrico respecto del origen. Como $P_n$ tiene la paridad de $n$, el producto $f(x)P_n(x)$ es impar cuando $n$ es impar. La integral de una función impar sobre $[-1,1]$ vale cero, luego $c_n=0$ para todo $n$ impar. Solo hay que calcular los coeficientes pares.

Para $n=0$, con $P_0(x)=1$,

$$
\begin{aligned}
c_0
&= \frac{1}{2}\int_{-1}^{1}(x^4-1)\,dx \\
&= \frac{1}{2}\left[\frac{x^5}{5}-x\right]_{-1}^{1} \\
&= \frac{1}{2}\left(\frac{1}{5}-1+\frac{1}{5}-1\right) \\
&= -\frac{4}{5}.
\end{aligned}
$$

Para $n=2$, con $P_2(x)=\dfrac{3x^2-1}{2}$,

$$
\begin{aligned}
c_2
&= \frac{5}{2}\int_{-1}^{1}(x^4-1)P_2(x)\,dx \\
&= \frac{5}{4}\int_{-1}^{1}\left(3x^6-x^4-3x^2+1\right)dx \\
&= \frac{5}{4}\cdot 2\left(\frac{3}{7}-\frac{1}{5}\right) \\
&= \frac{4}{7}.
\end{aligned}
$$

Para $n=4$, con $P_4(x)=\dfrac{35x^4-30x^2+3}{8}$,

$$
\begin{aligned}
c_4
&= \frac{9}{2}\int_{-1}^{1}(x^4-1)P_4(x)\,dx \\
&= \frac{9}{16}\int_{-1}^{1}\left(35x^8-30x^6-32x^4+30x^2-3\right)dx \\
&= \frac{9}{16}\cdot 2\left(\frac{35}{9}-\frac{30}{7}-\frac{32}{5}+10-3\right) \\
&= \frac{9}{16}\cdot\frac{128}{315} \\
&= \frac{8}{35}.
\end{aligned}
$$

La función es un polinomio de grado $4$; por ortogonalidad, $c_n=0$ para todo $n>4$. El desarrollo es entonces finito:

$$
x^4-1=-\frac{4}{5}P_0(x)+\frac{4}{7}P_2(x)+\frac{8}{35}P_4(x).
$$

La comprobación directa, sustituyendo los polinomios, devuelve la función original:

$$
\begin{aligned}
-\frac{4}{5}+\frac{4}{7}P_2(x)+\frac{8}{35}P_4(x)
&= -\frac{4}{5}+\frac{2}{7}(3x^2-1)+\frac{1}{35}(35x^4-30x^2+3) \\
&= -\frac{4}{5}+\frac{6x^2}{7}-\frac{2}{7}+x^4-\frac{6x^2}{7}+\frac{3}{35} \\
&= x^4-1.
\end{aligned}
$$

## Observaciones

El desarrollo es exacto y vale en todo el intervalo cerrado $[-1,1]$, no solo en el abierto $(-1,1)$: la función es un polinomio y no presenta singularidades en los extremos.

El uso de la paridad no es obligatorio, pero evita calcular los coeficientes impares, que se anulan. El mismo argumento explica por qué cualquier polinomio de grado $N$ tiene un desarrollo de Fourier-Legendre con exactamente $N+1$ términos como máximo.
