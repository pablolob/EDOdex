
## Enunciado

Demuestre que la ecuación de Bessel de orden un medio,

$$x^2 y'' + xy' + \left(x^2 - \frac{1}{4}\right)y = 0, \quad x > 0,$$

se puede reducir a la ecuación

$$v'' + v = 0$$

mediante el cambio de la variable dependiente $y = x^{-1/2} v(x)$. A partir de esto, concluya que $y_1(x) = x^{-1/2} \cos x$ y $y_2(x) = x^{-1/2} \sin x$ son soluciones de la ecuación de Bessel de orden un medio.

## Solución

El cambio $y = x^{-1/2} v(x)$ reduce la ecuación de Bessel de orden un medio a

$$
v'' + v = 0.
$$

En consecuencia, la solución general es

$$
y(x) = x^{-1/2}\left(C_1 \cos x + C_2 \sin x\right),
$$

de modo que $y_1(x) = x^{-1/2} \cos x$ y $y_2(x) = x^{-1/2} \sin x$ son soluciones de la ecuación de Bessel de orden un medio para $x > 0$.

## Resolución

Se parte del cambio de variable dependiente $y = x^{-1/2} v(x)$, con $x > 0$. Las dos primeras derivadas se obtienen con la **regla del producto**:

$$
\begin{aligned}
y' &= x^{-1/2} v' - \frac{1}{2} x^{-3/2} v, \\
y'' &= x^{-1/2} v'' - x^{-3/2} v' + \frac{3}{4} x^{-5/2} v.
\end{aligned}
$$

Al sustituir en la ecuación de Bessel se calculan los tres términos por separado:

$$
\begin{aligned}
x^2 y'' &= x^{3/2} v'' - x^{1/2} v' + \frac{3}{4} x^{-1/2} v, \\
x y' &= x^{1/2} v' - \frac{1}{2} x^{-1/2} v, \\
\left(x^2 - \frac{1}{4}\right) y &= x^{3/2} v - \frac{1}{4} x^{-1/2} v.
\end{aligned}
$$

La suma de los tres miembros es

$$
\begin{aligned}
x^2 y'' + xy' + \left(x^2 - \frac{1}{4}\right)y
&= x^{3/2} v'' + \left(-x^{1/2} + x^{1/2}\right) v' \\
&\quad + \left(\frac{3}{4} - \frac{1}{2} - \frac{1}{4}\right) x^{-1/2} v + x^{3/2} v \\
&= x^{3/2}\left(v'' + v\right).
\end{aligned}
$$

Como $x > 0$, el factor $x^{3/2}$ no se anula; la ecuación de Bessel equivale entonces a $v'' + v = 0$.

La ecuación reducida tiene coeficientes constantes y su ecuación característica es $r^2 + 1 = 0$, con raíces $r = \pm i$. Su solución general es

$$
v(x) = C_1 \cos x + C_2 \sin x.
$$

Al deshacer el cambio, la solución general de la ecuación de Bessel de orden un medio es

$$
y(x) = x^{-1/2}\left(C_1 \cos x + C_2 \sin x\right).
$$

Las elecciones $(C_1, C_2) = (1, 0)$ y $(C_1, C_2) = (0, 1)$ producen, respectivamente, $y_1(x) = x^{-1/2} \cos x$ y $y_2(x) = x^{-1/2} \sin x$. Ambas son soluciones para $x > 0$.

## Observaciones

El cambio $y = x^{-1/2} v(x)$ elimina el término con $y'$ de la ecuación de Bessel. En la forma estándar $y'' + \frac{1}{x} y' + \left(1 - \frac{1}{4x^2}\right) y = 0$ el coeficiente de $y'$ es $1/x$, y el exponente $-1/2$ del cambio es la mitad de ese coeficiente con signo opuesto.

Las soluciones halladas son, salvo constantes, las funciones de Bessel de orden $\pm\frac{1}{2}$:

$$
J_{1/2}(x) = \sqrt{\frac{2}{\pi x}}\,\sin x, \qquad
J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}}\,\cos x .
$$

Las funciones $y_1$ y $y_2$ son linealmente independientes en $x > 0$, pues su Wronskiano es $x^{-1}\bigl(\cos^2 x + \sin^2 x\bigr) = x^{-1}$, que no se anula. El punto $x = 0$ es un punto singular regular y queda fuera del dominio de las soluciones.
