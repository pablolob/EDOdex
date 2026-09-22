---
title: "Boyce 4.2 Ejercicio 29"
exercise-id: boyce-c04-s02-e029
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 29"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s02i03-p231.png
---

## Enunciado

En cada uno de los problemas 29 a 34, use una computadora para hallar la solución general de la ecuación diferencial dada.

29. $y''' + 3y'' + 3y' + y = 0$

## Solución

$$
y(x)=(C_1+C_2 x+C_3 x^2)e^{-x}.
$$

## Resolución

La ecuación es lineal, homogénea, de tercer orden y con coeficientes constantes. Su ecuación característica es

$$
r^3+3r^2+3r+1=0.
$$

El cómputo simbólico factoriza el polinomio auxiliar como

$$
r^3+3r^2+3r+1=(r+1)^3,
$$

por lo que $r=-1$ es una raíz real de multiplicidad tres. El mismo resultado se reconoce al desarrollar el cubo del binomio $(r+1)^3$.

Cuando una raíz real $r$ se repite $k$ veces, su contribución a la solución general es un polinomio de grado $k-1$ multiplicado por $e^{rx}$. Con $r=-1$ y $k=3$,

$$
y(x)=\left(C_1+C_2 x+C_3 x^2\right)e^{-x}.
$$

La ecuación es de orden tres y la solución contiene tres constantes arbitrarias, de modo que esta familia es la solución general.

## Observaciones

- La ecuación característica no tiene raíces complejas, así que la solución general no contiene términos seno ni coseno.
- El conjunto $\{e^{-x},\,x e^{-x},\,x^2 e^{-x}\}$ es linealmente independiente; su Wronskiano es distinto de cero, lo que confirma que las tres funciones forman un conjunto fundamental de soluciones.
- El patrón del polinomio auxiliar coincide con el desarrollo de $(r+1)^3$. La computadora resulta útil en los demás ejercicios de la serie, donde las raíces no son tan inmediatas.
