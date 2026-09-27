---
title: "Zill Repaso C8 Ejercicio 10"
exercise-id: zill-c08-sr-e010
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - sistemas
competencies:
  - resolver-analiticamente.sistemas-lineales
hidden-competencies:
  - seleccionar-metodo.valores-propios
prerequisitos:
  - matrices.autovalores
  - matrices.autovectores
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c08sri01-p379.png
---

## Enunciado

Resuelva el sistema lineal dado. $$\mathbf{X}' = \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & -2 \\ 2 & 2 & -1 \end{pmatrix} \mathbf{X}$$

## Solución

$$
\mathbf{X}(t)=C_1\begin{pmatrix}7\\-5\\-4\end{pmatrix}e^{-2t}
+C_2e^{t}\begin{pmatrix}2\cos(\sqrt{2}\,t)\\-\sqrt{2}\sin(\sqrt{2}\,t)\\2\cos(\sqrt{2}\,t)\end{pmatrix}
+C_3e^{t}\begin{pmatrix}2\sin(\sqrt{2}\,t)\\\sqrt{2}\cos(\sqrt{2}\,t)\\2\sin(\sqrt{2}\,t)\end{pmatrix}.
$$

## Resolución

El sistema es lineal y homogéneo con coeficientes constantes. En forma matricial,

$$
\mathbf{X}'=A\mathbf{X},\qquad
A=\begin{pmatrix}0&2&1\\1&1&-2\\2&2&-1\end{pmatrix}.
$$

Se aplica el **método de valores propios**. Se buscan soluciones de la forma $\mathbf{X}=\boldsymbol{\xi}e^{\lambda t}$. Al sustituir resulta $\lambda\boldsymbol{\xi}e^{\lambda t}=A\boldsymbol{\xi}e^{\lambda t}$, es decir, $\lambda\boldsymbol{\xi}=A\boldsymbol{\xi}$. Por tanto, $\lambda$ y $\boldsymbol{\xi}$ son un valor propio y un vector propio de $A$, que se obtienen de $(A-\lambda I)\boldsymbol{\xi}=\mathbf{0}$.

La ecuación característica es

$$
\begin{aligned}
\det(A-\lambda I)
&=\begin{vmatrix}-\lambda&2&1\\1&1-\lambda&-2\\2&2&-1-\lambda\end{vmatrix}\\
&=-\lambda\left[\left(1-\lambda\right)\left(-1-\lambda\right)+4\right]+2\left(\lambda-3\right)+2\lambda\\
&=-\lambda^{3}+\lambda-6\\
&=-\left(\lambda+2\right)\left(\lambda^{2}-2\lambda+3\right)=0.
\end{aligned}
$$

Sus raíces son $\lambda_1=-2$, $\lambda_2=1+i\sqrt{2}$ y $\lambda_3=1-i\sqrt{2}$.

Para $\lambda_1=-2$ se resuelve $(A+2I)\boldsymbol{\xi}=\mathbf{0}$:

$$
\begin{pmatrix}2&2&1\\1&3&-2\\2&2&1\end{pmatrix}
\begin{pmatrix}\xi_1\\\xi_2\\\xi_3\end{pmatrix}=\begin{pmatrix}0\\0\\0\end{pmatrix}.
$$

De las dos primeras ecuaciones se obtiene $\xi_2=-\frac{5}{7}\xi_1$ y $\xi_3=-\frac{4}{7}\xi_1$. Tomando $\xi_1=7$ resulta $\boldsymbol{\xi}_1=\begin{pmatrix}7\\-5\\-4\end{pmatrix}$.

Para $\lambda_2=1+i\sqrt{2}$ se resuelve $\left(A-(1+i\sqrt{2})I\right)\boldsymbol{\xi}=\mathbf{0}$:

$$
\begin{pmatrix}-1-i\sqrt{2}&2&1\\1&-i\sqrt{2}&-2\\2&2&-2-i\sqrt{2}\end{pmatrix}
\begin{pmatrix}\xi_1\\\xi_2\\\xi_3\end{pmatrix}=\mathbf{0}.
$$

La segunda ecuación da $\xi_1=i\sqrt{2}\,\xi_2+2\xi_3$. Al sustituir en la primera resulta $\left(4-i\sqrt{2}\right)\xi_2=\left(1+2i\sqrt{2}\right)\xi_3$. Tomando $\xi_3=2$ se obtiene $\xi_2=i\sqrt{2}$ y $\xi_1=2$, de modo que $\boldsymbol{\xi}_2=\begin{pmatrix}2\\i\sqrt{2}\\2\end{pmatrix}$.

El par conjugado $\lambda_3=1-i\sqrt{2}$ no aporta información nueva. Con la fórmula de Euler, la solución compleja asociada a $\lambda_2$ es

$$
e^{(1+i\sqrt{2})t}\begin{pmatrix}2\\i\sqrt{2}\\2\end{pmatrix}
=e^{t}\left(\cos(\sqrt{2}\,t)+i\sin(\sqrt{2}\,t)\right)\begin{pmatrix}2\\i\sqrt{2}\\2\end{pmatrix}.
$$

Su parte real y su parte imaginaria son soluciones reales linealmente independientes:

$$
\mathbf{X}_R=e^{t}\begin{pmatrix}2\cos(\sqrt{2}\,t)\\-\sqrt{2}\sin(\sqrt{2}\,t)\\2\cos(\sqrt{2}\,t)\end{pmatrix},\qquad
\mathbf{X}_I=e^{t}\begin{pmatrix}2\sin(\sqrt{2}\,t)\\\sqrt{2}\cos(\sqrt{2}\,t)\\2\sin(\sqrt{2}\,t)\end{pmatrix}.
$$

Al combinar las tres soluciones se obtiene la solución general.

Las tres soluciones satisfacen el sistema por construcción de los pares valor propio–vector propio. La coherencia del espectro se comprueba con $\operatorname{tr}A=0=\lambda_1+\lambda_2+\lambda_3$ y $\det A=-6=\lambda_1\lambda_2\lambda_3$.

## Observaciones

La elección de los vectores propios es arbitraria salvo por un factor escalar no nulo; la constante correspondiente absorbe ese factor.

La matriz $A$ es real, por lo que los valores propios complejos aparecen en par conjugado. Las partes real e imaginaria de la solución compleja asociada al par $1\pm i\sqrt{2}$ forman las dos soluciones reales independientes que completan el conjunto fundamental.

La solución está definida para todo $t\in\mathbb{R}$.
