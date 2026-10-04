---
title: "Boyce 2.8 Ejercicio 24"
exercise-id: boyce-c02-s08-e024
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 24"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.ecuaciones-exactas
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - derivacion.regla-cadena
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s08i02-p102.png
  - c02s08i03-p103.png
---

## Enunciado

Demuestre que si $(N_x - M_y)/(xM - yN) = R$, en donde $R$ depende solamente de la cantidad $xy$, entonces la ecuación diferencial

$$M + Ny' = 0$$

tiene un factor integrante de la forma $\mu(xy)$. Encuentre una fórmula general para este factor integrante.

## Solución

El factor integrante buscado es

$$
\mu(xy) = \exp\!\left(\int R(xy)\,d(xy)\right),
$$

donde la integración se efectúa respecto de la variable $z = xy$.

## Resolución

Se escriben $M_y = \partial M/\partial y$ y $N_x = \partial N/\partial x$. La ecuación $M + Ny' = 0$ equivale a la forma diferencial

$$
M(x,y)\,dx + N(x,y)\,dy = 0.
$$

Se busca un **factor integrante** que dependa solo del producto $z = xy$, es decir, $\mu = \mu(z)$. Al multiplicar la ecuación por $\mu(z)$ se obtiene

$$
\mu(z)M(x,y)\,dx + \mu(z)N(x,y)\,dy = 0.
$$

Esta ecuación es **exacta** si sus derivadas parciales cruzadas coinciden:

$$
\frac{\partial}{\partial y}\bigl[\mu(z)M\bigr] = \frac{\partial}{\partial x}\bigl[\mu(z)N\bigr].
$$

Como $z = xy$, la regla de la cadena da $\partial z/\partial x = y$ y $\partial z/\partial y = x$, de modo que

$$
\frac{\partial \mu}{\partial x} = y\,\mu'(z), \qquad
\frac{\partial \mu}{\partial y} = x\,\mu'(z).
$$

Con la regla del producto,

$$
\frac{\partial}{\partial y}\bigl[\mu M\bigr] = x\,\mu'(z)M + \mu(z)M_y, \qquad
\frac{\partial}{\partial x}\bigl[\mu N\bigr] = y\,\mu'(z)N + \mu(z)N_x.
$$

La condición de exactitud exige

$$
x\,\mu'(z)M + \mu(z)M_y = y\,\mu'(z)N + \mu(z)N_x.
$$

Al agrupar los términos con $\mu'$ y pasar $\mu M_y$ al otro miembro,

$$
\mu'(z)\bigl(xM - yN\bigr) = \mu(z)\bigl(N_x - M_y\bigr).
$$

La hipótesis define el cociente $(N_x - M_y)/(xM - yN) = R$; se supone $xM - yN \ne 0$ en la región considerada. Se divide entonces por $\mu(z)(xM - yN)$:

$$
\frac{\mu'(z)}{\mu(z)} = \frac{N_x - M_y}{xM - yN} = R(z).
$$

Como $R$ depende solo de $z = xy$, el miembro derecho es una función solo de $z$, y esta es una ecuación diferencial **separable** para $\mu$. Al integrar respecto de $z$,

$$
\ln\mu(z) = \int R(z)\,dz,
$$

y por tanto

$$
\mu(xy) = \exp\!\left(\int R(xy)\,d(xy)\right).
$$

Con este factor se satisface la condición de exactitud, de modo que $\mu M + \mu N y' = 0$ es exacta. Queda demostrado que $M + Ny' = 0$ admite un factor integrante de la forma $\mu(xy)$, y la fórmula general es la obtenida.

## Observaciones

La constante de integración de $\int R(z)\,dz$ solo multiplica a $\mu$ por una constante. Todo múltiplo constante no nulo de un factor integrante vuelve a ser un factor integrante, por lo que se elige la primitiva sin constante.

La fórmula contiene los casos de una sola variable como situaciones particulares: si $R$ resulta depender solo de $x$ o solo de $y$, la misma construcción produce $\mu(x)$ o $\mu(y)$.

La demostración presupone $xM - yN \ne 0$ en la región considerada y la continuidad de $M$, $N$ y sus derivadas parciales, requisitos para aplicar el criterio de exactitud y para que el cociente $R$ esté definido.
