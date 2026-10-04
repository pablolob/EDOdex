---
title: "Boyce 2.8 Ejercicio 21"
exercise-id: boyce-c02-s08-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - resolver-analiticamente.ecuaciones-exactas
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - derivacion.producto
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s08i02-p102.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 19 a 22 no son exactas, aunque se transforman en exactas si se multiplican por el factor integrante dado. En seguida, resuelva las ecuaciones.

21. $y \,dx + (2x - ye^y) \,dy = 0; \quad \mu(x, y) = y$

## Solución

La ecuación **no es exacta**, pues $\partial M/\partial y = 1$ mientras que $\partial N/\partial x = 2$. Al multiplicarla por el **factor integrante** $\mu(x,y) = y$ se vuelve **exacta**: los nuevos coeficientes tienen derivadas cruzadas iguales a $2y$. La solución general implícita es

$$
x y^2 - e^y\left(y^2 - 2y + 2\right) = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ con

$$
M(x,y) = y, \qquad N(x,y) = 2x - ye^y.
$$

Se aplica la **prueba de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 1, \qquad \frac{\partial N}{\partial x} = 2.
$$

Como $1 \ne 2$, la ecuación no es **exacta**.

Se multiplica la ecuación por el **factor integrante** dado $\mu(x,y) = y$. Los coeficientes de la ecuación transformada son

$$
M_1(x,y) = y^2, \qquad N_1(x,y) = y\left(2x - ye^y\right) = 2xy - y^2e^y.
$$

Se repite la prueba sobre ellos:

$$
\frac{\partial M_1}{\partial y} = 2y, \qquad \frac{\partial N_1}{\partial x} = 2y.
$$

Las derivadas cruzadas coinciden, de modo que la ecuación multiplicada es **exacta**. Existe entonces una **función potencial** $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = y^2, \qquad \frac{\partial F}{\partial y} = 2xy - y^2e^y.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int y^2\,dx = x y^2 + g(y),
$$

donde $g(y)$ es la función arbitraria de integración. Se deriva este resultado respecto de $y$ y se iguala a $N_1(x,y)$:

$$
\frac{\partial F}{\partial y} = 2xy + g'(y) = 2xy - y^2e^y,
$$

de donde $g'(y) = -y^2e^y$. La **integración por partes** aplicada dos veces da

$$
\int y^2e^y\,dy = e^y\left(y^2 - 2y + 2\right),
$$

por lo que

$$
g(y) = -e^y\left(y^2 - 2y + 2\right),
$$

y la constante de integración se absorbe en la constante de la solución. La función potencial es

$$
F(x,y) = x y^2 - e^y\left(y^2 - 2y + 2\right).
$$

La solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$:

$$
x y^2 - e^y\left(y^2 - 2y + 2\right) = C.
$$

## Observaciones

La función potencial $F$ es de clase $C^\infty$ en todo $\mathbb{R}^2$, de modo que la familia implícita no queda restringida por el dominio. El factor integrante depende solo de $y$, que es uno de los casos reductores estudiados.

La multiplicación por $\mu = y$ podría alterar las soluciones en $y = 0$. La función constante $y = 0$ satisface la ecuación original y corresponde a $C = -2$ dentro de la familia obtenida, por lo que no se pierde ninguna solución.

### Método alternativo: integrar primero respecto de $y$

También puede partirse de $\partial F/\partial y = 2xy - y^2e^y$. La integración respecto de $y$ da

$$
F(x,y) = xy^2 - e^y\left(y^2 - 2y + 2\right) + h(x).
$$

Al derivar respecto de $x$ e igualar a $M_1(x,y) = y^2$ se obtiene $h'(x) = 0$, y se recupera la misma familia implícita.
