---
title: "Boyce 5.7 Ejercicio 4"
exercise-id: boyce-c05-s07-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - clasificar.punto-ordinario
  - clasificar.punto-singular-regular
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s07i01-p290.png
---

## Enunciado

En cada uno de los problemas 1 a 12, halle todos los puntos singulares regulares de la ecuación diferencial dada. Determine la ecuación indicial y los exponentes de la singularidad en cada punto singular regular.

4. $y'' + 4xy' + 6y = 0$

## Solución

La ecuación no tiene puntos singulares regulares ni, de hecho, ningún punto singular. En la forma estándar

$$
y''+p(x)y'+q(x)y=0,
\qquad p(x)=4x,
\qquad q(x)=6,
$$

los coeficientes $p$ y $q$ son polinomios, analíticos en todo $\mathbb{R}$. Todo punto es un punto ordinario. No hay, por tanto, ecuación indicial ni exponentes de la singularidad que determinar.

## Resolución

Se escribe la ecuación en la forma estándar $y''+p(x)y'+q(x)y=0$. El coeficiente de $y''$ es $1$, que no se anula en ningún punto, de modo que la división es válida para todo $x$ y no hay que separar ningún caso:

$$
p(x)=4x,
\qquad
q(x)=6.
$$

Un punto $x_0$ es singular si $p$ o $q$ dejan de ser analíticas en $x_0$. Las funciones $p(x)=4x$ y $q(x)=6$ son polinomios, y todo polinomio coincide con su serie de Taylor con radio de convergencia infinito; en consecuencia, son analíticas en todo $\mathbb{R}$. No existe ningún punto singular.

Como el conjunto de puntos singulares es vacío, el conjunto de puntos singulares regulares también lo es. La pregunta por la ecuación indicial y los exponentes de la singularidad es vacua: ambos conceptos se definen únicamente en un punto singular regular y en esta ecuación no hay ninguno.

## Observaciones

El enunciado se refiere a los puntos singulares finitos. Al ser todos los coeficientes analíticos en $\mathbb{R}$, toda solución en serie de potencias alrededor de cualquier punto converge en todo $\mathbb{R}$. El punto en el infinito no forma parte de la pregunta.

El error habitual en este ejercicio es buscar ceros del coeficiente de $y''$ o construir una ecuación indicial por rutina. Aquí el coeficiente de $y''$ es $1$ y no se anula, así que no aparece ningún candidato a punto singular y no hay indicial que plantear.
