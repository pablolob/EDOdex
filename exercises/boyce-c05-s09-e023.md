---
title: "Boyce 5.9 Ejercicio 23"
exercise-id: boyce-c05-s09-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 23"
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

23. $\int_{1}^{\infty} t^{-2} e^t \,dt$

## Solución

La integral **diverge** a $+\infty$:

$$
\int_{1}^{\infty} t^{-2} e^{t}\,dt = +\infty.
$$

## Resolución

El integrando $f(t)=t^{-2}e^{t}$ es continuo en $[1,\infty)$, de modo que la integral es impropia solo por el límite superior infinito. Por la definición de integral impropia,

$$
\int_{1}^{\infty} t^{-2} e^{t}\,dt
= \lim_{R\to\infty}\int_{1}^{R} t^{-2} e^{t}\,dt.
$$

Se aplica el **criterio de comparación**. Para $t\ge1$ se cumple $e^{t}\ge t^{2}$. En efecto, la función $g(t)=e^{t}-t^{2}$ satisface $g(1)=e-1>0$, mientras que $g'(t)=e^{t}-2t$ es creciente en $[1,\infty)$ porque $g''(t)=e^{t}-2\ge e-2>0$; por tanto $g'(t)\ge g'(1)=e-2>0$ y $g$ es creciente y positiva. En consecuencia,

$$
t^{-2} e^{t} \ge t^{-2}\,t^{2} = 1, \qquad t\ge1.
$$

Al integrar esta cota en $[1,R]$,

$$
\int_{1}^{R} t^{-2} e^{t}\,dt \ge \int_{1}^{R} 1\,dt = R-1.
$$

El miembro derecho crece sin límite cuando $R\to\infty$, así que

$$
\lim_{R\to\infty}\int_{1}^{R} t^{-2} e^{t}\,dt = +\infty.
$$

La integral impropia **diverge**.

## Observaciones

El criterio de comparación decide la divergencia sin necesidad de evaluar la integral. El factor $e^{t}$ crece más rápido que cualquier potencia, de modo que el integrando $t^{-2}e^{t}$ es no acotado y no puede decaer a cero.

El resultado contrasta con integrales como $\int_{0}^{\infty} t e^{-t}\,dt$, donde el decaimiento exponencial garantiza la convergencia. En términos de la transformada de Laplace, la integral propuesta corresponde a evaluar $\int_{1}^{\infty} t^{-2}e^{-st}\,dt$ en $s=-1$, fuera de la región de convergencia $s>0$.
