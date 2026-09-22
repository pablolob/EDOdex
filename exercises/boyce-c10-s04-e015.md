---
title: "Boyce 10.4 Ejercicio 15"
exercise-id: boyce-c10-s04-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.4, ejercicio 15"
statement-status: accepted
solution-status: open
source-images:
  - c10s04i03-p607.png
  - c10s04i04-p608.png
---

## Enunciado

Considere el problema
$$\begin{aligned}\alpha^2 u_{xx} &= u_t, \quad 0 < x < l, \quad t > 0 \\ u(0, t) &= 0, \quad u_x(l, t) + \gamma u(l, t) = 0, \quad t > 0 \quad \text{(i)} \\ u(x, 0) &= f(x), \quad 0 \le x \le l.\end{aligned}$$
a) Haga $u(x, t) = X(x)T(t)$ y demuestre que
$$\begin{aligned}X'' + \sigma X &= 0, \quad X(0) = 0, \quad X'(l) + \gamma X(l) = 0, \quad \text{(ii)} \\ T' + \sigma \alpha^2 T &= 0,\end{aligned}$$
en donde $\sigma$ es la constante de separación.
b) Suponga que $\sigma$ es real y demuestre que el problema (ii) no tiene soluciones no triviales si $\sigma \le 0$.
c) Si $\sigma > 0$, sea $\sigma = \lambda^2$, con $\lambda > 0$. Demuestre que el problema (ii) tiene soluciones no triviales sólo si $\lambda$ es una solución de la ecuación
$$\lambda \cos \lambda l + \gamma \sin \lambda l = 0. \quad \text{(iii)}$$
*d) Trace las gráficas de $y = \tan \lambda l$ y $y = -\lambda l / \gamma$, para $\lambda > 0$, en el mismo sistema de ejes y demuestre que la ecuación (iii) es satisfecha por una infinidad de valores positivos de $\lambda$; denote éstos por $\lambda_1, \lambda_2, \dots, \lambda_n, \dots$, en orden creciente.
*e) Determine el conjunto fundamental de soluciones de $u_n(x, t)$ correspondiente a los valores $\lambda_n$ hallados en el inciso d).
