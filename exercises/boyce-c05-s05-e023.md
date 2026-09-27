---
title: "Boyce 5.5 Ejercicio 23"
exercise-id: boyce-c05-s05-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 23"
statement-status: pending-review
solution-status: open
source-images:
  - c05s05i02-p279.png
---

## Enunciado

**Transformación a una ecuación con coeficientes constantes.** La ecuación de Euler $x^2 y'' + \alpha x y' + \beta y = 0$ se puede reducir a una ecuación con coeficientes constantes mediante un cambio de la variable independiente. Sea $x = e^z$ o $z = \ln x$, y considere sólo el intervalo $x > 0$.

a) Demuestre que

$$\frac{dy}{dx} = \frac{1}{x}\frac{dy}{dz} \quad \text{y} \quad \frac{d^2 y}{dx^2} = \frac{1}{x^2}\frac{d^2 y}{dz^2} - \frac{1}{x^2}\frac{dy}{dz}$$

b) Demuestre que la ecuación de Euler queda

$$\frac{d^2 y}{dz^2} + (\alpha - 1)\frac{dy}{dz} + \beta y = 0$$

Si por $r_1$ y $r_2$ se denotan las raíces de $r^2 + (\alpha - 1)r + \beta = 0$, demuestre que

c) si $r_1$ y $r_2$ son reales y diferentes, entonces

$$y = c_1 e^{r_1 z} + c_2 e^{r_2 z} = c_1 x^{r_1} + c_2 x^{r_2}$$

d) si $r_1$ y $r_2$ son reales e iguales, entonces

$$y = (c_1 + c_2 z)e^{r_1 z} = (c_1 + c_2 \ln x)x^{r_1}$$

e) si $r_1$ y $r_2$ son complejos conjugados, $r_1 = \lambda + i\mu$, entonces

$$y = e^{\lambda z}[c_1 \cos(\mu z) + c_2 \sin(\mu z)] = x^\lambda [c_1 \cos(\mu \ln x) + c_2 \sin(\mu \ln x)]$$
