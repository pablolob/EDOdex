---
title: "Boyce 2.3 Ejercicio 10"
exercise-id: boyce-c02-s03-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Para cada uno de los problemas 9 a 16, encuentre la solución del problema con valor inicial dado en forma explícita y determine (por lo menos aproximadamente) el intervalo en que está definida.

10. $dr/d\theta = r^2/\theta, \quad r(1) = 2$

## Solución

La ecuación es **de primer orden** y **separable**. La solución explícita del problema con valor inicial es

$$
r(\theta) = \frac{2}{1 - 2\ln\theta}, \qquad 0 < \theta < \sqrt{e}.
$$

## Resolución

La ecuación

$$
\frac{dr}{d\theta} = \frac{r^2}{\theta}
$$

admite **separación de variables**. Se multiplican ambos miembros por $d\theta/r^2$ y se agrupan las variables:

$$
\frac{dr}{r^2} = \frac{d\theta}{\theta}.
$$

Esta reescritura supone $r \neq 0$ y $\theta \neq 0$. La solución constante $r = 0$ satisface la ecuación, pero se recupera o descarta con la condición inicial; la solución buscada toma el valor $r(1) = 2$, de modo que la rama que interesa tiene $r \neq 0$.

Integrando ambos miembros,

$$
-\frac{1}{r} = \ln|\theta| + C.
$$

La condición inicial $r(1) = 2$ permite determinar $C$:

$$
-\frac{1}{2} = \ln 1 + C = C \quad\Longrightarrow\quad C = -\frac{1}{2}.
$$

Sustituyendo la constante,

$$
-\frac{1}{r} = \ln|\theta| - \frac{1}{2}.
$$

Se despeja $r$ invirtiendo ambos miembros:

$$
\frac{1}{r} = \frac{1}{2} - \ln|\theta| = \frac{1 - 2\ln|\theta|}{2}.
$$

Como el punto inicial es $\theta = 1 > 0$ y el intervalo de validez es un intervalo que contiene a $\theta = 1$, se tiene $\theta > 0$ y $|\theta| = \theta$. Así,

$$
r(\theta) = \frac{2}{1 - 2\ln\theta}.
$$

La expresión está definida donde el denominador no se anula y $\theta > 0$. El denominador se anula cuando

$$
1 - 2\ln\theta = 0 \quad\Longrightarrow\quad \ln\theta = \frac{1}{2} \quad\Longrightarrow\quad \theta = \sqrt{e}.
$$

Por tanto, la solución está definida en los intervalos $(0, \sqrt{e})$ y $(\sqrt{e}, \infty)$. El punto inicial $\theta = 1$ pertenece a $(0, \sqrt{e})$, pues $\sqrt{e} \approx 1.6487$. El intervalo de validez que contiene al punto inicial es

$$
0 < \theta < \sqrt{e}.
$$

Al acercarse $\theta$ a $\sqrt{e}$ por la izquierda, $r(\theta) \to +\infty$, de modo que la solución no puede prolongarse más allá de la singularidad del denominador.

Comprobación: derivando la solución explícita,

$$
\frac{dr}{d\theta} = 2\cdot\frac{2/\theta}{(1 - 2\ln\theta)^2} = \frac{4}{\theta\,(1 - 2\ln\theta)^2}.
$$

Por otra parte,

$$
\frac{r^2}{\theta} = \frac{1}{\theta}\left(\frac{2}{1 - 2\ln\theta}\right)^2 = \frac{4}{\theta\,(1 - 2\ln\theta)^2},
$$

que coincide con la derivada; además $r(1) = 2/(1 - 0) = 2$.

## Observaciones

La ecuación original también admite la solución constante $r = 0$, que se pierde al dividir entre $r^2$. No se incluye en la respuesta porque no satisface la condición inicial $r(1) = 2$. La solución deja de existir en $\theta = \sqrt{e}$, donde $r$ presenta una asíntota vertical, y en $\theta = 0$, fuera del dominio de $\ln\theta$.
