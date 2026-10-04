---
title: "Boyce 2.8 Ejercicio 12"
exercise-id: boyce-c02-s08-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 12"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - resolver-analiticamente.ecuaciones-exactas
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s08i02-p102.png
---

## Enunciado

Determine si cada una de las ecuaciones de los problemas 1 a 12 es exacta. En caso de serlo, halle la solución.

12. $$\frac{x \,dx}{(x^2 + y^2)^{3/2}} + \frac{y \,dy}{(x^2 + y^2)^{3/2}} = 0$$

## Solución

La ecuación es **exacta** y su solución general implícita es

$$
-\frac{1}{\sqrt{x^2+y^2}} = C,
$$

o, de forma equivalente, $x^2 + y^2 = C_1$ con $C_1 > 0$.

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ y se identifican los coeficientes:

$$
M(x,y) = \frac{x}{(x^2+y^2)^{3/2}}, \qquad N(x,y) = \frac{y}{(x^2+y^2)^{3/2}}.
$$

Ambos están definidos en $\mathbb{R}^2 \setminus \{(0,0)\}$.

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = -\frac{3xy}{(x^2+y^2)^{5/2}}, \qquad \frac{\partial N}{\partial x} = -\frac{3xy}{(x^2+y^2)^{5/2}}.
$$

Las dos derivadas coinciden. Por tanto, la ecuación es **exacta** y existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = M(x,y), \qquad \frac{\partial F}{\partial y} = N(x,y).
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante. Con la sustitución $u = x^2 + y^2$, $du = 2x\,dx$, resulta

$$
F(x,y) = \int \frac{x}{(x^2+y^2)^{3/2}}\,dx = -\frac{1}{\sqrt{x^2+y^2}} + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N(x,y)$:

$$
\frac{\partial F}{\partial y} = \frac{y}{(x^2+y^2)^{3/2}} + g'(y) = \frac{y}{(x^2+y^2)^{3/2}}.
$$

Los términos en $y$ se cancelan, de modo que $g'(y) = 0$ y $g$ es una constante. La función potencial es

$$
F(x,y) = -\frac{1}{\sqrt{x^2+y^2}},
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

## Observaciones

La familia $x^2 + y^2 = C_1$, con $C_1 > 0$, está formada por circunferencias centradas en el origen. Cada circunferencia es una curva solución cerrada; una rama explícita $y(x) = \pm\sqrt{C_1 - x^2}$ está definida en $|x| < \sqrt{C_1}$. El origen queda excluido porque la forma diferencial no está definida allí.

No hay soluciones singulares ni perdidas: todo punto de $\mathbb{R}^2 \setminus \{(0,0)\}$ pertenece a una única circunferencia de la familia, de modo que $F(x,y) = C$ agota las soluciones.
