---
title: "Boyce 6.1 Ejercicio 16"
exercise-id: boyce-c06-s01-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

16. $y'' + 2y' + 5y = 0; \quad y(0) = 2, \quad y'(0) = -1$

## Solución

$$
y(t) = e^{-t}\left(2\cos(2t) + \frac{1}{2}\sin(2t)\right), \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Las transformadas de las derivadas, incorporando las condiciones iniciales, son

$$
\begin{aligned}
\mathcal{L}\{y'\} &= sY(s) - y(0) = sY(s) - 2, \\
\mathcal{L}\{y''\} &= s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - 2s + 1.
\end{aligned}
$$

Al sustituir en la ecuación y agrupar los términos con $Y(s)$ resulta

$$
\left(s^2 + 2s + 5\right)Y(s) - 2s - 3 = 0,
$$

de donde

$$
Y(s) = \frac{2s+3}{s^2+2s+5}.
$$

El denominador se escribe como un cuadrado completo, $s^2+2s+5 = (s+1)^2 + 4$, y el numerador se ajusta a esa forma, $2s+3 = 2(s+1) + 1$:

$$
Y(s) = \frac{2(s+1)+1}{(s+1)^2+4}
= 2\,\frac{s+1}{(s+1)^2+4} + \frac{1}{2}\,\frac{2}{(s+1)^2+4}.
$$

La inversión emplea los pares con traslación, con $a=-1$ y $b=2$:

$$
\mathcal{L}^{-1}\!\left\{\frac{s+1}{(s+1)^2+4}\right\} = e^{-t}\cos(2t),
\qquad
\mathcal{L}^{-1}\!\left\{\frac{2}{(s+1)^2+4}\right\} = e^{-t}\sin(2t).
$$

Por linealidad de la transformada inversa,

$$
y(t) = 2e^{-t}\cos(2t) + \frac{1}{2}e^{-t}\sin(2t), \qquad t \ge 0.
$$

## Observaciones

El polinomio característico de la ecuación es $s^2+2s+5$, con raíces $-1 \pm 2i$. La parte real negativa fija el decaimiento $e^{-t}$ y la parte imaginaria la oscilación de frecuencia $2$, en concordancia con la solución obtenida.

### Método alternativo: coeficientes constantes

La ecuación es lineal homogénea con coeficientes constantes, de modo que también puede resolverse con la ecuación característica: las raíces $-1 \pm 2i$ dan la solución general $y = e^{-t}(C_1\cos(2t) + C_2\sin(2t))$, y las condiciones iniciales $y(0)=2$, $y'(0)=-1$ fijan $C_1 = 2$ y $C_2 = 1/2$.
