---
title: "Boyce 3.4 Ejercicio 11"
exercise-id: boyce-c03-s04-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 7 a 16, halle la solución general de la ecuación diferencial dada.

11. $y'' + 6y' + 13y = 0$

## Solución

La ecuación es **lineal homogénea** con **coeficientes constantes**. Su solución general es

$$
y(x) = e^{-3x}\left(C_1 \cos 2x + C_2 \sin 2x\right),
$$

donde $C_1$ y $C_2$ son constantes arbitrarias.

## Resolución

Se ensaya una solución de la forma $y = e^{rx}$. Al sustituir en la ecuación,

$$
r^2 e^{rx} + 6r e^{rx} + 13 e^{rx} = \left(r^2 + 6r + 13\right)e^{rx} = 0,
$$

resulta la **ecuación característica**

$$
r^2 + 6r + 13 = 0.
$$

El discriminante es $6^2 - 4(1)(13) = 36 - 52 = -16 < 0$, por lo que las raíces son complejas conjugadas. Con la fórmula cuadrática,

$$
\begin{aligned}
r &= \frac{-6 \pm \sqrt{-16}}{2} \\
  &= \frac{-6 \pm 4i}{2} \\
  &= -3 \pm 2i.
\end{aligned}
$$

Las raíces tienen la forma $\alpha \pm \beta i$ con $\alpha = -3$ y $\beta = 2$. Para coeficientes reales, el par conjugado aporta las dos soluciones reales linealmente independientes

$$
y_1(x) = e^{-3x}\cos 2x, \qquad y_2(x) = e^{-3x}\sin 2x.
$$

Por el principio de superposición, la solución general es la combinación lineal

$$
y(x) = C_1 e^{-3x}\cos 2x + C_2 e^{-3x}\sin 2x,
$$

que se escribe de forma compacta como

$$
y(x) = e^{-3x}\left(C_1 \cos 2x + C_2 \sin 2x\right).
$$

La solución está definida para todo $x \in \mathbb{R}$, pues el factor exponencial y las funciones seno y coseno carecen de singularidades.

## Observaciones

Como los coeficientes de la ecuación son reales, las dos raíces complejas aparecen necesariamente como un par conjugado. El signo de la parte real $\alpha$ determina el comportamiento cualitativo: al ser $\alpha = -3 < 0$, el factor $e^{-3x}$ amortigua las oscilaciones y toda solución tiende a cero cuando $x \to \infty$.
