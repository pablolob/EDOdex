---
title: "Boyce 3.5 Ejercicio 5"
exercise-id: boyce-c03-s05-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 5"
statement-status: accepted
solution-status: draft
metadata-status: pending
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar-metodo.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s05i01-p175.png
---

## Enunciado

En cada uno de los problemas 1 a 10, halle la solución general de la ecuación diferencial dada.

5. $y'' - 2y' + 10y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene las raíces complejas conjugadas $1 \pm 3i$, de modo que la solución general es

$$
y(x) = e^{x}\left(C_1\cos 3x + C_2\sin 3x\right),
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
y'' - 2y' + 10y = 0.
$$

Al ser una ecuación lineal homogénea de coeficientes constantes, se proponen soluciones de la forma $y = e^{rx}$, con $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \ne 0$ resulta la **ecuación característica**

$$
r^2 - 2r + 10 = 0.
$$

Su discriminante es $(-2)^2 - 4(1)(10) = 4 - 40 = -36$, que es negativo; por tanto, las raíces son complejas conjugadas:

$$
r = \frac{2 \pm \sqrt{-36}}{2} = \frac{2 \pm 6i}{2} = 1 \pm 3i.
$$

Escritas en la forma $r = \alpha \pm \beta i$, con $\alpha = 1$ y $\beta = 3$, cada par de raíces complejas conjugadas aporta las soluciones reales $e^{\alpha x}\cos(\beta x)$ y $e^{\alpha x}\sin(\beta x)$. En consecuencia, la solución general es

$$
y(x) = e^{x}\left(C_1\cos 3x + C_2\sin 3x\right).
$$

La sustitución directa confirma el resultado: para $y_1 = e^{x}\cos 3x$ se cumple $y_1'' - 2y_1' + 10y_1 = 0$, y lo mismo ocurre con $y_2 = e^{x}\sin 3x$. Las dos funciones son linealmente independientes, pues su wronskiano es $W = 3e^{2x} \ne 0$. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

El discriminante negativo de la ecuación característica es el indicador de raíces complejas conjugadas. La parte real $\alpha = 1$ fija la envolvente exponencial $e^{x}$; la parte imaginaria $\beta = 3$ fija la frecuencia de las oscilaciones $\cos 3x$ y $\sin 3x$. No aparecen soluciones singulares y ambas funciones están definidas para todo $x \in \mathbb{R}$.
