---
title: "Zill Repaso C13 Ejercicio 12"
exercise-id: zill-c13-sr-e012
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 12"
statement-status: accepted
solution-status: draft
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-onda
  - resolver-edp.separacion-variables
  - resolver-edp.coordenadas-esfericas
hidden-competencies:
  - analizar-espectralmente.valores-propios
  - analizar-espectralmente.ortogonalidad
  - seleccionar-metodo.separacion-variables-edp
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
  - integracion.identidades-trigonometricas
difficulty:
  conceptual: 3
  technical: 3
metadata-status: pending
source-images:
  - c13sri02-p532.png
---

## Enunciado

Resuelva el problema con valores en la frontera
$$\frac{\partial^2 u}{\partial r^2} + \frac{2}{r}\frac{\partial u}{\partial r} = \frac{\partial^2 u}{\partial t^2}, \quad 0 < r < 1, \quad t > 0$$
$$\left.\frac{\partial u}{\partial r}\right|_{r=1} = 0, \quad t > 0$$
$$u(r, 0) = f(r), \quad \left.\frac{\partial u}{\partial t}\right|_{t=0} = g(r), \quad 0 < r < 1.$$
[Sugerencia: Proceda como en los problemas 9 y 10 de los ejercicios 13.3, pero haga $v(r, t) = ru(r, t)$. Vea la sección 12.7.]

## Solución

El **cambio de variable** $v(r,t)=r\,u(r,t)$ reduce el problema a la ecuación de onda unidimensional $v_{tt}=v_{rr}$ con $v(0,t)=0$ y $v_r(1,t)=v(1,t)$. La solución es

$$
u(r,t)=A_0+B_0t+\sum_{n=1}^{\infty}\left(A_n\cos\lambda_n t+B_n\sin\lambda_n t\right)\frac{\sin(\lambda_n r)}{r},
$$

donde $\lambda_1<\lambda_2<\cdots$ son las raíces positivas de $\tan\lambda=\lambda$ y

$$
\begin{aligned}
A_0&=3\int_0^1 r^2f(r)\,dr, & B_0&=3\int_0^1 r^2g(r)\,dr,\\
A_n&=\frac{2}{\sin^2\lambda_n}\int_0^1 rf(r)\sin(\lambda_n r)\,dr, &
B_n&=\frac{2}{\lambda_n\sin^2\lambda_n}\int_0^1 rg(r)\sin(\lambda_n r)\,dr.
\end{aligned}
$$

## Resolución

**Cambio de variable.** Con $v(r,t)=r\,u(r,t)$ se calcula

$$
v_r=u+ru_r,\qquad
v_{rr}=2u_r+ru_{rr}=r\left(u_{rr}+\frac{2}{r}u_r\right),\qquad
v_{tt}=r\,u_{tt}.
$$

Al sustituir en la EDP, el factor $r$ se cancela y queda la ecuación de onda unidimensional

$$
v_{tt}=v_{rr}, \qquad 0<r<1, \quad t>0.
$$

**Frontera e inicio.** La solución física permanece acotada en $r=0$, de modo que

$$
v(0,t)=\lim_{r\to0}r\,u(r,t)=0.
$$

En $r=1$, como $u_r(1,t)=0$,

$$
v(1,t)=u(1,t),\qquad v_r(1,t)=u(1,t)+u_r(1,t)=u(1,t),
$$

y por tanto

$$
v_r(1,t)=v(1,t).
$$

Las condiciones iniciales se escriben $v(r,0)=rf(r)$ y $v_t(r,0)=rg(r)$.

**Separación de variables.** Se ensaya $v(r,t)=R(r)T(t)$. Al sustituir en $v_{tt}=v_{rr}$ y dividir entre $R(r)T(t)$,

$$
\frac{T''(t)}{T(t)}=\frac{R''(r)}{R(r)}=-\lambda.
$$

Resultan las ecuaciones ordinarias

$$
R''+\lambda R=0,\qquad T''+\lambda T=0,
$$

con las condiciones $R(0)=0$ y $R'(1)=R(1)$.

**Problema espacial.** El signo de $\lambda$ se analiza por casos.

- Si $\lambda=-\kappa^{2}<0$, la solución acotada en el origen es $R=A\sinh(\kappa r)$. La frontera exige $\kappa\cosh\kappa=\sinh\kappa$, es decir $\tanh\kappa=\kappa$, que no tiene solución positiva. No hay valores propios negativos.
- Si $\lambda=0$, entonces $R=Ar+B$; la condición $R(0)=0$ deja $R=Ar$ y la frontera se satisface idénticamente. El valor propio $\lambda_0=0$ tiene función propia $R_0(r)=r$.
- Si $\lambda=\mu^{2}>0$, la solución acotada es $R=A\sin(\mu r)$. La frontera exige

$$
\mu\cos\mu=\sin\mu \quad\Longleftrightarrow\quad \tan\mu=\mu.
$$

