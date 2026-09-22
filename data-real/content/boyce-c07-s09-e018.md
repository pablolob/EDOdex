
## Enunciado

Un procedimiento alternativo para construir la solución $y = \phi(t)$ del problema con valor inicial $y' = f(t, y), \, y(t_0) = y_0$ es el método de iteración. Si se integra la ecuación diferencial desde $t_0$ hasta $t$ se obtiene
$$\phi(t) = y_0 + \int_{t_0}^t f[s, \phi(s)]\,ds \tag{i}$$
Si, en el segundo miembro de la ecuación (i) se sustituye $\phi(s)$ por una función particular, es posible evaluar la integral y obtener una nueva función $\phi$. Esto sugiere el procedimiento de interacción
$$\phi_{n + 1}(t) = y_0 + \int_{t_0}^t f[s, \phi_n(s)]\,ds \tag{ii}$$
Con una elección inicial de $\phi_0(t)$, se puede utilizar la ecuación (ii) para generar una sucesión de funciones $\phi_n(t)$ que se aproxime a la solución exacta $y$, con condiciones adecuadas sobre $f(t, y)$, en realidad converge a $\phi(t)$ cuando $n \to \infty$. De hecho, se utilizó este procedimiento de iteración para establecer la existencia de una solución del problema con valor inicial de la sección 2.11. Para calcular realmente $\phi(t)$ en general este procedimiento es pesado para manejar ya que puede ser difícil, si no imposible, evaluar la integral de $f[s, \phi_n(s)], n = 0, 1, 2, \dots$ Al tomar $\phi_0(t) = 1$, determine $\phi_3(t)$ para cada uno de los siguientes problemas con valor inicial. Calcule también $\phi_2(0.4) \text{ y } \phi_3(0.4)$ y compare el resultado obtenido al aplicar el método de Euler.
a) $y' = 2y - 1, \quad y(0) = 1$
b) $y' = \frac{1}{2} - t + 2y, \quad y(0) = 1$
c) $y' = t^2 + y^2, \quad y(0) = 1; \quad \text{calcule sólo } \phi_2(t)$
