---
title: "Boyce 8.1 Ejercicio 7"
exercise-id: boyce-c08-s01-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.1, ejercicio 7"
statement-status: accepted
solution-status: open
source-images:
  - c08s01i01-p441.png
---

## Enunciado

Considere el problema con valor inicial

$$y' = \cos 5\pi t, \quad y(0) = 1$$

a) Determine la solución exacta $y = \phi(t)$ y trace una gráfica de $y = \phi(t)$ para $0 \le t \le 1$. Use una escala para la ordenada de modo que $1/5\pi$ mida alrededor de $5\text{ pulg}$.

b) Determine valores aproximados de $\phi(t)$ en $t = 0.2, 0.4 \text{ y } 0.6$, aplicando el método de Euler con $h = 0.2$. Trace una gráfica con línea discontinua para la solución aproximada y compárela con la gráfica de la solución exacta.

c) Repita el cálculo del inciso b) para $0 \le t \le 0.4$, pero tome $h = 0.1$.

d) Demuestre mediante el cálculo del error local por truncamiento que ninguno de estos tamaños de paso es suficientemente pequeño. Determine el valor de $h$ para asegurar que el error local por truncamiento sea menor que 0.05 en todo el intervalo $0 \le t \le 1$. Que se requiera un valor pequeño de $h$ resulta del hecho de que más $\phi''(t)$ es grande o, en términos generales, la solución es considerablemente oscilatoria.
