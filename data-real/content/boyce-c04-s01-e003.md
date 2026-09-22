
## Enunciado

En cada uno de los problemas 1 a 6, determine los intervalos en los que se tenga la seguridad de que existen soluciones.

3. $x(x - 1)y^{\mathrm{iv}} + e^x y'' + 4x^2 y = 0$

## Solución

La ecuación es **lineal de cuarto orden** y **homogénea**. En la forma normal sus coeficientes son continuos en los intervalos

$$
(-\infty, 0), \qquad (0, 1), \qquad (1, \infty).
$$

En cada uno de ellos el **teorema de existencia y unicidad** para ecuaciones lineales de orden superior garantiza que existen soluciones. Los puntos $x = 0$ y $x = 1$ quedan excluidos.

## Resolución

La ecuación

$$
x(x - 1)y^{\mathrm{iv}} + e^x y'' + 4x^2 y = 0
$$

es **lineal de cuarto orden** y **homogénea**. El término en $y'''$ está ausente, lo que equivale a un coeficiente nulo.

El teorema de existencia y unicidad para ecuaciones lineales de orden superior se aplica a la forma normal, con coeficiente principal igual a $1$. Por ello se divide entre $x(x-1)$, operación válida donde ese factor no se anula:

$$
y^{\mathrm{iv}} + \frac{e^x}{x(x-1)}\,y'' + \frac{4x^2}{x(x-1)}\,y = 0.
$$

El teorema garantiza la existencia de soluciones en todo intervalo abierto en el que los coeficientes de la forma normal sean continuos. Se estudia la continuidad de cada uno:

- el coeficiente de $y'''$ es $0$, continuo en todo $\mathbb{R}$;
- $e^x$ y $4x^2$ son continuos en todo $\mathbb{R}$;
- el denominador común $x(x-1)$ se anula solo en $x = 0$ y $x = 1$.

Por tanto, los coeficientes $\dfrac{e^x}{x(x-1)}$ y $\dfrac{4x^2}{x(x-1)}$ son continuos en todos los puntos salvo $x = 0$ y $x = 1$. Estos dos puntos dividen la recta real en los intervalos

$$
(-\infty, 0), \qquad (0, 1), \qquad (1, \infty),
$$

y en cada uno de ellos el teorema asegura la existencia de soluciones.

## Observaciones

El enunciado no fija una condición inicial, de modo que la garantía se declara por separado en cada intervalo de continuidad y no en su unión. Los puntos $x = 0$ y $x = 1$ son singulares: en ellos la ecuación no está en forma normal, y una solución no puede prolongarse a través de ellos sin un análisis adicional. La ausencia del término en $y'''$ no impone ninguna restricción, pues un coeficiente nulo es continuo en todo $\mathbb{R}$.
