---
title: "Boyce 10.7 Ejercicio 7"
exercise-id: boyce-c10-s07-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.7, ejercicio 7"
statement-status: accepted
solution-status: open
source-images:
  - c10s07i02-p643.png
---

## Enunciado

Considere la ecuación general lineal homogénea de segundo orden

$$P(x)y'' + Q(x)y' + R(x)y = 0. \quad \text{(i)}$$

Se busca un factor integrante $\mu(x)$ tal que, una vez que se multiplica la ecuación (i) por $\mu(x)$, la ecuación resultante se puede escribir en la forma

$$[\mu(x)P(x)y']' + \mu(x)R(x)y = 0. \quad \text{(ii)}$$

a) Al igualar los coeficientes de $y'$, demuestre que $\mu$ debe ser una solución de

$$P\mu' = (Q - P')\mu. \quad \text{(iii)}$$

b) Resuelva la ecuación (iii) y de esta manera demuestre que

$$\mu(x) = \frac{1}{P(x)} \exp \int_{x_0}^x \frac{Q(s)}{P(s)}\,ds. \quad \text{(iv)}$$

Compare este resultado con el del problema 27 de la sección 3.2.
