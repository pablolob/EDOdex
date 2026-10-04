---
title: "Boyce 2.8 Ejercicio 19"
exercise-id: boyce-c02-s08-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - resolver-analiticamente.ecuaciones-exactas
hidden-competencies:
  - verificar.soluciones-singulares
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

Demuestre que las ecuaciones de los problemas 19 a 22 no son exactas, aunque se transforman en exactas si se multiplican por el factor integrante dado. En seguida, resuelva las ecuaciones.

19. $x^2y^3 + x(1 + y^2)y' = 0; \quad \mu(x, y) = 1/xy^3$

## Solución

La ecuación no es **exacta**: con $M = x^2y^3$ y $N = x(1+y^2)$ se tiene $M_y = 3x^2y^2$ y $N_x = 1+y^2$, que no coinciden. Al multiplicarla por $\mu = 1/(xy^3)$ se transforma en la ecuación exacta $x\,dx + \left(y^{-3}+y^{-1}\right)dy = 0$, cuya solución general implícita es

$$
\frac{x^2}{2} - \frac{1}{2y^2} + \ln|y| = C,
$$

o, equivalentemente,

$$
x^2 - \frac{1}{y^2} + 2\ln|y| = C, \qquad y \ne 0.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = x^2y^3, \qquad N(x,y) = x(1+y^2).
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 3x^2y^2, \qquad \frac{\partial N}{\partial x} = 1+y^2.
$$

Las expresiones no son idénticamente iguales, ya que $3x^2y^2 \ne 1+y^2$ en general. Por tanto, la ecuación original no es **exacta**.

Se multiplica la ecuación por el factor integrante dado, $\mu(x,y) = \dfrac{1}{xy^3}$:

$$
M^*(x,y) = \frac{x^2y^3}{xy^3} = x, \qquad
N^*(x,y) = \frac{x(1+y^2)}{xy^3} = \frac{1+y^2}{y^3} = y^{-3}+y^{-1}.
$$

Este factor está definido para $x \ne 0$ y $y \ne 0$. Para la ecuación transformada las derivadas cruzadas son

$$
\frac{\partial M^*}{\partial y} = 0, \qquad \frac{\partial N^*}{\partial x} = 0,
$$

de modo que coinciden y la ecuación

$$
x\,dx + \left(y^{-3}+y^{-1}\right)dy = 0
$$

es **exacta**. Existe entonces una función potencial $F(x,y)$ con

$$
\frac{\partial F}{\partial x} = x, \qquad \frac{\partial F}{\partial y} = y^{-3}+y^{-1}.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int x\,dx = \frac{x^2}{2} + g(y),
$$

donde $g(y)$ es la función arbitraria de integración. Se deriva respecto de $y$ y se iguala a $N^*(x,y)$:

$$
\frac{\partial F}{\partial y} = g'(y) = y^{-3}+y^{-1}.
$$

Al integrar,

$$
g(y) = \int \left(y^{-3}+y^{-1}\right)dy = -\frac{1}{2y^2} + \ln|y|.
$$

La función potencial es

$$
F(x,y) = \frac{x^2}{2} - \frac{1}{2y^2} + \ln|y|,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$. Multiplicando por $2$ y renombrando la constante arbitraria,

$$
x^2 - \frac{1}{y^2} + 2\ln|y| = C, \qquad y \ne 0.
$$

La solución se comprueba por derivación implícita: al diferenciar $F(x,y) = C$ se obtiene $x\,dx + \left(y^{-3}+y^{-1}\right)dy = 0$, que multiplicada por $xy^3$ devuelve la ecuación original.

## Observaciones

La ecuación original admite la solución constante $y \equiv 0$, ya que $x^2 \cdot 0 + x(1+0)\cdot 0 = 0$. Al multiplicar por $\mu = 1/(xy^3)$ se divide entre $y^3$, de modo que esa solución se pierde en la familia implícita y debe añadirse a la solución general.

El factor integrante dado depende de $x$ y de $y$ a la vez, por lo que no pertenece a los casos reductores de una sola variable que suelen deducirse en esta sección; aquí se proporciona ya construido.

### Método alternativo: separación de variables

Despejando la derivada en la ecuación original queda

$$
y' = -\frac{x^2y^3}{x(1+y^2)} = -\frac{x\,y^3}{1+y^2}, \qquad x \ne 0,
$$

que es separable. Separando e integrando,

$$
\int \frac{1+y^2}{y^3}\,dy = -\int x\,dx
\quad\Longrightarrow\quad
-\frac{1}{2y^2} + \ln|y| = -\frac{x^2}{2} + C_1,
$$

que conduce a la misma familia implícita. Este camino no aborda la demostración de no exactitud ni el papel del factor integrante, que son parte de lo pedido.
