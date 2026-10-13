---
title: "Boyce 2.8 Ejercicio 16"
exercise-id: boyce-c02-s08-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - resolver.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - derivacion.producto
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s08i02-p102.png
---

## Enunciado

En los problemas 15 y 16, encuentre el valor de $b$ para el que la ecuación dada es exacta y, después, resuelva esa ecuación al utilizar ese valor de $b$.

16. $(ye^{2xy} + x) \,dx + bxe^{2xy} \,dy = 0$

## Solución

El valor que hace exacta la ecuación es $b = 1$. La solución general implícita es

$$
e^{2xy} + x^2 = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ con

$$
M(x,y) = ye^{2xy} + x, \qquad N(x,y) = bxe^{2xy}.
$$

Se aplica el **test de exactitud**, que exige la igualdad de las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = e^{2xy} + y(2x)e^{2xy} = e^{2xy}(1 + 2xy),
$$

$$
\frac{\partial N}{\partial x} = b\left(e^{2xy} + x(2y)e^{2xy}\right) = b\,e^{2xy}(1 + 2xy).
$$

La condición $\dfrac{\partial M}{\partial y} = \dfrac{\partial N}{\partial x}$ se cumple para todo $(x,y)$ cuando $b = 1$, ya que para $b \ne 1$ la igualdad $1 = b$ es incompatible. Con ese valor, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = ye^{2xy} + x, \qquad \frac{\partial F}{\partial y} = xe^{2xy}.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante. La integral de $ye^{2xy}$ se obtiene por sustitución con $u = 2xy$:

$$
F(x,y) = \int \left(ye^{2xy} + x\right)dx = \frac{1}{2}e^{2xy} + \frac{x^2}{2} + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = xe^{2xy} + g'(y) = xe^{2xy},
$$

de modo que $g'(y) = 0$ y $g$ es una constante, que se absorbe en la constante de la solución.

La función potencial es

$$
F(x,y) = \frac{1}{2}e^{2xy} + \frac{x^2}{2},
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$. Al multiplicar por $2$,

$$
e^{2xy} + x^2 = C.
$$

## Observaciones

La función potencial $F(x,y) = \tfrac{1}{2}e^{2xy} + \tfrac{x^2}{2}$ es suave en todo $\mathbb{R}^2$, de modo que la familia implícita no queda restringida por el dominio. La integración conserva la función arbitraria $g(y)$, por lo que no se pierde ninguna solución singular.

### Método alternativo: integrar primero respecto de $y$

También puede partirse de $\partial F/\partial y = xe^{2xy}$. La integración respecto de $y$ da $F(x,y) = \tfrac{1}{2}e^{2xy} + h(x)$. Al derivar respecto de $x$ e igualar a $M(x,y)$ se obtiene $h'(x) = x$, es decir, $h(x) = \tfrac{x^2}{2}$, y la misma familia implícita.
