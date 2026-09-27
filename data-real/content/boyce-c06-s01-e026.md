
## Enunciado

La función gamma. La función gamma se denota por $\Gamma(p)$ y se define por la integral
$$\Gamma(p + 1) = \int_0^\infty e^{-x} x^p \,dx \quad \text{(i)}$$
Esta integral converge en el infinito para toda $p$. Para $p < 0$ también es impropia porque el integrando se vuelve no acotado cuando $x \to 0$. Sin embargo, es posible demostrar que la integral converge en $x = 0$ para $p > -1$.
a) Demuestre que para $p > 0$
$$\Gamma(p + 1) = p \Gamma(p).$$
b) Demuestre que $\Gamma(1) = 1$.
c) Si $p$ es un entero positivo $n$, demuestre que
$$\Gamma(n + 1) = n!.$$
Dado que $\Gamma(p)$ también se define cuando $p$ no es un entero, esta función suministra una extensión de la función factorial para valores no enteros de la variable independiente. Observe que también es coherente para definir $0! = 1$.
d) Demuestre que para $p > 0$
$$p(p + 1)(p + 2) \cdots (p + n - 1) = \frac{\Gamma(p + n)}{\Gamma(p)}.$$
Por tanto, puede determinarse $\Gamma(p)$ para todos los valores positivos de $p$ si se conoce $\Gamma(p)$ en un solo intervalo de longitud unitaria, por ejemplo, $0 < p \le 1$. Es posible demostrar que $\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$. Encuentre $\Gamma\left(\frac{3}{2}\right)$ y $\Gamma\left(\frac{5}{2}\right)$.
