---
title: "Zill Repaso C12 Ejercicio 11"
exercise-id: zill-c12-sr-e011
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - contorno
  - sturm-liouville
competencies:
  - resolver-edp.ecuacion-calor
  - aplicar-condiciones.problema-valor-frontera
hidden-competencies:
  - seleccionar-metodo.separacion-variables-edp
  - clasificar.sturm-liouville
prerequisites:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.condiciones-frontera
metadata-status: pending
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c12sri02-p513.png
---

## Enunciado

Resuelva el problema con valores en la frontera
$$\begin{aligned}\frac{\partial^2 u}{\partial x^2} &= \frac{\partial u}{\partial t}, \quad 0 < x < \pi, \quad t > 0 \\ u(0, t) &= 0, \quad u(\pi, t) = 0, \quad t > 0 \\ u(x, 0) &= \sin x, \quad 0 < x < \pi\end{aligned}$$

## Solución

El problema es la **ecuación de calor** con fronteras de Dirichlet homogéneas. Su solución es

$$
u(x,t)=e^{-t}\sin x.
$$

## Resolución

Se buscan soluciones producto de la forma $u(x,t)=X(x)T(t)$. Las derivadas parciales son $u_{xx}=X''(x)T(t)$ y $u_t=X(x)T'(t)$. Al sustituir en la ecuación resulta

$$
X''(x)T(t)=X(x)T'(t).
$$

Se dividen ambos miembros entre el producto $X(x)T(t)$, que se supone distinto de cero:

$$
\frac{X''(x)}{X(x)}=\frac{T'(t)}{T(t)}.
$$

El miembro izquierdo depende solo de $x$ y el derecho solo de $t$. Para que la igualdad se cumpla en todo punto del dominio, ambos miembros deben ser la misma constante, que se denota $-\lambda$:

$$
\frac{X''(x)}{X(x)}=\frac{T'(t)}{T(t)}=-\lambda.
$$

La igualdad se desdobla en dos ecuaciones diferenciales ordinarias:

$$
\begin{aligned}
X''(x)+\lambda X(x) &= 0, \\
T'(t)+\lambda T(t) &= 0.
\end{aligned}
$$

Las condiciones de frontera $u(0,t)=0$ y $u(\pi,t)=0$ exigen $X(0)=0$ y $X(\pi)=0$, pues en caso contrario $u$ se anularía idénticamente. El problema en $X$ es entonces un problema de Sturm-Liouville con condiciones de frontera homogéneas. Para $\lambda>0$ su solución general es $X(x)=c_1\cos(\sqrt{\lambda}\,x)+c_2\sin(\sqrt{\lambda}\,x)$. La condición $X(0)=0$ da $c_1=0$. La condición $X(\pi)=0$ exige $c_2\sin(\sqrt{\lambda}\,\pi)=0$; como se busca una solución no trivial, se requiere $c_2\ne 0$, de modo que $\sqrt{\lambda}\,\pi=n\pi$ para algún entero positivo $n$. Así los valores propios son $\lambda=n^2$ y las funciones propias son

$$
X_n(x)=\sin(nx), \qquad n=1,2,3,\dots
$$

Para cada valor propio, la ecuación en $T$ es $T'(t)+n^2T(t)=0$, cuya solución es

$$
T_n(t)=e^{-n^2 t}.
$$

Por el principio de superposición, cualquier combinación lineal de las soluciones producto también resuelve la ecuación y las condiciones de frontera:

$$
u(x,t)=\sum_{n=1}^{\infty} B_n \sin(nx)\,e^{-n^2 t}.
$$

La condición inicial $u(x,0)=\sin x$ fija los coeficientes $B_n$ mediante

$$
\sin x=\sum_{n=1}^{\infty} B_n \sin(nx).
$$

Los coeficientes se obtienen por ortogonalidad de $\{\sin(nx)\}$ en $(0,\pi)$. La función $\sin x$ es ya la primera función propia, por lo que $B_1=1$ y $B_n=0$ para $n\ge 2$. La solución es

$$
u(x,t)=e^{-t}\sin x.
$$

Comprobación: al derivar se obtiene $u_{xx}=-e^{-t}\sin x$ y $u_t=-e^{-t}\sin x$, luego $u_{xx}=u_t$. Además, $u(0,t)=0$, $u(\pi,t)=e^{-t}\sin\pi=0$ y $u(x,0)=\sin x$.

## Observaciones

La condición inicial coincide con la primera función propia, de modo que la serie contiene un único término y no requiere calcular integrales para los coeficientes de Fourier. La solución decae de forma exponencial hacia cero cuando $t\to\infty$, en concordancia con las fronteras de Dirichlet tomadas en temperatura nula. La solución del problema de calor con datos de Dirichlet es única, por lo que esta es la única solución del problema.
