---
title: "Boyce 11.3 Ejercicio 30"
exercise-id: boyce-c11-s03-e030
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 30"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i06-p680.png
---

## Enunciado

30. Es posible demostrar que el problema de Sturm-Liouville
$$L[y] = -[p(x)y']' + q(x)y = f(x), \tag{i}$$
$$a_1 y(0) + a_2 y'(0) = 0, \quad b_1 y(1) + b_2 y'(1) = 0, \tag{ii}$$
tiene una solución como función de Green
$$y = \phi(x) = \int_0^1 G(x, s) f(s) \,ds, \tag{iii}$$
siempre que $\lambda = 0$ no sea un eigenvalor de $L[y] = \lambda y$ sujeta a las condiciones en la frontera (ii). Además, $G(x, s)$ se expresa por
$$G(x, s) = \begin{cases} -y_1(s)y_2(x)/p(x)W(y_1, y_2)(x), & 0 \le s \le x, \\ -y_1(x)y_2(s)/p(x)W(y_1, y_2)(x), & x \le s \le 1, \end{cases} \tag{iv}$$
en donde $y_1$ es una solución de $L[y] = 0$ que satisface la condición en la frontera en $x = 1$ y $W(y_1, y_2)$ es el wronskiano de $y_1$ y $y_2$.
a) Compruebe que la función de Green obtenida en el problema 28 se expresa por la fórmula (iv).
b) Compruebe que la función de Green obtenida en el problema 29 se expresa por la fórmula (iv).
c) Demuestre que $p(x)W(y_1, y_2)(x)$ es una constante, al probar que su derivada es cero.
d) Use la ecuación (iv) y el resultado del inciso c) para demostrar que $G(x, s) = G(s, x)$.
