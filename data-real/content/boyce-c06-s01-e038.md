
## Enunciado

En este problema se muestra cómo es posible utilizar un desarrollo general en fracciones parciales para calcular muchas transformadas inversas de Laplace. Suponga que

$$F(s) = \frac{P(s)}{Q(s)},$$

en donde $Q(s)$ es un polinomio de grado $n$ con ceros diferentes $r_1, r_2, \dots, r_n$ y $P(s)$ es un polinomio de grado menor que $n$. En este caso es posible demostrar que $P(s)/Q(s)$ tiene un desarrollo en fracciones parciales de la forma

$$\frac{P(s)}{Q(s)} = \frac{A_1}{s - r_1} + \dots + \frac{A_n}{s - r_n}, \tag{i}$$

en donde es necesario determinar los coeficientes $A_1, \dots, A_n$.

a) Demuestre que

$$A_k = \frac{P(r_k)}{Q'(r_k)}, \quad k = 1, \dots, n, \tag{ii}$$

Sugerencia: una forma de hacerlo es multiplicar la ecuación (i) por $s - r_k$ y, a continuación, tomar el límite cuando $s \to r_k$.

b) Demuestre que

$$\mathcal{L}^{-1}\{F(s)\} = \sum_{k=1}^\infty \frac{P(r_k)}{Q'(r_k)} e^{r_k t}. \tag{iii}$$

## Solución

Los coeficientes del desarrollo en fracciones parciales son

$$
A_k = \frac{P(r_k)}{Q'(r_k)}, \qquad k = 1, \dots, n,
$$

y la transformada inversa es la suma finita de exponenciales

$$
\mathcal{L}^{-1}\{F(s)\} = \sum_{k=1}^{n} \frac{P(r_k)}{Q'(r_k)}\, e^{r_k t}, \qquad t \ge 0.
$$

## Resolución

### Apartado a)

El desarrollo (i) se multiplica por $s - r_k$:

$$
(s - r_k)\frac{P(s)}{Q(s)} = A_k + \sum_{j \ne k} A_j\,\frac{s - r_k}{s - r_j}.
$$

Cuando $s \to r_k$, cada término del sumatorio tiende a cero: el numerador tiende a cero y el denominador tiende a $r_k - r_j \ne 0$, ya que los ceros de $Q$ son distintos. En el límite, el miembro izquierdo es el residuo de $F$ en $s = r_k$, de modo que

$$
A_k = \lim_{s \to r_k} (s - r_k)\frac{P(s)}{Q(s)} = P(r_k)\lim_{s \to r_k}\frac{s - r_k}{Q(s)}.
$$

Como $Q(r_k) = 0$, el cociente restante se identifica con el recíproco del cociente incremental que define $Q'(r_k)$:

$$
\lim_{s \to r_k}\frac{s - r_k}{Q(s)}
= \lim_{s \to r_k}\frac{1}{\dfrac{Q(s) - Q(r_k)}{s - r_k}}
= \frac{1}{Q'(r_k)}.
$$

El denominador no se anula porque $r_k$ es un cero simple, es decir $Q'(r_k) \ne 0$. Por tanto,

$$
A_k = \frac{P(r_k)}{Q'(r_k)}, \qquad k = 1, \dots, n.
$$

### Apartado b)

El par básico de la transformada de Laplace es

$$
\mathcal{L}\{e^{r_k t}\} = \frac{1}{s - r_k},
$$

en la región del plano complejo donde la integral converge. Por **linealidad** de la transformada inversa, aplicada a los $n$ términos del desarrollo (i),

$$
\mathcal{L}^{-1}\{F(s)\}
= \sum_{k=1}^{n} A_k\,\mathcal{L}^{-1}\!\left\{\frac{1}{s - r_k}\right\}
= \sum_{k=1}^{n} A_k\,e^{r_k t}.
$$

La linealidad es aplicable porque $P$ tiene grado menor que $n$: el desarrollo es propio, no contiene parte polinómica y la transformada inversa es la suma finita anterior. Al sustituir la expresión de cada coeficiente obtenida en el apartado a) resulta

$$
\mathcal{L}^{-1}\{F(s)\} = \sum_{k=1}^{n} \frac{P(r_k)}{Q'(r_k)}\, e^{r_k t}.
$$

La comprobación directa es inmediata: por linealidad, la transformada del miembro derecho es $\sum_{k=1}^{n} A_k/(s - r_k)$, que coincide con $P(s)/Q(s)$ por el desarrollo (i).

## Observaciones

El desarrollo (i) consta de exactamente $n$ términos, uno por cada cero de $Q$. Por ello la suma de (iii) es finita; el límite superior $\infty$ que figura en (iii) debe leerse como $n$, ya que para $k > n$ no existen coeficientes $A_k$.

La fórmula $A_k = P(r_k)/Q'(r_k)$ es la regla de los residuos para polos simples. La hipótesis de que el grado de $P$ es menor que el de $Q$ es esencial: garantiza que el desarrollo no tiene parte polinómica y que la transformada inversa es una suma finita de exponenciales.
