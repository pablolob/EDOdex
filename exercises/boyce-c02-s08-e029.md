---
title: "Boyce 2.8 Ejercicio 29"
exercise-id: boyce-c02-s08-e029
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 29"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - seleccionar-metodo.factor-integrante
  - resolver-analiticamente.ecuaciones-exactas
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

29. $e^x \,dx + (e^x \cot y + 2 \csc y) \,dy = 0$

## Solución

La ecuación no es exacta; admite el **factor integrante** $\mu(y) = \sin y$. Su solución general, en forma implícita, es

$$
e^x \sin y + 2y = C.
$$

## Resolución

La ecuación ya está escrita en la forma diferencial $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = e^x, \qquad N(x,y) = e^x \cot y + 2 \csc y.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 0, \qquad \frac{\partial N}{\partial x} = e^x \cot y.
$$

Ambas expresiones no coinciden; la ecuación no es exacta.

Se busca un **factor integrante** que dependa de una sola variable. Para $\mu(x)$ el cociente relevante es

$$
\frac{M_y - N_x}{N} = \frac{-e^x \cot y}{e^x \cot y + 2 \csc y}
= \frac{-e^x \cos y}{e^x \cos y + 2},
$$

que depende de $x$ y de $y$; no conduce a un factor integrante solo de $x$. Para $\mu(y)$ el cociente es

$$
\frac{N_x - M_y}{M} = \frac{e^x \cot y}{e^x} = \cot y,
$$

que depende solo de $y$. Por tanto, el factor integrante es

$$
\mu(y) = \exp\!\left(\int \cot y \, dy\right)
= \exp\!\left(\ln|\sin y|\right)
= \sin y,
$$

donde se toma la rama positiva del valor absoluto.

Al multiplicar la ecuación por $\mu(y) = \sin y$ (válido donde la ecuación original está definida, es decir, $\sin y \neq 0$),

$$
e^x \sin y \,dx + \left(e^x \cos y + 2\right) dy = 0.
$$

Se comprueba la exactitud de la nueva forma:

$$
\frac{\partial}{\partial y}\left(e^x \sin y\right) = e^x \cos y, \qquad
\frac{\partial}{\partial x}\left(e^x \cos y + 2\right) = e^x \cos y.
$$

Al coincidir, existe una función $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = e^x \sin y, \qquad
\frac{\partial F}{\partial y} = e^x \cos y + 2.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int e^x \sin y \,dx = e^x \sin y + g(y),
$$

donde $g(y)$ es la función arbitraria de integración.

Se deriva este resultado respecto de $y$ y se iguala a $N$:

$$
\frac{\partial F}{\partial y} = e^x \cos y + g'(y) = e^x \cos y + 2,
$$

de donde $g'(y) = 2$ y, al integrar,

$$
g(y) = 2y.
$$

La función potencial es

$$
F(x,y) = e^x \sin y + 2y,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$.

## Observaciones

La solución general $e^x \sin y + 2y = C$ no admite un despeje elemental de $y$. Cada curva solución queda contenida en una banda $n\pi < y < (n+1)\pi$, donde $\sin y$ no se anula y la ecuación original está definida.

El factor integrante $\mu(y) = \sin y$ se anula en $y = n\pi$, pero allí $\cot y$ y $\csc y$ ya eran discontinuas, de modo que no se pierden soluciones de la ecuación original.
