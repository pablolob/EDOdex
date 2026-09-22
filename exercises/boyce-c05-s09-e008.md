---
title: "Boyce 5.9 Ejercicio 8"
exercise-id: boyce-c05-s09-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisites:
  - transformadas.transformada-laplace
  - calculo-avanzado.integrales-impropias
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c05s09i01-p314.png
---

## Enunciado

Recuerde que $\cosh bt = (e^{bt} + e^{-bt})/2$ y $\operatorname{senh} bt = (e^{bt} - e^{-bt})/2$. En cada uno de los problemas 7 a 10, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

8. $\operatorname{senh} bt$

## Solución

$$
\mathcal{L}\{\sinh bt\} = \frac{b}{s^{2}-b^{2}}, \qquad s>|b|.
$$

## Resolución

La transformada de Laplace es lineal. Con la identidad exponencial del seno hiperbólico,

$$
\sinh bt = \frac{e^{bt}-e^{-bt}}{2},
$$

resulta

$$
\mathcal{L}\{\sinh bt\} = \frac{1}{2}\left(\mathcal{L}\{e^{bt}\} - \mathcal{L}\{e^{-bt}\}\right).
$$

Para una constante real $a$, la **definición integral** da

$$
\mathcal{L}\{e^{at}\} = \int_0^{\infty} e^{-st}e^{at}\,dt = \int_0^{\infty} e^{-(s-a)t}\,dt = \frac{1}{s-a}, \qquad s>a.
$$

Al aplicar con $a=b$ y con $a=-b$,

$$
\begin{aligned}
\mathcal{L}\{\sinh bt\}
&= \frac{1}{2}\left(\frac{1}{s-b} - \frac{1}{s+b}\right) \\
&= \frac{1}{2}\cdot\frac{(s+b)-(s-b)}{(s-b)(s+b)} \\
&= \frac{b}{s^{2}-b^{2}}.
\end{aligned}
$$

La integral converge cuando $s>b$ y $s>-b$ a la vez, es decir, $s>|b|$. La fórmula también cubre el caso $b=0$, donde $\sinh 0 = 0$.

## Observaciones

El resultado es análogo al de $\cosh bt$, cuya transformada es $s/(s^{2}-b^{2})$; ambas comparten la región de convergencia $s>|b|$. La transformada no está definida en $s=\pm b$, donde la integral diverge.
