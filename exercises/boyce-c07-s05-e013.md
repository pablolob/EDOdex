---
title: "Boyce 7.5 Ejercicio 13"
exercise-id: boyce-c07-s05-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.5, ejercicio 13"
statement-status: accepted
solution-status: open
source-images:
  - c07s05i02-p404.png
---

## Enunciado

Considere el circuito eléctrico que se muestra en la figura 7.6.4. Suponga que $R_1 = R_2 = 4\text{ ohms}$, $C = \frac{1}{2}\text{ farad}$ y $L = 8\text{ henry}$.

a) Demuestre que este circuito se describe por el sistema de ecuaciones diferenciales
$$\frac{d}{dt}\binom{I}{V} = \begin{pmatrix} -\frac{1}{2} & -\frac{1}{8} \\ 2 & -\frac{1}{2} \end{pmatrix} \binom{I}{V}, \quad \text{(i)}$$
en donde $I$ es la corriente que pasa por la inductancia y $V$ es la caída de voltaje a través del capacitor. Sugerencia: ver el problema 18 de la sección 7.1.

b) Encuentre la solución general de las ecuaciones (i) en términos de funciones de valores reales.

c) Encuentre $I(t)$ y $V(t)$ si $I(0) = 2\text{ ampere}$ y $V(0) = 3\text{ volt}$.

d) Determine los valores límite de $I(t)$ y $V(t)$ cuando $t \to \infty$. ¿Estos valores límite dependen de las condiciones iniciales?