Los valores propios son $\lambda_n=\mu_n^{2}$ y las funciones propias $R_n(r)=\sin(\mu_n r)$, con $\mu_1<\mu_2<\cdots$ las raíces positivas de $\tan\mu=\mu$.

**Parte temporal.** Para el modo $\lambda_0=0$, $T_0(t)=A_0+B_0t$. Para cada $\lambda_n=\mu_n^{2}$, $T_n(t)=A_n\cos\mu_n t+B_n\sin\mu_n t$.

**Principio de superposición.** Combinando todos los modos,

$$
v(r,t)=(A_0+B_0t)\,r+\sum_{n=1}^{\infty}\left(A_n\cos\mu_n t+B_n\sin\mu_n t\right)\sin(\mu_n r).
$$

**Coeficientes.** Las funciones $\{r\}\cup\{\sin(\mu_n r)\}$ son ortogonales en $[0,1]$ con peso $1$, porque $\lambda_0=0$ y $\lambda_n=\mu_n^{2}$ son valores propios distintos del problema de Sturm-Liouville. En particular,

$$
\int_0^1 r\sin(\mu_n r)\,dr=\frac{\sin\mu_n-\mu_n\cos\mu_n}{\mu_n^{2}}=0,
$$

usando $\sin\mu_n=\mu_n\cos\mu_n$. Las normas son

$$
\int_0^1 r^{2}\,dr=\frac{1}{3},
\qquad
\int_0^1\sin^{2}(\mu_n r)\,dr=\frac{1}{2}-\frac{\sin 2\mu_n}{4\mu_n}=\frac{\sin^{2}\mu_n}{2}.
$$

La condición $v(r,0)=rf(r)$ da $rf(r)=A_0r+\sum_{n\ge1}A_n\sin(\mu_n r)$. Por **ortogonalidad**,

$$
A_0=\frac{\displaystyle\int_0^1 rf(r)\,r\,dr}{\displaystyle\int_0^1 r^{2}\,dr}=3\int_0^1 r^{2}f(r)\,dr,
$$

$$
A_n=\frac{\displaystyle\int_0^1 rf(r)\sin(\mu_n r)\,dr}{\displaystyle\int_0^1\sin^{2}(\mu_n r)\,dr}
=\frac{2}{\sin^{2}\mu_n}\int_0^1 rf(r)\sin(\mu_n r)\,dr.
$$

De forma análoga, $v_t(r,0)=rg(r)=B_0r+\sum_{n\ge1}\mu_nB_n\sin(\mu_n r)$, luego

$$
B_0=3\int_0^1 r^{2}g(r)\,dr,
\qquad
B_n=\frac{2}{\mu_n\sin^{2}\mu_n}\int_0^1 rg(r)\sin(\mu_n r)\,dr.
$$

**Solución del problema original.** Al deshacer el cambio, $u(r,t)=v(r,t)/r$:

$$
u(r,t)=A_0+B_0t+\sum_{n=1}^{\infty}\left(A_n\cos\mu_n t+B_n\sin\mu_n t\right)\frac{\sin(\mu_n r)}{r}.
$$

**Comprobación.** Cada término $v_n=R_n(r)T_n(t)$ satisface $v_{n,tt}=v_{n,rr}$ por construcción, y el cambio $u=v/r$ transforma esa identidad en la EDP del enunciado. Para el modo $\lambda_0=0$, $u_0=A_0+B_0t$ cumple $u_{0,rr}+\frac{2}{r}u_{0,r}=0=u_{0,tt}$. En $r=1$,

$$
u_{n,r}(1,t)=\frac{\mu_n\cos\mu_n-\sin\mu_n}{1^{2}}\,T_n(t)=0,
$$

por la definición de $\mu_n$. Las condiciones iniciales se reproducen término a término porque las series reconstruyen $rf(r)$ y $rg(r)$. En el centro $\sin(\mu_n r)/r\to\mu_n$, de modo que la solución permanece acotada cuando $r\to0^{+}$. La solución es válida para $0<r<1$ y $t>0$.

## Observaciones

La frontera $u_r(1,t)=0$ es libre (Neumann). Bajo el cambio $v=ru$ se convierte en la condición de Robin $v_r(1,t)=v(1,t)$, cuyos valores propios son las raíces de $\tan\lambda=\lambda$ y no los múltiplos $n\pi$. Las raíces cumplen $\lambda_n\in(n\pi,\,n\pi+\pi/2)$; la primera es $\lambda_1\approx4.4934$.

El valor propio $\lambda=0$ aporta el término $A_0+B_0t$, un campo uniforme que crece linealmente con el tiempo. Este modo neutro aparece porque la frontera no está fija; con una frontera de Dirichlet ($u(1,t)=0$) todos los valores propios serían positivos y ese término se anularía.

El problema es la versión de onda del problema radial de calor de los ejercicios 13.3, problemas 9 y 10.
