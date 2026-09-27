---
title: "Boyce 2.6 Ejercicio 15"
exercise-id: boyce-c02-s06-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.6, ejercicio 15"
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
statement-status: accepted
solution-status: draft
source-images:
  - c02s06i02-p082.png
---

## Enunciado

Suponga que cierta población obedece la ecuación logística $dN/dt = rN[1 - (N/K)]$.

a) Si $N_0 = K/3$, halle el tiempo $\tau$ en el que se ha duplicado la población inicial. Encuentre el valor de $\tau$ correspondiente a $r = 0.025$ por año.

b) Si $N_0/K = \alpha$, encuentre el tiempo $T$ en el que $N(T)/K = \beta$, en donde $0 < \alpha, \beta < 1$.

## Solución

La solución del problema de valor inicial logístico $N(0)=N_0$ es

$$
N(t)=\frac{K N_0 e^{rt}}{K+N_0\left(e^{rt}-1\right)}
=\frac{K}{1+\dfrac{K-N_0}{N_0}\,e^{-rt}}.
$$

a) Con $N_0=K/3$ la población se duplica en

$$
\tau=\frac{\ln 4}{r}=\frac{2\ln 2}{r}.
$$

Para $r=0.025\ \text{año}^{-1}$,

$$
\tau=\frac{\ln 4}{0.025}\approx 55.45\ \text{años}.
$$

b) Con $N_0/K=\alpha$ y $N(T)/K=\beta$,

$$
T=\frac{1}{r}\ln\!\left[\frac{\beta(1-\alpha)}{\alpha(1-\beta)}\right].
$$

## Resolución

Sea $N(t)$ la población en el instante $t$, con $r>0$ y $K>0$. La ecuación

$$
\frac{dN}{dt}=rN\left(1-\frac{N}{K}\right)
$$

es autónoma y de variables separables. Se separan las variables:

$$
\frac{dN}{N\left(1-\dfrac{N}{K}\right)}=r\,dt.
$$

Para integrar el miembro izquierdo se descompone en fracciones parciales. Como

$$
N\left(1-\frac{N}{K}\right)=\frac{N(K-N)}{K},
$$

resulta

$$
\frac{1}{N\left(1-\dfrac{N}{K}\right)}=\frac{K}{N(K-N)}=\frac{1}{N}+\frac{1}{K-N}.
$$

Integrando ambos miembros,

$$
\begin{aligned}
\int\left(\frac{1}{N}+\frac{1}{K-N}\right)dN &= \int r\,dt, \\
\ln|N|-\ln|K-N| &= rt+C_1, \\
\ln\left|\frac{N}{K-N}\right| &= rt+C_1.
\end{aligned}
$$

Para $0<N<K$ puede omitirse el valor absoluto, y la solución general queda

$$
\frac{N}{K-N}=C\,e^{rt}, \qquad C=e^{C_1}>0.
$$

La condición inicial $N(0)=N_0$ fija $C=\dfrac{N_0}{K-N_0}$, de modo que

$$
\frac{N(t)}{K-N(t)}=\frac{N_0}{K-N_0}\,e^{rt}. \tag{1}
$$

Al despejar $N(t)$ se obtiene la solución explícita

$$
N(t)=\frac{K N_0 e^{rt}}{K-N_0+N_0 e^{rt}}.
$$

a) Con $N_0=K/3$ se busca el instante $\tau$ en que $N(\tau)=2N_0=2K/3$. En la relación (1), la condición inicial da

$$
\frac{N_0}{K-N_0}=\frac{K/3}{2K/3}=\frac{1}{2},
$$

y en $t=\tau$,

$$
\frac{N(\tau)}{K-N(\tau)}=\frac{2K/3}{K/3}=2.
$$

Sustituyendo en (1),

$$
2=\frac{1}{2}\,e^{r\tau}
\quad\Longrightarrow\quad
e^{r\tau}=4
\quad\Longrightarrow\quad
\tau=\frac{\ln 4}{r}.
$$

Para $r=0.025$ por año,

$$
\tau=\frac{\ln 4}{0.025}\approx 55.45\ \text{años}.
$$

b) Sean $N_0=\alpha K$ y $N(T)=\beta K$, con $0<\alpha,\beta<1$. La relación (1) en $t=T$ da

$$
\frac{\beta K}{K-\beta K}=\frac{\alpha K}{K-\alpha K}\,e^{rT}
\quad\Longrightarrow\quad
\frac{\beta}{1-\beta}=\frac{\alpha}{1-\alpha}\,e^{rT}.
$$

Al despejar $T$,

$$
e^{rT}=\frac{\beta(1-\alpha)}{\alpha(1-\beta)}
\quad\Longrightarrow\quad
T=\frac{1}{r}\ln\!\left[\frac{\beta(1-\alpha)}{\alpha(1-\beta)}\right].
$$

Comprobación. La relación (1) define de forma implícita a $N(t)$. Derivando respecto de $t$,

$$
\frac{K\,N'(t)}{(K-N)^2}=\frac{N_0}{K-N_0}\,r\,e^{rt}
=\frac{r\,N}{K-N},
$$

de donde $N'=\dfrac{rN(K-N)}{K}=rN\left(1-\dfrac{N}{K}\right)$, que es la ecuación logística. Además, en $t=0$ la relación (1) devuelve $N(0)=N_0$. La fórmula del inciso b) reproduce el resultado del inciso a) al tomar $\alpha=1/3$ y $\beta=2/3$, pues

$$
\frac{\beta(1-\alpha)}{\alpha(1-\beta)}
=\frac{(2/3)(2/3)}{(1/3)(1/3)}=4.
$$

## Observaciones

La fórmula de $T$ es decreciente respecto de $\alpha$ y creciente respecto de $\beta$: cuanto menor es la población inicial y mayor la fracción final pedida, más tiempo se requiere. El tiempo de duplicación $\tau$ no depende de $K$; la capacidad de carga reescala el nivel de población, pero no el tiempo que tarda en duplicarse una población que parte de $N_0=K/3$.

La separación de variables divide entre $N$ y $K-N$, por lo que las soluciones de equilibrio $N\equiv 0$ y $N\equiv K$ se tratan aparte. Ninguna de ellas es la que corresponde a los datos $0<N_0<K$; la solución obtenida permanece siempre en el intervalo $(0,K)$ y tiende a $K$ de forma asintótica. Para poblaciones muy inferiores a $K$, la solución se aproxima al crecimiento exponencial $N(t)\approx N_0 e^{rt}$.
