---
title: "Boyce 2.8 Ejercicio 26"
exercise-id: boyce-c02-s08-e026
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 26"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver.exacta
  - seleccionar.metodo.factor-integrante
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s08i03-p103.png
---

## Enunciado

En los problemas 25 a 31, resuelva la ecuación diferencial dada. Si es posible, halle un factor integrante de la forma $\mu(x, y) = \mu(x)$ o $\mu(x, y) = \mu(y)$.

26. $y' = e^{2x} + y - 1$

## Solución

La ecuación no es exacta, pero admite el **factor integrante** $\mu(x) = e^{-x}$, que la vuelve exacta. Su solución general es

$$
y = e^{2x} + 1 + C e^{x}.
$$

## Resolución

Se escribe la ecuación en forma diferencial. De $y' = \dfrac{dy}{dx} = e^{2x} + y - 1$ resulta

$$
(e^{2x} + y - 1)\,dx - dy = 0,
$$

de modo que $M(x, y) = e^{2x} + y - 1$ y $N(x, y) = -1$.

Se aplica el **test de exactitud**:

$$
\frac{\partial M}{\partial y} = 1, \qquad \frac{\partial N}{\partial x} = 0.
$$

Las derivadas cruzadas no coinciden, luego la ecuación no es exacta.

Se busca un factor integrante dependiente de una sola variable. Para un factor $\mu(x)$ se calcula el cociente

$$
\frac{M_y - N_x}{N} = \frac{1 - 0}{-1} = -1,
$$

que depende solo de $x$. Por tanto existe un factor de la forma $\mu(x)$, dado por

$$
\mu(x) = \exp\!\left(\int -1\,dx\right) = e^{-x}.
$$

Al multiplicar la ecuación por $e^{-x}$ se obtiene

$$
\left(e^{x} + e^{-x} y - e^{-x}\right) dx - e^{-x}\,dy = 0.
$$

Esta ecuación es **exacta**, pues

$$
\frac{\partial}{\partial y}\left(e^{x} + e^{-x} y - e^{-x}\right) = e^{-x}
= \frac{\partial}{\partial x}\left(-e^{-x}\right).
$$

Existe entonces una función potencial $F(x, y)$ con

$$
\frac{\partial F}{\partial x} = e^{x} + e^{-x} y - e^{-x}, \qquad
\frac{\partial F}{\partial y} = -e^{-x}.
$$

Se integra la segunda igualdad respecto de $y$, manteniendo $x$ constante:

$$
F(x, y) = -e^{-x} y + h(x).
$$

Se deriva respecto de $x$ y se iguala a $\mu M$:

$$
\frac{\partial F}{\partial x} = e^{-x} y + h'(x) = e^{x} + e^{-x} y - e^{-x},
$$

de donde $h'(x) = e^{x} - e^{-x}$. Al integrar,

$$
h(x) = e^{x} + e^{-x},
$$

y la función potencial es

$$
F(x, y) = -e^{-x} y + e^{x} + e^{-x}.
$$

La solución general se escribe de forma implícita como $F(x, y) = C$:

$$
-e^{-x} y + e^{x} + e^{-x} = C.
$$

Al multiplicar por $e^{x}$ queda

$$
-y + e^{2x} + 1 = C e^{x},
$$

y al despejar $y$,

$$
y = e^{2x} + 1 - C e^{x}.
$$

Como $C$ es una constante arbitraria, se escribe $y = e^{2x} + 1 + C e^{x}$.

Se comprueba por sustitución. La derivada es $y' = 2e^{2x} + C e^{x}$, mientras que el miembro derecho de la ecuación original vale

$$
e^{2x} + y - 1 = e^{2x} + \left(e^{2x} + 1 + C e^{x}\right) - 1 = 2e^{2x} + C e^{x},
$$

que coincide con $y'$.

## Observaciones

La forma $\mu(y)$ no es posible: el cociente alternativo

$$
\frac{N_x - M_y}{M} = \frac{-1}{e^{2x} + y - 1}
$$

depende de $x$ y de $y$, luego no define un factor integrante que dependa solo de $y$.

El factor $e^{-x}$ no se anula en ningún punto, de modo que no se pierde ninguna solución al multiplicar. La ecuación es lineal con coeficientes continuos en todo $\mathbb{R}$; su solución general es válida para todo $x \in \mathbb{R}$ y no hay soluciones singulares.
