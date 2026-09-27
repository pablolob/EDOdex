---
title: "Boyce 6.6 Ejercicio 22"
exercise-id: boyce-c06-s06-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.6, ejercicio 22"
statement-status: pending-review
solution-status: open
blocked: enunciado
blocked-detail: "Figura 6.6.2: configuración geométrica de la tautócrona, con el arco C y el punto P(a,b)."
source-images:
  - c06s06i03-p351.png
  - c06s06i04-p352.png
---

## Enunciado

*22. La tautócrona. Un problema de interés en la historia de las matemáticas es encontrar la tautócrona: la curva por la cual una partícula se deslizará libremente solo bajo la acción de la gravedad y llegará a la parte inferior de esa curva en el mismo tiempo, sin importar su punto de partida sobre ella. Este problema surgió en la construcción de un reloj de péndulo cuyo periodo es independiente de la amplitud de su movimiento. La tautócrona fue descubierta por Christian Huygens (1629-1695) en 1673 mediante métodos geométricos y posteriormente Leibniz y Jakob Bernoulli lo hicieron aplicando argumentos analíticos. La solución de Bernoulli (en 1690) fue una de las primeras ocasiones en que se resolvió de manera explícita una ecuación diferencial.

En la figura 6.6.2 se muestra la configuración geométrica. El punto de partida $P(a,b)$ está unido al punto terminal $(0,0)$ por el arco $C$. La longitud del arco $s$ se mide desde el origen y $f(y)$ denota la razón de cambio de $s$ con respecto a $y$:
$$f(y)=\frac{ds}{dy}=\left[1+\left(\frac{dx}{dy}\right)^2\right]^{1/2}. \tag{i}$$
Por el principio de conservación de la energía se deduce que el tiempo $T(b)$ necesario para que una partícula se deslice de $P$ al origen es
$$T(b)=\frac{1}{\sqrt{2g}}\int_0^b\frac{f(y)}{\sqrt{b-y}}\,dy. \tag{ii}$$

a) Suponga que $T(b)=T_0$, una constante, para cada $b$. Al tomar la transformada de Laplace de la ecuación (ii) en este caso y aplicar el teorema de convolución, demuestre que
$$F(s)=\sqrt{\frac{2g}{\pi}}\,\frac{T_0}{\sqrt{s}}. \tag{iii}$$
En seguida, demuestre que
$$f(y)=\sqrt{\frac{2gT_0}{\pi}}\,\frac{1}{\sqrt{y}}. \tag{iv}$$
Sugerencia: ver el problema 27 de la sección 6.1.

b) Si se combinan las ecuaciones (i) y (iv), demuestre que
$$\frac{dx}{dy}=\sqrt{\frac{2\alpha-y}{y}}, \tag{v}$$
en donde $\alpha=\frac{gT_0^2}{\pi^2}$.

c) Aplique la sustitución $y=2\alpha\sen^2(\theta/2)$ para resolver la ecuación (v) y demuestre que
$$x=\alpha(\theta+\sen\theta),\qquad y=\alpha(1-\cos\theta). \tag{vi}$$
Las ecuaciones (vi) pueden identificarse como las ecuaciones paramétricas de una cicloide. Por tanto, la tautócrona es un arco de cicloide.
