
## Enunciado

Demuestre que la ecuación de Legendre también puede escribirse como

$$\left[(1 - x^2)y'\right]' = -\alpha(\alpha + 1)y.$$

Entonces se concluye que $\left[(1 - x^2)P_n'(x)\right]' = -n(n + 1)P_n(x)$ y $\left[(1 - x^2)P_m'(x)\right]' = -m(m + 1)P_m(x)$. Demuestre al multiplicar la primera ecuación por $P_m(x)$ y la segunda por $P_n(x)$ y a continuación integrar por partes que

$$\int_{-1}^1 P_n(x)P_m(x)\,dx = 0 \quad \text{si } n \neq m.$$

Esta propiedad de los polinomios de Legendre se conoce como propiedad de ortogonalidad. Si $m = n$, es posible demostrar que el valor de la integral que acaba de darse es $2/(2n + 1)$.

## Solución

La ecuación de Legendre admite la forma autoadjunta

$$
\left[(1-x^2)y'\right]'=-\alpha(\alpha+1)y,
$$

y de ella se sigue la **ortogonalidad** de los polinomios de Legendre:

$$
\int_{-1}^{1}P_n(x)P_m(x)\,dx=0 \qquad (n\neq m).
$$

## Resolución

La ecuación de Legendre es

$$
(1-x^2)y''-2xy'+\alpha(\alpha+1)y=0.
$$

Al derivar el producto $(1-x^2)y'$ con la **regla del producto**,

$$
\left[(1-x^2)y'\right]'=(1-x^2)y''-2xy',
$$

de modo que la ecuación se reescribe como

$$
\left[(1-x^2)y'\right]'=-\alpha(\alpha+1)y.
$$

Para $y=P_n(x)$, con $\alpha=n$, y para $y=P_m(x)$, con $\alpha=m$, resultan respectivamente

$$
\left[(1-x^2)P_n'\right]'=-n(n+1)P_n,
\qquad
\left[(1-x^2)P_m'\right]'=-m(m+1)P_m.
$$

Se multiplica la primera igualdad por $P_m$ y la segunda por $P_n$:

$$
P_m\left[(1-x^2)P_n'\right]'=-n(n+1)P_nP_m,
\qquad
P_n\left[(1-x^2)P_m'\right]'=-m(m+1)P_nP_m.
$$

Al restar la segunda de la primera,

$$
P_m\left[(1-x^2)P_n'\right]'-P_n\left[(1-x^2)P_m'\right]'=(m-n)(m+n+1)P_nP_m.
$$

Se integra esta identidad en $[-1,1]$:

$$
\int_{-1}^{1}\left(P_m\left[(1-x^2)P_n'\right]'-P_n\left[(1-x^2)P_m'\right]'\right)dx
=(m-n)(m+n+1)\int_{-1}^{1}P_nP_m\,dx.
$$

Se aplica **integración por partes** a cada término del miembro izquierdo. Para el primero,

$$
\int_{-1}^{1}P_m\left[(1-x^2)P_n'\right]'dx
=\left[P_m(1-x^2)P_n'\right]_{-1}^{1}-\int_{-1}^{1}(1-x^2)P_m'P_n'\,dx.
$$

El término de frontera se anula porque el factor $(1-x^2)$ vale cero en $x=\pm 1$ y tanto $P_m$ como $P_n'$ son polinomios, luego toman valores finitos. De la misma manera,

$$
\int_{-1}^{1}P_n\left[(1-x^2)P_m'\right]'dx
=-\int_{-1}^{1}(1-x^2)P_m'P_n'\,dx.
$$

Ambos términos coinciden, así que su diferencia es nula:

$$
0=(m-n)(m+n+1)\int_{-1}^{1}P_nP_m\,dx.
$$

Si $n\neq m$, entonces $m-n\neq 0$ y $m+n+1\ge 1$; por tanto el producto $(m-n)(m+n+1)$ no se anula. En consecuencia,

$$
\int_{-1}^{1}P_nP_m\,dx=0.
$$

## Observaciones

La forma $\left[(1-x^2)y'\right]'+\alpha(\alpha+1)y=0$ es la forma autoadjunta (de Sturm-Liouville) de la ecuación de Legendre, con peso $r(x)=1$. La ortogonalidad demostrada es la manifestación de esa estructura para $n\neq m$.

Para $n=m$ el procedimiento no aporta información, pues el factor $m-n$ se anula. La normalización correspondiente es

$$
\int_{-1}^{1}\left[P_n(x)\right]^2dx=\frac{2}{2n+1},
$$

resultado que se obtiene por separado, por ejemplo a partir de la fórmula de Rodrigues.
