
## Enunciado

35. Considere el problema con valores en la frontera
$$L[y] = -[p(x)y']' + q(x)y = \mu r(x)y + f(x), \tag{i}$$
$$a_1 y(0) + a_2 y'(0) = 0, \quad b_1 y(1) + b_2 y'(1) = 0. \tag{ii}$$
Según el texto, la solución $y = \phi(x)$ se expresa por la ecuación (13), en donde $c_n$ se define por la (9), siempre que $\mu$ no sea un eigenvalor del problema homogéneo correspondiente. En este caso también se puede demostrar que la solución se expresa por una integral función de Green de la forma
$$y = \phi(x) = \int_0^1 G(x, s, \mu) f(s) \,ds. \tag{iii}$$
Observe que en este problema la función de Green también depende del parámetro $\mu$.
a) Demuestre que si estas dos expresiones para $\phi(x)$ han de ser equivalentes, entonces
$$G(x, s, \mu) = \sum_{i=1}^\infty \frac{\phi_i(x)\phi_i(s)}{\lambda_i - \mu}, \tag{iv}$$
en donde $\lambda_i$ y $\phi_i$ son los eigenvalores y las eigenfunciones, respectivamente, de las ecuaciones (3), (2) del texto. Una vez más se observa a partir de la (iv) que $\mu$ no puede ser igual a algún eigenvalor $\lambda_i$.
b) Deduzca la ecuación (iv) directamente al suponer que $G(x, s, \mu)$ tiene el desarrollo en eigenfunciones
$$G(x, s, \mu) = \sum_{i=1}^\infty a_i(x, \mu)\phi_i(s); \tag{v}$$
determine $a_i(x, \mu)$ al multiplicar (iv) por $r(s)\phi_j(s)$ e integrar con respecto a $s$ desde $s = 0$ hasta $s = 1$.
Sugerencia: Demuestre primero que $\lambda_i$ y $\phi_i$ satisfacen la ecuación
$$\phi_i(x) = (\lambda_i - \mu) \int_0^1 G(x, s, \mu)r(s)\phi_i(s)\,ds. \tag{vi}$$
