
## Enunciado

En cada uno de los problemas 15 a 20, aplique la integración por partes para hallar la transformada de Laplace de la función dada; $n$ es un entero positivo y $a$ es una constante real.

16. $t \operatorname{sen} at$

## Solución

$$
\mathcal{L}\{t\sin at\}=\frac{2as}{(s^{2}+a^{2})^{2}}, \qquad s>0.
$$

## Resolución

La transformada de Laplace se define mediante la integral impropia

$$
\mathcal{L}\{f(t)\}=\int_0^\infty e^{-st}f(t)\,dt.
$$

Para $f(t)=t\sin at$,

$$
\mathcal{L}\{t\sin at\}=\int_0^\infty e^{-st}t\sin at\,dt.
$$

Se aplica la **integración por partes** con $u=t$ y $dv=e^{-st}\sin at\,dt$. Entonces $du=dt$ y una primitiva es

$$
v=\int e^{-st}\sin at\,dt=-\frac{e^{-st}(s\sin at+a\cos at)}{s^{2}+a^{2}}.
$$

La fórmula de integración por partes da

$$
\begin{aligned}
\mathcal{L}\{t\sin at\}
&=\left[-\frac{t\,e^{-st}(s\sin at+a\cos at)}{s^{2}+a^{2}}\right]_0^\infty
+\frac{1}{s^{2}+a^{2}}\int_0^\infty e^{-st}(s\sin at+a\cos at)\,dt \\
&=\frac{s}{s^{2}+a^{2}}\int_0^\infty e^{-st}\sin at\,dt
+\frac{a}{s^{2}+a^{2}}\int_0^\infty e^{-st}\cos at\,dt.
\end{aligned}
$$

El término de frontera se anula: en $t=0$ por el factor $t$, y en $t\to\infty$ porque $e^{-st}$ domina el crecimiento lineal cuando $s>0$.

Las dos integrales restantes son los pares básicos de la sección,

$$
\int_0^\infty e^{-st}\sin at\,dt=\frac{a}{s^{2}+a^{2}},
\qquad
\int_0^\infty e^{-st}\cos at\,dt=\frac{s}{s^{2}+a^{2}},
\qquad s>0.
$$

Al sustituir,

$$
\begin{aligned}
\mathcal{L}\{t\sin at\}
&=\frac{s}{s^{2}+a^{2}}\cdot\frac{a}{s^{2}+a^{2}}
+\frac{a}{s^{2}+a^{2}}\cdot\frac{s}{s^{2}+a^{2}} \\
&=\frac{2as}{(s^{2}+a^{2})^{2}}, \qquad s>0.
\end{aligned}
$$

## Observaciones

La integral que define la transformada converge para $s>0$: allí $|t\sin at|\le t$ y $\int_0^\infty t\,e^{-st}\,dt$ converge, de modo que el término de frontera se anula y los dos pares básicos son válidos. Con $a=0$ la función $t\sin at$ es idénticamente nula y la fórmula devuelve $0$, como corresponde.
