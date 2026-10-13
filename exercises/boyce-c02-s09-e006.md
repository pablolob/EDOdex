---
title: "Boyce 2.9 Ejercicio 6"
exercise-id: boyce-c02-s09-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.9, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.homogenea
  - resolver.homogenea-primer-orden
hidden-competencies:
  - seleccionar.metodo.sustitucion
prerequisitos:
  - integracion.fracciones-parciales
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s09i01-p106.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$\frac{dy}{dx} = -\frac{4x + 3y}{2x + y}$$

## Solución

La ecuación es **de primer orden** y **homogénea**. Su solución general, en forma implícita, es

$$
(x+y)(4x+y)^2 = C.
$$

Es válida en cualquier intervalo que no contenga puntos de la recta $2x+y=0$.

## Resolución

En la forma normal de la ecuación,

$$
\frac{dy}{dx} = f(x,y) = -\frac{4x+3y}{2x+y}.
$$

La función $f$ satisface

$$
f(tx,ty) = -\frac{4tx+3ty}{2tx+ty} = -\frac{t(4x+3y)}{t(2x+y)} = f(x,y),
$$

por lo que es homogénea de grado cero y la ecuación es **homogénea**.

Se introduce la sustitución $y = ux$, donde $u$ es función de $x$; esta sustitución requiere $x \neq 0$. Derivando,

$$
y' = u + x\,u'.
$$

Al sustituir en la ecuación,

$$
u + x\,u' = -\frac{4+3u}{2+u}.
$$

Se despeja $x\,u'$:

$$
x\,u' = -\frac{4+3u}{2+u} - u = -\frac{(4+3u) + u(2+u)}{2+u} = -\frac{u^2+5u+4}{2+u} = -\frac{(u+1)(u+4)}{2+u}.
$$

La ecuación resulta separable:

$$
\frac{u+2}{(u+1)(u+4)}\,du = -\frac{dx}{x}.
$$

El miembro izquierdo se descompone en fracciones parciales:

$$
\frac{u+2}{(u+1)(u+4)} = \frac{1/3}{u+1} + \frac{2/3}{u+4}.
$$

Integrando ambos miembros,

$$
\frac{1}{3}\ln|u+1| + \frac{2}{3}\ln|u+4| = -\ln|x| + K.
$$

Al multiplicar por 3 y agrupar los logaritmos,

$$
\ln\left|(u+1)(u+4)^2 x^3\right| = C_1,
$$

de donde

$$
(u+1)(u+4)^2\,x^3 = C.
$$

Al deshacer la sustitución con $u = y/x$,

$$
\left(\frac{x+y}{x}\right)\left(\frac{y+4x}{x}\right)^2 x^3 = (x+y)(y+4x)^2 = C,
$$

es decir,

$$
(x+y)(4x+y)^2 = C.
$$

La solución se comprueba por derivación implícita. Para $F(x,y) = (x+y)(4x+y)^2$,

$$
\begin{aligned}
F_x &= (4x+y)^2 + 8(x+y)(4x+y) = 3(4x+y)(4x+3y), \\
F_y &= (4x+y)^2 + 2(x+y)(4x+y) = 3(4x+y)(2x+y).
\end{aligned}
$$

A lo largo de $F(x,y)=C$,

$$
\frac{dy}{dx} = -\frac{F_x}{F_y} = -\frac{4x+3y}{2x+y},
$$

que es la ecuación original.

Al separar variables se dividió entre $(u+1)(u+4)$ y entre $x$. Los valores $u=-1$ y $u=-4$ corresponden a $y=-x$ y $y=-4x$. Ambas rectas satisfacen la ecuación y aparecen en la familia para $C=0$, de modo que no se pierde ninguna solución singular. La restricción $x \neq 0$ proviene solo de la sustitución.

La ecuación original no está definida cuando $2x+y=0$, donde el denominador se anula. La solución es válida en cualquier intervalo que no contenga puntos de esa recta.

## Observaciones

La solución general queda en forma implícita y, en general, no admite un despeje elemental de $y$ en función de $x$. El requisito $x \neq 0$ es una restricción de la sustitución, no de la ecuación: la familia implícita puede extenderse a través de $x=0$ mientras $2x+y \neq 0$.
