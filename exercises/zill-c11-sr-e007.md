---
title: "Zill Repaso C11 Ejercicio 7"
exercise-id: zill-c11-sr-e007
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
competencies:
  - resolver-series.serie-fourier
  - resolver-series.serie-cosenos
  - resolver-series.serie-senos
hidden-competencies:
  - clasificar.paridad
prerequisitos:
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c11sri01-p471.png
---

## Enunciado

Suponga que la función $f(x) = x^2 + 1$, $0 < x < 3$ se desarrolla en una serie de Fourier, una serie de cosenos y una serie de senos. Dé el valor al cual cada serie converge en $x = 0$.

## Solución

Las tres series representan a $f$ en $(0,3)$, pero en el extremo $x=0$ convergen a valores distintos según la extensión que cada una define:

$$
\text{serie de Fourier}: \frac{11}{2}, \qquad
\text{serie de cosenos}: 1, \qquad
\text{serie de senos}: 0.
$$

## Resolución

Las tres series coinciden con $f(x)=x^2+1$ en el intervalo abierto $(0,3)$. En el extremo $x=0$ su valor depende de la extensión que representa cada desarrollo. La función $f$ es continua en $(0,3)$, de modo que el **teorema de Dirichlet** se aplica: cada serie converge a la extensión en sus puntos de continuidad y al promedio de los límites laterales en sus discontinuidades.

**Serie de Fourier.** El intervalo $(0,3)$ se toma como un periodo, así que la serie representa la extensión $3$-periódica de $f$. En $x=0$ el límite por la derecha es

$$
f(0^+)=\lim_{x\to 0^+}(x^2+1)=1.
$$

El límite por la izquierda de la extensión periódica coincide con el valor de $f$ al final del periodo,

$$
f(3^-)=\lim_{x\to 3^-}(x^2+1)=10.
$$

Los dos límites difieren, de modo que $x=0$ es una discontinuidad de salto de la extensión. La serie converge al promedio:

$$
\frac{f(0^+)+f(3^-)}{2}=\frac{1+10}{2}=\frac{11}{2}.
$$

**Serie de cosenos.** Corresponde a la extensión par de $f$, que en $(-3,3)$ es $F(x)=x^2+1$. Esta extensión es continua en $x=0$ y allí vale $F(0)=1$. Por el teorema de Dirichlet la serie converge a

$$
f(0)=1.
$$

**Serie de senos.** Corresponde a la extensión impar de $f$. Sus términos son $\sin(n\pi x/3)$, que se anulan en $x=0$; toda suma parcial es entonces $0$ y la serie converge a $0$. De forma equivalente, la extensión impar salta de $-1$ a $1$ en el origen, y el promedio de los límites laterales es

$$
\frac{-1+1}{2}=0.
$$

## Observaciones

El valor de una serie en un punto de frontera no depende solo de la función, sino de la extensión asociada. La misma $f$ en $(0,3)$ conduce a $11/2$, $1$ y $0$ según se use la extensión periódica, par o impar.

No es necesario calcular los coeficientes para responder. Basta identificar la extensión de cada serie y aplicar el teorema de Dirichlet. En $x=0$ todos los términos en seno se anulan, de modo que los valores $11/2$ y $1$ proceden de la parte en cosenos, cuyos coeficientes difieren entre la serie de Fourier y la serie de cosenos.
