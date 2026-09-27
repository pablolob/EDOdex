---
title: "Boyce 3.3 Ejercicio 20"
exercise-id: boyce-c03-s03-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i02-p160.png
---

## Enunciado

En los problemas 19 a 21 suponga que $p$ y $q$ son continuas y que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial $y'' + p(x)y' + p(x)y = 0$ sobre un intervalo abierto $I$. Demuestre que si $y_1$ y $y_2$ tienen máximos y mínimos en el mismo punto en $I$, entonces sobre ese intervalo no pueden ser un conjunto fundamental de soluciones.

## Solución

Sea $x_0\in I$ el punto común en el que $y_1$ y $y_2$ tienen un extremo. En un extremo local interior la primera derivada se anula, de modo que $y_1'(x_0)=y_2'(x_0)=0$. Por tanto, el wronskiano se anula en $x_0$:

$$
W(y_1,y_2)(x_0)=y_1(x_0)\,y_2'(x_0)-y_1'(x_0)\,y_2(x_0)=0.
$$

Como $y_1$ y $y_2$ son soluciones de una ecuación lineal homogénea con coeficientes continuos, su wronskiano es idénticamente nulo en $I$ o no se anula en ningún punto de $I$. Al anularse en $x_0$, resulta $W(y_1,y_2)\equiv 0$ en $I$. Por el **criterio del wronskiano**, $y_1$ y $y_2$ son linealmente dependientes y, en consecuencia, no forman un conjunto fundamental de soluciones sobre $I$.

## Resolución

Sea $x_0$ el punto de $I$ en el que ambas funciones tienen un extremo local. El intervalo $I$ es abierto, así que $x_0$ es un punto interior. En un extremo local interior de una función derivable la primera derivada se anula; por tanto,

$$
y_1'(x_0)=0, \qquad y_2'(x_0)=0.
$$

El **wronskiano** de $y_1$ y $y_2$ es

$$
W(y_1,y_2)(x)=y_1(x)\,y_2'(x)-y_1'(x)\,y_2(x).
$$

Al evaluarlo en $x_0$,

$$
W(y_1,y_2)(x_0)=y_1(x_0)\cdot 0-0\cdot y_2(x_0)=0.
$$

Se estudia ahora cómo varía el wronskiano en todo $I$. Derivando su definición y sustituyendo las segundas derivadas que se despejan de la ecuación $y''+p(x)y'+p(x)y=0$, se obtiene

$$
\begin{aligned}
W'(x)
&= y_1'(x)\,y_2'(x)+y_1(x)\,y_2''(x)-y_1''(x)\,y_2(x)-y_1'(x)\,y_2'(x) \\
&= y_1(x)\,y_2''(x)-y_1''(x)\,y_2(x) \\
&= y_1(x)\left(-p(x)\,y_2'(x)-p(x)\,y_2(x)\right)
 - \left(-p(x)\,y_1'(x)-p(x)\,y_1(x)\right)y_2(x) \\
&= -p(x)\left(y_1(x)\,y_2'(x)-y_1'(x)\,y_2(x)\right) \\
&= -p(x)\,W(x).
\end{aligned}
$$

Así, $W$ satisface la ecuación lineal de primer orden $W'+p(x)W=0$. Como $p$ es continua en $I$, la solución general de esa ecuación es

$$
W(x)=C\exp\!\left(-\int_{x_0}^{x}p(s)\,ds\right).
$$

La condición $W(x_0)=0$ impone $C=0$, de modo que $W(x)\equiv 0$ para todo $x\in I$.

Por el **criterio del wronskiano**, dos soluciones de una ecuación lineal homogénea de segundo orden con coeficientes continuos son linealmente independientes en $I$ si y solo si su wronskiano no se anula en ningún punto de $I$. Puesto que $W$ es idénticamente nulo, $y_1$ y $y_2$ son linealmente dependientes. Por tanto, no pueden constituir un conjunto fundamental de soluciones sobre $I$.

## Observaciones

La demostración solo utiliza que en el extremo común se anula la primera derivada y que los coeficientes de la ecuación son continuos. El valor concreto de dichos coeficientes no interviene, de modo que el mismo argumento se aplica a la ecuación general $y''+p(x)y'+q(x)y=0$.

El razonamiento cubre por igual el caso de máximo y el de mínimo: ambos exigen $y_i'(x_0)=0$. Es el mismo mecanismo que en los problemas 19 y 21 de la serie, donde lo que se anula en el punto común es $W$ o su derivada y la conclusión es siempre que el wronskiano es idénticamente nulo.
