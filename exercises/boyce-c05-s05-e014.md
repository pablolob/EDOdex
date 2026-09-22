---
title: "Boyce 5.5 Ejercicio 14"
exercise-id: boyce-c05-s05-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s05i01-p278.png
---

## Enunciado

En cada uno de los problemas 13 a 16, encuentre la solución del problema con valor inicial dado.

14. $4x^2 y'' + 8xy' + 17y = 0, \quad y(1) = 2, \quad y'(1) = -3$

## Solución

La solución del problema con valor inicial, válida en $(0,\infty)$, es

$$
y(x)=x^{-1/2}\left[2\cos(2\ln x)-\sin(2\ln x)\right].
$$

## Resolución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** (equidimensional). El coeficiente de $y''$ se anula en $x=0$, único punto singular; como la condición inicial se impone en $x=1$, el intervalo de validez es $(0,\infty)$.

Se propone $y=x^r$ para $x>0$, con derivadas

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
4x^2\cdot r(r-1)x^{r-2}+8x\cdot rx^{r-1}+17x^r
  &= x^r\left[4r(r-1)+8r+17\right] \\
  &= x^r\left(4r^2+4r+17\right)=0.
\end{aligned}
$$

Como $x^r\ne 0$, se obtiene la **ecuación característica**

$$
4r^2+4r+17=0,
$$

cuyas raíces son

$$
r=\frac{-4\pm\sqrt{16-272}}{8}=\frac{-4\pm 16i}{8}=-\frac{1}{2}\pm 2i.
$$

Con $\alpha=-\frac{1}{2}$ y $\beta=2$, la solución general para $x>0$ es

$$
y(x)=x^{-1/2}\left[C_1\cos(2\ln x)+C_2\sin(2\ln x)\right].
$$

Para aplicar las condiciones iniciales se deriva. Con la regla del producto,

$$
y'(x)=x^{-3/2}\left[\left(-\frac{C_1}{2}+2C_2\right)\cos(2\ln x)-\left(2C_1+\frac{C_2}{2}\right)\sin(2\ln x)\right].
$$

Al evaluar en $x=1$, donde $\ln 1=0$, resulta $y(1)=C_1$ y $y'(1)=-\frac{C_1}{2}+2C_2$. Las condiciones iniciales dan

$$
\begin{aligned}
C_1 &= 2, \\
-\frac{C_1}{2}+2C_2 &= -3.
\end{aligned}
$$

De la primera ecuación, $C_1=2$. Al sustituir en la segunda, $-1+2C_2=-3$, de donde $C_2=-1$. Por lo tanto,

$$
y(x)=x^{-1/2}\left[2\cos(2\ln x)-\sin(2\ln x)\right].
$$

Esta solución está definida en $(0,\infty)$, el intervalo que contiene a $x=1$ y no incluye el punto singular $x=0$.

## Observaciones

El punto $x=0$ es el punto singular de la ecuación: allí el coeficiente de $y''$ se anula. La solución del problema con valor inicial queda en $(0,\infty)$; en $(-\infty,0)$ la solución general de la misma familia se escribe con $\ln|x|$.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ el cambio $t=\ln x$ transforma la ecuación de Cauchy-Euler en la de coeficientes constantes

$$
4\,\ddot y+4\,\dot y+17y=0,
$$

cuya ecuación característica $4\lambda^2+4\lambda+17=0$ tiene las mismas raíces $\lambda=-\frac{1}{2}\pm 2i$. La solución $y=e^{-t/2}\left[C_1\cos(2t)+C_2\sin(2t)\right]$ conduce al mismo resultado al deshacer el cambio.
