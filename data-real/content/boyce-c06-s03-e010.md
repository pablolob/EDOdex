
## Enunciado

En cada uno de los problemas 1 a 13, encuentre la solución del problema con valor inicial dado.

10. $y'' + y' + \frac{5}{4}y = g(t); \quad y(0) = 0, \ y'(0) = 0 \quad g(t) = \begin{cases} \operatorname{sen} t, & 0 \le t < \pi \\ 0, & t \ge \pi \end{cases}$

## Solución

$$
y(t) =
\begin{cases}
\dfrac{1}{17}\left[e^{-t/2}\left(16\cos t+4\sin t\right)-16\cos t+4\sin t\right], & 0\le t<\pi,\\[10pt]
\dfrac{4}{17}\left(1-e^{\pi/2}\right)e^{-t/2}\left(4\cos t+\sin t\right), & t\ge\pi.
\end{cases}
$$

## Resolución

La forzante vale $g(t)=\sin t$ en $0\le t<\pi$ y $g(t)=0$ en $t\ge\pi$. Se escribe con la **función escalón unitario** como

$$
g(t)=\sin t-u_\pi(t)\sin t=\sin t+u_\pi(t)\sin(t-\pi),
$$

pues $\sin(t-\pi)=-\sin t$. Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con $y(0)=0$ y $y'(0)=0$,

$$
\mathcal{L}\{y''\}=s^2Y(s)-s\,y(0)-y'(0)=s^2Y(s),
\qquad
\mathcal{L}\{y'\}=sY(s).
$$

La transformada del miembro derecho emplea $\mathcal{L}\{\sin t\}=\dfrac{1}{s^2+1}$ y el **segundo teorema de traslación** con $c=\pi$ y $f(t)=\sin t$:

$$
\mathcal{L}\{g(t)\}=\frac{1}{s^2+1}+\frac{e^{-\pi s}}{s^2+1}
=\frac{1+e^{-\pi s}}{s^2+1}.
$$

La ecuación transformada es

$$
\left(s^2+s+\frac54\right)Y(s)=\frac{1+e^{-\pi s}}{s^2+1}.
$$

Como $s^2+s+\dfrac54=\left(s+\dfrac12\right)^2+1$, resulta

$$
Y(s)=\left(1+e^{-\pi s}\right)F(s),
\qquad
F(s)=\frac{1}{\left(s^2+1\right)\left[\left(s+\frac12\right)^2+1\right]}.
$$

Se descompone $F(s)$ en **fracciones parciales**:

$$
\frac{1}{\left(s^2+1\right)\left[\left(s+\frac12\right)^2+1\right]}
= \frac{As+B}{s^2+1}+\frac{Cs+D}{\left(s+\frac12\right)^2+1}.
$$

Al multiplicar por el denominador común y comparar coeficientes se obtiene el sistema

$$
A+C=0, \qquad A+B+D=0, \qquad \frac54 A+B+C=0, \qquad \frac54 B+D=1,
$$

cuya solución es $A=-\dfrac{16}{17}$, $B=\dfrac{4}{17}$, $C=\dfrac{16}{17}$ y $D=\dfrac{12}{17}$. Al completar el numerador del último término con $s+\dfrac12$,

$$
F(s)=\frac{1}{17}\left[-\frac{16s-4}{s^2+1}\right]
+\frac{16}{17}\frac{s+\frac12}{\left(s+\frac12\right)^2+1}
+\frac{4}{17}\frac{1}{\left(s+\frac12\right)^2+1}.
$$

Se invierte término a término. De la tabla, $\mathcal{L}^{-1}\!\left\{\dfrac{s}{s^2+1}\right\}=\cos t$ y $\mathcal{L}^{-1}\!\left\{\dfrac{1}{s^2+1}\right\}=\sin t$. El **primer teorema de traslación** da

$$
\mathcal{L}^{-1}\!\left\{\frac{s+\frac12}{\left(s+\frac12\right)^2+1}\right\}=e^{-t/2}\cos t,
\qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{\left(s+\frac12\right)^2+1}\right\}=e^{-t/2}\sin t.
$$

Por tanto,

$$
h(t)=\mathcal{L}^{-1}\{F(s)\}
=\frac{1}{17}\left[e^{-t/2}\left(16\cos t+4\sin t\right)-16\cos t+4\sin t\right].
$$

El factor $e^{-\pi s}$ se trata de nuevo con el **segundo teorema de traslación**: de $Y(s)=\left(1+e^{-\pi s}\right)F(s)$ se sigue

$$
y(t)=h(t)+u_\pi(t)\,h(t-\pi).
$$

Al sustituir $t\mapsto t-\pi$ en $h$ y usar $\cos(t-\pi)=-\cos t$ y $\sin(t-\pi)=-\sin t$, la expresión por intervalos es

$$
y(t)=
\begin{cases}
\dfrac{1}{17}\left[e^{-t/2}\left(16\cos t+4\sin t\right)-16\cos t+4\sin t\right], & 0\le t<\pi,\\[10pt]
\dfrac{4}{17}\left(1-e^{\pi/2}\right)e^{-t/2}\left(4\cos t+\sin t\right), & t\ge\pi.
\end{cases}
$$

La solución satisface las condiciones iniciales: $h(0)=\dfrac{1}{17}(16-16)=0$ y $h'(0)=\dfrac{1}{17}\left(-8+4+4\right)=0$.

## Observaciones

La forzante es continua en $t=\pi$, pues $\sin\pi=0$ por la izquierda y $0$ por la derecha. Por ello $y''=g-y'-\frac54 y$ también es continua y la solución es de clase $C^2$; lo que salta es $y'''$, con magnitud $1$, igual al salto de $g'$ (de $\cos\pi=-1$ a $0$).

Para $t\ge\pi$ la forzante se anula, de modo que la solución es una oscilación amortiguada libre que decae como $e^{-t/2}$ alrededor de $y=0$. La función está definida y es única para todo $t\ge0$.

### Método alternativo: resolución por tramos

Sin transformada de Laplace, en $0\le t<\pi$ la ecuación es $y''+y'+\frac54 y=\sin t$. Las raíces de $r^2+r+\frac54=0$ son $-\frac12\pm i$ y una solución particular es $-\frac{16}{17}\cos t+\frac{4}{17}\sin t$, luego

$$
y=e^{-t/2}\left(C_1\cos t+C_2\sin t\right)-\frac{16}{17}\cos t+\frac{4}{17}\sin t,
$$

y las condiciones iniciales dan $C_1=\dfrac{16}{17}$ y $C_2=\dfrac{4}{17}$. En $t=\pi$ esta rama y su derivada valen

$$
y(\pi)=\frac{16}{17}\left(1-e^{-\pi/2}\right),
\qquad
y'(\pi)=\frac{4}{17}\left(e^{-\pi/2}-1\right).
$$

En $t\ge\pi$ la ecuación es $y''+y'+\frac54 y=0$, con solución general $y=e^{-t/2}\left(D_1\cos t+D_2\sin t\right)$. Imponer los valores heredados conduce a $D_1=\dfrac{16}{17}\left(1-e^{\pi/2}\right)$ y $D_2=\dfrac{4}{17}\left(1-e^{\pi/2}\right)$, que reproduce el resultado anterior.
