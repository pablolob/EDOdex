---
title: "Boyce 9.2 Ejercicio 19"
exercise-id: boyce-c09-s02-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.2, ejercicio 19"
statement-status: accepted
solution-status: open
source-images:
  - c09s02i02-p505.png
---

## Enunciado

En este problema se muestra cómo cambios pequeños en los coeficientes de un sistema de ecuaciones lineales pueden afectar la naturaleza de un punto crítico cuando los eigenvalores son iguales. Considere el sistema

$$x' = \begin{pmatrix} -1 & 1 \\ 0 & -1 \end{pmatrix} x.$$

Demuestre que los eigenvalores son $r_1 = -1, r_2 = -1$ de modo que el punto crítico $(0, 0)$ es un nodo asintóticamente estable. En seguida, considere el sistema

$$x' = \begin{pmatrix} -1 & 1 \\ -\epsilon & -1 \end{pmatrix} x$$

en donde $\epsilon$ es arbitrariamente pequeño. Demuestre que si $\epsilon > 0$, entonces los eigenvalores son $-1 \pm i\sqrt{\epsilon}$, de modo que el nodo asintóticamente estable se convierte en un punto espiral asintóticamente estable. Si $\epsilon < 0$, entonces las raíces son $-1 \pm \sqrt{\epsilon}$, y el punto crítico sigue siendo un nodo asintóticamente estable.
