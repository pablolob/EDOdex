
## Enunciado

9. Suponga que conforme se enfría un cuerpo, la temperatura del medio circundante aumenta debido a que absorbe por completo el calor que pierde el cuerpo. Sean $T(t)$ y $T_m(t)$ las temperaturas del cuerpo y el medio al tiempo $t$, respectivamente. Si la temperatura inicial del cuerpo es $T_1$ y la temperatura inicial del medio de $T_2$, entonces se puede mostrar en este caso que la ley de Newton del enfriamiento es $dT/dt = k(T - T_m)$, $k < 0$, donde $T_m = T_2 + B(T_1 - T)$, $B > 0$ es una constante.

a) La ED anterior es autónoma. Utilice el concepto de esquema de fase de la sección 2.1 para determinar el valor límite de la temperatura $T(t)$ conforme $t \to \infty$. ¿Cuál es el valor límite de $T_m(t)$ conforme $t \to \infty$?

b) Compruebe sus respuestas del inciso a) resolviendo la ecuación diferencial.

c) Analice una interpretación física de sus respuestas en el inciso a).

## Solución

Sustituyendo $T_m$ en la ley de enfriamiento, la ecuación se reduce a una ecuación autónoma con equilibrio **asintóticamente estable**

$$
T^* = \frac{T_2 + B T_1}{1+B}.
$$

Por tanto, las dos temperaturas tienden al mismo valor:

$$
\lim_{t\to\infty} T(t) = T^*, \qquad \lim_{t\to\infty} T_m(t) = T^*.
$$

La integración de la ecuación (apartado b) da las soluciones

$$
T(t) = T^* + (T_1 - T^*) e^{k(1+B)t}, \qquad T_m(t) = T^* - B(T_1 - T^*) e^{k(1+B)t}.
$$

## Resolución

**(a) Análisis cualitativo.** Se sustituye $T_m = T_2 + B(T_1 - T)$ en la ley de enfriamiento:

$$
\frac{dT}{dt} = k\left[T - T_2 - B(T_1 - T)\right] = k\left[(1+B)T - (T_2 + B T_1)\right].
$$

La ecuación es autónoma, de la forma $dT/dt = f(T)$. Se define

$$
T^* = \frac{T_2 + B T_1}{1+B},
$$

de modo que la ecuación toma la forma factorizada

$$
f(T) = k(1+B)\left(T - T^*\right).
$$

El único punto de equilibrio es $T = T^*$. Como $k<0$ y $B>0$, se tiene $k(1+B)<0$. Entonces $f(T)>0$ para $T<T^*$ y $f(T)<0$ para $T>T^*$. En el esquema de fase las flechas apuntan hacia $T^*$, que es **asintóticamente estable**. Toda solución tiende a él:

$$
\lim_{t\to\infty} T(t) = T^*.
$$

Para el medio, en el límite se obtiene

$$
\lim_{t\to\infty} T_m(t) = T_2 + B(T_1 - T^*) = T_2 + B T_1 - B T^* = (1+B)T^* - B T^* = T^*.
$$

Así, la temperatura límite del cuerpo y la del medio coinciden.

**(b) Resolución de la ecuación.** Con $f(T) = k(1+B)(T-T^*)$ la ecuación es de **variables separables**:

$$
\frac{dT}{T - T^*} = k(1+B)\,dt.
$$

Integrando ambos miembros,

$$
\ln\left|T - T^*\right| = k(1+B)t + C_1,
$$

donde $C_1$ es una constante de integración. Se despeja $T$:

$$
T(t) = T^* + C e^{k(1+B)t}, \qquad C \in \mathbb{R}.
$$

La condición inicial $T(0) = T_1$ fija $C = T_1 - T^*$:

$$
T(t) = T^* + (T_1 - T^*) e^{k(1+B)t}.
$$

Como $k(1+B)<0$, la exponencial tiende a cero y se confirma $\lim_{t\to\infty} T(t) = T^*$. Para el medio,

$$
T_m(t) = T_2 + B(T_1 - T(t)) = T^* - B(T_1 - T^*) e^{k(1+B)t},
$$

que también tiende a $T^*$. La solución constante $T \equiv T^*$ (caso $T_1 = T^*$) queda incluida en la familia para $C=0$.

**(c) Interpretación física.** El cuerpo cede calor al medio y este lo absorbe por completo, por lo que el medio se calienta mientras el cuerpo se enfría. Los dos intercambian energía hasta alcanzar el equilibrio térmico en la temperatura común $T^*$. El valor $T^*$ es una media ponderada de $T_1$ y $T_2$ (pesos $B$ y $1$), de modo que queda entre ambas temperaturas iniciales y más próximo a $T_1$ cuanto mayor es $B$. El régimen es monótono, sin oscilaciones, y el acercamiento al equilibrio es exponencial.

## Observaciones

- El parámetro $B$ es la razón entre la capacidad térmica del cuerpo y la del medio. Cuanto mayor es $B$, más pesa la temperatura inicial del cuerpo en el equilibrio común $T^*$.
- Si $T_1>T_2$, como ocurre al enfriarse un cuerpo, entonces $T(t)$ decrece y $T_m(t)$ crece, y ambas tienden a $T^*$.

### Método alternativo: factor integrante

La ecuación escrita en forma estándar, $T' - k(1+B)T = -k(T_2+B T_1)$, es lineal de primer orden. Su factor integrante es $\mu(t)=e^{-k(1+B)t}$ y conduce a la misma solución general. El resultado es idéntico.
