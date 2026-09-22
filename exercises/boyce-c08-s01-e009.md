---
title: "Boyce 8.1 Ejercicio 9"
exercise-id: boyce-c08-s01-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.1, ejercicio 9"
statement-status: accepted
solution-status: open
source-images:
  - c08s01i02-p442.png
---

## Enunciado

\textbf{Método de extrapolación de Richardson.} Sea $y = \phi(t)$ la solución del problema con valor inicial $y' = f(t, y)$, $y(t_0) = y_0$. Según se analizó en el texto (ver también el inciso c) del problema 8), al aplicar el método de Euler para ir desde $t_0$ hasta un punto fijo $\bar{t} = t_0 + nh$, el error global por truncamiento está acotado por una constante multiplicada por $h$. Con mayor precisión, es posible demostrar que $\phi(\bar{t}) = y_n(h) + Ch + M(h)$, en donde $C$ es una constante que depende de la ecuación diferencial y de la longitud del intervalo, pero no de $h$, y $M(h)$ es una función proporcional a $h^2$. La dependencia de $y_n$ con respecto a $h$ se indica al escribir $y_n(h)$. El error es $Ch + M(h)$. Suponga ahora que el cálculo se repite usando un tamaño de paso igual a $h/2$. Como ahora se requiere $2n$ pasos para llegar a $\bar{t}$, se tiene $\phi(\bar{t}) = y_{2n}(h/2) + Ch/2 + M(h/2)$. Al despejar $C$ de la primera ecuación y sustituirla en la segunda ecuación, demuestre que
$$\phi(\bar{t}) \cong y_{2n}(h/2) + [y_{2n}(h/2) - y_n(h)], \tag{i}$$
en donde se han despreciado los términos proporcionales a $h^2$. Por tanto, esta nueva aproximación para $\phi(\bar{t})$ tiene un error proporcional a $h^2$, en comparación con un error proporcional a $h$ para un cálculo simple con el método de Euler. También es posible aplicar la ecuación (i) para estimar el error asociado con un tamaño de paso de $h/2$, es decir,
$$\phi(\bar{t}) - y_{2n}(h/2) \cong y_{2n}(h/2) - y_n(h). \tag{ii}$$
