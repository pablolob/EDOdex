---
title: "Boyce 6.1 Ejercicio 22"
exercise-id: boyce-c06-s01-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 22"
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

22. $y'' - 2y' + 2y = e^{-t}; \quad y(0) = 0, \quad y'(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = \frac{1}{5}e^{-t} - \frac{1}{5}e^{t}\cos t + \frac{7}{5}e^{t}\sin t, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s) = \mathcal{L}\{y(t)\}$. Con $y(0) = 0$ y $y'(0) = 1$,

$$
\mathcal{L}\{y''\} = s^2Y(s) - s\,y(0) - y'(0) = s^2Y(s) - 1,
\qquad
\mathcal{L}\{y'\} = sY(s) - y(0) = sY(s),
\qquad
\mathcal{L}\{e^{-t}\} = \frac{1}{s+1}.
$$

Al transformar la ecuación resulta

$$
s^2Y(s) - 1 - 2sY(s) + 2Y(s) = \frac{1}{s+1}.
$$

Se agrupan los términos en $Y(s)$ y se despeja:

$$
\left(s^2 - 2s + 2\right)Y(s) = 1 + \frac{1}{s+1} = \frac{s+2}{s+1},
\qquad
Y(s) = \frac{s+2}{(s+1)\left(s^2 - 2s + 2\right)}.
$$

El factor cuadrático es irreducible, pues $s^2 - 2s + 2 = (s-1)^2 + 1$. La descomposición en fracciones simples es

$$
\frac{s+2}{(s+1)\left(s^2 - 2s + 2\right)}
= \frac{1}{5}\cdot\frac{1}{s+1} + \frac{-s+8}{5\left(s^2 - 2s + 2\right)}.
$$

Para invertir el segundo término se completa el cuadrado y se separa la parte que corresponde a un coseno desplazado y la que corresponde a un seno:

$$
\frac{-s+8}{5\left((s-1)^2 + 1\right)}
= -\frac{1}{5}\cdot\frac{s-1}{(s-1)^2 + 1} + \frac{7}{5}\cdot\frac{1}{(s-1)^2 + 1}.
$$

Con los pares $\mathcal{L}\{e^{at}\cos bt\} = \dfrac{s-a}{(s-a)^2 + b^2}$ y $\mathcal{L}\{e^{at}\sin bt\} = \dfrac{b}{(s-a)^2 + b^2}$ con $a = 1$, $b = 1$, y por linealidad de la transformada inversa,

$$
y(t) = \frac{1}{5}e^{-t} - \frac{1}{5}e^{t}\cos t + \frac{7}{5}e^{t}\sin t.
$$

La solución satisface las condiciones iniciales:

$$
y(0) = \frac{1}{5} - \frac{1}{5} = 0,
\qquad
y'(t) = -\frac{1}{5}e^{-t} + \frac{6}{5}e^{t}\cos t + \frac{8}{5}e^{t}\sin t,
\quad
y'(0) = -\frac{1}{5} + \frac{6}{5} = 1.
$$

## Observaciones

La solución está definida y es continua para todo $t \ge 0$. El término $\frac{1}{5}e^{-t}$ es transitorio y decae cuando $t \to \infty$; los términos $\frac{1}{5}e^{t}(-\cos t + 7\sin t)$ provienen de las raíces $1 \pm i$ de la ecuación característica y determinan el comportamiento a largo plazo.

Como $-1$ no es raíz de la ecuación característica $r^2 - 2r + 2 = 0$, el término no homogéneo $e^{-t}$ no resuena y la solución particular es un múltiplo de $e^{-t}$.
