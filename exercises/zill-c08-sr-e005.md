---
title: "Zill Repaso C8 Ejercicio 5"
exercise-id: zill-c08-sr-e005
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 8, ejercicio 5"
statement-status: accepted
solution-status: draft
source-images:
  - c08sri01-p379.png
topics:
  - sistemas
competencies:
  - resolver-analiticamente.sistemas-lineales
hidden-competencies:
  - seleccionar-metodo.valores-propios
prerequisitos:
  - algebra-lineal-avanzada.vectores-generalizados
  - matrices.autovalores
  - matrices.autovectores
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

Resuelva el sistema lineal dado. $$\begin{aligned} \frac{dx}{dt} &= 2x + y \\ \frac{dy}{dt} &= -x \end{aligned}$$

## Solución

El sistema es **lineal**, **homogéneo** y con **coeficientes constantes**. Su único valor propio es $\lambda=1$, doble, y solo admite un vector propio independiente. La solución general es

$$
\mathbf{X}(t)=C_1\begin{pmatrix}1\\-1\end{pmatrix}e^{t}
+C_2\left(t\begin{pmatrix}1\\-1\end{pmatrix}+\begin{pmatrix}1\\0\end{pmatrix}\right)e^{t}.
$$

En componentes,

$$
x(t)=C_1e^{t}+C_2(t+1)e^{t},\qquad y(t)=-C_1e^{t}-C_2te^{t}.
$$

## Resolución

Se escribe el sistema en forma matricial $\mathbf{X}'=A\mathbf{X}$, con

$$
A=\begin{pmatrix}2&1\\-1&0\end{pmatrix}.
$$

Se aplica el **método de valores propios**. Los valores propios son las raíces de la ecuación característica $\det(A-\lambda I)=0$:

$$
\det(A-\lambda I)=\begin{vmatrix}2-\lambda&1\\-1&-\lambda\end{vmatrix}
=(2-\lambda)(-\lambda)+1=\lambda^{2}-2\lambda+1=(\lambda-1)^{2}.
$$

Por tanto, $\lambda=1$ es un valor propio doble.

Para $\lambda=1$ se resuelve $(A-I)\boldsymbol{\xi}=\mathbf{0}$:

$$
\begin{pmatrix}1&1\\-1&-1\end{pmatrix}
\begin{pmatrix}\xi_1\\\xi_2\end{pmatrix}=\mathbf{0},
$$

de donde $\xi_1+\xi_2=0$. Un vector propio es $\boldsymbol{\xi}=\begin{pmatrix}1\\-1\end{pmatrix}$.

El valor propio es doble, pero solo se obtiene un vector propio independiente. Se busca entonces un vector propio generalizado $\boldsymbol{\eta}$ que resuelva $(A-I)\boldsymbol{\eta}=\boldsymbol{\xi}$:

$$
\begin{pmatrix}1&1\\-1&-1\end{pmatrix}
\begin{pmatrix}\eta_1\\\eta_2\end{pmatrix}
=\begin{pmatrix}1\\-1\end{pmatrix}.
$$

La condición es $\eta_1+\eta_2=1$. Una elección válida es $\boldsymbol{\eta}=\begin{pmatrix}1\\0\end{pmatrix}$.

Con un valor propio repetido $\lambda$, la segunda solución es de la forma $(\boldsymbol{\xi}t+\boldsymbol{\eta})e^{\lambda t}$. La solución general resulta

$$
\mathbf{X}(t)=C_1\begin{pmatrix}1\\-1\end{pmatrix}e^{t}
+C_2\left(t\begin{pmatrix}1\\-1\end{pmatrix}+\begin{pmatrix}1\\0\end{pmatrix}\right)e^{t}.
$$

En componentes,

$$
\begin{aligned}
x(t)&=C_1e^{t}+C_2(t+1)e^{t},\\
y(t)&=-C_1e^{t}-C_2te^{t}.
\end{aligned}
$$

Para comprobar, se derivan ambas funciones:

$$
x'(t)=C_1e^{t}+C_2(t+2)e^{t},\qquad y'(t)=-C_1e^{t}-C_2(t+1)e^{t}.
$$

Por un lado, $2x+y=2C_1e^{t}+2C_2(t+1)e^{t}-C_1e^{t}-C_2te^{t}=C_1e^{t}+C_2(t+2)e^{t}=x'$. Por otro, $-x=-C_1e^{t}-C_2(t+1)e^{t}=y'$. La solución satisface ambas ecuaciones.

## Observaciones

### Caso de valor propio repetido

La matriz $A$ no es diagonalizable: el valor propio $\lambda=1$ tiene multiplicidad algebraica $2$, pero su multiplicidad geométrica es $1$. Por eso la segunda solución no es un múltiplo de $\boldsymbol{\xi}e^{t}$, sino que incorpora el factor $t$. Cuando un valor propio repetido admite dos vectores propios independientes, la solución general es una combinación de dos exponenciales sin el factor $t$.

El vector propio generalizado no es único: cualquier solución de $\eta_1+\eta_2=1$ es válida y conduce a la misma familia de soluciones, porque el cambio solo afecta a la combinación de las constantes $C_1$ y $C_2$.
