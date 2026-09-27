---
title: "Boyce 2.4 Ejercicio 11"
exercise-id: boyce-c02-s04-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.4, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
  - estabilidad
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.separable
  - clasificar.linealidad
prerequisitos:
  - integracion.directa
  - ecuaciones-diferenciales.existencia-unicidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s04i01-p059.png
---

## Enunciado

En cada uno de los problemas 9 a 12, resuelva el problema con valor inicial dado y determine de qué manera el intervalo en el que la solución existe depende del valor inicial $y_0$.
$$y' + y^3 = 0, \quad y(0) = y_0$$

## Solución

La ecuación es **no lineal** y **autónoma**. Para $y_0 \neq 0$ la solución es

$$
y(x) = \frac{y_0}{\sqrt{1 + 2y_0^2 x}},
$$

y su intervalo máximo de existencia es $\left(-\dfrac{1}{2y_0^2},\, \infty\right)$. Para $y_0 = 0$ la solución es $y(x) \equiv 0$, válida en $(-\infty, \infty)$.

## Resolución

La ecuación $y' + y^3 = 0$ es de **primer orden**, **no lineal** y **autónoma**. Para $y \neq 0$ se separan las variables:

$$
\frac{dy}{y^3} = -\,dx.
$$

Se integran ambos miembros. En el miembro izquierdo se aplica la regla de la potencia:

$$
-\frac{1}{2y^2} = -x + C.
$$

Al despejar $\dfrac{1}{2y^2}$ resulta

$$
\frac{1}{2y^2} = x + C_1,
$$

donde $C_1 = -C$ es una constante arbitraria. De aquí,

$$
y^2 = \frac{1}{2(x + C_1)}.
$$

La condición inicial $y(0) = y_0$ fija la constante. Para $y_0 \neq 0$,

$$
\frac{1}{2y_0^2} = C_1.
$$

Sustituyendo,

$$
y^2 = \frac{1}{2\left(x + \dfrac{1}{2y_0^2}\right)} = \frac{y_0^2}{1 + 2y_0^2 x}.
$$

La condición $y(0) = y_0$ selecciona la raíz con el signo de $y_0$:

$$
y(x) = \frac{y_0}{\sqrt{1 + 2y_0^2 x}}.
$$

El radicando debe ser estrictamente positivo; por tanto,

$$
1 + 2y_0^2 x > 0 \quad \Longrightarrow \quad x > -\frac{1}{2y_0^2}.
$$

Cuando $x$ tiende a $-1/(2y_0^2)$ por la derecha, $|y(x)| \to \infty$, de modo que la solución no puede prolongarse más allá de ese punto. El intervalo máximo de existencia es

$$
\left(-\frac{1}{2y_0^2},\; \infty\right).
$$

Si $y_0 = 0$, la separación de variables no es válida porque divide entre $y$. En ese caso $y(x) \equiv 0$ satisface la ecuación y la condición inicial, y existe en todo $\mathbb{R}$.

Así, para $y_0 \neq 0$ el intervalo depende del valor inicial: el extremo izquierdo $-\dfrac{1}{2y_0^2}$ se acerca a $0$ conforme $|y_0|$ aumenta y tiende a $-\infty$ conforme $|y_0|$ disminuye. El extremo derecho es siempre $+\infty$.

## Observaciones

Una ecuación lineal de primer orden con coeficientes continuos en un intervalo tiene sus soluciones definidas en todo ese intervalo, con independencia de $y_0$. En esta ecuación no lineal el intervalo de existencia se contrae al crecer $|y_0|$: la solución escapa a infinito en un tiempo finito hacia la izquierda. Además, $y \equiv 0$ es la única solución de equilibrio y es asintóticamente estable, pues toda solución con $y_0 \neq 0$ verifica $y(x) \to 0$ cuando $x \to \infty$.
