---
title: "Boyce 5.7 Ejercicio 17"
exercise-id: boyce-c05-s07-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 17"
topics:
  - frobenius
competencies:
  - clasificar.punto-singular-regular
  - clasificar.punto-singular-irregular
  - resolver-series.ecuacion-indicial
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 2
statement-status: accepted
solution-status: draft
source-images:
  - c05s07i02-p291.png
  - c05s07i03-p292.png
---

## Enunciado

Considere la ecuación diferencial

$$y'' + \frac{\alpha}{x^s} y' + \frac{\beta}{x^t} y = 0, \tag{i}$$

en donde $\alpha \neq 0$ y $\beta \neq 0$ son números reales y $s$ y $t$ son enteros positivos que, por el momento, son arbitrarios.

a) Demuestre que si $s > 1$ o $t > 2$, entonces el punto $x = 0$ es un punto singular irregular.

b) Intente encontrar una solución de la ecuación (i) de la forma

$$y = \sum_{n=0}^{\infty} a_n x^{r+n}, \quad x > 0. \tag{ii}$$

Demuestre que si $s = 2$ y $t = 2$, entonces existe sólo un valor posible de $r$ para el que existe una solución formal de (i), de la forma (ii).

c) Demuestre que si $s = 1$ y $t = 3$, no existen soluciones de (i), de la forma (ii).

d) Demuestre que los valores máximos de $s$ y $t$ para los que la ecuación indicial es cuadrática en $r$ [y por tanto puede esperarse encontrar dos soluciones de la forma (ii)] son $s = 1$ y $t = 2$. Estas son precisamente las condiciones que distinguen una "singularidad débil", o punto singular regular, de un punto singular irregular, como se definieron en la sección 5.4.

Como nota de advertencia, es necesario señalar que aunque a veces es posible obtener una solución formal en serie de la forma (ii) en un punto singular irregular, la serie puede no tener un radio de convergencia positivo.

## Solución

Se escribe la ecuación (i) en la forma estándar $y''+P(x)y'+Q(x)y=0$, con $P(x)=\alpha x^{-s}$ y $Q(x)=\beta x^{-t}$. Entonces

$$
xP(x)=\alpha x^{1-s},\qquad x^{2}Q(x)=\beta x^{2-t}.
$$

a) Ambas funciones son analíticas en $x=0$ solo si $s\le 1$ y $t\le 2$. Por tanto, si $s>1$ o $t>2$, el punto $x=0$ es un **punto singular irregular**.

b) Si $s=t=2$, la ecuación (i) equivale a $x^{2}y''+\alpha y'+\beta y=0$. El término de exponente mínimo de la serie es $\alpha r a_0x^{r-1}$, de modo que $\alpha r a_0=0$. Como $\alpha\ne0$ y $a_0\ne0$, el único valor posible es

$$
r=0.
$$

c) Si $s=1$ y $t=3$, al multiplicar por $x^{3}$ el término de exponente mínimo es $\beta a_0x^{r}$, lo que exige $\beta a_0=0$. Como $\beta\ne0$ y $a_0\ne0$, no existe solución de la forma (ii).

d) La **ecuación indicial** es cuadrática en $r$ solo cuando el término $r(r-1)a_0x^{r-2}$ de $y''$ interviene en el exponente mínimo, lo que ocurre exactamente si $s=1$ y $t\le 2$. Los valores máximos son, por tanto, $s=1$ y $t=2$, que son las condiciones que definen un **punto singular regular**.

## Resolución

En la forma estándar $y''+P(x)y'+Q(x)y=0$ los coeficientes son

$$
P(x)=\frac{\alpha}{x^{s}},\qquad Q(x)=\frac{\beta}{x^{t}}.
$$

Como $\alpha\ne0$, $\beta\ne0$ y $s,t\ge1$, ninguna de las dos funciones es analítica en $x=0$: el punto es singular.

**Apartado a).** El punto $x=0$ es **singular regular** si los productos $xP(x)$ y $x^{2}Q(x)$ son analíticos en $x=0$. Aquí

$$
xP(x)=\alpha x^{1-s},\qquad x^{2}Q(x)=\beta x^{2-t}.
$$

La función $x^{1-s}$ es analítica en $x=0$ si y solo si $1-s\ge0$, es decir, $s\le1$; la función $x^{2-t}$ lo es si y solo si $2-t\ge0$, es decir, $t\le2$. Si $s>1$, el producto $xP(x)$ tiene un polo en $x=0$; si $t>2$, lo tiene $x^{2}Q(x)$. En cualquiera de los dos casos el punto es singular y no regular, esto es, un **punto singular irregular**.

**Apartado b).** Con $s=t=2$ la ecuación (i), multiplicada por $x^{2}$, es

$$
x^{2}y''+\alpha y'+\beta y=0.
$$

Se sustituye $y=\sum_{n\ge0}a_nx^{r+n}$ con $a_0\ne0$. Las tres contribuciones son

