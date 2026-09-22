---
title: "Boyce 6.1 Ejercicio 2"
exercise-id: boyce-c06-s01-e002
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 2"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - calculo-avanzado.integrales-impropias
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 1 a 10 encuentre la transformada inversa de Laplace de la función dada.

2. $\frac{4}{(s - 1)^3}$

## Solución

La transformada inversa es

$$
\mathcal{L}^{-1}\left\{\frac{4}{(s-1)^3}\right\} = 2t^2e^{t}.
$$

## Resolución

Se busca la función $f(t)$ cuya **transformada de Laplace** es

$$
F(s) = \frac{4}{(s-1)^3}.
$$

El denominador $(s-1)^3$ sugiere una potencia de $t$ multiplicada por una exponencial, de modo que se propone $f(t) = 2t^2e^{t}$ y se comprueba que su transformada coincide con $F(s)$.

Por la definición integral de la transformada,

$$
\mathcal{L}\{2t^2e^{t}\} = \int_0^\infty e^{-st}\,2t^2e^{t}\,dt = 2\int_0^\infty t^2 e^{-(s-1)t}\,dt.
$$

La integral impropia converge para $s > 1$. Con $\alpha = s-1 > 0$, se integra por partes:

$$
\begin{aligned}
\int_0^\infty t^2 e^{-\alpha t}\,dt
&= \left[-\frac{t^2}{\alpha}e^{-\alpha t}\right]_0^\infty + \frac{2}{\alpha}\int_0^\infty t e^{-\alpha t}\,dt \\
&= \frac{2}{\alpha}\cdot\frac{1}{\alpha^2}
= \frac{2}{\alpha^3}.
\end{aligned}
$$

Al sustituir $\alpha = s-1$ resulta

$$
\mathcal{L}\{2t^2e^{t}\} = 2\cdot\frac{2}{(s-1)^3} = \frac{4}{(s-1)^3}.
$$

Como $F(s)$ es la transformada de $2t^2e^{t}$, se concluye que

$$
\mathcal{L}^{-1}\left\{\frac{4}{(s-1)^3}\right\} = 2t^2e^{t}.
$$

## Observaciones

El resultado responde al par general

$$
\mathcal{L}\{t^n e^{at}\} = \frac{n!}{(s-a)^{n+1}}, \qquad s > a,
$$

con $n = 2$ y $a = 1$; el factor $4$ se ajusta como $4 = 2\cdot 2!$. La transformada inversa está definida para $s > 1$, región donde la integral que la origina converge. La función $2t^2e^{t}$ es continua en $t \ge 0$ y no aporta soluciones singulares ni ramas adicionales.
