---
title: "Zill Repaso C1 Ejercicio 32"
exercise-id: zill-c01-sr-e032
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 32"
topics:
  - fundamentos
competencies:
  - verificar.sustitucion-directa
  - determinar.dominio
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 31 a 34.**

En los problemas 31 a 34, verifique que la expresión indicada es una solución implícita de la ecuación diferencial dada.

32. $\left(\dfrac{dy}{dx}\right)^2 + 1 = \dfrac{1}{y^2}$; $\quad (x - 5)^2 + y^2 = 1$

## Solución

La relación $(x - 5)^{2} + y^{2} = 1$ es una **solución implícita** de la ecuación diferencial.

## Resolución

Se deriva implícitamente $(x - 5)^{2} + y^{2} = 1$ respecto de $x$:

$$
2(x - 5) + 2y\,y' = 0.
$$

Se despeja $y'$ (suponiendo $y \neq 0$):

$$
y\,y' = -(x - 5) \quad\Longrightarrow\quad y' = -\frac{x - 5}{y}.
$$

Se sustituye esta expresión en el miembro izquierdo de la ecuación diferencial:

$$
\begin{aligned}
\left(\frac{dy}{dx}\right)^{2} + 1
&= \left(-\frac{x - 5}{y}\right)^{2} + 1 \\[4pt]
&= \frac{(x - 5)^{2}}{y^{2}} + 1 \\[4pt]
&= \frac{(x - 5)^{2} + y^{2}}{y^{2}}.
\end{aligned}
$$

Pero de la relación original se tiene $(x - 5)^{2} + y^{2} = 1$. Por tanto,

$$
\left(\frac{dy}{dx}\right)^{2} + 1 = \frac{1}{y^{2}}.
$$

La relación implícita satisface la ecuación diferencial para todo punto donde $y \neq 0$.

## Observaciones

La relación $(x - 5)^{2} + y^{2} = 1$ representa una circunferencia de radio $1$ centrada en $(5, 0)$. Los puntos donde $y = 0$ (es decir, $(4, 0)$ y $(6, 0)$) quedan excluidos del dominio de la ecuación diferencial por la presencia de $1/y^{2}$. Fuera de esos puntos, la solución implícita define dos ramas explícitas: $y = \sqrt{1 - (x - 5)^{2}}$ (semicircunferencia superior) e $y = -\sqrt{1 - (x - 5)^{2}}$ (semicircunferencia inferior).

