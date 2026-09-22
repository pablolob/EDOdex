---
title: "Boyce 2.2 Ejercicio 21"
exercise-id: boyce-c02-s02-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
  - interpretar.comportamiento-solucion
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s02i02-p046.png
---

## Enunciado

Para el problema con valor inicial $y' - y = 2$, $y(0) = y_0$, determine de qué manera el valor límite de $y$ cuando $x \to \infty$ depende de $y_0$.

## Solución

La solución del problema con valor inicial es

$$
y(x) = (y_0 + 2)e^{x} - 2.
$$

El valor límite depende del signo de $y_0 + 2$:

$$
\lim_{x \to \infty} y(x) =
\begin{cases}
+\infty, & y_0 > -2, \\
-2, & y_0 = -2, \\
-\infty, & y_0 < -2.
\end{cases}
$$

## Resolución

La ecuación es de **variables separables**. Se escribe como $y' = y + 2$ y se separan las variables para $y \ne -2$:

$$
\frac{dy}{y + 2} = dx.
$$

Se integran ambos miembros:

$$
\ln|y + 2| = x + C_1.
$$

Al exponenciar resulta $|y + 2| = e^{C_1}e^{x}$, es decir,

$$
y + 2 = C e^{x},
$$

con $C \ne 0$. La solución constante $y = -2$ se recupera con $C = 0$, de modo que la solución general es

$$
y = C e^{x} - 2.
$$

La condición inicial $y(0) = y_0$ da $y_0 = C - 2$, luego $C = y_0 + 2$. La solución del problema con valor inicial es

$$
y(x) = (y_0 + 2)e^{x} - 2.
$$

Como $e^{x} \to \infty$ cuando $x \to \infty$, el comportamiento del límite lo determina el signo del coeficiente $y_0 + 2$. Si $y_0 + 2 > 0$, el término exponencial crece y $y \to +\infty$. Si $y_0 + 2 = 0$, la solución es la constante $y \equiv -2$ y el límite es $-2$. Si $y_0 + 2 < 0$, el término exponencial decrece hacia $-\infty$.

## Observaciones

El valor $y = -2$ es una solución de equilibrio de la ecuación: la recta $y = -2$ separa las soluciones que crecen sin cota de las que decrecen sin cota. Solo la condición inicial exactamente igual a $-2$ produce una solución acotada.
