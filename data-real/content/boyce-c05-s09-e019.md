
## Enunciado

En cada uno de los problemas 15 a 20, aplique la integración por partes para hallar la transformada de Laplace de la función dada; $n$ es un entero positivo y $a$ es una constante real.

19. $t^2 \operatorname{sen} at$

## Solución

$$
\mathcal{L}\{t^{2}\sin at\}=\frac{2a(3s^{2}-a^{2})}{(s^{2}+a^{2})^{3}}, \qquad s>0.
$$

## Resolución

Se parte de la definición de la transformada,

$$
\mathcal{L}\{t^{2}\sin at\}=\int_{0}^{\infty} e^{-st}\,t^{2}\sin at\,dt.
$$

Se escribe el seno en forma exponencial, $\sin at=\dfrac{e^{iat}-e^{-iat}}{2i}$. Por linealidad de la integral,

$$
\mathcal{L}\{t^{2}\sin at\}
=\frac{1}{2i}\left[\int_{0}^{\infty} t^{2}e^{-(s-ia)t}\,dt
-\int_{0}^{\infty} t^{2}e^{-(s+ia)t}\,dt\right].
$$

Cada integral es del tipo $\displaystyle\int_{0}^{\infty} t^{2}e^{-\alpha t}\,dt$ con $\operatorname{Re}(\alpha)>0$. La **integración por partes** con $u=t^{2}$ y $dv=e^{-\alpha t}\,dt$ da $du=2t\,dt$ y $v=-\dfrac{e^{-\alpha t}}{\alpha}$, de modo que

$$
\int_{0}^{\infty} t^{2}e^{-\alpha t}\,dt
=\left[-\frac{t^{2}e^{-\alpha t}}{\alpha}\right]_{0}^{\infty}
+\frac{2}{\alpha}\int_{0}^{\infty} t\,e^{-\alpha t}\,dt.
$$

El término de frontera se anula: en $t=0$ porque $t^{2}=0$, y en $t\to\infty$ porque la exponencial decae más rápido que el factor cuadrático cuando $\operatorname{Re}(\alpha)>0$. Una segunda integración por partes sobre $\displaystyle\int_{0}^{\infty} t\,e^{-\alpha t}\,dt$ da $\dfrac{1}{\alpha^{2}}$. Por tanto,

$$
\int_{0}^{\infty} t^{2}e^{-\alpha t}\,dt=\frac{2}{\alpha}\cdot\frac{1}{\alpha^{2}}=\frac{2}{\alpha^{3}}.
$$

Al aplicar este resultado con $\alpha=s-ia$ y $\alpha=s+ia$, cuyas partes reales valen $s>0$,

$$
\mathcal{L}\{t^{2}\sin at\}
=\frac{1}{2i}\left[\frac{2}{(s-ia)^{3}}-\frac{2}{(s+ia)^{3}}\right]
=\frac{1}{i}\left[\frac{1}{(s-ia)^{3}}-\frac{1}{(s+ia)^{3}}\right].
$$

Se combinan las dos fracciones con denominador común $(s^{2}+a^{2})^{3}$:

$$
\frac{1}{(s-ia)^{3}}-\frac{1}{(s+ia)^{3}}
=\frac{(s+ia)^{3}-(s-ia)^{3}}{(s^{2}+a^{2})^{3}}.
$$

Al desarrollar, $(s+ia)^{3}=s^{3}+3is^{2}a-3sa^{2}-ia^{3}$ y $(s-ia)^{3}=s^{3}-3is^{2}a-3sa^{2}+ia^{3}$, de modo que la diferencia vale $6is^{2}a-2ia^{3}=2ia(3s^{2}-a^{2})$. Así,

$$
\mathcal{L}\{t^{2}\sin at\}
=\frac{1}{i}\cdot\frac{2ia(3s^{2}-a^{2})}{(s^{2}+a^{2})^{3}}
=\frac{2a(3s^{2}-a^{2})}{(s^{2}+a^{2})^{3}}.
$$

## Observaciones

La transformada converge para $s>0$, condición que hace positiva la parte real de $s\mp ia$. La función $t^{2}\sin at$ es continua en $[0,\infty)$ y de orden exponencial, así que la transformada existe en esa semirrecta.

El caso $a=0$ es consistente: $t^{2}\sin 0=0$ y la fórmula también se anula.

### Método alternativo: derivada de la transformada

A partir del par básico $\mathcal{L}\{\sin at\}=\dfrac{a}{s^{2}+a^{2}}$, la propiedad $\mathcal{L}\{t^{n}f(t)\}=(-1)^{n}F^{(n)}(s)$ reproduce el resultado con dos derivaciones sucesivas respecto de $s$; se trata de una vía más corta, pero ajena a la integración por partes que pide el enunciado.
