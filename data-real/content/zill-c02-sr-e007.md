
## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

Cada ED autónoma $dy/dx = f(y)$ es separable. ________

## Solución

La afirmación es **verdadera**: el segundo miembro depende solo de $y$, que es justamente la condición de separabilidad.

$$
\frac{dy}{dx} = f(y)
\quad\Longrightarrow\quad
\frac{dy}{f(y)} = dx, \qquad f(y) \ne 0 \text{ en el intervalo}.
$$

## Resolución

Una EDO de primer orden es **separable** si puede escribirse en la forma

$$
g(y)\,dy = h(x)\,dx,
$$

es decir, si cada miembro contiene una sola de las variables.

En la ecuación autónoma

$$
\frac{dy}{dx} = f(y)
$$

el segundo miembro no depende de $x$. Se escribe como el producto

$$
\frac{dy}{dx} = f(y)\cdot 1,
$$

donde $f(y)$ es función de $y$ y el factor $1$ es función de $x$. Al separar los diferenciales resulta

$$
\frac{dy}{f(y)} = dx,
$$

que tiene la forma separable con $g(y) = 1/f(y)$ y $h(x) = 1$.

Por tanto, toda ED autónoma es separable, siempre que $f(y) \ne 0$ en el intervalo considerado. La afirmación es verdadera.

## Observaciones

La separación exige dividir entre $f(y)$. Los ceros de $f$ son soluciones constantes $y = c$ de la ecuación, que se pierden al dividir y deben analizarse por separado. Aun así, la ecuación es separable en el sentido habitual: el miembro derecho es un producto de un factor que depende solo de $y$ y un factor que depende solo de $x$.
