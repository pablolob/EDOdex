---
title: "Boyce 2.7 Ejercicio 4"
exercise-id: boyce-c02-s07-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - analizar-cualitativamente.comportamiento-asintotico
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s07i01-p092.png
---

## Enunciado

Un cuerpo se lanza verticalmente hacia arriba con una velocidad inicial $v_0$ en un medio que ofrece una resistencia proporcional a la magnitud de la velocidad. Encuentre la velocidad $v$ como una función del tiempo $t$. Encuentre la velocidad límite $v_f$ a la que se tiende después de mucho tiempo.

## Solución

Con el eje positivo hacia arriba, la velocidad del cuerpo es

$$
v(t) = \left(v_0 + \frac{mg}{k}\right) e^{-kt/m} - \frac{mg}{k}.
$$

Cuando $t \to \infty$, el término exponencial se anula y $v \to -\dfrac{mg}{k}$. La velocidad límite es

$$
v_f = \frac{mg}{k},
$$

dirigida hacia abajo.

## Resolución

Se toma el eje vertical positivo hacia arriba y el origen en el punto de lanzamiento. Sobre el cuerpo de masa $m$ actúan dos fuerzas: el peso, de magnitud $mg$ y sentido hacia abajo, y la resistencia del medio, de magnitud $kv$ y sentido opuesto a la velocidad.

La resistencia es proporcional a la magnitud de la velocidad y siempre se opone a ella. Con el eje positivo hacia arriba, la fuerza de resistencia se escribe $-kv$: esta expresión cambia de signo con $v$, de modo que frena el ascenso cuando $v>0$ y frena el descenso cuando $v<0$. La segunda ley de Newton da entonces

$$
m \frac{dv}{dt} = -mg - kv,
$$

con la condición inicial $v(0) = v_0$.

La ecuación es de **primer orden** y **lineal**. Se resuelve por **separación de variables**. Se reordena como

$$
\frac{dv}{dt} = -g - \frac{k}{m}v = -\frac{k}{m}\left(v + \frac{mg}{k}\right),
$$

y se separan las variables:

$$
\frac{dv}{v + \dfrac{mg}{k}} = -\frac{k}{m}\,dt.
$$

Se integran ambos miembros:

$$
\ln\left(v + \frac{mg}{k}\right) = -\frac{k}{m}t + C.
$$

La condición inicial $v(0) = v_0$ fija la constante:

$$
C = \ln\left(v_0 + \frac{mg}{k}\right).
$$

Al sustituir $C$ y agrupar los logaritmos resulta

$$
\ln\left(\frac{v + \dfrac{mg}{k}}{v_0 + \dfrac{mg}{k}}\right) = -\frac{k}{m}t.
$$

Se despeja $v$:

$$
\begin{aligned}
\frac{v + \dfrac{mg}{k}}{v_0 + \dfrac{mg}{k}} &= e^{-kt/m}, \\
v + \frac{mg}{k} &= \left(v_0 + \frac{mg}{k}\right) e^{-kt/m}, \\
v(t) &= \left(v_0 + \frac{mg}{k}\right) e^{-kt/m} - \frac{mg}{k}.
\end{aligned}
$$

La solución satisface $v(0)=v_0$ y es válida para todo $t \ge 0$.

Para la velocidad límite se toma el límite cuando $t \to \infty$. El término exponencial tiende a cero, de modo que

$$
\lim_{t \to \infty} v(t) = -\frac{mg}{k}.
$$

Por tanto, la velocidad límite es $v_f = \dfrac{mg}{k}$ en magnitud, con sentido hacia abajo.

## Observaciones

La dirección positiva elegida afecta al signo de $v_f$: la velocidad tiende a $-mg/k$ porque el cuerpo acaba descendiendo. La rapidez límite es $mg/k$, la misma que alcanza un cuerpo que cae con resistencia proporcional a la velocidad.

### Método alternativo: factor integrante

La ecuación $m v' + k v = -mg$ se escribe en forma estándar como $v' + \dfrac{k}{m}v = -g$. El factor integrante es $\mu(t) = e^{kt/m}$. Multiplicando e integrando,

$$
e^{kt/m} v = -\frac{mg}{k} e^{kt/m} + C,
$$

y al despejar $v$ se recupera la misma solución general $v(t) = C e^{-kt/m} - \dfrac{mg}{k}$, con $C = v_0 + \dfrac{mg}{k}$.
