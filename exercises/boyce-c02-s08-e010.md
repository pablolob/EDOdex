---
title: "Boyce 2.8 Ejercicio 10"
exercise-id: boyce-c02-s08-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - resolver.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s08i02-p102.png
---

## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

10. $(y/x + 6x) \,dx + (\ln x - 2) \,dy = 0, \quad x > 0$

## Solución

La ecuación es **exacta** y su solución general implícita es

$$
y(\ln x - 2) + 3x^2 = C.
$$

## Resolución

Se identifica la ecuación con la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, de modo que

$$
M(x,y) = \frac{y}{x} + 6x, \qquad N(x,y) = \ln x - 2.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas. Para $x > 0$,

$$
\frac{\partial M}{\partial y} = \frac{1}{x}, \qquad \frac{\partial N}{\partial x} = \frac{1}{x}.
$$

Las dos derivadas coinciden. Por tanto, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y) = \frac{y}{x} + 6x, \qquad \frac{\partial F}{\partial y} = N(x,y) = \ln x - 2.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int \left(\frac{y}{x} + 6x\right)\,dx = y \ln x + 3x^2 + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = \ln x + g'(y) = \ln x - 2,
$$

de donde $g'(y) = -2$. Al integrar,

$$
g(y) = -2y.
$$

La función potencial es

$$
F(x,y) = y \ln x + 3x^2 - 2y,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$, esto es,

$$
y(\ln x - 2) + 3x^2 = C.
$$

## Observaciones

El factor $\ln x$ exige $x > 0$, como indica el enunciado. La familia implícita está definida en la región $x > 0$ sin otras restricciones.

Si se despeja $y$,

$$
y = \frac{C - 3x^2}{\ln x - 2},
$$

la solución explícita es válida en $x > 0$ salvo en $x = e^2$, donde $\ln x - 2 = 0$. Los intervalos de validez son, por tanto, $(0, e^2)$ y $(e^2, \infty)$, cada uno con su propia constante $C$.

No se pierde ninguna solución singular: la integración conserva la función arbitraria $g(y)$ completa y no se anula ningún factor de $y$.
