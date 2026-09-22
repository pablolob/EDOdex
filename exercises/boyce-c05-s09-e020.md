---
title: "Boyce 5.9 Ejercicio 20"
exercise-id: boyce-c05-s09-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 20"
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

20. $t^2 \operatorname{senh} at$

## Solución

$$
\mathcal{L}\{t^{2}\sinh at\} = \frac{2a(3s^{2}+a^{2})}{(s^{2}-a^{2})^{3}}, \qquad s>|a|.
$$

## Resolución

Se parte de la definición de la transformada de Laplace,

$$
\mathcal{L}\{t^{2}\sinh at\} = \int_{0}^{\infty} e^{-st}t^{2}\sinh at\,dt.
$$

Con la identidad $\sinh at = \dfrac{e^{at}-e^{-at}}{2}$ y la linealidad de la integral,

$$
\mathcal{L}\{t^{2}\sinh at\}
= \frac{1}{2}\int_{0}^{\infty} t^{2}e^{-(s-a)t}\,dt
-\frac{1}{2}\int_{0}^{\infty} t^{2}e^{-(s+a)t}\,dt.
$$

Para $p>0$ se define $J(p)=\int_{0}^{\infty} t^{2}e^{-pt}\,dt$. La **integración por partes** con $u=t^{2}$ y $dv=e^{-pt}\,dt$ da

$$
J(p)
= \left[-\frac{t^{2}e^{-pt}}{p}\right]_{0}^{\infty}
+\frac{2}{p}\int_{0}^{\infty} t e^{-pt}\,dt.
$$

El término de frontera se anula porque $p>0$ y $t^{2}e^{-pt}\to 0$ cuando $t\to\infty$. Una segunda integración por partes, ahora con $u=t$ y $dv=e^{-pt}\,dt$, produce

$$
\int_{0}^{\infty} t e^{-pt}\,dt
= \left[-\frac{t e^{-pt}}{p}\right]_{0}^{\infty}
+\frac{1}{p}\int_{0}^{\infty} e^{-pt}\,dt
= \frac{1}{p^{2}}.
$$

En consecuencia, $J(p)=\dfrac{2}{p^{3}}$. Al aplicar este resultado con $p=s-a$ y $p=s+a$, ambas integrales convergen si $s>|a|$, y

$$
\begin{aligned}
\mathcal{L}\{t^{2}\sinh at\}
&= \frac{1}{2}\cdot\frac{2}{(s-a)^{3}}
-\frac{1}{2}\cdot\frac{2}{(s+a)^{3}} \\
&= \frac{1}{(s-a)^{3}}-\frac{1}{(s+a)^{3}}.
\end{aligned}
$$

Se combinan las dos fracciones con el denominador común $(s^{2}-a^{2})^{3}$:

$$
\frac{1}{(s-a)^{3}}-\frac{1}{(s+a)^{3}}
= \frac{(s+a)^{3}-(s-a)^{3}}{(s^{2}-a^{2})^{3}}
= \frac{2a(3s^{2}+a^{2})}{(s^{2}-a^{2})^{3}}.
$$

## Observaciones

Las expresiones $\dfrac{1}{(s-a)^{3}}-\dfrac{1}{(s+a)^{3}}$ y $\dfrac{2a(3s^{2}+a^{2})}{(s^{2}-a^{2})^{3}}$ son equivalentes. La región de convergencia $s>|a|$ es la común a las dos integrales exponenciales que aparecen. Con $a=0$ la función $t^{2}\sinh at$ es idénticamente nula y ambas expresiones se anulan, como corresponde.
