
## Enunciado

**Problemas 23 a 26.**

En los problemas 23 a 26 verifique que la función indicada es una solución explícita de la ecuación diferencial dada. Dé una definición de intervalo $I$ para cada solución.

26. $x^2 y'' + xy' + y = \sec(\ln x)$; $\quad y = \cos(\ln x)\ln(\cos(\ln x)) + (\ln x)\sin(\ln x)$

## Solución

La función $y = \cos(\ln x)\ln(\cos(\ln x)) + (\ln x)\sin(\ln x)$ es una **solución explícita** de la ecuación diferencial. Un intervalo de definición es

$$
I = \bigl(e^{-\pi/2},\; e^{\pi/2}\bigr).
$$

## Resolución

Se introduce el cambio de variable $u = \ln x$ para simplificar los cálculos. Entonces $du/dx = 1/x$ y la función se expresa como

$$
y = \cos u \ln(\cos u) + u \sin u,
$$

con la restricción $\cos u > 0$ para que el logaritmo esté definido. Esto implica $u \in (-\pi/2 + 2\pi k,\; \pi/2 + 2\pi k)$ y, por tanto, $x \in (e^{-\pi/2+2\pi k},\; e^{\pi/2+2\pi k})$.

La derivada respecto de $u$ es

$$
\begin{aligned}
\frac{dy}{du} &= -\sin u \ln(\cos u) + \cos u\cdot\frac{1}{\cos u}\cdot(-\sin u)
                + \sin u + u\cos u \\[4pt]
              &= -\sin u \ln(\cos u) - \sin u + \sin u + u\cos u \\[4pt]
              &= -\sin u \ln(\cos u) + u\cos u.
\end{aligned}
$$

Entonces

$$
y' = \frac{dy}{dx} = \frac{1}{x}\,\frac{dy}{du}
    = \frac{1}{x}\bigl(-\sin u \ln(\cos u) + u\cos u\bigr).
$$

Para la segunda derivada se usa $y' = \frac{1}{x}g(u)$ con $g(u) = -\sin u \ln(\cos u) + u\cos u$:

$$
\begin{aligned}
y'' &= -\frac{1}{x^{2}}\,g(u) + \frac{1}{x}\,g'(u)\,\frac{1}{x}
     = \frac{g'(u) - g(u)}{x^{2}}.
\end{aligned}
$$

Se calcula $g'(u)$:

$$
\begin{aligned}
g'(u) &= -\cos u \ln(\cos u) - \sin u\cdot\frac{1}{\cos u}\cdot(-\sin u)
        + \cos u - u\sin u \\[4pt]
      &= -\cos u \ln(\cos u) + \frac{\sin^{2} u}{\cos u} + \cos u - u\sin u.
\end{aligned}
$$

Ahora se evalúa $x^{2}y'' + xy' + y$, que en términos de $u$ resulta:

$$
\begin{aligned}
x^{2}y'' &= g'(u) - g(u), \\
xy'     &= g(u), \\
y       &= \cos u \ln(\cos u) + u\sin u.
\end{aligned}
$$

Sustituyendo y simplificando:

$$
\begin{aligned}
x^{2}y'' + xy' + y
&= \bigl[g'(u) - g(u)\bigr] + g(u) + \bigl[\cos u \ln(\cos u) + u\sin u\bigr] \\[4pt]
&= g'(u) + \cos u \ln(\cos u) + u\sin u \\[4pt]
&= \Bigl[-\cos u \ln(\cos u) + \frac{\sin^{2} u}{\cos u} + \cos u - u\sin u\Bigr]
   + \cos u \ln(\cos u) + u\sin u \\[4pt]
&= \frac{\sin^{2} u}{\cos u} + \cos u \\[4pt]
&= \frac{\sin^{2} u + \cos^{2} u}{\cos u}
 = \frac{1}{\cos u}
 = \sec u = \sec(\ln x).
\end{aligned}
$$

La función satisface la ecuación diferencial para todo $x$ donde $\cos(\ln x) > 0$. El mayor intervalo abierto que contiene $x = 1$ (donde $u = 0$ y $\cos 0 = 1 > 0$) es aquel para el cual $\ln x \in (-\pi/2,\; \pi/2)$, es decir,

$$
I = \bigl(e^{-\pi/2},\; e^{\pi/2}\bigr).
$$

## Observaciones

La verificación mediante el cambio $u = \ln x$ aprovecha la estructura de la ecuación de Euler–Cauchy $x^{2}y'' + xy' + y = \sec(\ln x)$. La restricción $\cos(\ln x) > 0$ proviene del logaritmo en el primer sumando de la solución y coincide exactamente con el dominio de $\sec(\ln x)$ en el miembro derecho.
