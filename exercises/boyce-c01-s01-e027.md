---
title: "Boyce 1.1 Ejercicio 27"
exercise-id: boyce-c01-s01-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 27"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - derivacion.regla-cadena
  - derivacion.cociente
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 27 a 32, verifique que la función o funciones dadas son una solución de la ecuación diferencial parcial correspondiente.

27. $u_{xx} + u_{yy} = 0; \quad u_1(x, y) = \cos x \cosh y, \quad u_2(x, y) = \ln(x^2 + y^2)$

## Solución

Ambas funciones son **solución** de la ecuación $u_{xx}+u_{yy}=0$.

Para $u_1(x,y)=\cos x\cosh y$:

$$
u_{1xx}+u_{1yy}=-\cos x\cosh y+\cos x\cosh y=0.
$$

Para $u_2(x,y)=\ln(x^2+y^2)$, con $(x,y)\ne(0,0)$:

$$
u_{2xx}+u_{2yy}=\frac{2(y^2-x^2)}{(x^2+y^2)^2}+\frac{2(x^2-y^2)}{(x^2+y^2)^2}=0.
$$

## Resolución

La verificación se hace por **sustitución directa**: se calculan las derivadas parciales de segundo orden y se reemplazan en la ecuación.

Para $u_1(x,y)=\cos x\cosh y$ las derivadas parciales son

$$
\begin{aligned}
u_{1x} &= -\sin x\cosh y, & u_{1xx} &= -\cos x\cosh y, \\
u_{1y} &= \cos x\sinh y, & u_{1yy} &= \cos x\cosh y.
\end{aligned}
$$

Al sustituir en la ecuación se obtiene

$$
u_{1xx}+u_{1yy}=-\cos x\cosh y+\cos x\cosh y=0.
$$

Por tanto, $u_1$ es solución de $u_{xx}+u_{yy}=0$ en todo $\mathbb{R}^2$.

Para $u_2(x,y)=\ln(x^2+y^2)$, definida para $(x,y)\ne(0,0)$, las derivadas parciales son

$$
\begin{aligned}
u_{2x} &= \frac{2x}{x^2+y^2}, &
u_{2xx} &= \frac{2(x^2+y^2)-4x^2}{(x^2+y^2)^2}=\frac{2(y^2-x^2)}{(x^2+y^2)^2}, \\
u_{2y} &= \frac{2y}{x^2+y^2}, &
u_{2yy} &= \frac{2(x^2+y^2)-4y^2}{(x^2+y^2)^2}=\frac{2(x^2-y^2)}{(x^2+y^2)^2}.
\end{aligned}
$$

Al sustituir:

$$
u_{2xx}+u_{2yy}=\frac{2(y^2-x^2)+2(x^2-y^2)}{(x^2+y^2)^2}=0.
$$

Por tanto, $u_2$ también es solución de $u_{xx}+u_{yy}=0$ para todo $(x,y)\ne(0,0)$.

## Observaciones

La ecuación $u_{xx}+u_{yy}=0$ es la **ecuación de Laplace**; sus soluciones se denominan funciones **armónicas**. La función $u_2(x,y)=\ln(x^2+y^2)$ es armónica en todo el plano salvo en el origen, donde no está definida. El ejercicio solo pide verificar, no resolver la ecuación.
