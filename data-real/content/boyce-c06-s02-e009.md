
## Enunciado

Encuentre la transformada de Laplace de la función dada:

9. $f(t) = \begin{cases} 0, & t < \pi \\ t - \pi, & \pi \le t < 2\pi \\ 0, & t \ge 2\pi \end{cases}$

## Solución

La transformada de Laplace de la función dada es

$$
\mathcal{L}\{f(t)\}
= \frac{e^{-\pi s}}{s^{2}} - \frac{e^{-2\pi s}}{s^{2}} - \frac{\pi e^{-2\pi s}}{s},
\qquad s>0.
$$

## Resolución

La función $f$ es nula fuera del intervalo $[\pi,2\pi)$. Por tanto, la integral de definición de la **transformada de Laplace** se reduce a ese intervalo:

$$
\mathcal{L}\{f(t)\}
= \int_{0}^{\infty} e^{-st} f(t)\,dt
= \int_{\pi}^{2\pi} (t-\pi)e^{-st}\,dt.
$$

El cambio de variable $u = t-\pi$ traslada el intervalo a $[0,\pi]$ y extrae el factor $e^{-\pi s}$:

$$
\int_{\pi}^{2\pi} (t-\pi)e^{-st}\,dt
= \int_{0}^{\pi} u\,e^{-s(u+\pi)}\,du
= e^{-\pi s}\int_{0}^{\pi} u\,e^{-su}\,du.
$$

La integral restante se calcula por **integración por partes**, derivando el factor $u$ e integrando $e^{-su}\,du$:

$$
\begin{aligned}
\int_{0}^{\pi} u\,e^{-su}\,du
&= \left[-\frac{u\,e^{-su}}{s}\right]_{0}^{\pi}
   + \frac{1}{s}\int_{0}^{\pi} e^{-su}\,du \\
&= -\frac{\pi e^{-\pi s}}{s}
   + \frac{1}{s}\cdot\frac{1-e^{-\pi s}}{s} \\
&= \frac{1-e^{-\pi s}}{s^{2}} - \frac{\pi e^{-\pi s}}{s}.
\end{aligned}
$$

Al multiplicar por el factor $e^{-\pi s}$ resulta

$$
\mathcal{L}\{f(t)\}
= \frac{e^{-\pi s}}{s^{2}} - \frac{e^{-2\pi s}}{s^{2}} - \frac{\pi e^{-2\pi s}}{s},
$$

válido para $s>0$, donde la integral converge.

## Observaciones

La función es continua en $t=\pi$, donde los dos primeros tramos coinciden en el valor $0$, pero presenta una discontinuidad de salto en $t=2\pi$:

$$
\lim_{t\to 2\pi^-} f(t) = \pi, \qquad f(2\pi) = 0,
$$

es decir, un salto de tamaño $\pi$. El valor de $f$ en un punto aislado no altera la integral, de modo que la transformada calculada sigue siendo válida.

### Método alternativo: segundo teorema de traslación

La función se escribe con **funciones escalón unitario** como

$$
f(t) = (t-\pi)U(t-\pi) - (t-2\pi)U(t-2\pi) - \pi U(t-2\pi).
$$

Con $\mathcal{L}\{g(t-a)U(t-a)\} = e^{-as}G(s)$, $\mathcal{L}\{t\} = \dfrac{1}{s^{2}}$ y $\mathcal{L}\{1\} = \dfrac{1}{s}$, se recupera el mismo resultado:

$$
\mathcal{L}\{f(t)\}
= \frac{e^{-\pi s}}{s^{2}}
  - \frac{e^{-2\pi s}}{s^{2}}
  - \frac{\pi e^{-2\pi s}}{s}.
$$
