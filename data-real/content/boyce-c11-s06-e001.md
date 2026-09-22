
## Enunciado

En este problema se demuestra que la convergencia puntual de una sucesión $S_n(x)$ no incluye convergencia en la media e inversamente.
a) Sea $S_n(x) = n\sqrt{x}e^{-nx^2/2}$, $0 \le x \le 1$. Demuestre que $S_n(x) \to 0$ cuando $n \to \infty$ para cada $x$ en $0 \le x \le 1$. Demuestre también que
$$R_n = \int_0^1 [0 - S_n(x)]^2 \, dx = \frac{n}{2}(1 - e^{-n}),$$
de donde, que $R_n \to \infty$ cuando $n \to \infty$. Por tanto, la convergencia puntual no incluye convergencia en la media.
b) Sean $S_n(x) = x^n$ para $0 \le x \le 1$ y $f(x) = 0$ para $0 \le x \le 1$. Demuestre que
$$R_n = \int_0^1 [f(x) - S_n(x)]^2 \, dx = \frac{1}{2n + 1},$$
de donde, $S_n(x)$ converge a $f(x)$ en la media. Demuestre también que $S_n(x)$ no converge a $f(x)$ puntualmente en todo $0 \le x \le 1$. Por tanto, la convergencia en la media no implica convergencia puntual.
