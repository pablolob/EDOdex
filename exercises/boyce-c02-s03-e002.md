---
title: "Boyce 2.3 Ejercicio 2"
exercise-id: boyce-c02-s03-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s03i01-p052.png
---

## Enunciado

En cada uno de los problemas 1 a 8, resuelva la ecuación diferencial dada.

$$y' = \frac{x^2}{y(1 + x^3)}$$

## Solución

La ecuación es **separable**. Su solución general, en forma implícita, es

$$
y^2 = \frac{2}{3}\ln|1+x^3| + C.
$$

Al despejar $y$ resultan dos ramas,

$$
y(x) = \pm\sqrt{\frac{2}{3}\ln|1+x^3| + C}.
$$

## Resolución

La ecuación se escribe como $y' = \dfrac{x^2}{1+x^3}\cdot\dfrac{1}{y}$. Al separar variables,

$$
y\,dy = \frac{x^2}{1+x^3}\,dx.
$$

Se integran ambos miembros. En el miembro derecho se emplea la sustitución $u = 1+x^3$, con $du = 3x^2\,dx$:

$$
\int y\,dy = \frac{y^2}{2}, \qquad \int \frac{x^2}{1+x^3}\,dx = \frac{1}{3}\int \frac{du}{u} = \frac{1}{3}\ln|u| = \frac{1}{3}\ln|1+x^3|.
$$

Por tanto,

$$
\frac{y^2}{2} = \frac{1}{3}\ln|1+x^3| + C_1,
$$

que, redefiniendo la constante, equivale a

$$
y^2 = \frac{2}{3}\ln|1+x^3| + C.
$$

El valor $y = 0$ no es solución, porque la ecuación original no está definida en $y=0$; la separación no descarta ninguna solución. La solución es real donde el radicando es no negativo. La expresión $\ln|1+x^3|$ es singular en $x = -1$, de modo que cada rama está definida en un intervalo que no contiene a $x=-1$.

## Observaciones

La solución suele dejarse en forma implícita, $y^2 - \frac{2}{3}\ln|1+x^3| = C$, porque el despeje introduce dos ramas. Cada rama corresponde a una elección de signo y a un intervalo de validez; una condición inicial $y(x_0)\ne 0$ selecciona la rama y el intervalo que contiene a $x_0$. La ecuación no admite soluciones singulares: el único factor que podría anularse, $y$, no produce una solución válida.
