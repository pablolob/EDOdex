
## Enunciado

Demuestre que si $a$ y $\lambda$ son constantes positivas y $b$ es cualquier número real, entonces toda solución de la ecuación

$$y' + ay = be^{-\lambda x}$$

tiene la propiedad de que $y \to 0$ cuando $x \to \infty$.

Sugerencia: Considere por separado los casos $a = \lambda$ y $a \neq \lambda$.

## Solución

La ecuación es **lineal de primer orden**. Su solución general es

$$
y(x)=
\begin{cases}
\dfrac{b}{a-\lambda}\,e^{-\lambda x}+C\,e^{-ax}, & a\ne\lambda,\\[4pt]
(bx+C)\,e^{-ax}, & a=\lambda,
\end{cases}
$$

con $C$ una constante arbitraria. Como $a>0$ y $\lambda>0$, en ambos casos $y(x)\to 0$ cuando $x\to\infty$; por tanto, toda solución tiene esa propiedad.

## Resolución

La ecuación $y'+ay=be^{-\lambda x}$ es **lineal de primer orden**. Se resuelve con el **método del factor integrante**. Con $P(x)=a$,

$$
\mu(x)=\exp\!\left(\int a\,dx\right)=e^{ax}.
$$

Al multiplicar ambos miembros por $\mu(x)=e^{ax}$, el miembro izquierdo es la derivada del producto $e^{ax}y$, y el derecho se simplifica:

$$
\frac{d}{dx}\!\left(e^{ax}y\right)=b\,e^{ax}e^{-\lambda x}=b\,e^{(a-\lambda)x}.
$$

La integración del miembro derecho depende de si el exponente $a-\lambda$ se anula.

**Caso $a\ne\lambda$.** El exponente $a-\lambda$ no es cero, de modo que

$$
e^{ax}y=\frac{b}{a-\lambda}\,e^{(a-\lambda)x}+C,
$$

y al despejar $y$,

$$
y(x)=\frac{b}{a-\lambda}\,e^{-\lambda x}+C\,e^{-ax}.
$$

Ambos sumandos tienden a cero cuando $x\to\infty$: $e^{-\lambda x}\to 0$ porque $\lambda>0$ y $e^{-ax}\to 0$ porque $a>0$. En consecuencia, $y(x)\to 0$.

**Caso $a=\lambda$.** Entonces $e^{(a-\lambda)x}=e^{0}=1$ y la ecuación integrada es

$$
e^{ax}y=bx+C,
$$

es decir,

$$
y(x)=(bx+C)\,e^{-ax}.
$$

El factor $bx+C$ crece a lo sumo linealmente, mientras que $e^{-ax}\to 0$ con $a>0$; el producto tiende a cero. En efecto, $\lim_{x\to\infty}x\,e^{-ax}=0$ para $a>0$, luego $y(x)\to 0$.

La ecuación es lineal, así que la familia obtenida, con su única constante arbitraria $C$, contiene todas las soluciones. Por tanto, toda solución de $y'+ay=be^{-\lambda x}$ cumple $y\to 0$ cuando $x\to\infty$.

## Observaciones

El caso $a=\lambda$ se denomina de resonancia: el término forzante $be^{-\lambda x}$ tiene la misma tasa de decaimiento que la solución de la ecuación homogénea $y'+ay=0$. La integración produce entonces un factor lineal $bx+C$, pero el decaimiento exponencial $e^{-ax}$ domina y el límite sigue siendo cero.

La constante $C$ queda libre porque el enunciado no impone ninguna condición inicial; el resultado vale para cualquier valor de $C$ y, por tanto, para toda solución.
