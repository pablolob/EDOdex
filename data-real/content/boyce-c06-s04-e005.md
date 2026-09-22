
## Enunciado

En cada uno de los problemas 1 a 12, encuentre la solución del problema con valor inicial dado por medio de la transformada de Laplace.

5. $y'' + 2y' + 3y = \sin t + \delta(t - \pi); \quad y(0) = 0, \ y'(0) = 1$

## Solución

$$
y(t) = \frac{1}{\sqrt{2}}\,e^{-t}\sin(\sqrt{2}\,t) + \frac{1}{4}\,e^{-t}\cos(\sqrt{2}\,t) + \frac{1}{4}(\sin t - \cos t) + \frac{1}{\sqrt{2}}\,u_\pi(t)\,e^{-(t-\pi)}\sin\!\bigl(\sqrt{2}(t-\pi)\bigr),
$$

donde $u_\pi(t) = u(t-\pi)$ es el escalón unitario. Equivalentemente, por tramos,

$$
y(t) = \begin{cases}
\dfrac{1}{\sqrt{2}}\,e^{-t}\sin(\sqrt{2}\,t) + \dfrac{1}{4}\,e^{-t}\cos(\sqrt{2}\,t) + \dfrac{1}{4}(\sin t - \cos t), & 0 \le t < \pi, \\[10pt]
\dfrac{1}{\sqrt{2}}\,e^{-t}\sin(\sqrt{2}\,t) + \dfrac{1}{4}\,e^{-t}\cos(\sqrt{2}\,t) + \dfrac{1}{4}(\sin t - \cos t) + \dfrac{1}{\sqrt{2}}\,e^{-(t-\pi)}\sin\!\bigl(\sqrt{2}(t-\pi)\bigr), & t \ge \pi.
\end{cases}
$$

## Resolución

Se aplica la **transformada de Laplace**, indicada porque el forzante combina un término continuo con un **impulso de Dirac**. Sea $Y(s) = \mathscr{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 1$,

$$
\mathscr{L}\{y'\} = sY(s) - y(0) = sY(s),
\qquad
\mathscr{L}\{y''\} = s^2 Y(s) - s\,y(0) - y'(0) = s^2 Y(s) - 1.
$$

Las transformadas de los forzantes son $\mathscr{L}\{\sin t\} = \dfrac{1}{s^2+1}$ y $\mathscr{L}\{\delta(t-\pi)\} = e^{-\pi s}$. Al transformar la ecuación resulta

$$
s^2 Y(s) - 1 + 2sY(s) + 3Y(s) = \frac{1}{s^2+1} + e^{-\pi s},
$$

es decir,

$$
(s^2 + 2s + 3)\,Y(s) = 1 + \frac{1}{s^2+1} + e^{-\pi s},
$$

de donde, al despejar,

$$
Y(s) = \frac{1}{s^2+2s+3} + \frac{1}{(s^2+2s+3)(s^2+1)} + \frac{e^{-\pi s}}{s^2+2s+3}.
$$

Como $s^2+2s+3 = (s+1)^2+2$, el primero y el tercer sumando contienen el mismo par básico:

$$
\mathscr{L}^{-1}\!\left\{\frac{1}{(s+1)^2+2}\right\} = \frac{1}{\sqrt{2}}\,e^{-t}\sin(\sqrt{2}\,t).
$$

El segundo sumando se descompone en **fracciones parciales**:

$$
\frac{1}{(s^2+2s+3)(s^2+1)} = \frac{-s+1}{4(s^2+1)} + \frac{s+1}{4(s^2+2s+3)}.
$$

Su transformada inversa es

$$
\frac{1}{4}(\sin t - \cos t) + \frac{1}{4}\,e^{-t}\cos(\sqrt{2}\,t),
$$

pues $\mathscr{L}^{-1}\!\left\{\dfrac{s+1}{(s+1)^2+2}\right\} = e^{-t}\cos(\sqrt{2}\,t)$.

El tercer sumando tiene la forma $e^{-\pi s}F(s)$ con $F(s) = \dfrac{1}{(s+1)^2+2}$ y $f(t) = \dfrac{1}{\sqrt{2}}e^{-t}\sin(\sqrt{2}\,t)$. Por el **segundo teorema de traslación**, $\mathscr{L}^{-1}\{e^{-\pi s}F(s)\} = u_\pi(t)f(t-\pi)$, es decir,

$$
\mathscr{L}^{-1}\!\left\{\frac{e^{-\pi s}}{(s+1)^2+2}\right\} = \frac{1}{\sqrt{2}}\,u_\pi(t)\,e^{-(t-\pi)}\sin\!\bigl(\sqrt{2}(t-\pi)\bigr).
$$

Reuniendo los tres términos,

$$
y(t) = \frac{1}{\sqrt{2}}\,e^{-t}\sin(\sqrt{2}\,t) + \frac{1}{4}\,e^{-t}\cos(\sqrt{2}\,t) + \frac{1}{4}(\sin t - \cos t) + \frac{1}{\sqrt{2}}\,u_\pi(t)\,e^{-(t-\pi)}\sin\!\bigl(\sqrt{2}(t-\pi)\bigr).
$$

La solución satisface las condiciones iniciales. En $t=0$ los términos exponenciales valen $\dfrac{1}{\sqrt2}\sin 0 = 0$ y $\dfrac14 e^{0}\cos 0 = \dfrac14$, el término particular vale $-\dfrac14$ y el escalón es nulo; por tanto $y(0) = 0$. Para $0 \le t < \pi$ la derivada es

$$
y'(t) = e^{-t}\!\left(\cos(\sqrt{2}\,t) - \frac{1}{\sqrt{2}}\sin(\sqrt{2}\,t)\right) - \frac{1}{4}\,e^{-t}\!\left(\cos(\sqrt{2}\,t) + \sqrt{2}\sin(\sqrt{2}\,t)\right) + \frac{1}{4}(\cos t + \sin t),
$$

de modo que $y'(0) = 1 - \dfrac14 + \dfrac14 = 1$. El impulso no modifica la posición en $t=\pi$, pues el término con escalón se anula allí, pero introduce un salto de magnitud $1$ en la derivada: $y'(\pi^+) - y'(\pi^-) = 1$, coherente con el coeficiente de $\delta(t-\pi)$. La solución es válida para todo $t \ge 0$.

## Observaciones

El forzante sinusoidal aporta la respuesta particular $\frac14(\sin t - \cos t)$, que no se extingue, mientras que los términos con $e^{-t}$ son transitorios. El impulso concentrado en $t=\pi$ reinicia la parte transitoria con amplitud $\frac{1}{\sqrt2}e^{-(t-\pi)}$, de modo que su efecto decae a partir de $t=\pi$ y no altera la respuesta permanente.
