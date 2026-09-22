---
title: "Boyce 5.3 Ejercicio 2"
exercise-id: boyce-c05-s03-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
prerequisitos:
  - derivacion.producto
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s03i01-p263.png
---

## Enunciado

En cada uno de los problemas 1 a 4, determine $\phi''(x_0)$, $\phi'''(x_0)$ y $\phi^{\text{iv}}(x_0)$ para el punto $x_0$ dado si $y = \phi(x)$ es una solución del problema con valor inicial que se da.

2. $y'' + (\sin x)y' + (\cos x)y = 0; \quad y(0) = 0, \quad y'(0) = 1$

## Solución

$$
\phi''(0)=0,\qquad \phi'''(0)=-2,\qquad \phi^{\text{iv}}(0)=0.
$$

## Resolución

La función $\phi$ satisface la ecuación en un intervalo que contiene a $x_0=0$. Los coeficientes $\sin x$ y $\cos x$ son continuos en toda la recta, de modo que los valores pedidos quedan determinados por la ecuación y por los datos iniciales. El procedimiento consiste en despejar la derivada de mayor orden de la ecuación y, para los órdenes siguientes, derivar la ecuación miembro a miembro y evaluar en $x_0=0$.

**Segunda derivada.** Se despeja $\phi''$ de la ecuación y se evalúa en $x=0$. Con $\sin 0=0$, $\cos 0=1$, $\phi(0)=0$ y $\phi'(0)=1$,

$$
\phi''(0)=-\sin(0)\,\phi'(0)-\cos(0)\,\phi(0)=-0\cdot 1-1\cdot 0=0.
$$

**Tercera derivada.** Se deriva la ecuación miembro a miembro. Con la **regla del producto**,

$$
\phi'''+\cos x\,\phi'+\sin x\,\phi''-\sin x\,\phi+\cos x\,\phi'=0,
$$

que se agrupa como

$$
\phi'''+(\sin x)\phi''+2(\cos x)\phi'-(\sin x)\phi=0.
$$

Al evaluar en $x=0$,

$$
\phi'''(0)+0\cdot\phi''(0)+2\cdot 1\cdot\phi'(0)-0\cdot\phi(0)=0,
$$

y como $\phi'(0)=1$, resulta

$$
\phi'''(0)+2=0 \quad\Longrightarrow\quad \phi'''(0)=-2.
$$

**Cuarta derivada.** Se deriva otra vez la expresión agrupada:

$$
\phi^{\text{iv}}+(\cos x)\phi''+(\sin x)\phi'''-2(\sin x)\phi'+2(\cos x)\phi''-(\cos x)\phi-(\sin x)\phi'=0.
$$

Reuniendo términos semejantes,

$$
\phi^{\text{iv}}+(\sin x)\phi'''+3(\cos x)\phi''-3(\sin x)\phi'-(\cos x)\phi=0.
$$

Al evaluar en $x=0$ y usar $\phi(0)=0$ y $\phi''(0)=0$,

$$
\phi^{\text{iv}}(0)+0\cdot\phi'''(0)+3\cdot 1\cdot\phi''(0)-0\cdot\phi'(0)-1\cdot\phi(0)=0
\quad\Longrightarrow\quad
\phi^{\text{iv}}(0)=0.
$$

## Observaciones

Los valores obtenidos son los coeficientes de Taylor de la solución en $x_0=0$. Con $\phi(0)=0$, $\phi'(0)=1$, $\phi''(0)=0$, $\phi'''(0)=-2$ y $\phi^{\text{iv}}(0)=0$,

$$
\phi(x)=x-\frac{x^3}{3}+\cdots
$$

pues $\phi'''(0)/3!=-1/3$. Este cálculo es el primer paso del método de **series de potencias** alrededor de un punto ordinario.

### Método alternativo: integración previa

La ecuación admite una escritura como derivada exacta. Como $(\phi\sin x)'=\phi'\sin x+\phi\cos x$, la ecuación se lee

$$
\phi''+(\phi\sin x)'=0.
$$

Integrando una vez se obtiene $\phi'+\phi\sin x=C$. Con $\phi(0)=0$ y $\phi'(0)=1$ resulta $C=1$, es decir, $\phi'+\phi\sin x=1$. Derivar sucesivamente esta ecuación de primer orden y evaluar en $x=0$ conduce a los mismos valores $\phi''(0)=0$, $\phi'''(0)=-2$ y $\phi^{\text{iv}}(0)=0$.
