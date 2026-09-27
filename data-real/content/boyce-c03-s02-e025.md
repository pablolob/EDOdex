
## Enunciado

En cada uno de los problemas 23 a 26, verifique que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial dada. ¿Constituyen un conjunto fundamental de soluciones?

25. $x^2 y'' - x(x + 2)y' + (x + 2)y = 0, \quad x > 0; \quad y_1(x) = x, \quad y_2(x) = x e^x$

## Solución

Las dos funciones son soluciones de la ecuación en $x>0$. Su **wronskiano** es

$$
W(y_1, y_2) = x^2 e^x \ne 0,
$$

por lo que $\{y_1, y_2\}$ es un **conjunto fundamental** de soluciones y la solución general es

$$
y = c_1 x + c_2 x e^x, \qquad x > 0.
$$

## Resolución

Se verifica cada función mediante **sustitución directa** en la ecuación.

Para $y_1 = x$ se tiene $y_1' = 1$ y $y_1'' = 0$, de modo que

$$
x^2(0) - x(x+2)(1) + (x+2)x = -x(x+2) + x(x+2) = 0.
$$

Para $y_2 = x e^x$, la **regla del producto** da

$$
y_2' = (1 + x)e^x, \qquad y_2'' = (2 + x)e^x.
$$

Al sustituir y agrupar el factor común $x(x+2)e^x$,

$$
\begin{aligned}
x^2 y_2'' - x(x+2)y_2' + (x+2)y_2
&= e^x\left[x^2(x+2) - x(x+2)(x+1) + x(x+2)\right] \\
&= x(x+2)e^x\left[x - (x+1) + 1\right] \\
&= 0.
\end{aligned}
$$

Ambas funciones satisfacen la ecuación. Para decidir si forman un **conjunto fundamental** se calcula su **wronskiano**,

$$
\begin{aligned}
W(y_1, y_2) &= y_1 y_2' - y_1' y_2 \\
&= x(1+x)e^x - (1)(x e^x) \\
&= x e^x\left[(1+x) - 1\right] \\
&= x^2 e^x.
\end{aligned}
$$

En el intervalo $x>0$ se cumple $x^2 e^x > 0$, así que el wronskiano no se anula en ningún punto. Por el criterio de la sección, las dos soluciones son linealmente independientes y constituyen un conjunto fundamental. La solución general de la ecuación es

$$
y = c_1 x + c_2 x e^x, \qquad x > 0.
$$

## Observaciones

La ecuación es lineal, homogénea y de **segundo orden**. Escrita en forma estándar,

$$
y'' - \frac{x+2}{x}\,y' + \frac{x+2}{x^2}\,y = 0,
$$

sus coeficientes son continuos en todo el intervalo $x>0$, que es el dominio declarado en el enunciado y el intervalo de validez de la solución general.

Las funciones $x$ y $x e^x$ no son proporcionales, pues $y_2/y_1 = e^x$ no es constante; esto concuerda con el wronskiano no nulo. Ninguna de las dos es una solución singular: ambas forman parte de la familia general.
