---
title: "Boyce 6.5 Ejercicio 15"
exercise-id: boyce-c06-s05-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.convolucion
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.convolucion
  - transformadas.transformada-laplace
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s05i02-p350.png
---

## Enunciado

En cada uno de los problemas 12 a 19 exprese la solución del problema con valor inicial dado en términos de una integral de convolución.

15. $y'' + y' + \frac{5}{4}y = 1 - u_\pi(t); \quad y(0) = 1, \ y'(0) = -1$

## Solución

$$
y(t)=e^{-t/2}\left(\cos t-\frac{1}{2}\sin t\right)+\int_0^t e^{-(t-\tau)/2}\sin(t-\tau)\left[1-u_\pi(\tau)\right]d\tau .
$$

## Resolución

Se aplica la **transformada de Laplace**. Sean $Y(s)=\mathcal{L}\{y(t)\}$ y $G(s)=\mathcal{L}\{1-u_\pi(t)\}$. Con las condiciones iniciales $y(0)=1$ y $y'(0)=-1$,

$$
\mathcal{L}\{y'\}=sY(s)-1,\qquad
\mathcal{L}\{y''\}=s^2Y(s)-s+1 .
$$

Al transformar la ecuación,

$$
s^2Y(s)-s+1+sY(s)-1+\frac{5}{4}Y(s)=G(s),
$$

es decir,

$$
\left(s^2+s+\frac{5}{4}\right)Y(s)=s+G(s).
$$

El polinomio que multiplica a $Y(s)$ se escribe completando el cuadrado:

$$
\Phi(s)=s^2+s+\frac{5}{4}=\left(s+\frac{1}{2}\right)^2+1 .
$$

Al despejar y separar los sumandos,

$$
Y(s)=\frac{s}{\Phi(s)}+\frac{G(s)}{\Phi(s)} .
$$

El primer sumando procede de las condiciones iniciales; el segundo es el producto $G(s)\cdot\dfrac{1}{\Phi(s)}$ y se invierte mediante **convolución**.

Para el primer sumando, el **primer teorema de traslación** da

$$
\mathcal{L}^{-1}\!\left\{\frac{s}{\Phi(s)}\right\}
=\mathcal{L}^{-1}\!\left\{\frac{s+\frac{1}{2}}{\Phi(s)}\right\}-\frac{1}{2}\,\mathcal{L}^{-1}\!\left\{\frac{1}{\Phi(s)}\right\}
=e^{-t/2}\cos t-\frac{1}{2}e^{-t/2}\sin t .
$$

La función

$$
K(t)=\mathcal{L}^{-1}\!\left\{\frac{1}{\Phi(s)}\right\}=e^{-t/2}\sin t
$$

es la respuesta al impulso. Por el **teorema de convolución**, con $g(\tau)=1-u_\pi(\tau)$,

$$
\mathcal{L}^{-1}\!\left\{\frac{G(s)}{\Phi(s)}\right\}
=\int_0^t K(t-\tau)g(\tau)\,d\tau
=\int_0^t e^{-(t-\tau)/2}\sin(t-\tau)\left[1-u_\pi(\tau)\right]d\tau .
$$

Al sumar ambas contribuciones resulta

$$
y(t)=e^{-t/2}\left(\cos t-\frac{1}{2}\sin t\right)+\int_0^t e^{-(t-\tau)/2}\sin(t-\tau)\left[1-u_\pi(\tau)\right]d\tau .
$$

La ecuación es lineal con coeficientes constantes y la fuerza es continua por tramos, de modo que esta expresión es la solución completa del problema para $t\ge 0$.

## Observaciones

La fuerza $g(\tau)=1-u_\pi(\tau)$ vale $1$ en $0\le\tau<\pi$ y $0$ en $\tau\ge\pi$. Por tanto, para $t\ge\pi$ la integral de convolución solo recibe contribución del intervalo $[0,\pi]$. El término $e^{-t/2}\left(\cos t-\frac{1}{2}\sin t\right)$ es la respuesta libre fijada por las condiciones iniciales, y $K(t)=e^{-t/2}\sin t$ es la respuesta al impulso del sistema. La solución es válida para todo $t\ge 0$.
