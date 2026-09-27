---
title: "Zill Repaso C13 Ejercicio 18"
exercise-id: zill-c13-sr-e018
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 18"
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-laplace
  - resolver-edp.coordenadas-cilindricas
  - resolver-edp.separacion-variables
hidden-competencies:
  - seleccionar-metodo.separacion-variables-edp
  - analizar-espectralmente.valores-propios
prerequisitos:
  - ecuaciones-diferenciales.condiciones-frontera
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
difficulty:
  conceptual: 3
  technical: 2
statement-status: accepted
solution-status: draft
metadata-status: pending
source-images:
  - c13sri02-p532.png
---

## Enunciado

Resuelva el problema del valor en la frontera
$$\frac{\partial^2 u}{\partial r^2} + \frac{1}{r}\frac{\partial u}{\partial r} + \frac{\partial^2 u}{\partial z^2} = 0, \quad 0 < r < 3, \quad 0 < z < 1$$
$$u(3, z) = u_0, \quad 0 < z < 1$$
$$u(r, 0) = 0, \quad u(r, 1) = 0, \quad 0 < r < 3.$$

## Solución

La temperatura de estado estable es

$$
u(r,z)=\frac{4u_0}{\pi}\sum_{n=0}^{\infty}\frac{1}{2n+1}\,\frac{I_0\big((2n+1)\pi r\big)}{I_0\big(3(2n+1)\pi\big)}\,\sin\big((2n+1)\pi z\big),
\qquad 0\le r\le 3,\quad 0\le z\le 1,
$$

donde $I_0$ es la función de Bessel modificada de primera especie de orden cero.

## Resolución

La temperatura de estado estable satisface la **ecuación de Laplace**. El problema no depende del ángulo, así que en coordenadas cilíndricas se reduce a

$$
u_{rr}+\frac{1}{r}u_r+u_{zz}=0,\qquad 0<r<3,\quad 0<z<1.
$$

Se aplica **separación de variables** con $u(r,z)=R(r)Z(z)$. Al sustituir y dividir entre $RZ$ resulta

$$
\frac{R''+\frac{1}{r}R'}{R}+\frac{Z''}{Z}=0.
$$

Cada sumando depende de una sola variable, de modo que ambos son iguales a una misma constante. Las condiciones $u(r,0)=u(r,1)=0$ obligan a $Z(0)=Z(1)=0$, así que $Z$ debe oscilar. Se elige entonces

$$
\frac{Z''}{Z}=-\lambda,\qquad \frac{R''+\frac{1}{r}R'}{R}=\lambda,\qquad \lambda>0.
$$

Se obtienen las dos ecuaciones

$$
Z''+\lambda Z=0,\qquad r^{2}R''+rR'-\lambda r^{2}R=0.
$$

**Problema en $z$.** Con $Z(0)=Z(1)=0$, la ecuación $Z''+\lambda Z=0$ tiene solución no trivial solo para los valores propios $\lambda_n=n^{2}\pi^{2}$, con $n=1,2,\dots$, y funciones propias $Z_n(z)=\sin n\pi z$.

**Problema radial.** Con $\lambda=n^{2}\pi^{2}$ la ecuación radial es

$$
r^{2}R''+rR'-n^{2}\pi^{2}r^{2}R=0,
$$

que es la **ecuación de Bessel modificada** de orden cero. Su solución general es

$$
R(r)=c_1I_0(n\pi r)+c_2K_0(n\pi r).
$$

La función $K_0$ diverge en $r=0$. Como la temperatura debe ser finita sobre el eje, $c_2=0$ y $R_n(r)=I_0(n\pi r)$.

**Superposición.** Por el principio de superposición,

$$
u(r,z)=\sum_{n=1}^{\infty}A_nI_0(n\pi r)\sin n\pi z.
$$

**Condición de frontera en $r=3$.** Al imponer $u(3,z)=u_0$ queda

$$
\sum_{n=1}^{\infty}A_nI_0(3n\pi)\sin n\pi z=u_0,\qquad 0<z<1.
$$

El miembro izquierdo es la **serie de Fourier** en senos de la constante $u_0$ en $[0,1]$, con coeficientes

$$
\begin{aligned}
A_nI_0(3n\pi)&=2\int_0^1 u_0\sin n\pi z\,dz
=\frac{2u_0}{n\pi}\big(1-(-1)^n\big).
\end{aligned}
$$

El factor $1-(-1)^n$ se anula para $n$ par y vale $2$ para $n$ impar. Por tanto $A_n=0$ si $n$ es par, y

$$
A_n=\frac{4u_0}{n\pi\,I_0(3n\pi)},\qquad n=1,3,5,\dots
$$

Al reindexar los enteros impares como $n=2k+1$ se obtiene la expresión de la sección Solución.

**Comprobación.** Cada término $A_nI_0(n\pi r)\sin n\pi z$ satisface la ecuación, pues $I_0(n\pi r)$ resuelve la ecuación radial y $\sin n\pi z$ resuelve $Z''+n^{2}\pi^{2}Z=0$. Las condiciones $u(r,0)=u(r,1)=0$ se cumplen término a término, y la condición $u(3,z)=u_0$ se satisface por la construcción de los coeficientes de Fourier.

## Observaciones

En las esquinas $(3,0)$ y $(3,1)$ los datos de frontera son incompatibles ($u_0$ frente a $0$). En esos puntos cada término de la serie contiene $\sin((2n+1)\pi z)$ y se anula, así que la serie vale $0$; el valor $u_0/2$ aparece solo como límite direccional a lo largo de la bisectriz de la esquina, no como valor en el punto. Por el principio del máximo, $0<u(r,z)<u_0$ en el interior del cilindro.

La ecuación radial es la de Bessel modificada porque, al separar la variable $z$, el separador cambia de signo respecto de la dirección radial; estas soluciones se relacionan con las de Bessel mediante $I_0(x)=J_0(ix)$. Para $0<r<3$, como $I_0(x)\sim e^{x}/\sqrt{2\pi x}$ cuando $x\to\infty$, el cociente $I_0((2n+1)\pi r)/I_0(3(2n+1)\pi)$ decae como $e^{-(2n+1)\pi(3-r)}$ y la serie converge. En $r=3$ la serie se reduce a la serie de Fourier en senos de $u_0$, que converge por el criterio de Dirichlet.
