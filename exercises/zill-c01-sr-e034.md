---
title: "Zill Repaso C1 Ejercicio 34"
exercise-id: zill-c01-sr-e034
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 34"
topics:
  - fundamentos
competencies:
  - verificar.sustitucion-directa
  - determinar.dominio
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 31 a 34.**

En los problemas 31 a 34, verifique que la expresión indicada es una solución implícita de la ecuación diferencial dada.

34. $(1 - xy)\,y' = y^2$; $\quad y = e^{xy}$

## Solución

La relación $y = e^{xy}$ es una **solución implícita** de la ecuación diferencial.

## Resolución

Se deriva implícitamente $y = e^{xy}$ respecto de $x$, considerando $y$ como función de $x$. Por la regla de la cadena:

$$
y' = e^{xy}\cdot\frac{d}{dx}[xy] = e^{xy}\,(y + xy').
$$

Como $e^{xy} = y$ (de la propia relación), se obtiene:

$$
y' = y\,(y + xy') = y^{2} + xy\,y'.
$$

Se agrupan los términos que contienen $y'$:

$$
y' - xy\,y' = y^{2} \quad\Longrightarrow\quad y'(1 - xy) = y^{2},
$$

que es exactamente la ecuación diferencial dada.

Por tanto, la relación $y = e^{xy}$ satisface la ecuación diferencial en todo punto donde la derivación implícita sea válida, es decir, donde $y$ esté definida como función derivable de $x$ a partir de la relación.

## Observaciones

Aunque la expresión $y = e^{xy}$ tiene apariencia explícita, la variable $y$ aparece también en el exponente del miembro derecho, por lo que se trata de una solución implícita. La verificación por derivación implícita aprovecha la igualdad $e^{xy} = y$ para simplificar el proceso. Esta relación no puede despejarse de manera explícita para $y$ en términos de funciones elementales.

