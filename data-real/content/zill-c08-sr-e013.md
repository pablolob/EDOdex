
## Enunciado

$$\mathbf{X}' = \begin{pmatrix} -1 & 1 \\ -2 & 1 \end{pmatrix} \mathbf{X} + \begin{pmatrix} 1 \\ \cot t \end{pmatrix}$$

## Solución

En cualquier intervalo que no contenga un múltiplo entero de $\pi$, la solución general es

$$
\begin{aligned}
x(t) &= C_1\cos t + C_2\sin t - 1 + \sin t\,\ln|\csc t - \cot t|, \\
y(t) &= C_1(\cos t - \sin t) + C_2(\sin t + \cos t) - 1 + (\sin t + \cos t)\ln|\csc t - \cot t|,
\end{aligned}
$$

con $C_1$ y $C_2$ constantes arbitrarias.

## Resolución

El sistema es lineal, no homogéneo y con coeficientes constantes. Se escribe en la forma $\mathbf{X}'=A\mathbf{X}+\mathbf{F}(t)$, con

$$
A=\begin{pmatrix}-1&1\\-2&1\end{pmatrix},
\qquad
\mathbf{F}(t)=\begin{pmatrix}1\\ \cot t\end{pmatrix}.
$$

Su solución general tiene la estructura $\mathbf{X}=\mathbf{X}_c+\mathbf{X}_p$, donde $\mathbf{X}_c$ resuelve el sistema homogéneo y $\mathbf{X}_p$ es una solución particular.

**Sistema homogéneo.** Se aplica el método de **valores propios** con soluciones de la forma $\mathbf{X}=\boldsymbol{\xi}e^{\lambda t}$. La ecuación característica es

$$
\det(A-\lambda I)=(-1-\lambda)(1-\lambda)+2=\lambda^{2}+1=0,
$$

cuyas raíces son los valores propios complejos conjugados $\lambda=\pm i$.

Para $\lambda=i$, la ecuación $(A-iI)\boldsymbol{\xi}=\mathbf{0}$ se reduce a $(-1-i)\xi_1+\xi_2=0$, es decir, $\xi_2=(1+i)\xi_1$. Se elige $\boldsymbol{\xi}=(1,\,1+i)^{T}$. La solución compleja asociada es

$$
e^{it}\begin{pmatrix}1\\1+i\end{pmatrix}
=(\cos t+i\sin t)\begin{pmatrix}1\\1+i\end{pmatrix}
=\begin{pmatrix}\cos t\\ \cos t-\sin t\end{pmatrix}
+i\begin{pmatrix}\sin t\\ \sin t+\cos t\end{pmatrix}.
$$

Al separar la parte real y la imaginaria se obtienen dos soluciones reales linealmente independientes,

$$
\mathbf{X}_1(t)=\begin{pmatrix}\cos t\\ \cos t-\sin t\end{pmatrix},
\qquad
\mathbf{X}_2(t)=\begin{pmatrix}\sin t\\ \sin t+\cos t\end{pmatrix}.
$$

Su matriz fundamental tiene determinante $\det\Phi(t)=\cos^{2}t+\sin^{2}t=1$, que no se anula. Por tanto forman un conjunto fundamental y

$$
\mathbf{X}_c(t)=C_1\mathbf{X}_1(t)+C_2\mathbf{X}_2(t).
$$

**Solución particular.** El forzante contiene $\cot t$, que no pertenece a las familias que admite el método de coeficientes indeterminados. Se aplica **variación de parámetros** en forma matricial,

$$
\mathbf{X}_p(t)=\Phi(t)\int\Phi^{-1}(t)\,\mathbf{F}(t)\,dt,
$$

con la matriz fundamental

$$
\Phi(t)=\begin{pmatrix}\cos t & \sin t\\ \cos t-\sin t & \sin t+\cos t\end{pmatrix}.
$$

Su inversa es

