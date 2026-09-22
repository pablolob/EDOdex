---
title: "Boyce 6.5 Ejercicio 17"
exercise-id: boyce-c06-s05-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.convolucion
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.convolucion
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s05i02-p350.png
---

## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

17. $y'' + 3y' + 2y = \cos \alpha t; \quad y(0) = 1, \ y'(0) = 0$

## Solución

La solución del problema con valor inicial, expresada mediante una integral de convolución, es

$$
y(t)=2e^{-t}-e^{-2t}+\int_0^t\left(e^{-(t-\tau)}-e^{-2(t-\tau)}\right)\cos\alpha\tau\,d\tau,\qquad t\ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace**. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con $y(0)=1$ y $y'(0)=0$,

$$
\mathcal{L}\{y'\}=sY(s)-1,\qquad \mathcal{L}\{y''\}=s^2Y(s)-s .
$$

Al transformar la ecuación y usar $\mathcal{L}\{\cos\alpha t\}=\dfrac{s}{s^2+\alpha^2}$,

$$
\left(s^2+3s+2\right)Y(s)-s-3=\frac{s}{s^2+\alpha^2}.
$$

Como $s^2+3s+2=(s+1)(s+2)$, se despeja

$$
Y(s)=\frac{s+3}{(s+1)(s+2)}+\frac{1}{(s+1)(s+2)}\cdot\frac{s}{s^2+\alpha^2}.
$$

El primer término proviene de las condiciones iniciales y se invierte por **fracciones parciales**:

$$
\frac{s+3}{(s+1)(s+2)}=\frac{2}{s+1}-\frac{1}{s+2},
\qquad
\mathcal{L}^{-1}\!\left\{\frac{s+3}{(s+1)(s+2)}\right\}=2e^{-t}-e^{-2t}.
$$

El segundo término es un producto de dos transformadas conocidas. Se identifican

$$
H(s)=\frac{1}{(s+1)(s+2)}=\frac{1}{s+1}-\frac{1}{s+2},
\qquad h(t)=e^{-t}-e^{-2t},
$$

$$
G(s)=\frac{s}{s^2+\alpha^2},\qquad g(t)=\cos\alpha t .
$$

Por el **teorema de convolución**, la transformada inversa del producto es la integral de convolución de los factores:

$$
\mathcal{L}^{-1}\{H(s)G(s)\}=(h*g)(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau
=\int_0^t\left(e^{-(t-\tau)}-e^{-2(t-\tau)}\right)\cos\alpha\tau\,d\tau .
$$

Al reunir los dos términos se obtiene la solución enunciada.

## Observaciones

La función $h(t)=e^{-t}-e^{-2t}$ es la respuesta al impulso del operador $y''+3y'+2y$; el término forzado es su convolución con $\cos\alpha t$. La solución es válida para todo $t\ge 0$ y todo $\alpha$ real, pues $\cos\alpha t$ no resuelve la ecuación homogénea.
