---
title: "Zill Repaso C12 Ejercicio 6"
exercise-id: zill-c12-sr-e006
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 6"
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-onda
  - resolver-edp.separacion-variables
  - aplicar-condiciones.problema-valor-frontera
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
  - integracion.directa
statement-status: accepted
solution-status: draft
metadata-status: pending
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c12sri01-p512.png
---

## Enunciado

La ecuación diferencial parcial
$$
\frac{\partial^2 u}{\partial x^2} + x^2 = \frac{\partial^2 u}{\partial t^2}
$$
es una forma de la ecuación de onda cuando se aplica una fuerza vertical externa proporcional al cuadrado de la distancia horizontal en el extremo izquierdo de la cuerda. La cuerda está anclada en $x = 0$, una unidad arriba del eje $x$ y en el eje $x$ en $x = 1$ para $t > 0$. Encuentre el desplazamiento $u(x, t)$ si la cuerda parte del reposo desde un desplazamiento $f(x)$.

## Solución

$$
u(x,t)=\frac{12-11x-x^4}{12}+\sum_{n=1}^{\infty}B_n\sin(n\pi x)\cos(n\pi t),
$$

con los coeficientes

$$
B_n=2\int_0^1\left[f(x)-\frac{12-11x-x^4}{12}\right]\sin(n\pi x)\,dx.
$$

## Resolución

El problema es una **ecuación de onda** no homogénea con condiciones de frontera no homogéneas y velocidad inicial nula:

$$
\begin{cases}
u_{xx}+x^2=u_{tt}, & 0<x<1,\ t>0,\\[4pt]
u(0,t)=1,\quad u(1,t)=0, & t>0,\\[4pt]
u(x,0)=f(x),\quad u_t(x,0)=0, & 0<x<1.
\end{cases}
$$

**Estado estacionario.** El término forzante $x^2$ y los valores de frontera no dependen de $t$. Se busca entonces un perfil $\psi(x)$ que satisfaga la parte espacial en ausencia de movimiento, es decir $\psi''+x^2=0$, con $\psi(0)=1$ y $\psi(1)=0$. Al integrar dos veces,

$$
\psi'(x)=-\frac{x^3}{3}+C_1, \qquad \psi(x)=-\frac{x^4}{12}+C_1x+C_2.
$$

Las condiciones de frontera dan $C_2=1$ y $-\frac{1}{12}+C_1+1=0$, de donde $C_1=-\frac{11}{12}$. Por tanto,

$$
\psi(x)=\frac{12-11x-x^4}{12}.
$$

**Reducción a un problema homogéneo.** Se escribe $u(x,t)=\psi(x)+v(x,t)$. Al sustituir, con $\psi_t=0$ y $\psi''+x^2=0$, el forzante y el perfil se cancelan:

$$
(\psi''+v_{xx})+x^2=v_{tt} \quad\Longrightarrow\quad v_{xx}=v_{tt}.
$$

Las condiciones de frontera de $v$ son $v(0,t)=u(0,t)-\psi(0)=0$ y $v(1,t)=u(1,t)-\psi(1)=0$. Las condiciones iniciales son $v(x,0)=f(x)-\psi(x)$ y $v_t(x,0)=0$. Queda el problema homogéneo

$$
v_{xx}=v_{tt},\qquad v(0,t)=v(1,t)=0,\qquad v(x,0)=f(x)-\psi(x),\quad v_t(x,0)=0.
$$

**Separación de variables.** Se propone $v(x,t)=X(x)T(t)$. Al sustituir y dividir entre $X(x)T(t)$,

$$
\frac{T''(t)}{T(t)}=\frac{X''(x)}{X(x)}=-\lambda.
$$

Resultan $X''+\lambda X=0$ y $T''+\lambda T=0$, con $X(0)=X(1)=0$. El problema de frontera homogéneo en $X$ es un **problema de Sturm-Liouville** con valores propios $\lambda_n=n^2\pi^2$ y funciones propias $X_n(x)=\sin(n\pi x)$, $n=1,2,\dots$ (los casos $\lambda\le 0$ solo admiten la solución trivial). La ecuación temporal es $T''+n^2\pi^2T=0$, cuya solución general es $T_n(t)=a_n\cos(n\pi t)+b_n\sin(n\pi t)$. La condición $v_t(x,0)=0$ exige $T_n'(0)=n\pi b_n=0$, luego $b_n=0$ y $T_n(t)=\cos(n\pi t)$. Por el principio de superposición,

$$
v(x,t)=\sum_{n=1}^{\infty}B_n\sin(n\pi x)\cos(n\pi t).
$$

**Coeficientes.** Al evaluar en $t=0$,

$$
v(x,0)=\sum_{n=1}^{\infty}B_n\sin(n\pi x)=f(x)-\psi(x).
$$

Por la ortogonalidad de $\{\sin(n\pi x)\}$ en $(0,1)$, los coeficientes son los de la **serie de Fourier en senos** de $f(x)-\psi(x)$:

$$
B_n=2\int_0^1\bigl[f(x)-\psi(x)\bigr]\sin(n\pi x)\,dx.
$$

Sustituyendo $\psi$, la solución es

$$
u(x,t)=\frac{12-11x-x^4}{12}+\sum_{n=1}^{\infty}B_n\sin(n\pi x)\cos(n\pi t).
$$

**Comprobación.** En $x=0$ todos los senos se anulan y $u(0,t)=\psi(0)=1$; en $x=1$, $u(1,t)=\psi(1)=0$. En $t=0$, $\cos(0)=1$ y la serie con coeficientes $B_n$ reconstruye $f(x)-\psi(x)$, de modo que $u(x,0)=f(x)$. Además $u_t(x,0)=-\sum_{n=1}^{\infty}n\pi B_n\sin(n\pi x)\sin(0)=0$. Para la EDP, la parte estacionaria satisface $\psi''+x^2=0$ y cada modo satisface $v_{xx}=v_{tt}$, ya que ambos miembros valen $-n^2\pi^2\sin(n\pi x)\cos(n\pi t)$; por linealidad, $u=\psi+v$ satisface la ecuación original.

## Observaciones

La función $\psi(x)$ es el perfil de equilibrio de la cuerda: corrige el forzante $x^2$ y ancla los extremos en $1$ y $0$ antes de tratar la vibración. La desviación $v$ es la onda libre que parte del reposo desde $f(x)-\psi(x)$.

La representación en serie requiere que $f$ sea suficientemente regular (continua a trozos y con derivada continua a trozos) para que su serie en senos converja; en tal caso la solución es válida para $0<x<1$ y $t>0$. Si $f$ no admite esa expansión, la solución debe interpretarse en el sentido de la serie formal correspondiente.
