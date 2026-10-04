
## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$\frac{dy}{dx} = \frac{4y - 3x}{2x - y}$$

## Solución

La ecuación es **homogénea de primer orden**. Su solución general, en forma implícita, es

$$
(y - x) = C(y + 3x)^5,
$$

definida en intervalos con $x \ne 0$ y $y \ne 2x$. Además, $y = -3x$ es una solución singular.

## Resolución

La ecuación se escribe como $y' = f(x,y)$ con

$$
f(x,y) = \frac{4y - 3x}{2x - y}, \qquad 2x - y \ne 0.
$$

La función $f$ es homogénea de grado cero. En efecto,

$$
f(tx,ty) = \frac{4(ty) - 3(tx)}{2(tx) - (ty)} = \frac{t(4y - 3x)}{t(2x - y)} = f(x,y),
$$

luego la ecuación es **homogénea de primer orden**. Se aplica la **sustitución** $y = ux$, donde $u$ es una función de $x$; entonces

$$
y' = u + x u'.
$$

Al sustituir en la ecuación, con $x \ne 0$,

$$
u + x u' = \frac{4u - 3}{2 - u}.
$$

Se despeja $x u'$ y se simplifica:

$$
\begin{aligned}
x u' &= \frac{4u - 3}{2 - u} - u
     = \frac{4u - 3 - u(2 - u)}{2 - u} \\
     &= \frac{u^2 + 2u - 3}{2 - u}
     = \frac{(u + 3)(u - 1)}{2 - u}.
\end{aligned}
$$

Las variables quedan separadas:

$$
\frac{2 - u}{(u + 3)(u - 1)}\,du = \frac{dx}{x}.
$$

La fracción se descompone en fracciones simples:

$$
\frac{2 - u}{(u + 3)(u - 1)}
= -\frac{5}{4}\cdot\frac{1}{u + 3} + \frac{1}{4}\cdot\frac{1}{u - 1}.
$$

Integrando ambos miembros,

$$
-\frac{5}{4}\ln|u + 3| + \frac{1}{4}\ln|u - 1| = \ln|x| + C_1.
$$

Al multiplicar por $4$ y agrupar los logaritmos,

$$
\ln|u - 1| - 5\ln|u + 3| = 4\ln|x| + 4C_1
\quad\Longrightarrow\quad
\frac{u - 1}{(u + 3)^5} = C x^4.
$$

Se deshace la sustitución con $u = y/x$:

$$
\frac{(y - x)/x}{(y + 3x)^5/x^5} = C x^4
\quad\Longrightarrow\quad
\frac{(y - x)\,x^4}{(y + 3x)^5} = C x^4.
$$

Como $x \ne 0$, se cancela $x^4$ y resulta la solución general implícita:

$$
(y - x) = C(y + 3x)^5.
$$

Durante la separación se dividió entre $(u + 3)(u - 1)$. El factor $u - 1$ da $y = x$, que corresponde a $C = 0$ y queda incluido en la familia. El factor $u + 3$ da $y = -3x$; al sustituir, $y' = -3$ y el miembro derecho vale

$$
\frac{4(-3x) - 3x}{2x - (-3x)} = \frac{-15x}{5x} = -3,
$$

de modo que $y = -3x$ es solución. No proviene de ningún valor finito de $C$, así que es una **solución singular**.

El intervalo de validez es cualquier intervalo donde la rama correspondiente esté definida y que no cruce las rectas $x = 0$ (por la sustitución y la separación) ni $y = 2x$ (donde el miembro derecho original no está definido).

## Observaciones

La familia admite la forma recíproca $(y + 3x)^5 = K(y - x)$ con $K \ne 0$, equivalente a la obtenida fuera del caso $C = 0$. La solución es implícita: no se despeja $y$ en forma elemental.

Las rectas $y = x$ y $y = -3x$ son las dos direcciones singulares asociadas a los factores $u - 1$ y $u + 3$. La primera forma parte de la familia general para $C = 0$; la segunda se conserva como solución singular. La recta $y = 2x$ anula el denominador original y no es solución.
