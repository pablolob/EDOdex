---
title: "Boyce 5.3 Ejercicio 25"
exercise-id: boyce-c05-s03-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 25"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
  - orden-superior
competencies:
  - seleccionar-metodo.sustitucion
prerequisitos:
  - derivacion.regla-cadena
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s03i03-p265.png
---

## Enunciado

Los polinomios de Legendre tienen una función importante en física matemática. Por ejemplo, al resolver la ecuación de Laplace (ecuación del potencial) en coordenadas esféricas se encuentra la ecuación

$$\frac{d^2 F(\varphi)}{d\varphi^2} + \cot \varphi \frac{d F(\varphi)}{d\varphi} + n(n + 1)F(\varphi) = 0, \quad 0 < \varphi < \pi,$$

en donde $n$ es un entero positivo. Demuestre que el cambio de variable $x = \cos \varphi$ conduce a la ecuación de Legendre con $\alpha = n$ para $y = f(x) = F(\arccos x)$.

## Solución

El cambio de variable transforma la ecuación dada en la **ecuación de Legendre** con $\alpha = n$,

$$
(1 - x^2)\frac{d^2 y}{dx^2} - 2x\frac{dy}{dx} + n(n + 1)y = 0.
$$

## Resolución

Se escribe $x = \cos\varphi$, con $0 < \varphi < \pi$. En ese intervalo $\sin\varphi > 0$ y

$$
\frac{d\varphi}{dx} = -\frac{1}{\sqrt{1 - x^2}} = -\frac{1}{\sin\varphi},
\qquad
\sqrt{1 - x^2} = \sin\varphi.
$$

La función $y(x) = F(\varphi(x))$ es una composición. Con la **regla de la cadena**, la primera derivada es

$$
\frac{dy}{dx} = F'(\varphi)\frac{d\varphi}{dx} = -\frac{F'(\varphi)}{\sin\varphi},
$$

donde $F'$ denota la derivada de $F$ respecto de $\varphi$. Al derivar otra vez respecto de $x$, con $\varphi' = -1/\sin\varphi$,

$$
\frac{d^2 y}{dx^2}
= -\frac{d}{dx}\!\left(\frac{F'(\varphi)}{\sin\varphi}\right)
= -\frac{F''(\varphi)\,\varphi'\sin\varphi - F'(\varphi)\cos\varphi\,\varphi'}{\sin^2\varphi}
= \frac{F''(\varphi)\sin\varphi - F'(\varphi)\cos\varphi}{\sin^3\varphi}.
$$

De las dos expresiones anteriores se despejan las derivadas de $F$ en términos de las de $y$:

$$
F'(\varphi) = -\sin\varphi\,\frac{dy}{dx},
\qquad
F''(\varphi) = \sin^2\varphi\,\frac{d^2 y}{dx^2} - \cos\varphi\,\frac{dy}{dx}.
$$

Al sustituirlas en el miembro izquierdo de la ecuación dada y usar $\sin^2\varphi = 1 - x^2$ y $\cos\varphi = x$,

$$
\begin{aligned}
F''(\varphi) + \cot\varphi\,F'(\varphi) + n(n+1)F(\varphi)
&= \left(\sin^2\varphi\,y'' - \cos\varphi\,y'\right) - \cos\varphi\,y' + n(n+1)y \\
&= \sin^2\varphi\,y'' - 2\cos\varphi\,y' + n(n+1)y \\
&= (1 - x^2)y'' - 2xy' + n(n+1)y,
\end{aligned}
$$

pues $\cot\varphi\,F'(\varphi) = -\cos\varphi\,y'$ y $F(\varphi) = y$. Como la ecuación dada afirma que el miembro izquierdo es cero, resulta

$$
(1 - x^2)y'' - 2xy' + n(n+1)y = 0.
$$

Esta es la ecuación de Legendre con $\alpha(\alpha + 1) = n(n+1)$, es decir, con $\alpha = n$.

## Observaciones

El cambio $x = \cos\varphi$ aplica el intervalo $0 < \varphi < \pi$ sobre $-1 < x < 1$. Los extremos $x = \pm 1$ corresponden a $\varphi = 0$ y $\varphi = \pi$, donde el coeficiente $1 - x^2$ se anula; son los puntos singulares de la ecuación de Legendre y quedan fuera del dominio de la solución.

El factor $\alpha(\alpha + 1) = n(n+1)$ también se anula para $\alpha = -n - 1$. La elección $\alpha = n$ es la que da lugar a la solución polinomial $P_n$ cuando se impone la normalización $P_n(1) = 1$.
