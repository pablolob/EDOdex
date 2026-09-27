---
title: "Zill Repaso C13 Ejercicio 3"
exercise-id: zill-c13-sr-e003
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 3"
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-laplace
  - resolver-edp.coordenadas-polares
  - resolver-edp.separacion-variables
hidden-competencies:
  - seleccionar-metodo.separacion-variables-edp
  - analizar-espectralmente.valores-propios
prerequisitos:
  - ecuaciones-diferenciales.condiciones-frontera
  - calculo-avanzado.derivadas-parciales
  - integracion.por-partes
difficulty:
  conceptual: 2
  technical: 2
statement-status: accepted
solution-status: draft
metadata-status: pending
source-images:
  - c13sri01-p531.png
---

## Enunciado

Determine la temperatura de estado estable $u(r,\theta)$ en una placa semicircular de radio 1, si
$$u(1,\theta) = u_0(\pi\theta - \theta^2), \quad 0 < \theta < \pi$$
$$u(r,0) = 0, \quad u(r,\pi) = 0, \quad 0 < r < 1.$$

## Solución

La temperatura de estado estable es

$$
u(r,\theta)=\frac{8u_0}{\pi}\sum_{k=0}^{\infty}\frac{r^{2k+1}}{(2k+1)^3}\sin\big((2k+1)\theta\big),
\qquad 0\le r\le 1,\quad 0\le\theta\le\pi.
$$

## Resolución

La temperatura de estado estable satisface la **ecuación de Laplace**. En coordenadas polares, para $0<r<1$,

$$
u_{rr}+\frac{1}{r}u_r+\frac{1}{r^2}u_{\theta\theta}=0.
$$

La placa es el semicírculo $0\le r\le 1$, $0\le\theta\le\pi$, con los lados rectos a temperatura cero. Se aplica **separación de variables** con el producto $u(r,\theta)=R(r)\Theta(\theta)$. Al sustituir y multiplicar por $r^2/(R\Theta)$ resulta

$$
\frac{r^2R''(r)+rR'(r)}{R(r)}+\frac{\Theta''(\theta)}{\Theta(\theta)}=0.
$$

Cada sumando depende de una sola variable, de modo que ambos son iguales a una misma constante. Se denota esa constante con $\lambda$:

$$
\frac{r^2R''+rR'}{R}=\lambda,\qquad -\frac{\Theta''}{\Theta}=\lambda.
$$

La ecuación angular es $\Theta''+\lambda\Theta=0$. Las condiciones $u(r,0)=0$ y $u(r,\pi)=0$ se traducen en $\Theta(0)=0$ y $\Theta(\pi)=0$. Si $\lambda\le 0$, la solución no se anula en ambos extremos salvo la trivial; para $\lambda=n^2>0$ se tiene $\Theta=A\cos n\theta+B\sin n\theta$, y los extremos exigen $A=0$ y $\sin n\pi=0$. Por tanto $\lambda=n^2$ con $n=1,2,3,\dots$, y las autofunciones angulares son

$$
\Theta_n(\theta)=\sin n\theta.
$$

La ecuación radial es $r^2R''+rR'-n^2R=0$, una **ecuación de Cauchy-Euler** con soluciones $R=c_1r^n+c_2r^{-n}$. La acotación en $r=0$ exige $c_2=0$, de modo que se conserva $R_n(r)=r^n$.

Por superposición, la solución acotada se escribe como

$$
u(r,\theta)=\sum_{n=1}^{\infty}A_n r^n\sin n\theta.
$$

Al imponer la condición de frontera $r=1$ queda

$$
u(1,\theta)=\sum_{n=1}^{\infty}A_n\sin n\theta=u_0(\pi\theta-\theta^2).
$$

El miembro derecho es la **serie de Fourier** en senos de $f(\theta)=u_0(\pi\theta-\theta^2)$ en $[0,\pi]$, con coeficientes

$$
A_n=\frac{2}{\pi}\int_0^{\pi}u_0(\pi\theta-\theta^2)\sin n\theta\,d\theta.
$$

Las integrales se calculan por partes. Para la primera,

$$
\int_0^{\pi}\theta\sin n\theta\,d\theta
=\left[-\frac{\theta\cos n\theta}{n}\right]_0^{\pi}+\frac{1}{n}\int_0^{\pi}\cos n\theta\,d\theta
=-\frac{\pi(-1)^n}{n}.
$$

Para la segunda, tras integrar por partes dos veces,

$$
\int_0^{\pi}\theta^2\sin n\theta\,d\theta
=-\frac{\pi^2(-1)^n}{n}+\frac{2\big((-1)^n-1\big)}{n^3}.
$$

Al combinarlas,

$$
\int_0^{\pi}(\pi\theta-\theta^2)\sin n\theta\,d\theta
=\pi\int_0^{\pi}\theta\sin n\theta\,d\theta-\int_0^{\pi}\theta^2\sin n\theta\,d\theta
=\frac{2\big(1-(-1)^n\big)}{n^3}.
$$

El factor $1-(-1)^n$ se anula para $n$ par y vale $2$ para $n$ impar. Así,

$$
A_n=\frac{2u_0}{\pi}\cdot\frac{2\big(1-(-1)^n\big)}{n^3}
=\begin{cases}\dfrac{8u_0}{\pi n^3}, & n\ \text{impar},\\[6pt] 0, & n\ \text{par}.\end{cases}
$$

Al sustituir y reindexar los enteros impares como $n=2k+1$ se obtiene

$$
u(r,\theta)=\frac{8u_0}{\pi}\sum_{k=0}^{\infty}\frac{r^{2k+1}}{(2k+1)^3}\sin\big((2k+1)\theta\big).
$$

Cada término $r^n\sin n\theta$ es una función armónica acotada en el semicírculo, y en $r=1$ la serie es la serie de Fourier en senos de la temperatura prescrita. La solución satisface la ecuación de Laplace y las tres condiciones de frontera.

## Observaciones

En el centro del semicírculo la temperatura es $u(0,\theta)=0$, pues todos los términos contienen el factor $r$. La función prescrita $f(\theta)=u_0(\pi\theta-\theta^2)$ es continua en $[0,\pi]$ y cumple $f(0)=f(\pi)=0$, de modo que su serie de Fourier converge uniformemente a $f$ y no aparecen discontinuidades de Gibbs.
