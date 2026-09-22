---
title: "Boyce 9.5 Ejercicio 11"
exercise-id: boyce-c09-s05-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.5, ejercicio 11"
statement-status: accepted
solution-status: open
source-images:
  - c09s05i04-p541.png
---

## Enunciado

En este problema se demuestra que la función de Liapunov que se construyó en el problema anterior también es una función de Liapunov para el sistema casi lineal (i). Es necesario demostrar que existe alguna región que contiene al origen en la que $\dot{V}$ es definida negativa.
a) Demuestre que
$$\dot{V}(x, y) = -(x^2 + y^2) + (2Ax + By)F_1(x, y) + (Bx + 2Cy)G_1(x, y).$$
b) Recuerde que $F_1(x, y) / r \to 0$ y $G_1(x, y) / r \to 0$ cuando $r = (x^2 + y^2)^{1/2} \to 0$. Esto significa que dado cualquier $\epsilon > 0$ existe un círculo $r = R$ alrededor del origen tal que para $0 \le r < R$, $|F_1(x, y)| < \epsilon r$ y $|G_1(x, y)| < \epsilon r$. Si $M$ es el máximo de $|2A|$, $|B|$ y $|2C|$, demuestre al introducir coordenadas polares, que puede elegirse $R$ de modo que $\dot{V}(x, y) < 0$ para $r < R$. Sugerencia: elija $\epsilon$ lo suficientemente pequeño en términos de $M$.
