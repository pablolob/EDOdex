---
title: "Boyce 4.2 Ejercicio 4"
exercise-id: boyce-c04-s02-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma

$$R(\cos\theta + i\sin\theta) = Re^{i\theta}.$$

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero.

4. $-i$

## Solución

El número es imaginario puro negativo. Su módulo es $R = 1$ y su argumento principal es $\theta = \dfrac{3\pi}{2}$. Por tanto,

$$
-i = \cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2} = e^{i3\pi/2} = e^{i(3\pi/2 + 2m\pi)}, \qquad m \in \mathbb{Z}.
$$

## Resolución

Un número complejo $z = a + bi$ se escribe en forma polar como $z = R(\cos\theta + i\sin\theta) = Re^{i\theta}$, donde $R = |z| \ge 0$ es el módulo y $\theta$ es un argumento de $z$.

Para $z = -i$ se tiene $a = 0$ y $b = -1$. El módulo es

$$
R = \sqrt{a^2 + b^2} = \sqrt{0^2 + (-1)^2} = 1.
$$

El argumento $\theta$ satisface

$$
\cos\theta = \frac{a}{R} = 0, \qquad \sin\theta = \frac{b}{R} = -1.
$$

El único ángulo en $[0, 2\pi)$ que cumple ambas condiciones es $\theta = \dfrac{3\pi}{2}$. Sustituyendo $R$ y $\theta$,

$$
-i = \cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2} = e^{i3\pi/2}.
$$

Como el argumento solo está determinado módulo $2\pi$, la forma exponencial completa es

$$
-i = e^{i(3\pi/2 + 2m\pi)}, \qquad m \in \mathbb{Z},
$$

que coincide con la identidad $e^{i(\theta + 2m\pi)} = e^{i\theta}$ del enunciado.

## Observaciones

El argumento de un número complejo no nulo es único salvo múltiplos enteros de $2\pi$. El valor $\theta = \dfrac{3\pi}{2}$ es el argumento principal, situado en $[0, 2\pi)$; también es válido escribir $\theta = -\dfrac{\pi}{2}$, que difiere del anterior en $2\pi$ y describe la misma familia de argumentos. Al tratarse de un número imaginario puro, el argumento es $\dfrac{\pi}{2}$ o $\dfrac{3\pi}{2}$ según el signo de la parte imaginaria.
