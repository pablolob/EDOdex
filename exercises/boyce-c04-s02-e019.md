---
title: "Boyce 4.2 Ejercicio 19"
exercise-id: boyce-c04-s02-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 19"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

19. $y^{\mathrm{v}} - 3y^{\mathrm{iv}} + 3y''' - 3y'' + 2y' = 0$

## Solución

La solución general es

$$
y(x)=C_1 + C_2e^{x} + C_3e^{2x} + C_4\cos x + C_5\sin x,
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación es **lineal**, **homogénea**, de **quinto orden** y con **coeficientes constantes**. Se proponen soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$, $y''=r^2e^{rx}$, $y'''=r^3e^{rx}$, $y^{\mathrm{iv}}=r^4e^{rx}$ y $y^{\mathrm{v}}=r^5e^{rx}$. Al sustituir,

$$
r^5e^{rx} - 3r^4e^{rx} + 3r^3e^{rx} - 3r^2e^{rx} + 2re^{rx} = e^{rx}\left(r^5 - 3r^4 + 3r^3 - 3r^2 + 2r\right) = 0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^5 - 3r^4 + 3r^3 - 3r^2 + 2r = 0.
$$

Todos los términos contienen el factor $r$, que se extrae:

$$
r\left(r^4 - 3r^3 + 3r^2 - 3r + 2\right) = 0.
$$

Por tanto $r=0$ es una raíz. Para factorizar el polinomio cuártico se buscan raíces enteras entre los divisores del término independiente $2$, es decir $\pm 1$ y $\pm 2$. La evaluación da

$$
\begin{aligned}
P(1) &= 1 - 3 + 3 - 3 + 2 = 0, \\
P(2) &= 16 - 24 + 12 - 6 + 2 = 0,
\end{aligned}
$$

de modo que $r=1$ y $r=2$ son raíces. La división sucesiva entre $(r-1)$ y $(r-2)$ deja el factor restante $r^2+1$:

$$
r^4 - 3r^3 + 3r^2 - 3r + 2 = (r-1)(r-2)\left(r^2+1\right).
$$

La ecuación característica factorizada es entonces

$$
r(r-1)(r-2)\left(r^2+1\right) = 0,
$$

y sus raíces son $r=0$, $r=1$, $r=2$ y el par complejo conjugado $r=\pm i$. Todas son simples.

Cada raíz real $r$ aporta la solución $e^{rx}$, y el par complejo conjugado $\lambda\pm i\mu$ aporta $e^{\lambda x}\cos(\mu x)$ y $e^{\lambda x}\sin(\mu x)$. La raíz $r=0$ aporta $e^{0\cdot x}=1$, las raíces $r=1$ y $r=2$ aportan $e^{x}$ y $e^{2x}$, y el par $\pm i$, con $\lambda=0$ y $\mu=1$, aporta $\cos x$ y $\sin x$.

Las cinco funciones $1$, $e^{x}$, $e^{2x}$, $\cos x$ y $\sin x$ son linealmente independientes en $\mathbb{R}$, de modo que forman un conjunto fundamental de soluciones. La solución general es su combinación lineal:

$$
y(x)=C_1 + C_2e^{x} + C_3e^{2x} + C_4\cos x + C_5\sin x.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- La ecuación no contiene el término en $y$, por lo que $r=0$ es raíz del polinomio característico y la solución general incluye la constante $C_1$.
- El par complejo $\pm i$ aporta los términos oscilatorios $\cos x$ y $\sin x$, sin factor exponencial porque su parte real es nula.
- La ecuación es lineal y homogénea: no presenta soluciones singulares ni perdidas, y el número de constantes arbitrarias coincide con el orden de la ecuación.

### Método alternativo: reducción con $u = y'$

Como la ecuación no contiene $y$, la sustitución $u=y'$ reduce el orden a la ecuación de cuarto orden

$$
u^{\mathrm{iv}} - 3u''' + 3u'' - 3u' + 2u = 0,
$$

cuya ecuación característica $(r-1)(r-2)(r^2+1)=0$ da $u = A e^{x} + B e^{2x} + C\cos x + D\sin x$. Al integrar una vez se recupera la forma de la solución general, con las constantes redefinidas.
