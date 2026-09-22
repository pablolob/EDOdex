---
title: "Boyce 4.2 Ejercicio 1"
exercise-id: boyce-c04-s02-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 1"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - algebra.numeros-complejos
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

1. $1 + i$

## Solución

$$
1+i=\sqrt{2}\left(\cos\frac{\pi}{4}+i\sin\frac{\pi}{4}\right)=\sqrt{2}\,e^{i\pi/4}.
$$

La forma polar también se escribe como $\sqrt{2}\,e^{i(\pi/4+2m\pi)}$ para todo entero $m$.

## Resolución

El número complejo es $z=1+i$, con parte real $a=1$ y parte imaginaria $b=1$.

El módulo es

$$
R=|z|=\sqrt{a^2+b^2}=\sqrt{1^2+1^2}=\sqrt{2}.
$$

El argumento $\theta$ satisface

$$
\cos\theta=\frac{a}{R}=\frac{1}{\sqrt{2}}, \qquad \sin\theta=\frac{b}{R}=\frac{1}{\sqrt{2}}.
$$

El punto $(1,1)$ está en el primer cuadrante. Por tanto, el argumento principal es

$$
\theta=\frac{\pi}{4}.
$$

Con $R=\sqrt{2}$ y $\theta=\pi/4$ se obtiene

$$
z=\sqrt{2}\left(\cos\frac{\pi}{4}+i\sin\frac{\pi}{4}\right)=\sqrt{2}\,e^{i\pi/4}.
$$

Como $e^{i(\theta+2m\pi)}=e^{i\theta}$ para todo entero $m$, también se cumple $z=\sqrt{2}\,e^{i(\pi/4+2m\pi)}$.

## Observaciones

La forma polar no es única: cualquier argumento $\theta+2m\pi$, con $m\in\mathbb{Z}$, representa el mismo número. El argumento principal es $\pi/4$, que pertenece a $(-\pi,\pi]$.

El módulo es siempre no negativo; en este caso $R=\sqrt{2}>0$. Como $a>0$ y $b>0$, el punto está en el primer cuadrante y el argumento coincide con $\arctan(b/a)=\arctan 1=\pi/4$.
