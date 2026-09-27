---
title: "Boyce 3.3 Ejercicio 17"
exercise-id: boyce-c03-s03-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i01-p159.png
---

## Enunciado

Si $y_1$ y $y_2$ son soluciones linealmente independientes de $x^2 y'' - 2y' + (3 + x)y = 0$ si $W(y_1, y_2)(2) = 3$, encuentre el valor de $W(y_1, y_2)(4)$.

## Solución

El wronskiano en $x = 4$ es

$$
W(y_1, y_2)(4) = 3\sqrt{e}.
$$

## Resolución

La ecuación es **lineal**, **homogénea** y de **segundo orden**. No se conocen sus soluciones; el wronskiano se determina con la **identidad de Abel**, que solo depende del coeficiente de $y'$.

Primero se escribe la ecuación en forma estándar. Para $x \neq 0$ se divide por $x^{2}$:

$$
y'' - \frac{2}{x^{2}}\,y' + \frac{3+x}{x^{2}}\,y = 0.
$$

Por tanto, $p(x) = -\dfrac{2}{x^{2}}$.

La identidad de Abel establece que el wronskiano de dos soluciones cualesquiera satisface $W' = -p(x)\,W$, de modo que

$$
W(x) = C\exp\!\left(-\int p(x)\,dx\right).
$$

Con $p(x) = -2x^{-2}$,

$$
-\int p(x)\,dx = \int \frac{2}{x^{2}}\,dx = -\frac{2}{x},
$$

y las constantes de integración se absorben en $C$:

$$
W(x) = C\,e^{-2/x}.
$$

La condición $W(2) = 3$ fija la constante. Como $W(2) = C e^{-1}$,

$$
C e^{-1} = 3 \quad\Longrightarrow\quad C = 3e.
$$

Así, $W(x) = 3e\,e^{-2/x}$. Al evaluar en $x = 4$,

$$
W(4) = 3e\,e^{-2/4} = 3e\,e^{-1/2} = 3e^{1/2} = 3\sqrt{e}.
$$

## Observaciones

El valor no requiere resolver la ecuación: la **identidad de Abel** fija el wronskiano salvo una constante, que determina la condición $W(2)=3$.

Los puntos $x = 2$ y $x = 4$ pertenecen al intervalo $(0, \infty)$, donde los coeficientes de la forma estándar son continuos. El punto $x = 0$ es singular, de modo que la fórmula de Abel se aplica por separado en $(0,\infty)$ y en $(-\infty,0)$; aquí interesa el primero. La constante $C$ es la misma en todo $(0,\infty)$.
