---
title: "Boyce 5.7 Ejercicio 13"
exercise-id: boyce-c05-s07-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - resolver-series.ecuacion-indicial
  - resolver-analiticamente.series-frobenius
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 2
  technical: 3
source-images:
  - c05s07i01-p290.png
---

## Enunciado

Demuestre que

$$x^2 y'' + (\sin x)y' - (\cos x)y = 0$$

tiene un punto singular regular $x = 0$ y que las raíces de la ecuación indicial son $\pm 1$. Determine los tres primeros términos diferentes de cero de la serie correspondiente a la raíz más grande.

## Solución

El punto $x=0$ es un **punto singular regular**. La ecuación indicial y sus raíces son

$$
r(r-1)+r-1=r^2-1=0,\qquad r_1=1,\quad r_2=-1.
$$

Para la raíz más grande, $r=1$, los tres primeros términos no nulos de la serie son

$$
y(x)=a_0\left(x-\frac{x^3}{24}+\frac{x^5}{720}+\cdots\right),\qquad a_0\ne 0.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. Con $P(x)=x^2$, $Q(x)=\sin x$ y $R(x)=-\cos x$, para $x\ne 0$ resulta

$$
y''+\frac{\sin x}{x^2}\,y'-\frac{\cos x}{x^2}\,y=0,\qquad p(x)=\frac{\sin x}{x^2},\qquad q(x)=-\frac{\cos x}{x^2}.
$$

El coeficiente de $y''$ se anula en $x=0$, de modo que $x=0$ es un punto singular. Para clasificarlo se examinan los productos

$$
x\,p(x)=\frac{\sin x}{x}=1-\frac{x^2}{6}+\frac{x^4}{120}-\cdots,\qquad x^2 q(x)=-\cos x=-1+\frac{x^2}{2}-\frac{x^4}{24}+\cdots.
$$

Ambos admiten desarrollo en serie de potencias en torno a $x=0$, luego son analíticos allí y $x=0$ es un **punto singular regular**.

Con $p_0=\lim_{x\to 0}x\,p(x)=1$ y $q_0=\lim_{x\to 0}x^2q(x)=-1$, la ecuación indicial es

$$
r(r-1)+p_0r+q_0=r(r-1)+r-1=r^2-1=0,
$$

cuyas raíces son $r_1=1$ y $r_2=-1$.

Para la raíz mayor se busca la solución de Frobenius

$$
y=\sum_{n=0}^{\infty}a_n x^{n+1},\qquad a_0\ne 0,
$$

con derivadas

$$
y'=\sum_{n=0}^{\infty}(n+1)a_n x^{n},\qquad y''=\sum_{n=0}^{\infty}n(n+1)a_n x^{n-1}.
$$

Al sustituir y desarrollar $\sin x$ y $\cos x$ en serie de Taylor, el coeficiente de $x^N$ en el miembro izquierdo es

$$
(N^2-1)a_{N-1}+\frac{5-N}{6}a_{N-3}+\frac{N-9}{120}a_{N-5}=0,\qquad N\ge 1,
$$

donde $a_j=0$ para $j<0$. Para $N=1$ la relación se reduce a la ecuación indicial, $0=0$. Los valores sucesivos son

$$
\begin{aligned}
N=2:&\quad 3a_1=0 \;\Rightarrow\; a_1=0, \\
N=3:&\quad 8a_2+\frac{1}{3}a_0=0 \;\Rightarrow\; a_2=-\frac{a_0}{24}, \\
N=4:&\quad 15a_3=0 \;\Rightarrow\; a_3=0, \\
N=5:&\quad 24a_4-\frac{1}{30}a_0=0 \;\Rightarrow\; a_4=\frac{a_0}{720}, \\
N=6:&\quad 35a_5=0 \;\Rightarrow\; a_5=0.
\end{aligned}
$$

Por tanto, los tres primeros términos no nulos de la serie son

$$
y(x)=a_0 x-\frac{a_0}{24}x^3+\frac{a_0}{720}x^5+\cdots=a_0\left(x-\frac{x^3}{24}+\frac{x^5}{720}+\cdots\right).
$$

## Observaciones

Las raíces de la ecuación indicial difieren en el entero positivo $r_1-r_2=2$. Esto no modifica la ecuación indicial, pero la segunda solución de Frobenius, asociada a $r=-1$, puede incluir un término con $\ln x$.

La serie obtenida solo contiene potencias impares, pues la ecuación es invariante frente al cambio $x\to -x$ cuando la solución es impar.

Como $x\,p(x)$ y $x^2q(x)$ son funciones enteras, la serie de Frobenius converge para todo $x$; el único punto singular de la ecuación es $x=0$.
