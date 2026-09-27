
## Enunciado

En los problemas 19-26 resuelva la ecuación diferencial dada.

$$(2r^2 \cos \theta \text{ sen } \theta + r \cos \theta) \, d\theta + (4r + \text{ sen } \theta - 2r \cos^2 \theta) \, dr = 0$$

## Solución

La ecuación es **exacta de primer orden**. Su solución general, en forma
implícita, es

$$
\boxed{r^{2}(1+\sin^{2}\theta)+r\sin\theta=C}.
$$

## Resolución

La ecuación ya está escrita en la forma diferencial
$M(\theta,r)\,d\theta+N(\theta,r)\,dr=0$, con

$$
M(\theta,r)=2r^{2}\cos\theta\sin\theta+r\cos\theta,
\qquad
N(\theta,r)=4r+\sin\theta-2r\cos^{2}\theta.
$$

Se aplica el **test de exactitud**, que compara las derivadas parciales cruzadas:

$$
\frac{\partial M}{\partial r}=4r\cos\theta\sin\theta+\cos\theta,
\qquad
\frac{\partial N}{\partial\theta}=\cos\theta+4r\cos\theta\sin\theta.
$$

Ambas coinciden, de modo que la ecuación es **exacta**. Existe entonces una
función $F(\theta,r)$ con

$$
\frac{\partial F}{\partial\theta}=M(\theta,r),
\qquad
\frac{\partial F}{\partial r}=N(\theta,r).
$$

Se integra la primera igualdad respecto de $\theta$, manteniendo $r$ constante:

$$
F(\theta,r)=\int\left(2r^{2}\cos\theta\sin\theta+r\cos\theta\right)d\theta
=r^{2}\sin^{2}\theta+r\sin\theta+g(r),
$$

donde $g(r)$ es la función arbitraria de integración. La primera integral se
calcula con la sustitución $u=\sin\theta$, $du=\cos\theta\,d\theta$.

Se deriva este resultado respecto de $r$ y se iguala a $N(\theta,r)$:

$$
\frac{\partial F}{\partial r}
=2r\sin^{2}\theta+\sin\theta+g'(r)
=4r+\sin\theta-2r\cos^{2}\theta.
$$

Al cancelar $\sin\theta$ en ambos miembros y usar
$\sin^{2}\theta+\cos^{2}\theta=1$,

$$
g'(r)=4r-2r\cos^{2}\theta-2r\sin^{2}\theta=4r-2r=2r,
$$

por lo que $g(r)=r^{2}$. La función potencial es

$$
F(\theta,r)=r^{2}\sin^{2}\theta+r\sin\theta+r^{2}
=r^{2}\left(1+\sin^{2}\theta\right)+r\sin\theta,
$$

y la solución general de la ecuación exacta se escribe de forma implícita como
$F(\theta,r)=C$.

La familia satisface la ecuación. Como $F_\theta=M$ y $F_r=N$, el diferencial
total es

$$
dF=F_\theta\,d\theta+F_r\,dr=M\,d\theta+N\,dr=0,
$$

es decir, cada curva de nivel es solución de la ecuación diferencial.

## Observaciones

Los coeficientes $M$ y $N$ son funciones diferenciables en todo
$\mathbb{R}^{2}$ y en el procedimiento no se divide por ningún factor. La familia
implícita contiene todas las soluciones, sin soluciones singulares ni ramas
perdidas. La función $r(\theta)=0$ es solución constante e integra la familia con
$C=0$.

Usando $\sin^{2}\theta=1-\cos^{2}\theta$, la solución también se escribe como
$r^{2}\left(2-\cos^{2}\theta\right)+r\sin\theta=C$.
