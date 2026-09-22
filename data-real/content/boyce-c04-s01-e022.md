
## Enunciado

En este problema se muestra de qué manera generalizar el teorema 3.3.2 (teorema de Abel) hacia las ecuaciones de orden superior. En primer lugar se describe el procedimiento para la ecuación de tercer orden

$$y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = 0.$$

Sean $y_1, y_2$ y $y_3$ soluciones de esta ecuación sobre un intervalo $I$.

a) Si $W = W(y_1, y_2, y_3)$, demostrar que

$$W' = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1''' & y_2''' & y_3''' \end{vmatrix}.$$

Sugerencia: la derivada de una determinante de $3 \times 3$ es la suma de tres determinantes de $3 \times 3$ obtenidos al derivar los renglones primero, segundo y tercero, respectivamente.

b) Sustituya $y_1''', y_2'''$ y $y_3'''$ por su expresión obtenida de la ecuación diferencial; multiplicar el primer renglón por $p_3$ el segundo por $p_2$ y sumarlos al último renglón para obtener

$$W' = -p_1(x)W.$$

c) Demuestre que

$$W(y_1, y_2, y_3)(x) = c \exp\left[-\int p_1(x)\,dx\right].$$

Se concluye que $W$ es siempre cero o siempre diferente de cero sobre $I$.

d) Generalice este argumento hacia la ecuación de $n$-ésimo orden

$$y^{(n)} + p_1(x)y^{(n-1)} + \cdots + p_n(x)y = 0$$

con soluciones $y_1, y_2, \dots, y_n$. Es decir, demuestre que

$$W(y_1, \dots, y_n)(x) = c \exp\left[-\int p_1(x)\,dx\right].$$

## Solución

La derivada del wronskiano de las soluciones satisface la identidad de Abel

$$
W' = -p_1(x)\,W,
$$

de modo que el wronskiano queda determinado por $p_1$ y una constante:

$$
W(y_1, \dots, y_n)(x) = c \exp\left[-\int p_1(x)\,dx\right].
$$

Como la exponencial no se anula, $W$ es idénticamente cero o nunca es cero sobre $I$.

## Resolución

### Parte (a)

El wronskiano de las tres soluciones es

$$
W = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{vmatrix}.
$$

El determinante es lineal en cada uno de sus renglones. Al derivarlo, la derivada se reparte como la suma de los tres determinantes que resultan de derivar el primer renglón, el segundo y el tercero:

$$
W' = \begin{vmatrix} y_1' & y_2' & y_3' \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{vmatrix} + \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1'' & y_2'' & y_3'' \\ y_1'' & y_2'' & y_3'' \end{vmatrix} + \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1''' & y_2''' & y_3''' \end{vmatrix}.
$$

Los dos primeros determinantes tienen dos renglones iguales, por lo que se anulan. Queda

$$
W' = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1''' & y_2''' & y_3''' \end{vmatrix}.
$$

### Parte (b)

Como cada $y_i$ es solución de la ecuación, se cumple

$$
y_i''' = -p_1 y_i'' - p_2 y_i' - p_3 y_i, \qquad i = 1, 2, 3.
$$

Se sustituye esta expresión en el tercer renglón del determinante de $W'$. Un determinante no cambia si a un renglón se le suma una combinación lineal de los demás. Al sumar $p_3$ veces el primer renglón y $p_2$ veces el segundo al tercer renglón, este se convierte en

$$
y_i''' + p_2 y_i' + p_3 y_i = -p_1 y_i''.
$$

Por tanto,

$$
W' = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ -p_1 y_1'' & -p_1 y_2'' & -p_1 y_3'' \end{vmatrix} = -p_1(x) \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{vmatrix} = -p_1(x) W.
$$

### Parte (c)

La identidad anterior es una ecuación diferencial lineal de primer orden homogénea para $W$. Se separan las variables y se integra:

$$
\frac{dW}{W} = -p_1(x)\,dx, \qquad \ln|W| = -\int p_1(x)\,dx + C.
$$

Al despejar resulta

$$
W(y_1, y_2, y_3)(x) = c \exp\left[-\int p_1(x)\,dx\right],
$$

donde $c$ es una constante arbitraria. El caso $c = 0$ corresponde a $W \equiv 0$. Como la exponencial nunca se anula, $W$ es idénticamente cero o nunca es cero sobre $I$.

### Parte (d)

El argumento se repite para la ecuación de orden $n$. El wronskiano es el determinante cuyas filas son las derivadas sucesivas de las soluciones:

$$
W = \begin{vmatrix} y_1 & y_2 & \cdots & y_n \\ y_1' & y_2' & \cdots & y_n' \\ \vdots & \vdots & & \vdots \\ y_1^{(n-1)} & y_2^{(n-1)} & \cdots & y_n^{(n-1)} \end{vmatrix}.
$$

Al derivar, cada uno de los $n$ determinantes en que se reparte la derivada tiene dos filas iguales salvo el que deriva la última fila. Entonces

$$
W' = \begin{vmatrix} y_1 & y_2 & \cdots & y_n \\ y_1' & y_2' & \cdots & y_n' \\ \vdots & \vdots & & \vdots \\ y_1^{(n-2)} & y_2^{(n-2)} & \cdots & y_n^{(n-2)} \\ y_1^{(n)} & y_2^{(n)} & \cdots & y_n^{(n)} \end{vmatrix}.
$$

Cada $y_i$ satisface

$$
y_i^{(n)} = -p_1 y_i^{(n-1)} - p_2 y_i^{(n-2)} - \cdots - p_n y_i.
$$

La fila $j$ del determinante contiene $y_i^{(j-1)}$. Se suma al último renglón $p_n$ veces el primer renglón, $p_{n-1}$ veces el segundo, hasta $p_2$ veces el renglón $n-1$. El último renglón pasa a ser

$$
y_i^{(n)} + p_2 y_i^{(n-2)} + \cdots + p_n y_i = -p_1 y_i^{(n-1)}.
$$

El valor del determinante no cambia con estas operaciones, así que

$$
W' = \begin{vmatrix} y_1 & \cdots & y_n \\ \vdots & & \vdots \\ y_1^{(n-2)} & \cdots & y_n^{(n-2)} \\ -p_1 y_1^{(n-1)} & \cdots & -p_1 y_n^{(n-1)} \end{vmatrix} = -p_1(x) W.
$$

Integrando esta ecuación como en la parte (c) se obtiene

$$
W(y_1, \dots, y_n)(x) = c \exp\left[-\int p_1(x)\,dx\right].
$$

## Observaciones

El resultado es la **fórmula de Abel** para ecuaciones lineales de orden $n$. El wronskiano queda fijado por el coeficiente $p_1$ y una constante; los demás coeficientes $p_2, \dots, p_n$ no intervienen.

Como la exponencial nunca se anula, $W$ es cero en todo punto de $I$ o en ninguno. Por eso basta comprobar $W(x_0) \ne 0$ en un solo punto para concluir que las soluciones $y_1, \dots, y_n$ son linealmente independientes sobre $I$.
