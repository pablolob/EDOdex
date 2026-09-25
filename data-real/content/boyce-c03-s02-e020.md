
## Enunciado

Si el wronskiano de $f$ y $g$ es $x\cos x - \sin x$ y si $u = f + 3g$, $v = f - g$, halle el wronskiano de $u$ y $v$.

## Solución

El wronskiano de $u = f + 3g$ y $v = f - g$ es

$$
W(u,v)(x) = -4\,W(f,g)(x).
$$

Con $W(f,g)(x) = x\cos x - \sin x$,

$$
W(u,v)(x) = 4\sin x - 4x\cos x.
$$

## Resolución

Para dos funciones diferenciables $f$ y $g$, el **wronskiano** es

$$
W(f,g)(x) = f(x)g'(x) - f'(x)g(x).
$$

Las derivadas de $u = f + 3g$ y $v = f - g$ son

$$
u' = f' + 3g', \qquad v' = f' - g'.
$$

Al sustituir en la definición,

$$
\begin{aligned}
W(u,v) &= u v' - u' v \\
&= (f+3g)(f'-g') - (f'+3g')(f-g) \\
&= f f' - f g' + 3 f' g - 3 g g' - f f' + f' g - 3 f g' + 3 g g' \\
&= 4(f' g - f g') \\
&= -4(f g' - f' g) \\
&= -4\,W(f,g).
\end{aligned}
$$

Como $W(f,g)(x) = x\cos x - \sin x$, resulta

$$
W(u,v)(x) = -4(x\cos x - \sin x) = 4\sin x - 4x\cos x.
$$

La relación es válida en todo intervalo donde $f$ y $g$ sean diferenciables; la expresión final está definida para todo $x \in \mathbb{R}$.

## Observaciones

### Método alternativo: propiedad multilineal del wronskiano

El wronskiano es el determinante de la matriz formada por $(u,v)$ y $(u',v')$. Puesto que

$$
\begin{pmatrix} u \\ v \end{pmatrix} =
\begin{pmatrix} 1 & 3 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} f \\ g \end{pmatrix},
$$

la multilinealidad del determinante da

$$
W(u,v) =
\begin{vmatrix} 1 & 3 \\ 1 & -1 \end{vmatrix} W(f,g) = -4\,W(f,g).
$$

En general, $W(af+bg,\,cf+dg) = (ad-bc)\,W(f,g)$.
