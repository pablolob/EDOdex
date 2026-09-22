---
title: "Boyce 1.1 Ejercicio 31"
exercise-id: boyce-c01-s01-e031
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 31"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - derivacion.regla-cadena
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 27 a 32, verifique que la función o funciones dadas son una solución de la ecuación diferencial parcial correspondiente.

31. $\alpha^2 u_{xx} = u_t; \quad u = (\pi / t)^{1/2} e^{-x^2 / 4\alpha^2 t}, \quad t > 0$

## Solución

La función dada es solución de la ecuación para $t>0$. En efecto,

$$
\alpha^2 u_{xx} = u_t = \left(\frac{x^2}{4\alpha^2 t^2} - \frac{1}{2t}\right) u .
$$

## Resolución

Para $t>0$ la función está bien definida. Se deriva primero respecto de $x$. Con la regla de la cadena,

$$
u_x = \left(\frac{\pi}{t}\right)^{1/2} e^{-x^2/(4\alpha^2 t)} \left(-\frac{x}{2\alpha^2 t}\right)
= -\frac{x}{2\alpha^2 t}\, u .
$$

Se deriva una segunda vez con la regla del producto,

$$
\begin{aligned}
u_{xx} &= -\frac{1}{2\alpha^2 t}\, u - \frac{x}{2\alpha^2 t}\, u_x \\
&= -\frac{1}{2\alpha^2 t}\, u + \frac{x^2}{4\alpha^4 t^2}\, u .
\end{aligned}
$$

Por tanto,

$$
\alpha^2 u_{xx} = \left(\frac{x^2}{4\alpha^2 t^2} - \frac{1}{2t}\right) u .
$$

Para la derivada temporal se usa la derivación logarítmica, válida porque $u>0$ para $t>0$:

$$
\ln u = \frac{1}{2}\ln\frac{\pi}{t} - \frac{x^2}{4\alpha^2 t} .
$$

Derivando respecto de $t$,

$$
\frac{u_t}{u} = -\frac{1}{2t} + \frac{x^2}{4\alpha^2 t^2},
$$

de donde

$$
u_t = \left(\frac{x^2}{4\alpha^2 t^2} - \frac{1}{2t}\right) u .
$$

Ambos miembros coinciden; por tanto $\alpha^2 u_{xx} = u_t$ para todo $t>0$, y la función dada es solución de la ecuación.

## Observaciones

La ecuación $\alpha^2 u_{xx} = u_t$ es la **ecuación del calor**; $\alpha^2$ representa la difusividad térmica. La función verificada es un múltiplo constante de la solución fundamental de esta ecuación. La restricción $t>0$ es esencial: la expresión no está definida en $t=0$, y el exponente exige además $\alpha \neq 0$.
