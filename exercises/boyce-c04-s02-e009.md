---
title: "Boyce 4.2 Ejercicio 9"
exercise-id: boyce-c04-s02-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 9"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i01-p229.png
---

## Enunciado

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero y que

$$[e^{i(\theta + 2m\pi)}]^{1/n} = e^{i(\theta + 2m\pi)/n} = \cos\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right) + i\sin\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right).$$

En cada uno de los problemas 7 a 10 aplique estos hechos para determinar la raíz indicada del número complejo dado.

9. $1^{1/4}$

## Solución

Las cuatro raíces cuartas de la unidad son

$$
1^{1/4}=e^{im\pi/2}=\cos\frac{m\pi}{2}+i\sin\frac{m\pi}{2}, \qquad m=0,1,2,3,
$$

es decir,

$$
1,\quad i,\quad -1,\quad -i.
$$

## Resolución

El número $1$ tiene módulo $R=1$ y argumento $\theta=0$. En forma exponencial,

$$
1=e^{i(0+2m\pi)}=e^{i2m\pi}, \qquad m\in\mathbb{Z}.
$$

Se aplica el hecho dado con $n=4$:

$$
1^{1/4}=[e^{i(0+2m\pi)}]^{1/4}=e^{i(0+2m\pi)/4}=e^{im\pi/2}
=\cos\frac{m\pi}{2}+i\sin\frac{m\pi}{2}.
$$

El entero $m$ interviene solo a través de $\cos(m\pi/2)$ y $\sin(m\pi/2)$, que son
periódicas en $m$ con periodo $4$. Por tanto, los valores distintos corresponden a
$m=0,1,2,3$:

$$
\begin{aligned}
m=0:&\quad \cos 0+i\sin 0=1, \\
m=1:&\quad \cos\frac{\pi}{2}+i\sin\frac{\pi}{2}=i, \\
m=2:&\quad \cos\pi+i\sin\pi=-1, \\
m=3:&\quad \cos\frac{3\pi}{2}+i\sin\frac{3\pi}{2}=-i.
\end{aligned}
$$

Cualquier otro entero reproduce uno de estos cuatro valores.

## Observaciones

Las cuatro raíces son los vértices de un cuadrado inscrito en la circunferencia
unidad del plano complejo. Esta es la interpretación geométrica de las raíces
$n$-ésimas de la unidad.

Cada raíz satisface $z^4=1$; por ejemplo, $i^4=(i^2)^2=(-1)^2=1$. La expresión
$1^{1/4}$ es multivaluada: no denota un único número complejo, sino el conjunto de
las cuatro raíces.
