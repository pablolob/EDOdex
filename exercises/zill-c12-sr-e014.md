---
title: "Zill Repaso C12 Ejercicio 14"
exercise-id: zill-c12-sr-e014
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.separacion-variables
  - analizar-espectralmente.ortogonalidad
  - resolver-series.serie-senos
hidden-competencies:
  - seleccionar-metodo.separacion-variables-edp
  - resolver-analiticamente.cambio-variable
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
  - integracion.por-partes
difficulty:
  conceptual: 3
  technical: 2
source-images:
  - c12sri02-p513.png
---

## Enunciado

La concentración $c(x, t)$ de una sustancia que se difunde en un medio y que es arrastrada por las corrientes de convección del medio satisface la ecuación diferencial parcial
$$k\frac{\partial^2 c}{\partial x^2} - h\frac{\partial c}{\partial x} = \frac{\partial c}{\partial t},$$
$k$ y $h$ constantes. Resuelva la EDP sujeta a
$$\begin{aligned}c(0, t) &= 0, \quad c(1, t) = 0, \quad t > 0 \\ c(x, 0) &= c_0, \quad 0 < x < 1\end{aligned}$$
donde $c_0$ es una constante.

## Solución

$$
c(x,t)=2c_{0}\,e^{\frac{hx}{2k}}
\sum_{n=1}^{\infty}
\frac{n\pi\left(1+(-1)^{n+1}e^{-\frac{h}{2k}}\right)}
{n^{2}\pi^{2}+\left(\frac{h}{2k}\right)^{2}}
\,\sin(n\pi x)\,
e^{-\left(kn^{2}\pi^{2}+\frac{h^{2}}{4k}\right)t}.
$$

## Resolución

El problema es una EDP **lineal** de **segundo orden**, parabólica, con un término de convección. La derivada primera en $x$ impide aplicar directamente la separación de variables de la ecuación del calor; por eso se elimina primero ese término con un cambio de variable.

**Eliminación del término convectivo.** Se propone
$$c(x,t)=e^{\alpha x}v(x,t),$$
con $\alpha$ constante por determinar. Las derivadas son
$$
\begin{aligned}
c_x &= e^{\alpha x}\left(\alpha v+v_x\right),\\
c_{xx} &= e^{\alpha x}\left(\alpha^{2}v+2\alpha v_x+v_{xx}\right),\\
c_t &= e^{\alpha x}v_t.
\end{aligned}
$$
Al sustituir en $kc_{xx}-hc_x=c_t$ y dividir entre $e^{\alpha x}$ resulta
$$k v_{xx}+\left(2k\alpha-h\right)v_x+\left(k\alpha^{2}-h\alpha\right)v=v_t.$$
El coeficiente de $v_x$ se anula con $2k\alpha-h=0$, es decir, $\alpha=\dfrac{h}{2k}$. Para ese valor, $k\alpha^{2}-h\alpha=-\dfrac{h^{2}}{4k}$, y la EDP se reduce a
$$k v_{xx}-\frac{h^{2}}{4k}\,v=v_t,\qquad 0<x<1,\ t>0.$$
Las condiciones de frontera se conservan homogéneas, $v(0,t)=v(1,t)=0$, y la condición inicial pasa a ser
$$v(x,0)=e^{-\frac{hx}{2k}}c(x,0)=c_{0}e^{-\frac{hx}{2k}}.$$

