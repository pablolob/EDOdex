---
title: "Boyce 6.1 Ejercicio 14"
exercise-id: boyce-c06-s01-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
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

14. $y'' - 4y' + 4y = 0; \quad y(0) = 1, \quad y'(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = (1-t)e^{2t}, \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con $y(0)=1$ y $y'(0)=1$, las transformadas de las derivadas son

$$
\mathcal{L}\{y'\}=sY(s)-y(0)=sY(s)-1,
\qquad
\mathcal{L}\{y''\}=s^{2}Y(s)-s\,y(0)-y'(0)=s^{2}Y(s)-s-1.
$$

Al transformar la ecuación $y''-4y'+4y=0$ resulta

$$
\begin{aligned}
\left(s^{2}Y(s)-s-1\right)-4\left(sY(s)-1\right)+4Y(s) &= 0, \\
\left(s^{2}-4s+4\right)Y(s)-s+3 &= 0, \\
(s-2)^{2}Y(s) &= s-3,
\end{aligned}
$$

de donde

$$
Y(s)=\frac{s-3}{(s-2)^{2}}.
$$

El denominador es un factor lineal repetido. La descomposición en **fracciones parciales** incluye entonces los dos órdenes del factor:

$$
\frac{s-3}{(s-2)^{2}}=\frac{A}{s-2}+\frac{B}{(s-2)^{2}}.
$$

Al multiplicar por $(s-2)^{2}$ queda $s-3=A(s-2)+B$. La comparación de coeficientes da $A=1$ y $B=-1$, es decir,

$$
Y(s)=\frac{1}{s-2}-\frac{1}{(s-2)^{2}}.
$$

Se invierte término a término con los pares

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s-a}\right\}=e^{at},
\qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{(s-a)^{2}}\right\}=t\,e^{at},
$$

con $a=2$. Por linealidad de la transformada inversa,

$$
y(t)=e^{2t}-t\,e^{2t}=(1-t)e^{2t}.
$$

La solución satisface $y(0)=1$ y $y'(0)=1$, como exige el enunciado.

## Observaciones

El término $t\,e^{2t}$ corresponde al polo doble $s=2$; en la tabla, $\mathcal{L}\{t\,e^{at}\}=1/(s-a)^{2}$. La solución está definida para todo $t\ge 0$ y su transformada converge para $\operatorname{Re}(s)>2$.

### Método alternativo: ecuación característica

La ecuación es lineal, homogénea y de coeficientes constantes. Su ecuación característica $r^{2}-4r+4=(r-2)^{2}$ tiene la raíz doble $r=2$, por lo que la solución general es $y=(C_1+C_2 t)e^{2t}$. Las condiciones $y(0)=1$ y $y'(0)=1$ dan $C_1=1$ y $C_2=-1$, y conducen a la misma solución. El enunciado prescribe la vía de Laplace.
