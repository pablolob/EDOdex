---
title: "Zill Repaso C5 Ejercicio 21"
exercise-id: zill-c05-sr-e021
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 5, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
source-images:
  - zill-c05sri02-p246
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-orden-superior
  - interpretar.contexto-modelo
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

Un circuito en serie contiene una inductancia de $L = 1\text{ H}$, una capacitancia de $C = 10^{-4}\text{ F}$ y una fuerza electromotriz de $E(t) = 100 \operatorname{sen} 50t\text{ V}$. Al inicio, la carga $q$ y la corriente $i$ son cero.
a) Determine la carga $q(t)$.
b) Determine la corriente $i(t)$.
c) Calcule los tiempos para los que la carga en el capacitor es cero.

## Solución

La carga y la corriente del circuito son

$$
q(t) = \frac{1}{75}\sin(50t) - \frac{1}{150}\sin(100t), \qquad
i(t) = \frac{2}{3}\left(\cos(50t) - \cos(100t)\right).
$$

La carga se anula en los instantes

$$
t = \frac{n\pi}{50}\ \text{s}, \qquad n = 0, 1, 2, \dots
$$

## Resolución

En un circuito en serie $LRC$, la carga $q(t)$ satisface la ecuación lineal de segundo orden

$$
L q'' + R q' + \frac{1}{C} q = E(t).
$$

El enunciado no menciona resistencia, de modo que $R = 0$. Con $L = 1$, $1/C = 10^4$ y $E(t) = 100\sin(50t)$ resulta

$$
q'' + 10^4 q = 100\sin(50t).
$$

Las condiciones iniciales son $q(0) = 0$ e $i(0) = q'(0) = 0$.

La ecuación homogénea $q'' + 10^4 q = 0$ tiene ecuación característica $r^2 + 10^4 = 0$, cuyas raíces son $r = \pm 100 i$. Por tanto,

$$
q_h(t) = C_1 \cos(100t) + C_2 \sin(100t).
$$

Como el miembro derecho es $\sin(50t)$ y $50 \neq 100$, no hay resonancia. Se propone una solución particular

$$
q_p(t) = A\sin(50t) + B\cos(50t).
$$

Las derivadas son $q_p'' = -2500\,q_p$, y al sustituir en la ecuación se obtiene

$$
\begin{aligned}
q_p'' + 10^4 q_p &= 7500\left(A\sin(50t) + B\cos(50t)\right) = 100\sin(50t), \\
7500 A &= 100, \qquad 7500 B = 0, \\
A &= \frac{1}{75}, \qquad B = 0.
\end{aligned}
$$

Por consiguiente,

$$
q(t) = C_1 \cos(100t) + C_2 \sin(100t) + \frac{1}{75}\sin(50t).
$$

La condición $q(0) = 0$ da $C_1 = 0$. La corriente es $i(t) = q'(t)$, es decir,

$$
i(t) = 100 C_2 \cos(100t) + \frac{2}{3}\cos(50t).
$$

La condición $i(0) = 0$ conduce a

$$
100 C_2 + \frac{2}{3} = 0 \quad \Longrightarrow \quad C_2 = -\frac{1}{150}.
$$

De ello resultan

$$
q(t) = \frac{1}{75}\sin(50t) - \frac{1}{150}\sin(100t),
\qquad
i(t) = q'(t) = \frac{2}{3}\left(\cos(50t) - \cos(100t)\right).
$$

Para el inciso c) se factoriza la carga usando $\sin(100t) = 2\sin(50t)\cos(50t)$:

$$
q(t) = \frac{1}{75}\sin(50t)\left(1 - \cos(50t)\right).
$$

La carga se anula cuando $\sin(50t) = 0$ o $\cos(50t) = 1$. La segunda condición implica $\sin(50t) = 0$, así que basta exigir $\sin(50t) = 0$. Entonces $50t = n\pi$, con $n$ entero, y

$$
t = \frac{n\pi}{50}\ \text{s}, \qquad n = 0, 1, 2, \dots
$$

## Observaciones

Al no existir resistencia, no hay amortiguamiento y la oscilación se mantiene. La frecuencia natural del circuito es $\omega_0 = 1/\sqrt{LC} = 100\ \text{rad/s}$, distinta de la frecuencia de la fuente, $50\ \text{rad/s}$; por eso no hay resonancia y la amplitud de la carga permanece acotada. El factor $1 - \cos(50t)$ hace que la carga no cambie de signo entre cada par de ceros consecutivos.
