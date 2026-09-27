---
title: "Boyce 2.7 Ejercicio 1"
exercise-id: boyce-c02-s07-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - aplicar-condiciones.problema-valor-inicial
  - interpretar.contexto-modelo
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s07i01-p092.png
---

## Enunciado

Una bola de masa de 0.25 kg se lanza hacia arriba con una velocidad inicial de 20 m/s desde el techo de un edificio que tiene 30 m de altura. Desprecie la resistencia del aire.

a) Encuentre la altura máxima que alcanza la bola por arriba del piso.

b) Si se supone que en su trayecto hacia abajo la bola no cae en el edificio, halle el tiempo que transcurre hasta que choca contra el piso.

## Solución

Con el piso como origen y el sentido positivo hacia arriba, y tomando $g = 9.8\ \text{m/s}^2$,

$$
h_{\max} = h_0 + \frac{v_0^2}{2g} \approx 50.4\ \text{m},
\qquad
t_{\text{piso}} = \frac{v_0 + \sqrt{v_0^2 + 2g h_0}}{g} \approx 5.25\ \text{s},
$$

donde $h_0 = 30$ m y $v_0 = 20$ m/s.

## Resolución

El movimiento es vertical. Se elige el eje $y$ con origen en el piso y sentido positivo hacia arriba, con $y(0) = 30$ m y $v(0) = 20$ m/s, donde $v = dy/dt$. La única fuerza es el peso, $mg$, dirigido hacia abajo; al despreciar la resistencia del aire, la segunda ley de Newton aplicada a la velocidad da

$$
m\frac{dv}{dt} = -mg
\quad\Longrightarrow\quad
\frac{dv}{dt} = -g.
$$

La masa se cancela, de modo que el valor $0.25$ kg no interviene. La ecuación de $v$ es de **primer orden** y se resuelve por integración directa, equivalente a separar variables. Con $v(0) = 20$,

$$
v(t) = v_0 - gt = 20 - 9.8t.
$$

La posición satisface la EDO de primer orden $dy/dt = v(t)$ con $y(0) = 30$. Integrando,

$$
y(t) = h_0 + v_0 t - \frac{1}{2}gt^2 = 30 + 20t - 4.9t^2.
$$

**a)** La altura es máxima cuando la velocidad se anula, porque antes de ese instante $v > 0$ y después $v < 0$:

$$
v(t_1) = 0
\quad\Longrightarrow\quad
t_1 = \frac{v_0}{g} = \frac{20}{9.8} \approx 2.04\ \text{s}.
$$

Al sustituir en $y(t)$,

$$
y(t_1) = 30 + 20\!\left(\frac{20}{9.8}\right) - 4.9\!\left(\frac{20}{9.8}\right)^2
= 30 + \frac{v_0^2}{2g}
\approx 50.4\ \text{m}.
$$

**b)** La bola choca contra el piso cuando $y(t) = 0$:

$$
30 + 20t - 4.9t^2 = 0
\quad\Longrightarrow\quad
4.9t^2 - 20t - 30 = 0.
$$

Las raíces son

$$
t = \frac{20 \pm \sqrt{400 + 588}}{9.8} = \frac{20 \pm \sqrt{988}}{9.8}.
$$

La raíz negativa no corresponde a un tiempo físico, así que el tiempo de choque es

$$
t_2 = \frac{20 + \sqrt{988}}{9.8} \approx 5.25\ \text{s}.
$$

La solución se comprueba por derivación: $v(t) = 20 - 9.8t$ satisface $dv/dt = -9.8$, e $y(t) = 30 + 20t - 4.9t^2$ satisface $dy/dt = v(t)$, con $y(0) = 30$ y $v(0) = 20$.

## Observaciones

La masa de la bola no aparece en los resultados. Al despreciar la resistencia del aire, la única fuerza es proporcional a la masa y esta se cancela en la segunda ley de Newton.

Ambos resultados dependen del valor de $g$. Se emplea $g = 9.8\ \text{m/s}^2$, habitual en las unidades del enunciado; con otra aproximación cambian la altura máxima y el tiempo de choque.

La bola alcanza la altura máxima en $t \approx 2.04$ s y vuelve a la altura del techo, $y = 30$ m, en $t = 2v_0/g \approx 4.08$ s. Como no cae en el edificio, continúa descendiendo hasta el piso en $t \approx 5.25$ s, valor coherente con ese regreso intermedio.
