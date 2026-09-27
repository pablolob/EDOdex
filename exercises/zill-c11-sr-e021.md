---
title: "Zill Repaso C11 Ejercicio 21"
exercise-id: zill-c11-sr-e021
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
  - contorno
competencies:
  - resolver-series.serie-bessel
  - analizar-espectralmente.ortogonalidad
  - analizar-espectralmente.valores-propios
prerequisitos:
  - ecuaciones-diferenciales.bessel
  - algebra-lineal-avanzada.ortogonalidad
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c11sri02-p472.png
---

## Enunciado

Desarrolle
$$f(x) = \begin{cases} 1, & 0 < x < 2 \\ 0, & 2 < x < 4 \end{cases}$$
en una serie de Fourier-Bessel y utilice funciones de Bessel de orden cero que satisfagan la condición a la frontera $J_0(4\alpha) = 0$.

## Solución

Con $\alpha_n$ las raíces positivas de $J_0(4\alpha)=0$, la serie de Fourier-Bessel es

$$
f(x)=\sum_{n=1}^{\infty}\frac{J_1(2\alpha_n)}{4\,\alpha_n\,J_1^2(4\alpha_n)}\,J_0(\alpha_n x),\qquad 0<x<4.
$$

## Resolución

**1. Valores y funciones propias.** La condición en la frontera $J_0(4\alpha)=0$ determina las raíces positivas $\alpha_1<\alpha_2<\alpha_3<\cdots$, que son los valores propios del problema de Bessel de orden cero sobre $[0,4]$. Sus funciones propias son $J_0(\alpha_n x)$, finitas en $x=0$ y nulas en $x=4$.

**2. Serie y coeficientes.** La función $f$ se desarrolla como

$$
f(x)=\sum_{n=1}^{\infty}c_n\,J_0(\alpha_n x),
$$

donde las funciones propias son ortogonales en $[0,4]$ con peso $x$. El coeficiente se obtiene con el **producto interno** ponderado:

$$
c_n=\frac{\displaystyle\int_0^4 x\,f(x)\,J_0(\alpha_n x)\,dx}{\displaystyle\int_0^4 x\,J_0^2(\alpha_n x)\,dx}.
$$

**3. Numerador.** Como $f(x)=1$ en $0<x<2$ y $f(x)=0$ en $2<x<4$, la integral se reduce a $[0,2]$. Con la identidad $\dfrac{d}{dx}\big[xJ_1(x)\big]=xJ_0(x)$ y el cambio de variable $u=\alpha_n x$,

$$
\int_0^4 x\,f(x)\,J_0(\alpha_n x)\,dx
=\int_0^2 x\,J_0(\alpha_n x)\,dx
=\frac{1}{\alpha_n^2}\int_0^{2\alpha_n} u\,J_0(u)\,du
=\frac{1}{\alpha_n^2}\Big[u\,J_1(u)\Big]_0^{2\alpha_n}
=\frac{2}{\alpha_n}J_1(2\alpha_n).
$$

**4. Denominador.** La norma de la función propia sobre $[0,4]$ es

$$
\int_0^4 x\,J_0^2(\alpha_n x)\,dx
=\frac{4^2}{2}J_1^2(4\alpha_n)
=8\,J_1^2(4\alpha_n).
$$

**5. Coeficiente y serie.** Al dividir los dos resultados anteriores,

$$
c_n=\frac{\dfrac{2}{\alpha_n}J_1(2\alpha_n)}{8\,J_1^2(4\alpha_n)}
=\frac{J_1(2\alpha_n)}{4\,\alpha_n\,J_1^2(4\alpha_n)}.
$$

Los ceros de $J_0$ son simples; como $J_0'=-J_1$, se cumple $J_1(4\alpha_n)\neq 0$ y el coeficiente está bien definido. Al sustituir $c_n$ se obtiene el desarrollo pedido.

## Observaciones

El peso de la ortogonalidad es $x$, no $1$. Los valores $4\alpha_n$ son las raíces positivas de $J_0$; si se denotan por $\lambda_n=4\alpha_n$, el coeficiente toma la forma estándar $c_n=J_1(\lambda_n/2)\big/\big[\lambda_n J_1^2(\lambda_n)\big]$ y

$$
f(x)=\sum_{n=1}^{\infty}\frac{J_1\!\left(\dfrac{\lambda_n}{2}\right)}{\lambda_n\,J_1^2(\lambda_n)}\,J_0\!\left(\dfrac{\lambda_n x}{4}\right).
$$

En $x=4$ todas las funciones propias se anulan, de modo que la serie converge a $0$. En $x=2$ la función presenta una discontinuidad de salto; allí la serie converge al promedio de los límites laterales, $1/2$. La igualdad con $f$ se entiende en el intervalo abierto $0<x<4$.
