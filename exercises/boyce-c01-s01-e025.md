---
title: "Boyce 1.1 Ejercicio 25"
exercise-id: boyce-c01-s01-e025
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 25"
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

25. $u_{xxxx} + 2u_{xxyy} + u_{yyyy} = 0$

## Solución

La ecuación es de **cuarto orden** y **lineal**.

## Resolución

La derivada de mayor orden presente es de orden 4: los términos $u_{xxxx}$ y $u_{yyyy}$ son derivadas parciales cuartas de $u$. Por tanto, la ecuación es de **cuarto orden**.

Una ecuación diferencial parcial es lineal si la variable dependiente $u$ y todas sus derivadas parciales aparecen únicamente a la primera potencia y no se multiplican entre sí, con coeficientes que dependen solo de las variables independientes. En la ecuación dada, cada término ($u_{xxxx}$, $2u_{xxyy}$ y $u_{yyyy}$) es lineal en $u$: los coeficientes $1$, $2$ y $1$ son constantes, y $u$ no aparece elevada a potencias distintas de uno ni multiplicada por sus derivadas. Por tanto, la ecuación es **lineal**.

## Observaciones

La ecuación es, además, **homogénea**, porque el miembro derecho es idénticamente nulo. La homogeneidad no interviene en la clasificación de linealidad: esta depende solo de cómo aparecen la variable dependiente $u$ y sus derivadas parciales.
