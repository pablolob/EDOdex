---
title: "Zill Repaso C8 Ejercicio 15"
exercise-id: zill-c08-sr-e015
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - sistemas
competencies:
  - resolver-analiticamente.sistemas-lineales
  - resolver-analiticamente.sistemas-valores-propios
  - analizar-espectralmente.valores-propios
hidden-competencies:
  - seleccionar-metodo.valores-propios
prerequisitos:
  - matrices.autovalores
  - matrices.autovectores
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c08sri02-p380.png
---

## Enunciado

a) Considere el sistema lineal $\mathbf{X}' = \mathbf{AX}$ de tres ecuaciones diferenciales de primer orden, donde la matriz de coeficientes es

$$\mathbf{A} = \begin{pmatrix} 5 & 3 & 3 \\ 3 & 5 & 3 \\ -5 & -5 & -3 \end{pmatrix}$$

y $\lambda = 2$ es un eigenvalor conocido de multiplicidad dos. Encuentre dos soluciones diferentes del sistema correspondiente a este eigenvalor sin usar una fórmula especial (como (12) de la sección 8.2)

b) Use el procedimiento del inciso a) para resolver

$$\mathbf{X}' = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} \mathbf{X}.$$

## Solución

a) Las dos soluciones asociadas a $\lambda = 2$ son

$$
\mathbf{X}_1(t) = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} e^{2t},
\qquad
\mathbf{X}_2(t) = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} e^{2t}.
$$

b) La solución general es

$$
\mathbf{X}(t) = C_1 \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}
+ C_2 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
+ C_3 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} e^{3t}.
$$

## Resolución

### Inciso a)

El sistema es **lineal**, homogéneo y de coeficientes constantes. Se escribe como $\mathbf{X}' = A\mathbf{X}$ con

$$
A = \begin{pmatrix} 5 & 3 & 3 \\ 3 & 5 & 3 \\ -5 & -5 & -3 \end{pmatrix}.
$$

Se aplica el **método de valores propios**. Se buscan soluciones de la forma $\mathbf{X} = \boldsymbol{\xi} e^{\lambda t}$, con $\boldsymbol{\xi}$ un vector constante no nulo. Al sustituir resulta $\lambda \boldsymbol{\xi} e^{\lambda t} = A \boldsymbol{\xi} e^{\lambda t}$, es decir, $(A - \lambda I)\boldsymbol{\xi} = \mathbf{0}$.

Para $\lambda = 2$,

$$
A - 2I = \begin{pmatrix} 3 & 3 & 3 \\ 3 & 3 & 3 \\ -5 & -5 & -5 \end{pmatrix}.
$$

Las tres filas son proporcionales a $(1,1,1)$, de modo que $A - 2I$ tiene rango $1$. Su nulidad es $3 - 1 = 2$ y el sistema $(A - 2I)\boldsymbol{\xi} = \mathbf{0}$ se reduce a la única ecuación

$$
\xi_1 + \xi_2 + \xi_3 = 0.
$$

El espacio propio tiene dimensión dos. Dos vectores propios linealmente independientes son

$$
\boldsymbol{\xi}_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix},
\qquad
\boldsymbol{\xi}_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}.
$$

Por tanto, $\mathbf{X}_1 = \boldsymbol{\xi}_1 e^{2t}$ y $\mathbf{X}_2 = \boldsymbol{\xi}_2 e^{2t}$ son dos soluciones linealmente independientes del sistema asociadas a $\lambda = 2$. El espacio propio ya aporta dos soluciones, así que no se necesita un vector propio generalizado ni la fórmula (12) para valores propios repetidos.

### Inciso b)

El sistema es $\mathbf{X}' = B\mathbf{X}$ con

$$
B = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}.
$$

Se repite el procedimiento del inciso a). Toda fila de $B$ es $(1,1,1)$, así que $B$ tiene rango $1$. Entonces $\lambda = 0$ es un valor propio y la ecuación $B\mathbf{k} = \mathbf{0}$ se reduce a $k_1 + k_2 + k_3 = 0$, cuya solución tiene dimensión dos. Dos vectores propios linealmente independientes son

$$
\mathbf{k}_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix},
\qquad
\mathbf{k}_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}.
$$

Sus soluciones asociadas son constantes, $\mathbf{k}_1 e^{0t} = \mathbf{k}_1$ y $\mathbf{k}_2 e^{0t} = \mathbf{k}_2$.

El tercer valor propio se obtiene de la traza, $\operatorname{tr} B = 3 = \lambda_1 + \lambda_2 + \lambda_3 = 0 + 0 + \lambda_3$, de donde $\lambda_3 = 3$. En efecto, $B(1,1,1)^{\mathsf T} = (3,3,3)^{\mathsf T} = 3(1,1,1)^{\mathsf T}$, por lo que $\mathbf{k}_3 = (1,1,1)^{\mathsf T}$ es un vector propio asociado a $\lambda_3 = 3$.

Los tres vectores propios son linealmente independientes y forman un conjunto fundamental. La solución general es

$$
\mathbf{X}(t) = C_1 \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}
+ C_2 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
+ C_3 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} e^{3t}.
$$

La comprobación por sustitución es inmediata. En el inciso a), $A\boldsymbol{\xi}_1 = 2\boldsymbol{\xi}_1$ y $A\boldsymbol{\xi}_2 = 2\boldsymbol{\xi}_2$ dan $\mathbf{X}_1' = 2\mathbf{X}_1$ y $\mathbf{X}_2' = 2\mathbf{X}_2$. En el inciso b), $B\mathbf{k}_1 = \mathbf{0}$, $B\mathbf{k}_2 = \mathbf{0}$ y $B\mathbf{k}_3 = 3\mathbf{k}_3$ reproducen las derivadas de cada término de la solución general.

## Observaciones

El valor propio $\lambda = 2$ es doble y su multiplicidad geométrica también es dos, porque $A - 2I$ tiene rango uno. Por eso existen dos vectores propios independientes y no se requiere un vector propio generalizado, que es el caso al que se aplica la fórmula (12). En el inciso b) ocurre lo mismo con $\lambda = 0$.

Para completar la solución general del sistema del inciso a) falta la solución asociada al tercer valor propio. Con $\operatorname{tr} A = 7 = 2 + 2 + \lambda_3$ resulta $\lambda_3 = 3$; un vector propio es $(3,3,-5)^{\mathsf T}$.

Las soluciones de ambos sistemas están definidas para todo $t \in \mathbb{R}$. No hay soluciones singulares ni ramas perdidas.
