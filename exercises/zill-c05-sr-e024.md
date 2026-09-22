---
title: "Zill Repaso C5 Ejercicio 24"
exercise-id: zill-c05-sr-e024
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 5, ejercicio 24"
statement-status: accepted
solution-status: open
topics:
  - orden-superior
source-images:
  - zill-c05sri02-p246
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-orden-superior
  - interpretar.contexto-modelo
difficulty:
  conceptual: 3
  technical: 3
---

## Enunciado

Una cuenta está restringida a deslizarse a lo largo de una varilla sin fricción de longitud $L$. La varilla gira en un plano vertical con velocidad angular constante $\omega$ respecto a un pivote $P$ fijo en el punto medio de la varilla, pero el diseño del pivote permite que la cuenta se mueva a lo largo de toda la varilla. Sea $r(t)$ la posición de la cuenta respecto a este sistema de coordenadas giratorio según se ilustra en la figura 5.R.1. Con el fin de aplicar la segunda ley de Newton del movimiento a este marco de referencia rotatorio, es necesario usar el hecho de que la fuerza neta que actúa en la cuenta es la suma de las fuerzas reales (en este caso, la fuerza debida a la gravedad) y las fuerzas inerciales (coriolis, transversal y centrípeta). Las matemáticas del caso son un poco complicadas, así que sólo se da la ecuación diferencial resultante para $r$:
$$m \frac{d^2r}{dt^2} = m\omega^2r - mg \operatorname{sen} \omega t.$$
a) Resuelva la ED anterior sujeta a las condiciones iniciales $r(0) = r_0$, $r'(0) = v_0$.
b) Determine las condiciones iniciales para las cuales la cuenta exhibe movimiento armónico simple. ¿Cuál es la longitud mínima $L$ de la varilla para la cual puede ésta acomodar el movimiento armónico simple de la cuenta?
c) Para las condiciones iniciales distintas de las obtenidas en el inciso b), la cuenta en algún momento debe salir de la varilla. Explique usando la solución $r(t)$ del inciso a).
d) Suponga que $\omega = 1\text{ rad/s}$. Use una aplicación graficadora para trazar la solución $r(t)$ para las condiciones iniciales $r(0) = 0$, $r'(0) = v_0$, donde $v_0$ es $0, 10, 15, 16, 16.1$ y $17$.
e) Suponga que la longitud de la varilla es $L = 10\text{ m}$. Para cada par de condiciones iniciales del inciso d), use una aplicación para encontrar raíces para calcular el tiempo total que la cuenta permanece en la varilla.
