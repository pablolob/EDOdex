---
title: "Boyce 11.4 Ejercicio 2"
exercise-id: boyce-c11-s04-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.4, ejercicio 2"
statement-status: accepted
solution-status: open
source-images:
  - c11s04i01-p687.png
---

## Enunciado

Considere el problema con valores en la frontera
$$-(xy)' = \lambda xy,$$
$$y, y' \text{ acotadas cuando } x \to 0, \quad y'(1) = 0.$$
a) Demuestre que $\lambda_0 = 0$ es un eigenvalor de este problema correspondiente a la eigenfunción $\phi_0(x) = 1$. Si $\lambda > 0$, demuestre formalmente que las eigenfunciones se expresan por $\phi_n(x) = J_0(\sqrt{\lambda_n}x)$, en donde $\sqrt{\lambda_n}$ es la $n$-ésima raíz positiva (en orden creciente) de la ecuación $J'_0(\sqrt{\lambda}) = 0$. Es posible demostrar que existe una sucesión infinita de esas raíces.
b) Demuestre que si $m, n = 0, 1, 2, \dots$, entonces
$$\int_0^1 x \phi_m(x) \phi_n(x) \,dx = 0, \quad m \neq n.$$
c) Encuentre una solución formal del problema no homogéneo
$$-(xy)' = \mu xy + f(x),$$
$$y, y' \text{ acotadas cuando } x \to 0, \quad y'(1) = 0,$$
en donde $f$ es una función continua dada sobre $0 \le x \le 1$ y $\mu$ no es un eigenvalor del problema homogéneo correspondiente.
