---
title: "Zill Repaso C8 Ejercicio 3"
exercise-id: zill-c08-sr-e003
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - sistemas
source-images:
  - c08sri01-p379.png
competencies:
  - resolver-analiticamente.sistemas-valores-propios
  - verificar.solucion
prerequisitos:
  - matrices.autovalores
  - matrices.autovectores
difficulty:
  conceptual: 1
  technical: 1
---

## Enunciado

Considere el sistema lineal $$\mathbf{X}' = \begin{pmatrix} 4 & 6 & 6 \\ 1 & 3 & 2 \\ -1 & -4 & -3 \end{pmatrix} \mathbf{X}.$$ Sin intentar resolver el sistema, determine cada uno de los vectores $$\mathbf{K}_1 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \quad \mathbf{K}_2 = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}, \quad \mathbf{K}_3 = \begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix}, \quad \mathbf{K}_4 = \begin{pmatrix} 6 \\ 2 \\ -5 \end{pmatrix}$$ es un eigenvector de la matriz de coeficientes. ¿Cuál es la solución del sistema correspondiente a este eigenvector?

## Solución

El único eigenvector es $\mathbf{K}_3$, con valor propio $\lambda = 4$. La solución del sistema asociada a él es

$$
\mathbf{X}(t) = C \begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix} e^{4t}.
$$

Los vectores $\mathbf{K}_1$, $\mathbf{K}_2$ y $\mathbf{K}_4$ no son eigenvectores de la matriz de coeficientes.

## Resolución

Un vector no nulo $\mathbf{K}$ es un eigenvector de la matriz de coeficientes $A$ si existe un escalar $\lambda$ tal que

$$
A\mathbf{K} = \lambda \mathbf{K}.
$$

Se comprueba cada candidato calculando el producto $A\mathbf{K}_i$ con

$$
A = \begin{pmatrix} 4 & 6 & 6 \\ 1 & 3 & 2 \\ -1 & -4 & -3 \end{pmatrix}.
$$

$$
\begin{aligned}
A\mathbf{K}_1 &= \begin{pmatrix} 4 & 6 & 6 \\ 1 & 3 & 2 \\ -1 & -4 & -3 \end{pmatrix}\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \\ -7 \end{pmatrix}, \\
A\mathbf{K}_2 &= \begin{pmatrix} 4 & 6 & 6 \\ 1 & 3 & 2 \\ -1 & -4 & -3 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \\ -2 \end{pmatrix}, \\
A\mathbf{K}_3 &= \begin{pmatrix} 4 & 6 & 6 \\ 1 & 3 & 2 \\ -1 & -4 & -3 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 12 \\ 4 \\ -4 \end{pmatrix}, \\
A\mathbf{K}_4 &= \begin{pmatrix} 4 & 6 & 6 \\ 1 & 3 & 2 \\ -1 & -4 & -3 \end{pmatrix}\begin{pmatrix} 6 \\ 2 \\ -5 \end{pmatrix} = \begin{pmatrix} 6 \\ 2 \\ 1 \end{pmatrix}.
\end{aligned}
$$

En cada caso se compara el resultado con un múltiplo escalar del candidato.

Para $\mathbf{K}_1$, la primera componente del producto es $12$, mientras que la primera componente de $\mathbf{K}_1$ es $0$; ninguna elección de $\lambda$ satisface $A\mathbf{K}_1 = \lambda \mathbf{K}_1$. Por tanto, $\mathbf{K}_1$ no es eigenvector.

Para $\mathbf{K}_2$, las dos primeras componentes de $A\mathbf{K}_2 = \lambda \mathbf{K}_2$ obligarían a $\lambda = 4$ y $\lambda = 2$ a la vez, lo que es incompatible. Por tanto, $\mathbf{K}_2$ no es eigenvector.

Para $\mathbf{K}_3$,

$$
A\mathbf{K}_3 = \begin{pmatrix} 12 \\ 4 \\ -4 \end{pmatrix} = 4 \begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix} = 4\mathbf{K}_3.
$$

Así, $\mathbf{K}_3$ es eigenvector con valor propio $\lambda = 4$.

Para $\mathbf{K}_4$, las dos primeras componentes de $A\mathbf{K}_4 = \lambda \mathbf{K}_4$ obligarían a $\lambda = 1$, pero la tercera exigiría $1 = -5$. Por tanto, $\mathbf{K}_4$ no es eigenvector.

Como solo $\mathbf{K}_3$ es eigenvector, la solución del sistema asociada a él es

$$
\mathbf{X}(t) = C \begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix} e^{4t}.
$$

La comprobación es directa: $\mathbf{X}'(t) = 4C\mathbf{K}_3 e^{4t}$ y $A\mathbf{X}(t) = C A\mathbf{K}_3 e^{4t} = 4C\mathbf{K}_3 e^{4t}$.

## Observaciones

La solución $C\mathbf{K}_3 e^{4t}$ está definida para todo $t \in \mathbb{R}$; no hay soluciones singulares ni ramas perdidas.

El vector $\mathbf{K}_3$ aporta una solución del sistema, no su solución general. La solución general combina las soluciones asociadas a los tres valores propios de $A$; el enunciado solo pide la correspondiente al eigenvector identificado.
