---
title: "Boyce 11.6 Ejercicio 8"
exercise-id: boyce-c11-s06-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.6, ejercicio 8"
statement-status: pending-review
solution-status: open
source-images:
  - c11s06i03-p694.png
  - c11s06i04-p695.png
---

## Enunciado

Considere el flujo del calor en un cilindro infinitamente largo de radio uno: $0 < r < 1$, $0 \le \theta < 2\pi$, $-\infty < z < \infty$. Suponga que la superficie del cilindro se mantiene a la temperatura cero y que la distribución inicial de temperaturas es una función sólo de la variable radial $r$. Entonces la temperatura $u$ es una función sólo de $r$ y $t$ y satisface la ecuación de conducción del calor
$$\alpha^2 [u_{rr} + (1/r)u_r] = u_t, \quad 0 < r < 1, \quad t > 0,$$
y las siguientes condiciones inicial y en la frontera:
$$\begin{aligned}u(r, 0) &= f(r), \quad 0 \le r \le 1, \\
u(1, t) &= 0, \quad t > 0.
\end{aligned}$$
Demuestre que
$$u(r, t) = \sum_{n=1}^\infty c_n J_0(\lambda_n r) e^{-\alpha^2 \lambda_n^2 t}$$
en donde $J_0(\lambda_n) = 0$. Encuentre una fórmula para los $c_n$.
