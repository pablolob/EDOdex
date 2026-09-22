
## Enunciado

Considere el problema con valor inicial $y' = f(t, y), y(t_0) = y_0$. La fórmula de Taylor con tres términos correspondiente es

$$y_{n+1} = y_n + hy'_n + \frac{h^2}{2}y''_n \quad \text{(i)}$$

Para deducir otras fórmulas de exactitud semejante, considere la expresión

$$y_{n+1} = y_n + h\{af(t_n, y_n) + bf[t_n + \alpha h, y_n + \beta f(t_n, y_n)]\} \quad \text{(ii)}$$

en donde $a, b, \alpha$ y $\beta$ son arbitrarias.

a) Desarrolle el segundo miembro de la ecuación (ii) alrededor del punto $(t_n, y_n)$ para demostrar que la diferencia entre las fórmulas (i) y (ii) es proporcional a $h^3$ si $a + b = 1$, $ba = 1/2$, y $b\beta = 1/2$. *Sugerencia:* use el desarrollo de Taylor para una función de dos variables que se dio en el problema 15 b) de la sección 8.3.
b) Demuestre que las ecuaciones para $a, b, \alpha$ y $\beta$ tienen la infinidad de soluciones $a = 1 - \lambda, b = \lambda$ y $\alpha = \beta = 1/2\lambda$, para cualquier $\lambda \neq 0$.
c) Para $\lambda = 1/2$, demuestre que la ecuación (ii) se reduce a la fórmula mejorada de Euler que se dio en la ecuación (5) de la sección 8.3.
d) Para $\lambda = 1$, demuestre que la ecuación (ii) se reduce a la fórmula modificada de Euler que se dio en el problema 20 de la sección 8.3.
