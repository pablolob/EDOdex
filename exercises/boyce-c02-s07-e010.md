---
title: "Boyce 2.7 Ejercicio 10"
exercise-id: boyce-c02-s07-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 10"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - interpretar.contexto-modelo
hidden-competencies:
  - analizar-cualitativamente.puntos-equilibrio
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
difficulty:
  conceptual: 2
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c02s07i02-p093.png
---

## Enunciado

Un cuerpo de masa $m$ cae en un medio que ofrece una resistencia proporcional a $|v|^r$, en donde $r$ es una constante positiva. Si se supone que la atracción gravitacional es constante, encuentre la velocidad límite del cuerpo.

## Solución

Se toma el sentido positivo hacia abajo y se designa con $v(t)$ la velocidad de descenso. Si $k>0$ es la constante de proporcionalidad de la resistencia, el modelo es

$$
m\frac{dv}{dt}=mg-kv^r .
$$

La velocidad límite es el valor que anula la aceleración. Por tanto,

$$
mg-kv^r=0
\quad\Longrightarrow\quad
v_L=\left(\frac{mg}{k}\right)^{1/r}.
$$

## Resolución

Se dirige el eje positivo hacia abajo. Mientras el cuerpo cae, $v(t)\ge 0$ y por tanto $|v|^r=v^r$. Sobre el cuerpo actúan dos fuerzas verticales:

- el peso, de magnitud $mg$ y sentido descendente;
- la resistencia del medio, de magnitud $k v^r$, con $k>0$, y sentido ascendente, opuesto al movimiento.

La segunda ley de Newton conduce a la ecuación de **primer orden**

$$
m\frac{dv}{dt}=mg-kv^r .
$$

A esta ecuación corresponde el equilibrio en el que el peso y la resistencia se compensan: $mg=k v^r$. Ese equilibrio es la velocidad límite. Si $v<v_L$, el miembro derecho es positivo y el cuerpo acelera; si $v>v_L$, es negativo y el cuerpo desacelera. En ambos casos $v(t)\to v_L$ cuando $t\to\infty$, de modo que la aceleración $dv/dt$ tiende a cero. Así, la velocidad límite satisface

$$
mg-kv_L^r=0 .
$$

Como $r>0$ y $mg/k>0$, la única raíz positiva es

$$
v_L=\left(\frac{mg}{k}\right)^{1/r}.
$$

Comprobación: al sustituir $v=v_L$ en el modelo resulta $m\,dv/dt=mg-k\left(\frac{mg}{k}\right)=0$, que es la condición de aceleración nula.

## Observaciones

La velocidad límite no depende de la velocidad inicial del cuerpo, sino solo de $m$, $g$, $k$ y $r$. Para $r=1$ coincide con $v_L=mg/k$; para $r=2$, con $v_L=\sqrt{mg/k}$. Salvo que el cuerpo parta con esa misma velocidad, $v_L$ es una asíntota y no se alcanza en tiempo finito, pues la unicidad de soluciones impide que dos trayectorias se crucen en el equilibrio.
