---
title: "Boyce 3.7 Ejercicio 27"
exercise-id: boyce-c03-s07-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.7, ejercicio 27"
statement-status: accepted
solution-status: open
source-images:
  - c03s07i03-p196.png
---

## Enunciado

Mediante la combinación de los resultados de los problemas 24 a 26, demuestre que la solución del problema con valor inicial

$$L[y] = (aD^2 + bD + c)y = g(x), \quad y(x_0) = 0, \ y'(x_0) = 0,$$

en donde $a$, $b$ y $c$ son constantes, tiene la forma

$$y = \phi(x) = \int_{x_0}^{x} K(x - t)g(t)\,dt \quad \text{(i)}$$

La función $K$ depende sólo de las soluciones $y_1$ y $y_2$ de la ecuación homogénea correspondiente y es independiente del término no homogéneo. Una vez que se determina $K$, todos los problemas no homogéneos que comprenden el mismo operador diferencial $L$ se reducen a la evaluación de una integral. Observe también que aun cuando $K$ depende tanto de $x$ como de $t$, solamente aparece la combinación $x - t$, de modo que $K$ en realidad es una función de una sola variable. Si se considera que $g(x)$ es la entrada del problema y que $\phi(x)$ es la salida, de la ecuación (i) se deduce que la salida depende de la entrada sobre todo el intervalo, desde el punto inicial $x_0$ hasta el valor en curso $x$. La integral de la ecuación (i) se llama **convolución** de $K$ y $g$, y $K$ recibe el nombre **kernel**.
