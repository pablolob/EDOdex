---
title: "Boyce 10.5 Ejercicio 12"
exercise-id: boyce-c10-s05-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.5, ejercicio 12"
statement-status: pending-review
solution-status: open
blocked: enunciado
blocked-detail: "figura 10.6.4"
source-images:
  - c10s05i03-p617.png
  - c10s05i04-p618.png
---

## Enunciado

Considere la ecuación de onda

$$a^2 u_{xx} = u_{tt}$$

en un medio infinito unidimensional, sujeta a las condiciones iniciales

$$u(x, 0) = f(x), \quad u_t(x, 0) = 0, \quad -\infty < x < \infty.$$

a) Use la forma de la solución obtenida en el problema 8 para demostrar que $\phi$ y $\psi$ deben satisfacer

$$\phi(x) + \psi(x) = f(x),$$

$$-\phi'(x) + \psi'(x) = 0.$$

b) Resuelva las ecuaciones del inciso a) para $\phi$ y $\psi$ y demuestre de este modo que

$$u(x, t) = \frac{1}{2}[f(x - at) + f(x + at)].$$

Esta forma de la solución la D'Alembert en 1746.
Sugerencia: observe que la ecuación $\psi'(x) = \phi'(x)$ se resuelva al elegir $\psi(x) = \phi(x) + c$.
c) Haga

$$f(x) = \begin{cases} 2, & -1 < x < 1 \\ 0, & \text{en caso contrario.} \end{cases}$$

Demuestre que

$$f(x - at) = \begin{cases} 2, & -1 + at < x < 1 + at \\ 0, & \text{en caso contrario.} \end{cases}$$

También determinar $f(x + at)$.
d) Trace la gráfica de la solución hallada en el inciso b), en $t = 0$, $t = 1/2a$, $t = 1/a$ y $t = 2/a$, y obtenga los resultados que se muestran en la figura 10.6.4. Observe que un desplazamiento inicial produce dos ondas que se mueven en direcciones opuestas alejándose de la ubicación original; cada onda consta de la mitad del desplazamiento inicial.
