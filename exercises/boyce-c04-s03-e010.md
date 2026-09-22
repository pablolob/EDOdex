---
title: "Boyce 4.3 Ejercicio 10"
exercise-id: boyce-c04-s03-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 10"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - resolver-analiticamente.coeficientes-indeterminados
  - aplicar-condiciones.problema-valor-inicial
  - analizar-cualitativamente.comportamiento-asintotico
hidden-competencies:
  - clasificar.lineal-no-hom
  - seleccionar-metodo.coeficientes-indeterminados
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s03i01-p234.png
---

## Enunciado

En cada uno de los problemas 9 a 12, resuelva el problema con valor inicial dado. Determine cómo se comporta la solución cuando $t \to \infty$.

10. $y^{(iv)} + 2y'' + y = 3x + 4, \quad y(0) = y'(0) = 0, \quad y''(0) = y'''(0) = 1$

## Solución

$$
y = (x - 4)\cos x - \left(4 + \frac{3}{2}x\right)\sin x + 3x + 4.
$$

Cuando $x \to \infty$ la solución oscila con amplitud que crece linealmente; no tiende a ningún límite y es no acotada.

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$.

**Solución complementaria.** La ecuación homogénea asociada es $y^{(iv)} + 2y'' + y = 0$. Su ecuación característica es

$$
r^4 + 2r^2 + 1 = (r^2 + 1)^2 = 0,
$$

cuyas raíces son $r = \pm i$, ambas dobles. Cada par complejo doble aporta los términos $\cos x$, $x\cos x$, $\sin x$ y $x\sin x$. Por tanto,

$$
y_c = (c_1 + c_2 x)\cos x + (c_3 + c_4 x)\sin x.
$$

**Solución particular.** El término no homogéneo es $g(x) = 3x + 4$, un polinomio de grado uno. Como $r = 0$ no es raíz del polinomio auxiliar, la forma de prueba $Y = Ax + B$ no duplica ningún término de $y_c$. Sus derivadas de orden dos y superiores son nulas, de modo que al sustituir,

$$
Y^{(iv)} + 2Y'' + Y = Ax + B.
$$

La igualdad $Ax + B = 3x + 4$ fija $A = 3$ y $B = 4$. Así,

$$
y_p = 3x + 4.
$$

**Solución general.** Al reunir ambas partes,

$$
y = (c_1 + c_2 x)\cos x + (c_3 + c_4 x)\sin x + 3x + 4.
$$

**Condiciones iniciales.** Se calculan las tres primeras derivadas:

$$
\begin{aligned}
y' &= (c_2 + c_3 + c_4 x)\cos x + (c_4 - c_1 - c_2 x)\sin x + 3, \\
y'' &= (2c_4 - c_1 - c_2 x)\cos x - (2c_2 + c_3 + c_4 x)\sin x, \\
y''' &= -(3c_2 + c_3 + c_4 x)\cos x + (c_1 - 3c_4 + c_2 x)\sin x.
\end{aligned}
$$

La condición $y(0) = 0$ da $c_1 + 4 = 0$, luego $c_1 = -4$. La condición $y'(0) = 0$ da $c_2 + c_3 + 3 = 0$. La condición $y''(0) = 1$ da $2c_4 - c_1 = 1$, es decir, $2c_4 + 4 = 1$, de donde $c_4 = -\tfrac{3}{2}$. La condición $y'''(0) = 1$ da $-(3c_2 + c_3) = 1$. Al resolver el sistema $c_2 + c_3 = -3$ y $3c_2 + c_3 = -1$ se obtiene $c_2 = 1$ y $c_3 = -4$.

**Solución del problema con valor inicial.** Al sustituir las constantes,

$$
y = (x - 4)\cos x - \left(4 + \frac{3}{2}x\right)\sin x + 3x + 4.
$$

**Comportamiento cuando $x \to \infty$.** Los términos $(x - 4)\cos x$ y $-\left(4 + \tfrac{3}{2}x\right)\sin x$ oscilan con amplitud que crece como $x$, mientras que $3x + 4$ crece linealmente. La solución no se estabiliza ni tiende a un límite; oscila de forma no acotada.

Los coeficientes son constantes y $g(x) = 3x + 4$ es continua en todo $\mathbb{R}$; la solución es válida en $(-\infty, \infty)$.

## Observaciones

El enunciado nombra $t$ como variable independiente en la pregunta sobre el comportamiento asintótico, mientras que la ecuación usa $x$. Ambas designan la misma variable; la respuesta se expresa en $x$.

La raíz doble $r = i$, junto con su conjugada, genera los factores $x\cos x$ y $x\sin x$ de $y_c$. Ese crecimiento lineal es el responsable de que la solución sea no acotada, aun cuando el término forzante solo crece linealmente. La amplitud de la oscilación dominante es $\tfrac{\sqrt{13}}{2}x$, pues $x\cos x - \tfrac{3}{2}x\sin x = x\left(\cos x - \tfrac{3}{2}\sin x\right)$.

La forma de prueba $Y = Ax + B$ no requiere modificación: $r = 0$ no es raíz y el término constante de $g(x)$ no pertenece a $y_c$.
