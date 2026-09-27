---
title: "Zill Repaso C8 Ejercicio 7"
exercise-id: zill-c08-sr-e007
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - sistemas
source-images:
  - c08sri01-p379.png
competencies:
  - resolver-analiticamente.sistemas-valores-propios
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

Resuelva el sistema lineal dado. $$\mathbf{X}' = \begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix} \mathbf{X}$$

## Solución

$$
\mathbf{X}(t)=C_1 e^{t}\begin{pmatrix}\cos 2t\\-\sin 2t\end{pmatrix}+C_2 e^{t}\begin{pmatrix}\sin 2t\\\cos 2t\end{pmatrix},
$$

o, en componentes, $x(t)=e^{t}(C_1\cos 2t+C_2\sin 2t)$ y $y(t)=e^{t}(C_2\cos 2t-C_1\sin 2t)$.

## Resolución

El sistema es lineal, homogéneo y con coeficientes constantes. Su matriz de coeficientes es

$$
A=\begin{pmatrix}1&2\\-2&1\end{pmatrix}.
$$

Se aplica el **método de valores propios**. Los valores propios son las raíces de la ecuación característica $\det(A-\lambda I)=0$. Como

$$
\det(A-\lambda I)=\begin{vmatrix}1-\lambda&2\\-2&1-\lambda\end{vmatrix}=(1-\lambda)^2+4,
$$

la ecuación característica $(1-\lambda)^2+4=0$ da $1-\lambda=\pm 2i$, de donde

$$
\lambda=1+2i,\qquad \overline{\lambda}=1-2i.
$$

Los valores propios forman un par complejo conjugado, con parte real $1$ y parte imaginaria $2$.

Para $\lambda=1+2i$ se resuelve $(A-\lambda I)\boldsymbol{\xi}=\mathbf{0}$:

$$
\begin{pmatrix}-2i&2\\-2&-2i\end{pmatrix}
\begin{pmatrix}\xi_1\\\xi_2\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix}.
$$

La primera ecuación $-2i\,\xi_1+2\xi_2=0$ da $\xi_2=i\,\xi_1$. Tomando $\xi_1=1$ se obtiene el vector propio

$$
\boldsymbol{\xi}=\begin{pmatrix}1\\i\end{pmatrix}.
$$

Una solución compleja es entonces

$$
\mathbf{X}(t)=e^{(1+2i)t}\begin{pmatrix}1\\i\end{pmatrix}
=e^{t}(\cos 2t+i\sin 2t)\begin{pmatrix}1\\i\end{pmatrix}.
$$

Se separan las partes real e imaginaria. Escribiendo $\begin{pmatrix}1\\i\end{pmatrix}(\cos 2t+i\sin 2t)=\begin{pmatrix}\cos 2t+i\sin 2t\\ i\cos 2t-\sin 2t\end{pmatrix}$, resulta

$$
\operatorname{Re}\mathbf{X}(t)=e^{t}\begin{pmatrix}\cos 2t\\-\sin 2t\end{pmatrix},
\qquad
\operatorname{Im}\mathbf{X}(t)=e^{t}\begin{pmatrix}\sin 2t\\\cos 2t\end{pmatrix}.
$$

Estas dos soluciones reales son linealmente independientes, pues su wronskiano vale $e^{2t}(\cos^2 2t+\sin^2 2t)=e^{2t}\ne 0$. Por tanto, la solución general es

$$
\mathbf{X}(t)=C_1 e^{t}\begin{pmatrix}\cos 2t\\-\sin 2t\end{pmatrix}+C_2 e^{t}\begin{pmatrix}\sin 2t\\\cos 2t\end{pmatrix}.
$$

La solución satisface el sistema. En componentes, $x=e^{t}(C_1\cos 2t+C_2\sin 2t)$ e $y=e^{t}(C_2\cos 2t-C_1\sin 2t)$ cumplen

$$
x'=e^{t}\bigl[(C_1+2C_2)\cos 2t+(C_2-2C_1)\sin 2t\bigr]=x+2y,
$$

$$
y'=e^{t}\bigl[(C_2-2C_1)\cos 2t-(C_1+2C_2)\sin 2t\bigr]=-2x+y.
$$

## Observaciones

La solución está definida para todo $t\in\mathbb{R}$ y no existen soluciones singulares.

El valor propio conjugado $\overline{\lambda}=1-2i$ produce el mismo par de soluciones reales, por lo que no aporta soluciones adicionales.
