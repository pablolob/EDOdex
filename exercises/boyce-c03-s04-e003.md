---
title: "Boyce 3.4 Ejercicio 3"
exercise-id: boyce-c03-s04-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.exponencial-compleja
prerequisitos:
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s04i01-p166.png
---

## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma $a + ib$.

3. $e^{i\pi}$

## Solución

La **fórmula de Euler** da

$$
e^{i\pi}=-1.
$$

En la forma pedida, $a+ib$, el número es

$$
e^{i\pi}=-1+0i.
$$

## Resolución

Se aplica la **fórmula de Euler**, válida para todo $\theta\in\mathbb{R}$:

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

Con $\theta=\pi$ se tiene

$$
e^{i\pi}=\cos\pi+i\sin\pi.
$$

Se evalúan las funciones trigonométricas: $\cos\pi=-1$ y $\sin\pi=0$. Al sustituir,

$$
e^{i\pi}=-1+0i.
$$

La parte real es $a=-1$ y la parte imaginaria es $b=0$.

## Observaciones

La fórmula de Euler permite escribir cualquier exponencial imaginaria $e^{i\theta}$ como combinación de un coseno y un seno. En la sección 3.4 esta conversión transforma las raíces complejas $r=\alpha\pm i\beta$ de la ecuación característica en soluciones reales $e^{\alpha x}\cos(\beta x)$ y $e^{\alpha x}\sin(\beta x)$.

Un valor particular es $e^{i\pi}=-1$. Al sumar $1$ en ambos miembros se obtiene la identidad de Euler, $e^{i\pi}+1=0$.

Aquí $b=0$, de modo que $e^{i\pi}$ es un número real.
