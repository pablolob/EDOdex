---
title: "Boyce 11.3 Ejercicio 26"
exercise-id: boyce-c11-s03-e026
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 26"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i03-p677.png
  - c11s03i04-p678.png
---

## Enunciado

El método de desarrollo de eigenfunciones a menudo es útil para problemas no homogéneos relacionados con la ecuación de onda o sus generalizaciones. Considere el problema
$$r(x)u_{tt} = [p(x)u_x]_x - q(x)u + F(x, t), \quad \text{(i)}$$
$$u_x(0, t) - h_1u(0, t) = 0, \quad u_x(1, t) + h_2u(1, t) = 0, \quad \text{(ii)}$$
$$u(x, 0) = f(x), \quad u_t(x, 0) = g(x). \quad \text{(iii)}$$
Este problema puede surgir en conexión con generalizaciones de la ecuación del telégrafo (problema 12 de la sección 11.1) o de las vibraciones longitudinales de una barra elástica (problema 17 de la sección 11.2).
a) Haga $u(x, t) = X(x) T(t)$ en la ecuación homogénea correspondiente a la (i) y demuestre que $X(x)$ satisface las ecuaciones (28) y (29) del texto. Denote por $\lambda_n$ y $\phi_n(x)$ los eigenvalores y las eigenfunciones normalizadas de este problema.
b) Suponga que $u(x, t) = \sum_{n=1}^\infty b_n(t) \phi_n(x)$, y demuestre que los $b_n(t)$ deben satisfacer el problema con valor inicial
$$b_n''(t) + \lambda_n b_n(t) = \gamma_n(t), \quad b_n(0) = \alpha_n, \quad b_n'(0) = \beta_n,$$
en donde $\alpha_n$, $\beta_n$ y $\gamma_n(t)$ son los coeficientes del desarrollo de $f(x)$, $g(x)$ y $F(x, t)$ en términos de las eigenfunciones $\phi_1(x), \dots, \phi_n(x), \dots$.
