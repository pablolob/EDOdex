
## Enunciado

**Determinación de fechas por radiocarbono.** Un instrumento importante en la investigación arqueológica es la determinación de fechas por radiocarbono, que es un medio para determinar la antigüedad de ciertos restos de madera y plantas y, por tanto, de huesos humanos o de animales o artefactos encontrados a la misma profundidad. El procedimiento fue desarrollado por el químico estadounidense Willard Libby (1908-1980) a principios de la década de 1950, por lo que fue galardonado con el Premio Nobel de Química en 1960. La determinación de fechas por radiocarbono se basa en el hecho de que algunos restos de madera o plantas, siguen conteniendo cantidades residuales de carbono 14, un isótopo radiactivo del carbono. Este isótopo se acumula durante la vida de la planta y comienza a decaer a la muerte de ésta. Como la vida media del carbono 14 es larga (aproximadamente de 5 568 años), después de muchos miles de años permanecen cantidades medibles de carbono 14. Libby demostró que si incluso está presente una diminuta fracción de la cantidad original de carbono 14, entonces por medio de mediciones adecuadas de laboratorio puede determinarse con exactitud la proporción de la cantidad original de carbono 14 que resta. En otras palabras, si $Q(t)$ es la cantidad de carbono 14 en el instante $t$ y $Q_0$ es la cantidad original, entonces puede determinarse la razón $Q(t)/Q_0$, por lo menos si esta cantidad no es demasiado pequeña. Las técnicas de medición actuales permiten la aplicación de este método para periodos de hasta alrededor de 100 000 años, después de los cuales la cantidad de carbono 14 restante es de sólo poco más o menos $4 \times 10^{-6}$ de la cantidad original.

a) Si se supone que $Q$ satisface la ecuación diferencial $Q' = -rQ$, determinar la constante de decaimiento $r$ para el carbono 14.

b) Halle una expresión para $Q(t)$ en cualquier instante $t$, si $Q(0) = Q_0$.

c) Suponga que se descubren ciertos restos en los que la cantidad residual presente de carbono 14 es el 20% de la cantidad original. Determine la antigüedad de estos restos.

## Solución

La ecuación es **lineal** de **primer orden**. Su solución con $Q(0)=Q_0$ es

$$
Q(t)=Q_0 e^{-rt}.
$$

a) La vida media de 5 568 años fija $Q(5\,568)=Q_0/2$, de donde

$$
r=\frac{\ln 2}{5\,568}\approx 1.2449\times 10^{-4}\ \text{año}^{-1}.
$$

b) Con esa constante,

$$
Q(t)=Q_0 e^{-\frac{\ln 2}{5\,568}t}.
$$

c) La condición $Q(t)=0.2\,Q_0$ conduce a

$$
t=\frac{5\,568\ln 5}{\ln 2}\approx 12\,928.5\ \text{años},
$$

es decir, alrededor de $1.29\times 10^4$ años.

## Resolución

La ecuación $Q'=-rQ$ es **lineal** de **primer orden** y homogénea. En la forma estándar $Q'+rQ=0$, el coeficiente de $Q$ es constante y un **factor integrante** es $\mu(t)=e^{rt}$. Al multiplicar por $\mu$,

$$
e^{rt}Q'+r e^{rt}Q=0,
$$

cuyo miembro izquierdo es la derivada de un producto:

$$
\left(e^{rt}Q\right)'=0.
$$

Integrando respecto a $t$ se obtiene $e^{rt}Q=C$, con $C$ una constante arbitraria, de modo que

$$
Q(t)=C e^{-rt}.
$$

La condición inicial $Q(0)=Q_0$ da $C=Q_0$. Por tanto,

$$
Q(t)=Q_0 e^{-rt}.
$$

Esta expresión satisface la ecuación, ya que $Q'(t)=-rQ_0 e^{-rt}=-rQ(t)$, y también $Q(0)=Q_0$.

### Apartado a

La vida media es el tiempo que tarda la cantidad inicial en reducirse a la mitad. Por tanto, $Q(5\,568)=Q_0/2$. Al sustituir en la solución,

$$
\frac{Q_0}{2}=Q_0 e^{-r(5\,568)}.
$$

Como $Q_0\ne 0$, se simplifica $Q_0$ y queda $e^{-5\,568r}=1/2$. Al tomar logaritmos naturales en ambos miembros,

$$
-5\,568r=\ln\frac{1}{2}=-\ln 2,
$$

de donde

$$
r=\frac{\ln 2}{5\,568}\approx 1.2449\times 10^{-4}\ \text{año}^{-1}.
$$

### Apartado b

Al sustituir el valor de $r$ en la solución con $Q(0)=Q_0$,

$$
Q(t)=Q_0 e^{-\frac{\ln 2}{5\,568}t}.
$$

La cantidad de carbono 14 decae exponencialmente y tiende a cero cuando $t\to\infty$, sin alcanzarlo en un tiempo finito.

### Apartado c

La cantidad residual es el 20% de la original, es decir, $Q(t)=0.2\,Q_0$. Al sustituir en la expresión del apartado anterior,

$$
0.2\,Q_0=Q_0 e^{-rt}.
$$

Se simplifica $Q_0$ y se toman logaritmos naturales:

$$
\ln 0.2=-rt.
$$

Como $\ln 0.2=\ln\frac{1}{5}=-\ln 5$, resulta

$$
t=\frac{\ln 5}{r}=\frac{5\,568\ln 5}{\ln 2}\approx 12\,928.5.
$$

La antigüedad de los restos es de aproximadamente $12\,929$ años, esto es, unos $1.29\times 10^4$ años.

## Observaciones

La constante de decaimiento es específica de cada isótopo: la vida media y $r$ se relacionan mediante $r=\ln 2/t_{1/2}$. El modelo $Q'=-rQ$ describe cualquier decaimiento radiactivo y es el mismo que el de crecimiento o decaimiento exponencial de la sección.

### Método alternativo: separación de variables

La ecuación también es separable. Al escribir $\dfrac{dQ}{Q}=-r\,dt$ e integrar,

$$
\ln Q=-rt+C_1,\qquad Q(t)=C e^{-rt},
$$

y la condición $Q(0)=Q_0$ vuelve a dar $Q(t)=Q_0 e^{-rt}$.
