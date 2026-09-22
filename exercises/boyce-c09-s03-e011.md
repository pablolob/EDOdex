---
title: "Boyce 9.3 Ejercicio 11"
exercise-id: boyce-c09-s03-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.3, ejercicio 11"
statement-status: accepted
solution-status: open
source-images:
  - c09s03i02-p521.png
---

## Enunciado

Considere el sistema (3) del ejemplo 1 del texto. Recuerde que este sistema tiene un punto crítico asintóticamente estable en $(0.5, 0.5)$, correspondiente a la coexistencia estable de las dos especies de poblaciones. Suponga ahora que hay inmigración o emigración a las razones constantes $\delta a$ y $\delta b$, para las especies $x$ y $y$, respectivamente. En este caso, las ecuaciones (3) se sustituyen por
$$
\begin{aligned}
dx/dt &= x(1 - x - y) + \delta a, \\
dy/dt &= y(0.75 - y - 0.5x) + \delta b.
\end{aligned}
$$
(i)
La pregunta es qué efecto tiene esto en la ubicación del punto de equilibrio estable.
a) Para encontrar el nuevo punto crítico es necesario resolver las ecuaciones
$$
\begin{aligned}
x(1 - x - y) + \delta a &= 0, \\
y(0.75 - y - 0.5x) + \delta b &= 0.
\end{aligned}
$$
(ii)
Una manera de proceder es si supone que $x$ y $y$ se dan en series de potencias en el parámetro $\delta$; de este modo,
$$x = x_0 + x_1 \delta + \cdots, \quad y = y_0 + y_1 \delta + \cdots.$$
(iii)
Sustituya las ecuaciones (iii) en las (ii) y agrupe los términos según las potencias de $\delta$.
b) A partir de los términos constantes (los términos que no contienen $\delta$), demuestre que $x_0 = 0.5$ y $y_0 = 0.5$, confirmando así que, sin inmigración o emigración del punto crítico es $(0.5, 0.5)$.
c) A partir de los términos lineales en $\delta$ demuestre que
$$x_1 = 4a - 4b, \quad y_1 = -2a + 4b.$$
(iv)
d) Suponga que $a > 0$ y $b > 0$, de modo que en las dos especies se tiene inmigración. Demuestre que la solución de equilibrio resultante puede representar un aumento en las dos poblaciones, o un aumento en una y una disminución en la otra. Explique intuitivamente por qué este resultado es razonable.
