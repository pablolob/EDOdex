---
title: "Zill Repaso C11 Ejercicio 4"
exercise-id: zill-c11-sr-e004
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 4"
statement-status: accepted
solution-status: draft
source-images:
  - c11sri01-p471.png
topics:
  - sturm-liouville
competencies:
  - analizar-espectralmente.funciones-propias
prerequisitos:
  - ecuaciones-diferenciales.condiciones-frontera
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

En los problemas 1-6 complete el espacio en blanco o concluya cierto o falso sin consultar el libro.

$y = 0$ nunca es una eigenfunción de un problema de Sturm-Liouville.

## Solución

La afirmación es **cierta**. La función $y = 0$ es la solución trivial del problema homogéneo y no satisface la definición de eigenfunción, que exige una solución no nula.

## Resolución

Un problema de Sturm-Liouville consta de la ecuación

$$
[r(x)y']' + [q(x) + \lambda p(x)]y = 0, \qquad a < x < b,
$$

junto con condiciones de frontera homogéneas en $x = a$ y en $x = b$. Una eigenfunción es, por definición, una solución no nula de ese problema para un valor del parámetro $\lambda$.

La función $y = 0$ satisface la ecuación diferencial, porque ambos miembros se anulan, y cumple cualquier condición de frontera homogénea evaluada en $y = 0$. Es la solución trivial del problema.

La definición de eigenfunción excluye la solución trivial. Si $y = 0$ se admitiera como eigenfunción, todo valor de $\lambda$ tendría asociada esa función y la noción de eigenvalor carecería de contenido. Por tanto, $y = 0$ nunca es una eigenfunción y la afirmación es cierta.

## Observaciones

El problema lineal homogéneo siempre admite la solución trivial. Excluirla de la colección de eigenfunciones es una convención de la definición, no una consecuencia de la ecuación. El mismo criterio por el que se exige una solución no nula reaparece en la determinación de eigenvalores.
