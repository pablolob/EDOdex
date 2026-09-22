---
title: "Boyce 6.5 Ejercicio 16"
exercise-id: boyce-c06-s05-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 16"
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

16. $y'' + 4y' + 4y = g(t); \quad y(0) = 2, \ y'(0) = -3$

## Solución

$$
y(t)=\int_0^t (t-\tau)e^{-2(t-\tau)}g(\tau)\,d\tau+(2+t)e^{-2t}.
$$

## Resolución

Se aplica la **transformada de Laplace** a la ecuación. Con $Y(s)=\mathcal{L}\{y(t)\}$ y $G(s)=\mathcal{L}\{g(t)\}$, la transformada de las derivadas da

$$
s^2Y(s)-s\,y(0)-y'(0)+4\bigl(sY(s)-y(0)\bigr)+4Y(s)=G(s).
$$

Al sustituir $y(0)=2$ y $y'(0)=-3$ resulta

$$
(s^2+4s+4)Y(s)=G(s)+2s+5,
$$

es decir,

$$
(s+2)^2Y(s)=G(s)+2s+5.
$$

Por tanto,

$$
Y(s)=\frac{G(s)}{(s+2)^2}+\frac{2s+5}{(s+2)^2}.
$$

El segundo sumando se descompone en fracciones simples:

$$
\frac{2s+5}{(s+2)^2}=\frac{2}{s+2}+\frac{1}{(s+2)^2}.
$$

Con el par básico

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{(s+2)^2}\right\}=t e^{-2t},
$$

el **teorema de convolución** da

$$
\mathcal{L}^{-1}\!\left\{\frac{G(s)}{(s+2)^2}\right\}
=\int_0^t (t-\tau)e^{-2(t-\tau)}g(\tau)\,d\tau,
$$

mientras que la inversa del segundo sumando es

$$
\mathcal{L}^{-1}\!\left\{\frac{2}{s+2}+\frac{1}{(s+2)^2}\right\}
=2e^{-2t}+te^{-2t}=(2+t)e^{-2t}.
$$

Al sumar ambas contribuciones se obtiene

$$
y(t)=\int_0^t (t-\tau)e^{-2(t-\tau)}g(\tau)\,d\tau+(2+t)e^{-2t}.
$$

## Observaciones

El resultado es válido para $t\ge 0$. La integral es la respuesta forzada por $g(t)$; el término $(2+t)e^{-2t}$ es la respuesta libre que fija $y(0)=2$ y $y'(0)=-3$. La expresión satisface ambas condiciones iniciales.
