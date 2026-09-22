
## Enunciado

En cada uno de los problemas 1 a 6, determine los intervalos en los que se tenga la seguridad de que existen soluciones.

6. $(x^2 - 4)y^{\mathrm{vi}} + x^2 y''' + 9y = 0$

## Solución

La ecuación es **lineal** y **homogénea** de **sexto orden**. Escrita en forma estándar, sus coeficientes son continuos salvo en $x = -2$ y $x = 2$. Por tanto, la existencia de soluciones está garantizada en cada uno de los intervalos

$$
(-\infty,-2),\qquad (-2,2),\qquad (2,\infty).
$$

## Resolución

Se escribe la ecuación en la forma estándar de una ecuación lineal de orden $n$. Como $x^2 - 4 = (x - 2)(x + 2)$ no se anula para $x \ne \pm 2$, se divide entre ese factor:

$$
y^{\mathrm{vi}} + \frac{x^2}{x^2 - 4}\,y''' + \frac{9}{x^2 - 4}\,y = 0.
$$

Los coeficientes de $y^{\mathrm{v}}$, $y^{\mathrm{iv}}$, $y''$ y $y'$ son idénticamente nulos y, por tanto, continuos en todo $\mathbb{R}$. Los coeficientes no nulos son

$$
p(x) = \frac{x^2}{x^2 - 4}, \qquad q(x) = \frac{9}{x^2 - 4}.
$$

El teorema de existencia y unicidad para ecuaciones lineales de orden $n$ garantiza que, si los coeficientes de la forma estándar son continuos en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema de valor inicial con condiciones en $x_0$ tiene una única solución en todo $I$. Basta, entonces, con localizar los puntos donde los coeficientes dejan de ser continuos.

Las funciones $p$ y $q$ son racionales y solo dejan de ser continuas donde se anula el denominador $x^2 - 4$, es decir, en $x = -2$ y $x = 2$. El conjunto de puntos singulares es

$$
S = \{-2, 2\}.
$$

Fuera de $S$ los coeficientes son continuos. Los intervalos más grandes en los que se asegura la existencia de soluciones son las componentes conexas de $\mathbb{R} \setminus S$:

$$
(-\infty,-2),\qquad (-2,2),\qquad (2,\infty).
$$

## Observaciones

Los puntos singulares $x = \pm 2$ son los ceros del coeficiente principal $x^2 - 4$, que multiplica a la derivada de mayor orden. En cada uno de los tres intervalos el problema de valor inicial tiene solución única, cualquiera que sea el punto $x_0$ elegido dentro de él. El teorema no afirma nada en los extremos, que quedan excluidos por ser intervalos abiertos. La ausencia de los términos en $y^{\mathrm{v}}$, $y^{\mathrm{iv}}$, $y''$ y $y'$ no altera el resultado, porque sus coeficientes nulos son continuos en todo $\mathbb{R}$.
