---
title: "Boyce 4.3 Ejercicio 4"
exercise-id: boyce-c04-s03-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 4"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - resolver-analiticamente.coeficientes-indeterminados
hidden-competencies:
  - clasificar.lineal-no-hom
  - seleccionar-metodo.coeficientes-indeterminados
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s03i01-p234.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

4. $y''' - y' = 2\sin x$

## Solución

$$
y = c_1 + c_2 e^{x} + c_3 e^{-x} + \cos x.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación característica es

$$
r^3 - r = 0.
$$

La factorización $r^3 - r = r(r^2-1) = r(r-1)(r+1)$ da las raíces reales distintas $r=0$, $r=1$ y $r=-1$. Por tanto,

$$
y_c = c_1 + c_2 e^{x} + c_3 e^{-x}.
$$

**Solución particular.** El término no homogéneo es $g(x) = 2\sin x$. Se aplica el método de **coeficientes indeterminados** con la forma de prueba

$$
Y = A\sin x + B\cos x,
$$

que incluye ambos términos trigonométricos porque sus derivadas se mezclan. Sus derivadas son

$$
Y' = A\cos x - B\sin x, \qquad Y'' = -A\sin x - B\cos x, \qquad Y''' = -A\cos x + B\sin x.
$$

Al sustituir en el miembro izquierdo,

$$
\begin{aligned}
Y''' - Y'
&= (-A\cos x + B\sin x) - (A\cos x - B\sin x) \\
&= -2A\cos x + 2B\sin x.
\end{aligned}
$$

La igualdad $-2A\cos x + 2B\sin x = 2\sin x$ exige $-2A = 0$ y $2B = 2$, de modo que $A = 0$ y $B = 1$. Así,

$$
y_p = \cos x.
$$

**Solución general.** Al reunir ambas partes,

$$
y = c_1 + c_2 e^{x} + c_3 e^{-x} + \cos x.
$$

Los coeficientes son constantes y $g(x) = 2\sin x$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

La forma de prueba $A\sin x + B\cos x$ debe contener el seno y el coseno aunque $g(x)$ solo presente seno, porque la derivación intercambia ambas funciones. Omitir el coseno haría imposible igualar el coeficiente nulo de $\cos x$ que genera la derivada.

Ningún término de $y_p$ figura en $y_c$: la parte homogénea contiene solo una constante y exponenciales, sin funciones trigonométricas. Por eso no se aplica la regla de modificación y no aparece un factor $x$.

### Método alternativo: aniquiladores

El operador $D^2+1$ aniquila $2\sin x$. Aplicándolo a la ecuación se obtiene la homogénea $D(D^2-1)(D^2+1)y = 0$, cuyas raíces son $0, \pm 1, \pm i$. La solución particular es la combinación de $\cos x$ y $\sin x$ que no pertenece a $y_c$; al imponer la ecuación queda $y_p = \cos x$, en coincidencia con el resultado anterior.
