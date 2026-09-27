
## Enunciado

**a)** Demuestre que el conjunto
$$\left\{ \sin \frac{\pi}{2L} x, \sin \frac{3\pi}{2L} x, \sin \frac{5\pi}{2L} x, \dots \right\}$$
es ortogonal sobre el intervalo $[0, L]$.

**b)** Encuentre la norma de cada una de las funciones del inciso a). Construya un conjunto ortonormal.

## Solución

El conjunto $\left\{\sin\dfrac{(2n-1)\pi x}{2L}\right\}_{n=1}^{\infty}$ es **ortogonal** sobre $[0,L]$. La norma de cada función es $\sqrt{L/2}$, de modo que el conjunto ortonormal es

$$
\left\{ \sqrt{\frac{2}{L}}\,\sin\frac{(2n-1)\pi x}{2L} \right\}_{n=1}^{\infty}.
$$

## Resolución

Se denota

$$
\phi_n(x)=\sin\frac{(2n-1)\pi x}{2L},\qquad n=1,2,3,\dots
$$

El producto interno usual, con peso $r(x)=1$, es

$$
\langle f,g\rangle=\int_0^L f(x)g(x)\,dx.
$$

**Ortogonalidad.** Para $n\ne m$ se aplica la identidad de producto a suma
$\sin A\sin B=\dfrac{1}{2}\left[\cos(A-B)-\cos(A+B)\right]$ con
$A=\dfrac{(2n-1)\pi x}{2L}$ y $B=\dfrac{(2m-1)\pi x}{2L}$. Entonces

$$
\begin{aligned}
\langle \phi_n,\phi_m\rangle
&= \int_0^L \sin\frac{(2n-1)\pi x}{2L}\,\sin\frac{(2m-1)\pi x}{2L}\,dx \\
&= \frac{1}{2}\int_0^L \left[\cos\frac{(n-m)\pi x}{L}-\cos\frac{(n+m-1)\pi x}{L}\right]dx \\
&= \frac{1}{2}\left[\frac{L}{(n-m)\pi}\sin\frac{(n-m)\pi x}{L}
-\frac{L}{(n+m-1)\pi}\sin\frac{(n+m-1)\pi x}{L}\right]_{0}^{L}
= 0.
\end{aligned}
$$

La última igualdad se sigue de que $n-m$ y $n+m-1$ son enteros distintos de cero: en $x=L$ los argumentos valen $(n-m)\pi$ y $(n+m-1)\pi$, ambos múltiplos enteros de $\pi$, con seno nulo; en $x=0$ también se anulan. Por tanto, todo par de funciones distintas tiene producto interno nulo y el conjunto es ortogonal.

**Normas.** La norma de cada función se obtiene con el producto interno de la función consigo misma. Se usa la reducción de potencia $\sin^2\theta=\dfrac{1-\cos 2\theta}{2}$:

$$
\begin{aligned}
\|\phi_n\|^2
&= \int_0^L \sin^2\frac{(2n-1)\pi x}{2L}\,dx
= \frac{1}{2}\int_0^L \left[1-\cos\frac{(2n-1)\pi x}{L}\right]dx \\
&= \frac{1}{2}\left[x-\frac{L}{(2n-1)\pi}\sin\frac{(2n-1)\pi x}{L}\right]_{0}^{L}
= \frac{1}{2}\left[L-\frac{L}{(2n-1)\pi}\sin(2n-1)\pi\right]
= \frac{L}{2}.
\end{aligned}
$$

Como $\sin(2n-1)\pi=0$, resulta $\|\phi_n\|=\sqrt{L/2}$ para todo $n$.

**Conjunto ortonormal.** Se divide cada función por su norma:

$$
e_n(x)=\frac{\phi_n(x)}{\|\phi_n\|}=\sqrt{\frac{2}{L}}\,\sin\frac{(2n-1)\pi x}{2L}.
$$

Así, $\langle e_n,e_n\rangle=1$ y $\langle e_n,e_m\rangle=0$ para $n\ne m$.

## Observaciones

- El intervalo $[0,L]$ no es simétrico respecto al origen, de modo que la anulación de las integrales no proviene de la paridad. Procede de que las frecuencias son múltiplos enteros, $(2n-1)\pi/(2L)$ y $(2m-1)\pi/(2L)$, cuyas sumas y diferencias dan múltiplos enteros de $\pi/L$.
- Las funciones $\phi_n$ son las funciones propias de $X''+\lambda X=0$ con $X(0)=0$ y $X'(L)=0$, con valores propios $\lambda_n=\left(\dfrac{(2n-1)\pi}{2L}\right)^2$. De ahí que todas tengan la misma norma y que el conjunto no incluya la función constante.
