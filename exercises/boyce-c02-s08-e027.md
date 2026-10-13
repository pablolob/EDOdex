---
title: "Boyce 2.8 Ejercicio 27"
exercise-id: boyce-c02-s08-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 27"
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
  - integracion.por-partes
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s08i03-p103.png
---

## Enunciado

En los problemas 25 a 31, resuelva la ecuación diferencial dada. Si es posible, halle un factor integrante de la forma $\mu(x, y) = \mu(x)$ o $\mu(x, y) = \mu(y)$.

27. $\,dx + \left(\frac{x}{y} - \sin y\right) \,dy = 0$

## Solución

La ecuación no es exacta y admite el **factor integrante** $\mu(y) = y$. Su solución general, en forma implícita, es

$$
xy + y\cos y - \sin y = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$, con

$$
M(x,y) = 1, \qquad N(x,y) = \frac{x}{y} - \sin y.
$$

Se aplica la **prueba de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial y} = 0, \qquad \frac{\partial N}{\partial x} = \frac{1}{y}.
$$

Las derivadas no coinciden, de modo que la ecuación no es exacta y se busca un factor integrante de una sola variable. Cuando el cociente

$$
\frac{N_x - M_y}{M} = \frac{1/y}{1} = \frac{1}{y}
$$

depende solo de $y$, existe un factor integrante $\mu(y)$ que satisface

$$
\frac{\mu'(y)}{\mu(y)} = \frac{N_x - M_y}{M} = \frac{1}{y}.
$$

Al integrar, $\ln|\mu| = \ln|y|$, es decir, $\mu(y) = |y|$. Como cualquier múltiplo constante distinto de cero también es un factor integrante, se toma $\mu(y) = y$ (el signo se absorbe en la constante de la solución).

Se multiplica la ecuación por $\mu(y) = y$:

$$
y\,dx + (x - y\sin y)\,dy = 0,
$$

con $M_1 = y$ y $N_1 = x - y\sin y$. La nueva ecuación es exacta, porque

$$
\frac{\partial M_1}{\partial y} = 1 = \frac{\partial N_1}{\partial x}.
$$

Existe entonces una **función potencial** $F(x,y)$ tal que

$$
\frac{\partial F}{\partial x} = y, \qquad \frac{\partial F}{\partial y} = x - y\sin y.
$$

Se integra la primera igualdad respecto de $x$, manteniendo $y$ constante:

$$
F(x,y) = \int y\,dx = xy + g(y).
$$

Se deriva respecto de $y$ y se iguala a $N_1$:

$$
\frac{\partial F}{\partial y} = x + g'(y) = x - y\sin y
\quad\Longrightarrow\quad
g'(y) = -y\sin y.
$$

La integral se calcula por partes con $u = y$ y $dv = \sin y\,dy$:

$$
g(y) = -\int y\sin y\,dy = -(-y\cos y + \sin y) = y\cos y - \sin y.
$$

La función potencial es

$$
F(x,y) = xy + y\cos y - \sin y,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como $F(x,y) = C$:

$$
xy + y\cos y - \sin y = C.
$$

La ecuación original no está definida en $y = 0$, por lo que la solución se considera en los intervalos $y > 0$ o $y < 0$.

## Observaciones

La solución se comprueba por derivación implícita de $xy + y\cos y - \sin y = C$:

$$
y + x\,y' + (\cos y - y\sin y)\,y' - \cos y\,y' = y + (x - y\sin y)\,y' = 0,
$$

que equivale a $y\,dx + (x - y\sin y)\,dy = 0$, la ecuación multiplicada por el factor integrante.

El factor integrante se determina salvo un factor constante: $\mu(y) = |y|$ cambia de signo al cruzar $y = 0$, pero ese punto queda excluido del dominio. En $y > 0$ o $y < 0$ puede tomarse $\mu(y) = y$ sin pérdida de generalidad.

### Método alternativo: ecuación lineal en $x(y)$

La ecuación también es lineal en la variable $x$ como función de $y$. Dividiendo entre $dy$ y despejando $\dfrac{dx}{dy}$,

$$
\frac{dx}{dy} + \frac{1}{y}x = \sin y,
$$

con **factor integrante** $\mu(y) = \exp\!\left(\int \frac{1}{y}\,dy\right) = y$. Entonces $\dfrac{d}{dy}(xy) = y\sin y$, y al integrar por partes se obtiene $xy = -y\cos y + \sin y + C$, equivalente a la solución anterior.
