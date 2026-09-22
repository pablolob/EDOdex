---
title: "Boyce 10.3 Ejercicio 38"
exercise-id: boyce-c10-s03-e038
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.3, ejercicio 38"
statement-status: pending-review
solution-status: open
blocked: enunciado
blocked-detail: "FIGURA 10.4.6"
source-images:
  - c10s03i03-p596.png
---

## Enunciado

Suponga que $f$ se extiende hacia $(l, 2l]$ de manera arbitraria. A continuación extienda la función resultante hacia $(-2l, 0)$ como una función impar y en todas partes como una función periódica con periodo $4l$ (ver la figura 10.4.6). Demuestre que esta función tiene una serie de senos de Fourier en términos de las funciones $\sin(n\pi x/2l), n = 1, 2, 3, \dots$; es decir,
$$f(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{2l}\right),$$
en donde
$$b_n = \frac{1}{l} \int_{0}^{2l} f(x) \sin\left(\frac{n\pi x}{2l}\right) \, dx.$$
Esta serie converge a la función original sobre $(0, l)$.
