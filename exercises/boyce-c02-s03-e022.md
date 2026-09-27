---
title: "Boyce 2.3 Ejercicio 22"
exercise-id: boyce-c02-s03-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.separable
  - resolver-analiticamente.cambio-variable
  - resolver-analiticamente.variables-separables
prerequisitos:
  - algebra.factorizacion-polinomios
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Demuestre que la ecuación

$$\frac{dy}{dx} = \frac{y - 4x}{x - y}$$

no es separable pero que, si se reemplaza la variable $y$ por una nueva variable $v$ definida por $v = y/x$, entonces la ecuación es separable en $x$ y $v$. Encuentre de esta manera la solución de la ecuación dada. Ver la sección 2.9 para un análisis más detallado de este método.

## Solución

La ecuación es **de primer orden** y no es separable en su forma original. Con el cambio de variable $v = y/x$ se transforma en una ecuación **separable**. Su solución general, en forma implícita, es

$$
(y - 2x)(y + 2x)^{3} = C,
$$

con $C$ constante arbitraria. Las rectas $y = 2x$ y $y = -2x$ son soluciones singulares.

## Resolución

Se denota $f(x,y) = \frac{y - 4x}{x - y}$. Para que la ecuación sea separable debe existir una factorización de la forma $f(x,y) = A(x)B(y)$. En tal caso, para dos valores fijos $y_1$ y $y_2$ con $B(y_2) \neq 0$, el cociente $f(x,y_1)/f(x,y_2) = B(y_1)/B(y_2)$ no depende de $x$. Se toman $y_1 = 0$ y $y_2 = 1$. Entonces

$$
f(x,0) = \frac{-4x}{x} = -4, \qquad f(x,1) = \frac{1 - 4x}{x - 1},
$$

de donde

$$
\frac{f(x,0)}{f(x,1)} = \frac{-4(x - 1)}{1 - 4x} = \frac{4(1 - x)}{1 - 4x}.
$$

Este cociente no es constante: en $x = 2$ vale $4/7$ y en $x = 3$ vale $8/11$. Por tanto $f$ no admite esa factorización y la ecuación no es separable.

Se introduce ahora la nueva variable $v = y/x$, esto es, $y = vx$. Derivando, $y' = v + xv'$. Al sustituir en la ecuación,

$$
v + xv' = \frac{vx - 4x}{x - vx} = \frac{v - 4}{1 - v},
$$

donde se ha supuesto $x \neq 0$ para poder dividir por $x$. Despejando $xv'$,

$$
x\frac{dv}{dx} = \frac{v - 4}{1 - v} - v = \frac{v^{2} - 4}{1 - v}.
$$

Esta ecuación es separable en $x$ y $v$:

$$
\frac{1 - v}{v^{2} - 4}\,dv = \frac{dx}{x}.
$$

Se factoriza $v^{2} - 4 = (v - 2)(v + 2)$ y se descompone en fracciones parciales simples:

$$
\frac{1 - v}{v^{2} - 4} = -\frac{1}{4}\cdot\frac{1}{v - 2} - \frac{3}{4}\cdot\frac{1}{v + 2}.
$$

Integrando ambos miembros,

$$
-\frac{1}{4}\ln|v - 2| - \frac{3}{4}\ln|v + 2| = \ln|x| + c.
$$

Multiplicando por $-4$ y renombrando la constante arbitraria,

$$
\ln\!\left(|v - 2|\,|v + 2|^{3}\right) = \ln\!\left(Kx^{-4}\right), \qquad K > 0,
$$

de modo que

$$
|v - 2|\,|v + 2|^{3} = Kx^{-4}.
$$

Al eliminar los valores absolutos y multiplicar por $x^{4}$,

$$
(v - 2)(v + 2)^{3} = Cx^{-4}.
$$

Volviendo a $v = y/x$,

$$
\left(\frac{y}{x} - 2\right)\left(\frac{y}{x} + 2\right)^{3} = Cx^{-4}.
$$

Multiplicando por $x^{4}$ se obtiene la solución general en forma implícita:

$$
(y - 2x)(y + 2x)^{3} = C.
$$

La derivación implícita de $F(x,y) = (y - 2x)(y + 2x)^{3} = C$ confirma el resultado. Las derivadas parciales son

$$
F_x = 4(y + 2x)^{2}(y - 4x), \qquad F_y = 4(y + 2x)^{2}(y - x),
$$

por lo que

$$
y' = -\frac{F_x}{F_y} = -\frac{y - 4x}{y - x} = \frac{y - 4x}{x - y},
$$

que es la ecuación dada.

Al separar variables se dividió por $v^{2} - 4$, lo que descarta los casos $v = 2$ y $v = -2$. Estos corresponden a las rectas $y = 2x$ y $y = -2x$: ambas satisfacen la ecuación original y son soluciones singulares. Aparecen como el caso degenerado $C = 0$ de la familia.

La ecuación original no está definida sobre la recta $y = x$. Las curvas con $C > 0$ no cortan esa recta y sus dos ramas están definidas para todo $x$ real; las curvas con $C < 0$ la cortan con tangente vertical, de modo que el intervalo de validez de esas ramas termina en el punto de corte.

## Observaciones

La ecuación es homogénea de primer orden: tanto $y - 4x$ como $x - y$ son funciones homogéneas del mismo grado. Esa estructura es la que permite el cambio $v = y/x$ y anticipa el método que se desarrolla con detalle en la sección 2.9.

El signo de la constante $C$ describe la posición de las curvas. Para $C > 0$ hay dos ramas asintóticas a las rectas singulares $y = 2x$ y $y = -2x$; para $C < 0$ las ramas quedan comprendidas entre ellas.
