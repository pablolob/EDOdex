---
title: "Zill Repaso C12 Ejercicio 1"
exercise-id: zill-c12-sr-e001
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 1"
topics:
  - contorno
competencies:
  - resolver-edp.separacion-variables
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - ecuaciones-diferenciales.primer-orden
statement-status: accepted
solution-status: draft
metadata-status: pending
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c12sri01-p512.png
---

## Enunciado

Utilice separación de variables para encontrar las soluciones producto de
$$
\frac{\partial^2 u}{\partial x \, \partial y} = u.
$$

## Solución

Se buscan soluciones producto de la forma $u(x,y)=X(x)Y(y)$. Para cada constante $\lambda\ne 0$ la ecuación admite

$$
u(x,y)=C e^{\lambda x + y/\lambda},
$$

donde $C$ es una constante arbitraria.

## Resolución

Se propone una solución producto $u(x,y)=X(x)Y(y)$. Sus derivadas parciales son $u_x=X'(x)Y(y)$, $u_y=X(x)Y'(y)$ y $u_{xy}=X'(x)Y'(y)$. Al sustituir en la ecuación $u_{xy}=u$ resulta

$$
X'(x)Y'(y)=X(x)Y(y).
$$

Se dividen ambos miembros entre el producto $X(x)Y(y)$, que se supone distinto de cero:

$$
\frac{X'(x)}{X(x)}=\frac{Y(y)}{Y'(y)}.
$$

El miembro izquierdo depende solo de $x$ y el derecho solo de $y$. Para que la igualdad se cumpla en todo punto $(x,y)$ de la región, ambos miembros deben ser la misma constante, que se denota $\lambda$:

$$
\frac{X'(x)}{X(x)}=\frac{Y(y)}{Y'(y)}=\lambda.
$$

La igualdad se desdobla en dos ecuaciones diferenciales ordinarias lineales de primer orden:

$$
\begin{aligned}
X'(x)-\lambda X(x) &= 0, \\
Y'(y)-\frac{1}{\lambda}Y(y) &= 0.
\end{aligned}
$$

La segunda ecuación es válida para $\lambda\ne 0$, pues proviene de $Y'(y)=Y(y)/\lambda$. Sus soluciones son

$$
X(x)=c_1 e^{\lambda x}, \qquad Y(y)=c_2 e^{y/\lambda},
$$

con $c_1$ y $c_2$ constantes arbitrarias. El producto recupera la solución de la EDP:

$$
u(x,y)=X(x)Y(y)=c_1c_2\, e^{\lambda x}e^{y/\lambda}=C e^{\lambda x + y/\lambda},
$$

donde $C=c_1c_2$.

Comprobación: al derivar $u=C e^{\lambda x + y/\lambda}$ se obtiene $u_x=\lambda u$ y $u_y=u/\lambda$. Por tanto $u_{xy}=\lambda\,(u/\lambda)=u$, de modo que la solución producto satisface la ecuación para toda constante $\lambda\ne 0$ y todo $C$.

El caso $\lambda=0$ no aporta soluciones producto no triviales. Si $\lambda=0$, la condición $Y/Y'=\lambda$ obliga a $Y=0$; del mismo modo, $X$ constante en $X'Y'=XY$ fuerza $Y=0$. Solo se obtiene la solución trivial $u=0$.

## Observaciones

La constante de separación debe ser distinta de cero; con $\lambda=0$ la EDP solo admite la solución trivial. Cada valor admisible de $\lambda$ aporta una solución producto.

Una forma equivalente de escribir el resultado es $u=C e^{ax+by}$, con la condición $ab=1$, es decir $b=1/a$. Como la EDP es lineal y homogénea, el principio de superposición garantiza que cualquier combinación lineal finita de soluciones producto también resuelve la ecuación. Las soluciones producto están definidas para todo $(x,y)\in\mathbb{R}^2$.
