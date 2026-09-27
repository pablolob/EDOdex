---
title: "Zill Repaso C12 Ejercicio 18"
exercise-id: zill-c12-sr-e018
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 18"
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-calor
  - resolver-edp.separacion-variables
  - aplicar-condiciones.problema-valor-frontera
hidden-competencies:
  - analizar-espectralmente.valores-propios
  - analizar-espectralmente.ortogonalidad
  - seleccionar-metodo.separacion-variables-edp
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
statement-status: accepted
solution-status: draft
metadata-status: pending
source-images:
  - c12sri02-p513.png
---

## Enunciado

Resuelva el problema de valor de frontera
$$\begin{aligned}\frac{\partial^2 u}{\partial x^2} + e^x &= \frac{\partial u}{\partial t}, \quad 0 < x < \pi, \quad t > 0 \\ u(0, t) &= 0, \quad \left.\frac{\partial u}{\partial x}\right|_{x=\pi} = 0, \quad t > 0 \\ u(x, 0) &= f(x), \quad 0 < x < \pi\end{aligned}$$

## Solución

$$
u(x,t)=1-e^{x}+e^{\pi}x+\sum_{n=0}^{\infty}B_n\,
\sin\!\left(\left(n+\tfrac12\right)x\right)e^{-(n+\frac12)^2t},
$$

donde

$$
B_n=\frac{2}{\pi}\int_0^{\pi}\Big[f(x)-1+e^{x}-e^{\pi}x\Big]
\sin\!\left(\left(n+\tfrac12\right)x\right)\,dx,
\qquad n=0,1,2,\dots
$$

## Resolución

La ecuación es la **ecuación del calor** con un término fuente independiente de $t$ y una frontera mixta: **Dirichlet** homogénea en $x=0$ y **Neumann** homogénea en $x=\pi$. Como la fuente no depende del tiempo, se separa una solución de estado estacionario y se resuelve un problema homogéneo para la desviación.

**Estado estacionario.** Se busca $\psi(x)$ que satisfaga la ecuación con $u_t=0$ y las dos condiciones de frontera:

$$
\psi''(x)+e^{x}=0,\qquad \psi(0)=0,\qquad \psi'(\pi)=0.
$$

Al integrar dos veces, $\psi'(x)=-e^{x}+c_1$ y $\psi(x)=-e^{x}+c_1x+c_2$. La condición $\psi(0)=0$ da $c_2=1$; la condición $\psi'(\pi)=0$ da $c_1=e^{\pi}$. Por tanto,

$$
\psi(x)=1-e^{x}+e^{\pi}x.
$$

**Reducción a un problema homogéneo.** Se escribe $u(x,t)=\psi(x)+v(x,t)$. Como $\psi_t=0$ y $\psi''=-e^{x}$, al sustituir en la EDP se cancela la fuente:

$$
\psi''+v_{xx}+e^{x}=v_t \quad\Longrightarrow\quad v_{xx}=v_t.
$$

Las condiciones de frontera quedan homogéneas:

$$
v(0,t)=u(0,t)-\psi(0)=0,\qquad v_x(\pi,t)=u_x(\pi,t)-\psi'(\pi)=0.
$$

La condición inicial es $v(x,0)=f(x)-\psi(x)=f(x)-1+e^{x}-e^{\pi}x$. Queda el problema homogéneo

$$
v_{xx}=v_t,\qquad v(0,t)=0,\quad v_x(\pi,t)=0,\qquad v(x,0)=f(x)-\psi(x).
$$

**Separación de variables.** Se propone $v(x,t)=X(x)T(t)$. Al sustituir en $v_{xx}=v_t$ y dividir entre el producto $X(x)T(t)$,

$$
\frac{X''(x)}{X(x)}=\frac{T'(t)}{T(t)}=-\lambda.
$$

Resultan la ecuación espacial $X''+\lambda X=0$ con $X(0)=0$ y $X'(\pi)=0$, y la ecuación temporal $T'+\lambda T=0$.

**Problema de valores propios.** Los casos $\lambda\le 0$ solo admiten la solución trivial. Para $\lambda=\mu^{2}>0$,

$$
X(x)=c_1\cos(\mu x)+c_2\sin(\mu x).
$$

La condición $X(0)=0$ da $c_1=0$. Entonces $X'(x)=c_2\mu\cos(\mu x)$ y la condición $X'(\pi)=0$ exige $\cos(\mu\pi)=0$, es decir $\mu=n+\tfrac12$ con $n=0,1,2,\dots$. Los valores y funciones propias son

$$
\lambda_n=\left(n+\tfrac12\right)^{2},\qquad
X_n(x)=\sin\!\left(\left(n+\tfrac12\right)x\right).
$$

La ecuación temporal da $T_n(t)=e^{-(n+\frac12)^2t}$. Por el **principio de superposición**,

$$
v(x,t)=\sum_{n=0}^{\infty}B_n\,
\sin\!\left(\left(n+\tfrac12\right)x\right)e^{-(n+\frac12)^2t}.
$$

**Condición inicial modificada.** Al evaluar en $t=0$,

$$
v(x,0)=\sum_{n=0}^{\infty}B_n\sin\!\left(\left(n+\tfrac12\right)x\right)=f(x)-\psi(x).
$$

Las funciones $\left\{\sin\!\left(\left(n+\tfrac12\right)x\right)\right\}$ son ortogonales en $(0,\pi)$ y

$$
\int_0^{\pi}\sin^{2}\!\left(\left(n+\tfrac12\right)x\right)\,dx=\frac{\pi}{2}.
$$

Por tanto, los coeficientes de la **serie de Fourier en senos** de la desviación son

$$
B_n=\frac{2}{\pi}\int_0^{\pi}\big[f(x)-\psi(x)\big]
\sin\!\left(\left(n+\tfrac12\right)x\right)\,dx.
$$

Al recuperar $u=\psi+v$ se obtiene la solución enunciada en **Solución**.

**Comprobación.** La parte estacionaria satisface $\psi''+e^{x}=0$ y cumple $\psi(0)=0$, $\psi'(\pi)=0$; la serie $v$ resuelve $v_{xx}=v_t$ por construcción de cada modo. En $x=0$ los senos se anulan, luego $u(0,t)=\psi(0)=0$. En $x=\pi$ los cosenos de cada modo se anulan, porque $\cos\!\big((n+\tfrac12)\pi\big)=0$, de modo que $u_x(\pi,t)=\psi'(\pi)=0$. En $t=0$ la serie reproduce $f(x)-\psi(x)$, y al sumar $\psi(x)$ resulta $u(x,0)=f(x)$. Por tanto la solución satisface la EDP y las tres condiciones del problema.

## Observaciones

La función $\psi(x)=1-e^{x}+e^{\pi}x$ es el estado estacionario: el término fuente $e^{x}$ alimenta la varilla y la solución tiende a $\psi(x)$ cuando $t\to\infty$, pues cada modo exponencial decae.

La condición de Neumann en $x=\pi$ es la que fija los valores propios semienteros $\left(n+\tfrac12\right)^{2}$; con fronteras de Dirichlet en ambos extremos aparecerían, en cambio, los valores $n^{2}$. Los modos son las funciones $\sin\!\left(\left(n+\tfrac12\right)x\right)$, ortogonales en $(0,\pi)$.

La solución está definida para $0<x<\pi$ y $t>0$. Si $f$ no cumple $f(0)=0$ o $f'(\pi)=0$, la serie puede no representar $f$ de forma continua en las esquinas, aunque sigue resolviendo el problema en el interior y converge en media cuadrática.
