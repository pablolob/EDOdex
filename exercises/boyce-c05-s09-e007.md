---
title: "Boyce 5.9 Ejercicio 7"
exercise-id: boyce-c05-s09-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s09i01-p314.png
---

## Enunciado

Recuerde que $\cosh bt = (e^{bt} + e^{-bt})/2$ y $\operatorname{senh} bt = (e^{bt} - e^{-bt})/2$. En cada uno de los problemas 7 a 10, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

7. $\cosh bt$

## Solución

Al expresar $\cosh bt$ con exponenciales y aplicar linealidad,

$$
\mathcal{L}\{\cosh bt\} = \frac{s}{s^{2}-b^{2}}, \qquad s>|b|.
$$

## Resolución

La identidad $\cosh bt = (e^{bt}+e^{-bt})/2$ y la linealidad de la transformada de Laplace dan

$$
\mathcal{L}\{\cosh bt\}
= \frac{1}{2}\left(\mathcal{L}\{e^{bt}\} + \mathcal{L}\{e^{-bt}\}\right).
$$

El par básico de la tabla es

$$
\mathcal{L}\{e^{at}\} = \frac{1}{s-a}, \qquad s>a.
$$

Con $a=b$ y $a=-b$, respectivamente,

$$
\mathcal{L}\{\cosh bt\}
= \frac{1}{2}\left(\frac{1}{s-b} + \frac{1}{s+b}\right)
= \frac{1}{2}\cdot\frac{(s+b)+(s-b)}{s^{2}-b^{2}}
= \frac{1}{2}\cdot\frac{2s}{s^{2}-b^{2}}
= \frac{s}{s^{2}-b^{2}}.
$$

El resultado es válido cuando se cumplen $s>b$ y $s>-b$ a la vez, esto es, para $s>|b|$.

## Observaciones

### Método alternativo: definición integral

La transformada también se obtiene de la definición, sin invocar el par de la exponencial. Con $\cosh bt = (e^{bt}+e^{-bt})/2$,

$$
\mathcal{L}\{\cosh bt\}
= \frac{1}{2}\int_0^{\infty} e^{-st}\left(e^{bt}+e^{-bt}\right)dt
= \frac{1}{2}\left(\frac{1}{s-b}+\frac{1}{s+b}\right)
= \frac{s}{s^{2}-b^{2}},
$$

pues ambas integrales impropias convergen para $s>|b|$.

El caso $b=0$ reduce la fórmula a $\mathcal{L}\{1\}=1/s$, coherente con $\cosh 0 = 1$.
