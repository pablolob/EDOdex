---
title: "Boyce 6.5 Ejercicio 7"
exercise-id: boyce-c06-s05-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 7"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
hidden-competencies:
  - resolver-analiticamente.convolucion
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.convolucion
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c06s05i02-p350.png
---

## Enunciado

En cada uno de los problemas 4 a 7 encuentre la transformada de Laplace de la función dada.

7. $f(t) = \int_0^t \operatorname{sen}(t - \tau)\cos \tau \,d\tau$

## Solución

$$
\mathcal{L}\{f(t)\} = \frac{s}{(s^2+1)^2}, \qquad s > 0.
$$

## Resolución

La integral del enunciado se calcula de forma directa. Con la identidad trigonométrica del producto,

$$
\begin{aligned}
\sin(t-\tau)\cos\tau
&=\frac{1}{2}\left[\sin\bigl((t-\tau)+\tau\bigr)+\sin\bigl((t-\tau)-\tau\bigr)\right] \\
&=\frac{1}{2}\left[\sin t+\sin(t-2\tau)\right].
\end{aligned}
$$

Al integrar en $\tau$ entre $0$ y $t$,

$$
f(t)=\frac{1}{2}\int_0^t \sin t\,d\tau+\frac{1}{2}\int_0^t \sin(t-2\tau)\,d\tau .
$$

La primera integral vale $\frac{1}{2}t\sin t$. La segunda es nula, pues

$$
\int_0^t \sin(t-2\tau)\,d\tau
=\frac{1}{2}\left[\cos(t-2\tau)\right]_{\tau=0}^{\tau=t}
=\frac{1}{2}(\cos t-\cos t)=0.
$$

Por tanto, $f(t)=\frac{1}{2}t\sin t$. Se emplea la propiedad de la transformada de una función multiplicada por $t$,

$$
\mathcal{L}\{t\,g(t)\}=-\frac{d}{ds}\,\mathcal{L}\{g(t)\},
$$

con $g(t)=\sin t$ y $\mathcal{L}\{\sin t\}=\frac{1}{s^2+1}$. Entonces

$$
\mathcal{L}\{t\sin t\}
=-\frac{d}{ds}\left(\frac{1}{s^2+1}\right)
=\frac{2s}{(s^2+1)^2}.
$$

Al multiplicar por el factor $\frac{1}{2}$,

$$
\mathcal{L}\{f(t)\}=\frac{1}{2}\cdot\frac{2s}{(s^2+1)^2}=\frac{s}{(s^2+1)^2}, \qquad s>0.
$$

## Observaciones

La transformada converge para $s>0$; la función $f$ es continua y de orden exponencial.

### Método alternativo: teorema de convolución

La integral del enunciado es la convolución $(\sin*\cos)(t)$. Con el teorema de convolución, la transformada se obtiene directamente como el producto de las transformadas de los dos factores:

$$
\mathcal{L}\{f(t)\}=\mathcal{L}\{\sin t\}\,\mathcal{L}\{\cos t\}
=\frac{1}{s^2+1}\cdot\frac{s}{s^2+1}=\frac{s}{(s^2+1)^2}.
$$
