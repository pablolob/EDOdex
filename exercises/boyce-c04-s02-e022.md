---
title: "Boyce 4.2 Ejercicio 22"
exercise-id: boyce-c04-s02-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar-metodo.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

22. $y^{\mathrm{iv}} + 2y'' + y = 0$

## Solución

La ecuación es **de cuarto orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su solución general es

$$
y(x) = (C_1 + C_2 x)\cos x + (C_3 + C_4 x)\sin x,
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
y^{\mathrm{iv}} + 2y'' + y = 0.
$$

Al ser una ecuación de coeficientes constantes, se propone $y = e^{rx}$. Las derivadas son $y'' = r^2 e^{rx}$ y $y^{\mathrm{iv}} = r^4 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
r^4 + 2r^2 + 1 = 0.
$$

El polinomio se reconoce como un trinomio cuadrado perfecto en $r^2$:

$$
r^4 + 2r^2 + 1 = (r^2 + 1)^2 = 0.
$$

Por tanto, la ecuación característica tiene las raíces

$$
r = \pm i,
$$

cada una de multiplicidad dos. Se trata del caso de raíces complejas conjugadas $\alpha \pm \beta i$ con $\alpha = 0$ y $\beta = 1$, repetidas.

La pareja compleja repetida aporta cuatro soluciones linealmente independientes: para una raíz compleja de multiplicidad dos se toman $\cos(\beta x)$ y $\sin(\beta x)$ junto con sus versiones multiplicadas por $x$, es decir $x\cos(\beta x)$ y $x\sin(\beta x)$. Con $\alpha = 0$ y $\beta = 1$ el conjunto fundamental es

$$
\left\{\cos x,\; \sin x,\; x\cos x,\; x\sin x\right\}.
$$

La solución general es la combinación lineal

$$
y(x) = (C_1 + C_2 x)\cos x + (C_3 + C_4 x)\sin x.
$$

La sustitución confirma el resultado. Para $y = \cos x$ se tiene $y^{\mathrm{iv}} = \cos x$ y $y'' = -\cos x$, de modo que $\cos x + 2(-\cos x) + \cos x = 0$. Para $y = x\cos x$, un cálculo directo da $y'' = -2\sin x - x\cos x$ y $y^{\mathrm{iv}} = 4\sin x + x\cos x$, y entonces $y^{\mathrm{iv}} + 2y'' + y = (4\sin x + x\cos x) + 2(-2\sin x - x\cos x) + x\cos x = 0$. Las funciones $\sin x$ y $x\sin x$ cumplen la ecuación por el mismo cálculo con los papeles de seno y coseno intercambiados.

Al no haber condiciones iniciales, $C_1$, $C_2$, $C_3$ y $C_4$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

La ecuación se escribe de forma compacta como $(D^2 + 1)^2 y = 0$: el operador $D^2 + 1$ anula tanto a $\cos x$ como a $\sin x$, y su cuadrado introduce el factor $x$ en la solución general. Las raíces tienen parte real nula, así que las soluciones son oscilatorias y no presentan decaimiento exponencial; los términos $x\cos x$ y $x\sin x$ crecen linealmente en amplitud cuando $|x| \to \infty$.
