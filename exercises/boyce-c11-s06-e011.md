---
title: "Boyce 11.6 Ejercicio 11"
exercise-id: boyce-c11-s06-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.6, ejercicio 11"
statement-status: accepted
solution-status: open
source-images:
  - c11s06i02-p702.png
  - c11s06i03-p703.png
---

## Enunciado

En este problema se desarrollan algunos resultados más asociados con la convergencia en la media. Sean $R_n(a_1, \dots, a_n), S_n(x)$ y $a_i$ definidos por las ecuaciones (6), (2) y (9), respectivamente.

a) Demuestre que
$$R_n = \int_0^1 r(x) f^2(x)\,dx - \sum_{i=1}^n a_i^2.$$
Sugerencia: sustituya $S_n(x)$ de la ecuación (6) por su expresión e integre, si se aplica la relación de ortogonalidad (1).

b) Demuestre que $\sum_{i=1}^n a_i^2 \le \int_0^1 r(x) f^2(x)\,dx$. Este resultado se conoce como desigualdad de Bessel.

c) Demuestre que $\sum_{i=1}^\infty a_i^2$ converge.

d) Demuestre que $\lim_{n \to \infty} R_n = \int_0^1 r(x) f^2(x)\,dx - \sum_{i=1}^\infty a_i^2$.

e) Demuestre que $\sum_{i=1}^\infty a_i \phi_i(x)$ converge a $f(x)$ en la media si y sólo si
$$\int_0^1 r(x) f^2(x)\,dx = \sum_{i=1}^\infty a_i^2.$$
Este resultado se conoce como ecuación de Parseval.
