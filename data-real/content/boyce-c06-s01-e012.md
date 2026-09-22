
## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

12. $y'' + 3y' + 2y = 0; \quad y(0) = 1, \quad y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t) = 2e^{-t} - e^{-2t}, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con las condiciones iniciales $y(0)=1$ y $y'(0)=0$, las transformadas de las derivadas son

$$
\mathcal{L}\{y'\}=sY(s)-y(0)=sY(s)-1,
\qquad
\mathcal{L}\{y''\}=s^{2}Y(s)-s\,y(0)-y'(0)=s^{2}Y(s)-s.
$$

Al transformar la ecuación se obtiene

$$
\begin{aligned}
\left(s^{2}Y(s)-s\right)+3\left(sY(s)-1\right)+2Y(s) &= 0, \\
\left(s^{2}+3s+2\right)Y(s) &= s+3, \\
Y(s) &= \frac{s+3}{s^{2}+3s+2} = \frac{s+3}{(s+1)(s+2)}.
\end{aligned}
$$

El denominador tiene las raíces reales distintas $-1$ y $-2$. La descomposición en **fracciones parciales** es

$$
\frac{s+3}{(s+1)(s+2)} = \frac{2}{s+1} - \frac{1}{s+2},
$$

donde los coeficientes resultan de evaluar $\frac{s+3}{s+2}$ en $s=-1$ y $\frac{s+3}{s+1}$ en $s=-2$. Con el par $\mathcal{L}\{e^{at}\}=\frac{1}{s-a}$ y la linealidad de la transformada inversa,

$$
y(t)=\mathcal{L}^{-1}\{Y(s)\}=2e^{-t}-e^{-2t}.
$$

La solución satisface $y(0)=2-1=1$ y $y'(0)=-2+2=0$, y al sustituirla en la ecuación se anula el miembro izquierdo.

## Observaciones

Las raíces del denominador, $-1$ y $-2$, son reales y negativas. Por ello ambos términos decaen y la solución tiende a cero cuando $t\to\infty$. La transformada directa converge para $\operatorname{Re}(s)>-1$.
