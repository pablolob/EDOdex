---
title: "Boyce 6.1 Ejercicio 18"
exercise-id: boyce-c06-s01-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - algebra.factorizacion-polinomios
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

18. $y^{\text{iv}} - y = 0; \quad y(0) = 1, \quad y'(0) = 0, \quad y''(0) = 1, \quad y'''(0) = 0$

## Solución

$$
y(t)=\cosh t=\frac{e^{t}+e^{-t}}{2}, \qquad t \ge 0.
$$

## Resolución

Se aplica la transformada de Laplace a ambos miembros de la ecuación. Con $Y(s)=\mathcal{L}\{y(t)\}$, la transformada de la derivada cuarta es

$$
\mathcal{L}\{y^{\text{iv}}\}=s^4Y(s)-s^3y(0)-s^2y'(0)-s\,y''(0)-y'''(0).
$$

Al sustituir las condiciones iniciales $y(0)=1$, $y'(0)=0$, $y''(0)=1$ y $y'''(0)=0$, la ecuación transformada resulta

$$
s^4Y(s)-s^3-s-Y(s)=0.
$$

Al agrupar los términos con $Y(s)$ y factorizar el numerador,

$$
Y(s)(s^4-1)=s^3+s=s(s^2+1).
$$

Como $s^4-1=(s^2-1)(s^2+1)$, el factor común $s^2+1$ se cancela:

$$
Y(s)=\frac{s(s^2+1)}{(s^2-1)(s^2+1)}=\frac{s}{s^2-1}.
$$

Se factoriza el denominador, $s^2-1=(s-1)(s+1)$, y se descompone en **fracciones simples**:

$$
\frac{s}{(s-1)(s+1)}=\frac{A}{s-1}+\frac{B}{s+1}, \qquad s=A(s+1)+B(s-1).
$$

La evaluación en cada polo determina las constantes: en $s=1$ se obtiene $1=2A$, luego $A=\tfrac{1}{2}$; en $s=-1$ se obtiene $-1=-2B$, luego $B=\tfrac{1}{2}$. Por tanto,

$$
\frac{s}{s^2-1}=\frac{1}{2}\cdot\frac{1}{s-1}+\frac{1}{2}\cdot\frac{1}{s+1}.
$$

Con el par básico $\mathcal{L}^{-1}\!\left\{\dfrac{1}{s-a}\right\}=e^{at}$ y la linealidad de la transformada inversa,

$$
y(t)=\frac{1}{2}e^{t}+\frac{1}{2}e^{-t}=\cosh t.
$$

## Observaciones

La simplificación $Y(s)=s/(s^2-1)$ es consecuencia de que el factor $s^2+1$ del numerador se cancela con el mismo factor del denominador; sin esa cancelación la descomposición sería innecesariamente larga. El resultado también se reconoce directamente del par $\mathcal{L}\{\cosh(bt)\}=\dfrac{s}{s^2-b^2}$ con $b=1$. La solución es válida para todo $t\ge 0$ y satisface las cuatro condiciones iniciales.
