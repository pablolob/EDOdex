---
title: "Boyce 2.2 Ejercicio 18"
exercise-id: boyce-c02-s02-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-primer-orden
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s02i02-p046.png
---

## Enunciado

En cada uno de los problemas 17 a 20, determine (sin resolver el problema) un intervalo en el que se tenga la certeza de que la solución del problema con valor inicial dado existe.

18. $y' + (\tan x)y = \operatorname{sen} x, \quad y(\pi) = 0$

## Solución

La ecuación es **lineal de primer orden**. En la forma normal $y' + p(x)y = g(x)$ se tiene $p(x) = \tan x$ y $g(x) = \sin x$. El **teorema de existencia y unicidad** para ecuaciones lineales garantiza que el problema con valor inicial tiene una solución única en el mayor intervalo que contiene a $x_0 = \pi$ y en el que $p$ y $g$ son continuas:

$$
\left(\frac{\pi}{2}, \frac{3\pi}{2}\right).
$$

En los extremos $x = \pi/2$ y $x = 3\pi/2$ la función $\tan x$ deja de estar definida, de modo que la ecuación en forma normal no está definida allí. Fuera de ese intervalo el teorema no garantiza la existencia de la solución.

## Resolución

El enunciado pide el intervalo sin resolver la ecuación, así que se aplica el teorema de existencia y unicidad para ecuaciones lineales de primer orden.

La ecuación ya está escrita en la forma normal

$$
y' + p(x)y = g(x),
$$

con

$$
p(x) = \tan x, \qquad g(x) = \sin x.
$$

El teorema afirma que si $p$ y $g$ son continuas en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema con valor inicial tiene una solución única en $I$.

Se estudia la continuidad de cada coeficiente.

- $g(x) = \sin x$ es continua en todo $\mathbb{R}$.
- $p(x) = \tan x = \dfrac{\sin x}{\cos x}$ es continua allí donde $\cos x \ne 0$, es decir, en cada intervalo de la forma

$$
\left(\frac{\pi}{2} + k\pi,\, \frac{3\pi}{2} + k\pi\right), \qquad k \in \mathbb{Z}.
$$

El punto inicial es $x_0 = \pi$. Como

$$
\frac{\pi}{2} < \pi < \frac{3\pi}{2},
$$

el intervalo de continuidad de $p$ que contiene a $x_0$ es

$$
\left(\frac{\pi}{2}, \frac{3\pi}{2}\right).
$$

En consecuencia, el problema con valor inicial tiene solución única en ese intervalo.

Sus extremos son las discontinuidades de $\tan x$ más próximas a $x_0$ por la izquierda y por la derecha. En ellos la ecuación en forma normal no está definida, de modo que $\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$ es el mayor intervalo en el que el teorema garantiza la existencia y unicidad de la solución. Fuera de él el teorema no garantiza la existencia.

## Observaciones

El intervalo $\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$ es el mayor posible: los demás intervalos de continuidad de $\tan x$ no contienen a $x_0 = \pi$ y no son relevantes para el problema con valor inicial. La continuidad de $\sin x$ no impone restricción alguna.
