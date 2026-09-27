---
title: "Zill Repaso C8 Ejercicio 9"
exercise-id: zill-c08-sr-e009
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 9"
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

Resuelva el sistema lineal dado. $$\mathbf{X}' = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & 3 \\ 4 & 3 & 1 \end{pmatrix} \mathbf{X}$$

## Solución

$$
\mathbf{X}(t)=C_1\begin{pmatrix}-2\\3\\1\end{pmatrix}e^{2t}+C_2\begin{pmatrix}0\\1\\1\end{pmatrix}e^{4t}+C_3\begin{pmatrix}-7\\-12\\16\end{pmatrix}e^{-3t}.
$$

Por componentes,

$$
\begin{aligned}
x(t) &= -2C_1 e^{2t} - 7C_3 e^{-3t}, \\
y(t) &= 3C_1 e^{2t} + C_2 e^{4t} - 12C_3 e^{-3t}, \\
z(t) &= C_1 e^{2t} + C_2 e^{4t} + 16C_3 e^{-3t}.
\end{aligned}
$$

## Resolución

El sistema es lineal, homogéneo y con coeficientes constantes. Se escribe en forma matricial como $\mathbf{X}' = A\mathbf{X}$, con

$$
A = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & 3 \\ 4 & 3 & 1 \end{pmatrix}, \qquad \mathbf{X} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}.
$$

Se buscan soluciones de la forma $\mathbf{X} = \boldsymbol{\xi}e^{\lambda t}$, donde $\boldsymbol{\xi}$ es un vector constante no nulo. Al sustituir en el sistema resulta $A\boldsymbol{\xi} = \lambda\boldsymbol{\xi}$. Por tanto, $\lambda$ y $\boldsymbol{\xi}$ son un valor propio y un vector propio de $A$. Los valores propios son las raíces de la ecuación característica $\det(A - \lambda I) = 0$.

Sea $u = 1 - \lambda$. El desarrollo del determinante por la primera fila es

$$
\det(A - \lambda I) = u(u^2 - 9) - 12 - 4u = u^3 - 13u - 12 = (u+1)(u-4)(u+3).
$$

Las raíces son $u = -1$, $u = 4$ y $u = -3$. Como $u = 1 - \lambda$, los valores propios son

$$
\lambda_1 = 2, \qquad \lambda_2 = 4, \qquad \lambda_3 = -3,
$$

reales y distintos.

Para $\lambda_1 = 2$ se resuelve $(A - 2I)\boldsymbol{\xi} = \mathbf{0}$:

$$
\begin{pmatrix} -1 & -1 & 1 \\ 0 & -1 & 3 \\ 4 & 3 & -1 \end{pmatrix}
\begin{pmatrix} \xi_1 \\ \xi_2 \\ \xi_3 \end{pmatrix} = \mathbf{0}.
$$

La segunda ecuación da $\xi_2 = 3\xi_3$; la primera da $\xi_1 = -2\xi_3$. Tomando $\xi_3 = 1$ se obtiene $\boldsymbol{\xi}_1 = (-2, 3, 1)^T$.

Para $\lambda_2 = 4$ se resuelve $(A - 4I)\boldsymbol{\xi} = \mathbf{0}$:

$$
\begin{pmatrix} -3 & -1 & 1 \\ 0 & -3 & 3 \\ 4 & 3 & -3 \end{pmatrix}
\begin{pmatrix} \xi_1 \\ \xi_2 \\ \xi_3 \end{pmatrix} = \mathbf{0}.
$$

La segunda ecuación da $\xi_2 = \xi_3$; la primera da $\xi_1 = 0$. Tomando $\xi_3 = 1$ se obtiene $\boldsymbol{\xi}_2 = (0, 1, 1)^T$.

Para $\lambda_3 = -3$ se resuelve $(A + 3I)\boldsymbol{\xi} = \mathbf{0}$:

$$
\begin{pmatrix} 4 & -1 & 1 \\ 0 & 4 & 3 \\ 4 & 3 & 4 \end{pmatrix}
\begin{pmatrix} \xi_1 \\ \xi_2 \\ \xi_3 \end{pmatrix} = \mathbf{0}.
$$

La segunda ecuación da $\xi_2 = -3\xi_3/4$; la primera da $\xi_1 = -7\xi_3/16$. Tomando $\xi_3 = 16$ se obtiene $\boldsymbol{\xi}_3 = (-7, -12, 16)^T$.

Cada par valor propio-vector propio aporta la solución $\boldsymbol{\xi}_i e^{\lambda_i t}$. Como los valores propios son reales y distintos, las tres soluciones son linealmente independientes y la solución general es

$$
\mathbf{X}(t) = C_1\begin{pmatrix}-2\\3\\1\end{pmatrix}e^{2t}
+ C_2\begin{pmatrix}0\\1\\1\end{pmatrix}e^{4t}
+ C_3\begin{pmatrix}-7\\-12\\16\end{pmatrix}e^{-3t}.
$$

La solución satisface el sistema. En efecto, se comprueba que $A\boldsymbol{\xi}_1 = 2\boldsymbol{\xi}_1$, $A\boldsymbol{\xi}_2 = 4\boldsymbol{\xi}_2$ y $A\boldsymbol{\xi}_3 = -3\boldsymbol{\xi}_3$, de modo que cada término verifica $\mathbf{X}_i' = A\mathbf{X}_i$ y la combinación lineal también.

## Observaciones

Los valores propios son reales y distintos, por lo que cada uno aporta una solución vectorial independiente y no aparecen términos complejos ni vectores propios generalizados.

La elección de cada vector propio es arbitraria salvo por un factor escalar no nulo; tomar otro múltiplo solo redefine la constante correspondiente. La solución está definida para todo $t \in \mathbb{R}$.
