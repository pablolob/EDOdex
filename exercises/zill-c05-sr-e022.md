---
title: "Zill Repaso C5 Ejercicio 22"
exercise-id: zill-c05-sr-e022
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 5, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
source-images:
  - zill-c05sri02-p246
competencies:
  - modelizar.formular-edo
  - modelizar.definir-condiciones
  - interpretar.contexto-modelo
difficulty:
  conceptual: 2
  technical: 1
---

## Enunciado

a) Demuestre que la corriente $i(t)$ en un circuito en serie LRC satisface la ecuación
$$L \frac{d^2i}{dt^2} + R \frac{di}{dt} + \frac{1}{C}i = E'(t)$$
donde $E'(t)$ denota la derivada de $E(t)$.
b) Se pueden especificar condiciones iniciales $i(0)$ e $i'(0)$ para la ED del inciso a). Si $i(0) = i_0$ y $q(0) = q_0$, ¿cuál es $i'(0)$?

## Solución

a) Derivando respecto a $t$ la ley de Kirchhoff del circuito y usando $i=\dfrac{dq}{dt}$, la corriente satisface

$$
L \frac{d^2i}{dt^2} + R \frac{di}{dt} + \frac{1}{C}i = E'(t).
$$

b)

$$
i'(0)=\frac{1}{L}\left(E(0)-R i_0-\frac{q_0}{C}\right).
$$

## Resolución

**Inciso a).** En un circuito en serie $LRC$, la ley de Kirchhoff de voltaje iguala la suma de las caídas de potencial en los tres elementos con la fuerza electromotriz aplicada:

$$
L\frac{di}{dt}+Ri+\frac{1}{C}q=E(t).
$$

Como la corriente es la rapidez de cambio de la carga, $i=\dfrac{dq}{dt}$, al derivar ambos miembros respecto a $t$ resulta

$$
L\frac{d^2i}{dt^2}+R\frac{di}{dt}+\frac{1}{C}\frac{dq}{dt}=E'(t).
$$

Sustituyendo $\dfrac{dq}{dt}=i$ se obtiene la ecuación pedida,

$$
L \frac{d^2i}{dt^2} + R \frac{di}{dt} + \frac{1}{C}i = E'(t).
$$

**Inciso b).** La ecuación del inciso a) es de segundo orden y no permite despejar $i'(0)$ sin conocer también $i''(0)$. Para determinarlo se evalúa en $t=0$ la relación de Kirchhoff original, que contiene la carga:

$$
L\,i'(0)+R\,i(0)+\frac{1}{C}q(0)=E(0).
$$

Con $i(0)=i_0$ y $q(0)=q_0$,

$$
L\,i'(0)+R\,i_0+\frac{q_0}{C}=E(0),
$$

de donde

$$
i'(0)=\frac{1}{L}\left(E(0)-R i_0-\frac{q_0}{C}\right).
$$

## Observaciones

El par $(q_0,i_0)$ determina por completo el estado inicial del circuito y fija la aceleración inicial de la corriente. El término $\frac{q_0}{C}$ es el voltaje inicial del capacitor y $R i_0$ la caída inicial en el resistor; lo que resta de $E(0)$ es la fuerza electromotriz disponible para cambiar la corriente, dividida por la inductancia.
