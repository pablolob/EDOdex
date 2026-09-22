
## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada.

5. $y' = (\cos^2 x)(\cos^2 2y)$

## Solución

$$
y(x) = \frac{1}{2}\arctan\!\left(x + \frac{1}{2}\sin 2x + C\right).
$$

Equivalentemente, en forma implícita,

$$
\tan(2y) = x + \frac{1}{2}\sin 2x + C.
$$

## Resolución

La ecuación es de **variables separables**. Se escribe el factor que depende de $y$ en el miembro izquierdo y el que depende de $x$ en el derecho:

$$
\frac{dy}{\cos^2 2y} = \cos^2 x \, dx,
\qquad\text{es decir,}\qquad
\sec^2 2y \, dy = \cos^2 x \, dx.
$$

Se integran ambos miembros:

$$
\int \sec^2 2y \, dy = \int \cos^2 x \, dx.
$$

Para el miembro izquierdo se usa $\int \sec^2(ay)\,dy = \frac{1}{a}\tan(ay)$ con $a = 2$. Para el derecho se emplea la identidad $\cos^2 x = \frac{1+\cos 2x}{2}$. Resulta

$$
\frac{1}{2}\tan 2y = \frac{x}{2} + \frac{\sin 2x}{4} + C_1.
$$

Al multiplicar por $2$ y redefinir la constante se obtiene la solución implícita

$$
\tan 2y = x + \frac{1}{2}\sin 2x + C.
$$

Como $2y$ queda en el intervalo $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, se despeja $y$ con la rama principal de la arcotangente:

$$
y(x) = \frac{1}{2}\arctan\!\left(x + \frac{1}{2}\sin 2x + C\right).
$$

La solución está definida para todo $x \in \mathbb{R}$. El argumento de la arcotangente es no decreciente, de modo que $2y$ recorre $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ sin alcanzar sus extremos.

## Observaciones

El miembro derecho de la ecuación es no negativo, porque $\cos^2 x \ge 0$ y $\cos^2 2y \ge 0$. Por tanto, toda solución no constante es no decreciente.

Los valores $y = \frac{\pi}{4} + \frac{k\pi}{2}$ con $k \in \mathbb{Z}$ anulan $\cos^2 2y$ y dan $y' = 0$. Son **soluciones constantes** (de equilibrio) que no forman parte de la familia uniparamétrica anterior, ya que corresponden a $\tan 2y$ infinito. La familia general tiende asintóticamente a esas rectas sin cruzarlas.
