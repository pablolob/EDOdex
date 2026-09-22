
## Enunciado

Suponga que $f$ y $f'$ son continuas para $t \ge 0$ y de orden exponencial cuando $t \to \infty$. Demuestre por integración por partes que si $F(s) = \mathcal{L}\{f(t)\}$, entonces $\lim_{s \to \infty} F(s) = 0$.

## Solución

Con las hipótesis del enunciado, la **integración por partes** reduce la transformada a

$$
F(s) = \frac{1}{s}\left[f(0) + \int_{0}^{\infty} e^{-st} f'(t)\,dt\right],
$$

donde el corchete permanece acotado cuando $s \to \infty$. Por tanto,

$$
\lim_{s \to \infty} F(s) = 0.
$$

## Resolución

Por ser $f$ y $f'$ de orden exponencial, existen constantes $a \ge 0$ y $M > 0$ tales que

$$
|f(t)| \le M e^{at}, \qquad |f'(t)| \le M e^{at}, \qquad t \ge 0,
$$

agrandando $a$ y $M$ si fuera necesario. Para $s > a$ la integral que define la transformada converge y

$$
F(s) = \int_{0}^{\infty} e^{-st} f(t)\,dt = \lim_{R \to \infty} \int_{0}^{R} e^{-st} f(t)\,dt.
$$

En el intervalo $[0,R]$ se aplica **integración por partes** con $u = f(t)$ y $dv = e^{-st}\,dt$, de modo que $du = f'(t)\,dt$ y $v = -\dfrac{e^{-st}}{s}$:

$$
\begin{aligned}
\int_{0}^{R} e^{-st} f(t)\,dt
&= \left[-\frac{f(t)\,e^{-st}}{s}\right]_{0}^{R} + \frac{1}{s}\int_{0}^{R} e^{-st} f'(t)\,dt \\
&= \frac{f(0)}{s} - \frac{f(R)\,e^{-sR}}{s} + \frac{1}{s}\int_{0}^{R} e^{-st} f'(t)\,dt.
\end{aligned}
$$

El término de frontera superior se anula en el límite. En efecto, para $s > a$,

$$
\left|f(R)\,e^{-sR}\right| \le M e^{aR} e^{-sR} = M e^{-(s-a)R} \to 0 \quad \text{cuando } R \to \infty.
$$

Al tomar $R \to \infty$ resulta

$$
F(s) = \frac{f(0)}{s} + \frac{1}{s}\int_{0}^{\infty} e^{-st} f'(t)\,dt.
$$

Sea $G(s) = \displaystyle\int_{0}^{\infty} e^{-st} f'(t)\,dt$. La cota de orden exponencial de $f'$ acota esta integral:

$$
|G(s)| \le \int_{0}^{\infty} e^{-st} |f'(t)|\,dt \le M \int_{0}^{\infty} e^{-(s-a)t}\,dt = \frac{M}{s-a}, \qquad s > a.
$$

Así, $f(0) + G(s)$ está acotado cuando $s \to \infty$ y

$$
|F(s)| \le \frac{|f(0)| + \dfrac{M}{s-a}}{s} \to 0 \qquad (s \to \infty).
$$

En consecuencia, $\lim_{s \to \infty} F(s) = 0$.

## Observaciones

El resultado es una condición necesaria de existencia: la transformada de toda función continua y de orden exponencial, con derivada de orden exponencial, decae al menos como $1/s$ cuando $s \to \infty$. Por eso una función racional en $s$ cuyo numerador tenga grado mayor o igual que el denominador no puede ser la transformada de una función de esta clase.

La hipótesis $s > a$ es la que garantiza que el término de frontera $f(R)e^{-sR}$ desaparezca; sin ella, la integración por partes no conduce al resultado.
