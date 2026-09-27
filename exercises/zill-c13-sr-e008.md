---
title: "Zill Repaso C13 Ejercicio 8"
exercise-id: zill-c13-sr-e008
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 8"
topics:
  - contorno
competencies:
  - verificar.solucion
  - verificar.condiciones-frontera
  - verificar.condiciones-iniciales
hidden-competencies:
  - resolver-analiticamente.bessel
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
difficulty:
  conceptual: 1
  technical: 2
solution-status: draft
statement-status: accepted
metadata-status: pending
source-images:
  - c13sri01-p531.png
---

## Enunciado

Suponga que $x_k$ es una raíz positiva de $J_0$. Demuestre que una solución del problema con valores en la frontera
$$a^2\left(\frac{\partial^2 u}{\partial r^2} + \frac{1}{r}\frac{\partial u}{\partial r}\right) = \frac{\partial^2 u}{\partial t^2}, \quad 0 < r < 1, \quad t > 0$$
$$u(1,t) = 0, \quad t > 0$$
$$u(r,0) = u_0 J_0(x_k r), \quad \left.\frac{\partial u}{\partial t}\right|_{t=0} = 0, \quad 0 < r < 1$$
es $u(r,t) = u_0 J_0(x_k r) \cos a x_k t$.

## Solución

La función

$$
u(r,t)=u_0 J_0(x_k r)\cos(a x_k t)
$$

satisface la ecuación de onda, la condición de frontera y ambas condiciones iniciales del problema.

## Resolución

Se comprueba cada condición por **sustitución directa**.

$$
\begin{aligned}
u_r &= u_0 x_k J_0'(x_k r)\cos(a x_k t), \\
u_{rr} &= u_0 x_k^{2} J_0''(x_k r)\cos(a x_k t), \\
u_{tt} &= -u_0 a^{2} x_k^{2} J_0(x_k r)\cos(a x_k t).
\end{aligned}
$$

**Ecuación en el interior.** Se forma el operador radial:

$$
u_{rr}+\frac{1}{r}u_r
= u_0\cos(a x_k t)\left[x_k^{2}J_0''(x_k r)+\frac{x_k}{r}J_0'(x_k r)\right].
$$

La función $J_0$ satisface la ecuación de Bessel de orden cero. Con $z=x_k r$,

$$
z^{2}J_0''(z)+zJ_0'(z)+z^{2}J_0(z)=0,
$$

y, dividiendo entre $z^{2}$,

$$
J_0''(z)+\frac{1}{z}J_0'(z)=-J_0(z).
$$

Al aplicar esta identidad al corchete,

$$
x_k^{2}J_0''(x_k r)+\frac{x_k}{r}J_0'(x_k r)
= x_k^{2}\left[J_0''(x_k r)+\frac{1}{x_k r}J_0'(x_k r)\right]
= -x_k^{2}J_0(x_k r).
$$

Por tanto,

$$
a^{2}\left(u_{rr}+\frac{1}{r}u_r\right)
= -u_0 a^{2}x_k^{2}J_0(x_k r)\cos(a x_k t)
= u_{tt}.
$$

La ecuación de onda se cumple para $0<r<1$ y $t>0$.

**Condición de frontera.** Como $x_k$ es una raíz de $J_0$,

$$
u(1,t)=u_0 J_0(x_k)\cos(a x_k t)=0, \qquad t>0.
$$

**Condiciones iniciales.** En $t=0$, $\cos 0=1$ y $\sin 0=0$. Además,
$u_t=-u_0 a x_k J_0(x_k r)\sin(a x_k t)$, de modo que

$$
u(r,0)=u_0 J_0(x_k r), \qquad
\left.\frac{\partial u}{\partial t}\right|_{t=0}=0, \qquad 0<r<1.
$$

Se satisfacen las cuatro condiciones; en consecuencia, $u$ es solución del problema con valores en la frontera.

## Observaciones

La identidad de Bessel es el paso que reduce el operador radial. En el interior del disco, $u_{rr}+\frac{1}{r}u_r$ es finito en $r=0$ aunque $\frac{1}{r}u_r$ sea indeterminado allí: $J_0'(0)=0$ y $J_0(0)=1$.

Cada cero positivo $x_k$ de $J_0$ define un modo normal de frecuencia angular $a x_k$. La condición de frontera $u(1,t)=0$ es la que obliga a elegir los ceros de $J_0$; no se pide calcular su valor. La segunda condición inicial indica que la membrana se suelta desde el reposo.
