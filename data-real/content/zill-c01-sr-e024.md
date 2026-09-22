
## Enunciado

**Problemas 23 a 26.**

En los problemas 23 a 26 verifique que la función indicada es una solución explícita de la ecuación diferencial dada. Dé una definición de intervalo $I$ para cada solución.

24. $y'' + y = \sec x$; $\quad y = x\sin x + (\cos x)\ln(\cos x)$

## Solución

La función $y = x\sin x + (\cos x)\ln(\cos x)$ es una **solución explícita** de la ecuación diferencial. Un intervalo de definición es

$$
I = \left(-\frac{\pi}{2},\,\frac{\pi}{2}\right).
$$

## Resolución

La función contiene $\ln(\cos x)$, lo que exige $\cos x > 0$. Por tanto, $x$ pertenece a algún intervalo de la forma $(-\pi/2 + 2\pi k,\; \pi/2 + 2\pi k)$ con $k \in \mathbb{Z}$.

Se calculan las derivadas. Primera derivada:

$$
\begin{aligned}
y' &= \sin x + x\cos x + (-\sin x)\ln(\cos x)
     + \cos x \cdot \frac{1}{\cos x}\cdot (-\sin x) \\[4pt]
   &= \sin x + x\cos x - \sin x\ln(\cos x) - \sin x \\[4pt]
   &= x\cos x - \sin x\ln(\cos x).
\end{aligned}
$$

Segunda derivada:

$$
\begin{aligned}
y'' &= \cos x - x\sin x
      - \Bigl[\cos x\ln(\cos x) + \sin x \cdot \frac{1}{\cos x}\cdot (-\sin x)\Bigr] \\[4pt]
    &= \cos x - x\sin x - \cos x\ln(\cos x) + \frac{\sin^{2} x}{\cos x}.
\end{aligned}
$$

Se sustituye en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y'' + y &= \Bigl[\cos x - x\sin x - \cos x\ln(\cos x) + \frac{\sin^{2} x}{\cos x}\Bigr]
          + \Bigl[x\sin x + \cos x\ln(\cos x)\Bigr] \\[4pt]
        &= \cos x + \frac{\sin^{2} x}{\cos x} \\[4pt]
        &= \frac{\cos^{2} x + \sin^{2} x}{\cos x}
         = \frac{1}{\cos x}
         = \sec x.
\end{aligned}
$$

La función satisface la ecuación diferencial en todo punto donde $\cos x > 0$. El mayor intervalo abierto que contiene $x = 0$ y en el que la función es continuamente derivable es $I = (-\pi/2,\; \pi/2)$.

## Observaciones

La restricción $\cos x > 0$ proviene del logaritmo $\ln(\cos x)$. Cualquier otro intervalo donde $\cos x > 0$, como $(\pi/2,\;3\pi/2)$ o $(3\pi/2,\;5\pi/2)$, también es un intervalo de definición válido, pero el más natural alrededor del origen es $(-\pi/2,\;\pi/2)$. La función $\sec x$ en el miembro derecho de la ecuación diferencial comparte exactamente el mismo dominio.
