---
title: "Boyce 3.5 Ejercicio 10"
exercise-id: boyce-c03-s05-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 10"
statement-status: accepted
solution-status: draft
metadata-status: pending
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar.metodo.coeficientes-constantes
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

10. $2y'' + 2y' + y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene las raíces complejas conjugadas $-\tfrac{1}{2} \pm \tfrac{1}{2}i$, de modo que la solución general es

$$
y(x) = e^{-x/2}\left(C_1\cos\frac{x}{2} + C_2\sin\frac{x}{2}\right),
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
2y'' + 2y' + y = 0.
$$

Al ser una ecuación lineal homogénea de coeficientes constantes, se proponen soluciones de la forma $y = e^{rx}$, con $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \ne 0$ resulta la **ecuación característica**

$$
2r^2 + 2r + 1 = 0.
$$

Su discriminante es $2^2 - 4(2)(1) = 4 - 8 = -4$, que es negativo; por tanto, las raíces son complejas conjugadas:

$$
r = \frac{-2 \pm \sqrt{-4}}{4} = \frac{-2 \pm 2i}{4} = -\frac{1}{2} \pm \frac{1}{2}i.
$$

Escritas en la forma $r = \alpha \pm \beta i$, con $\alpha = -\tfrac{1}{2}$ y $\beta = \tfrac{1}{2}$, cada par de raíces complejas conjugadas aporta las soluciones reales $e^{\alpha x}\cos(\beta x)$ y $e^{\alpha x}\sin(\beta x)$. En consecuencia, la solución general es

$$
y(x) = e^{-x/2}\left(C_1\cos\frac{x}{2} + C_2\sin\frac{x}{2}\right).
$$

La sustitución directa confirma el resultado: para $y_1 = e^{-x/2}\cos\frac{x}{2}$ se cumple $2y_1'' + 2y_1' + y_1 = 0$, y lo mismo ocurre con $y_2 = e^{-x/2}\sin\frac{x}{2}$. Las dos funciones son linealmente independientes, pues su wronskiano es $W = \tfrac{1}{2}e^{-x} \ne 0$. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

El discriminante negativo de la ecuación característica es el indicador de raíces complejas conjugadas. La parte real $\alpha = -\tfrac{1}{2}$ fija la envolvente exponencial $e^{-x/2}$, que decae cuando $x \to \infty$; la parte imaginaria $\beta = \tfrac{1}{2}$ fija la frecuencia de las oscilaciones $\cos\frac{x}{2}$ y $\sin\frac{x}{2}$. No aparecen soluciones singulares y ambas funciones están definidas para todo $x \in \mathbb{R}$.
