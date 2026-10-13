---
title: "Boyce 2.8 Ejercicio 25"
exercise-id: boyce-c02-s08-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 25"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - seleccionar.metodo.factor-integrante
  - resolver.exacta
hidden-competencies:
  - clasificar.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
  - derivacion.producto
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s08i03-p103.png
---

## Enunciado

En los problemas 25 a 31, resuelva la ecuación diferencial dada. Si es posible, halle un factor integrante de la forma $\mu(x, y) = \mu(x)$ o $\mu(x, y) = \mu(y)$.

25. $(3x^2y + 2xy + y^3) \,dx + (x^2 + y^2) \,dy = 0$

## Solución

La ecuación no es **exacta**. Un **factor integrante** es

$$
\mu(x) = e^{3x},
$$

y la solución general, en forma implícita, es

$$
e^{3x}\left(x^2y + \frac{y^3}{3}\right) = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = 3x^2y + 2xy + y^3, \qquad N(x,y) = x^2 + y^2.
$$

El **test de exactitud** compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 3x^2 + 2x + 3y^2, \qquad \frac{\partial N}{\partial x} = 2x.
$$

Como $3x^2 + 2x + 3y^2 \ne 2x$, la ecuación no es exacta. Se busca entonces un factor integrante que dependa solo de $x$. La razón

$$
\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right)
= \frac{3x^2 + 3y^2}{x^2 + y^2} = 3
$$

depende únicamente de $x$, luego existe un factor integrante de la forma

$$
\mu(x) = \exp\!\left(\int 3\,dx\right) = e^{3x}.
$$

La razón alternativa $\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right)$ no depende solo de $y$, de modo que no hay factor de la forma $\mu(y)$.

Al multiplicar la ecuación por $\mu(x) = e^{3x}$ resulta

$$
e^{3x}\left(3x^2y + 2xy + y^3\right)dx + e^{3x}\left(x^2 + y^2\right)dy = 0,
$$

que es exacta, pues

$$
\begin{aligned}
\frac{\partial}{\partial y}\left[e^{3x}(3x^2y + 2xy + y^3)\right] &= e^{3x}(3x^2 + 2x + 3y^2), \\
\frac{\partial}{\partial x}\left[e^{3x}(x^2 + y^2)\right] &= e^{3x}(3x^2 + 3y^2 + 2x),
\end{aligned}
$$

y ambas expresiones coinciden.

Existe entonces una función $F(x,y)$ con

$$
\frac{\partial F}{\partial x} = e^{3x}(3x^2y + 2xy + y^3), \qquad
\frac{\partial F}{\partial y} = e^{3x}(x^2 + y^2).
$$

Se integra la segunda igualdad respecto de $y$, manteniendo $x$ constante:

$$
F(x,y) = \int e^{3x}(x^2 + y^2)\,dy = e^{3x}\left(x^2y + \frac{y^3}{3}\right) + h(x),
$$

donde $h(x)$ es la función arbitraria de integración. Se deriva respecto de $x$ y se iguala al coeficiente de $dx$:

$$
\frac{\partial F}{\partial x}
= 3e^{3x}\left(x^2y + \frac{y^3}{3}\right) + e^{3x}(2xy) + h'(x)
= e^{3x}(3x^2y + 2xy + y^3) + h'(x).
$$

La comparación da $h'(x) = 0$, de modo que $h$ es constante y se absorbe en $C$. La función potencial es

$$
F(x,y) = e^{3x}\left(x^2y + \frac{y^3}{3}\right),
$$

y la solución general se escribe, de forma implícita, como $F(x,y) = C$.

## Observaciones

El factor integrante no es único: cualquier múltiplo de $e^{3x}$ también lo es. En particular, la solución general equivale a

$$
e^{3x}\left(3x^2y + y^3\right) = C,
$$

que se obtiene al multiplicar $F$ por $3$.

La deducción del factor integrante divide por $N = x^2 + y^2$, que se anula en el origen. La forma diferencial ya multiplicada es exacta en todo $\mathbb{R}^2$ y su función potencial es suave, de modo que la familia implícita es válida en todo el plano.

La solución constante $y = 0$ está contenida en la familia con $C = 0$; no hay soluciones singulares que añadir.
