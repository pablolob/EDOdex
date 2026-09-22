---
title: "Boyce 11.5 Ejercicio 9"
exercise-id: boyce-c11-s05-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.5, ejercicio 9"
statement-status: accepted
solution-status: open
source-images:
  - c11s05i04-p695.png
---

## Enunciado

En las coordenadas esféricas $\rho, \theta, \phi$ ($\rho > 0, 0 \le \theta < 2\pi, 0 \le \phi \le \pi$) definidas por las ecuaciones
$$x = \rho \cos\theta \sin\phi, \quad y = \rho \sin\theta \sin\phi, \quad z = \rho \cos\phi,$$
la ecuación de Laplace toma la forma
$$\rho^2 u_{\rho\rho} + 2\rho u_\rho + (\csc^2\phi) u_{\theta\theta} + u_{\phi\phi} + (\cot\phi) u_\phi = 0.$$
a) Demuestre que si $u(\rho, \theta, \phi) = P(\rho)\Theta(\theta)\Phi(\phi)$, entonces $P$, $\Theta$ y $\Phi$ satisfacen ecuaciones diferenciales ordinarias de la forma
$$\rho^2 P'' + 2\rho P' - \mu^2 P = 0,$$
$$\Theta'' + \lambda^2 \Theta = 0,$$
$$(\sin^2\phi) \Phi'' + (\sin\phi \cos\phi) \Phi' + (\mu^2 \sin^2\phi - \lambda^2) \Phi = 0.$$
La primera de estas ecuaciones es del tipo de Euler, mientras que la tercera está relacionada con la ecuación de Legendre.
b) Demuestre que si $u(\rho, \theta, \phi)$ es independiente de $\theta$, entonces la primera ecuación del inciso a) permanece sin cambio, la segunda se omite y la tercera queda
$$(\sin^2\phi) \Phi'' + (\sin\phi \cos\phi) \Phi' + \mu^2 \Phi = 0.$$
c) Demuestre que si se define una nueva variable independiente $s$ por $s = \cos\phi$, entonces la ecuación para $\Phi$ del inciso b) queda
$$(1 - s^2) \frac{d^2\Phi}{ds^2} - 2s \frac{d\Phi}{ds} + \mu^2 \Phi = 0, \quad -1 \le s \le 1.$$
Observe que ésta es la ecuación de Legendre.
