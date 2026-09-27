---
title: "Zill Repaso C11 Ejercicio 9"
exercise-id: zill-c11-sr-e009
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
competencies:
  - analizar-espectralmente.ortogonalidad
hidden-competencies:
  - clasificar.sturm-liouville
prerequisitos:
  - algebra-lineal-avanzada.producto-interno
  - algebra-lineal-avanzada.ortogonalidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c11sri02-p472.png
---

## Enunciado

Ecuación diferencial de Chebyshev
$$(1 - x^2)y'' - xy' + n^2 y = 0$$
tiene una solución polinomial $y = T_n(x)$ para $n = 0, 1, 2, \dots$. Especifique la función de peso $w(x)$ y el intervalo sobre el que el conjunto de polinomios de Chebyshev $\{T_n(x)\}$ es ortogonal. Dé una relación de ortogonalidad.

## Solución

La función de peso es

$$
w(x) = \frac{1}{\sqrt{1-x^2}}
$$

y el intervalo de ortogonalidad es $(-1, 1)$. Una relación de ortogonalidad es

$$
\int_{-1}^{1} \frac{T_n(x)\,T_m(x)}{\sqrt{1-x^2}}\,dx =
\begin{cases}
0, & n \ne m, \\[4pt]
\pi, & n = m = 0, \\[4pt]
\dfrac{\pi}{2}, & n = m \ge 1.
\end{cases}
$$

## Resolución

La ecuación de Chebyshev no está escrita en forma autoadjunta. Al multiplicarla por $\dfrac{1}{\sqrt{1-x^2}}$ resulta

$$
\sqrt{1-x^2}\,y'' - \frac{x}{\sqrt{1-x^2}}\,y' + \frac{n^2}{\sqrt{1-x^2}}\,y = 0.
$$

El primer par de términos es la derivada de un producto, pues

$$
\frac{d}{dx}\!\left[\sqrt{1-x^2}\,y'\right]
= \sqrt{1-x^2}\,y'' - \frac{x}{\sqrt{1-x^2}}\,y'.
$$

La ecuación se escribe entonces en la forma de Sturm-Liouville

$$
\frac{d}{dx}\!\left[\sqrt{1-x^2}\,y'\right] + \frac{n^2}{\sqrt{1-x^2}}\,y = 0,
$$

es decir, $\dfrac{d}{dx}\!\left[p(x)y'\right] + \lambda\,w(x)\,y = 0$ con

$$
p(x) = \sqrt{1-x^2}, \qquad \lambda = n^2, \qquad w(x) = \frac{1}{\sqrt{1-x^2}}.
$$

El peso $w$ y $p$ son continuos en $(-1, 1)$; los puntos $x = \pm 1$ son singulares. En un problema de Sturm-Liouville las eigenfunciones asociadas a valores propios distintos son ortogonales respecto de $w$. Como $\lambda = n^2$ es distinto para cada $n$ no negativo, los polinomios $T_n$ son ortogonales con peso $w(x) = 1/\sqrt{1-x^2}$ sobre $(-1, 1)$. Para $n \ne m$,

$$
\int_{-1}^{1} \frac{T_n(x)\,T_m(x)}{\sqrt{1-x^2}}\,dx = 0.
$$

La normalización se obtiene con el cambio $x = \cos\theta$, válido para $0 < \theta < \pi$. Entonces $T_n(\cos\theta) = \cos(n\theta)$ y

$$
\frac{dx}{\sqrt{1-x^2}} = -\,d\theta,
$$

de modo que

$$
\int_{-1}^{1} \frac{T_n(x)\,T_m(x)}{\sqrt{1-x^2}}\,dx
= \int_{0}^{\pi} \cos(n\theta)\cos(m\theta)\,d\theta.
$$

Para $n = m = 0$ la integral vale $\pi$. Para $n = m \ge 1$, la identidad $\cos^2(n\theta) = \dfrac{1 + \cos(2n\theta)}{2}$ da $\dfrac{\pi}{2}$. Esto completa la relación de ortogonalidad enunciada en la solución.

## Observaciones

Los polinomios $T_n$ quedan caracterizados por $T_n(\cos\theta) = \cos(n\theta)$; esa identidad es la que convierte la ortogonalidad con peso $w(x) = 1/\sqrt{1-x^2}$ en la ortogonalidad de las funciones $\cos(n\theta)$ en $[0, \pi]$.

El valor propio es $\lambda = n^2$, con $n = 0, 1, 2, \dots$. El caso $n = 0$ tiene norma distinta porque $T_0(x) = 1$ no se anula y aporta el factor $\pi$ en lugar de $\pi/2$.
