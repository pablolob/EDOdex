
## Enunciado

**Variación de parámetros.** Considere el siguiente método para resolver la ecuación lineal general de primer orden:

$$y' + p(x)y = g(x). \tag{i}$$

a) Si $g(x)$ es idénticamente cero, demuestre que la solución es

$$y = A \exp\left[-\int p(x)\, dx\right], \tag{ii}$$

donde $A$ es una constante.

b) Si $g(x)$ no es idénticamente cero, suponga que la solución es de la forma

$$y = A(x) \exp\left[-\int p(x)\, dx\right], \tag{iii}$$

donde ahora $A$ es una función de $x$. Por sustitución de $y$ en la ecuación diferencial dada, demuestre que $A(x)$ debe satisfacer la condición

$$A'(x) = g(x) \exp\left[\int p(x)\, dx\right]. \tag{iv}$$

c) Determine $A(x)$ a partir de la ecuación (iv); luego sustituya $A(x)$ en la ecuación (iii) y determine $y$. Compruebe que la solución obtenida de esta manera concuerda con la de la ecuación (17) del texto. Esta técnica se conoce como método de **variación de parámetros** y se analiza con detalle en la sección 3.7 en relación con las ecuaciones lineales de segundo orden.

## Solución

a) Si $g(x)\equiv 0$, la función $y = A e^{-\int p(x)\,dx}$ satisface la ecuación homogénea $y' + p(x)y = 0$.

b) Al sustituir la forma (iii) en (i), los términos en $p(x)A(x)$ se cancelan y queda la condición

$$A'(x) = g(x)\,e^{\int p(x)\,dx}. \tag{iv}$$

c) Al integrar (iv) y reemplazar en (iii), la solución general es

$$
y = e^{-\int p(x)\,dx}\left[\int g(x)\,e^{\int p(x)\,dx}\,dx + C\right],
$$

que coincide con la solución general por **factor integrante**, ecuación (17) del texto.

## Resolución

La ecuación (i) está escrita en forma estándar y es **lineal de primer orden**. Se siguen los tres apartados.

**a) Caso homogéneo.** Si $g(x)\equiv 0$, la ecuación es $y' + p(x)y = 0$. Se propone $y = A e^{-\int p(x)\,dx}$ y se deriva con la regla de la cadena:

$$
y' = A\bigl(-p(x)\bigr)e^{-\int p(x)\,dx} = -A\,p(x)\,e^{-\int p(x)\,dx}.
$$

Al sustituir en el miembro izquierdo,

$$
y' + p(x)y
= -A\,p(x)\,e^{-\int p(x)\,dx} + p(x)\,A\,e^{-\int p(x)\,dx}
= 0.
$$

La función propuesta satisface la ecuación homogénea. Como contiene la constante arbitraria $A$, es su solución general.

**b) Variación de la constante.** Si $g(x)$ no es idénticamente cero, se propone la forma (iii), $y = A(x)e^{-\int p(x)\,dx}$. Se deriva con la regla del producto y la regla de la cadena:

$$
y' = A'(x)e^{-\int p(x)\,dx} - A(x)\,p(x)\,e^{-\int p(x)\,dx}
= \bigl(A'(x) - p(x)A(x)\bigr)e^{-\int p(x)\,dx}.
$$

Al sustituir $y$ y $y'$ en la ecuación (i),

$$
\bigl(A'(x) - p(x)A(x)\bigr)e^{-\int p(x)\,dx} + p(x)A(x)e^{-\int p(x)\,dx} = g(x).
$$

Los términos que contienen $p(x)A(x)$ se cancelan y queda

$$
A'(x)\,e^{-\int p(x)\,dx} = g(x).
$$

Al despejar,

$$
A'(x) = g(x)\,e^{\int p(x)\,dx}. \tag{iv}
$$

**c) Determinación de $A(x)$ y de $y$.** Se integra la ecuación (iv):

$$
A(x) = \int g(x)\,e^{\int p(x)\,dx}\,dx + C.
$$

Se sustituye esta expresión en (iii):

$$
y = \left[\int g(x)\,e^{\int p(x)\,dx}\,dx + C\right]e^{-\int p(x)\,dx}.
$$

Con la notación $\mu(x) = e^{\int p(x)\,dx}$, la solución se reescribe como

$$
y = \frac{1}{\mu(x)}\left[\int \mu(x)g(x)\,dx + C\right]
= \frac{1}{\mu(x)}\int \mu(x)g(x)\,dx + \frac{C}{\mu(x)}.
$$

Esta es la solución general obtenida por el método del factor integrante, ecuación (17) del texto. El término $\dfrac{C}{\mu(x)}$ es la solución de la ecuación homogénea y $\dfrac{1}{\mu(x)}\displaystyle\int \mu(x)g(x)\,dx$ es una solución particular de la ecuación completa.

## Observaciones

El método se denomina **variación de parámetros** porque parte de la solución homogénea $A e^{-\int p\,dx}$ y promueve la constante $A$ a una función $A(x)$. La condición (iv) es precisamente la que permite que la forma propuesta resuelva la ecuación completa.

La solución general muestra la estructura $y = y_h + y_p$, con $y_h = C e^{-\int p\,dx}$ y $y_p = e^{-\int p\,dx}\int g(x)e^{\int p\,dx}\,dx$. La constante $C$ absorbe la constante de integración de la integral indefinida de $A(x)$.

El mismo esquema se extiende a ecuaciones lineales de orden superior: la sección 3.7 lo desarrolla para ecuaciones de segundo orden.
