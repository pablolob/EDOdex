
## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada.

6. $xy' = (1 - y^2)^{1/2}$

## Solución

$$
y = \sin(\ln|x| + C), \qquad x \ne 0,
$$

junto con las soluciones singulares $y = 1$ e $y = -1$.

## Resolución

La ecuación es **separable**. Se divide entre $x$, lo cual requiere $x \ne 0$, y se separan las variables:

$$
\frac{dy}{\sqrt{1-y^2}} = \frac{dx}{x}.
$$

Esta separación supone $|y| < 1$, de modo que el denominador no se anula. Se integran ambos miembros:

$$
\int \frac{dy}{\sqrt{1-y^2}} = \int \frac{dx}{x}.
$$

La integral del miembro izquierdo es $\arcsin y$ y la del derecho es $\ln|x|$, por lo que

$$
\arcsin y = \ln|x| + C.
$$

Al aplicar la función seno se obtiene la solución general

$$
y = \sin(\ln|x| + C).
$$

La forma explícita es válida en el intervalo donde $-\dfrac{\pi}{2} < \ln|x| + C < \dfrac{\pi}{2}$, que es el rango del arco seno principal; en él $\sqrt{1-y^2} = \cos(\ln|x| + C)$. En términos de $x$, el intervalo de validez es una de las dos regiones $x > 0$ o $x < 0$ acotadas por esa desigualdad.

La separación excluyó los valores que anulan $1 - y^2$, es decir, $y = \pm 1$. Ambas funciones constantes satisfacen la ecuación, pues en los dos casos $xy' = 0$ y $\sqrt{1-y^2} = 0$. Por tanto, $y = 1$ e $y = -1$ son soluciones singulares que no quedan recogidas por la familia $y = \sin(\ln|x| + C)$.

## Observaciones

Las soluciones constantes $y = \pm 1$ se pierden al dividir entre $\sqrt{1-y^2}$ y deben añadirse a la respuesta. La solución también puede dejarse en la forma implícita $\arcsin y = \ln|x| + C$.
