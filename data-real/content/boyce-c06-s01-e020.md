
## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

20. $y'' + \omega^2 y = \cos 2t, \quad \omega^2 \neq 4; \quad y(0) = 1, \quad y'(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(t) = \frac{5-\omega^2}{4-\omega^2}\cos(\omega t) - \frac{1}{4-\omega^2}\cos(2t), \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 1$ y $y'(0) = 0$,

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - s,
\qquad
\mathcal{L}\{\cos 2t\} = \frac{s}{s^2+4}.
$$

Al transformar la ecuación resulta

$$
s^2Y(s) - s + \omega^2Y(s) = \frac{s}{s^2+4}.
$$

Se agrupan los términos en $Y(s)$ y se despeja:

$$
(s^2+\omega^2)Y(s) = s + \frac{s}{s^2+4},
\qquad
Y(s) = \frac{s}{s^2+\omega^2} + \frac{s}{(s^2+\omega^2)(s^2+4)}.
$$

El segundo término se separa en fracciones simples. Como $\omega^2 \neq 4$,

$$
\frac{1}{(s^2+\omega^2)(s^2+4)} = \frac{1}{4-\omega^2}\left(\frac{1}{s^2+\omega^2} - \frac{1}{s^2+4}\right).
$$

Entonces

$$
Y(s) = \frac{s}{s^2+\omega^2} + \frac{1}{4-\omega^2}\left(\frac{s}{s^2+\omega^2} - \frac{s}{s^2+4}\right).
$$

Con el par $\mathcal{L}\{\cos(bt)\} = \dfrac{s}{s^2+b^2}$ y por linealidad de la transformada inversa,

$$
y(t) = \cos(\omega t) + \frac{1}{4-\omega^2}\bigl(\cos(\omega t) - \cos(2t)\bigr).
$$

Al agrupar los términos en $\cos(\omega t)$ se obtiene la solución

$$
y(t) = \frac{5-\omega^2}{4-\omega^2}\cos(\omega t) - \frac{1}{4-\omega^2}\cos(2t).
$$

La solución satisface las condiciones iniciales:

$$
y(0) = \frac{5-\omega^2}{4-\omega^2} - \frac{1}{4-\omega^2} = \frac{4-\omega^2}{4-\omega^2} = 1,
\qquad
y'(0) = 0.
$$

## Observaciones

La restricción $\omega^2 \neq 4$ evita la resonancia. Si $\omega^2 = 4$ la frecuencia de la fuerza coincide con la natural y la transformada inversa incorpora un término secular proporcional a $t\sin(2t)$.

La solución es la superposición de dos oscilaciones: una con la frecuencia natural $\omega$ y otra con la frecuencia de la fuerza, $2$. Está definida para todo $t \ge 0$.
