---
title: "Zill Repaso C8 Ejercicio 12"
exercise-id: zill-c08-sr-e012
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 12"
statement-status: accepted
solution-status: draft
topics:
  - sistemas
competencies:
  - resolver-analiticamente.sistemas-lineales
  - resolver-analiticamente.sistemas-no-homogeneos
hidden-competencies:
  - seleccionar-metodo.valores-propios
  - seleccionar-metodo.variacion-parametros
prerequisitos:
  - matrices.determinantes
  - matrices.autovalores
  - matrices.autovectores
  - algebra.numeros-complejos
  - integracion.trigonometrica
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c08sri02-p380.png
---

## Enunciado

$$\mathbf{X}' = \begin{pmatrix} 1 & 2 \\ -\frac{1}{2} & 1 \end{pmatrix} \mathbf{X} + \begin{pmatrix} 0 \\ e^t \tan t \end{pmatrix}$$

## Solución

Con $t$ en cualquier intervalo que no contenga un múltiplo impar de $\pi/2$, la solución general es

$$
\mathbf{X}(t)=e^{t}\left[c_1\begin{pmatrix}2\cos t\\-\sin t\end{pmatrix}
+c_2\begin{pmatrix}2\sin t\\ \cos t\end{pmatrix}
+\begin{pmatrix}-2\cos t\,\ln|\sec t+\tan t|\\ -1+\sin t\,\ln|\sec t+\tan t|\end{pmatrix}\right],
$$

con $c_1$ y $c_2$ constantes arbitrarias. Por componentes,

$$
\begin{aligned}
x(t) &= e^{t}\left[2c_1\cos t+2c_2\sin t-2\cos t\,\ln|\sec t+\tan t|\right], \\
y(t) &= e^{t}\left[-c_1\sin t+c_2\cos t-1+\sin t\,\ln|\sec t+\tan t|\right].
\end{aligned}
$$

## Resolución

El sistema es lineal, no homogéneo y con coeficientes constantes. Se escribe en la forma $\mathbf{X}'=A\mathbf{X}+\mathbf{F}(t)$, con

$$
A=\begin{pmatrix}1&2\\-\frac{1}{2}&1\end{pmatrix},
\qquad
\mathbf{F}(t)=\begin{pmatrix}0\\ e^{t}\tan t\end{pmatrix}.
$$

Su solución general tiene la estructura $\mathbf{X}=\mathbf{X}_c+\mathbf{X}_p$, donde $\mathbf{X}_c$ resuelve el sistema homogéneo y $\mathbf{X}_p$ es una solución particular.

**Sistema homogéneo.** Se aplica el método de **valores propios**. Se buscan soluciones de la forma $\mathbf{X}=\boldsymbol{\xi}e^{\lambda t}$. La ecuación característica es

$$
\det(A-\lambda I)=(1-\lambda)^{2}+1=\lambda^{2}-2\lambda+2=0,
$$

cuyas raíces son los valores propios complejos conjugados $\lambda=1\pm i$.

Para $\lambda=1+i$, la ecuación $(A-(1+i)I)\boldsymbol{\xi}=\mathbf{0}$ se reduce a $-i\,\xi_1+2\xi_2=0$, es decir, $\xi_2=\frac{i}{2}\xi_1$. Se elige $\boldsymbol{\xi}=(2,i)^{T}$. La solución compleja asociada es

$$
e^{(1+i)t}\begin{pmatrix}2\\ i\end{pmatrix}
=e^{t}(\cos t+i\sin t)\begin{pmatrix}2\\ i\end{pmatrix}
=e^{t}\begin{pmatrix}2\cos t+2i\sin t\\ -\sin t+i\cos t\end{pmatrix}.
$$

Al separar la parte real y la parte imaginaria se obtienen dos soluciones reales linealmente independientes,

$$
\mathbf{X}_1(t)=e^{t}\begin{pmatrix}2\cos t\\ -\sin t\end{pmatrix},
\qquad
\mathbf{X}_2(t)=e^{t}\begin{pmatrix}2\sin t\\ \cos t\end{pmatrix}.
$$

Estas forman un conjunto fundamental, pues su Wronskiano es $W=2e^{2t}\ne 0$. La solución del sistema homogéneo es $\mathbf{X}_c(t)=c_1\mathbf{X}_1(t)+c_2\mathbf{X}_2(t)$.

**Solución particular.** Con la matriz fundamental

$$
\Phi(t)=e^{t}\begin{pmatrix}2\cos t&2\sin t\\ -\sin t&\cos t\end{pmatrix},
\qquad
\det\Phi(t)=2e^{2t},
$$

se tiene

$$
\Phi^{-1}(t)=\frac{e^{-t}}{2}\begin{pmatrix}\cos t&-2\sin t\\ \sin t&2\cos t\end{pmatrix}.
$$

