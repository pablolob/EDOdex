---
title: "Boyce 3.4 Ejercicio 36"
exercise-id: boyce-c03-s04-e036
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 36"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.cambio-variable
  - resolver-analiticamente.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i03-p168.png
---

## Enunciado

En cada uno de los problemas 33 a 36 aplique el resultado del problema 32 para resolver la ecuación dada, para $x > 0$.

36. $x^2 y'' - 4xy' - 6y = 0$

## Solución

La ecuación dada es una ecuación de Euler $x^2y''+\alpha xy'+\beta y=0$ con $\alpha=-4$ y $\beta=-6$. El **cambio de variable** $z=\ln x$ del problema 32 la transforma en $Y''-5Y'-6Y=0$, cuya ecuación característica tiene raíces $6$ y $-1$. Al deshacer la sustitución, la solución general es

$$
y(x)=C_1x^6+\frac{C_2}{x}, \qquad x>0.
$$

## Resolución

El resultado del problema 32 establece que la sustitución $z=\ln x$, con $Y(z)=y(e^{z})$, transforma la ecuación de Euler

$$
x^2y''+\alpha xy'+\beta y=0
$$

en la ecuación con coeficientes constantes

$$
\frac{d^2Y}{dz^2}+(\alpha-1)\frac{dY}{dz}+\beta Y=0.
$$

La ecuación dada se escribe en esa forma como $x^2y''+(-4)xy'+(-6)y=0$, de modo que $\alpha=-4$ y $\beta=-6$. Al sustituir estos valores, la ecuación transformada resulta

$$
Y''+(-4-1)Y'-6Y=0,
$$

es decir,

$$
Y''-5Y'-6Y=0.
$$

**Ecuación característica.** Para esta ecuación de coeficientes constantes se propone $Y=e^{rz}$. La ecuación característica es

$$
r^2-5r-6=0.
$$

Su factorización es $(r-6)(r+1)=0$, por lo que las raíces son reales y distintas:

$$
r_1=6, \qquad r_2=-1.
$$

La solución general de la ecuación transformada es entonces

$$
Y(z)=C_1e^{6z}+C_2e^{-z}.
$$

**Sustitución inversa.** Se recupera la variable original con $z=\ln x$, de modo que $e^{6z}=e^{6\ln x}=x^6$ y $e^{-z}=e^{-\ln x}=x^{-1}$. Por tanto,

$$
y(x)=C_1x^6+C_2x^{-1}, \qquad x>0.
$$

La sustitución directa de $x^6$ y $x^{-1}$ satisface la ecuación original; por ser dos soluciones linealmente independientes, su combinación lineal es la solución general.

## Observaciones

El dominio $x>0$ es el que garantiza que $z=\ln x$ sea invertible y que $dz/dx=1/x$ esté definida. La expresión obtenida también está definida para $x<0$, pero el enunciado restringe el estudio a $x>0$.

### Método alternativo: ecuación auxiliar de Euler

Puede proponerse directamente $y=x^m$. Al sustituir en la ecuación resulta la ecuación auxiliar $m(m-1)-4m-6=0$, es decir, $m^2-5m-6=0$, con raíces $m=6$ y $m=-1$. La solución general es la misma. Este camino presupone conocido el ansatz de Euler, que el problema 32 justifica mediante $z=\ln x$.
