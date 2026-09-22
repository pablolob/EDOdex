
## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$y'' - y = 0, \quad y_1(x) = e^x, \quad y_2(x) = \cosh x$$

## Solución

Ambas funciones satisfacen la ecuación diferencial. Al sustituir cada una se obtiene la identidad

$$
y'' - y = 0.
$$

## Resolución

Se verifica $y_1(x) = e^x$. Sus derivadas son

$$
\begin{aligned}
y_1' &= e^x, \\
y_1'' &= e^x.
\end{aligned}
$$

Se sustituyen en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y_1'' - y_1 &= e^x - e^x \\
&= 0.
\end{aligned}
$$

Se verifica $y_2(x) = \cosh x$. Sus derivadas son

$$
\begin{aligned}
y_2' &= \sinh x, \\
y_2'' &= \cosh x.
\end{aligned}
$$

Se sustituyen en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y_2'' - y_2 &= \cosh x - \cosh x \\
&= 0.
\end{aligned}
$$

En ambos casos el miembro izquierdo se anula, de modo que $y_1$ y $y_2$ son soluciones de la ecuación diferencial.

## Observaciones

La verificación emplea únicamente cálculo diferencial: la derivada de $e^x$ es inmediata, y la de $\cosh x$ es $\sinh x$, cuya derivada es de nuevo $\cosh x$. Ambas funciones están definidas para todo $x\in\mathbb{R}$.
