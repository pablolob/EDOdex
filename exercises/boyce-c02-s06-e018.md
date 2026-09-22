---
title: "Boyce 2.6 Ejercicio 18"
exercise-id: boyce-c02-s06-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.6, ejercicio 18"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado se interrumpe tras introducir el modelo de Schaefer; falta la pregunta o los incisos que continúan en la página siguiente, no disponible."
source-images:
  - c02s06i03-p083.png
---

## Enunciado

**Aprovechamiento de un recurso renovable.** Supóngase que la población $N(t)$ de cierta especie de peces (por ejemplo, atún o hipogloso) en una región dada del océano se describe por la ecuación logística.

$$dN/dt = r(1 - N/K')N.$$

Aunque es deseable utilizar esta fuente de alimento, de manera intuitiva es evidente que si se pescan demasiados peces, entonces su población puede reducirse a menos de un nivel útil y, posiblemente, incluso se lleve a la extinción. En los problemas 18 y 19 se examinan algunas de las preguntas relacionadas con el planteamiento de una estrategia racional para administrar la pesca.

A cierto nivel de esfuerzo, resulta razonable suponer que la rapidez a la que se capturen los peces depende de la población $N$: mientras más peces haya, más fácil es atraparlos. Por tanto, se supone que la razón a la que se capturan los peces, es decir, el rendimiento $Y$ de la pesca, queda definida por $Y = EN$, en donde $E$ es una constante positiva, cuyas unidades son 1/tiempo y que mide el esfuerzo total realizado para aprovechar la especie dada de peces. A fin de incluir este efecto, la ecuación logística se sustituye por

$$dN/dt = r(1 - N/K')N - EN, \tag{i}$$

Esta ecuación se conoce como **modelo de Schaefer**, en honor del biólogo M. B. Schaefer, quien lo aplicó a las poblaciones de peces.
