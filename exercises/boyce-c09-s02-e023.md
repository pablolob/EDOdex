---
title: "Boyce 9.2 Ejercicio 23"
exercise-id: boyce-c09-s02-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.2, ejercicio 23"
statement-status: accepted
solution-status: open
source-images:
  - c09s02i04-p507.png
---

## Enunciado

Una generalización de la ecuación del péndulo amortiguado analizada en el texto, o de un sistema amortiguado, resorte-masa es la ecuación de Liénard,
$$\frac{d^2 x}{dt^2} + c(x)\frac{dx}{dt} + g(x) = 0.$$
Si $c(x)$ es una constante y $g(x) = kx$, entonces esta ecuación tiene la forma de la ecuación lineal del péndulo [sustituya $\sin \theta$ por $\theta$ en la ecuación (18) de la sección 9.2]; en caso contrario, la fuerza de amortiguamiento $c(x)\frac{dx}{dt}$ y la fuerza de restitución $g(x)$ son no lineales. Suponga que $c$ es continuamente diferenciable, $g$ es dos veces continuamente diferenciable y $g(0) = 0$.
a) Escriba la ecuación de Liénard como un sistema de dos ecuaciones de primer orden al introducir la variable $y = dx/dt$.
b) Demuestre que $(0,0)$ es un punto crítico y que el sistema es casi lineal en la vecindad de $(0,0)$.
c) Demuestre que si $c(0) > 0$ y $g'(0) > 0$, entonces el punto crítico es asintóticamente estable, y que si $c(0) < 0$ o $g'(0) < 0$, entonces el punto crítico es inestable.
*Sugerencia:* aplique la serie de Taylor para aproximar $c$ y $g$ en la vecindad de $x = 0$.
