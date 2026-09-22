---
title: "Boyce 5.9 Ejercicio 15"
exercise-id: boyce-c05-s09-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - integracion.por-partes
  - calculo-avanzado.integrales-impropias
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s09i01-p314.png
---

## Enunciado

En cada uno de los problemas 15 a 20, aplique la integración por partes para hallar la transformada de Laplace de la función dada; $n$ es un entero positivo y $a$ es una constante real.

15. $te^{at}$

## Solución

La transformada de Laplace de $te^{at}$ es

$$
\mathcal{L}\{te^{at}\}=\frac{1}{(s-a)^{2}}, \qquad \operatorname{Re}(s)>a.
$$

## Resolución

Se parte de la definición de la transformada y se agrupan las exponenciales en $t$:

$$
\mathcal{L}\{te^{at}\}
=\int_{0}^{\infty} e^{-st}\,t\,e^{at}\,dt
=\int_{0}^{\infty} t\,e^{-(s-a)t}\,dt.
$$

Se integra por partes con $u=t$ y $dv=e^{-(s-a)t}\,dt$. Entonces $du=dt$ y $v=-\dfrac{e^{-(s-a)t}}{s-a}$, de modo que

$$
\begin{aligned}
\mathcal{L}\{te^{at}\}
&=\left[-\frac{t\,e^{-(s-a)t}}{s-a}\right]_{0}^{\infty}
+\frac{1}{s-a}\int_{0}^{\infty} e^{-(s-a)t}\,dt \\
&=0+\frac{1}{s-a}\cdot\frac{1}{s-a}
=\frac{1}{(s-a)^{2}}.
\end{aligned}
$$

El término de frontera se anula: en $t=0$ vale $0$, y para $\operatorname{Re}(s)>a$ se tiene $t\,e^{-(s-a)t}\to 0$ cuando $t\to\infty$. Bajo esa misma condición la integral restante converge y vale $1/(s-a)$.

## Observaciones

La transformada existe en el semiplano $\operatorname{Re}(s)>a$; sobre el eje real se reduce a $s>a$. Con $a=0$ la fórmula da $\mathcal{L}\{t\}=1/s^{2}$, coherente con el par básico $\mathcal{L}\{t^{n}\}=n!/s^{n+1}$ para $n=1$. El resultado coincide con el que proporciona la propiedad de derivación de la transformada, $\mathcal{L}\{t\,f(t)\}=-F'(s)$, aplicada a $f(t)=e^{at}$.
