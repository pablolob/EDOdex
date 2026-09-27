---
title: "Zill Repaso C3 Ejercicio 12"
exercise-id: zill-c03-sr-e012
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 3, ejercicio 12"
language: es
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - seleccionar-metodo.sustitucion
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.sustitucion
  - derivacion.regla-cadena
difficulty:
  conceptual: 2
  technical: 2
solution-status: draft
statement-status: accepted
source-images:
  - c03sri03-p129.png
---

## Enunciado

12. Un problema clásico en el cálculo de variaciones es encontrar la forma de una curva $\mathcal{C}$ tal que una cuenta, bajo la influencia de la gravedad, se deslice del punto $A(0, 0)$ al punto $B(x_1, y_1)$ en el menor tiempo. Vea la figura 3.R.3. Se puede demostrar que una ecuación no lineal para la forma $y(x)$ de la trayectoria es $y[1 + (y')^2] = k$, donde $k$ es una constante. Primero resuelva para $dx$ en términos de $y$ y $dy$; y después utilice la sustitución $y = k \sin^2 \theta$ para obtener una forma paramétrica de la solución. La curva $\mathcal{C}$ resulta ser una **cicloide**.

## Solución

Al despejar $y'$ y separar $dx$ se obtiene

$$
dx = \sqrt{\frac{y}{k-y}}\,dy.
$$

Con la sustitución $y = k\sin^2\theta$ resulta la forma paramétrica

$$
\begin{aligned}
x &= \frac{k}{2}\left(2\theta - \sin 2\theta\right), \\
y &= \frac{k}{2}\left(1 - \cos 2\theta\right),
\end{aligned}
\qquad 0 \le \theta \le \frac{\pi}{2}.
$$

Es decir, una cicloide de radio $a = k/2$.

## Resolución

La ecuación de la trayectoria es

$$
y\left[1 + (y')^2\right] = k.
$$

Se despeja primero $(y')^2$. Al dividir entre $y$ y restar la unidad,

$$
(y')^2 = \frac{k-y}{y}.
$$

La cuenta parte de $A(0,0)$ y se desliza hacia abajo y hacia la derecha, de modo que $x$ y $y$ crecen a la vez y $y' > 0$. Se toma entonces la raíz positiva,

$$
y' = \sqrt{\frac{k-y}{y}},
$$

y, escribiendo $y' = dy/dx$, se separa $dx$:

$$
dx = \sqrt{\frac{y}{k-y}}\,dy.
$$

Ahora se sustituye $y = k\sin^2\theta$. Al derivar respecto de $\theta$,

$$
dy = 2k\sin\theta\cos\theta\,d\theta,
$$

y el cociente del radical queda

$$
\sqrt{\frac{y}{k-y}} = \sqrt{\frac{k\sin^2\theta}{k\cos^2\theta}} = \tan\theta
\qquad \left(0 \le \theta < \frac{\pi}{2}\right).
$$

En $\theta = \pi/2$ el radical se anula y la expresión $dx/dy$ es singular; sin embargo, la parametrización se prolonga por continuidad hasta ese valor, que corresponde al mínimo de la cicloide.

Por tanto,

$$
dx = \tan\theta \cdot 2k\sin\theta\cos\theta\,d\theta = 2k\sin^2\theta\,d\theta.
$$

Se integra usando la identidad $\sin^2\theta = \dfrac{1-\cos 2\theta}{2}$:

$$
x = 2k\int \sin^2\theta\,d\theta = k\int (1-\cos 2\theta)\,d\theta = k\left(\theta - \frac{1}{2}\sin 2\theta\right) + C.
$$

La variable $y$ se reescribe en la misma parametrización:

$$
y = k\sin^2\theta = \frac{k}{2}\left(1-\cos 2\theta\right).
$$

La trayectoria comienza en $A(0,0)$. El valor $y=0$ corresponde a $\theta=0$ en el primer arco, y entonces $x(0)=C$, de donde $C=0$. Así,

$$
\begin{aligned}
x &= k\left(\theta - \frac{1}{2}\sin 2\theta\right), \\
y &= k\sin^2\theta.
\end{aligned}
$$

Con el cambio de parámetro $\varphi = 2\theta$ y el radio $a = k/2$,

$$
x = a(\varphi - \sin\varphi), \qquad y = a(1-\cos\varphi),
$$

que es la parametrización estándar de una cicloide.

## Observaciones

La solución describe la cicloide que genera una circunferencia de radio $a = k/2$ al rodar sobre la recta $y = 0$. El punto final $B(x_1,y_1)$ fija los valores de $k$ y del parámetro correspondiente a $B$; como $0 \le y \le k$, la cuenta recorre únicamente el primer arco, que comienza en la cúspide con tangente vertical.

La raíz negativa de $(y')^2$ correspondería a la rama reflejada, en la que $x$ disminuye al aumentar $y$. La constante $k$ no queda determinada por la ecuación, sino por el punto de llegada.
