---
title: "Boyce 2.3 Ejercicio 7"
exercise-id: boyce-c02-s03-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - verificar.soluciones-singulares
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s03i02-p053.png
---

## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada.

7. $\frac{dy}{dx} = \frac{x - e^{-x}}{y + e^y}$

## Solución

La ecuación es **separable**; su solución general, en forma implícita, es

$$
\frac{y^2}{2} - \frac{x^2}{2} + e^y - e^{-x} = C.
$$

No hay soluciones constantes perdidas en la separación.

## Resolución

Se separan las variables:

$$
(y + e^y)\,dy = (x - e^{-x})\,dx.
$$

La separación supone $y + e^y \neq 0$. La función $y + e^y$ es estrictamente creciente, pues su derivada es $1 + e^y > 0$, de modo que se anula en un único valor real. En ese valor la ecuación original no está definida y, como $x - e^{-x}$ no es idénticamente nulo, no proporciona una solución constante.

Se integra cada miembro:

$$
\int (y + e^y)\,dy = \int (x - e^{-x})\,dx,
$$

de donde

$$
\frac{y^2}{2} + e^y = \frac{x^2}{2} + e^{-x} + C_1.
$$

Al reunir las constantes en un miembro se obtiene la solución general implícita:

$$
\frac{y^2}{2} - \frac{x^2}{2} + e^y - e^{-x} = C.
$$

La solución se comprueba por derivación implícita. Derivando la expresión anterior respecto de $x$,

$$
y\,y' + e^y\,y' - x + e^{-x} = 0,
$$

es decir, $(y + e^y)\,y' = x - e^{-x}$, y por tanto

$$
y' = \frac{x - e^{-x}}{y + e^y},
$$

que coincide con la ecuación dada.

## Observaciones

La ecuación es trascendente en $y$ y no admite un despeje explícito sencillo, por lo que la respuesta se presenta en forma implícita. Cada solución particular está definida en el intervalo que contiene a su condición inicial y en el que $y(x) + e^{y(x)} \neq 0$; ese intervalo depende de la constante $C$.
