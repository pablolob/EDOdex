
## Enunciado

En este problema se ilustra que el parámetro eigenvalor algunas veces aparece en las condiciones en la frontera, así como en la ecuación diferencial. Considere las vibraciones longitudinales de una barra elástica uniforme de longitud $l$. Es posible demostrar que el desplazamiento axial $u(x, t)$ satisface la ecuación diferencial parcial

$$ (E/\rho) u_{xx} = u_{tt}, \quad 0 < x < l, \quad t > 0 \tag{i} $$

en donde $E$ es el módulo de Young y $\rho$ es la masa por unidad de volumen. Si el extremo $x = 0$ está fijo, entonces la condición en la frontera allí es

$$ u(0, t) = 0, \quad t > 0. \tag{ii} $$

Suponga que el extremo $x = l$ está sujeto rígidamente a una masa $m$, y que ésta es su única restricción. Se pueden obtener las condiciones en la frontera aquí al escribir la ley de Newton para la masa. Con base en la teoría de la elasticidad, es posible demostrar que la fuerza ejercida por la barra sobre la masa se expresa por $-EA u_x(l, t)$; de donde, la condición en la frontera es

$$ EA u_x(l, t) + m u_{tt}(l, t) = 0, \quad t > 0. \tag{iii} $$

a) Suponga que $u(x, t) = X(x)T(t)$ y demuestre que $X(x)$ y $T(t)$ satisfacen las ecuaciones diferenciales

$$ X'' + \lambda X = 0, \tag{iv} $$

$$ T'' + \lambda (E/\rho) T = 0. \tag{v} $$

b) Demuestre que las condiciones en la frontera son

$$ X(0) = 0, \quad X'(l) - \gamma \lambda l X(l) = 0, \tag{vi} $$

en donde $\gamma = m / \rho A l$ es un parámetro adimensional que da la razón de la masa en el extremo a la masa de la barra.

Sugerencia: aplique la ecuación diferencial para $T(t)$ al simplificar la condición en la frontera en $x = l$.

c) Determine la forma de las eigenfunciones y la ecuación satisfecha por los eigenvalores reales de las ecuaciones (iv) y (vi). Encuentre los dos primeros eigenvalores $\lambda_1$ y $\lambda_2$ si $\gamma = 0.5$.
