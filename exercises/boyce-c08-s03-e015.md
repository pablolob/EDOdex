---
title: "Boyce 8.3 Ejercicio 15"
exercise-id: boyce-c08-s03-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.3, ejercicio 15"
statement-status: accepted
solution-status: open
source-images:
  - c08s03i02-p454.png
---

## Enunciado

Para deducir la regla de Simpson para la evaluación aproximada de la integral de $f(t)$, desde $t = 0$ hasta $t = h$, primero demuestre que
$$\int_0^h (At^2 + Bt + C)\,dt = \frac{Ah^3}{3} + \frac{Bh^2}{2} + Ch.$$
A continuación, elija las constantes $A$, $B$ y $C$ de modo que la parábola $y = At^2 + Bt + C$ pase por los puntos $[0, f(0)]$, $[h/2, f(h/2)]$ y $[h, f(h)]$. Aplique este polinomio para representar $f(t)$ aproximadamente sobre el intervalo $0 \le t \le h$, y sustituya $A$, $B$ y $C$ en la fórmula precedente para obtener
$$\int_0^h f(t)\,dt \cong \frac{h}{6}[f(0) + 4f(h/2) + f(h)].$$
Es posible demostrar que el error al aplicar esta fórmula es proporcional a $h^5$.
