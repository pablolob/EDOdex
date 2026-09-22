---
title: "Boyce 4.1 Ejercicio 25"
exercise-id: boyce-c04-s01-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 25"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies:
  - resolver-analiticamente.reduccion-orden
prerequisitos:
  - ecuaciones-diferenciales.linealidad
  - ecuaciones-diferenciales.primer-orden
  - integracion.por-partes
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s01i03-p224.png
---

## Enunciado

Aplique el método de reducción de orden (problema 24) para resolver la ecuación diferencial dada.

25. $(2 - x)y''' + (2x - 3)y'' - xy' + y = 0, \quad x < 2; \quad y_1(x) = e^x$

## Solución

La solución general de la ecuación en el intervalo $x < 2$ es

$$
y(x) = c_1 x + c_2 e^x + c_3 x e^x.
$$

Las funciones $x$, $e^x$ y $x e^x$ forman un conjunto fundamental de soluciones en $(-\infty, 2)$.

## Resolución

La ecuación

$$
(2-x)y''' + (2x-3)y'' - xy' + y = 0
$$

es **lineal homogénea de tercer orden**. Como $x < 2$, el coeficiente $2-x$ no se anula. Se divide la ecuación entre $2-x$ para llevarla a la forma estándar

$$
y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = 0,
$$

con

$$
p_1(x) = \frac{2x-3}{2-x}, \qquad p_2(x) = -\frac{x}{2-x}, \qquad p_3(x) = \frac{1}{2-x}.
$$

Se aplica el **método de reducción de orden** con la solución conocida $y_1 = e^x$. Según el problema 24, la sustitución $y = y_1 v = e^x v$ produce la ecuación de segundo orden para $v'$

$$
y_1 v''' + (3y_1' + p_1 y_1)v'' + (3y_1'' + 2p_1 y_1' + p_2 y_1)v' = 0.
$$

Como $y_1 = y_1' = y_1'' = e^x$, los coeficientes valen

$$
\begin{aligned}
3y_1' + p_1 y_1 &= e^x\left(3 + \frac{2x-3}{2-x}\right) = e^x\,\frac{3-x}{2-x}, \\
3y_1'' + 2p_1 y_1' + p_2 y_1 &= e^x\left(3 + \frac{4x-6}{2-x} - \frac{x}{2-x}\right) = e^x\,\frac{6-3x+4x-6-x}{2-x} = 0.
\end{aligned}
$$

La ecuación se reduce entonces a

$$
e^x v''' + e^x\,\frac{3-x}{2-x}\,v'' = 0
\quad\Longrightarrow\quad
(2-x)v''' + (3-x)v'' = 0.
$$

El término en $v'$ no aparece, de modo que la ecuación admite una segunda reducción. Con $w = v'$ queda

$$
(2-x)w'' + (3-x)w' = 0,
$$

y con $u = w'$ resulta la ecuación de primer orden

$$
(2-x)u' + (3-x)u = 0.
$$

Se separan las variables:

$$
\frac{u'}{u} = \frac{x-3}{2-x} = -1 - \frac{1}{2-x}
\quad\Longrightarrow\quad
u = A(2-x)e^{-x}.
$$

La primera integración da

$$
w = v' = \int A(2-x)e^{-x}\,dx = A(x-1)e^{-x} + B,
$$

y la segunda,

$$
v = \int\left[A(x-1)e^{-x} + B\right]dx = -Axe^{-x} + Bx + C.
$$

Al deshacer la sustitución,

$$
y = e^x v = e^x\left(-Axe^{-x} + Bx + C\right) = -Ax + Bxe^x + Ce^x.
$$

Renombrando las constantes arbitrarias se obtiene la solución general

$$
y = c_1 x + c_2 e^x + c_3 xe^x.
$$

Las tres funciones son linealmente independientes en $(-\infty,2)$, pues su wronskiano es

$$
W(e^x, xe^x, x) =
\begin{vmatrix}
e^x & xe^x & x\\
e^x & (1+x)e^x & 1\\
e^x & (2+x)e^x & 0
\end{vmatrix}
= e^{2x}(x-2) \neq 0.
$$

Por tanto, la combinación es la solución general. La forma estándar tiene un punto singular en $x = 2$, donde se anula el coeficiente de $y'''$; por eso el intervalo de validez es $(-\infty,2)$, el indicado en el enunciado.

## Observaciones

La reducción de orden requiere una solución conocida que no se anule en el intervalo. Aquí $y_1 = e^x > 0$ en todo $\mathbb{R}$, de modo que la división por $y_1$ es válida.

En este ejercicio la ecuación para $w = v'$ carece del término en $w$, así que se reduce de nuevo de inmediato. En general, la ecuación de segundo orden para $w$ no es reducible por sí sola y exige otra solución conocida o un método adicional.

Cada integración introduce una constante arbitraria; las tres constantes $c_1$, $c_2$ y $c_3$ proceden de las sucesivas reducciones e integraciones.

Aunque la solución contiene $e^x$ y $xe^x$, la ecuación no tiene coeficientes constantes. Esas funciones aparecen por la solución conocida $y_1 = e^x$ y por la integración, no por una ecuación característica.
