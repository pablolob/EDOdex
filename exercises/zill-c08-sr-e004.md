---
title: "Zill Repaso C8 Ejercicio 4"
exercise-id: zill-c08-sr-e004
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 4"
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
  technical: 1
---

## Enunciado

Considere un sistema lineal $\mathbf{X}' = \mathbf{AX}$ de dos ecuaciones diferenciales, donde $\mathbf{A}$ es una matriz de coeficientes reales. ¿Cuál es la solución general del sistema si se sabe que $\lambda_1 = 1 + 2i$ es un eigenvalor y $$\mathbf{K}_1 = \begin{pmatrix} 1 \\ i \end{pmatrix}$$ es un eigenvector correspondiente?

## Solución

La solución general es

$$
\mathbf{X}(t)=c_1 e^{t}\begin{pmatrix}\cos 2t\\-\sin 2t\end{pmatrix}
+c_2 e^{t}\begin{pmatrix}\sin 2t\\\cos 2t\end{pmatrix},
$$

es decir, en componentes,

$$
x(t)=e^{t}\left(c_1\cos 2t+c_2\sin 2t\right),
\qquad
y(t)=e^{t}\left(-c_1\sin 2t+c_2\cos 2t\right),
$$

con $c_1,c_2\in\mathbb{R}$.

## Resolución

El sistema es lineal, homogéneo y con coeficientes constantes. Como $\mathbf{A}$ es real, los valores propios complejos aparecen en pares conjugados; junto con $\lambda_1=1+2i$ está $\overline{\lambda_1}=1-2i$. Al par propio $(\lambda_1,\mathbf{K}_1)$ corresponde la solución compleja

$$
\mathbf{X}(t)=\mathbf{K}_1 e^{\lambda_1 t}=\begin{pmatrix}1\\ i\end{pmatrix}e^{(1+2i)t}.
$$

La fórmula de Euler da $e^{(1+2i)t}=e^{t}(\cos 2t+i\sin 2t)$, de modo que

$$
\mathbf{X}(t)=e^{t}(\cos 2t+i\sin 2t)\begin{pmatrix}1\\ i\end{pmatrix}
=e^{t}\begin{pmatrix}\cos 2t+i\sin 2t\\ -\sin 2t+i\cos 2t\end{pmatrix}.
$$

Como los coeficientes de $\mathbf{A}$ son reales, la parte real y la parte imaginaria de esta solución compleja son soluciones reales del sistema. Al separarlas se obtiene

$$
\mathbf{X}_1(t)=e^{t}\begin{pmatrix}\cos 2t\\-\sin 2t\end{pmatrix},
\qquad
\mathbf{X}_2(t)=e^{t}\begin{pmatrix}\sin 2t\\\cos 2t\end{pmatrix}.
$$

El determinante de la matriz formada por ambas es $e^{2t}(\cos^2 2t+\sin^2 2t)=e^{2t}\ne 0$. Por tanto, son linealmente independientes y constituyen un conjunto fundamental de soluciones en todo $\mathbb{R}$. La solución general es la combinación lineal

$$
\mathbf{X}(t)=c_1 e^{t}\begin{pmatrix}\cos 2t\\-\sin 2t\end{pmatrix}
+c_2 e^{t}\begin{pmatrix}\sin 2t\\\cos 2t\end{pmatrix}.
$$

En componentes resulta $x(t)=e^{t}(c_1\cos 2t+c_2\sin 2t)$ y $y(t)=e^{t}(-c_1\sin 2t+c_2\cos 2t)$.

## Observaciones

La matriz $\mathbf{A}$ no se especifica y no es necesaria: el par propio dado determina el conjunto fundamental. El otro valor propio es el conjugado $\overline{\lambda_1}=1-2i$, con vector propio $\overline{\mathbf{K}_1}=(1,-i)$; aporta las mismas dos soluciones reales y no una tercera independiente. La solución está definida en todo $\mathbb{R}$ y las constantes $c_1$ y $c_2$ son reales, ya que el conjunto fundamental elegido es real.
