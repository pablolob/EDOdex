---
title: "Boyce 6.1 Ejercicio 37"
exercise-id: boyce-c06-s01-e037
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 37"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - integracion.por-partes
  - integracion.teorema-fundamental-calculo
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i03-p326.png
  - c06s01i04-p327.png
---

## Enunciado

Suponga que

$$g(t) = \int_0^t f(\tau)\,d\tau.$$

Si $G(s)$ y $F(s)$ son las transformadas de Laplace de $g(t)$ y $f(t)$, respectivamente, demuestre que

$$G(s) = F(s)/s.$$

## Solución

Bajo la hipótesis de que $f$ es seccionalmente continua y de orden exponencial, la transformada de Laplace de $g$ satisface

$$
G(s)=\frac{F(s)}{s}.
$$

## Resolución

Por la definición de la transformada de Laplace,

$$
G(s)=\int_0^\infty e^{-st}g(t)\,dt=\int_0^\infty e^{-st}\left(\int_0^t f(\tau)\,d\tau\right)dt.
$$

Se integra por partes con

$$
u=g(t), \qquad dv=e^{-st}\,dt, \qquad du=f(t)\,dt, \qquad v=-\frac{e^{-st}}{s}.
$$

La igualdad $du=g'(t)\,dt=f(t)\,dt$ se sigue del **teorema fundamental del cálculo**. Entonces

$$
\begin{aligned}
G(s)
&= \left[-\frac{e^{-st}}{s}\,g(t)\right]_{0}^{\infty}+\frac{1}{s}\int_0^\infty e^{-st}f(t)\,dt \\
&= -\frac{1}{s}\lim_{t\to\infty}e^{-st}g(t)+\frac{1}{s}\,g(0)+\frac{F(s)}{s}.
\end{aligned}
$$

El término de frontera en $t=0$ se anula porque

$$
g(0)=\int_0^0 f(\tau)\,d\tau=0.
$$

Para el límite cuando $t\to\infty$ se usa que la integral de una función de orden exponencial es también de orden exponencial. Si $|f(t)|\le Me^{at}$, entonces

$$
|g(t)|\le M\int_0^t e^{a\tau}\,d\tau,
$$

que crece a lo sumo como $e^{at}$ si $a>0$ y como $t$ si $a\le 0$; ambas son de orden exponencial. En consecuencia, para $s$ suficientemente grande,

$$
\lim_{t\to\infty}e^{-st}g(t)=0.
$$

Sustituyendo en la expresión de $G(s)$,

$$
G(s)=\frac{F(s)}{s}.
$$

## Observaciones

El resultado expresa que integrar $f$ equivale a dividir su transformada entre $s$. Es el análogo de la propiedad de la derivada, que multiplica por $s$ y resta los valores iniciales.

La identidad es válida en la región $s>a$ donde convergen ambas transformadas. La demostración usa que $f$ es seccionalmente continua y de orden exponencial, hipótesis que asegura la existencia de $F(s)$ y de $G(s)$ y la anulación del término de frontera.
