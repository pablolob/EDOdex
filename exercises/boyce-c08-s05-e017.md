---
title: "Boyce 8.5 Ejercicio 17"
exercise-id: boyce-c08-s05-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.5, ejercicio 17"
statement-status: accepted
solution-status: open
source-images:
  - c08s05i03-p467.png
---

## Enunciado

En este problema se demuestra que la fórmula correctora de Milne que se da en el problema 15 es inestable para la ecuación diferencial lineal $y' = Ay$. El análisis es paralelo al del problema 16.
a) Demuestre que la solución de la ecuación diferencial es $y = ce^{At}$.
b) Demuestre que la ecuación en diferencias adecuada es
$$(1 - \alpha) y_{n+1} - 4\alpha y_n - (1 + \alpha) y_{n-1} = 0 \tag{i}$$
en donde $\alpha = Ah/3$.
c) En seguida, demuestre que $y_n = \lambda^n$ es una solución de la ecuación (i) si $\lambda$ es una raíz de
$$(1 - \alpha) \lambda^2 - 4\alpha\lambda - (1 + \alpha) = 0. \tag{ii}$$
d) En el límite $h \to 0$, lo cual implica que $\alpha \to 0$, demuestre que las raíces de la ecuación (ii) son $\lambda_1 = 1$ y $\lambda_2 = -1$. Observe que $|\lambda_1| = |\lambda_2| = 1$, y de donde, para valores pequeños de $h$ diferentes de cero una de las raíces puede tener valor absoluto mayor que uno.
e) Resuelve la ecuación cuadrática (ii) y demuestre que si $h$ es pequeño, entonces $\lambda_1 \simeq 1 + Ah$ y $\lambda_2 \simeq -(1 - Ah/3)$. Luego demuestre que cuando $h \to 0$ con $t_n = nh$, la solución de la ecuación en diferencias (i) es
$$y_n = c_1 e^{At_n} + c_2 (-1)^n e^{-At_n/3}. \tag{iii}$$
El primer término de la ecuación (iii) se aproxima a la solución verdadera de la ecuación diferencial. El segundo término, la solución extraña correspondiente a $\lambda_2$, decae si $A > 0$ pero crece si $A < 0$. Por tanto, es posible que la fórmula correctora de Milne sea inestable. Los métodos cuya estabilidad (inestabilidad) depende del signo de $A$ se dice que son débilmente estables. Finalmente, se observa que $|\lambda_2| > 1$ para $A < 0$.
