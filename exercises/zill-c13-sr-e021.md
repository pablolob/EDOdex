---
title: "Zill Repaso C13 Ejercicio 21"
exercise-id: zill-c13-sr-e021
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 13, ejercicio 21"
topics:
  - contorno
competencies:
  - resolver-edp.ecuacion-laplace
  - resolver-edp.coordenadas-polares
  - aplicar-condiciones.problema-valor-frontera
hidden-competencies:
  - seleccionar-metodo.separacion-variables-edp
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
  - integracion.identidades-trigonometricas
difficulty:
  conceptual: 2
  technical: 2
solution-status: draft
statement-status: accepted
source-images:
  - c13sri02-p532.png
---

## Enunciado

Suponga las condiciones en la frontera para una placa anular definida por $1 < r < 2$ son
$$u(1, \theta) = \sin^2 \theta, \quad \left.\frac{\partial u}{\partial r}\right|_{r=2} = 0, \quad 0 < \theta < 2\pi.$$
Demuestre que la temperatura del estado estable $u(r, \theta)$ en la placa es
$$u(r, \theta) = \frac{1}{2} - \frac{1}{34} r^2 \cos 2\theta - \frac{8}{17} r^{-2} \cos 2\theta.$$
[Sugerencia: Use la identidad $\sin^2 \theta = \frac{1}{2}(1 - \cos 2\theta)$.]

## Solución

La temperatura del estado estable es

$$
u(r,\theta)=\frac{1}{2}-\frac{1}{34}r^{2}\cos 2\theta-\frac{8}{17}r^{-2}\cos 2\theta,
\qquad 1<r<2,\quad 0<\theta<2\pi.
$$

## Resolución

La temperatura de estado estable satisface la ecuación de Laplace. En coordenadas polares,

$$
\frac{\partial^{2}u}{\partial r^{2}}+\frac{1}{r}\frac{\partial u}{\partial r}+\frac{1}{r^{2}}\frac{\partial^{2}u}{\partial \theta^{2}}=0.
$$

Se aplica **separación de variables** con $u(r,\theta)=R(r)\Theta(\theta)$. Al sustituir y multiplicar por $r^{2}/(R\Theta)$,

$$
\frac{r^{2}R''+rR'}{R}=-\frac{\Theta''}{\Theta}=\lambda,
$$

de modo que

$$
\Theta''+\lambda\Theta=0,
\qquad
r^{2}R''+rR'-\lambda R=0.
$$

La condición de periodicidad $\Theta(\theta+2\pi)=\Theta(\theta)$ exige $\lambda=n^{2}$ con $n=0,1,2,\dots$. Para $n=0$ la ecuación angular da una constante y la radial $r^{2}R''+rR'=0$ da $R=A_0+B_0\ln r$. Para $n\ge 1$ la ecuación radial es de Cauchy-Euler y admite $r^{n}$ y $r^{-n}$. Como la placa es un anillo y $r=0$ queda excluido, ambas potencias se conservan. Por superposición,

$$
u(r,\theta)=A_0+B_0\ln r+\sum_{n\ge 1}\left[\left(C_n r^{n}+D_n r^{-n}\right)\cos n\theta+\left(E_n r^{n}+F_n r^{-n}\right)\sin n\theta\right].
$$

Se reescribe la condición interior con la identidad de la sugerencia:

$$
\sin^{2}\theta=\frac{1}{2}-\frac{1}{2}\cos 2\theta.
$$

Al imponer $u(1,\theta)=\sin^{2}\theta$ y comparar coeficientes por ortogonalidad de $\{1,\cos n\theta,\sin n\theta\}$,

$$
A_0=\frac{1}{2},\qquad C_2+D_2=-\frac{1}{2},
$$

y todos los demás coeficientes son nulos, en particular $E_n=F_n=0$.

Ahora se impone $\partial u/\partial r|_{r=2}=0$. La derivada radial es

$$
\frac{\partial u}{\partial r}=\frac{B_0}{r}+\sum_{n\ge 1}n\left(C_n r^{n-1}-D_n r^{-n-1}\right)\cos n\theta+n\left(E_n r^{n-1}-F_n r^{-n-1}\right)\sin n\theta.
$$

Al anularla en $r=2$ y comparar coeficientes, el término constante da $B_0/2=0$, es decir $B_0=0$. Para el modo $n=2$,

$$
2\left(C_2\cdot 2-D_2\cdot 2^{-3}\right)=0
\;\Rightarrow\;
4C_2-\frac{D_2}{4}=0
\;\Rightarrow\;
D_2=16C_2.
$$

El sistema formado por $C_2+D_2=-1/2$ y $D_2=16C_2$ da

$$
17C_2=-\frac{1}{2}
\;\Rightarrow\;
C_2=-\frac{1}{34},
\qquad
D_2=-\frac{8}{17}.
$$

Al sustituir estos coeficientes y $B_0=0$ resulta

$$
u(r,\theta)=\frac{1}{2}-\frac{1}{34}r^{2}\cos 2\theta-\frac{8}{17}r^{-2}\cos 2\theta.
$$

Comprobación. En $r=1$, el coeficiente de $\cos 2\theta$ vale $-1/34-8/17=-1/2$, luego $u(1,\theta)=1/2-\tfrac12\cos 2\theta=\sin^{2}\theta$. La derivada radial es

$$
\frac{\partial u}{\partial r}=-\frac{1}{17}r\cos 2\theta+\frac{16}{17}r^{-3}\cos 2\theta,
$$

que en $r=2$ se anula. Por último, cada término ($r^{2}\cos 2\theta$ y $r^{-2}\cos 2\theta$) es armónico, por lo que la función satisface la ecuación de Laplace en el anillo.

## Observaciones

Cada armónico $r^{\pm n}\cos n\theta$ resuelve la ecuación de Laplace, y la frontera solo contiene los modos $n=0$ y $n=2$; ese es el motivo de que la solución tenga únicamente esos dos modos. La constante $1/2$ es la temperatura media en la frontera interior, $\frac{1}{2\pi}\int_0^{2\pi}\sin^{2}\theta\,d\theta$.

### Método alternativo: verificación directa

Si se admite la forma de la solución, basta proponer

$$
u(r,\theta)=a+\left(b r^{2}+c r^{-2}\right)\cos 2\theta
$$

y determinar $a,b,c$. La ecuación de Laplace se cumple porque $1$, $r^{2}\cos 2\theta$ y $r^{-2}\cos 2\theta$ son armónicos. Las condiciones de frontera dan $a=1/2$, $b+c=-1/2$ y $4b-c/4=0$, con la misma solución $a=1/2$, $b=-1/34$, $c=-8/17$. Por unicidad del problema de frontera, esta es la temperatura de estado estable.
