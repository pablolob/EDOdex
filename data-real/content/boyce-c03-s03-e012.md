
## Enunciado

a) Demuestre que cualquier vector bidimensional puede escribirse como una combinación lineal de $\mathbf{i} + \mathbf{j}$ e $\mathbf{i} - \mathbf{j}$.

b) Demuestre que si los vectores $\mathbf{x} = x_1 \mathbf{i} + x_2 \mathbf{j}$ y $\mathbf{y} = y_1 \mathbf{i} + y_2 \mathbf{j}$ son linealmente independientes, entonces cualquier vector $\mathbf{z} = z_1 \mathbf{i} + z_2 \mathbf{j}$ puede expresarse como una combinación lineal de $\mathbf{x}$ y $\mathbf{y}$. Observe que si $\mathbf{x}$ y $\mathbf{y}$ son linealmente independientes, entonces $x_1 y_2 - x_2 y_1 \neq 0$. ¿Por qué?

## Solución

a) Todo vector $\mathbf{v} = a\,\mathbf{i} + b\,\mathbf{j}$ admite la descomposición

$$
\mathbf{v} = \frac{a+b}{2}\left(\mathbf{i} + \mathbf{j}\right) + \frac{a-b}{2}\left(\mathbf{i} - \mathbf{j}\right).
$$

b) Si $\mathbf{x}$ y $\mathbf{y}$ son linealmente independientes, entonces $x_1 y_2 - x_2 y_1 \neq 0$ y todo vector $\mathbf{z} = z_1 \mathbf{i} + z_2 \mathbf{j}$ se escribe como

$$
\boxed{\;\mathbf{z} = \frac{z_1 y_2 - y_1 z_2}{x_1 y_2 - x_2 y_1}\,\mathbf{x} + \frac{x_1 z_2 - z_1 x_2}{x_1 y_2 - x_2 y_1}\,\mathbf{y}.\;}
$$

La condición $x_1 y_2 - x_2 y_1 \neq 0$ es necesaria porque ese número es el determinante cuyas columnas son $\mathbf{x}$ y $\mathbf{y}$, y dicho determinante es no nulo exactamente cuando esos dos vectores son linealmente independientes.

## Resolución

### Apartado a)

Sea $\mathbf{v} = a\,\mathbf{i} + b\,\mathbf{j}$ un vector bidimensional arbitrario. Se buscan escalares $c$ y $d$ tales que

$$
\mathbf{v} = c\left(\mathbf{i} + \mathbf{j}\right) + d\left(\mathbf{i} - \mathbf{j}\right) = (c+d)\,\mathbf{i} + (c-d)\,\mathbf{j}.
$$

La igualdad de componentes conduce al sistema

$$
\begin{aligned}
c + d &= a, \\
c - d &= b.
\end{aligned}
$$

Al sumar y restar ambas ecuaciones se obtiene $c = \frac{a+b}{2}$ y $d = \frac{a-b}{2}$. Estos valores son finitos para cualesquiera $a$ y $b$, luego la descomposición es válida para todo vector bidimensional. En consecuencia, $\mathbf{i} + \mathbf{j}$ e $\mathbf{i} - \mathbf{j}$ generan el plano.

### Apartado b)

Se busca escribir $\mathbf{z} = c\,\mathbf{x} + d\,\mathbf{y}$. Al igualar componentes resulta el sistema lineal

$$
\begin{aligned}
c\,x_1 + d\,y_1 &= z_1, \\
c\,x_2 + d\,y_2 &= z_2,
\end{aligned}
$$

cuya matriz de coeficientes tiene por columnas los propios vectores $\mathbf{x} = (x_1,x_2)$ y $\mathbf{y} = (y_1,y_2)$. Su determinante es

$$
\Delta = \begin{vmatrix} x_1 & y_1 \\ x_2 & y_2 \end{vmatrix} = x_1 y_2 - y_1 x_2 = x_1 y_2 - x_2 y_1.
$$

Los vectores $\mathbf{x}$ y $\mathbf{y}$ son linealmente independientes si la única solución de $c\,\mathbf{x} + d\,\mathbf{y} = \mathbf{0}$ es $c = d = 0$. Ese sistema homogéneo tiene la misma matriz de coeficientes, y un sistema cuadrado homogéneo posee solución distinta de la trivial precisamente cuando su determinante se anula. Por tanto, la independencia lineal de $\mathbf{x}$ y $\mathbf{y}$ equivale a $\Delta \neq 0$. Esta es la respuesta al «¿Por qué?»: si $x_1 y_2 - x_2 y_1 = 0$, las columnas serían proporcionales, uno de los vectores sería múltiplo del otro y no serían linealmente independientes.

Con $\Delta \neq 0$ la matriz es invertible y el sistema $c\,\mathbf{x} + d\,\mathbf{y} = \mathbf{z}$ tiene solución única para cualquier $\mathbf{z}$. Por la **regla de Cramer**,

$$
c = \frac{z_1 y_2 - y_1 z_2}{\Delta}, \qquad d = \frac{x_1 z_2 - z_1 x_2}{\Delta}.
$$

Ambos denominadores son no nulos, de modo que todo $\mathbf{z}$ se expresa como combinación lineal de $\mathbf{x}$ y $\mathbf{y}$. En términos del álgebra lineal, un par linealmente independiente en el plano forma una base.

## Observaciones

El determinante $\Delta = x_1 y_2 - x_2 y_1$ es el análogo bidimensional del **wronskiano**. La misma idea explica el criterio de esta sección: dos soluciones de una ecuación lineal homogénea de segundo orden forman un conjunto fundamental exactamente cuando su wronskiano no se anula. Ese papel lo desempeña aquí $\Delta$: su no anulación garantiza que todo vector (y, en el caso de las EDO, toda solución) se obtiene como combinación lineal del par dado.