**Separación de variables.** Se propone $v(x,t)=X(x)T(t)$. Al sustituir y dividir entre $X(x)T(t)$,
$$k\frac{X''(x)}{X(x)}-\frac{h^{2}}{4k}=\frac{T'(t)}{T(t)}=-\lambda,$$
con $\lambda$ constante. Resultan la ecuación temporal $T'+\lambda T=0$ y la ecuación espacial
$$X''+\frac{\lambda-\frac{h^{2}}{4k}}{k}X=0,$$
junto con $X(0)=X(1)=0$. Se escribe $\nu^{2}=\dfrac{\lambda-\frac{h^{2}}{4k}}{k}$. El problema $X''+\nu^{2}X=0$ con $X(0)=X(1)=0$ admite solución no trivial solo si $\nu=n\pi$, $n=1,2,\dots$ (para $\nu^{2}\le 0$ la única solución es $X\equiv 0$). Las funciones propias son
$$X_n(x)=\sin(n\pi x),\qquad n=1,2,\dots,$$
y los valores propios
$$\lambda_n=kn^{2}\pi^{2}+\frac{h^{2}}{4k}.$$
La ecuación temporal da $T_n(t)=e^{-\lambda_n t}$. Por superposición,
$$v(x,t)=\sum_{n=1}^{\infty}B_n\sin(n\pi x)\,e^{-\left(kn^{2}\pi^{2}+\frac{h^{2}}{4k}\right)t}.$$

**Determinación de los coeficientes.** La condición inicial exige
$$v(x,0)=c_{0}e^{-\frac{hx}{2k}}=\sum_{n=1}^{\infty}B_n\sin(n\pi x).$$
Esta es la **serie de Fourier en senos** de $c_{0}e^{-hx/(2k)}$ en $(0,1)$. Multiplicando por $\sin(m\pi x)$ e integrando en $(0,1)$, la ortogonalidad de $\{\sin(n\pi x)\}$ da
$$B_n=2c_{0}\int_0^1 e^{-\frac{hx}{2k}}\sin(n\pi x)\,dx.$$
Con $\alpha=\dfrac{h}{2k}$, la integral se evalúa por partes y vale
$$\int_0^1 e^{-\alpha x}\sin(n\pi x)\,dx=\frac{n\pi\left(1-(-1)^{n}e^{-\alpha}\right)}{n^{2}\pi^{2}+\alpha^{2}}.$$
Por tanto,
$$
B_n=2c_{0}\,\frac{n\pi\left(1-(-1)^{n}e^{-\frac{h}{2k}}\right)}
{n^{2}\pi^{2}+\left(\frac{h}{2k}\right)^{2}}
=2c_{0}\,\frac{n\pi\left(1+(-1)^{n+1}e^{-\frac{h}{2k}}\right)}
{n^{2}\pi^{2}+\left(\frac{h}{2k}\right)^{2}}.
$$

**Solución.** Restituyendo $c=e^{hx/(2k)}v$,
$$
c(x,t)=2c_{0}\,e^{\frac{hx}{2k}}
\sum_{n=1}^{\infty}
\frac{n\pi\left(1+(-1)^{n+1}e^{-\frac{h}{2k}}\right)}
{n^{2}\pi^{2}+\left(\frac{h}{2k}\right)^{2}}
\,\sin(n\pi x)\,
e^{-\left(kn^{2}\pi^{2}+\frac{h^{2}}{4k}\right)t}.
$$

**Comprobación.** En $x=0$ y $x=1$ todos los senos se anulan, luego $c(0,t)=c(1,t)=0$. En $t=0$, la serie es la serie de Fourier en senos de $c_{0}e^{-hx/(2k)}$; al multiplicar por $e^{hx/(2k)}$ se obtiene $c(x,0)=c_0$ para $0<x<1$. Cada término $e^{hx/(2k)}\sin(n\pi x)e^{-\lambda_n t}$ verifica $kc_{xx}-hc_x=c_t$: la exponencial elimina el término convectivo y $\sin(n\pi x)e^{-\lambda_n t}$ resuelve el problema separado. Por linealidad, la serie también satisface la EDP. Como $\lambda_n>0$ para todo $n$, se tiene $c(x,t)\to 0$ cuando $t\to\infty$.

## Observaciones

Las funciones propias del operador espacial original son $X_n(x)=e^{hx/(2k)}\sin(n\pi x)$. No son ortogonales respecto del producto interno usual, pero sí lo son con el peso $e^{-hx/k}$; esa es la razón del factor exponencial en la solución. La convección inclina el perfil espacial y desplaza todos los ritmos de decaimiento en $h^{2}/(4k)$.

Cuando $h=0$ no hay convección y la fórmula se reduce a la solución clásica de la ecuación del calor con dato inicial constante,
$$c(x,t)=\frac{4c_{0}}{\pi}\sum_{m=1}^{\infty}\frac{\sin\!\big((2m-1)\pi x\big)}{2m-1}\,e^{-k(2m-1)^{2}\pi^{2}t},$$
pues $1+(-1)^{n+1}$ anula los coeficientes pares.

### Método alternativo: separación directa con funciones propias ponderadas

También puede separarse directamente $c(x,t)=X(x)T(t)$ en la EDP original. Se obtiene $kX''-hX'+\lambda X=0$ con $X(0)=X(1)=0$. La ecuación característica solo da soluciones no triviales para $\lambda=\lambda_n=kn^{2}\pi^{2}+\frac{h^{2}}{4k}$, con $X_n(x)=e^{hx/(2k)}\sin(n\pi x)$. Estas funciones propias son ortogonales con el peso $e^{-hx/k}$, de modo que
$$A_n=\frac{\langle c_0, X_n\rangle_w}{\lVert X_n\rVert_w^{2}}
=2c_{0}\,\frac{n\pi\left(1+(-1)^{n+1}e^{-\frac{h}{2k}}\right)}
{n^{2}\pi^{2}+\left(\frac{h}{2k}\right)^{2}},$$
y se recupera la misma serie. El cambio de variable inicial evita el análisis del operador no autoadjunto.
