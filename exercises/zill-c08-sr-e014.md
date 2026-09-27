---
title: "Zill Repaso C8 Ejercicio 14"
exercise-id: zill-c08-sr-e014
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - sistemas
competencies:
  - resolver-analiticamente.sistemas-valores-propios
  - resolver-analiticamente.sistemas-no-homogeneos
  - verificar.solucion
prerequisitos:
  - matrices.autovalores
  - matrices.autovectores
source-images:
  - c08sri02-p380.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

$$\mathbf{X}' = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix} \mathbf{X} + \begin{pmatrix} -2 \\ 1 \end{pmatrix} e^{2t}$$

## Solución

La solución general es, para todo $t \in \mathbb{R}$,

$$
\mathbf{X}(t)
= C_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{2t}
+ C_2 \left[ \begin{pmatrix} 1 \\ -1 \end{pmatrix} t + \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right] e^{2t}
+ \begin{pmatrix} -\frac{1}{2}t^2 - 2t \\[1mm] \frac{1}{2}t^2 + t \end{pmatrix} e^{2t},
$$

con $C_1$ y $C_2$ constantes arbitrarias. En componentes,

$$
\begin{aligned}
x(t) &= C_1 e^{2t} + C_2 (t+1) e^{2t} - \left(\frac{1}{2}t^2 + 2t\right) e^{2t}, \\
y(t) &= -C_1 e^{2t} - C_2 t\, e^{2t} + \left(\frac{1}{2}t^2 + t\right) e^{2t}.
\end{aligned}
$$

## Resolución

Se escribe el sistema como $\mathbf{X}' = A\mathbf{X} + \mathbf{F}(t)$, con

$$
A = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix},
\qquad
\mathbf{F}(t) = \begin{pmatrix} -2 \\ 1 \end{pmatrix} e^{2t}.
$$

Primero se resuelve el sistema homogéneo $\mathbf{X}' = A\mathbf{X}$ por el método de **valores propios**. La ecuación característica es

$$
\det(A - \lambda I) = (3-\lambda)(1-\lambda) + 1 = \lambda^2 - 4\lambda + 4 = (\lambda - 2)^2 = 0,
$$

de modo que $\lambda = 2$ es un valor propio doble.

Para $\lambda = 2$, la matriz

$$
A - 2I = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}
$$

impone la única condición $\xi_1 + \xi_2 = 0$. Se elige el vector propio

$$
\boldsymbol{\xi} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}.
$$

Como el valor propio es doble y $A - 2I$ tiene rango uno, se busca un vector propio generalizado $\boldsymbol{\eta}$ que satisfaga

$$
(A - 2I)\boldsymbol{\eta} = \boldsymbol{\xi}.
$$

Con $\boldsymbol{\eta} = (\eta_1, \eta_2)^T$ la condición es $\eta_1 + \eta_2 = 1$. Se elige

$$
\boldsymbol{\eta} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}.
$$

La solución del sistema homogéneo es

$$
\mathbf{X}_c(t)
= C_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^{2t}
+ C_2 \left[ \begin{pmatrix} 1 \\ -1 \end{pmatrix} t + \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right] e^{2t}.
$$

En efecto, $A\boldsymbol{\xi} = 2\boldsymbol{\xi}$ y $(A - 2I)\boldsymbol{\eta} = \boldsymbol{\xi}$, condiciones que garantizan que cada término satisface $\mathbf{X}' = A\mathbf{X}$.

Para la parte no homogénea se emplea **coeficientes indeterminados**. El forzante es proporcional a $e^{2t}$ y $\lambda = 2$ es el valor propio doble; como el factor $e^{2t}$ ya aparece en $\mathbf{X}_c$, es necesario el factor $t^2$ y se propone

$$
\mathbf{X}_p(t) = \mathbf{P}(t)\,e^{2t},
\qquad
\mathbf{P}(t) = \mathbf{a}t^2 + \mathbf{b}t,
$$

