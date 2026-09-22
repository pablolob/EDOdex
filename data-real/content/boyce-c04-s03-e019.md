
## Enunciado

Demuestre que los operadores diferenciales lineales con coeficientes constantes obedecen la ley conmutativa, es decir,

$$(D - a)(D - b)f = (D - b)(D - a)f$$

para cualquier función $f$ dos veces diferenciable y cualesquiera constantes $a$ y $b$. El resultado se extiende de inmediato a cualquier número finito de factores.

## Solución

Ambos miembros coinciden con el mismo operador aplicado a $f$:

$$
(D - a)(D - b)f = (D - b)(D - a)f = f'' - (a + b)f' + abf.
$$

En notación de operadores,

$$
(D - a)(D - b) = D^2 - (a + b)D + ab = (D - b)(D - a).
$$

## Resolución

Se denota $D = \frac{d}{dx}$. El producto de operadores es la composición, de modo que $(D - a)(D - b)f$ significa aplicar primero $(D - b)$ y después $(D - a)$ a la función $f$. Para una constante $a$, el operador actúa como $(D - a)f = f' - af$.

Se calcula primero el orden $(D - a)(D - b)$.

$$
\begin{aligned}
(D - a)(D - b)f
&= (D - a)(f' - bf) \\
&= (f' - bf)' - a(f' - bf) \\
&= f'' - bf' - af' + abf \\
&= f'' - (a + b)f' + abf.
\end{aligned}
$$

Se calcula ahora el orden opuesto.

$$
\begin{aligned}
(D - b)(D - a)f
&= (D - b)(f' - af) \\
&= (f' - af)' - b(f' - af) \\
&= f'' - af' - bf' + abf \\
&= f'' - (a + b)f' + abf.
\end{aligned}
$$

Las dos expresiones son idénticas término a término. La coincidencia se apoya en la conmutatividad de la suma y del producto de las constantes, $a + b = b + a$ y $ab = ba$, y en que los factores $a$ y $b$ no dependen de $x$. Por tanto,

$$
(D - a)(D - b)f = (D - b)(D - a)f
$$

para toda función $f$ dos veces diferenciable y cualesquiera constantes $a$ y $b$.

El resultado también puede escribirse a nivel de operadores. Al desarrollar el producto,

$$
(D - a)(D - b) = D^2 - bD - aD + ab = D^2 - (a + b)D + ab,
$$

y el miembro derecho es un polinomio en $D$ cuyos coeficientes, $-(a + b)$ y $ab$, son funciones simétricas de $a$ y $b$. Por eso no cambia al intercambiar los factores:

$$
(D - b)(D - a) = D^2 - (a + b)D + ab.
$$

## Observaciones

La conmutatividad depende de que los coeficientes sean constantes. Si los coeficientes dependen de $x$, los operadores no conmutan en general. Por ejemplo, $(D - x)(D + x)f = f'' + (1 - x^2)f$, mientras que $(D + x)(D - x)f = f'' - (1 + x^2)f$.

La extensión a $n$ factores es inmediata con el mismo argumento. El producto $\prod_{i=1}^{n}(D - a_i)$ es el polinomio

$$
D^n - \Bigl(\textstyle\sum_i a_i\Bigr) D^{n-1} + \cdots + (-1)^n a_1 a_2 \cdots a_n,
$$

cuyos coeficientes son simétricos en $a_1, \dots, a_n$; por tanto, su valor no depende del orden de los factores. Esta propiedad es la que permite escribir el operador de una ecuación con coeficientes constantes en cualquier orden de factorización.
