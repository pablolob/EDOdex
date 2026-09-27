
## Enunciado

En cada uno de los problemas 1 a 6, determine si el par de funciones dado es linealmente independiente o linealmente dependiente.

3. $f(x) = e^{\lambda x} \cos \mu x, \quad g(x) = e^{\lambda x} \sin \mu x, \quad \mu \neq 0$

## Solución

Las funciones son **linealmente independientes**, ya que su wronskiano no se anula cuando $\mu \neq 0$:

$$
W(f,g)(x) = \mu\,e^{2\lambda x} \neq 0.
$$

## Resolución

El **criterio del wronskiano** establece que si dos funciones diferenciables tienen wronskiano distinto de cero en algún punto, entonces son linealmente independientes. El wronskiano del par es

$$
W(f,g)(x) =
\begin{vmatrix}
f(x) & g(x) \\
f'(x) & g'(x)
\end{vmatrix}
= f(x)g'(x) - f'(x)g(x).
$$

Se derivan las funciones con la **regla del producto**:

$$
\begin{aligned}
f'(x) &= \lambda e^{\lambda x}\cos \mu x - \mu e^{\lambda x}\sin \mu x
      = e^{\lambda x}\left(\lambda \cos \mu x - \mu \sin \mu x\right), \\
g'(x) &= \lambda e^{\lambda x}\sin \mu x + \mu e^{\lambda x}\cos \mu x
      = e^{\lambda x}\left(\lambda \sin \mu x + \mu \cos \mu x\right).
\end{aligned}
$$

Se sustituyen en el determinante y se factoriza $e^{2\lambda x}$:

$$
\begin{aligned}
W(f,g)(x)
&= e^{\lambda x}\cos \mu x \cdot e^{\lambda x}\left(\lambda \sin \mu x + \mu \cos \mu x\right)
 - e^{\lambda x}\left(\lambda \cos \mu x - \mu \sin \mu x\right)\cdot e^{\lambda x}\sin \mu x \\
&= e^{2\lambda x}\left[\lambda \sin \mu x \cos \mu x + \mu \cos^2 \mu x
 - \lambda \sin \mu x \cos \mu x + \mu \sin^2 \mu x\right] \\
&= \mu\,e^{2\lambda x}\left(\cos^2 \mu x + \sin^2 \mu x\right) \\
&= \mu\,e^{2\lambda x}.
\end{aligned}
$$

Como $\mu \neq 0$ y $e^{2\lambda x} > 0$ para todo $x$, el wronskiano nunca se anula. Por el criterio del wronskiano, $f$ y $g$ son **linealmente independientes** en $\mathbb{R}$.

## Observaciones

La hipótesis $\mu \neq 0$ es esencial. Si $\mu = 0$, entonces $g(x) = e^{\lambda x}\sin 0 = 0$ y el par $\{f,g\}$ sería linealmente dependiente. El factor $e^{\lambda x}$ no interviene en la decisión: es estrictamente positivo y no se anula en ningún punto. Basta que el wronskiano sea distinto de cero en un solo punto para concluir la independencia lineal.
