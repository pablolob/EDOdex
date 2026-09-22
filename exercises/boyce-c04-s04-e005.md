---
title: "Boyce 4.4 Ejercicio 5"
exercise-id: boyce-c04-s04-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.4, ejercicio 5"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.variacion-parametros
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-no-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s04i01-p240.png
---

## Enunciado

Halle una fórmula que comprenda integrales para una solución particular de la ecuación diferencial

$$y''' - y'' + y' - y = g(x)$$

## Solución

Una solución particular es

$$
y_p(x)=\frac{1}{2}\int_{x_0}^{x}\left[e^{x-t}-\sin(x-t)-\cos(x-t)\right]g(t)\,dt,
$$

donde $x_0$ es un punto fijo del intervalo en que $g$ es continua.

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Se pide una fórmula general para una solución particular mediante **variación de parámetros**, aplicable a cualquier $g(x)$ continua.

**Ecuación homogénea.** La ecuación asociada es $y'''-y''+y'-y=0$. Su ecuación característica es

$$
r^3-r^2+r-1=(r-1)(r^2+1)=0,
$$

cuyas raíces son $r=1$, $r=i$ y $r=-i$. Un conjunto fundamental de soluciones es

$$
y_1=e^{x},\qquad y_2=\cos x,\qquad y_3=\sin x.
$$

**Sistema de variación de parámetros.** Se busca $y_p=u_1y_1+u_2y_2+u_3y_3$, donde las funciones $u_k$ satisfacen

$$
\begin{aligned}
u_1'y_1+u_2'y_2+u_3'y_3 &= 0, \\
u_1'y_1'+u_2'y_2'+u_3'y_3' &= 0, \\
u_1'y_1''+u_2'y_2''+u_3'y_3'' &= g(x).
\end{aligned}
$$

El wronskiano del conjunto fundamental es

$$
W=\begin{vmatrix} e^{x} & \cos x & \sin x \\ e^{x} & -\sin x & \cos x \\ e^{x} & -\cos x & -\sin x \end{vmatrix}=2e^{x}.
$$

Por la regla de Cramer, $u_k'=W_k/W$, donde $W_k$ se obtiene sustituyendo la $k$-ésima columna de $W$ por $(0,0,g(x))$:

$$
\begin{aligned}
W_1 &= \begin{vmatrix} 0 & \cos x & \sin x \\ 0 & -\sin x & \cos x \\ g(x) & -\cos x & -\sin x \end{vmatrix} = g(x), \\
W_2 &= \begin{vmatrix} e^{x} & 0 & \sin x \\ e^{x} & 0 & \cos x \\ e^{x} & g(x) & -\sin x \end{vmatrix} = e^{x}\bigl(\sin x-\cos x\bigr)g(x), \\
W_3 &= \begin{vmatrix} e^{x} & \cos x & 0 \\ e^{x} & -\sin x & 0 \\ e^{x} & -\cos x & g(x) \end{vmatrix} = -e^{x}\bigl(\sin x+\cos x\bigr)g(x).
\end{aligned}
$$

Por tanto,

$$
u_1'=\frac{1}{2}e^{-x}g(x),\qquad u_2'=\frac{1}{2}\bigl(\sin x-\cos x\bigr)g(x),\qquad u_3'=-\frac{1}{2}\bigl(\sin x+\cos x\bigr)g(x).
$$

**Integración.** Integrando cada derivada desde un punto fijo $x_0$ hasta $x$ y tomando las constantes de integración iguales a cero,

$$
u_1=\frac{1}{2}\int_{x_0}^{x}e^{-t}g(t)\,dt,\quad u_2=\frac{1}{2}\int_{x_0}^{x}\bigl(\sin t-\cos t\bigr)g(t)\,dt,\quad u_3=-\frac{1}{2}\int_{x_0}^{x}\bigl(\sin t+\cos t\bigr)g(t)\,dt.
$$

**Solución particular.** Al sustituir en $y_p=u_1y_1+u_2y_2+u_3y_3$,

$$
\begin{aligned}
y_p(x) &= \frac{1}{2}\int_{x_0}^{x}\Bigl[e^{x-t}+\cos x\,(\sin t-\cos t)-\sin x\,(\sin t+\cos t)\Bigr]g(t)\,dt \\
&= \frac{1}{2}\int_{x_0}^{x}\Bigl[e^{x-t}+\sin(t-x)-\cos(t-x)\Bigr]g(t)\,dt \\
&= \frac{1}{2}\int_{x_0}^{x}\Bigl[e^{x-t}-\sin(x-t)-\cos(x-t)\Bigr]g(t)\,dt.
\end{aligned}
$$

La función $g$ es continua en el intervalo considerado, de modo que la integral define una solución particular en ese intervalo.

**Comprobación.** El núcleo $K(x,t)=\tfrac{1}{2}\left[e^{x-t}-\sin(x-t)-\cos(x-t)\right]$ satisface $K'''-K''+K'-K=0$ para $x\ne t$, junto con $K(t,t)=K_x(t,t)=0$ y $K_{xx}(t^+,t)-K_{xx}(t^-,t)=1$. Estas condiciones garantizan que $y_p=\int_{x_0}^{x}K(x,t)g(t)\,dt$ resuelve $y_p'''-y_p''+y_p'-y_p=g(x)$.

## Observaciones

El núcleo integral es la función de Green del operador $y'''-y''+y'-y$. La elección de $x_0$ solo añade a $y_p$ una combinación de $e^{x}$, $\cos x$ y $\sin x$, es decir, una solución de la ecuación homogénea.

Para un término no homogéneo concreto puede aplicarse **coeficientes indeterminados**. Por ejemplo, $g(x)=e^{x}$ da $y_p=\tfrac{1}{2}xe^{x}$, que reproduce el término no homogéneo de la fórmula general.
