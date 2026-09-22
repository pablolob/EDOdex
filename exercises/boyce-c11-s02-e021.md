---
title: "Boyce 11.2 Ejercicio 21"
exercise-id: boyce-c11-s02-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.2, ejercicio 21"
statement-status: accepted
solution-status: open
source-images:
  - c11s02i02-p663.png
---

## Enunciado

Considere el problema de Sturm-Liouville
$$-\left[p(x)y'\right]' + q(x)y = \lambda r(x)y$$
$$a_1 y(0) + a_2 y'(0) = 0, \quad b_1 y(1) + b_2 y'(1) = 0$$
en donde $p$, $q$ y $r$ satisfacen las condiciones expresadas en el texto.
a) Demuestre que si $\lambda$ es un eigenvalor y $\phi$ es una eigenfunción correspondiente, entonces
$$\lambda \int_0^1 r \phi^2 \,dx = \int_0^1 \left(p \phi'^2 + q \phi^2\right) dx + \frac{b_1}{b_2} p(1)\phi^2(1) - \frac{a_1}{a_2} p(0)\phi^2(0)$$
en el supuesto que $a_2 \neq 0$ y $b_2 \neq 0$. ¿Cómo debe modificarse este resultado si $a_2 = 0$ o $b_2 = 0$?
b) Demuestre que si $q(x) \ge 0$ y si $b_1/b_2 - a_1/a_2$ son negativos, entonces el eigenvalor $\lambda$ es no negativo.
c) En las condiciones del inciso b), demuestre que el eigenvalor $\lambda$ es estrictamente positivo a menos que $q(x) = 0$ para cada $x$ en $0 \le x \le 1$ y también $a_1 = b_1 = 0$.
