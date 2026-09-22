
## Enunciado

Considere la sucesión $\phi_n(x) = 2nxe^{-nx^2}$, $0 \le x \le 1$.

a) Demuestre que $\lim_{n\to\infty} \phi_n(x) = 0$ para $0 \le x \le 1$ y, por lo tanto, que

$$\int_0^1 \lim_{n\to\infty} \phi_n(x) \,dx = 0.$$

b) Demuestre que $\int_0^1 2nxe^{-nx^2} \,dx = 1 - e^{-n}$ y, de donde, que

$$\lim_{n\to\infty} \int_0^1 \phi_n(x) \,dx = 1.$$

Este ejemplo demuestra que no necesariamente es cierto que

$$\lim_{n\to\infty} \int_a^b \phi_n(x) \,dx = \int_a^b \lim_{n\to\infty} \phi_n(x) \,dx,$$

aun cuando $\lim_{n\to\infty} \phi_n(x)$ exista y sea continuo.
