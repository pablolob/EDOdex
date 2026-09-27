---
title: "Zill Repaso C3 Ejercicio 2"
exercise-id: zill-c03-sr-e002
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 3, ejercicio 2"
language: es
topics:
  - primer-orden
source-images:
  - c03sri01-p127.png
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
statement-status: accepted
---

## Enunciado

**Responda los problemas 1 y 2 sin consultar las respuestas del libro. Llene los espacios en blanco y responda verdadero o falso.**

2. Si la rapidez de desintegración de una sustancia radiactiva es proporcional a la cantidad $A(t)$ que queda en el tiempo $t$, entonces la vida media de la sustancia es necesariamente $T = -(\ln 2)/k$. La rapidez de decaimiento de la sustancia en el tiempo $t = T$ es un medio de la rapidez de decaimiento en $t = 0$. ________

## Solución

La afirmación es **verdadera**. El modelo $dA/dt=kA$, con $k<0$, conduce a

$$
T=-\frac{\ln 2}{k},
$$

y la rapidez de decaimiento $|dA/dt|=-kA(t)$ se reduce a la mitad al pasar de $t=0$ a $t=T$, porque la cantidad presente también se reduce a la mitad. El espacio se completa con **verdadero**.

## Resolución

La rapidez de desintegración es proporcional a la cantidad presente $A(t)$, así que el modelo es

$$
\frac{dA}{dt}=kA,
$$

con $k<0$ para un decaimiento. La ecuación es **lineal de primer orden** y también **separable**. Se resuelve por **separación de variables**:

$$
\frac{dA}{A}=k\,dt
\quad\Longrightarrow\quad
\ln|A|=kt+C.
$$

Al despejar $A$ y aplicar la condición inicial $A(0)=A_0$ se obtiene

$$
A(t)=A_0e^{kt}.
$$

La vida media $T$ es el tiempo en que la cantidad se reduce a la mitad, $A(T)=A_0/2$. Como $A_0>0$,

$$
A_0e^{kT}=\frac{A_0}{2}
\quad\Longrightarrow\quad
e^{kT}=\frac{1}{2}
\quad\Longrightarrow\quad
kT=-\ln 2.
$$

Por tanto,

$$
T=-\frac{\ln 2}{k},
$$

que es positiva porque $k<0$. La primera afirmación es verdadera.

La rapidez de decaimiento en el instante $t$ es el valor absoluto de la derivada, $R(t)=-dA/dt=-kA(t)$. En $t=0$,

$$
R(0)=-kA(0)=-kA_0.
$$

En $t=T$ la cantidad es $A(T)=A_0/2$, de modo que

$$
R(T)=-kA(T)=-k\frac{A_0}{2}=\frac{R(0)}{2}.
$$

La segunda afirmación también es verdadera. Al ser verdaderas ambas partes de la oración, el espacio en blanco se completa con **verdadero**.

## Observaciones

La constante de proporcionalidad es negativa: $k<0$. Si el modelo se escribiera como $dA/dt=-\lambda A$ con $\lambda>0$, la vida media sería $T=(\ln 2)/\lambda$, que es el mismo resultado con $\lambda=-k$.

Las dos afirmaciones del enunciado son dos lecturas de la misma ley exponencial: como la rapidez de decaimiento es proporcional a la cantidad presente, reducir la cantidad a la mitad reduce la rapidez a la mitad. El resultado no depende de la cantidad inicial $A_0$.