$$
\Phi^{-1}(t)=\begin{pmatrix}\sin t+\cos t & -\sin t\\ \sin t-\cos t & \cos t\end{pmatrix}.
$$

El integrando resulta

$$
\Phi^{-1}(t)\mathbf{F}(t)
=\begin{pmatrix}\sin t+\cos t & -\sin t\\ \sin t-\cos t & \cos t\end{pmatrix}
\begin{pmatrix}1\\ \cot t\end{pmatrix}
=\begin{pmatrix}\sin t\\ \sin t-\cos t+\dfrac{\cos^{2}t}{\sin t}\end{pmatrix},
$$

pues $\sin t+\cos t-\sin t\cot t=\cos t+\sin t-\cos t=\sin t$. La segunda componente se simplifica con la identidad $\dfrac{\cos^{2}t}{\sin t}=\csc t-\sin t$. Con la primitiva $\displaystyle\int\csc t\,dt=\ln|\csc t-\cot t|$ se obtiene

$$
\int\Phi^{-1}(t)\mathbf{F}(t)\,dt
=\begin{pmatrix}-\cos t\\ -\sin t+\ln|\csc t-\cot t|\end{pmatrix}.
$$

Las constantes de integración se omiten porque solo reproducen soluciones del sistema homogéneo. Al multiplicar por $\Phi(t)$,

$$
\mathbf{X}_p(t)
=\begin{pmatrix}\cos t & \sin t\\ \cos t-\sin t & \sin t+\cos t\end{pmatrix}
\begin{pmatrix}-\cos t\\ -\sin t+\ln|\csc t-\cot t|\end{pmatrix}
=\begin{pmatrix}-1+\sin t\,L\\ -1+(\sin t+\cos t)L\end{pmatrix},
$$

donde $L=\ln|\csc t-\cot t|$. La primera componente es $-\cos^{2}t-\sin^{2}t+\sin t\,L=-1+\sin t\,L$. La segunda es $-\cos^{2}t+\sin t\cos t-\sin^{2}t-\sin t\cos t+(\sin t+\cos t)L=-1+(\sin t+\cos t)L$.

La solución general es la suma $\mathbf{X}=\mathbf{X}_c+\mathbf{X}_p$. Para comprobar la parte particular se usa $L'=\csc t$. Entonces

$$
\mathbf{X}_p'=\begin{pmatrix}\cos t\,L+1\\ (\cos t-\sin t)L+1+\cot t\end{pmatrix},
\qquad
A\mathbf{X}_p=\begin{pmatrix}\cos t\,L\\ 1+(\cos t-\sin t)L\end{pmatrix}.
$$

Al sumar $\mathbf{F}$ a $A\mathbf{X}_p$ se recupera $\mathbf{X}_p'$, de modo que $\mathbf{X}_p$ satisface el sistema. Cada término homogéneo cumple $\mathbf{X}_i'=A\mathbf{X}_i$ por construcción.

El forzante $\cot t$ solo es continuo donde $\sin t\ne 0$. Por tanto, la solución es válida en cada intervalo que no contiene un múltiplo entero de $\pi$; por ejemplo, en $(0,\pi)$.

## Observaciones

El forzante $\cot t$ no pertenece a las familias polinómica, exponencial o trigonométrica finita que admite el método de coeficientes indeterminados; la **variación de parámetros** es la vía general. Como el enunciado no prescribe el método, reconocer esta limitación forma parte del ejercicio.

El logaritmo admite la forma equivalente $\ln|\tan(t/2)|$, pues $\csc t-\cot t=\tan(t/2)$.

El sumando constante $(-1,-1)$ de $\mathbf{X}_p$ no puede absorberse en $\mathbf{X}_c$: la matriz $A$ es invertible y el sistema homogéneo no admite soluciones constantes no nulas. No hay soluciones singulares, perdidas ni espurias, pues $\det\Phi(t)=1$ para todo $t$.
