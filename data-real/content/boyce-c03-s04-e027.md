
## Enunciado

Si las funciones $y_1$ y $y_2$ son soluciones linealmente independientes de $y'' + p(x)y' + q(x)y = 0$, demuestre que entre ceros consecutivos de $y_1$ existe uno y sólo un cero de $y_2$. Observe que este resultado queda ilustrado por las soluciones $y_1(x) = \cos x$ y $y_2(x) = \sin x$ de la ecuación $y'' + y = 0$.

## Solución

Entre dos ceros consecutivos cualesquiera de $y_1$ existe exactamente un cero de $y_2$. En símbolos, si $\alpha<\beta$ son ceros consecutivos de $y_1$, entonces

$$
y_2 \text{ tiene un único cero en } (\alpha,\beta).
$$

## Resolución

Por hipótesis, $p$ y $q$ son continuas en el intervalo abierto $I$, y $y_1$, $y_2$ son soluciones linealmente independientes de

$$
y'' + p(x)y' + q(x)y = 0
$$

en $I$. Se define el **wronskiano** del par como

$$
W(x) = y_1(x)y_2'(x) - y_1'(x)y_2(x).
$$

Como $y_1$ y $y_2$ son soluciones linealmente independientes, el **criterio del wronskiano** garantiza que $W(x)\ne 0$ para todo $x\in I$. De forma equivalente, la **fórmula de Abel** da $W(x)=C\exp\!\left(-\int p(x)\,dx\right)$ con $C\ne 0$.

Sean $\alpha<\beta$ ceros consecutivos de $y_1$: se cumple $y_1(\alpha)=y_1(\beta)=0$ y $y_1(x)\ne 0$ en $(\alpha,\beta)$.

Al evaluar $W$ en $\alpha$ y usar $y_1(\alpha)=0$,

$$
W(\alpha) = -y_1'(\alpha)y_2(\alpha) \ne 0,
$$

de donde $y_2(\alpha)\ne 0$. Del mismo modo, en $\beta$,

$$
W(\beta) = -y_1'(\beta)y_2(\beta) \ne 0,
$$

de donde $y_2(\beta)\ne 0$.

**Existencia.** Se razona por contradicción. Si $y_2$ no tuviera ceros en $(\alpha,\beta)$, la función

$$
f(x) = \frac{y_1(x)}{y_2(x)}
$$

estaría definida y sería diferenciable en $(\alpha,\beta)$. Como $y_2(\alpha)\ne 0$, el límite de $f$ en $\alpha$ es $y_1(\alpha)/y_2(\alpha)=0$; análogamente, el límite en $\beta$ es $0$. Al definir $f(\alpha)=f(\beta)=0$, la función $f$ es continua en $[\alpha,\beta]$ y diferenciable en $(\alpha,\beta)$. El **teorema de Rolle** asegura entonces la existencia de $c\in(\alpha,\beta)$ tal que $f'(c)=0$.

Por la **regla del cociente** y la definición del wronskiano,

$$
f'(x) = \frac{y_1'(x)y_2(x)-y_1(x)y_2'(x)}{y_2(x)^2} = -\frac{W(x)}{y_2(x)^2}.
$$

En $(\alpha,\beta)$ se tiene $y_2(x)\ne 0$ por la suposición y $W(x)\ne 0$ por la independencia lineal. Por tanto $f'(x)\ne 0$ en todo $(\alpha,\beta)$, lo que contradice $f'(c)=0$. En consecuencia, $y_2$ tiene al menos un cero en $(\alpha,\beta)$.

**Unicidad.** Supóngase que $y_2$ tuviera dos ceros $\gamma_1<\gamma_2$ en $(\alpha,\beta)$. Como $y_1$ no se anula en $(\alpha,\beta)$, en particular $y_1(x)\ne 0$ para $x\in[\gamma_1,\gamma_2]$, y la función

$$
g(x) = \frac{y_2(x)}{y_1(x)}
$$

es continua en $[\gamma_1,\gamma_2]$ y diferenciable en $(\gamma_1,\gamma_2)$, con $g(\gamma_1)=g(\gamma_2)=0$. El **teorema de Rolle** da un punto $d\in(\gamma_1,\gamma_2)$ tal que $g'(d)=0$. Por la regla del cociente,

$$
g'(x) = \frac{y_2'(x)y_1(x)-y_2(x)y_1'(x)}{y_1(x)^2} = \frac{W(x)}{y_1(x)^2}.
$$

El miembro derecho no se anula en $(\gamma_1,\gamma_2)$, pues $W(x)\ne 0$ y $y_1(x)\ne 0$; esto contradice $g'(d)=0$. Por tanto, $y_2$ tiene a lo sumo un cero en $(\alpha,\beta)$.

Al combinar existencia y unicidad, entre dos ceros consecutivos cualesquiera de $y_1$ hay exactamente un cero de $y_2$.

## Observaciones

El resultado es simétrico en los papeles de $y_1$ y $y_2$: entre dos ceros consecutivos de $y_2$ hay también exactamente un cero de $y_1$. Por eso se dice que los ceros de dos soluciones linealmente independientes se alternan o se separan.

En el ejemplo del enunciado, los ceros de $\cos x$ son $\pi/2+k\pi$ con $k\in\mathbb{Z}$. Entre dos consecutivos, como $\pi/2$ y $3\pi/2$, el único cero de $\sin x$ es $\pi$, en concordancia con el resultado.

La demostración no usa la forma explícita de las soluciones. Solo emplea la linealidad, la independencia lineal (que fuerza $W\ne 0$) y el teorema de Rolle; por ello el resultado vale para toda ecuación lineal homogénea de segundo orden con coeficientes continuos, no únicamente para coeficientes constantes.
