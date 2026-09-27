
## Enunciado

Considere la ecuación diferencial $dP/dt = f(P)$, donde
$$f(P) = -0.5P^3 - 1.7P + 3.4.$$
La función $f(P)$ tiene una raíz real, como se muestra en la figura 2.R.3. Sin intentar resolver la ecuación diferencial, estime el valor de $\lim_{t \to \infty} P(t)$.

![Gráfica del problema 16 (FIGURA 2.R.3)](c02sri01-p094.png)

## Solución

$$
\boxed{\lim_{t\to\infty}P(t)=P^*\approx 1.32}
$$

donde $P^*$ es la única raíz real de $f$, que a su vez es el único punto de equilibrio de la ecuación.

## Resolución

La ecuación es **autónoma**, porque el miembro derecho $f(P)$ no depende de $t$. Los equilibrios son las raíces de $f$. La función

$$
f(P)=-0.5P^3-1.7P+3.4
$$

es un polinomio de grado impar con coeficiente principal negativo, de modo que $f(P)\to+\infty$ cuando $P\to-\infty$ y $f(P)\to-\infty$ cuando $P\to+\infty$. Su derivada,

$$
f'(P)=-1.5P^2-1.7<0
$$

es negativa para todo $P$, luego $f$ es estrictamente decreciente. En consecuencia $f$ corta una sola vez al eje $P$: existe una única raíz real $P^*$.

El signo de $f$ determina el movimiento de $P(t)$:

$$
\begin{aligned}
P<P^* &\implies f(P)>0 \implies P(t) \text{ crece},\\
P>P^* &\implies f(P)<0 \implies P(t) \text{ decrece}.
\end{aligned}
$$

Así, las soluciones por debajo de $P^*$ aumentan y las que están por encima disminuyen, siempre hacia $P^*$. El punto de equilibrio $P\equiv P^*$ es por tanto un **atractor** y toda solución tiende a él,

$$
\lim_{t\to\infty}P(t)=P^*.
$$

La raíz se localiza sin resolver la ecuación diferencial. Igualando $f(P)=0$ y multiplicando por $10$,

$$
5P^3+17P-34=0.
$$

Como $f(1.32)=0.006\,016>0$ y $f(1.33)=-0.037\,32<0$, la raíz está en el intervalo $(1.32,1.33)$. Una iteración de Newton desde $P=1.32$ da

$$
P^*\approx 1.32-\frac{f(1.32)}{f'(1.32)}\approx 1.3214.
$$

Por tanto el valor límite es $P^*\approx 1.32$. Solo la solución constante $P(t)\equiv P^*$ es de equilibrio; las demás se aproximan a ella de forma monótona.

## Observaciones

El límite no depende del valor inicial, salvo el caso $P(0)=P^*$, en el que la solución permanece constante. La raíz es un atractor porque $f'(P^*)<0$; este criterio lineal reproduce el análisis por signos.

### Método alternativo: linealización

Alrededor de $P^*$ se escribe $u=P-P^*$. Como $f(P^*)=0$,

$$
u'=f(P)\approx f'(P^*)u,
$$

con $f'(P^*)=-1.5(P^*)^2-1.7<0$. La solución $u(t)=u(0)e^{f'(P^*)t}$ tiende a $0$, lo que confirma que $P(t)\to P^*$. Este razonamiento no proporciona el valor numérico de $P^*$; para ello sigue siendo necesario localizar la raíz.