con $\mathbf{a}$ y $\mathbf{b}$ vectores constantes por determinar. Al derivar resulta $\mathbf{X}_p' = (\mathbf{P}' + 2\mathbf{P})e^{2t}$, y la sustitución en el sistema exige

$$
\mathbf{P}' = (A - 2I)\mathbf{P} + \begin{pmatrix} -2 \\ 1 \end{pmatrix}.
$$

Sea $B = A - 2I$. Con $\mathbf{P} = \mathbf{a}t^2 + \mathbf{b}t$ se tiene $\mathbf{P}' = 2\mathbf{a}t + \mathbf{b}$ y

$$
B\mathbf{P} = \left[ (a_1 + a_2)t^2 + (b_1 + b_2)t \right] \begin{pmatrix} 1 \\ -1 \end{pmatrix}.
$$

La igualdad $2\mathbf{a}t + \mathbf{b} = B\mathbf{P} + (-2, 1)^T$ se separa por potencias de $t$. Del término constante,

$$
\mathbf{b} = \begin{pmatrix} -2 \\ 1 \end{pmatrix}.
$$

Del término lineal,

$$
2\mathbf{a} = (b_1 + b_2)\begin{pmatrix} 1 \\ -1 \end{pmatrix} = -\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix},
\qquad\text{es decir}\qquad
\mathbf{a} = \begin{pmatrix} -\frac{1}{2} \\[1mm] \frac{1}{2} \end{pmatrix}.
$$

El término cuadrático se cumple porque $a_1 + a_2 = 0$. Por tanto,

$$
\mathbf{X}_p(t) = \begin{pmatrix} -\frac{1}{2}t^2 - 2t \\[1mm] \frac{1}{2}t^2 + t \end{pmatrix} e^{2t}.
$$

La solución general es $\mathbf{X} = \mathbf{X}_c + \mathbf{X}_p$, que es el resultado de la sección anterior.

La comprobación de la particular es directa. Con $L_1 = -\frac{1}{2}t^2 - 2t$ y $L_2 = \frac{1}{2}t^2 + t$ se tiene $L_1' = -t - 2$ y $L_2' = t + 1$, de donde

$$
\mathbf{X}_p'(t) = \begin{pmatrix} L_1' + 2L_1 \\ L_2' + 2L_2 \end{pmatrix} e^{2t}
= \begin{pmatrix} -t^2 - 5t - 2 \\ t^2 + 3t + 1 \end{pmatrix} e^{2t}.
$$

Por otra parte, $A\mathbf{X}_p = (3L_1 + L_2,\ -L_1 + L_2)^T e^{2t}$, con $3L_1 + L_2 = -t^2 - 5t$ y $-L_1 + L_2 = t^2 + 3t$. Al sumar $\mathbf{F}(t) = (-2, 1)^T e^{2t}$ se recupera $\mathbf{X}_p'$, de modo que la particular satisface el sistema no homogéneo.

El forzante $e^{2t}$ está definido para todo $t \in \mathbb{R}$; la solución general también. No hay soluciones singulares ni ramas perdidas.

## Observaciones

El forzante tiene la misma frecuencia que el valor propio doble $\lambda = 2$: el sistema presenta resonancia. Por eso la solución particular contiene $t^2 e^{2t}$ y no basta con un término $t e^{2t}$. En términos de $B = A - 2I$, la razón es que $B$ es nilpotente de índice dos, $B^2 = 0$.

### Método alternativo: variación de parámetros

Con la matriz fundamental

$$
\Phi(t) = \begin{pmatrix} e^{2t} & (t+1)e^{2t} \\ -e^{2t} & -t\,e^{2t} \end{pmatrix},
\qquad \det\Phi(t) = e^{4t},
$$

la fórmula $\mathbf{X}_p = \Phi \displaystyle\int \Phi^{-1}\mathbf{F}\,dt$ conduce a la misma solución particular. Omitir las constantes de integración es válido porque reproducen términos de la solución homogénea.
