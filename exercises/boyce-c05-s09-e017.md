---
title: "Boyce 5.9 Ejercicio 17"
exercise-id: boyce-c05-s09-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
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

17. $t \cosh at$

## Solución

$$
\mathcal{L}\{t\cosh at\}=\frac{s^{2}+a^{2}}{(s^{2}-a^{2})^{2}}, \qquad s>|a|.
$$

## Resolución

Se parte de la definición de la transformada y de la identidad $\cosh at=\dfrac{e^{at}+e^{-at}}{2}$. Por linealidad de la integral,

$$
\mathcal{L}\{t\cosh at\}
=\int_{0}^{\infty} e^{-st}\,t\cosh at\,dt
=\frac{1}{2}\int_{0}^{\infty} t\,e^{-(s-a)t}\,dt
+\frac{1}{2}\int_{0}^{\infty} t\,e^{-(s+a)t}\,dt.
$$

Cada integral es del tipo $\displaystyle\int_{0}^{\infty} t\,e^{-\alpha t}\,dt$ con $\alpha>0$. La **integración por partes** con $u=t$ y $dv=e^{-\alpha t}\,dt$ da $du=dt$ y $v=-\dfrac{1}{\alpha}e^{-\alpha t}$, de modo que

$$
\int_{0}^{\infty} t\,e^{-\alpha t}\,dt
=\left[-\frac{t}{\alpha}e^{-\alpha t}\right]_{0}^{\infty}
+\frac{1}{\alpha}\int_{0}^{\infty} e^{-\alpha t}\,dt.
$$

El término de frontera se anula: en $t=0$ porque $t=0$, y en $t\to\infty$ porque la exponencial decae más rápido que el factor lineal cuando $\alpha>0$. Como $\displaystyle\int_{0}^{\infty} e^{-\alpha t}\,dt=\frac{1}{\alpha}$, resulta

$$
\int_{0}^{\infty} t\,e^{-\alpha t}\,dt=\frac{1}{\alpha^{2}}.
$$

Al aplicar este resultado con $\alpha=s-a$ y $\alpha=s+a$, ambas positivas si $s>|a|$,

$$
\mathcal{L}\{t\cosh at\}
=\frac{1}{2}\left(\frac{1}{(s-a)^{2}}+\frac{1}{(s+a)^{2}}\right)
=\frac{1}{2}\cdot\frac{(s+a)^{2}+(s-a)^{2}}{(s^{2}-a^{2})^{2}}.
$$

La suma del numerador es $(s+a)^{2}+(s-a)^{2}=2s^{2}+2a^{2}=2(s^{2}+a^{2})$. Por tanto,

$$
\mathcal{L}\{t\cosh at\}=\frac{s^{2}+a^{2}}{(s^{2}-a^{2})^{2}}.
$$

## Observaciones

La transformada converge en la semirrecta $s>|a|$, la más restrictiva de las dos integrales exponenciales que intervienen. La función $t\cosh at$ es continua en $[0,\infty)$ y de orden exponencial, así que la transformada existe en esa región.

El caso $a=0$ es consistente: $\cosh 0=1$ y la fórmula se reduce a $\mathcal{L}\{t\}=1/s^{2}$.
