---
title: "Boyce 1.1 Ejercicio 22"
exercise-id: boyce-c01-s01-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - clasificar.orden
  - clasificar.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c01s01i02-p026.png
---

## Enunciado

En cada uno de los problemas 21 a 26, determine el orden de la ecuación diferencial parcial dada; diga también si la ecuación diferencial es lineal o no lineal. Las derivadas parciales se denotan por medio de subíndices.

22. $\alpha^2 u_{xx} = u_t$

## Solución

La ecuación es de **segundo orden** y **lineal**.

## Resolución

La derivada de mayor orden presente es $u_{xx}$, la segunda derivada parcial de $u$ respecto de $x$; la derivada temporal $u_t$ es de primer orden. Por tanto, la ecuación es de **segundo orden**.

Una ecuación diferencial parcial es **lineal** cuando la incógnita $u$ y todas sus derivadas parciales aparecen elevadas a la primera potencia, sin multiplicarse entre sí ni intervenir en funciones no lineales, y los coeficientes dependen únicamente de las variables independientes.

En la ecuación dada,

$$
\alpha^2 u_{xx} = u_t,
$$

la incógnita $u$ aparece solo a través de $u_{xx}$ y de $u_t$, ambas con exponente uno y sin productos entre ellas. El coeficiente $\alpha^2$ es constante, es decir, no depende de $u$. Por tanto, la ecuación es **lineal**.

## Observaciones

La ecuación $\alpha^2 u_{xx} = u_t$ es la **ecuación de conducción del calor** (o de difusión) unidimensional. Es, además, **homogénea**: todos sus términos dependen de $u$ o de sus derivadas, sin ningún término independiente de la incógnita.
