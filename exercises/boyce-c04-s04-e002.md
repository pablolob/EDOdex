---
title: "Boyce 4.4 Ejercicio 2"
exercise-id: boyce-c04-s04-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.4, ejercicio 2"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.variacion-parametros
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-no-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c04s04i01-p240.png
---

## Enunciado

En cada uno de los problemas 1 a 3, aplique el método de parámetros para determinar una solución particular de la ecuación diferencial dada.

2. $y''' - y' = x$

## Solución

La aplicación del método de parámetros conduce a

$$
y_p = -\frac{x^2}{2} - 1.
$$

El término constante $-1$ pertenece a la solución complementaria, por lo que una solución particular más simple es

$$
y_p = -\frac{x^2}{2}.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Para aplicar **variación de parámetros** se necesita primero un conjunto fundamental de la ecuación homogénea asociada $y''' - y' = 0$.

**Ecuación homogénea.** La ecuación característica es $r^3 - r = 0$, que factoriza como

$$
r^3 - r = r(r^2 - 1) = r(r-1)(r+1).
$$

Las raíces son $r=0$, $r=1$ y $r=-1$. Un conjunto fundamental de soluciones es

$$
y_1 = 1, \qquad y_2 = e^{x}, \qquad y_3 = e^{-x}.
$$

**Variación de parámetros.** Se busca $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$, donde las funciones $u_i$ satisfacen el sistema

$$
\begin{aligned}
u_1' + u_2' e^{x} + u_3' e^{-x} &= 0, \\
u_2' e^{x} - u_3' e^{-x} &= 0, \\
u_2' e^{x} + u_3' e^{-x} &= x.
\end{aligned}
$$

El Wronskiano del conjunto fundamental es

$$
W = \begin{vmatrix} 1 & e^{x} & e^{-x} \\ 0 & e^{x} & -e^{-x} \\ 0 & e^{x} & e^{-x} \end{vmatrix} = 2.
$$

Por la regla de Cramer, $u_k' = W_k/W$, donde $W_k$ se obtiene sustituyendo la $k$-ésima columna de $W$ por el vector $(0,0,x)$:

$$
\begin{aligned}
W_1 &= \begin{vmatrix} 0 & e^{x} & e^{-x} \\ 0 & e^{x} & -e^{-x} \\ x & e^{x} & e^{-x} \end{vmatrix} = -2x, \\
W_2 &= \begin{vmatrix} 1 & 0 & e^{-x} \\ 0 & 0 & -e^{-x} \\ 0 & x & e^{-x} \end{vmatrix} = x e^{-x}, \\
W_3 &= \begin{vmatrix} 1 & e^{x} & 0 \\ 0 & e^{x} & 0 \\ 0 & e^{x} & x \end{vmatrix} = x e^{x}.
\end{aligned}
$$

Entonces

$$
u_1' = -x, \qquad u_2' = \frac{x e^{-x}}{2}, \qquad u_3' = \frac{x e^{x}}{2}.
$$

Al integrar,

$$
u_1 = -\frac{x^2}{2}, \qquad u_2 = \frac{1}{2}\int x e^{-x}\,dx = -\frac{(x+1)e^{-x}}{2}, \qquad u_3 = \frac{1}{2}\int x e^{x}\,dx = \frac{(x-1)e^{x}}{2}.
$$

Sustituyendo en $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$,

$$
y_p = -\frac{x^2}{2} - \frac{x+1}{2} + \frac{x-1}{2} = -\frac{x^2}{2} - 1.
$$

El término constante $-1$ resuelve la ecuación homogénea, pues corresponde a $y_1 = 1$. Se puede prescindir de él y tomar

$$
y_p = -\frac{x^2}{2}.
$$

**Comprobación.** Para $y_p = -x^2/2$ se tiene $y_p' = -x$, $y_p'' = -1$ y $y_p''' = 0$. Por tanto,

$$
y_p''' - y_p' = 0 - (-x) = x.
$$

La función satisface la ecuación diferencial dada.

## Observaciones

La constante de integración se toma igual a cero en cada $u_i$. Cualquier otra elección añade términos de la solución complementaria a $y_p$ y no altera su validez como solución particular.

Los coeficientes son constantes y $g(x)=x$ es continua en todo $\mathbb{R}$, de modo que la solución particular es válida en $(-\infty,\infty)$.

### Método alternativo: coeficientes indeterminados

El término no homogéneo es polinómico, así que también puede aplicarse el método de coeficientes indeterminados. Como $r=0$ es raíz simple de la ecuación característica, la forma de prueba es $Y = Ax^2 + Bx$. Al sustituir resulta $-2Ax - B = x$, es decir, $A = -1/2$ y $B = 0$, con lo que se recupera $y_p = -x^2/2$.
