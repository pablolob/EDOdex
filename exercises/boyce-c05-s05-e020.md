---
title: "Boyce 5.5 Ejercicio 20"
exercise-id: boyce-c05-s05-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
  - analizar-cualitativamente.comportamiento-asintotico
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
  - polinomios.resolver
difficulty:
  conceptual: 3
  technical: 1
source-images:
  - c05s05i01-p278.png
---

## Enunciado

Encuentre todos los valores de $\alpha$ para los que todas las soluciones de $x^2 y'' + \alpha xy' + (5/2)y = 0$ tiendan a cero cuando $x \to \infty$.

## Solución

Todas las soluciones tienden a cero cuando $x\to\infty$ si y solo si

$$
\alpha>1.
$$

## Resolución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** (equidimensional). Como se estudia el comportamiento cuando $x\to\infty$, se trabaja en $x>0$; el único punto singular es $x=0$ y no interviene.

Se proponen soluciones de la forma $y=x^r$, con $y'=rx^{r-1}$ y $y''=r(r-1)x^{r-2}$. Al sustituir en la ecuación,

$$
x^2\cdot r(r-1)x^{r-2}+\alpha x\cdot rx^{r-1}+\frac{5}{2}x^r
=\left[r(r-1)+\alpha r+\frac{5}{2}\right]x^r=0.
$$

Como $x^r\ne 0$, la **ecuación característica** es

$$
r^2+(\alpha-1)r+\frac{5}{2}=0.
$$

Sean $r_1$ y $r_2$ sus raíces. Por las relaciones entre coeficientes y raíces,

$$
r_1+r_2=1-\alpha,\qquad r_1r_2=\frac{5}{2}>0.
$$

La solución general adopta una de tres formas según las raíces:

- si son reales y distintas, $y=C_1x^{r_1}+C_2x^{r_2}$;
- si son reales e iguales a $r$, $y=x^{r}\left(C_1+C_2\ln x\right)$;
- si son complejas conjugadas $r=\lambda\pm i\mu$, $y=x^{\lambda}\left[C_1\cos(\mu\ln x)+C_2\sin(\mu\ln x)\right]$.

En los tres casos $y\to 0$ cuando $x\to\infty$ si y solo si la parte real de ambas raíces es negativa: en el primer caso porque $x^{r}\to 0$ para $r<0$; en el segundo porque $x^{r}\ln x\to 0$ para $r<0$; en el tercero por el factor $x^{\lambda}$.

Como $r_1r_2>0$, las dos raíces tienen partes reales del mismo signo: son reales del mismo signo o complejas conjugadas. Esa parte real común es

$$
\frac{r_1+r_2}{2}=\frac{1-\alpha}{2}.
$$

Por lo tanto, ambas partes reales son negativas si y solo si $\dfrac{1-\alpha}{2}<0$, es decir, $\alpha>1$.

El valor $\alpha=1$ queda excluido. En ese caso las raíces son $r=\pm i\sqrt{5/2}$, puramente imaginarias, y las soluciones oscilan con amplitud constante sin tender a cero. Para $\alpha<1$ alguna raíz tiene parte real positiva, de modo que existen soluciones que no tienden a cero.

En consecuencia, todas las soluciones tienden a cero cuando $x\to\infty$ exactamente para $\alpha>1$.

## Observaciones

La condición depende solo del signo de $\operatorname{Re}(r)$: el producto de las raíces es positivo y fijo, por lo que su suma decide si ambas tienen parte real negativa.

### Método alternativo: cambio $x=e^{t}$

Para $x>0$ puede usarse $t=\ln x$, con $x\dfrac{dy}{dx}=\dfrac{dy}{dt}$ y $x^2\dfrac{d^2y}{dx^2}=\dfrac{d^2y}{dt^2}-\dfrac{dy}{dt}$. La ecuación se transforma en

$$
\ddot y+(\alpha-1)\dot y+\frac{5}{2}y=0,
$$

cuya ecuación característica tiene las mismas raíces. Como $x\to\infty$ equivale a $t\to\infty$, la condición de decaimiento es la misma, $\alpha>1$.
