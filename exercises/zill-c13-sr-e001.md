---
title: "Zill Repaso C13 Ejercicio 1"
exercise-id: zill-c13-sr-e001
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 1"
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
  - integracion.directa
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

Determine la temperatura de estado estable $u(r,\theta)$ en una placa circular de radio $c$, si la temperatura en la circunferencia está dada por
$$u(c,\theta) = \begin{cases} u_0, & 0 < \theta < \pi \\ -u_0, & \pi < \theta < 2\pi. \end{cases}$$

## Solución

La temperatura de estado estable es

$$
u(r,\theta)=\frac{4u_0}{\pi}\sum_{n=0}^{\infty}\frac{1}{2n+1}\left(\frac{r}{c}\right)^{2n+1}\sin\big((2n+1)\theta\big),
\qquad 0\le r\le c,\quad 0\le\theta\le 2\pi.
$$

## Resolución

La temperatura de estado estable satisface la **ecuación de Laplace**. En coordenadas polares, para $0<r<c$,

$$
u_{rr}+\frac{1}{r}u_r+\frac{1}{r^2}u_{\theta\theta}=0.
$$

La solución debe ser $2\pi$-periódica en $\theta$ y finita en el centro de la placa. Se aplica **separación de variables** con el producto $u(r,\theta)=R(r)\Theta(\theta)$. Al sustituir y multiplicar por $r^2/(R\Theta)$ resulta

$$
\frac{r^2R''(r)+rR'(r)}{R(r)}+\frac{\Theta''(\theta)}{\Theta(\theta)}=0.
$$

Cada sumando depende de una sola variable, de modo que ambos son iguales a una misma constante. Se denota esa constante con $\lambda$:

$$
\frac{r^2R''+rR'}{R}=\lambda,\qquad -\frac{\Theta''}{\Theta}=\lambda.
$$

La ecuación angular es $\Theta''+\lambda\Theta=0$. Si $\lambda<0$, sus soluciones no son periódicas. Si $\lambda=0$, la solución $\Theta=A+B\theta$ es periódica solo cuando $B=0$. Si $\lambda>0$, con $\lambda=n^2$, la solución $\Theta=A\cos n\theta+B\sin n\theta$ tiene periodo $2\pi$ solo cuando $n$ es un entero. Por tanto $\lambda=n^2$ con $n=0,1,2,\dots$, y las autofunciones angulares son

$$
\Theta_0=A_0,\qquad \Theta_n(\theta)=A_n\cos n\theta+B_n\sin n\theta,\quad n\ge 1.
$$

Para $n\ge 1$ la ecuación radial es $r^2R''+rR'-n^2R=0$, una **ecuación de Cauchy-Euler** con soluciones $R=c_1r^n+c_2r^{-n}$. Para $n=0$ las soluciones son $R=c_1+c_2\ln r$. La finitud en $r=0$ exige $c_2=0$ en ambos casos, de modo que se conserva $R_n(r)=r^n$.

Por superposición, la solución finita se escribe como

$$
u(r,\theta)=\frac{A_0}{2}+\sum_{n=1}^{\infty}\left(\frac{r}{c}\right)^n\big(A_n\cos n\theta+B_n\sin n\theta\big).
$$

Al imponer la condición de frontera $r=c$ queda

$$
u(c,\theta)=\frac{A_0}{2}+\sum_{n=1}^{\infty}\big(A_n\cos n\theta+B_n\sin n\theta\big)=f(\theta),
$$

donde $f(\theta)$ es la temperatura prescrita en la circunferencia. Esta es la **serie de Fourier** de $f$ en $[0,2\pi]$, con coeficientes

$$
A_n=\frac{1}{\pi}\int_0^{2\pi}f(\theta)\cos n\theta\,d\theta,\qquad
B_n=\frac{1}{\pi}\int_0^{2\pi}f(\theta)\sin n\theta\,d\theta.
$$

La función $f$ es impar respecto a $\theta=0$, pues $f(2\pi-\theta)=-f(\theta)$. Por ello los coeficientes en coseno se anulan:

$$
A_0=\frac{1}{\pi}\int_0^{2\pi}f(\theta)\,d\theta=0,\qquad A_n=0,\quad n\ge 1.
$$

Los coeficientes en seno son

$$
\begin{aligned}
B_n &= \frac{1}{\pi}\int_0^{2\pi}f(\theta)\sin n\theta\,d\theta \\
    &= \frac{u_0}{\pi}\int_0^{\pi}\sin n\theta\,d\theta
       -\frac{u_0}{\pi}\int_{\pi}^{2\pi}\sin n\theta\,d\theta \\
    &= \frac{u_0}{n\pi}\big(1-(-1)^n\big)-\frac{u_0}{n\pi}\big((-1)^n-1\big)
       =\frac{2u_0}{n\pi}\big(1-(-1)^n\big).
\end{aligned}
$$

El último factor se anula para $n$ par y vale $2$ para $n$ impar, de modo que $B_n=0$ si $n$ es par y $B_n=4u_0/(n\pi)$ si $n$ es impar. Al sustituir y reindexar los enteros impares como $n=2k+1$ se obtiene

$$
u(r,\theta)=\frac{4u_0}{\pi}\sum_{n=0}^{\infty}\frac{1}{2n+1}\left(\frac{r}{c}\right)^{2n+1}\sin\big((2n+1)\theta\big).
$$

Cada término $(r/c)^n\cos n\theta$ y $(r/c)^n\sin n\theta$ es armónico y finito en el disco. En $r=c$ la serie es la de Fourier de la temperatura prescrita; con la suma $\sum_{n=0}^{\infty}\sin((2n+1)\theta)/(2n+1)=\pi/4$ para $0<\theta<\pi$ y $-\pi/4$ para $\pi<\theta<2\pi$, resulta $u(c,\theta)=u_0$ y $u(c,\theta)=-u_0$ en cada intervalo. La solución satisface la ecuación de Laplace y la condición de frontera.

## Observaciones

En las discontinuidades de la condición de frontera, $\theta=0$ y $\theta=\pi$, la serie converge al valor promedio $0$, de acuerdo con el teorema de Dirichlet. En el centro de la placa la temperatura es $u(0,\theta)=0$, el promedio de la temperatura en la circunferencia.

La misma solución admite la forma cerrada

$$
u(r,\theta)=\frac{2u_0}{\pi}\arctan\!\left(\frac{2(r/c)\sin\theta}{1-(r/c)^2}\right),
\qquad 0\le r<c,
$$

que reproduce la serie mediante la suma de la serie de Fourier de una onda cuadrada.
