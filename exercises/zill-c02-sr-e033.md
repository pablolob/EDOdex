---
title: "Zill Repaso C2 Ejercicio 33"
exercise-id: zill-c02-sr-e033
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 33"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-hom
prerequisitos:
  - derivacion.producto
  - integracion.directa
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri02-p095.png
difficulty:
  conceptual: 2
  technical: 1
---

## Enunciado

En los problemas 33 y 34 resuelva el problema con valores iniciales dado e indique el intervalo $I$ más largo sobre el que la solución está definida.

$$\text{sen } x \frac{dy}{dx} + (\cos x)y = 0, \quad y\left(\frac{7\pi}{6}\right) = -2$$

## Solución

La solución del problema con valores iniciales es

$$
y(x)=\frac{1}{\sin x}=\csc x,
$$

definida sobre el intervalo más largo que contiene al punto inicial:

$$
I=(\pi,\,2\pi).
$$

## Resolución

La ecuación es **lineal de primer orden** y **homogénea**. Su miembro izquierdo es la derivada de un producto. En efecto, la **regla del producto** da

$$
\frac{d}{dx}\left(\sin x\, y\right)=\sin x\,\frac{dy}{dx}+(\cos x)\,y,
$$

que coincide con el miembro izquierdo de la ecuación. Por tanto la ecuación se reescribe como

$$
\frac{d}{dx}\left(\sin x\, y\right)=0.
$$

Una función cuya derivada se anula es constante, de modo que

$$
\sin x\, y=C.
$$

La condición inicial determina $C$. Como

$$
\sin\left(\frac{7\pi}{6}\right)=-\frac{1}{2},
$$

resulta

$$
C=\sin\left(\frac{7\pi}{6}\right)\,y\left(\frac{7\pi}{6}\right)=\left(-\frac{1}{2}\right)(-2)=1.
$$

Sustituyendo $C=1$ y despejando $y$,

$$
y(x)=\frac{1}{\sin x}=\csc x.
$$

El intervalo de validez se obtiene con la forma estándar de la ecuación lineal,

$$
\frac{dy}{dx}+(\cot x)\,y=0.
$$

El coeficiente $\cot x$ es continuo salvo donde $\sin x=0$, esto es, en $x=n\pi$ con $n\in\mathbb{Z}$. El punto inicial $x_0=7\pi/6$ pertenece al intervalo $(\pi,\,2\pi)$, que no contiene ninguno de esos puntos. Por consiguiente, el intervalo más largo es $I=(\pi,\,2\pi)$.

## Observaciones

La solución constante $y\equiv 0$ satisface la ecuación, pero no la condición inicial; no hay solución perdida relevante para este problema con valores iniciales.

En los extremos del intervalo la solución diverge: $\lim_{x\to\pi^+}\csc x=-\infty$ y $\lim_{x\to 2\pi^-}\csc x=-\infty$.

### Método alternativo: separación de variables

La ecuación también es separable. Al separar variables,

$$
\frac{dy}{y}=-\frac{\cos x}{\sin x}\,dx,
$$

e integrar ambos miembros se obtiene $\ln|y|=-\ln|\sin x|+c$, es decir, $y=K\csc x$. La condición inicial conduce de nuevo a $K=1$.
