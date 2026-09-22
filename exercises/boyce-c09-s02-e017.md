---
title: "Boyce 9.2 Ejercicio 17"
exercise-id: boyce-c09-s02-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.2, ejercicio 17"
statement-status: accepted
solution-status: open
source-images:
  - c09s02i01-p504.png
  - c09s02i02-p505.png
---

## Enunciado

El teorema 9.3.2 no proporciona información sobre la estabilidad de un punto crítico de un sistema casi lineal, si ese punto es un centro del sistema lineal correspondiente. Que éste debe ser el caso se ilustra mediante los dos sistemas siguientes.
$$
\begin{aligned}
\text{(i) } \frac{dx}{dt} &= y + x(x^2 + y^2), \quad \frac{dy}{dt} = -x + y(x^2 + y^2); \\
\text{(ii) } \frac{dx}{dt} &= y - x(x^2 + y^2), \quad \frac{dy}{dt} = -x - y(x^2 + y^2)
\end{aligned}
$$
a) Demuestre que $(0, 0)$ es un punto crítico de cada sistema y, además, es un centro del sistema lineal correspondiente.
b) Demuestre que cada sistema es casi lineal.
c) Sea $r^2 = x^2 + y^2$ y observe que $x\,dx/dt + y\,dy/dt = r\,dr/dt$. Para el sistema (ii), demuestre que $dr/dt < 0$ y que $r \to 0$ cuando $t \to \infty$ y, por tanto, que el punto crítico es asintóticamente estable. Para el sistema (i), demuestre que la solución del problema con valor inicial para $r$, con $r = r_0$ en $t = 0$, se vuelve no acotada cuando $t \to 1/2r_0^2$ y, por tanto, que el punto crítico es inestable.
