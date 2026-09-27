
## Enunciado

La ecuación diferencial
$$(1 - x^2)y'' - xy' + \alpha^2 y = 0$$
donde $\alpha$ es un parámetro, se conoce como la **ecuación de Chebyshev** en honor al matemático ruso **Pafnuty Chebyshev** (1821-1894). Cuando $\alpha = n$ es un entero no negativo. La ecuación diferencial de Chebyshev siempre tiene una solución polinomial de grado $n$. Encuentre una solución polinomial de quinto grado de esta ecuación diferencial.

## Solución

Para un polinomio de grado $5$ se toma $\alpha = 5$. Una solución polinomial es

$$
y = 16x^5 - 20x^3 + 5x.
$$

Cualquier múltiplo constante no nulo de este polinomio también es solución.

## Resolución

La solución buscada tiene grado $5$, de modo que el parámetro es $\alpha = 5$. La ecuación resultante es

$$
(1-x^2)y'' - xy' + 25y = 0.
$$

El punto $x=0$ es un **punto ordinario**: los coeficientes de $y''$, $y'$ y $y$ son analíticos en $x=0$. Se propone entonces una solución en **serie de potencias**

$$
y = \sum_{n=0}^{\infty} a_n x^n,
\qquad
y' = \sum_{n=1}^{\infty} n a_n x^{n-1},
\qquad
y'' = \sum_{n=2}^{\infty} n(n-1) a_n x^{n-2}.
$$

Para igualar exponentes se reescriben las tres series en potencias de $x^n$:

$$
y'' = \sum_{n=0}^{\infty} (n+2)(n+1) a_{n+2} x^n,
\qquad
x^2 y'' = \sum_{n=2}^{\infty} n(n-1) a_n x^n,
\qquad
x y' = \sum_{n=1}^{\infty} n a_n x^n.
$$

Al sustituir en la ecuación y agrupar,

$$
\sum_{n=0}^{\infty} (n+2)(n+1) a_{n+2} x^n
- \sum_{n=2}^{\infty} n(n-1) a_n x^n
- \sum_{n=1}^{\infty} n a_n x^n
+ 25 \sum_{n=0}^{\infty} a_n x^n = 0.
$$

Los términos con $n=0$ y $n=1$ de las series truncadas no aportan, así que la misma relación gobierna todos los coeficientes. Se obtiene la **relación de recurrencia**

$$
(n+2)(n+1) a_{n+2} + (25 - n^2) a_n = 0,
\qquad\text{es decir,}\qquad
a_{n+2} = \frac{n^2 - 25}{(n+2)(n+1)}\, a_n,
\qquad n \ge 0.
$$

Un polinomio de grado $5$ tiene $a_n = 0$ para $n \ge 6$. En particular $a_6 = 0$, y con $n=4$ la recurrencia da

$$
a_6 = \frac{16-25}{6\cdot 5}\, a_4 = -\frac{3}{10}\, a_4,
$$

de donde $a_4 = 0$. Con $n=2$, $a_4 = -\frac{7}{4} a_2$ fuerza $a_2 = 0$. Con $n=0$, $a_2 = -\frac{25}{2} a_0$ fuerza $a_0 = 0$. La parte par del desarrollo se anula.

Para los coeficientes impares, con $n=1$ y $n=3$,

$$
a_3 = \frac{1-25}{3\cdot 2}\, a_1 = -4a_1,
\qquad
a_5 = \frac{9-25}{5\cdot 4}\, a_3 = -\frac{4}{5}\, a_3,
$$

por lo que $a_5 = \frac{16}{5} a_1$. Con $n=5$ resulta $a_7 = \frac{25-25}{7\cdot 6} a_5 = 0$, y la misma recurrencia anula todos los coeficientes posteriores. El desarrollo se trunca de forma natural en $x^5$. La elección $a_1 = 5$ conduce a $a_3 = -20$ y $a_5 = 16$:

$$
y = 5x - 20x^3 + 16x^5.
$$

La verificación directa confirma el resultado. Con $y' = 5 - 60x^2 + 80x^4$ y $y'' = -120x + 320x^3$,

$$
\begin{aligned}
(1-x^2)y'' - xy' + 25y
&= \left(-120x + 440x^3 - 320x^5\right) \\
&\quad + \left(-5x + 60x^3 - 80x^5\right)
 + \left(125x - 500x^3 + 400x^5\right) \\
&= 0.
\end{aligned}
$$

El polinomio satisface la ecuación para todo $x \in \mathbb{R}$.

## Observaciones

El polinomio obtenido es, salvo normalización, el **polinomio de Chebyshev de primera clase** $T_5$, con $T_5(x) = \cos(5\arccos x) = 16x^5 - 20x^3 + 5x$. La solución es única salvo una constante multiplicativa porque la ecuación es lineal y homogénea.

Solo la parte impar del desarrollo se trunca cuando $\alpha = 5$. La parte par genera una serie infinita, de modo que la solución polinomial corresponde a la rama impar de la solución general.

### Método alternativo: sustitución directa de un polinomio

En lugar de la serie se puede proponer directamente $y = a_5 x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$. Al sustituir y exigir que se anule el coeficiente de cada potencia se obtienen las mismas seis relaciones: en particular $a_6$ se reemplaza por la ausencia de término $x^6$, y las condiciones $a_4 = 0$, $a_2 = 0$ y $a_0 = 0$ junto con $a_3 = -4a_1$ y $a_5 = \frac{16}{5} a_1$. El cálculo es equivalente al de la recurrencia.
