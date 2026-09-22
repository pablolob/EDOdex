---
title: "Boyce 10.3 Ejercicio 39"
exercise-id: boyce-c10-s03-e039
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.3, ejercicio 39"
statement-status: pending-review
solution-status: open
blocked: enunciado
blocked-detail: "FIGURA 10.4.7"
source-images:
  - c10s03i03-p596.png
---

## Enunciado

Suponga que $f$ se extiende primero hacia $(l, 2l]$, de modo que sea simétrica con respecto a $x = l$; es decir, de modo que satisfaga $f(2l - x) = f(x)$ para $0 \le x \le l$. Suponga que la función resultante se extiendende hacia $(-2l, 0)$ como una función impar y en todas partes como una función periódica con periodo $4l$ (ver la figura 10.4.7) como una función periódica con periodo $4l$. Demuestre que esta función tiene una serie de Fourier en términos de las funciones $\sin(\pi x/2l), \sin(3\pi x/2l), \sin(5\pi x/2l), \dots$; es decir,
$$f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{(2n - 1)\pi x}{2l}\right),$$
en donde
$$b_n = \frac{2}{l} \int_{0}^{l} f(x) \sin\left(\frac{(2n - 1)\pi x}{2l}\right) \, dx.$$
Esta serie converge a la función original sobre $(0, l)$.
