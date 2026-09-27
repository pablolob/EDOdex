
## Enunciado

En los problemas 1-6 complete el espacio en blanco o concluya cierto o falso sin consultar el libro.

Las funciones $f(x) = x^2 - 1$ y $g(x) = x^5$ son ortogonales sobre el intervalo $[-\pi, \pi]$.

## Solución

La afirmación es **cierta**. El producto interno de ambas funciones sobre $[-\pi, \pi]$ se anula:

$$
\langle f, g \rangle = \int_{-\pi}^{\pi} (x^2 - 1)\,x^5\,dx = 0.
$$

## Resolución

Dos funciones son ortogonales sobre un intervalo cuando su producto interno se anula. Con peso $r(x) = 1$,

$$
\langle f, g \rangle = \int_{-\pi}^{\pi} f(x)\,g(x)\,dx = \int_{-\pi}^{\pi} (x^2 - 1)\,x^5\,dx.
$$

Se desarrolla el integrando:

$$
(x^2 - 1)\,x^5 = x^7 - x^5.
$$

Tanto $x^7$ como $x^5$ son funciones impares, igual que la diferencia $x^7 - x^5$. La integral de una función impar sobre un intervalo simétrico respecto al origen es cero, de modo que

$$
\int_{-\pi}^{\pi} (x^7 - x^5)\,dx = 0.
$$

El producto interno es cero; por tanto, $f(x) = x^2 - 1$ y $g(x) = x^5$ son ortogonales sobre $[-\pi, \pi]$, y la afirmación es cierta.

## Observaciones

El factor $x^2 - 1$ es par y $x^5$ es impar; su producto es impar. Esta paridad, junto con la simetría del intervalo $[-\pi, \pi]$, anula la integral sin necesidad de hallar la primitiva. Si el intervalo no fuera simétrico respecto al origen, la ortogonalidad dejaría de garantizarse. La función de peso considerada es $r(x) = 1$.
