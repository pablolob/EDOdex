
## Enunciado

**Problemas 5 y 6.**

En los problemas 5 y 6 calcule $y'$ y $y''$ y después combine estas derivadas con $y$ como una ecuación diferencial lineal de segundo orden que no contiene los símbolos $c_1$ y $c_2$ y que tiene la forma $F(y, y', y'') = 0$. Estos símbolos $c_1$ y $c_2$ representan constantes.

6. $y = c_1 e^x \cos x + c_2 e^x \sin x$

## Solución

La ecuación diferencial es

$$
y'' - 2y' + 2y = 0.
$$

## Resolución

Se derivan $y$, $y'$ y $y''$:

$$
\begin{aligned}
y   &= c_1 e^x \cos x + c_2 e^x \sin x, \\[4pt]
y'  &= c_1 e^x \cos x - c_1 e^x \sin x + c_2 e^x \sin x + c_2 e^x \cos x \\
    &= (c_1 + c_2) e^x \cos x + (c_2 - c_1) e^x \sin x, \\[4pt]
y'' &= (c_1 + c_2) e^x \cos x - (c_1 + c_2) e^x \sin x + (c_2 - c_1) e^x \sin x + (c_2 - c_1) e^x \cos x \\
    &= 2c_2 e^x \cos x - 2c_1 e^x \sin x.
\end{aligned}
$$

Se busca una combinación lineal $y'' + A y' + B y = 0$. Observando que $y'$ contiene $(c_1 + c_2)$ y $(c_2 - c_1)$, se ensaya $A = -2$, $B = 2$:

$$
\begin{aligned}
y'' - 2y' + 2y &=   
\begin{aligned}
&\bigl(2c_2 e^x \cos x - 2c_1 e^x \sin x\bigr) \\
&{}- 2\bigl[(c_1 + c_2) e^x \cos x + (c_2 - c_1) e^x \sin x\bigr] \\
&{}+ 2\bigl[c_1 e^x \cos x + c_2 e^x \sin x\bigr].
\end{aligned}
\end{aligned}
$$

Agrupando los coeficientes de $e^x \cos x$ y $e^x \sin x$:

$$
\begin{aligned}
e^x \cos x&:\; 2c_2 - 2(c_1 + c_2) + 2c_1 = 2c_2 - 2c_1 - 2c_2 + 2c_1 = 0, \\[4pt]
e^x \sin x&:\; -2c_1 - 2(c_2 - c_1) + 2c_2 = -2c_1 - 2c_2 + 2c_1 + 2c_2 = 0.
\end{aligned}
$$

La combinación se anula idénticamente, por lo que

$$
y'' - 2y' + 2y = 0.
$$

## Observaciones

Las raíces complejas $r = 1 \pm i$ de la ecuación característica $r^2 - 2r + 2 = 0$ producen la solución general $y = e^x(c_1 \cos x + c_2 \sin x)$.
