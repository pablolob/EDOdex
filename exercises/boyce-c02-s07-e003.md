---
title: "Boyce 2.7 Ejercicio 3"
exercise-id: boyce-c02-s07-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - modelizar.definir-condiciones
  - resolver-analiticamente.variables-separables
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s07i01-p092.png
---

## Enunciado

Un cuerpo de masa constante $m$ se proyecta verticalmente hacia arriba con una velocidad inicial $v_0$. Si se supone que la atracción gravitacional de la Tierra es constante, y se desprecian todas las demás fuerzas que actúan sobre el cuerpo, halle

a) La altura máxima alcanzada por el cuerpo.

b) El tiempo en el que se alcanza la altura máxima.

c) El tiempo en el que el cuerpo regresa a su punto de partida.

## Solución

a) La altura máxima alcanzada es

$$h_{\max}=\frac{v_0^2}{2g}.$$

b) El tiempo en el que se alcanza la altura máxima es

$$t_{\max}=\frac{v_0}{g}.$$

c) El tiempo en el que el cuerpo regresa a su punto de partida es

$$t_r=\frac{2v_0}{g}.$$

## Resolución

Se toma el eje vertical con sentido positivo hacia arriba y origen en el punto de lanzamiento. La altura sobre ese punto es $y(t)$ y la velocidad es $v(t)=\dfrac{dy}{dt}$. Sobre el cuerpo solo actúa su peso, de magnitud $mg$ y sentido descendente. Al aplicar la segunda ley de Newton a la velocidad se obtiene la ecuación de primer orden

$$
m\frac{dv}{dt}=-mg.
$$

La masa se cancela al dividir por $m$, de modo que el modelo es

$$
\frac{dv}{dt}=-g.
$$

Esta ecuación es **separable**: al separar variables e integrar resulta

$$
v(t)=-gt+C_1.
$$

La condición inicial $v(0)=v_0$ fija $C_1=v_0$, por lo que

$$
v(t)=v_0-gt.
$$

La posición se obtiene integrando la velocidad:

$$
y(t)=\int (v_0-gt)\,dt=v_0t-\frac{1}{2}gt^2+C_2.
$$

La condición inicial $y(0)=0$ da $C_2=0$, luego

$$
y(t)=v_0t-\frac{1}{2}gt^2.
$$

a) La altura es máxima cuando la velocidad se anula, es decir, en el instante $t=v_0/g$. Al evaluar la posición en ese instante,

$$
h_{\max}=y\!\left(\frac{v_0}{g}\right)
=v_0\frac{v_0}{g}-\frac{1}{2}g\left(\frac{v_0}{g}\right)^2
=\frac{v_0^2}{2g}.
$$

b) El instante en el que se alcanza la altura máxima es el que anula la velocidad:

$$
t_{\max}=\frac{v_0}{g}.
$$

c) El regreso al punto de partida corresponde a $y(t)=0$ con $t>0$:

$$
y(t)=v_0t-\frac{1}{2}gt^2=t\left(v_0-\frac{1}{2}gt\right)=0.
$$

Las soluciones son $t=0$, el instante del lanzamiento, y $t=\dfrac{2v_0}{g}$, el instante del regreso. Por tanto,

$$
t_r=\frac{2v_0}{g}.
$$

## Observaciones

Los tres resultados son independientes de la masa $m$: la masa se cancela en la segunda ley de Newton y solo interviene en la elección de las unidades. El tiempo de regreso es el doble del tiempo de ascenso, pues el movimiento es simétrico mientras la única fuerza es constante. El modelo supone $g$ constante y ausencia de resistencia del aire; con cualquier otra fuerza, la ecuación de la velocidad deja de ser $\dfrac{dv}{dt}=-g$.

