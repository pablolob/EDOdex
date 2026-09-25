---
title: "Boyce 3.2 Ejercicio 13"
exercise-id: boyce-c03-s02-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - verificar.solucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

Compruebe que $y_1(x) = x^2$ y $y_2(x) = x^{-1}$ son dos soluciones de la ecuación diferencial $x^2 y'' - 2y = 0$ para $x > 0$. A continuación, demuestre que $c_1 x^2 + c_2 x^{-1}$ también es una solución de esta ecuación para cualesquiera $c_1$ y $c_2$.

## Solución

Las funciones $y_1(x)=x^2$ y $y_2(x)=x^{-1}$ satisfacen la ecuación para todo $x>0$. Por el **principio de superposición**, la combinación lineal

$$
y(x)=c_1x^2+c_2x^{-1}, \qquad x>0,
$$

también es solución para cualesquiera constantes $c_1$ y $c_2$.

## Resolución

La ecuación $x^2y''-2y=0$ es lineal y homogénea de segundo orden. Para $x>0$ equivale a $y''-\dfrac{2}{x^2}y=0$.

**Verificación de $y_1(x)=x^2$.** Sus derivadas son $y_1'(x)=2x$ y $y_1''(x)=2$. Al sustituir,

$$
x^2y_1''-2y_1=x^2(2)-2x^2=2x^2-2x^2=0.
$$

**Verificación de $y_2(x)=x^{-1}$.** Sus derivadas son $y_2'(x)=-x^{-2}$ y $y_2''(x)=2x^{-3}$. Al sustituir,

$$
x^2y_2''-2y_2=x^2\left(2x^{-3}\right)-2x^{-1}=2x^{-1}-2x^{-1}=0.
$$

**Combinación lineal.** Sea $y=c_1x^2+c_2x^{-1}$. Su segunda derivada es

$$
y''=2c_1+2c_2x^{-3}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2y''-2y &= x^2\left(2c_1+2c_2x^{-3}\right)-2\left(c_1x^2+c_2x^{-1}\right) \\
&= 2c_1x^2+2c_2x^{-1}-2c_1x^2-2c_2x^{-1} \\
&= 0.
\end{aligned}
$$

El resultado vale para cualesquiera $c_1$ y $c_2$ y para todo $x>0$. Cada término de la combinación reproduce, multiplicado por su constante, una solución de la ecuación homogénea; es el **principio de superposición**.

## Observaciones

La ecuación es lineal y homogénea, condición necesaria para que una combinación de soluciones vuelva a ser solución.

La familia $c_1x^2+c_2x^{-1}$ contiene las dos soluciones dadas ($c_2=0$ y $c_1=0$, respectivamente). Su carácter de solución general se justifica al comprobar la independencia lineal de $y_1$ y $y_2$, tema de la sección 3.3.
