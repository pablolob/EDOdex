---
title: "Boyce 2.6 Ejercicio 24"
exercise-id: boyce-c02-s06-e024
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.6, ejercicio 24"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
  - estabilidad
competencies:
  - resolver-analiticamente.variables-separables
  - analizar-cualitativamente.comportamiento-asintotico
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s06i06-p086.png
  - c02s06i07-p087.png
---

## Enunciado

**Reacciones químicas.** Una reacción química de segundo orden comprende la interacción (colisión) de una molécula de una sustancia $P$ con una molécula de una sustancia $Q$ para producir una molécula de una nueva sustancia $X$; esto se denota por $P + Q \to X$. Suponga que $p$ y $q$, en donde $p \neq q$, son las concentraciones iniciales de $P$ y $Q$, respectivamente, y sea $x(t)$ la concentración de $X$ en el instante $t$. Entonces $p - x(t)$ y $q - x(t)$ son las concentraciones de $P$ y $Q$ en el instante $t$, y la rapidez a la que ocurre la reacción se expresa por la ecuación

$$\frac{dx}{dt} = \alpha(p - x)(q - x), \tag{i}$$

en donde $\alpha$ es una constante positiva.

a) Si $x(0) = 0$, determine el valor límite de $x(t)$ cuando $t \to \infty$, sin resolver la ecuación diferencial. Luego, resuelva el problema con valor inicial y encuentre $x(t)$ para cualquier $t$.

b) Si las sustancias $P$ y $Q$ son las mismas, entonces $p = q$ y la ecuación (i) se sustituye por

$$\frac{dx}{dt} = \alpha(p - x)^2, \tag{ii}$$

Si $x(0) = 0$, determine el valor límite de $x(t)$ cuando $t \to \infty$, sin resolver la ecuación diferencial. Luego, resuelva el problema con valor inicial y determine $x(t)$ para cualquier $t$.

## Solución

a) El valor límite es $\min(p,q)$ y, para $p \neq q$,

$$
x(t) = \frac{pq\left(e^{\alpha(q-p)t}-1\right)}{q\,e^{\alpha(q-p)t}-p}, \qquad t \ge 0.
$$

b) El valor límite es $p$ y

$$
x(t) = \frac{\alpha p^2 t}{1+\alpha p t}, \qquad t \ge 0.
$$

## Resolución

Ambos problemas son **autónomos** y **separables**.

a) *Valor límite sin resolver la ecuación.* Los puntos de equilibrio de $\dfrac{dx}{dt}=\alpha(p-x)(q-x)$ son $x=p$ y $x=q$. Como $x(0)=0$, para $0<x<\min(p,q)$ los factores $p-x$ y $q-x$ son positivos, de modo que $\dfrac{dx}{dt}>0$ y $x$ crece. El crecimiento se detiene cuando se anula el primer factor, esto es, cuando la sustancia de menor concentración inicial se agota. Por tanto,

$$
\lim_{t\to\infty} x(t) = \min(p,q).
$$

*Resolución del problema con valor inicial.* Se aplica **separación de variables**:

$$
\frac{dx}{(p-x)(q-x)} = \alpha\,dt.
$$

Como $p \neq q$, se descompone en **fracciones parciales**

$$
\frac{1}{(p-x)(q-x)} = \frac{1}{q-p}\left(\frac{1}{p-x}-\frac{1}{q-x}\right).
$$

Integrando ambos miembros y teniendo en cuenta que $0 \le x < \min(p,q)$,

$$
\frac{1}{q-p}\ln\!\left(\frac{q-x}{p-x}\right) = \alpha t + C.
$$

La condición $x(0)=0$ fija $C=\dfrac{1}{q-p}\ln\dfrac{q}{p}$. Al sustituir y multiplicar por $q-p$,

$$
\ln\!\left(\frac{p(q-x)}{q(p-x)}\right) = \alpha(q-p)t.
$$

Al exponenciar y despejar $x$ resulta

$$
\begin{aligned}
p(q-x) &= q(p-x)e^{\alpha(q-p)t}, \\
pq\left(e^{\alpha(q-p)t}-1\right) &= x\left(q\,e^{\alpha(q-p)t}-p\right), \\
x(t) &= \frac{pq\left(e^{\alpha(q-p)t}-1\right)}{q\,e^{\alpha(q-p)t}-p}.
\end{aligned}
$$

El denominador vale $q-p$ en $t=0$ y conserva su signo para $t\ge 0$, por lo que no se anula y la solución es válida en todo $t \ge 0$.

b) *Valor límite sin resolver la ecuación.* La ecuación $\dfrac{dx}{dt}=\alpha(p-x)^2$ tiene un único equilibrio, $x=p$. Para $0 \le x < p$ se cumple $(p-x)^2>0$, luego $\dfrac{dx}{dt}>0$ y $x$ crece hacia $p$. Así,

$$
\lim_{t\to\infty} x(t) = p.
$$

*Resolución del problema con valor inicial.* Se separan las variables:

$$
\frac{dx}{(p-x)^2} = \alpha\,dt.
$$

Integrando,

$$
\frac{1}{p-x} = \alpha t + C.
$$

La condición $x(0)=0$ da $C=\dfrac{1}{p}$, de modo que

$$
\frac{1}{p-x} = \alpha t + \frac{1}{p}, \qquad
p-x = \frac{p}{1+\alpha p t}, \qquad
x(t) = \frac{\alpha p^2 t}{1+\alpha p t}.
$$

El denominador $1+\alpha p t$ es positivo para $t \ge 0$, luego la solución es válida en todo $t \ge 0$.

## Observaciones

El valor límite es la concentración del reactivo limitante: la reacción se detiene cuando la sustancia $P$ o la $Q$, la que esté en menor concentración inicial, se agota.

El apartado (b) es el caso límite del apartado (a) cuando las concentraciones iniciales coinciden. Al escribir $q=p+\varepsilon$ y hacer $\varepsilon\to 0$, la expresión del apartado (a) tiende a $\dfrac{\alpha p^2 t}{1+\alpha p t}$, que es la del apartado (b).
