
## Enunciado

En los problemas 1-6 complete el espacio en blanco o concluya cierto o falso sin consultar el libro.

Si la función $f(x) = \begin{cases} x + 1, & -1 < x < 0 \\ -x, & 0 < x < 1 \end{cases}$ se desarrolla en una serie de Fourier, la serie converge a ______ en $x = -1$, a ______ en $x = 0$ y a ______ en $x = 1$.

## Solución

La serie converge a los valores

$$
\text{en } x=-1:\ -\frac{1}{2},\qquad
\text{en } x=0:\ \frac{1}{2},\qquad
\text{en } x=1:\ -\frac{1}{2}.
$$

## Resolución

La función es continua por tramos y suave por tramos en $(-1,1)$, así que cumple las condiciones de Dirichlet. Por el teorema de convergencia, la serie de Fourier converge a $f(x)$ en cada punto de continuidad y al promedio de los límites laterales de la extensión periódica en cada discontinuidad.

La extensión periódica tiene periodo $2$, igual a la longitud del intervalo. En los puntos pedidos se calculan los límites laterales de esa extensión.

**En $x=0$.** Los límites laterales dentro del intervalo son

$$
f(0^{-})=0+1=1,\qquad f(0^{+})=-0=0,
$$

y su promedio es

$$
\frac{1+0}{2}=\frac{1}{2}.
$$

**En $x=-1$.** Por la derecha, $f(-1^{+})=-1+1=0$. Por la izquierda, la extensión periódica toma el valor del extremo derecho del intervalo, $f(1^{-})=-1$. El promedio es

$$
\frac{0+(-1)}{2}=-\frac{1}{2}.
$$

**En $x=1$.** Por la izquierda, $f(1^{-})=-1$. Por la derecha, la extensión periódica toma el valor del extremo izquierdo, $f(-1^{+})=0$. El promedio es

$$
\frac{(-1)+0}{2}=-\frac{1}{2}.
$$

En consecuencia, la serie converge a $-\frac{1}{2}$ en $x=-1$, a $\frac{1}{2}$ en $x=0$ y a $-\frac{1}{2}$ en $x=1$.

## Observaciones

En $x=0$ el valor de la serie, $\frac{1}{2}$, no coincide con el límite de ninguna de las dos ramas: es el promedio del salto, como exige el teorema de Dirichlet.

En los extremos $x=\pm 1$ el valor $-\frac{1}{2}$ proviene de unir los extremos del intervalo al repetir la función con periodo $2$. La extensión periódica tiene un salto en cada entero impar.
