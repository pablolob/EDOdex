---
title: "Boyce 5.9 Ejercicio 21"
exercise-id: boyce-c05-s09-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies: []
prerequisitos:
  - calculo-avanzado.integrales-impropias
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s09i01-p314.png
---

## Enunciado

En cada uno de los problemas 21 a 24, determine si la integral dada converge o diverge.

21. $\int_{0}^{\infty} (t^2 + 1)^{-1} \,dt$

## Solución

La integral impropia **converge** y su valor es

$$
\int_{0}^{\infty} \frac{dt}{t^{2}+1} = \frac{\pi}{2}.
$$

## Resolución

La integral es impropia solo por el límite superior infinito, porque el integrando $1/(t^{2}+1)$ es continuo en $[0,\infty)$. Por la definición de integral impropia,

$$
\int_{0}^{\infty} \frac{dt}{t^{2}+1}
= \lim_{R\to\infty}\int_{0}^{R}\frac{dt}{t^{2}+1}.
$$

Una primitiva del integrando es $\arctan t$, de modo que

$$
\int_{0}^{R}\frac{dt}{t^{2}+1}
= \bigl[\arctan t\bigr]_{0}^{R}
= \arctan R - \arctan 0
= \arctan R.
$$

Como $\arctan R \to \dfrac{\pi}{2}$ cuando $R\to\infty$, el límite existe y es finito:

$$
\int_{0}^{\infty}\frac{dt}{t^{2}+1}
= \lim_{R\to\infty}\arctan R
= \frac{\pi}{2}.
$$

Al ser un límite finito, la integral **converge**.

## Observaciones

### Método alternativo: criterio de comparación

Para $t \ge 1$ se cumple $0 < \dfrac{1}{t^{2}+1} < \dfrac{1}{t^{2}}$. La integral $\displaystyle\int_{1}^{\infty} t^{-2}\,dt$ converge (integral $p$ con $p=2>1$), así que el criterio de comparación concluye la convergencia sin evaluar la integral. Este camino decide la convergencia, pero no proporciona el valor $\pi/2$.

El integrando decae como $t^{-2}$; esa rapidez de decaimiento es la que garantiza la convergencia. En la integral que define la transformada de Laplace, $\int_{0}^{\infty} e^{-st} f(t)\,dt$, el factor $e^{-st}$ impone un decaimiento aún más rápido para $s>0$.
