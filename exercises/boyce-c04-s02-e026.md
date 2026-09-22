---
title: "Boyce 4.2 Ejercicio 26"
exercise-id: boyce-c04-s02-e026
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 26"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - clasificar.lineal-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - algebra.numeros-complejos
  - ecuaciones-diferenciales.condiciones-iniciales
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i02-p230.png
---

## Enunciado

En cada uno de los problemas 23 a 26, halle la solución del problema con valor inicial dado.

26. $y''' - y'' + y' - y = 0; \quad y(\pi/2) = 2, \quad y'(\pi/2) = 1, \quad y''(\pi/2) = 0$

## Solución

La solución del problema con valor inicial es

$$
y(x)=e^{\,x-\pi/2}+\sin x,
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación

$$
y'''-y''+y'-y=0
$$

es **lineal**, **homogénea**, de **tercer orden** y con **coeficientes constantes**. Se propone $y=e^{rx}$, con $y'=re^{rx}$, $y''=r^2e^{rx}$ y $y'''=r^3e^{rx}$. Al sustituir y dividir entre $e^{rx}\ne 0$ resulta la **ecuación característica**

$$
r^3-r^2+r-1=0.
$$

El polinomio se factoriza agrupando términos:

$$
r^3-r^2+r-1=r^2(r-1)+(r-1)=(r-1)\left(r^2+1\right)=0.
$$

Sus raíces son la real simple $r=1$ y el par complejo conjugado $r=\pm i$. La raíz real aporta $e^{x}$; el par $\lambda\pm i\mu$ con $\lambda=0$ y $\mu=1$ aporta $\cos x$ y $\sin x$. Las tres funciones son linealmente independientes, así que la solución general es

$$
y(x)=C_1e^{x}+C_2\cos x+C_3\sin x.
$$

Las derivadas sucesivas son

$$
\begin{aligned}
y'(x) &= C_1e^{x}-C_2\sin x+C_3\cos x, \\
y''(x) &= C_1e^{x}-C_2\cos x-C_3\sin x.
\end{aligned}
$$

En $x=\pi/2$ se tiene $\cos(\pi/2)=0$ y $\sin(\pi/2)=1$. Con la notación $E=e^{\pi/2}$, las condiciones iniciales dan

$$
\begin{aligned}
y(\pi/2) &= C_1E+C_3 = 2, \\
y'(\pi/2) &= C_1E-C_2 = 1, \\
y''(\pi/2) &= C_1E-C_3 = 0.
\end{aligned}
$$

Al sumar la primera y la tercera ecuación se obtiene $2C_1E=2$, es decir $C_1E=1$ y por tanto $C_1=e^{-\pi/2}$. De la tercera ecuación, $C_3=C_1E=1$. De la segunda, $C_2=C_1E-1=0$. Al sustituir,

$$
y(x)=e^{-\pi/2}e^{x}+\sin x=e^{\,x-\pi/2}+\sin x.
$$

Comprobación directa: $y'=e^{x-\pi/2}+\cos x$, $y''=e^{x-\pi/2}-\sin x$ y $y'''=e^{x-\pi/2}-\cos x$, de modo que

$$
y'''-y''+y'-y=\left(e^{x-\pi/2}-\cos x\right)-\left(e^{x-\pi/2}-\sin x\right)+\left(e^{x-\pi/2}+\cos x\right)-\left(e^{x-\pi/2}+\sin x\right)=0.
$$

Además, $y(\pi/2)=1+1=2$, $y'(\pi/2)=1+0=1$ y $y''(\pi/2)=1-1=0$.

## Observaciones

La raíz real $r=1$ produce el término exponencial y el par $\pm i$ la parte oscilatoria, de modo que la solución combina crecimiento exponencial y oscilación. La evaluación en $x=\pi/2$ simplifica el sistema porque $\cos(\pi/2)=0$ y $\sin(\pi/2)=1$.

La ecuación es lineal homogénea con coeficientes constantes; su solución general contiene tres constantes arbitrarias, no presenta soluciones singulares ni perdidas y está definida para todo $x\in\mathbb{R}$.
