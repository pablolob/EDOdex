---
title: "Boyce 3.3 Ejercicio 16"
exercise-id: boyce-c03-s03-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.wronskiano
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

Si $y_1$ y $y_2$ son soluciones linealmente independientes de $xy'' + 2y' + xe^x y = 0$ si $W(y_1, y_2)(1) = 2$, halle el valor de $W(y_1, y_2)(5)$.

## Solución

El wronskiano de dos soluciones satisface $W' = -p(x)W$, con $p(x)=2/x$ tras dividir la ecuación por $x$. Por tanto $W(x)=2x^{-2}$ y

$$
W(y_1, y_2)(5) = \frac{2}{25}.
$$

## Resolución

La ecuación se escribe primero en forma estándar. Para $x \ne 0$,

$$
y'' + \frac{2}{x}y' + e^x y = 0.
$$

Así, $p(x) = \dfrac{2}{x}$ y $q(x) = e^x$. Ambos coeficientes son continuos en $(0, \infty)$, intervalo que contiene a $x = 1$ y a $x = 5$; la fórmula de **Abel** se aplica allí.

Para dos soluciones de $y'' + p(x)y' + q(x)y = 0$, el wronskiano $W = y_1y_2' - y_1'y_2$ cumple $W' = -p(x)W$. En efecto, al derivar y sustituir $y_i'' = -p\,y_i' - q\,y_i$,

$$
\begin{aligned}
W' &= y_1y_2'' - y_1''y_2 \\
&= y_1\left(-p\,y_2' - q\,y_2\right) - \left(-p\,y_1' - q\,y_1\right)y_2 \\
&= -p\left(y_1y_2' - y_1'y_2\right) = -p\,W.
\end{aligned}
$$

Separando variables e integrando de $1$ a $x$,

$$
W(x) = W(1)\exp\!\left(-\int_1^x \frac{2}{t}\,dt\right).
$$

Como $x \in (0, \infty)$, se tiene $\int_1^x \frac{2}{t}\,dt = 2\ln x$, de modo que

$$
W(x) = 2\,e^{-2\ln x} = 2x^{-2}.
$$

Al evaluar en $x = 5$,

$$
W(y_1, y_2)(5) = 2 \cdot 5^{-2} = \frac{2}{25}.
$$

La independencia lineal de $y_1$ y $y_2$ garantiza $W(1) = 2 \ne 0$ y que el wronskiano no se anula en $(0, \infty)$, en coherencia con $2x^{-2} > 0$.

## Observaciones

La fórmula de **Abel** permite obtener el wronskiano sin resolver la ecuación: aunque esta es lineal y homogénea, el coeficiente $e^x$ no conduce a una solución elemental.

El cociente $2/x$ exige $x \ne 0$. Los puntos $x = 1$ y $x = 5$ pertenecen a $(0, \infty)$, que es el intervalo donde se aplica la fórmula. En $(-\infty, 0)$ la misma expresión $W(x) = 2x^{-2}$ es válida, pero ninguno de los dos puntos pertenece a ese intervalo.

El valor $W(5) = 2/25 > 0$ confirma que $y_1$ y $y_2$ siguen siendo linealmente independientes en $x = 5$.
