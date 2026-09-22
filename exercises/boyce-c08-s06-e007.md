---
title: "Boyce 8.6 Ejercicio 7"
exercise-id: boyce-c08-s06-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.6, ejercicio 7"
statement-status: accepted
solution-status: open
source-images:
  - c08s06i01-p470.png
---

## Enunciado

Considere el problema ejemplo $x' = x - 4y$, $y' = -x + y$ con las condiciones iniciales $x(0) = 1$ y $y(0) = 0$. Aplique el método de Runge-Kutta para resolver este problema sobre el intervalo $0 \le t \le 1$. Empiece con $h = 0.2$ y, a continuación repita el cálculo con tamaños de paso $h = 0.1, 0.05, \dots$, cada una igual a la mitad del tamaño del paso anterior. Continúe el proceso hasta que los cinco primeros dígitos de la solución en $t = 1$ no se alteren para los tamaños sucesivos de paso. Determine si estos dígitos son exactos al compararlos con la solución exacta dada en las ecuaciones (10) del texto.
