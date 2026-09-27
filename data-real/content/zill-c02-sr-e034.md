
## Enunciado

En los problemas 33 y 34 resuelva el problema con valores iniciales dado e indique el intervalo $I$ más largo sobre el que la solución está definida.

$$\frac{dy}{dt} + 2(t + 1)y^2 = 0, \quad y(0) = -\frac{1}{8}$$

## Solución

La ecuación es **de primer orden** y **no lineal**; se resuelve por
**separación de variables**. La solución del problema con valores iniciales es

$$
y(t) = \frac{1}{(t+1)^2 - 9} = \frac{1}{(t-2)(t+4)},
$$

definida en el intervalo más largo

$$
I = (-4, 2).
$$

## Resolución

Se despeja la derivada en la ecuación original:

$$
\frac{dy}{dt} = -2(t+1)y^2.
$$

El miembro derecho es el producto de un factor que depende solo de $t$ y otro
que depende solo de $y$; la ecuación es **separable**. Se separan las variables:

$$
\frac{dy}{y^2} = -2(t+1)\,dt.
$$

La separación supone $y \ne 0$. La condición inicial $y(0) = -1/8$ es no nula,
de modo que la rama buscada queda fuera del caso excluido; la solución constante
$y = 0$ se comenta en las observaciones.

Se integran ambos miembros:

$$
\int y^{-2}\,dy = \int -2(t+1)\,dt.
$$

Con la regla de potencias y la integral inmediata del polinomio,

$$
-\frac{1}{y} = -(t+1)^2 + C.
$$

Al multiplicar por $-1$ y despejar,

$$
\frac{1}{y} = (t+1)^2 - C.
$$

La condición inicial da $1/y(0) = -8$. Sustituyendo $t = 0$,

$$
-8 = 1 - C \quad\Longrightarrow\quad C = 9.
$$

Por tanto,

$$
\frac{1}{y} = (t+1)^2 - 9
\quad\Longrightarrow\quad
y(t) = \frac{1}{(t+1)^2 - 9}.
$$

Al desarrollar el cuadrado, $(t+1)^2 - 9 = t^2 + 2t - 8 = (t-2)(t+4)$.

La sustitución directa confirma el resultado. De
$y(t) = \left[(t+1)^2 - 9\right]^{-1}$,

$$
y'(t) = -\frac{2(t+1)}{\left[(t+1)^2 - 9\right]^2},
$$

y el miembro derecho de la ecuación,

$$
-2(t+1)y^2 = -\frac{2(t+1)}{\left[(t+1)^2 - 9\right]^2},
$$

coincide con $y'(t)$. Además $y(0) = 1/(1-9) = -1/8$, que es la condición
inicial pedida.

El denominador se anula en $t = 2$ y en $t = -4$. La solución está definida y
es derivable en los tres intervalos $(-\infty,-4)$, $(-4,2)$ y $(2,\infty)$.
Como la condición inicial se impone en $t = 0$, el intervalo más largo que la
contiene es $I = (-4,2)$. En ambos extremos la solución no está acotada:
$y(t) \to -\infty$ cuando $t \to -4^+$ y cuando $t \to 2^-$.

## Observaciones

La solución constante $y = 0$ resuelve la ecuación, pero no la condición
inicial; corresponde al caso $y = 0$ excluido al separar. No es una rama perdida
para este problema, pues solo aparece si la condición inicial es nula.

La no linealidad hace que la solución explote en tiempo finito en los dos
extremos de $I$. Una ecuación lineal con coeficientes regulares no presentaría
ese comportamiento.

### Método alternativo: ecuación de Bernoulli

La ecuación también admite la lectura de **Bernoulli**. En la forma
$y' - 2(t+1)y^2 = 0$ se tiene $P(t) = 0$, $f(t) = -2(t+1)$ y $n = 2$. La
sustitución $w = y^{1-n} = y^{-1}$ da $w' = 2(t+1)$, de donde
$w = (t+1)^2 + C$ y $y = 1/\left[(t+1)^2 + C\right]$. La condición inicial
$y(0) = -1/8$ fija $C = -9$ y conduce a la misma solución.
