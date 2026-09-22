
## Enunciado

Considere una varilla uniforme de longitud $l$ que tiene una distribución inicial de temperaturas dada por $f(x)$, $0 \le x \le l$. Suponga que la temperatura en el extremo $x = 0$ se mantiene a $0^\circ\text{C}$, mientras que el extremo $x = l$ está aislado de modo que no pasa calor a través de él.
a) Demuestre que las soluciones fundamentales de la ecuación diferencial parcial y las condiciones en la frontera son
$$
u_n(x, t) = e^{-(2n-1)^2\pi^2\alpha^2 t / 4l^2} \sin[(2n-1)\pi x / 2l], \quad n = 1, 2, 3, \dots$$
b) Encuentre un desarrollo formal en serie para la temperatura $u(x, t)$,
$$u(x, t) = \sum_{n=1}^\infty c_n \nu_n(x, t),$$
que también satisfaga la condición inicial $u(x, 0) = f(x)$.
Sugerencia: aunque las soluciones fundamentales sólo comprenden los senos impares, sigue siendo posible representar $f$ mediante una serie de Fourier en la que solamente aparezcan estas funciones. Ver el problema 39 de la sección 10.4.
