---
title: "Boyce 2.8 Ejercicio 18"
exercise-id: boyce-c02-s08-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s08i02-p102.png
---

## Enunciado

Demuestre que cualquier ecuación separable; es decir, de la forma

$$M(x) + N(y)y' = 0$$

también es exacta.

## Solución

La ecuación es **exacta**. Al escribirla como

$$
M(x)\,dx + N(y)\,dy = 0,
$$

las derivadas parciales cruzadas son

$$
\frac{\partial M}{\partial y} = 0 = \frac{\partial N}{\partial x},
$$

de modo que se satisface el criterio de exactitud.

## Resolución

Se escribe la ecuación separable en la forma diferencial

$$
M(x)\,dx + N(y)\,dy = 0.
$$

En esta forma el coeficiente de $dx$ es $M(x)$, que depende solo de $x$, y el coeficiente de $dy$ es $N(y)$, que depende solo de $y$.

Una ecuación $M(x,y)\,dx + N(x,y)\,dy = 0$ es **exacta** si existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y), \qquad \frac{\partial F}{\partial y} = N(x,y).
$$

Si $M$ y $N$ son continuas con derivadas parciales continuas, el **criterio de exactitud** establece que la ecuación es exacta si y solo si

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}.
$$

En la ecuación separable el primer coeficiente no contiene $y$ y el segundo no contiene $x$. Por tanto,

$$
\frac{\partial M}{\partial y} = 0, \qquad \frac{\partial N}{\partial x} = 0.
$$

Ambas derivadas parciales son idénticamente nulas, luego coinciden:

$$
\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}.
$$

La condición de exactitud se cumple y la ecuación separable es **exacta**.

## Observaciones

La función potencial asociada es

$$
F(x,y) = \int M(x)\,dx + \int N(y)\,dy,
$$

cuyas curvas de nivel $F(x,y) = C$ coinciden con la solución general obtenida por **separación de variables**. Así, ambos puntos de vista son equivalentes en las ecuaciones separables.

La exactitud es una propiedad más amplia que la separabilidad: toda ecuación separable es exacta, pero no toda ecuación exacta es separable. En particular, una ecuación separable no necesita factor integrante, pues $\mu = 1$ ya la vuelve exacta.

El resultado supone que $M$ y $N$ son continuas con derivadas parciales continuas en la región considerada, que es la hipótesis del criterio de exactitud.
