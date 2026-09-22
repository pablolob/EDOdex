---
title: "Boyce 2.2 Ejercicio 9"
exercise-id: boyce-c02-s02-e009
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 9"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s02i01-p045.png
---

## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$y' + (\cot x)y = 4 \sin x, \quad y\left(-\frac{\pi}{2}\right) = 0$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = \frac{2x - \sin 2x + \pi}{\sin x},
$$

válida en el intervalo $(-\pi, 0)$.

## Resolución

La ecuación ya está en la forma estándar $y' + P(x)y = f(x)$, con

$$
P(x) = \cot x, \qquad f(x) = 4\sin x.
$$

En el intervalo que contiene a $x = -\pi/2$ se cumple $\sin x < 0$, de modo que $|\sin x| = -\sin x$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \cot x\,dx\right) = \exp(\ln|\sin x|) = |\sin x| = -\sin x.
$$

Al multiplicar ambos miembros por $\mu(x)$, el miembro izquierdo es la derivada del producto $(-\sin x)\,y$:

$$
\frac{d}{dx}\left(-\sin x\,y\right) = (-\sin x)(4\sin x) = -4\sin^2 x.
$$

Se integra el miembro derecho con la identidad del ángulo doble $\sin^2 x = \dfrac{1 - \cos 2x}{2}$:

$$
-\sin x\,y = -4\int \sin^2 x\,dx = -2\int (1 - \cos 2x)\,dx = -2x + \sin 2x + C.
$$

Al despejar $y$ y renombrar la constante de integración,

$$
y(x) = \frac{2x - \sin 2x + K}{\sin x}.
$$

La condición inicial fija $K$. Al evaluar $x = -\pi/2$ en la relación $\sin x\,y = 2x - \sin 2x + K$, con $\sin(-\pi/2) = -1$ y $\sin(-\pi) = 0$,

$$
0 = y\!\left(-\frac{\pi}{2}\right)\sin\!\left(-\frac{\pi}{2}\right) = 2\left(-\frac{\pi}{2}\right) - 0 + K = -\pi + K,
$$

de donde $K = \pi$. La solución del problema con valor inicial es

$$
y(x) = \frac{2x - \sin 2x + \pi}{\sin x}.
$$

Intervalo de validez: las funciones $P(x) = \cot x$ y $f(x) = 4\sin x$ son continuas siempre que $\sin x \ne 0$, esto es, en $\mathbb{R}\setminus\{n\pi : n \in \mathbb{Z}\}$. El intervalo más largo que contiene a $x = -\pi/2$ sin cruzar una singularidad es $(-\pi, 0)$. En consecuencia, la solución es válida en $(-\pi, 0)$.

## Observaciones

La primitiva general de $\cot x$ es $\ln|\sin x|$. En el intervalo que contiene a $-\pi/2$ se tiene $\sin x < 0$, por lo que $|\sin x| = -\sin x$ y el factor integrante se toma con ese signo.

La fórmula de $y$ está definida en cualquier intervalo que no contenga múltiplos de $\pi$, pero el intervalo de validez exigido es el que contiene a la condición inicial, es decir, $(-\pi, 0)$.
