
## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

15. $y'' - 2y' - 2y = 0; \quad y(0) = 2, \quad y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t) = e^{t}\left(2\cosh(\sqrt{3}\,t) - \frac{2}{\sqrt{3}}\sinh(\sqrt{3}\,t)\right), \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a la ecuación. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Las transformadas de las derivadas, con $y(0)=2$ y $y'(0)=0$, son

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - 2s, \qquad
\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s) - 2.
$$

Al sustituir en la ecuación diferencial,

$$
s^2Y - 2s - 2(sY - 2) - 2Y = 0.
$$

Se agrupan los términos en $Y$:

$$
(s^2 - 2s - 2)Y = 2s - 4,
$$

de donde

$$
Y(s) = \frac{2s-4}{s^2-2s-2}.
$$

El denominador se escribe en forma canónica al **completar el cuadrado**:

$$
s^2-2s-2 = (s-1)^2 - 3 = (s-1)^2 - (\sqrt{3})^2.
$$

El numerador se reescribe para separar los pares de la tabla asociados a $e^{t}\cosh(\sqrt{3}\,t)$ y $e^{t}\sinh(\sqrt{3}\,t)$:

$$
2s-4 = 2(s-1) - 2.
$$

Con esto,

$$
\begin{aligned}
Y(s) &= \frac{2(s-1)}{(s-1)^2-(\sqrt{3})^2} - \frac{2}{(s-1)^2-(\sqrt{3})^2} \\
     &= 2\,\frac{s-1}{(s-1)^2-(\sqrt{3})^2} - \frac{2}{\sqrt{3}}\,\frac{\sqrt{3}}{(s-1)^2-(\sqrt{3})^2}.
\end{aligned}
$$

Se emplean los pares de la tabla

$$
\mathcal{L}\{e^{at}\cosh bt\} = \frac{s-a}{(s-a)^2-b^2}, \qquad
\mathcal{L}\{e^{at}\sinh bt\} = \frac{b}{(s-a)^2-b^2},
$$

con $a=1$ y $b=\sqrt{3}$. Por **linealidad** de la transformada inversa,

$$
y(t) = 2e^{t}\cosh(\sqrt{3}\,t) - \frac{2}{\sqrt{3}}e^{t}\sinh(\sqrt{3}\,t).
$$

## Observaciones

La ecuación característica $r^2-2r-2=0$ tiene raíces reales distintas $r=1\pm\sqrt{3}$, por lo que la solución se expresa con las funciones $\cosh$ y $\sinh$ desplazadas por $e^{t}$. La solución está definida para todo $t\ge 0$ y satisface $y(0)=2$ y $y'(0)=0$.
