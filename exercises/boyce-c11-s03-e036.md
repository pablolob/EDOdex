---
title: "Boyce 11.3 Ejercicio 36"
exercise-id: boyce-c11-s03-e036
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 36"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i07-p681.png
---

## Enunciado

Considere el problema con valores en la frontera
$$-\frac{d^2 y}{ds^2} = \delta(s - x), \quad y(0) = 0, \quad y(1) = 0,$$
en donde $s$ es la variable independiente, $s = x$ es un punto definido en el intervalo $0 < s < 1$, y $\delta$ es la función delta de Dirac (ver la sección 6.5). Demuestre que la solución de este problema es la función de Green $G(x, s)$ que se obtuvo en el problema 28.
Al resolver el problema dado, observe que $\delta(s - x) = 0$ en los intervalos $0 \le s < x$ y $x < s \le 1$. Observe además que $-\frac{dy}{ds}$ experimenta un salto de magnitud $1$ cuando $s$ pasa por el valor de $x$.
Este problema ilustra una propiedad general; a saber, que la función de Green $G(x, s)$ puede identificarse como la respuesta en el punto $s$ a un impulso unitario en el punto $x$. Un término no homogéneo más general $f$ sobre $0 \le x \le 1$ puede considerarse como un conjunto de impulsos, en donde $f(x)$ da la magnitud del impulso en el punto $x$. La solución de un problema con valores no homogéneos en la frontera en términos de una integral función de Green se puede interpretar como el resultado de suponer las respuestas al conjunto de impulsos representado por el término no homogéneo $f(x)$.
