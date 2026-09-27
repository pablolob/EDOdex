---
title: "Boyce 2.7 Ejercicio 6"
exercise-id: boyce-c02-s07-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 6"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
hidden-competencies:
  - clasificar.linealidad
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c02s07i01-p092.png
---

## Enunciado

Un bote de motor y su tripulante pesan juntos 320 lb. Si el empuje del motor es equivalente a una fuerza constante de 10 lb en la dirección del movimiento, si la resistencia del agua al movimiento es numéricamente igual al doble de la velocidad en pies por segundo y si el bote se encuentra inicialmente en reposo, determine

a) La velocidad del bote en el instante $t$.

b) La velocidad límite.

## Solución

Con el eje positivo en la dirección del movimiento y $v(t)$ la velocidad del bote, el modelo es

$$
m\frac{dv}{dt}=10-2v,\qquad v(0)=0,
$$

donde la masa es $m=10$ slugs. Su solución es

$$
v(t)=5\left(1-e^{-t/5}\right)\ \text{pie/s},
$$

de modo que la velocidad límite es

$$
v_L=\lim_{t\to\infty}v(t)=5\ \text{pie/s}.
$$

## Resolución

Se toma el eje positivo en la dirección del movimiento. Sobre el bote actúan el empuje del motor, de $10$ lb en el sentido del movimiento, y la resistencia del agua, de magnitud $2v$ y sentido opuesto. Con $v(t)$ la velocidad, la segunda ley de Newton conduce a

$$
m\frac{dv}{dt}=10-2v.
$$

El peso conjunto es de $320$ lb. En el sistema de unidades de uso ingenieril, con $g=32$ pie/s², la masa vale

$$
m=\frac{320}{32}=10\ \text{slugs}.
$$

La condición inicial es $v(0)=0$, porque el bote parte del reposo. Al sustituir la masa y dividir entre $10$, la ecuación resulta **lineal** de **primer orden**:

$$
\frac{dv}{dt}+\frac{1}{5}v=1.
$$

Un **factor integrante** es $\mu(t)=e^{t/5}$. Al multiplicar por él, el miembro izquierdo es la derivada de un producto:

$$
\left(e^{t/5}v\right)'=e^{t/5}.
$$

Integrando respecto a $t$,

$$
e^{t/5}v=5e^{t/5}+C,
$$

donde $C$ es una constante arbitraria. Por tanto,

$$
v(t)=5+C e^{-t/5}.
$$

La condición $v(0)=0$ exige $5+C=0$, es decir, $C=-5$. Así,

$$
v(t)=5\left(1-e^{-t/5}\right).
$$

Comprobación: derivando, $v'(t)=e^{-t/5}$; entonces $10v'+2v=10e^{-t/5}+10\left(1-e^{-t/5}\right)=10$, que es el modelo, y $v(0)=0$.

**b)** Como $e^{-t/5}\to 0$ cuando $t\to\infty$, la velocidad tiende al valor límite

$$
v_L=5\ \text{pie/s}.
$$

## Observaciones

La velocidad límite no depende del peso del bote ni de su tripulante: se alcanza cuando el empuje iguala a la resistencia, $10-2v=0$, de donde $v_L=5$ pie/s. La solución es válida para todo $t\ge 0$ y se aproxima a esa asíntota sin alcanzarla en tiempo finito.
