---
title: "Boyce 7.4 Ejercicio 30"
exercise-id: boyce-c07-s04-e030
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.4, ejercicio 30"
statement-status: accepted
solution-status: open
source-images:
  - c07s04i04-p398.png
---

## Enunciado

Circuitos eléctricos. Los problemas 30 y 31 están relacionados con el circuito eléctrico descrito por el sistema de ecuaciones diferenciales deducido en el problema 20 de la sección 7.1:

$$\frac{d}{dt}\begin{pmatrix} I \\ V \end{pmatrix} = \begin{pmatrix} -\frac{R_1}{L} & -\frac{1}{L} \\ \frac{1}{C} & -\frac{1}{CR_2} \end{pmatrix} \begin{pmatrix} I \\ V \end{pmatrix} \tag{i}$$

30. a) Encuentre la solución general de la ecuación (i), si $R_1 = 1\text{ ohm}$, $R_2 = \frac{2}{3}\text{ ohm}$, $L = 2\text{ henry}$ y $C = \frac{2}{3}\text{ farad}$.
b) Demuestre que $I(t) \to 0$ y $V(t) \to 0$ cuando $t \to \infty$, sin importar los valores iniciales $I(0)$ y $V(0)$.
