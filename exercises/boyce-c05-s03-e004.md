---
title: "Boyce 5.3 Ejercicio 4"
exercise-id: boyce-c05-s03-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
prerequisitos:
  - derivacion.producto
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s03i01-p263.png
---

## Enunciado

En cada uno de los problemas 1 a 4, determine $\phi''(x_0)$, $\phi'''(x_0)$ y $\phi^{\text{iv}}(x_0)$ para el punto $x_0$ dado si $y = \phi(x)$ es una solución del problema con valor inicial que se da.

4. $y'' + x^2 y' + (\sin x)y = 0; \quad y(0) = a_0, \quad y'(0) = a_1$

## Solución

$$
\phi''(0)=0,\qquad \phi'''(0)=-a_0,\qquad \phi^{\text{iv}}(0)=-4a_1.
$$

## Resolución

La función $y=\phi(x)$ satisface la ecuación en un intervalo que contiene a $x_0=0$. El coeficiente de $y''$ es $1$, y los coeficientes $x^2$ y $\sin x$ son continuos en todo $\mathbb{R}$; por tanto, $x_0=0$ es un punto ordinario y la solución es analítica en un entorno del origen. Los valores pedidos se obtienen derivando la ecuación sucesivamente y evaluando en $x_0=0$ con los datos iniciales.

Al evaluar la ecuación en $x_0=0$, donde $\sin 0=0$,

$$
\phi''(0) + 0^2\,\phi'(0) + (\sin 0)\,\phi(0) = 0
\quad\Longrightarrow\quad
\phi''(0)=0.
$$

Se deriva la ecuación miembro a miembro. Con la **regla del producto**,

$$
\phi''' + 2x\phi' + x^2\phi'' + (\cos x)\phi + (\sin x)\phi' = 0.
$$

Al evaluar en $x=0$, donde $\cos 0=1$ y $\sin 0=0$,

$$
\phi'''(0) + \phi(0) = 0
\quad\Longrightarrow\quad
\phi'''(0)=-a_0.
$$

Se deriva una vez más:

$$
\phi^{\text{iv}} + 2\phi' + 4x\phi'' + x^2\phi''' - (\sin x)\phi + 2(\cos x)\phi' + (\sin x)\phi'' = 0.
$$

Al evaluar en $x=0$ y usar $\phi(0)=a_0$ y $\phi'(0)=a_1$,

$$
\phi^{\text{iv}}(0) + 2a_1 + 2a_1 = 0
\quad\Longrightarrow\quad
\phi^{\text{iv}}(0)=-4a_1.
$$

## Observaciones

Los valores obtenidos son los primeros coeficientes de Taylor de la solución en torno a $x_0=0$:

$$
\phi(x)=a_0+a_1x+0\cdot x^2-\frac{a_0}{6}x^3-\frac{a_1}{6}x^4+\cdots,
$$

pues $\phi''(0)/2!=0$, $\phi'''(0)/3!=-a_0/6$ y $\phi^{\text{iv}}(0)/4!=-a_1/6$. Como $x^2$ y $\sin x$ son analíticas en todo $\mathbb{R}$, la serie converge para todo $x$.
