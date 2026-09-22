
## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

19. $y^{\text{iv}} - 4y = 0; \quad y(0) = 1, \quad y'(0) = 0, \quad y''(0) = -2, \quad y'''(0) = 0$

## Solución

$$
y(t) = \cos\!\left(\sqrt{2}\,t\right), \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. La transformada de la derivada cuarta es

$$
\mathcal{L}\{y^{(4)}\} = s^{4}Y(s) - s^{3}y(0) - s^{2}y'(0) - s\,y''(0) - y'''(0).
$$

Al sustituir las condiciones iniciales $y(0)=1$, $y'(0)=0$, $y''(0)=-2$, $y'''(0)=0$ resulta

$$
\mathcal{L}\{y^{(4)}\} = s^{4}Y(s) - s^{3} + 2s.
$$

La ecuación transformada es

$$
s^{4}Y(s) - s^{3} + 2s - 4Y(s) = 0,
$$

de donde

$$
\left(s^{4} - 4\right)Y(s) = s^{3} - 2s.
$$

Se despeja $Y(s)$ y se factoriza el cociente:

$$
\begin{aligned}
Y(s) &= \frac{s^{3} - 2s}{s^{4} - 4}
= \frac{s\left(s^{2} - 2\right)}{\left(s^{2} - 2\right)\left(s^{2} + 2\right)}
= \frac{s}{s^{2} + 2}.
\end{aligned}
$$

El par básico $\mathcal{L}\{\cos bt\} = \dfrac{s}{s^{2} + b^{2}}$ con $b = \sqrt{2}$ invierte la expresión:

$$
y(t) = \mathcal{L}^{-1}\!\left\{\frac{s}{s^{2} + 2}\right\} = \cos\!\left(\sqrt{2}\,t\right).
$$

## Observaciones

La cancelación del factor $s^{2} - 2$ es válida en la región de convergencia $s > 0$; los puntos $s = \pm\sqrt{2}$ son singularidades evitables del cociente original. La solución $\cos(\sqrt{2}\,t)$ está definida y es continua para todo $t \ge 0$.

### Método alternativo: ecuación característica

Por tratarse de una ecuación lineal homogénea con coeficientes constantes, también puede resolverse con la **ecuación característica** $r^{4} - 4 = 0$, cuyas raíces son $r = \pm\sqrt{2}$ y $r = \pm i\sqrt{2}$. La solución general es $y = C_1 e^{\sqrt{2}t} + C_2 e^{-\sqrt{2}t} + C_3 \cos(\sqrt{2}\,t) + C_4 \sin(\sqrt{2}\,t)$; las condiciones iniciales fijan $C_1 = C_2 = C_4 = 0$ y $C_3 = 1$.
