---
title: "Boyce 7.5 Ejercicio 14"
exercise-id: boyce-c07-s05-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.5, ejercicio 14"
statement-status: accepted
solution-status: open
source-images:
  - c07s05i02-p404.png
  - c07s05i03-p405.png
---

## Enunciado

El circuito eléctrico que se muestra en la figura 7.6.5 se describe por el sistema de ecuaciones diferenciales
$$\frac{d}{dt}\binom{I}{V} = \begin{pmatrix} 0 & \frac{1}{L} \\ -\frac{1}{C} & -\frac{1}{RC} \end{pmatrix} \binom{I}{V}, \quad \text{(i)}$$
en donde $I$ es la corriente que pasa por la inductancia y $V$ es la caída de voltaje a través del capacitor. Estas ecuaciones diferenciales se dedujeron en el problema 18 de la sección 7.1.

a) Demuestre que los eigenvalues de la matriz de coeficientes son reales y diferentes si $L > 4R^2C$; demuestre que son conjugados complejos si $L < 4R^2C$.

b) Suponga que $R = 1\text{ ohm}$, $C = \frac{1}{2}\text{ farad}$ y $L = 1\text{ henry}$. Encuentre la solución general del sistema (i) en este caso.

c) Encuentre $I(t)$ y $V(t)$ si $I(0) = 2\text{ ampere}$ y $V(0) = 1\text{ volt}$.

d) Para el circuito del inciso b), determine los valores límite de $I(t)$ y $V(t)$ cuando $t \to \infty$. ¿Estos valores límite dependen de las condiciones iniciales?
