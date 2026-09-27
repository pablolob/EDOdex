
## Enunciado

Considere la transformada de Laplace de $t^p$, en donde $p > -1$.
a) Con referencia al problema 26, demuestre que
$$\mathcal{L}\{t^p\} = \int_0^\infty e^{-st} t^p \,dt = \frac{1}{s^{p+1}} \int_0^\infty e^{-x} x^p \,dx = \frac{\Gamma(p + 1)}{s^{p+1}}, \quad s > 0.$$
b) Si $p$ es un entero positivo $n$, demuestre que
$$\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}, \quad s > 0.$$
c) Demuestre que
$$\mathcal{L}\{t^{-1/2}\} = \frac{2}{\sqrt{s}} \int_0^\infty e^{-x^2} \,dx, \quad s > 0.$$
Es posible demostrar que
$$\int_0^\infty e^{-x^2} \,dx = \frac{\sqrt{\pi}}{2};$$
de donde,
$$\mathcal{L}\{t^{-1/2}\} = \sqrt{\frac{\pi}{s}}, \quad s > 0.$$
d) Demuestre que
$$\mathcal{L}\{t^{1/2}\} = \frac{\sqrt{\pi}}{2s^{3/2}}, \quad s > 0.$$