$$
x^{2}y''=\sum_{n\ge0}(r+n)(r+n-1)a_nx^{r+n},\qquad
\alpha y'=\sum_{n\ge0}\alpha(r+n)a_nx^{r+n-1},\qquad
\beta y=\sum_{n\ge0}\beta a_nx^{r+n}.
$$

El exponente mínimo es $r-1$ y proviene únicamente del término $\alpha y'$ con $n=0$. El coeficiente de $x^{r-1}$ debe anularse:

$$
\alpha r\,a_0=0.
$$

Como $\alpha\ne0$ y $a_0\ne0$, resulta $r=0$. Ningún otro valor de $r$ anula el término dominante, de modo que $r=0$ es el único valor posible.

Con $r=0$, el coeficiente de $x^{k}$ para $k\ge0$ es $k(k-1)a_k+\beta a_k+\alpha(k+1)a_{k+1}$. Al anularlo se obtiene la relación

$$
\alpha(k+1)a_{k+1}=-\left[k(k-1)+\beta\right]a_k,\qquad k\ge0,
$$

que para $k=0$ fija $a_1=-\dfrac{\beta}{\alpha}a_0$ y determina después el resto de los coeficientes. Existe, por tanto, una solución formal de la forma (ii), y solo con $r=0$.

**Apartado c).** Con $s=1$ y $t=3$ la ecuación (i), multiplicada por $x^{3}$, es

$$
x^{3}y''+\alpha x^{2}y'+\beta y=0.
$$

Al sustituir la serie,

$$
x^{3}y''=\sum_{n\ge0}(r+n)(r+n-1)a_nx^{r+n+1},\qquad
\alpha x^{2}y'=\sum_{n\ge0}\alpha(r+n)a_nx^{r+n+1},\qquad
\beta y=\sum_{n\ge0}\beta a_nx^{r+n}.
$$

El exponente mínimo es ahora $r$ y proviene solo de $\beta y$ con $n=0$. Su coeficiente debe anularse:

$$
\beta a_0=0.
$$

Como $\beta\ne0$ y $a_0\ne0$, esta igualdad es imposible. No existen soluciones de la forma (ii).

**Apartado d).** Se repite el análisis con $s$ y $t$ arbitrarios. Los términos de exponente mínimo que aporta cada sumando son

$$
y''\to r(r-1)a_0x^{r-2},\qquad
\frac{\alpha}{x^{s}}y'\to \alpha r a_0x^{r-1-s},\qquad
\frac{\beta}{x^{t}}y\to \beta a_0x^{r-t}.
$$

La ecuación indicial se obtiene al anular el coeficiente del exponente mínimo. El factor $r(r-1)$ es el único que aporta un término cuadrático en $r$, y aparece solo si $x^{r-2}$ es uno de los exponentes mínimos. Como $s,t\ge1$,

$$
r-2\le r-1-s \iff s\le1,\qquad r-2\le r-t \iff t\le2.
$$

De acuerdo con $s\ge1$, la primera condición exige $s=1$. En el caso extremal $s=1$ y $t=2$ los tres exponentes coinciden en $r-2$ y la ecuación indicial es

$$
r(r-1)+\alpha r+\beta=r^{2}+(\alpha-1)r+\beta=0,
$$

cuadrática en $r$. En cambio, cuando $s\ge2$ el exponente mínimo procede de $\alpha x^{-s}y'$ o de $\beta x^{-t}y$, y cuando $s=1$ con $t\ge3$ procede de $\beta x^{-t}y$. En todos estos casos el coeficiente del término dominante es lineal en $r$ o constante, de modo que la ecuación indicial no es cuadrática, o bien exige $\beta a_0=0$ y no hay solución formal. En consecuencia, los valores máximos de $s$ y $t$ para los que la ecuación indicial es cuadrática son $s=1$ y $t=2$. Las desigualdades $s\le1$ y $t\le2$ son exactamente las que hacen analíticos a $xP(x)$ y $x^{2}Q(x)$ en $x=0$, es decir, las que definen un **punto singular regular**.

## Observaciones

La ecuación indicial es cuadrática también en el caso $s=1$, $t=1$, donde toma la forma $r(r-1+\alpha)=0$. Este caso no altera los valores máximos: queda por debajo del extremal $s=1$, $t=2$, que es el que fija simultáneamente los límites de $s$ y de $t$.

La relación con la sección 5.4 es directa. Cuando $s=1$ y $t=2$, los productos $xP(x)=\alpha$ y $x^{2}Q(x)=\beta$ son constantes y la ecuación indicial recupera la forma estándar $r(r-1)+p_0r+q_0=0$ con $p_0=\alpha$ y $q_0=\beta$.

La solución formal del apartado b) ilustra la advertencia del enunciado: en un punto singular irregular la serie puede tener radio de convergencia cero. La existencia de la serie no garantiza por sí sola una solución en un intervalo.
