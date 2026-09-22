
## Enunciado

En cada uno de los problemas 27 a 32, verifique que la función o funciones dadas son una solución de la ecuación diferencial parcial correspondiente.

30. $u_{xx} + u_{yy} + u_{zz} = 0; \quad u = (x^2 + y^2 + z^2)^{-1/2}, \quad (x, y, z) \neq (0, 0, 0)$

## Solución

La función $u = (x^2 + y^2 + z^2)^{-1/2}$ satisface la ecuación de Laplace en todo el espacio salvo el origen:

$$
u_{xx} + u_{yy} + u_{zz} = 0, \qquad (x, y, z) \neq (0, 0, 0).
$$

## Resolución

Se introduce el radio

$$
r = (x^2 + y^2 + z^2)^{1/2},
$$

de modo que $u = r^{-1}$. La derivada parcial de $r$ respecto de $x$ es $\frac{\partial r}{\partial x} = \frac{x}{r}$. Aplicando la **regla de la cadena** se obtiene

$$
u_x = -r^{-2}\,\frac{\partial r}{\partial x} = -x\,r^{-3}.
$$

La segunda derivada parcial combina la **regla del producto** con la regla de la cadena:

$$
\begin{aligned}
u_{xx} &= \frac{\partial}{\partial x}\left(-x\,r^{-3}\right) \\
&= -r^{-3} + 3x\,r^{-4}\,\frac{x}{r} \\
&= -r^{-3} + 3x^{2}\,r^{-5}.
\end{aligned}
$$

Por simetría, las derivadas segundas respecto de $y$ y de $z$ son

$$
u_{yy} = -r^{-3} + 3y^{2}\,r^{-5}, \qquad u_{zz} = -r^{-3} + 3z^{2}\,r^{-5}.
$$

La suma de las tres derivadas segundas es

$$
\begin{aligned}
u_{xx} + u_{yy} + u_{zz}
&= -3r^{-3} + 3(x^{2} + y^{2} + z^{2})\,r^{-5} \\
&= -3r^{-3} + 3r^{2}\,r^{-5} \\
&= -3r^{-3} + 3r^{-3} = 0.
\end{aligned}
$$

Como $r > 0$ para todo $(x, y, z) \neq (0, 0, 0)$, el desarrollo es válido en todo el dominio indicado. La función dada es solución de la ecuación diferencial parcial.

## Observaciones

La función $u = r^{-1}$ es el potencial newtoniano en tres dimensiones: es armónica (satisface la ecuación de Laplace) en todo el espacio salvo el origen, donde no está definida. La simetría radial de $u$ hace que las tres derivadas segundas tengan la misma forma, por lo que basta calcular un solo caso y trasladarlo a las otras dos variables.
