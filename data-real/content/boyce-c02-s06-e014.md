
## Enunciado

Considere la ecuación $dN/dt = F(N)$ y suponga que $N_1$ es un punto crítico; es decir, que $F(N_1) = 0$. Demuestre que la solución de equilibrio constante $\phi(t) = N_1$ es estable si $F'(N_1) < 0$ e inestable si $F'(N_1) > 0$.

## Solución

El signo de $F'$ en el punto crítico decide la estabilidad de la solución de equilibrio:

$$
\begin{aligned}
F'(N_1)<0 &\ \Longrightarrow\ \phi(t)=N_1 \text{ es }\textbf{estable},\\
F'(N_1)>0 &\ \Longrightarrow\ \phi(t)=N_1 \text{ es }\textbf{inestable}.
\end{aligned}
$$

## Resolución

La demostración solo emplea el **análisis del signo de $F$** en un entorno de $N_1$. Se supone que $F'$ es continua en $N_1$, de modo que $F'$ conserva su signo en un intervalo alrededor del punto crítico.

**Caso $F'(N_1)<0$.** Como $F'(N_1)<0$ y $F'$ es continua, existe $\eta>0$ tal que $F'(N)<0$ para todo $N\in(N_1-\eta,N_1+\eta)$. En ese intervalo $F$ es estrictamente decreciente. Puesto que $F(N_1)=0$, el signo de $F$ queda determinado:

$$
\begin{aligned}
N_1<N<N_1+\eta &\ \Longrightarrow\ F(N)<F(N_1)=0,\\
N_1-\eta<N<N_1 &\ \Longrightarrow\ F(N)>F(N_1)=0.
\end{aligned}
$$

Sea $\varepsilon>0$ y sea $N(0)=N_0$ con $|N_0-N_1|<\delta$, donde $\delta=\min\{\varepsilon,\eta\}$. Entonces $N_0\in(N_1-\eta,N_1+\eta)$ y, mientras la solución permanezca en ese intervalo,

$$
\begin{aligned}
N>N_1 &\ \Longrightarrow\ \frac{dN}{dt}=F(N)<0,\\
N<N_1 &\ \Longrightarrow\ \frac{dN}{dt}=F(N)>0.
\end{aligned}
$$

A ambos lados el campo apunta hacia $N_1$: por encima del equilibrio la solución decrece y por debajo crece. Por tanto la solución no alcanza los extremos $N_1\pm\eta$ y permanece en el intervalo comprendido entre $N_0$ y $N_1$. En consecuencia,

$$
|N(t)-N_1|\le|N_0-N_1|<\delta\le\varepsilon \qquad (t\ge 0).
$$

Como para cada $\varepsilon>0$ existe un $\delta>0$ con esa propiedad, se satisface la definición de estabilidad: $\phi(t)=N_1$ es estable.

**Caso $F'(N_1)>0$.** De forma análoga, existe $\eta>0$ tal que $F'(N)>0$ en $(N_1-\eta,N_1+\eta)$, de modo que $F$ es estrictamente creciente y

$$
\begin{aligned}
N_1<N<N_1+\eta &\ \Longrightarrow\ F(N)>0,\\
N_1-\eta<N<N_1 &\ \Longrightarrow\ F(N)<0.
\end{aligned}
$$

Ahora el campo apunta en sentido contrario a $N_1$. Se fija $\varepsilon$ con $0<\varepsilon<\eta$ y se elige la condición inicial $N_0=N_1+\varepsilon/2$. Mientras la solución permanezca en $[N_0,N_1+\varepsilon]$, la función $F$ es continua y estrictamente positiva en ese intervalo compacto, por lo que existe

$$
m=\min_{N\in[N_0,\,N_1+\varepsilon]}F(N)>0.
$$

Entonces $dN/dt=F(N(t))\ge m$ y, al integrar,

$$
N(t)\ge N_0+mt.
$$

Para $t$ suficientemente grande se tiene $N(t)>N_1+\varepsilon$, es decir, la solución abandona la vecindad $(N_1-\varepsilon,N_1+\varepsilon)$. Por simetría ocurre lo mismo si se parte de $N_0=N_1-\varepsilon/2$. Por tanto ninguna vecindad de $N_1$ es estable y $\phi(t)=N_1$ es inestable.

## Observaciones

El criterio solo es concluyente cuando $F'(N_1)\ne 0$. Si $F'(N_1)=0$ no decide nada: $dN/dt=-(N-N_1)^3$ tiene equilibrio asintóticamente estable, mientras que $dN/dt=(N-N_1)^2$ tiene equilibrio inestable.

Cuando $F'(N_1)<0$ el argumento muestra además que $N(t)\to N_1$ si $t\to\infty$; la estabilidad es asintótica, no solo estable. Este resultado es la versión escalar del criterio de linealización: cerca de $N_1$ la ecuación se comporta como $dN/dt\approx F'(N_1)(N-N_1)$, de modo que el signo de $F'$ fija el sentido del movimiento.
