---
title: "Boyce 11.5 Ejercicio 5"
exercise-id: boyce-c11-s05-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.5, ejercicio 5"
statement-status: accepted
solution-status: open
source-images:
  - c11s05i02-p693.png
  - c11s05i03-p694.png
---

## Enunciado

En las coordenadas cilíndricas circulares $r, \theta, z$ definidas por

$$x = r \cos \theta, \quad y = r \sin \theta, \quad z = z,$$

la ecuación de Laplace toma la forma

$$u_{rr} + (1/r)u_r + (1/r^2)u_{\theta\theta} + u_{zz} = 0.$$

a) Demuestre que si $u(r, \theta, z) = R(r)\Theta(\theta)Z(z)$, entonces $R$, $\Theta$ y $Z$ satisfacen las ecuaciones ordinarias

$$\begin{aligned}
r^2 R'' + rR' + (\lambda^2 r^2 - n^2)R &= 0, \
\Theta'' + n^2 \Theta &= 0, \
Z'' - \lambda^2 Z &= 0.
\end{aligned}$$

b) Demuestre que si $u(r, \theta, z)$ es independiente de $\theta$, entonces la primera ecuación del inciso a) queda

$$r^2 R'' + rR' + \lambda^2 r^2 R = 0,$$

la segunda se omite por completo y la tercera permanece sin cambio.
