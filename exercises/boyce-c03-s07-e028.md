---
title: "Boyce 3.7 Ejercicio 28"
exercise-id: boyce-c03-s07-e028
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.7, ejercicio 28"
statement-status: accepted
solution-status: open
source-images:
  - c03s07i03-p196.png
---

## Enunciado

El método de reducción de orden (sección 3.5) también puede aplicarse para la ecuación no homogénea

$$y'' + p(x)y' + q(x)y = g(x), \quad \text{(i)}$$

siempre que se conozca una solución $y_1$ de la ecuación homogénea correspondiente. Haga $y = v(x)y_1(x)$ y demuestre que $y$ satisface la ecuación (i) si $v$ es una solución de

$$y_1(x)v'' + [2y_1'(x) + p(x)y_1(x)]v' = g(x). \quad \text{(ii)}$$

La ecuación (ii) es una ecuación lineal de primer orden para $v'$. Si se resuelve esta ecuación, se integra el resultado y luego se multiplica por $y_1(x)$ se llega a la solución general de (i).
