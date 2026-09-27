---
title: "Zill Repaso C13 Ejercicio 13"
exercise-id: zill-c13-sr-e013
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 13"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El enunciado remite al Teorema 11.4.1, no escrito en el ejercicio ni disponible como referencia verificada."
source-images:
  - c13sri02-p532.png
---

## Enunciado

La función $u(x) = Y_0(\alpha a)J_0(\alpha x) - J_0(\alpha a)Y_0(\alpha x)$, $\alpha > 0$ es una solución de la ecuación paramétrica de Bessel
$$x^2\frac{d^2 u}{dx^2} + x\frac{du}{dx} + \alpha^2 x^2 u = 0$$
sobre el intervalo $[a, b]$. Si los eigenvalores $\lambda_n = \alpha_n^2$ se definen como las raíces positivas de la ecuación
$$Y_0(\alpha a)J_0(\alpha b) - J_0(\alpha a)Y_0(\alpha b) = 0,$$
demuestre que las funciones
$$u_m(x) = Y_0(\alpha_m a)J_0(\alpha_m x) - J_0(\alpha_m a)Y_0(\alpha_m x)$$
$$u_n(x) = Y_0(\alpha_n a)J_0(\alpha_n x) - J_0(\alpha_n a)Y_0(\alpha_n x)$$
son ortogonales respecto a la función de peso $p(x) = x$ sobre el intervalo $[a, b]$; esto es,
$$\int_a^b x u_m(x) u_n(x) \,dx = 0, \quad m \neq n.$$
[Sugerencia: Siga el procedimiento del Teorema 11.4.1.]
