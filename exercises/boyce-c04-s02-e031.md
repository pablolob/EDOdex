---
title: "Boyce 4.2 Ejercicio 31"
exercise-id: boyce-c04-s02-e031
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 31"
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
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i03-p231.png
---

## Enunciado

En cada uno de los problemas 29 a 34, use una computadora para hallar la solución general de la ecuación diferencial dada.

31. $y''' + y'' - y' + y = 0$

## Solución

La ecuación característica tiene una raíz real y un par complejo conjugado. La solución general es

$$
y(x)=C_1e^{-1.8393x}+e^{0.4196x}\left(C_2\cos(0.6063x)+C_3\sin(0.6063x)\right),
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación

$$
y'''+y''-y'+y=0
$$

es **lineal homogénea de tercer orden con coeficientes constantes**. Se propone $y=e^{rx}$, de modo que $y'=re^{rx}$, $y''=r^2e^{rx}$ y $y'''=r^3e^{rx}$. Al sustituir y factorizar $e^{rx}$,

$$
e^{rx}\left(r^3+r^2-r+1\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^3+r^2-r+1=0.
$$

El enunciado pide el uso de una computadora, de modo que las raíces del polinomio auxiliar se obtienen con **cómputo simbólico** (por ejemplo, el comando `nroots` de sympy). El polinomio no tiene raíces racionales: en los divisores $\pm 1$ del término constante se obtiene $p(1)=2$ y $p(-1)=2$. El cálculo simbólico devuelve una raíz real y un par complejo conjugado:

$$
r_1\approx -1.8393, \qquad r_{2,3}\approx 0.4196\pm 0.6063\,i.
$$

La raíz real aporta la solución $e^{r_1x}$. Para el par complejo conjugado $\lambda\pm i\mu$, con $\lambda=0.4196$ y $\mu=0.6063$, las soluciones reales asociadas son $e^{\lambda x}\cos(\mu x)$ y $e^{\lambda x}\sin(\mu x)$. La solución general es la combinación lineal de las tres soluciones:

$$
y(x)=C_1e^{-1.8393x}+e^{0.4196x}\left(C_2\cos(0.6063x)+C_3\sin(0.6063x)\right).
$$

Las tres funciones son linealmente independientes, pues sus exponentes son distintos. La ecuación es de orden tres y la solución contiene tres constantes arbitrarias, de modo que esta familia es la solución general. Al ser los coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- Las raíces se presentan como aproximaciones decimales. Las raíces exactas son números algebraicos dados por la fórmula de Cardano y no admiten una expresión racional simple; el uso de la computadora evita esa expresión.
- La raíz real es negativa y la parte real del par complejo es positiva. Por ello existen soluciones que decaen y soluciones que crecen, y la ecuación no es asintóticamente estable.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse.
