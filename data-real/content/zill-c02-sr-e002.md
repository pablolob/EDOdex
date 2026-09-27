
## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

El problema $x \dfrac{dy}{dx} - 4y = 0, y(0) = k$, tiene un ________ infinito de soluciones para $k =$ ________ y no tiene solución para $k =$ ________.

## Solución

El primer espacio se completa con «número»; el segundo, con $k=0$; el tercero, con $k\ne 0$. La ecuación tiene un **número infinito** de soluciones para $k=0$ y **ninguna** solución para $k\ne 0$.

Para $k=0$, la familia de soluciones es

$$
y(x)=Cx^{4},\qquad C\in\mathbb{R}.
$$

## Resolución

La ecuación es de primer orden y de **variables separables**. Para $x\ne 0$ y $y\ne 0$ se escribe en la forma

$$
\frac{dy}{dx}=\frac{4y}{x}.
$$

Se separan las variables y se integran ambos miembros:

$$
\begin{aligned}
\frac{dy}{y} &= \frac{4}{x}\,dx, \\
\ln|y| &= 4\ln|x| + c, \\
|y| &= C_1|x|^{4}, \qquad C_1>0.
\end{aligned}
$$

Al admitir un signo arbitrario en la constante resulta $y=Cx^{4}$ con $C\in\mathbb{R}$; el valor $C=0$ recupera la solución nula. Esta familia es la solución general en $(-\infty,0)$ y en $(0,\infty)$.

La solución se extiende a $x=0$ con $y(0)=\lim_{x\to 0}Cx^{4}=0$ para toda $C$. Coincide con lo que impone la propia ecuación evaluada en $x=0$: como $\left.x\dfrac{dy}{dx}\right|_{x=0}=0$, queda $-4y(0)=0$, es decir, $y(0)=0$. Por tanto, la condición inicial $y(0)=k$ solo es compatible con $k=0$.

Para $k=0$, cada $C\in\mathbb{R}$ proporciona una solución distinta $y=Cx^{4}$ con $y(0)=0$; hay un número infinito de soluciones. Para $k\ne 0$, ninguna solución satisface $y(0)=k$, porque todas cumplen $y(0)=0$. La ecuación no tiene solución en ese caso.

## Observaciones

El punto $x=0$ es un punto singular de la ecuación. Por eso el teorema de existencia y unicidad no se aplica en ningún intervalo que contenga a $x=0$ y la condición inicial en ese punto no fija la constante: de ahí el número infinito de soluciones para $k=0$. Si la condición inicial se diera en un punto $x_0\ne 0$, la solución sería única, $y=k\left(x/x_0\right)^{4}$.
