---
title: "Boyce 9.5 Ejercicio 7"
exercise-id: boyce-c09-s05-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.5, ejercicio 7"
statement-status: accepted
solution-status: open
source-images:
  - c09s05i02-p539.png
---

## Enunciado

Al introducir variables adimensionales adecuadas, el sistema de ecuaciones no lineales para el péndulo amortiguado [ecuaciones (17) de la sección 9.3] puede escribirse como
$$\dfrac{dx}{dt} = y, \quad \dfrac{dy}{dt} = -y - \sin x.$$
a) Demuestre que el origen es un punto crítico.
*b)* Demuestre que aunque $V(x, y) = x^2 + y^2$ es definida positiva, $\dot{V}(x, y)$ toma valores positivos como negativos en cualquier dominio que contenga al origen, por lo que $V$ no es una función de Liapunov.
*Sugerencia:* $x - \sin x > 0$ para $x > 0$ y $x - \sin x < 0$ para $x < 0$. Considere estos casos con $y$ positiva, pero lo suficientemente pequeña que pueda ignorarse $y^2$ en comparación con $y$.
c) Aplique la función de energía $V(x, y) = \frac{1}{2}y^2 + (1 - \cos x)$ mencionada en el problema 6 b) para demostrar que el origen es un punto crítico estable. Sin embargo, observe que aunque haya amortiguamiento y pueda esperarse que el origen sea asintóticamente estable, no es posible llegar a esta conclusión si se utiliza esta función de Liapunov.
*d)* Para demostrar la estabilidad asintótica es necesario construir una mejor función de Liapunov que la usada en el inciso c). Demuestre que $V(x, y) = \frac{1}{2}(x + y)^2 + x^2 + \frac{1}{2}y^2$ es esa función de Liapunov y concluya que el origen es un punto crítico asintóticamente estable.
*Sugerencia:* A partir de la fórmula de Taylor con residuo se concluye que $\sin x = x - \dfrac{x^3}{3!}$, en donde $\alpha$ depende de $x$ pero $0 < \alpha < 1$ para $-\pi/2 < x < \pi/2$. Entonces, al hacer $x = r \cos \theta$, $y = r \sin \theta$, demuestre que $\dot{V}(r \cos \theta, r \sin \theta) = -r^2[1 + h(r, \theta)]$, en donde $|h(r, \theta)| < 1$ si $r$ es suficientemente pequeña.
