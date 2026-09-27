---
title: "Boyce 3.2 Ejercicio 36"
exercise-id: boyce-c03-s02-e036
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 36"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - construir.ecuacion-adjunta
prerequisitos:
  - ecuaciones-diferenciales.linealidad
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i02-p153.png
---

## Enunciado

Para la ecuación lineal de segundo orden $P(x)y'' + Q(x)y' + R(x)y = 0$ demuestre que la adjunta de la ecuación adjunta es la ecuación original.

## Solución

Al aplicar la construcción de la **ecuación adjunta** dos veces se recupera la ecuación original:

$$
P(x)y'' + Q(x)y' + R(x)y = 0.
$$

La operación de adjunción es, por tanto, una involución sobre las ecuaciones lineales de segundo orden.

## Resolución

Se parte de la forma conocida de la **ecuación adjunta**. Si la ecuación original se escribe como

$$
L[y] = P(x)y'' + Q(x)y' + R(x)y = 0,
$$

su adjunta es

$$
L^*[z] = P(x)z'' + \left[2P'(x) - Q(x)\right]z' + \left[P''(x) - Q'(x) + R(x)\right]z = 0.
$$

Esta adjunta vuelve a ser una ecuación lineal de segundo orden del mismo tipo, con coeficientes

$$
\tilde{P}(x) = P(x), \qquad \tilde{Q}(x) = 2P'(x) - Q(x), \qquad \tilde{R}(x) = P''(x) - Q'(x) + R(x).
$$

La adjunta de $L^*$ se obtiene aplicando la misma regla a $\tilde{P}z'' + \tilde{Q}z' + \tilde{R}z = 0$. Con variable dependiente $w$,

$$
L^{**}[w] = P(x)w'' + \left[2P'(x) - \tilde{Q}(x)\right]w' + \left[\tilde{P}''(x) - \tilde{Q}'(x) + \tilde{R}(x)\right]w = 0.
$$

Se calculan los dos coeficientes nuevos. Para el coeficiente de $w'$,

$$
2P' - \tilde{Q} = 2P' - \left(2P' - Q\right) = Q.
$$

Para el coeficiente de $w$ se deriva primero $\tilde{Q}$,

$$
\tilde{Q}' = 2P'' - Q',
$$

y se sustituye junto con $\tilde{P}'' = P''$ y $\tilde{R} = P'' - Q' + R$:

$$
\begin{aligned}
\tilde{P}'' - \tilde{Q}' + \tilde{R}
&= P'' - \left(2P'' - Q'\right) + \left(P'' - Q' + R\right) \\
&= P'' - 2P'' + Q' + P'' - Q' + R \\
&= R.
\end{aligned}
$$

Al reunir ambos resultados,

$$
L^{**}[w] = P(x)w'' + Q(x)w' + R(x)w = 0.
$$

Renombrando la variable $w$ como $y$, esta expresión coincide con la ecuación original $L[y]=0$. Queda demostrado que la adjunta de la ecuación adjunta es la ecuación original.

## Observaciones

La adjunción $L \mapsto L^*$ es una involución: aplicada dos veces devuelve el operador de partida. Es el análogo para operadores diferenciales de la propiedad $(A^T)^T = A$ de las matrices.

Una ecuación es autoadjunta cuando coincide con su adjunta, es decir, cuando $\tilde{Q}=Q$ y $\tilde{R}=R$. La primera igualdad exige $2P'-Q=Q$, esto es, $P'=Q$; derivando se obtiene $\tilde{R}=R$ de forma automática. Por tanto, la condición de autoadjunción se reduce a $P'(x)=Q(x)$.

El resultado es una identidad entre operadores. No intervienen condiciones iniciales ni de frontera, y es válido en cualquier intervalo donde $P$ sea dos veces derivable y $Q$ una vez derivable.
