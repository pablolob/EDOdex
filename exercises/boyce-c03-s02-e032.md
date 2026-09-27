---
title: "Boyce 3.2 Ejercicio 32"
exercise-id: boyce-c03-s02-e032
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 32"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - modelizar.formular-edo
prerequisitos:
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c03s02i02-p153.png
---

## Enunciado

**La ecuación adjunta.** Si una ecuación lineal homogénea de segundo orden no es exacta, es posible hacerla exacta si se multiplican por un factor integrante apropiado $\mu(x)$. Por tanto, se requiere que $\mu(x)$ sea tal que $\mu(x)P(x)y'' + \mu(x)Q(x)y' + \mu(x)R(x)y = 0$ pueda escribirse en la forma $[\mu(x)P(x)y']' + [f(x)y]' = 0$. Al igualar los coeficientes de estas dos ecuaciones y eliminar $f(x)$, demuestre que la función $\mu$ debe satisfacer

$$P\mu'' + (2P' - Q)\mu' + (P'' - Q' + R)\mu = 0.$$

Esta ecuación se conoce como la adjunta de la ecuación original y es importante en la teoría avanzada de las ecuaciones diferenciales. En general, el problema de resolver la ecuación diferencial adjunta es tan difícil como el de resolver la ecuación original, de modo que sólo en ocasiones es posible hallar un factor integrante para una ecuación de segundo orden.

## Solución

Si $\mu$ es un factor integrante que hace exacta la ecuación, entonces debe satisfacer la **ecuación adjunta**

$$
P\mu'' + (2P' - Q)\mu' + (P'' - Q' + R)\mu = 0.
$$

## Resolución

Se parte de la ecuación lineal homogénea de segundo orden

$$
P(x)y'' + Q(x)y' + R(x)y = 0.
$$

Al multiplicarla por $\mu(x)$ se obtiene

$$
\mu P y'' + \mu Q y' + \mu R y = 0.
$$

Se exige que esta ecuación pueda escribirse como

$$
[\mu P y']' + [f y]' = 0.
$$

Se desarrollan ambas derivadas con la **regla del producto**:

$$
[\mu P y']' = (\mu P)' y' + \mu P y'' = (\mu' P + \mu P')y' + \mu P y'',
$$

$$
[f y]' = f' y + f y'.
$$

Sumando,

$$
\mu P y'' + (\mu' P + \mu P' + f)y' + f' y = 0.
$$

Los coeficientes de $y''$, $y'$ y $y$ de esta expresión deben coincidir con los de la ecuación multiplicada por $\mu$. El coeficiente de $y''$ coincide automáticamente. Igualando los otros dos se obtiene el sistema

$$
\begin{aligned}
\mu' P + \mu P' + f &= \mu Q, \\
f' &= \mu R.
\end{aligned}
$$

De la primera ecuación se despeja $f$:

$$
f = \mu Q - \mu' P - \mu P'.
$$

Derivando respecto de $x$,

$$
f' = \mu' Q + \mu Q' - \mu'' P - \mu' P' - \mu' P' - \mu P''
= \mu' Q + \mu Q' - \mu'' P - 2\mu' P' - \mu P''.
$$

Al imponer $f' = \mu R$ resulta

$$
\mu' Q + \mu Q' - \mu'' P - 2\mu' P' - \mu P'' = \mu R.
$$

Se agrupan los términos en $\mu''$, $\mu'$ y $\mu$:

$$
-P\mu'' + (Q - 2P')\mu' + (Q' - P'' - R)\mu = 0.
$$

Al multiplicar por $-1$ se obtiene

$$
P\mu'' + (2P' - Q)\mu' + (P'' - Q' + R)\mu = 0,
$$

que es la ecuación adjunta enunciada.

## Observaciones

La deducción supone que $P$, $Q$, $R$ y $\mu$ son suficientemente derivables en el intervalo considerado, de modo que existan $P''$, $Q'$ y $\mu''$.

La ecuación adjunta es también una ecuación lineal homogénea de segundo orden, ahora para la incógnita $\mu$. Por eso resolverla es, en general, tan difícil como resolver la ecuación original; solo en casos particulares se obtiene un factor integrante explícito.

La ecuación es autoadjunta cuando la adjunta coincide con la original. Esto ocurre si $Q = P'$, pues entonces la ecuación original adopta la forma $(P y')' + R y = 0$ y la ecuación adjunta se reduce a ella misma.
