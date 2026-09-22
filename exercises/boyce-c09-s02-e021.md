---
title: "Boyce 9.2 Ejercicio 21"
exercise-id: boyce-c09-s02-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.2, ejercicio 21"
statement-status: accepted
solution-status: open
source-images:
  - c09s02i03-p506.png
---

## Enunciado

En este problema se dan algunos de los detalles del análisis para trazar las trayectorias del péndulo no amortiguado del problema 20. Demuestre al eliminar $t$, que la ecuación de las trayectorias pueden escribirse como
$$\frac{1}{2}y^2 + k^2(1 - \cos x) = E.$$
Para descubrir el significado de la constante $E$, observe que $\frac{1}{2}y^2 = \frac{1}{2}(dx/dt)^2 = \frac{1}{2}(d\theta/dt)^2$ es proporcional a la energía cinética del péndulo. También, $k^2(1 - \cos x) = \int_0^x k^2 \sin s\,ds$ es proporcional a la energía potencial del péndulo, debida a la fuerza de la gravedad. Por tanto, la constante $E$ es la "energía" del movimiento. Esta es constante a lo largo de una trayectoria (durante el curso del movimiento) y queda determinada por los valores iniciales de $x$ y $y$.
Al trazar las trayectorias es necesario considerar solamente el intervalo $-\pi < x < \pi$, ya que la ecuación es periódica en $x$, con periodo $2\pi$. Para $E = 2k^2$, demuestre que $y = \pm 2k \cos \frac{x}{2}$ y trace estas trayectorias. Observe que las trayectorias entran o salen de los puntos silla inestables en $(\pm \pi, 0)$. Determine la dirección del movimiento sobre cada trayectoria al aplicar las ecuaciones diferenciales dadas en el problema 20.
Es posible demostrar que las trayectorias son curvas cerradas para $E < 2k^2$ y que no son cerradas para $E > 2k^2$. Aquí no se abordarán estos detalles, pero en la figura 9.3.6 se da un esquema de las trayectorias para un péndulo no amortiguado. Las trayectorias para $E < 2k^2$ corresponden a movimientos periódicos al rededor del centro, y las trayectorias para $E > 2k^2$ corresponden a movimientos arremolinados.
