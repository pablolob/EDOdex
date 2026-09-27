---
title: "Zill Repaso C2 Ejercicio 12"
exercise-id: zill-c02-sr-e012
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 12"
language: es
competencies:
  - clasificar.autonoma
  - clasificar.linealidad
  - analizar-cualitativamente.puntos-equilibrio
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
  - estabilidad
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 2
  technical: 1
---

## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

Un ejemplo de una ED lineal de primer orden autónoma con un solo punto crítico $-3$ es ________ mientras que una ED de primer orden no lineal autónoma con un solo punto crítico $-3$ es ________

## Solución

Una EDO lineal de primer orden autónoma con único punto crítico en $y=-3$ es

$$
y' = y + 3,
$$

y una EDO de primer orden no lineal autónoma con el mismo único punto crítico es

$$
y' = (y+3)^2.
$$

## Resolución

En una EDO autónoma de primer orden escrita como $y'=f(y)$, los puntos críticos son las raíces de $f(y)=0$. Por tanto, en cada caso se busca una función $f$ del tipo pedido cuyo único cero sea $y=-3$.

Para el caso lineal, la forma autónoma general es $y'=ay+b$ con $a\ne 0$. Su único punto crítico resuelve $ay+b=0$, es decir, $y=-b/a$. La condición $y=-3$ se cumple con $a=1$ y $b=3$. Entonces la ecuación lineal

$$
y'=y+3
$$

es autónoma y su punto crítico es $y=-3$, porque $y+3=0$ solo para ese valor.

Para el caso no lineal se necesita una función no lineal $f$ con un único cero en $y=-3$. El cuadrado de un binomio reúne ambas condiciones: $f(y)=(y+3)^2$ es un polinomio de grado dos, de modo que la ecuación es no lineal, y $(y+3)^2=0$ únicamente cuando $y=-3$. Así,

$$
y'=(y+3)^2
$$

es una EDO de primer orden no lineal, autónoma, con un solo punto crítico en $y=-3$.

## Observaciones

La respuesta no es única. En el caso lineal sirve cualquier $y'=a(y+3)$ con $a\ne 0$; en el no lineal, cualquier función no lineal con único cero en $y=-3$, por ejemplo $y'=(y+3)^3$ o $y'=e^{y+3}-1$.

En ambos ejemplos $y=-3$ es una solución de equilibrio constante. La ecuación lineal solo admite un cero simple, mientras que el ejemplo no lineal emplea un cero doble. Esa diferencia de multiplicidad es la que separa ambos casos.
