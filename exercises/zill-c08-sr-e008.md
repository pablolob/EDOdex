---
title: "Zill Repaso C8 Ejercicio 8"
exercise-id: zill-c08-sr-e008
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 8"
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

Resuelva el sistema lineal dado. $$\mathbf{X}' = \begin{pmatrix} -2 & 5 \\ -2 & 4 \end{pmatrix} \mathbf{X}$$

## Solución

$$
\mathbf{X}(t)=C_1 e^{t}\begin{pmatrix} 5\cos t \\ 3\cos t-\sin t \end{pmatrix}
+C_2 e^{t}\begin{pmatrix} 5\sin t \\ 3\sin t+\cos t \end{pmatrix}.
$$

## Resolución

El sistema es **lineal**, **homogéneo** y con coeficientes constantes. Se escribe como $\mathbf{X}'=A\mathbf{X}$, con

$$
A=\begin{pmatrix} -2 & 5 \\ -2 & 4 \end{pmatrix}.
$$

Se aplica el **método de valores propios**. Se buscan soluciones de la forma $\mathbf{X}=\boldsymbol{\xi}e^{\lambda t}$. Al sustituir resulta $A\boldsymbol{\xi}=\lambda\boldsymbol{\xi}$, de modo que $\lambda$ y $\boldsymbol{\xi}$ son un valor propio y un vector propio de $A$. La ecuación característica es

$$
\det(A-\lambda I)=\begin{vmatrix} -2-\lambda & 5 \\ -2 & 4-\lambda \end{vmatrix}
=(-2-\lambda)(4-\lambda)+10=\lambda^{2}-2\lambda+2=0.
$$

Sus raíces son

$$
\lambda=\frac{2\pm\sqrt{4-8}}{2}=1\pm i.
$$

Los valores propios son complejos conjugados, $\lambda_1=1+i$ y $\lambda_2=1-i$.

Para $\lambda_1=1+i$, el sistema $(A-(1+i)I)\boldsymbol{\xi}=\mathbf{0}$ es

$$
\begin{pmatrix} -3-i & 5 \\ -2 & 3-i \end{pmatrix}
\begin{pmatrix} \xi_1 \\ \xi_2 \end{pmatrix}=\mathbf{0},
\qquad (-3-i)\xi_1+5\xi_2=0 \;\Rightarrow\; \xi_2=\frac{3+i}{5}\xi_1.
$$

Tomando $\xi_1=5$ se obtiene el vector propio $\boldsymbol{\xi}=\begin{pmatrix} 5 \\ 3+i \end{pmatrix}$.

La solución compleja asociada es

$$
\mathbf{X}(t)=e^{(1+i)t}\begin{pmatrix} 5 \\ 3+i \end{pmatrix}
=e^{t}(\cos t+i\sin t)\begin{pmatrix} 5 \\ 3+i \end{pmatrix}.
$$

Al separar partes real e imaginaria,

$$
e^{t}\begin{pmatrix} 5\cos t \\ 3\cos t-\sin t \end{pmatrix}
+i\,e^{t}\begin{pmatrix} 5\sin t \\ 3\sin t+\cos t \end{pmatrix}.
$$

Como la matriz $A$ es real, tanto la parte real como la parte imaginaria son soluciones reales del sistema. Son linealmente independientes, pues en $t=0$ sus vectores son $\begin{pmatrix} 5 \\ 3 \end{pmatrix}$ y $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$, no proporcionales. Por tanto forman un conjunto fundamental y la solución general es

$$
\mathbf{X}(t)=C_1 e^{t}\begin{pmatrix} 5\cos t \\ 3\cos t-\sin t \end{pmatrix}
+C_2 e^{t}\begin{pmatrix} 5\sin t \\ 3\sin t+\cos t \end{pmatrix}.
$$

Por componentes,

$$
x(t)=e^{t}(5C_1\cos t+5C_2\sin t), \qquad
y(t)=e^{t}\big[(3C_1+C_2)\cos t+(3C_2-C_1)\sin t\big].
$$

En efecto, al derivar la parte real y multiplicar por $A$ se obtiene el mismo resultado:

$$
A\,e^{t}\begin{pmatrix} 5\cos t \\ 3\cos t-\sin t \end{pmatrix}
=e^{t}\begin{pmatrix} 5\cos t-5\sin t \\ 2\cos t-4\sin t \end{pmatrix}
=\frac{d}{dt}\!\left[e^{t}\begin{pmatrix} 5\cos t \\ 3\cos t-\sin t \end{pmatrix}\right].
$$

## Observaciones

Los valores propios son complejos conjugados con parte real $1$, por lo que las soluciones crecen como $e^{t}$ y las trayectorias se alejan del origen en forma de espiral. Como la parte real es positiva, el origen es un punto crítico inestable.

La elección del vector propio es arbitraria salvo por un factor escalar no nulo. Escoger otro múltiplo solo redefine las constantes $C_1$ y $C_2$; también puede tomarse la parte imaginaria en lugar de la real como primera solución real, lo que únicamente intercambia los papeles de ambas constantes.

