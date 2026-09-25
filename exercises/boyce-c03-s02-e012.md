---
title: "Boyce 3.2 Ejercicio 12"
exercise-id: boyce-c03-s02-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 12"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-hom
prerequisitos:
  - ecuaciones-diferenciales.existencia-unicidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

En cada uno de los problemas 7 a 12, determine el intervalo más largo en el que el problema con valor inicial dado tiene con seguridad una solución dos veces diferenciable.

12. $(x - 2)y'' + y' + (x - 2)(\tan x)y = 0, \quad y(3) = 1, \quad y'(3) = 2$

## Solución

La ecuación es **lineal** de **segundo orden** y **homogénea**. En forma estándar sus coeficientes son continuos salvo en $x = 2$ y en los ceros de $\cos x$. El intervalo más largo que contiene al punto inicial $x_0 = 3$ es

$$
2 < x < \frac{3\pi}{2}.
$$

## Resolución

Se escribe la ecuación en la forma estándar $y'' + p(x)y' + q(x)y = g(x)$. Se divide entre el coeficiente de $y''$, que es $x - 2$, para $x \ne 2$:

$$
y'' + \frac{1}{x - 2}\,y' + \tan x\,y = 0.
$$

Los coeficientes son

$$
p(x) = \frac{1}{x - 2}, \qquad q(x) = \tan x, \qquad g(x) = 0.
$$

La función $p$ es continua salvo en $x = 2$, donde se anula su denominador. La función $q(x) = \tan x = \dfrac{\sin x}{\cos x}$ es continua salvo donde $\cos x = 0$, esto es, en $x = \dfrac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$. El término independiente $g(x) = 0$ es continuo en todo $\mathbb{R}$.

El **teorema de existencia y unicidad** para ecuaciones lineales de segundo orden asegura que el problema con valor inicial tiene una única solución dos veces diferenciable en todo intervalo abierto que contenga al punto inicial y en el que los tres coeficientes sean continuos. Por tanto, el intervalo buscado es el mayor intervalo abierto que contiene a $x_0 = 3$ y evita $x = 2$ y los ceros de $\cos x$.

Las discontinuidades que rodean a $x_0 = 3$ son $x = 2$ por la izquierda y $x = \dfrac{3\pi}{2}$ por la derecha, ya que $\dfrac{\pi}{2} \approx 1.57 < 2 < 3 < \dfrac{3\pi}{2} \approx 4.71$. No hay ninguna otra discontinuidad entre $2$ y $\dfrac{3\pi}{2}$.

En consecuencia, el intervalo más largo es

$$
2 < x < \frac{3\pi}{2}.
$$

## Observaciones

En $x = 2$ se anula el coeficiente de $y''$; ese punto es singular y el teorema no garantiza la solución a través de él. La discontinuidad de $\tan x$ en $x = \dfrac{\pi}{2}$ queda a la izquierda de $2$, de modo que la frontera derecha del intervalo la fija $x = \dfrac{3\pi}{2}$. El intervalo es abierto porque el teorema exige continuidad en un intervalo abierto.
