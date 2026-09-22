
## Enunciado

En cada uno de los problemas 11 a 14 recuerde que $\cos bt = (e^{ibt} + e^{-ibt})/2$ y $\operatorname{sen} bt = (e^{ibt} - e^{-ibt})/2i$. Si se supone que las fórmulas de integración elementales necesarias se extienden hasta este caso, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

11. $\operatorname{sen} bt$

## Solución

$$
\mathcal{L}\{\sin bt\} = \frac{b}{s^{2}+b^{2}}, \qquad s>0.
$$

## Resolución

La transformada se calcula directamente de su definición integral,

$$
\mathcal{L}\{\sin bt\} = \int_0^\infty e^{-st}\sin bt\,dt.
$$

Se sustituye la identidad del enunciado, $\sin bt = \dfrac{e^{ibt}-e^{-ibt}}{2i}$, y se agrupan las exponenciales:

$$
\begin{aligned}
\mathcal{L}\{\sin bt\}
&= \int_0^\infty e^{-st}\,\frac{e^{ibt}-e^{-ibt}}{2i}\,dt \\
&= \frac{1}{2i}\int_0^\infty \left(e^{-(s-ib)t}-e^{-(s+ib)t}\right)dt.
\end{aligned}
$$

Para $s>0$ se cumple $\operatorname{Re}(s-ib)=\operatorname{Re}(s+ib)=s>0$. Cada integral impropia converge y vale

$$
\int_0^\infty e^{-(s\mp ib)t}\,dt = \frac{1}{s\mp ib}.
$$

Al sustituir,

$$
\begin{aligned}
\mathcal{L}\{\sin bt\}
&= \frac{1}{2i}\left(\frac{1}{s-ib}-\frac{1}{s+ib}\right) \\
&= \frac{1}{2i}\cdot\frac{(s+ib)-(s-ib)}{(s-ib)(s+ib)} \\
&= \frac{1}{2i}\cdot\frac{2ib}{s^{2}+b^{2}} \\
&= \frac{b}{s^{2}+b^{2}}.
\end{aligned}
$$

## Observaciones

La transformada está definida para $s>0$, condición que garantiza la convergencia de las integrales impropias. El resultado es una función par de $b$; para $b=0$ se obtiene $\mathcal{L}\{0\}=0$, coherente con $\sin 0=0$. La constante real $a$ que menciona el enunciado no interviene en este apartado.
