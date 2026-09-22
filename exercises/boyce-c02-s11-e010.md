---
title: "Boyce 2.11 Ejercicio 10"
exercise-id: boyce-c02-s11-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.11, ejercicio 10"
statement-status: accepted
solution-status: open
source-images:
  - c02s11i02-p119.png
---

## Enunciado

Considere la sucesión $\phi_n(x) = 2nxe^{-nx^2}$, $0 \le x \le 1$.

a) Demuestre que $\lim_{n\to\infty} \phi_n(x) = 0$ para $0 \le x \le 1$ y, por lo tanto, que

$$\int_0^1 \lim_{n\to\infty} \phi_n(x) \,dx = 0.$$

b) Demuestre que $\int_0^1 2nxe^{-nx^2} \,dx = 1 - e^{-n}$ y, de donde, que

$$\lim_{n\to\infty} \int_0^1 \phi_n(x) \,dx = 1.$$

Este ejemplo demuestra que no necesariamente es cierto que

$$\lim_{n\to\infty} \int_a^b \phi_n(x) \,dx = \int_a^b \lim_{n\to\infty} \phi_n(x) \,dx,$$

aun cuando $\lim_{n\to\infty} \phi_n(x)$ exista y sea continuo.
