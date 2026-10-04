---
title: "Boyce 2.9 Ejercicio 2"
exercise-id: boyce-c02-s09-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.9, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.homogenea
  - resolver-analiticamente.homogeneas-primer-orden
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s09i01-p106.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$2y\,dx - x\,dy = 0$$

## Solución

La ecuación es **homogénea de primer orden** y su solución general es

$$
y = Cx^2.
$$

La familia está definida para todo $x \in \mathbb{R}$; la solución nula corresponde a $C = 0$.

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ con

$$
M(x,y) = 2y, \qquad N(x,y) = -x.
$$

Ambas funciones son homogéneas de grado 1:

$$
M(tx,ty) = 2ty = t\,M(x,y), \qquad N(tx,ty) = -tx = t\,N(x,y).
$$

Por tanto, la ecuación $2y\,dx - x\,dy = 0$ es homogénea de primer orden.

De manera equivalente, al despejar $y'$ para $x \ne 0$ resulta

$$
y' = \frac{2y}{x} = f(x,y),
$$

y la función $f$ verifica $f(tx,ty) = f(x,y)$; es homogénea de grado 0.

Se aplica la sustitución

$$
y = ux, \qquad y' = u + x u',
$$

donde $u$ es una función de $x$. Al sustituir en $y' = \dfrac{2y}{x}$,

$$
u + x u' = \frac{2ux}{x} = 2u.
$$

Se simplifican los términos en $u$ y queda una ecuación de variables separables:

$$
x u' = u \quad\Longrightarrow\quad \frac{du}{u} = \frac{dx}{x}, \qquad u \ne 0,\ x \ne 0.
$$

Se integra ambos miembros:

$$
\ln|u| = \ln|x| + C_1,
$$

de donde $u = Cx$. Al deshacer la sustitución, $y = ux$, se obtiene la solución general:

$$
y = Cx^2.
$$

El caso $u \equiv 0$, que corresponde a $y \equiv 0$, ya está incluido en la familia con $C = 0$.

## Observaciones

La ecuación en forma normal $y' = \dfrac{2y}{x}$ tiene un coeficiente singular en $x = 0$. La familia $y = Cx^2$ satisface la forma diferencial original en todos los puntos, incluido el origen.

### Método alternativo: separación de variables

La ecuación también es separable y no requiere la sustitución $y = ux$. Al escribirla como

$$
2y\,dx = x\,dy
$$

y dividir por $xy$ (con $x \ne 0$, $y \ne 0$), las variables quedan separadas:

$$
\frac{dy}{y} = 2\,\frac{dx}{x}.
$$

La integración conduce a $\ln|y| = 2\ln|x| + C_1$, es decir, $y = Cx^2$. La solución nula $y \equiv 0$ se recupera con $C = 0$.
