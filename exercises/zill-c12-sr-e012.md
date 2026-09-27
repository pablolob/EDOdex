---
title: "Zill Repaso C12 Ejercicio 12"
exercise-id: zill-c12-sr-e012
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 12"
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-calor
  - aplicar-condiciones.problema-valor-frontera
  - resolver-edp.estado-estacionario
hidden-competencies:
  - seleccionar-metodo.separacion-variables-edp
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.por-partes
  - ecuaciones-diferenciales.condiciones-frontera
difficulty:
  conceptual: 2
  technical: 2
solution-status: draft
statement-status: accepted
metadata-status: pending
source-images:
  - c12sri02-p513.png
---

## Enunciado

Resuelva el problema con valores en la frontera
$$\begin{aligned}\frac{\partial^2 u}{\partial x^2} + \sin x &= \frac{\partial u}{\partial t}, \quad 0 < x < \pi, \quad t > 0 \\ u(0, t) &= 400, \quad u(\pi, t) = 200, \quad t > 0 \\ u(x, 0) &= 400 + \sin x, \quad 0 < x < \pi\end{aligned}$$

## Solución

$$
u(x,t)=400-\frac{200}{\pi}x+\sin x+\frac{400}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\,e^{-n^{2}t}\sin(nx).
$$

## Resolución

La EDP no es homogénea y las condiciones de frontera son constantes distintas, de modo que no admite una separación de variables directa. Conviene separar primero la parte estacionaria, que absorbe el término fuente y las condiciones de frontera, y resolver después un problema homogéneo.

**Solución de estado estacionario.** Se busca una función $\psi(x)$ que satisfaga la parte independiente del tiempo,

$$
\psi''(x)+\sin x=0,\qquad \psi(0)=400,\quad \psi(\pi)=200.
$$

Integrando dos veces se obtiene $\psi(x)=\sin x+C_1x+C_2$. Las condiciones de frontera dan $C_2=400$ y $C_1\pi+400=200$, es decir $C_1=-\frac{200}{\pi}$. Por tanto

$$
\psi(x)=400-\frac{200}{\pi}x+\sin x.
$$

**Problema homogéneo.** Se define $v(x,t)=u(x,t)-\psi(x)$. Al restar se tiene $v_t=u_t$ y $v_{xx}=u_{xx}-\psi''=u_{xx}+\sin x$, de donde

$$
v_t=v_{xx},\qquad 0<x<\pi,\quad t>0,
$$

con $v(0,t)=v(\pi,t)=0$ y $v(x,0)=u(x,0)-\psi(x)=\frac{200}{\pi}x$.

**Separación de variables.** Se propone $v(x,t)=X(x)T(t)$. Al sustituir resulta $X T'=X'' T$; dividiendo entre el producto $X(x)T(t)$ se separa

$$
\frac{T'(t)}{T(t)}=\frac{X''(x)}{X(x)}=-\lambda.
$$

La frontera exige $X(0)=X(\pi)=0$. El problema de Sturm-Liouville $X''+\lambda X=0$ con esas condiciones tiene valores propios $\lambda_n=n^2$ y funciones propias $X_n(x)=\sin(nx)$, para $n=1,2,\dots$. La parte temporal es $T_n(t)=e^{-n^{2}t}$. Por superposición,

$$
v(x,t)=\sum_{n=1}^{\infty}B_n\,e^{-n^{2}t}\sin(nx).
$$

**Determinación de los coeficientes.** La condición inicial impone $\sum_{n\ge 1}B_n\sin(nx)=\frac{200}{\pi}x$. Por ortogonalidad de las funciones propias en $[0,\pi]$,

$$
B_n=\frac{2}{\pi}\int_0^{\pi}\frac{200}{\pi}x\sin(nx)\,dx
=\frac{400}{\pi^2}\int_0^{\pi}x\sin(nx)\,dx.
$$

La integral se calcula por partes,

$$
\int_0^{\pi}x\sin(nx)\,dx=\left[-\frac{x\cos(nx)}{n}\right]_0^{\pi}+\frac{1}{n}\int_0^{\pi}\cos(nx)\,dx=\frac{\pi(-1)^{n+1}}{n},
$$

pues $\cos(n\pi)=(-1)^n$ y la segunda integral se anula. Entonces

$$
B_n=\frac{400(-1)^{n+1}}{\pi n}.
$$

Al reunir $\psi$ y $v$ se obtiene la solución anunciada.

Comprobación: en $t=0$ la serie de senos reproduce $\frac{200}{\pi}x$, de modo que $u(x,0)=\psi(x)+\frac{200}{\pi}x=400+\sin x$. En $x=0$ y $x=\pi$ la serie se anula y la solución toma los valores $400$ y $200$. La EDP se satisface por construcción.

## Observaciones

El término no homogéneo $\sin x$ coincide con la primera función propia del problema. Por eso queda completamente absorbido por la solución de estado estacionario y no aporta un término adicional en la serie.

Cuando $t\to\infty$ los factores exponenciales tienden a cero y la solución tiende a $\psi(x)=400-\frac{200}{\pi}x+\sin x$, la distribución estacionaria que imponen la fuente y las condiciones de frontera.

La solución es válida para $0<x<\pi$ y $t>0$. En $t=0$ la serie converge a la condición inicial en cada punto del intervalo.
