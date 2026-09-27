
## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

16. $y' = 2(1 + x)(1 + y^2), \quad y(0) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(x) = \tan\!\left(x^2 + 2x\right),
$$

definida en el intervalo

$$
\left(-1 - \sqrt{1 + \frac{\pi}{2}},\; -1 + \sqrt{1 + \frac{\pi}{2}}\right)
\approx (-2.6034,\; 0.6034).
$$

## Resolución

La ecuación $y' = 2(1+x)(1+y^2)$ admite **separación de variables**. Se divide entre el factor $1+y^2$, que nunca se anula, y se separan los diferenciales:

$$
\frac{dy}{1+y^2} = 2(1+x)\,dx.
$$

Como $1+y^2 > 0$ para todo $y$, la división no descarta ninguna solución constante.

Integrando ambos miembros, la integral de la izquierda es la derivada del arcotangente:

$$
\arctan y = x^2 + 2x + C.
$$

La condición inicial $y(0) = 0$ fija la constante:

$$
\arctan 0 = 0 + 0 + C \quad\Longrightarrow\quad C = 0.
$$

Por tanto, $\arctan y = x^2 + 2x$ y, despejando en forma explícita,

$$
y(x) = \tan\!\left(x^2 + 2x\right).
$$

Para determinar el intervalo de validez se aplica la **condición inicial**: la rama principal del arcotangente, con $\arctan 0 = 0$, corresponde al argumento en $(-\tfrac{\pi}{2}, \tfrac{\pi}{2})$. La solución deja de estar definida donde $x^2 + 2x = \tfrac{\pi}{2} + k\pi$. Alrededor de $x = 0$ solo aparecen las dos raíces de $x^2 + 2x = \tfrac{\pi}{2}$; la ecuación $x^2 + 2x = -\tfrac{\pi}{2}$ no tiene solución real porque su discriminante es negativo. Las raíces son

$$
x^2 + 2x = \frac{\pi}{2}
\;\Longrightarrow\;
(x+1)^2 = 1 + \frac{\pi}{2}
\;\Longrightarrow\;
x = -1 \pm \sqrt{1 + \frac{\pi}{2}}.
$$

El intervalo más largo que contiene a $x = 0$ y en el que la solución está definida es, entonces,

$$
\left(-1 - \sqrt{1 + \frac{\pi}{2}},\; -1 + \sqrt{1 + \frac{\pi}{2}}\right).
$$

En ese intervalo la solución es única, pues $f(x,y) = 2(1+x)(1+y^2)$ y $\partial f/\partial y = 4y(1+x)$ son continuas en todo el plano.

La solución se comprueba por sustitución. Con $u = x^2 + 2x$ se tiene $u' = 2(1+x)$ y

$$
y' = \sec^2(u)\,u' = \left(1 + \tan^2 u\right) 2(1+x) = 2(1+x)(1+y^2),
$$

que es la ecuación dada; además $y(0) = \tan 0 = 0$ satisface la condición inicial.

## Observaciones

El intervalo de validez no lo limita la ecuación, sino la función $\tan$: coincide con la componente conexa que contiene a $x = 0$ del conjunto donde $x^2 + 2x$ queda dentro de $(-\tfrac{\pi}{2}, \tfrac{\pi}{2})$. Fuera de ese intervalo, la curva $y = \tan(x^2+2x)$ reaparece en otras ramas, pero la rama que pasa por $(0,0)$ es la única solución del problema con valor inicial.
