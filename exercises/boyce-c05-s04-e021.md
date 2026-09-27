---
title: "Boyce 5.4 Ejercicio 21"
exercise-id: boyce-c05-s04-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.4, ejercicio 21"
statement-status: pending-review
solution-status: open
source-images:
  - c05s04i02-p271.png
---

## Enunciado

**Singularidades en el infinito.** Las definiciones de punto ordinario y de punto singular regular que se dieron en las secciones precedentes son válidas sólo si el punto $x_0$ es finito. En trabajo más avanzado en las ecuaciones diferenciales a menudo es necesario analizar el punto en el infinito. Esto se lleva a cabo al efectuar el cambio de variable $\xi = 1/x$ y estudiar la ecuación resultante en $\xi = 0$. Demuestre que para la ecuación diferencial $P(x)y'' + Q(x)y' + R(x)y = 0$ el punto en el infinito es un punto ordinario si

$$\frac{1}{P(1/\xi)} \left[ \frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2} \right] \quad \text{y} \quad \frac{R(1/\xi)}{\xi^4 P(1/\xi)}$$

tienen desarrollos en serie de Taylor alrededor de $\xi = 0$. También demuestre que el punto en el infinito es un punto singular regular si por lo menos una de las funciones anteriores no tiene un desarrollo en serie de Taylor, pero que tanto

$$\frac{\xi}{P(1/\xi)} \left[ \frac{2P(1/\xi)}{\xi} - \frac{Q(1/\xi)}{\xi^2} \right] \quad \text{como} \quad \frac{R(1/\xi)}{\xi^2 P(1/\xi)}$$

sí tienen esos desarrollos.
