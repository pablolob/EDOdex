---
title: "Zill Repaso C1 Ejercicio 19"
exercise-id: zill-c01-sr-e019
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 19"
topics:
  - fundamentos
competencies:
  - determinar.dominio
  - aplicar-condiciones.problema-valor-inicial
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

19. Dado que $y = x - 2/x$ es una solución de la ED $xy' + y = 2x$, determine $x_0$ y el intervalo $I$ más largo para el cual $y(x)$ es una solución del PVI de primer orden $xy' + y = 2x$, $y(x_0) = 1$.

## Solución

Existen dos posibilidades:

- $x_0 = 2$ con $I = (0, \infty)$.
- $x_0 = -1$ con $I = (-\infty, 0)$.

## Resolución

La solución dada es $y(x) = x - \dfrac{2}{x}$, definida para $x \neq 0$. Para hallar $x_0$ se impone la condición inicial:

$$
y(x_0) = x_0 - \frac{2}{x_0} = 1.
$$

Multiplicando por $x_0$:

$$
x_0^2 - 2 = x_0 \;\Longrightarrow\; x_0^2 - x_0 - 2 = 0 \;\Longrightarrow\; (x_0 - 2)(x_0 + 1) = 0.
$$

Se obtienen dos valores: $x_0 = 2$ y $x_0 = -1$.

La EDO $xy' + y = 2x$, escrita en forma normal como $y' + \dfrac{1}{x}\,y = 2$, tiene coeficiente $1/x$ que es discontinuo en $x = 0$. La solución $y = x - 2/x$ tampoco está definida en $x = 0$. Por tanto, el intervalo de definición debe excluir $x = 0$ y ser un intervalo abierto.

- Para $x_0 = 2$ (positivo), el intervalo más largo que contiene a $x_0$ y no incluye $x = 0$ es $I = (0, \infty)$.
- Para $x_0 = -1$ (negativo), el intervalo más largo que contiene a $x_0$ y no incluye $x = 0$ es $I = (-\infty, 0)$.

Ambos son válidos como respuesta al problema.

## Observaciones

La EDO es lineal de primer orden. La discontinuidad del coeficiente en $x = 0$ divide el dominio en dos regiones desconectadas. Por eso existen dos PVI distintos, cada uno con su propio intervalo máximo de definición.
