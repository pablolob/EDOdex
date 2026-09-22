---
title: "Zill Repaso C1 Ejercicio 33"
exercise-id: zill-c01-sr-e033
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 33"
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

33. $y'' = 2y\,(y')^3$; $\quad y^3 + 3y = 1 - 3x$

## Solución

La relación $y^{3} + 3y = 1 - 3x$ es una **solución implícita** de la ecuación diferencial.

## Resolución

Se deriva implícitamente $y^{3} + 3y = 1 - 3x$ respecto de $x$:

$$
3y^{2}y' + 3y' = -3.
$$

Se factoriza y se despeja $y'$:

$$
y'(3y^{2} + 3) = -3 \quad\Longrightarrow\quad y'(y^{2} + 1) = -1 \quad\Longrightarrow\quad y' = -\frac{1}{y^{2} + 1}.
$$

Se deriva nuevamente para obtener $y''$:

$$
\begin{aligned}
y'' &= \frac{d}{dx}\Bigl[-(y^{2} + 1)^{-1}\Bigr]
     = (y^{2} + 1)^{-2}\cdot 2y\,y' \\[4pt]
    &= \frac{2y\,y'}{(y^{2} + 1)^{2}}.
\end{aligned}
$$

Se sustituye $y' = -1/(y^{2} + 1)$:

$$
y'' = \frac{2y}{(y^{2} + 1)^{2}}\left(-\frac{1}{y^{2} + 1}\right)
     = -\frac{2y}{(y^{2} + 1)^{3}}.
$$

Por otro lado, el miembro derecho de la ecuación diferencial es

$$
2y\,(y')^{3} = 2y\left(-\frac{1}{y^{2} + 1}\right)^{3}
             = -\frac{2y}{(y^{2} + 1)^{3}}.
$$

Ambos miembros coinciden, por lo que la relación implícita satisface la ecuación diferencial para todo $y$ real (ninguna restricción adicional, ya que $y^{2} + 1 \neq 0$).

## Observaciones

La ecuación diferencial es de segundo orden y no lineal. La solución implícita $y^{3} + 3y = 1 - 3x$ es una cúbica en $y$ y, por el criterio de la derivada ($\partial/\partial y = 3y^{2} + 3 > 0$), define una única función $y(x)$ en todo $\mathbb{R}$.

