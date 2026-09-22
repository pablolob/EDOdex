
## Enunciado

**La función gamma.** La función gamma se denota por $\Gamma(p)$ y se define por la integral

$$\Gamma(p + 1) = \int_0^\infty e^{-x} x^p \,dx \quad \text{(i)}$$

Esta integral converge en el infinito para toda $p$. Para $p < 0$ también es impropia porque el integrando se vuelve no acotado cuando $x \to 0$. Sin embargo, es posible demostrar que la integral converge en $x = 0$ para $p > -1$.

a) Demuestre que para $p > 0$

$$\Gamma(p + 1) = p\Gamma(p).$$

b) Demuestre que $\Gamma(1) = 1$.

c) Si $(p)$ es un entero positivo $n$, demuestre que

$$\Gamma(n + 1) = n!.$$

Dado que $\Gamma(p)$ también se define cuando $p$ no es un entero, esta función suministra una extensión de la función factorial para valores no enteros de la variable independiente. Observe que también es coherente para definir $0! = 1$.

d) Demuestre que para $p > 0$

$$p(p + 1)(p + 2) \cdots (p + n - 1) = \frac{\Gamma(p + n)}{\Gamma(p)}.$$

Por tanto, puede determinarse $\Gamma(p)$ para todos los valores positivos de $p$ si se conoce $\Gamma(p)$ en un solo intervalo de longitud unitaria, por ejemplo, $0 < p \le 1$. Es posible demostrar que $\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$. Encuentre $\Gamma\left(\frac{3}{2}\right)$ y $\Gamma\left(\frac{1}{2}\right).$

## Solución

Se demuestran las cuatro propiedades de la función gamma:

$$
\Gamma(p+1)=p\,\Gamma(p)\ (p>0), \qquad \Gamma(1)=1, \qquad \Gamma(n+1)=n!, \qquad p(p+1)\cdots(p+n-1)=\frac{\Gamma(p+n)}{\Gamma(p)}.
$$

Con $\Gamma\left(\frac{1}{2}\right)=\sqrt{\pi}$, los valores pedidos son

$$
\Gamma\!\left(\frac{3}{2}\right)=\frac{\sqrt{\pi}}{2}, \qquad \Gamma\!\left(\frac{1}{2}\right)=\sqrt{\pi}.
$$

## Resolución

La definición de la función gamma se escribe, con el cambio de índice $q=p+1$, en la forma equivalente

$$
\Gamma(q)=\int_0^{\infty} e^{-x}x^{q-1}\,dx.
$$

**Apartado a.** Se integra por partes la integral que define $\Gamma(p+1)$ con $u=x^p$ y $dv=e^{-x}\,dx$, de modo que $du=p\,x^{p-1}\,dx$ y $v=-e^{-x}$:

$$
\begin{aligned}
\Gamma(p+1)
&= \int_0^{\infty} e^{-x}x^p\,dx \\
&= \left[-x^p e^{-x}\right]_0^{\infty} + p\int_0^{\infty} e^{-x}x^{p-1}\,dx \\
&= 0 + p\,\Gamma(p)
= p\,\Gamma(p).
\end{aligned}
$$

El término de frontera se anula: en $x\to\infty$ el factor exponencial domina a $x^p$, y en $x=0$ se tiene $0^p=0$ porque $p>0$. La última integral es $\Gamma(p)$ por la definición equivalente.

**Apartado b.** Para $p=0$,

$$
\Gamma(1)=\int_0^{\infty} e^{-x}x^0\,dx=\int_0^{\infty} e^{-x}\,dx=\left[-e^{-x}\right]_0^{\infty}=1.
$$

**Apartado c.** Se aplica repetidamente la recurrencia del apartado a. Para $n$ entero positivo,

$$
\Gamma(n+1)=n\,\Gamma(n)=n(n-1)\Gamma(n-1)=\cdots=n(n-1)\cdots 1\cdot\Gamma(1)=n!\,\Gamma(1)=n!,
$$

donde el último paso usa $\Gamma(1)=1$. El caso $n=0$ reproduce la convención $0!=1$.

**Apartado d.** Se itera la recurrencia del apartado a con los argumentos $p+n-1,\,p+n-2,\dots,p$:

$$
\Gamma(p+n)=(p+n-1)(p+n-2)\cdots p\,\Gamma(p).
$$

Al dividir entre $\Gamma(p)$, que es distinto de cero para $p>0$, resulta

$$
\frac{\Gamma(p+n)}{\Gamma(p)}=p(p+1)(p+2)\cdots(p+n-1).
$$

**Apartado e.** Con $p=\frac{1}{2}$ en la recurrencia del apartado a y el valor dado $\Gamma\left(\frac{1}{2}\right)=\sqrt{\pi}$,

$$
\Gamma\!\left(\frac{3}{2}\right)=\Gamma\!\left(\frac{1}{2}+1\right)=\frac{1}{2}\,\Gamma\!\left(\frac{1}{2}\right)=\frac{\sqrt{\pi}}{2}.
$$

El valor $\Gamma\left(\frac{1}{2}\right)=\sqrt{\pi}$ es el proporcionado en el enunciado.

## Observaciones

La integral que define $\Gamma(q)$ converge para $q>-1$; en particular, la recurrencia permite extender $\Gamma$ al intervalo $(-1,0)$. Por ejemplo, de $\Gamma\left(\frac{1}{2}\right)=-\frac{1}{2}\Gamma\left(-\frac{1}{2}\right)$ se obtiene $\Gamma\left(-\frac{1}{2}\right)=-2\sqrt{\pi}$, coherente con la definición integral porque $-\frac{1}{2}>-1$. La función gamma extiende así el factorial a valores no enteros y negativos, y es la herramienta que permite escribir $\mathcal{L}\{t^p\}=\Gamma(p+1)/s^{p+1}$ para $p>-1$.
