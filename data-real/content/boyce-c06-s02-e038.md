
## Enunciado

En este problema se muestra cómo es posible utilizar un desarrollo general en fracciones parciales para calcular muchas transformadas inversas de Laplace. Suponga que
$$F(s) = \frac{P(s)}{Q(s)},$$
en donde $Q(s)$ es un polinomio de grado $n$ con ceros diferentes $r_1, r_2, \dots, r_n$ y $P(s)$ es un polinomio de grado menor que $n$. En este caso es posible demostrar que $P(s)/Q(s)$ tiene un desarrollo en fracciones parciales de la forma
$$\frac{P(s)}{Q(s)} = \frac{A_1}{s - r_1} + \dots + \frac{A_n}{s - r_n}, \tag{i}$$
en donde es necesario determinar los coeficientes $A_1, \dots, A_n$.
a) Demuestre que
$$A_k = \frac{P(r_k)}{Q'(r_k)}, \quad k = 1, \dots, n. \tag{ii}$$
Sugerencia: una forma de hacerlo es multiplicar la ecuación (i) por $s - r_k$ y, a continuación, tomar el límite cuando $s \to r_k$.
b) Demuestre que
$$\mathcal{L}^{-1}\{F(s)\} = \sum_{k=1}^n \frac{P(r_k)}{Q'(r_k)} e^{r_k t}. \tag{iii}$$
