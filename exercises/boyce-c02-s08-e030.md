---
title: "Boyce 2.8 Ejercicio 30"
exercise-id: boyce-c02-s08-e030
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 30"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - seleccionar.metodo.factor-integrante
  - resolver.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s08i03-p103.png
---

## Enunciado

En los problemas 25 a 31, resuelva la ecuación diferencial dada. Si es posible, halle un factor integrante de la forma $\mu(x, y) = \mu(x)$ o $\mu(x, y) = \mu(y)$.

30. $\left[4\frac{x^3}{y^2} + \frac{3}{y}\right] \,dx + \left[3\frac{x}{y^2} + 4y\right] \,dy = 0$

## Solución

La ecuación no es **exacta** y admite el **factor integrante** $\mu(y) = y^2$. Su solución general, en forma implícita, es

$$
x^4 + 3xy + y^4 = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = \frac{4x^3}{y^2} + \frac{3}{y}, \qquad N(x,y) = \frac{3x}{y^2} + 4y.
$$

Se aplica la **prueba de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = -\frac{8x^3}{y^3} - \frac{3}{y^2}, \qquad
\frac{\partial N}{\partial x} = \frac{3}{y^2}.
$$

Las derivadas no coinciden, de modo que la ecuación no es exacta y se busca un factor integrante de una sola variable.

Para un factor $\mu(x)$ se examina el cociente $(M_y - N_x)/N$:

$$
\frac{M_y - N_x}{N}
= \frac{-\frac{8x^3}{y^3} - \frac{6}{y^2}}{\frac{3x}{y^2} + 4y}
= \frac{-8x^3 - 6y}{y\left(3x + 4y^3\right)},
$$

que depende también de $x$, así que no existe un factor de la forma $\mu(x)$. Para un factor $\mu(y)$ se examina el cociente $(N_x - M_y)/M$:

$$
\frac{N_x - M_y}{M}
= \frac{\frac{3}{y^2} + \frac{8x^3}{y^3} + \frac{3}{y^2}}{\frac{4x^3}{y^2} + \frac{3}{y}}
= \frac{\frac{8x^3 + 6y}{y^3}}{\frac{4x^3 + 3y}{y^2}}
= \frac{2}{y},
$$

que depende solo de $y$. Existe entonces un **factor integrante** $\mu(y)$ que satisface

$$
\frac{\mu'(y)}{\mu(y)} = \frac{N_x - M_y}{M} = \frac{2}{y}.
$$

Al integrar, $\ln|\mu| = 2\ln|y|$, es decir, $\mu(y) = y^2$.

Se multiplica la ecuación por $\mu(y) = y^2$:

$$
\left(4x^3 + 3y\right)dx + \left(3x + 4y^3\right)dy = 0,
$$

que es exacta, pues

$$
\frac{\partial}{\partial y}\left(4x^3 + 3y\right) = 3
= \frac{\partial}{\partial x}\left(3x + 4y^3\right).
$$

Existe entonces una **función potencial** $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = 4x^3 + 3y, \qquad \frac{\partial F}{\partial y} = 3x + 4y^3.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int \left(4x^3 + 3y\right)dx = x^4 + 3xy + g(y).
$$

Se deriva respecto de $y$ y se iguala a $3x + 4y^3$:

$$
\frac{\partial F}{\partial y} = 3x + g'(y) = 3x + 4y^3
\quad\Longrightarrow\quad
g'(y) = 4y^3.
$$

Al integrar, $g(y) = y^4$. La función potencial es

$$
F(x,y) = x^4 + 3xy + y^4,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

La ecuación original contiene los términos $x^3/y^2$, $1/y$ y $x/y^2$, de modo que no está definida en $y = 0$. La solución se considera en las regiones $y > 0$ o $y < 0$.

## Observaciones

La solución se comprueba por derivación implícita de $x^4 + 3xy + y^4 = C$:

$$
4x^3 + 3y + \left(3x + 4y^3\right)y' = 0
\quad\Longrightarrow\quad
y' = -\frac{4x^3 + 3y}{3x + 4y^3}.
$$

El miembro derecho coincide con $-M/N$, que es la ecuación original despejada, pues al multiplicar numerador y denominador de $-M/N$ por $y^2$ resulta $-\dfrac{4x^3 + 3y}{3x + 4y^3}$.

El factor integrante se determina salvo un factor constante no nulo; se elige la primitiva sin constante. Multiplicar por $\mu(y) = y^2$ no introduce ni elimina soluciones en el dominio de la ecuación original, que excluye $y = 0$.

La función potencial $x^4 + 3xy + y^4$ es simétrica en $x$ y $y$; esta simetría no es casual, ya que la ecuación original también es invariante al intercambiar $x$ con $y$ y $M$ con $N$.
