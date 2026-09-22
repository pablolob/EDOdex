
## Enunciado

Considere el problema con valor inicial $y' = \sqrt{1 - y^2}, \ y(0) = 0$.

a) Demuestre que $y = \sin x$ es la solución de este problema con valor inicial.

b) Busque una solución del problema con valor inicial en la forma de una serie de potencias alrededor de $x = 0$. Encuentre los coeficientes hasta el término en $x^3$ de esta serie.

## Solución

a) La función $y=\sin x$ cumple $y(0)=0$ y, para $|x|<\pi/2$,

$$
y'=\cos x=\sqrt{1-\sin^2 x}=\sqrt{1-y^2},
$$

ya que $\cos x>0$ en ese intervalo.

b) La solución en serie de potencias alrededor de $x=0$ es

$$
y(x)=x-\frac{x^3}{6}+O(x^5),
$$

esto es, $a_0=0$, $a_1=1$, $a_2=0$ y $a_3=-\dfrac{1}{6}$.

## Resolución

### Apartado a)

Se propone $y=\sin x$. En primer lugar,

$$
y(0)=\sin 0=0,
$$

de modo que se satisface la condición inicial. La derivada es $y'=\cos x$. Por otra parte,

$$
1-y^2=1-\sin^2 x=\cos^2 x,
$$

de donde

$$
\sqrt{1-y^2}=\sqrt{\cos^2 x}=|\cos x|.
$$

Para $|x|<\pi/2$ se tiene $\cos x>0$, luego $|\cos x|=\cos x$. Por tanto,

$$
y'=\cos x=\sqrt{1-y^2},
$$

y la función satisface la ecuación diferencial en $(-\pi/2,\pi/2)$. En los extremos $x=\pm\pi/2$ ambos miembros valen $0$, por lo que el intervalo de validez puede cerrarse a $[-\pi/2,\pi/2]$.

### Apartado b)

Se busca una solución en **serie de potencias** centrada en $x=0$,

$$
y=\sum_{n=0}^{\infty} a_n x^n.
$$

La condición $y(0)=0$ implica $a_0=0$, de modo que

$$
y=a_1x+a_2x^2+a_3x^3+\cdots
$$

Como el miembro derecho de la ecuación depende de $y^2$, se calcula primero esa potencia:

$$
y^2=\left(a_1x+a_2x^2+a_3x^3+\cdots\right)^2
=a_1^2x^2+2a_1a_2x^3+O(x^4).
$$

Así,

$$
1-y^2=1-a_1^2x^2-2a_1a_2x^3+O(x^4).
$$

Se desarrolla la raíz con la **serie binomial** $(1-z)^{1/2}=1-\dfrac{z}{2}-\dfrac{z^2}{8}-\cdots$, válida para $|z|<1$, con $z=y^2$. Hasta el orden $x^3$ solo contribuye el término lineal en $z$, porque $z^2$ es de orden $x^4$:

$$
\sqrt{1-y^2}=1-\frac{a_1^2}{2}x^2-a_1a_2x^3+O(x^4).
$$

Por otro lado, la derivada de la serie es

$$
y'=a_1+2a_2x+3a_3x^2+4a_4x^3+\cdots
$$

Al sustituir en $y'=\sqrt{1-y^2}$ e igualar los coeficientes de cada potencia de $x$, lo que es válido por la unicidad del desarrollo en serie de potencias, resulta

$$
\begin{aligned}
x^0:&\quad a_1=1, \\
x^1:&\quad 2a_2=0, \\
x^2:&\quad 3a_3=-\frac{a_1^2}{2}, \\
x^3:&\quad 4a_4=-a_1a_2.
\end{aligned}
$$

De aquí

$$
a_1=1,\qquad a_2=0,\qquad a_3=-\frac{1}{6},\qquad a_4=0.
$$

Por tanto,

$$
y(x)=x-\frac{x^3}{6}+O(x^5),
$$

en concordancia con el apartado a).

## Observaciones

La serie obtenida reproduce los primeros términos del desarrollo de Taylor de $\sin x$ alrededor de $x=0$: $x-\dfrac{x^3}{6}+\dfrac{x^5}{120}-\cdots$. El apartado a) proporciona la solución exacta y el apartado b) la recupera término a término.

El intervalo de validez de la solución es $(-\pi/2,\pi/2)$, cerrable a $[-\pi/2,\pi/2]$. Fuera de él, $\sin x$ deja de satisfacer la ecuación diferencial, porque $\sqrt{1-\sin^2 x}=|\cos x|=-\cos x$, que no coincide con $y'=\cos x$.

### Método alternativo: elevar al cuadrado

Al elevar al cuadrado $y'=\sqrt{1-y^2}$ se obtiene $(y')^2+y^2=1$, que puede resolverse también por series. Con $y=\sum a_nx^n$ y $a_0=0$,

$$
(y')^2+y^2=a_1^2+4a_1a_2x+\left(4a_2^2+6a_1a_3+a_1^2\right)x^2+\cdots=1.
$$

La igualdad $a_1^2=1$ deja dos signos posibles; la condición $y'(0)=\sqrt{1-0}=1$ obliga a $a_1=1$. Las ecuaciones siguientes dan $a_2=0$ y $a_3=-1/6$, el mismo resultado anterior.
