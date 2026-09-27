---
title: "Zill Repaso C2 Ejercicio 3"
exercise-id: zill-c02-sr-e003
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 3"
language: es
competencies:
  - analizar-cualitativamente.puntos-equilibrio
  - verificar.solucion
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

La ED lineal, $y' + k_1 y = k_2$, donde $k_1$ y $k_2$ son constantes distintas de cero, siempre tiene una solución constante. ________

## Solución

La afirmación es **verdadera**. La ecuación siempre admite la solución constante

$$
y=\frac{k_2}{k_1}.
$$

## Resolución

Una solución constante es una función $y(x)=c$ con derivada $y'=0$. Al sustituirla en la ecuación $y'+k_1 y=k_2$ resulta

$$
k_1 c=k_2.
$$

Como $k_1\ne 0$, el valor de la constante queda determinado de forma única:

$$
c=\frac{k_2}{k_1}.
$$

La comprobación es inmediata: al sustituir $y=k_2/k_1$ en la ecuación se obtiene $0+k_1(k_2/k_1)=k_2$. Por tanto, la ecuación siempre tiene la solución constante $y=k_2/k_1$ y la afirmación es verdadera.

## Observaciones

La ecuación es lineal, de primer orden y autónoma; su solución constante es el punto de equilibrio. La solución general es $y=k_2/k_1+Ce^{-k_1 x}$, donde la constante $C$ queda fijada por una condición inicial. El supuesto $k_1\ne 0$ es esencial: si $k_1=0$ la solución constante existiría solo para $k_2=0$.