Se aplica **variación de parámetros** en forma matricial,

$$
\mathbf{X}_p(t)=\Phi(t)\int\Phi^{-1}(t)\,\mathbf{F}(t)\,dt.
$$

El integrando resulta

$$
\Phi^{-1}(t)\mathbf{F}(t)
=\frac{e^{-t}}{2}\begin{pmatrix}\cos t&-2\sin t\\ \sin t&2\cos t\end{pmatrix}
\begin{pmatrix}0\\ e^{t}\tan t\end{pmatrix}
=\begin{pmatrix}-\sin t\,\tan t\\ \sin t\end{pmatrix}.
$$

La primera componente se simplifica con la identidad $\sin t\,\tan t=\dfrac{\sin^{2}t}{\cos t}=\sec t-\cos t$, y la segunda es inmediata. Con la primitiva $\displaystyle\int\sec t\,dt=\ln|\sec t+\tan t|$ se obtiene

$$
\int\Phi^{-1}(t)\mathbf{F}(t)\,dt
=\begin{pmatrix}\sin t-\ln|\sec t+\tan t|\\ -\cos t\end{pmatrix}.
$$

Las constantes de integración se omiten porque solo reproducen soluciones del sistema homogéneo. Al multiplicar por $\Phi(t)$,

$$
\mathbf{X}_p(t)
=e^{t}\begin{pmatrix}2\cos t&2\sin t\\ -\sin t&\cos t\end{pmatrix}
\begin{pmatrix}\sin t-\ln|\sec t+\tan t|\\ -\cos t\end{pmatrix}
=e^{t}\begin{pmatrix}-2\cos t\,\ln|\sec t+\tan t|\\ -1+\sin t\,\ln|\sec t+\tan t|\end{pmatrix}.
$$

En efecto, la primera componente es $2\cos t\sin t-2\cos t\ln|\sec t+\tan t|-2\sin t\cos t=-2\cos t\ln|\sec t+\tan t|$ y la segunda es $-\sin^{2}t+\sin t\ln|\sec t+\tan t|-\cos^{2}t=-1+\sin t\ln|\sec t+\tan t|$.

La solución general es la suma $\mathbf{X}=\mathbf{X}_c+\mathbf{X}_p$. Para comprobar la parte particular se escribe $\mathbf{X}_p=e^{t}(g_1,g_2)$, con $g_1=-2\cos t\,L$ y $g_2=-1+\sin t\,L$, donde $L=\ln|\sec t+\tan t|$ y $L'=\sec t$. Entonces

$$
\mathbf{X}_p'=e^{t}\begin{pmatrix}-2\cos t\,L+2\sin t\,L-2\\ -1+\sin t\,L+\cos t\,L+\tan t\end{pmatrix},
\qquad
A\mathbf{X}_p=e^{t}\begin{pmatrix}-2\cos t\,L-2+2\sin t\,L\\ \cos t\,L-1+\sin t\,L\end{pmatrix}.
$$

Al restar resulta $\mathbf{X}_p'-A\mathbf{X}_p=e^{t}(0,\tan t)=\mathbf{F}(t)$, de modo que $\mathbf{X}_p$ satisface el sistema. Cada término homogéneo cumple $\mathbf{X}_i'=A\mathbf{X}_i$ por construcción.

El forzante $\tan t$ solo es continuo donde $\cos t\ne 0$. Por tanto, la solución es válida en cada intervalo que no contiene un múltiplo impar de $\pi/2$; por ejemplo, en $\left(-\frac{\pi}{2},\frac{\pi}{2}\right)$.

## Observaciones

El forzante $e^{t}\tan t$ no pertenece a las familias polinómica, exponencial o trigonométrica finita que admite el método de coeficientes indeterminados; la **variación de parámetros** es la vía general y la única disponible aquí. Como el enunciado no prescribe el método, reconocer esta limitación forma parte del ejercicio.

Los valores propios $1\pm i$ hacen que el factor $e^{t}$ de $\Phi$ cancele el de $\mathbf{F}$. Por eso las integrales se reducen a $\int(-\sin t\,\tan t)\,dt$ y $\int\sin t\,dt$, ambas elementales.

El logaritmo se puede escribir equivalentemente como $\ln\left|\frac{1+\sin t}{\cos t}\right|$ o como $\ln|\sec t+\tan t|$. El sumando constante $-1$ de la segunda componente no se puede absorber en $\mathbf{X}_c$: la matriz $A$ es invertible y el sistema homogéneo no admite soluciones constantes no nulas.

No hay soluciones singulares, perdidas ni espurias, pues $\det\Phi(t)=2e^{2t}\ne 0$ para todo $t$.
