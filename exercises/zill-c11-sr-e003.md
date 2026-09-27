---
title: "Zill Repaso C11 Ejercicio 3"
exercise-id: zill-c11-sr-e003
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
competencies:
  - clasificar.paridad
  - resolver-series.serie-cosenos
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c11sri01-p471.png
---

## Enunciado

En los problemas 1-6 complete el espacio en blanco o concluya cierto o falso sin consultar el libro.

Para desarrollar $f(x) = |x| + 1$, $-\pi < x < \pi$ en una serie trigonométrica adecuada, se usaría una serie ______.

## Solución

Se usaría una **serie de cosenos** (serie de Fourier en cosenos):

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos nx.
$$

## Resolución

La función

$$
f(x)=|x|+1
$$

es **par**, porque el valor absoluto y la función constante lo son:

$$
f(-x)=|-x|+1=|x|+1=f(x).
$$

El intervalo $(-\pi,\pi)$ es simétrico respecto al origen. En una función par el producto $f(x)\sin nx$ es impar, de modo que su integral sobre $(-\pi,\pi)$ se anula:

$$
b_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin nx\,dx=0,\qquad n\ge 1.
$$

Solo sobreviven el término constante y los términos en coseno, $a_n\cos nx$, cuyo producto con $f$ es par. Por tanto, la serie trigonométrica adecuada es la **serie de cosenos**.

## Observaciones

La serie en cosenos de $f$ sobre $(-\pi,\pi)$ coincide con el desarrollo de la extensión par de $f$ restringida a $[0,\pi]$. Si $f$ hubiera sido impar, se habría usado la serie en senos.
