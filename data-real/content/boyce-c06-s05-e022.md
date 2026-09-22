
## Enunciado

**La tautócrona.** Un problema de interés en la historia de las matemáticas es la de encontrar la tautócrona: la curva por la cual una partícula se deslizaría libremente sólo bajo la acción de la gravedad y llega a la parte inferior de esa curva en el mismo tiempo, sin importar su punto de partida sobre la misma. Este problema surgió en la construcción de un reloj de péndulo cuyo periodo es independiente de la amplitud de su movimiento. La tautócrona fue descubierta por Christian Huygens (1629-1695) en 1673 mediante métodos geométricos y posteriormente Leibniz y Jakob Bernoulli lo hicieron aplicando argumentos analíticos. La solución de Bernoulli (en 1690) fue una de las primeras ocasiones en las que se resolvió de manera explícita una ecuación diferencial.

En la figura 6.6.2 se muestra la configuración geométrica. El punto de partida $P(a, b)$ está unido al punto terminal $(0, 0)$ por el arco $C$. La longitud del arco $s$ se mide desde el origen y $f(t)$ denota la razón de cambio de $s$ con respecto a $y$:

$$f(y) = \frac{ds}{dy} = \left[ 1 + \left(\frac{dx}{dy}\right)^2 \right]^{1/2}. \tag{i}$$

Por el principio de conservación de la energía se deduce que el tiempo $T(b)$ necesario para que una partícula se deslice de $P$ al origen es

$$T(b) = \frac{1}{\sqrt{2g}} \int_0^b \frac{f(y)}{\sqrt{b - y}} \,dy. \tag{ii}$$

a) Suponga que $T(b) = T_0$, una constante, para cada $b$. Al tomar la transformada de Laplace de la ecuación (ii) en este caso y aplicar el teorema de convolución, demuestre que

$$F(s) = \sqrt{\frac{2g}{\pi}} \frac{T_0}{\sqrt{s}}; \tag{iii}$$
