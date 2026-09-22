---
title: "Boyce 6.1 Ejercicio 21"
exercise-id: boyce-c06-s01-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

21. $y'' - 2y' + 2y = \cos t; \quad y(0) = 1, \quad y'(0) = 0$

## Solución

$$
y(t) = \frac{1}{5}\cos t - \frac{2}{5}\sin t + \frac{4}{5}e^{t}\cos t - \frac{2}{5}e^{t}\sin t, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Las transformadas de las derivadas son

$$
\begin{aligned}
\mathcal{L}\{y'\} &= sY(s) - y(0) = sY(s) - 1, \\
\mathcal{L}\{y''\} &= s^{2}Y(s) - s\,y(0) - y'(0) = s^{2}Y(s) - s,
\end{aligned}
$$

y la del miembro derecho es $\mathcal{L}\{\cos t\} = \dfrac{s}{s^{2}+1}$. La ecuación transformada resulta

$$
s^{2}Y(s) - s - 2\left(sY(s) - 1\right) + 2Y(s) = \frac{s}{s^{2}+1}.
$$

Al agrupar los términos en $Y(s)$,

$$
\left(s^{2} - 2s + 2\right)Y(s) = \frac{s}{s^{2}+1} + s - 2,
$$

de donde

$$
Y(s) = \frac{\dfrac{s}{s^{2}+1} + s - 2}{s^{2} - 2s + 2}
= \frac{s^{3} - 2s^{2} + 2s - 2}{\left(s^{2}+1\right)\left(s^{2}-2s+2\right)}.
$$

Se descompone en fracciones parciales con denominadores irreducibles:

$$
Y(s) = \frac{As + B}{s^{2}+1} + \frac{Cs + D}{s^{2}-2s+2}.
$$

Al multiplicar por el denominador común,

$$
(As+B)\left(s^{2}-2s+2\right) + (Cs+D)\left(s^{2}+1\right) = s^{3} - 2s^{2} + 2s - 2.
$$

La comparación de coeficientes conduce al sistema

$$
\begin{aligned}
A + C &= 1, \\
-2A + B + D &= -2, \\
2A - 2B + C &= 2, \\
2B + D &= -2,
\end{aligned}
$$

cuya solución es $A = \dfrac{1}{5}$, $B = -\dfrac{2}{5}$, $C = \dfrac{4}{5}$ y $D = -\dfrac{6}{5}$. Por tanto,

$$
Y(s) = \frac{\frac{1}{5}s - \frac{2}{5}}{s^{2}+1} + \frac{\frac{4}{5}s - \frac{6}{5}}{s^{2}-2s+2}.
$$

El segundo denominador se escribe como $s^{2}-2s+2 = (s-1)^{2}+1$, y su numerador se ajusta a esa forma:

$$
\frac{\frac{4}{5}s - \frac{6}{5}}{(s-1)^{2}+1}
= \frac{4}{5}\cdot\frac{s-1}{(s-1)^{2}+1} - \frac{2}{5}\cdot\frac{1}{(s-1)^{2}+1}.
$$

Se invierte término a término con los pares básicos y el primer teorema de traslación:

$$
\mathcal{L}^{-1}\!\left\{\frac{s}{s^{2}+1}\right\} = \cos t, \qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{s^{2}+1}\right\} = \sin t,
$$

$$
\mathcal{L}^{-1}\!\left\{\frac{s-1}{(s-1)^{2}+1}\right\} = e^{t}\cos t, \qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{(s-1)^{2}+1}\right\} = e^{t}\sin t.
$$

Por linealidad de la transformada inversa,

$$
y(t) = \frac{1}{5}\cos t - \frac{2}{5}\sin t + \frac{4}{5}e^{t}\cos t - \frac{2}{5}e^{t}\sin t.
$$

## Observaciones

La solución está definida y es continua para todo $t \ge 0$. La ecuación es lineal con coeficientes constantes y las condiciones iniciales determinan una solución única, sin soluciones singulares ni perdidas.

### Método alternativo: coeficientes indeterminados

También puede resolverse sin transformada. La ecuación homogénea tiene raíces características $r = 1 \pm i$, de modo que $y_c = e^{t}(C_1\cos t + C_2\sin t)$. Con la solución particular de prueba $y_p = a\cos t + b\sin t$ se obtiene $y_p = \frac{1}{5}(\cos t - 2\sin t)$; las condiciones iniciales fijan $C_1 = \frac{4}{5}$ y $C_2 = -\frac{2}{5}$, y se recupera la misma solución.
