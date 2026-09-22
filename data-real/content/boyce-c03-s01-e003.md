
## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

3. $6y'' - y' - y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su solución general es

$$
y(x) = C_1 e^{x/2} + C_2 e^{-x/3},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
6y'' - y' - y = 0.
$$

Se propone $y = e^{rx}$, de donde $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
6r^2 - r - 1 = 0.
$$

El polinomio se factoriza como

$$
6r^2 - r - 1 = (2r - 1)(3r + 1),
$$

por lo que sus raíces son

$$
r_1 = \frac{1}{2}, \qquad r_2 = -\frac{1}{3}.
$$

Son reales y distintas, así que cada una aporta una solución exponencial y ambas son linealmente independientes. La solución general es la combinación lineal

$$
y(x) = C_1 e^{x/2} + C_2 e^{-x/3}.
$$

La sustitución confirma el resultado: $6\left(\tfrac14\right) - \tfrac12 - 1 = 0$ para $r_1$ y $6\left(\tfrac19\right) + \tfrac13 - 1 = 0$ para $r_2$. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

Las raíces de la ecuación característica son reales y distintas, de modo que la solución general combina dos exponenciales reales y no aparecen soluciones singulares. La misma ecuación característica se resuelve con la fórmula general: $r = \frac{1 \pm \sqrt{1 + 24}}{12} = \frac{1 \pm 5}{12}$.
