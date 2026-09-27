
## Enunciado

En cada uno de los problemas 23 a 26, verifique que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial dada. ¿Constituyen un conjunto fundamental de soluciones?

24. $y'' - 2y' + y = 0; \quad y_1(x) = e^x, \quad y_2(x) = x e^x$

## Solución

Las funciones $y_1(x) = e^x$ y $y_2(x) = x e^x$ son ambas soluciones de la ecuación. Como son linealmente independientes y la ecuación es de segundo orden, **sí** constituyen un conjunto fundamental de soluciones. La solución general es

$$
y(x) = (C_1 + C_2 x)e^x.
$$

## Resolución

La ecuación $y'' - 2y' + y = 0$ es de **segundo orden**, **lineal** y **homogénea**, con coeficientes constantes.

Para $y_1(x) = e^x$ las derivadas son $y_1'(x) = e^x$ y $y_1''(x) = e^x$. Al sustituir,

$$
y_1'' - 2y_1' + y_1 = e^x - 2e^x + e^x = 0.
$$

Para $y_2(x) = x e^x$ se aplica la **regla del producto**,

$$
y_2' = e^x + x e^x = (1 + x)e^x, \qquad
y_2'' = e^x + (1 + x)e^x = (2 + x)e^x.
$$

Al sustituir,

$$
\begin{aligned}
y_2'' - 2y_2' + y_2
&= (2 + x)e^x - 2(1 + x)e^x + x e^x \\
&= \bigl[(2 + x) - 2(1 + x) + x\bigr]e^x \\
&= 0.
\end{aligned}
$$

Ambas funciones satisfacen la ecuación, luego son soluciones.

Para decidir si forman un conjunto fundamental se comprueba su independencia lineal. Si existen constantes $C_1$ y $C_2$ tales que

$$
C_1 e^x + C_2 x e^x = (C_1 + C_2 x)e^x = 0
$$

para todo $x$, entonces, como $e^x \ne 0$, se tiene $C_1 + C_2 x = 0$ para todo $x$. Un polinomio que se anula en todo punto es el polinomio nulo, de modo que $C_2 = 0$ y $C_1 = 0$. Por tanto, $y_1$ y $y_2$ son linealmente independientes.

Dos soluciones linealmente independientes de una ecuación lineal homogénea de segundo orden forman siempre un conjunto fundamental. En consecuencia, $\{y_1, y_2\}$ es un conjunto fundamental de soluciones.

Las funciones $e^x$ y $x e^x$ están definidas para todo $x \in \mathbb{R}$; no hay puntos donde la solución pierda validez.

## Observaciones

La ecuación tiene coeficientes constantes y el par $\{e^x, x e^x\}$ corresponde a una raíz repetida de la ecuación característica, caso que se estudia con detalle en la sección 3.5.

La independencia lineal de un par de soluciones también puede comprobarse con el wronskiano, herramienta que se desarrolla en la sección 3.3.
