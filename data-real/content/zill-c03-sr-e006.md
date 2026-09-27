
## Enunciado

6. En el tratamiento del cáncer de tiroides, a menudo se utiliza el líquido radiactivo yodo-131. Supongamos que después de un día de almacenamiento, el análisis demuestra que una cantidad inicial que $A_0$ de yodo-131 en una muestra se ha reducido en $8.3\%$.

a) Encuentre la cantidad de yodo-131 restante en la muestra después de 8 días.

b) Explique el significado del resultado del inciso a).

## Solución

La cantidad restante después de 8 días es

$$
A(8)=A_0(0.917)^8\approx 0.500\,A_0,
$$

esto es, aproximadamente la mitad de la cantidad inicial.

El resultado significa que $8$ días es, de forma aproximada, la vida media del yodo-131: cada $8$ días la cantidad presente se reduce a la mitad.

## Resolución

Sea $A(t)$ la cantidad de yodo-131 presente en la muestra al tiempo $t$, medido en días. La rapidez de decaimiento es proporcional a la cantidad presente. Con constante de proporcionalidad $k>0$,

$$
\frac{dA}{dt}=-kA,\qquad A(0)=A_0.
$$

La ecuación es **lineal de primer orden**. En forma estándar, $A'+kA=0$, admite el **factor integrante** $\mu(t)=e^{kt}$. Al multiplicar ambos miembros,

$$
\begin{aligned}
e^{kt}A' + k e^{kt}A &= 0, \\
\frac{d}{dt}\left(e^{kt}A\right) &= 0.
\end{aligned}
$$

Integrando una vez se obtiene $e^{kt}A=C$ y, por tanto,

$$
A(t)=Ce^{-kt}.
$$

La condición inicial $A(0)=A_0$ fija la constante: $C=A_0$, de modo que

$$
A(t)=A_0e^{-kt}.
$$

Tras un día de almacenamiento, la cantidad se ha reducido en $8.3\%$. La fracción restante es $0.917$, de modo que

$$
A(1)=A_0-0.083A_0=0.917\,A_0.
$$

Al sustituir en la solución,

$$
A_0e^{-k}=0.917\,A_0 \quad\Longrightarrow\quad e^{-k}=0.917.
$$

La cantidad a los $8$ días se obtiene elevando esta relación:

$$
A(8)=A_0e^{-8k}=A_0\left(e^{-k}\right)^8=A_0(0.917)^8\approx 0.49998\,A_0\approx 0.500\,A_0.
$$

Por tanto, después de $8$ días queda aproximadamente la mitad del yodo-131 inicial.

b) El valor $A(8)\approx A_0/2$ indica que el tiempo necesario para que la muestra se reduzca a la mitad es de unos $8$ días. En otras palabras, $8$ días es una buena aproximación de la vida media del yodo-131.

## Observaciones

La constante de decaimiento es $k=-\ln(0.917)\approx 0.0866\ \text{días}^{-1}$. La vida media del isótopo es $t_{1/2}=\dfrac{\ln 2}{k}\approx 8.00$ días, por lo que la pérdida diaria del $8.3\%$ se elige para que $8$ días coincidan prácticamente con una vida media.

Para el inciso a) no es necesario calcular $k$: la fracción restante después de $8$ días es directamente $(0.917)^8$.
