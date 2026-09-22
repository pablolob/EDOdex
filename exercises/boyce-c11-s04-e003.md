---
title: "Boyce 11.4 Ejercicio 3"
exercise-id: boyce-c11-s04-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.4, ejercicio 3"
statement-status: accepted
solution-status: open
source-images:
  - c11s04i01-p687.png
  - c11s04i02-p688.png
---

## Enunciado

Considere el problema
$$-(xy)' + (k^2 / x)y = \lambda xy,$$
$$y, y' \text{ acotadas cuando } x \to 0, \quad y(1) = 0,$$
en donde $k$ es un entero positivo.
a) Use la sustitución $t = \sqrt{\lambda} x$ para demostrar que la ecuación diferencial anterior se reduce a la ecuación de Bessel de orden $k$ (ver el problema 9 de la sección 5.9). Una solución es $J_k(t)$; una segunda solución linealmente independiente, denotada por $Y_k(t)$, es no acotada cuando $t \to 0$.
b) Demuestre formalmente que los eigenvalores $\lambda_1, \lambda_2, \dots$ del problema dado son los cuadrados de los ceros positivos de $J_k(\sqrt{\lambda})$, y que las eigenfunciones correspondientes son $\phi_n(x) = J_k(\sqrt{\lambda_n}x)$. Es posible demostrar que existe una sucesión infinita de esos ceros.
c) Demuestre que las eigenfunciones $\phi_n(x)$ satisfacen la relación de ortogonalidad
$$\int_0^1 x \phi_m(x) \phi_n(x) \,dx = 0, \quad m \neq n.$$
d) Determine los coeficientes del desarrollo formal en serie
$$f(x) = \sum_{n=1}^\infty a_n \phi_n(x).$$
e) Encuentre una solución formal del problema no homogéneo
$$-(xy)' + (k^2 / x)y = \mu xy + f(x),$$
$$y, y' \text{ acotadas cuando } x \to 0, \quad y(1) = 0,$$
en donde $f$ es una función continua dada sobre $0 \le x \le 1$ y $\mu$ no es un eigenvalor del problema homogéneo correspondiente.
