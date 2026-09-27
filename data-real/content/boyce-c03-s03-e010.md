
## Enunciado

Si las funciones $y_1$ y $y_2$ son soluciones linealmente independientes de $y'' + p(x)y' + q(x)y = 0$, demuestre que $y_3 = y_1 + y_2$ y $y_4 = y_1 - y_2$ también forman un conjunto linealmente independiente de soluciones. A la inversa, si $y_3$ y $y_4$ son soluciones linealmente independientes de la ecuación diferencial, demuestre que también $y_1$ y $y_2$ lo son.

## Solución

Las dos afirmaciones son válidas. Por el **principio de superposición**, $y_3 = y_1 + y_2$ y $y_4 = y_1 - y_2$ son soluciones de la ecuación, y recíprocamente $y_1 = \tfrac{1}{2}(y_3 + y_4)$ y $y_2 = \tfrac{1}{2}(y_3 - y_4)$ también lo son. La transformación que relaciona ambos pares es invertible,

$$
\begin{pmatrix} y_3 \\ y_4 \end{pmatrix}
=
\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} y_1 \\ y_2 \end{pmatrix},
\qquad \det = -2 \neq 0,
$$

por lo que conserva la independencia lineal en los dos sentidos. En consecuencia, $\{y_1, y_2\}$ es un conjunto fundamental de soluciones si y solo si lo es $\{y_3, y_4\}$.

## Resolución

Se escribe la ecuación como $L[y] = 0$, con

$$
L[y] = y'' + p(x)y' + q(x)y.
$$

El operador $L$ es lineal; por tanto, para constantes $c_1$, $c_2$ y funciones derivables $u$ y $v$,

$$
L[c_1 u + c_2 v] = c_1 L[u] + c_2 L[v].
$$

**Primera implicación.** Si $y_1$ y $y_2$ son soluciones, entonces $L[y_1] = L[y_2] = 0$. Por linealidad,

$$
\begin{aligned}
L[y_3] &= L[y_1 + y_2] = L[y_1] + L[y_2] = 0, \\
L[y_4] &= L[y_1 - y_2] = L[y_1] - L[y_2] = 0,
\end{aligned}
$$

luego $y_3$ y $y_4$ son soluciones. Para la independencia se supone una combinación nula $c_3 y_3 + c_4 y_4 = 0$. Al sustituir $y_3$ y $y_4$,

$$
c_3(y_1 + y_2) + c_4(y_1 - y_2) = (c_3 + c_4)y_1 + (c_3 - c_4)y_2 = 0.
$$

Como $y_1$ y $y_2$ son linealmente independientes, ambos coeficientes se anulan: $c_3 + c_4 = 0$ y $c_3 - c_4 = 0$. De ahí $c_3 = c_4 = 0$, de modo que $y_3$ y $y_4$ son linealmente independientes.

**Segunda implicación.** Recíprocamente, se parte de $y_3$ y $y_4$ linealmente independientes y se observa que

$$
y_1 = \tfrac{1}{2}(y_3 + y_4), \qquad y_2 = \tfrac{1}{2}(y_3 - y_4).
$$

Por linealidad,

$$
\begin{aligned}
L[y_1] &= \tfrac{1}{2}\left(L[y_3] + L[y_4]\right) = 0, \\
L[y_2] &= \tfrac{1}{2}\left(L[y_3] - L[y_4]\right) = 0,
\end{aligned}
$$

así que $y_1$ y $y_2$ son soluciones. Si $c_1 y_1 + c_2 y_2 = 0$, al sustituir las expresiones anteriores,

$$
\frac{c_1 + c_2}{2}\,y_3 + \frac{c_1 - c_2}{2}\,y_4 = 0.
$$

La independencia de $y_3$ y $y_4$ implica $c_1 + c_2 = 0$ y $c_1 - c_2 = 0$, de donde $c_1 = c_2 = 0$. Por tanto $y_1$ y $y_2$ son linealmente independientes.

## Observaciones

### Método alternativo: criterio del Wronskiano

La independencia también se sigue del **criterio del Wronskiano**. Un cálculo directo da

$$
\begin{aligned}
W(y_3, y_4) &= (y_1 + y_2)(y_1' - y_2') - (y_1' + y_2')(y_1 - y_2) \\
&= -2\left(y_1 y_2' - y_1' y_2\right) = -2\,W(y_1, y_2).
\end{aligned}
$$

Para dos soluciones de una ecuación lineal homogénea, la fórmula de Abel garantiza que $W(y_1, y_2)$ es idénticamente nulo o nunca nulo en el intervalo donde $p$ y $q$ son continuas. La relación anterior muestra que ambos Wronskianos se anulan o no se anulan a la vez; por el criterio del Wronskiano, la independencia de un par equivale a la del otro.

La razón estructural es que la matriz del cambio de base tiene determinante $-2 \neq 0$: toda combinación lineal invertible de un conjunto fundamental de soluciones es de nuevo un conjunto fundamental.
