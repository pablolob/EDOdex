---
title: "Boyce 7.4 Ejercicio 25"
exercise-id: boyce-c07-s04-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.4, ejercicio 25"
statement-status: accepted
solution-status: open
source-images:
  - c07s04i02-p396.png
---

## Enunciado

Considere un sistema de segundo orden $\mathbf{x}' = \mathbf{Ax}$. Suponga que $r_1 \neq r_2$. La solución general es $\mathbf{x} = c_1 \boldsymbol{\xi}^{(1)} e^{r_1 t} + c_2 \boldsymbol{\xi}^{(2)} e^{r_2 t}$, en tanto que $\boldsymbol{\xi}^{(1)}$ y $\boldsymbol{\xi}^{(2)}$ sean linealmente independientes. En este problema, se establece la independencia lineal de $\boldsymbol{\xi}^{(1)}$ y $\boldsymbol{\xi}^{(2)}$ al suponer que son linealmente dependientes y demostrar a continuación que esto produce una contradicción.
a) Observe que $\boldsymbol{\xi}^{(1)}$ satisface la ecuación matricial $(\mathbf{A} - r_1\mathbf{I})\boldsymbol{\xi}^{(1)} = 0$; de manera semejante, observe que $(\mathbf{A} - r_2\mathbf{I})\boldsymbol{\xi}^{(2)} = 0$.
b) Demuestre que $(\mathbf{A} - r_2\mathbf{I})\boldsymbol{\xi}^{(1)} = (r_1 - r_2)\boldsymbol{\xi}^{(1)}$.
c) Suponga que $\boldsymbol{\xi}^{(1)}$ y $\boldsymbol{\xi}^{(2)}$ son linealmente dependientes; entonces $c_1 \boldsymbol{\xi}^{(1)} + c_2 \boldsymbol{\xi}^{(2)} = 0$ y por lo menos una de $c_1$ o $c_2$ es diferente de cero; suponga que $c_1 \neq 0$. Demuestre que $(\mathbf{A} - r_2\mathbf{I})(c_1 \boldsymbol{\xi}^{(1)} + c_2 \boldsymbol{\xi}^{(2)}) = 0$ y también que $(\mathbf{A} - r_2\mathbf{I})(c_1 \boldsymbol{\xi}^{(1)} + c_2 \boldsymbol{\xi}^{(2)}) = c_1(r_1 - r_2)\boldsymbol{\xi}^{(1)}$, donde $c_1 = 0$, lo que es una contradicción. Por consiguiente, $\boldsymbol{\xi}^{(1)}$ y $\boldsymbol{\xi}^{(2)}$ son linealmente independientes.
d) Modifique el argumento del inciso c) para el caso en que $c_1$ es cero pero no $c_2$ no lo es.
e) Desarrolle un argumento semejante para el caso en que el orden $n = 3$; observe que el procedimiento puede extenderse para abarcar un valor arbitrario de $n$.
