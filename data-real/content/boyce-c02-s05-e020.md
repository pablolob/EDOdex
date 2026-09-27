
## Enunciado

Un tanque contiene originalmente 100 gal de agua limpia; a continuación se vierte en el tanque agua que contiene $\frac{1}{2}$ lb de sal por galón, a razón de 2 gal/min y se deja que la mezcla abandone el tanque a la misma razón. Al cabo de 10 minutos se detiene el proceso y se introduce al tanque agua limpia a razón de 2 gal/min y nuevamente se deja que la mezcla abandone el tanque a la misma razón. Encuentre la cantidad de sal en el tanque al cabo de 20 minutos.

## Solución

$$
Q(20)=50\left(e^{-0.2}-e^{-0.4}\right)\approx 7.42\ \text{lb}.
$$

## Resolución

Sea $Q(t)$ la cantidad de sal en el tanque, en libras, al cabo de $t$ minutos. Como las razones de entrada y de salida son iguales a $2$ gal/min en ambas etapas, el volumen permanece constante e igual a $100$ gal.

**Primera etapa** ($0\le t\le 10$). Entra sal a razón de $\frac{1}{2}\cdot 2=1$ lb/min y sale a razón de $\frac{Q}{100}\cdot 2=\frac{Q}{50}$ lb/min. El modelo es la **ecuación lineal de primer orden**

$$
\frac{dQ}{dt}=1-\frac{Q}{50},
\qquad
Q(0)=0.
$$

En la forma estándar $Q'+\frac{1}{50}Q=1$, el **factor integrante** es $\mu(t)=e^{t/50}$. Al multiplicar la ecuación por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left(e^{t/50}Q\right)=e^{t/50}.
$$

La integración da $e^{t/50}Q=50\,e^{t/50}+C$, luego

$$
Q(t)=50+Ce^{-t/50}.
$$

La condición inicial $Q(0)=0$ fija $C=-50$, de modo que

$$
Q(t)=50\left(1-e^{-t/50}\right),
\qquad 0\le t\le 10.
$$

Al terminar esta etapa, $Q(10)=50\left(1-e^{-0.2}\right)$.

**Segunda etapa** ($t\ge 10$). Entra agua limpia, sin sal. La sal solo abandona el tanque, y la cantidad inicial de esta etapa es la cantidad final de la anterior:

$$
\frac{dQ}{dt}=-\frac{Q}{50},
\qquad
Q(10)=50\left(1-e^{-0.2}\right).
$$

Esta ecuación separable tiene por solución

$$
Q(t)=Q(10)\,e^{-(t-10)/50}.
$$

Al evaluar en $t=20$,

$$
Q(20)=50\left(1-e^{-0.2}\right)e^{-10/50}
=50\left(e^{-0.2}-e^{-0.4}\right)\approx 7.42\ \text{lb}.
$$

## Observaciones

Durante la primera etapa la cantidad de sal crece porque la entrada de sal supera a la salida; en la segunda etapa decrece porque solo hay salida. La cantidad de sal es continua en $t=10$ y alcanza su valor máximo en ese instante.

El volumen permanece constante porque las razones de entrada y de salida son idénticas en todo el proceso, incluso después del cambio en $t=10$.

La solución es válida para todo $t\ge 0$. Cuando $t\to\infty$, la cantidad de sal tiende a cero de forma exponencial.
