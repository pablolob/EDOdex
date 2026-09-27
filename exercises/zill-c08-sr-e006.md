---
title: "Zill Repaso C8 Ejercicio 6"
exercise-id: zill-c08-sr-e006
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 6"
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

Resuelva el sistema lineal dado. $$\begin{aligned} \frac{dx}{dt} &= -4x + 2y \\ \frac{dy}{dt} &= 2x - 4y \end{aligned}$$

## Solución

$$
\mathbf{X}(t) = C_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} e^{-2t} + C_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-6t},
$$

es decir,

$$
x(t) = C_1 e^{-2t} + C_2 e^{-6t}, \qquad y(t) = C_1 e^{-2t} - C_2 e^{-6t}.
$$

## Resolución

El sistema es lineal, homogéneo y con coeficientes constantes. Se escribe en forma matricial como $\mathbf{X}' = A\mathbf{X}$, con

$$
A = \begin{pmatrix} -4 & 2 \\ 2 & -4 \end{pmatrix}, \qquad \mathbf{X} = \begin{pmatrix} x \\ y \end{pmatrix}.
$$

Se buscan soluciones de la forma $\mathbf{X} = \boldsymbol{\xi} e^{\lambda t}$, con $\boldsymbol{\xi}$ un vector constante no nulo. Al sustituir resulta $A\boldsymbol{\xi} = \lambda \boldsymbol{\xi}$. Existe solución no trivial si y solo si $\det(A - \lambda I) = 0$.

$$
\det(A - \lambda I) = \begin{vmatrix} -4 - \lambda & 2 \\ 2 & -4 - \lambda \end{vmatrix} = (-4 - \lambda)^2 - 4 = \lambda^2 + 8\lambda + 12.
$$

Las raíces de $\lambda^2 + 8\lambda + 12 = 0$ son $\lambda_1 = -2$ y $\lambda_2 = -6$, reales y distintas.

Para $\lambda_1 = -2$, el sistema $(A + 2I)\boldsymbol{\xi} = \mathbf{0}$ es

$$
\begin{pmatrix} -2 & 2 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} \xi_1 \\ \xi_2 \end{pmatrix} = \mathbf{0},
\qquad -2\xi_1 + 2\xi_2 = 0 \;\Rightarrow\; \xi_2 = \xi_1.
$$

Un vector propio es $\boldsymbol{\xi}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

Para $\lambda_2 = -6$, el sistema $(A + 6I)\boldsymbol{\xi} = \mathbf{0}$ es

$$
\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} \begin{pmatrix} \xi_1 \\ \xi_2 \end{pmatrix} = \mathbf{0},
\qquad \xi_1 + \xi_2 = 0 \;\Rightarrow\; \xi_2 = -\xi_1.
$$

Un vector propio es $\boldsymbol{\xi}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

Como $\lambda_1 \ne \lambda_2$, los vectores propios son linealmente independientes y las dos soluciones vectoriales forman un conjunto fundamental. La solución general es la combinación lineal

$$
\mathbf{X}(t) = C_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} e^{-2t} + C_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{-6t}.
$$

Al escribirla por componentes,

$$
x(t) = C_1 e^{-2t} + C_2 e^{-6t}, \qquad y(t) = C_1 e^{-2t} - C_2 e^{-6t}.
$$

En efecto, $x' = -2C_1 e^{-2t} - 6C_2 e^{-6t}$ coincide con $-4x + 2y = -2C_1 e^{-2t} - 6C_2 e^{-6t}$, y $y' = -2C_1 e^{-2t} + 6C_2 e^{-6t}$ coincide con $2x - 4y = -2C_1 e^{-2t} + 6C_2 e^{-6t}$.

## Observaciones

El resultado puede reescribirse en las variables $u = x + y$ y $v = x - y$. Sumando y restando las ecuaciones se obtiene $u' = -2u$ y $v' = -6v$, de modo que el sistema se desacopla en dos ecuaciones de decaimiento exponencial. Esta es exactamente la separación que producen los vectores propios $(1,1)$ y $(1,-1)$. Los vectores propios quedan determinados salvo un factor escalar no nulo; multiplicarlos por una constante solo redefine $C_1$ y $C_2$.
