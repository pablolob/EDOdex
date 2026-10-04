
## Enunciado

En cada uno de los problemas 17 a 22, resuelva el problema con valor inicial dado.

22. $y'' + 2y' + 2y = 0, \quad y(\pi/4) = 2, \quad y'(\pi/4) = -2$

## Solución

$$
y(x)=\sqrt{2}\,e^{\pi/4-x}\left(\cos x+\sin x\right).
$$

## Resolución

La ecuación es lineal, homogénea, de segundo orden y con coeficientes
constantes. Se aplica el **método de la ecuación característica**. El polinomio
auxiliar es

$$
r^{2}+2r+2=0.
$$

Sus raíces son

$$
r=\frac{-2\pm\sqrt{4-8}}{2}=\frac{-2\pm 2i}{2}=-1\pm i.
$$

Las raíces son complejas conjugadas, $\alpha\pm i\beta$ con $\alpha=-1$ y
$\beta=1$. La solución general es

$$
y(x)=e^{-x}\left(c_{1}\cos x+c_{2}\sin x\right),
$$

con $c_{1}$ y $c_{2}$ constantes arbitrarias.

Se aplican las condiciones iniciales. La condición $y(\pi/4)=2$ da

$$
e^{-\pi/4}\left(c_{1}\cos\frac{\pi}{4}+c_{2}\sin\frac{\pi}{4}\right)
=e^{-\pi/4}\,\frac{c_{1}+c_{2}}{\sqrt{2}}=2,
$$

de donde

$$
c_{1}+c_{2}=2\sqrt{2}\,e^{\pi/4}.
$$

La derivada de la solución general es

$$
y'(x)=e^{-x}\left[(c_{2}-c_{1})\cos x-(c_{1}+c_{2})\sin x\right].
$$

La condición $y'(\pi/4)=-2$ conduce a

$$
e^{-\pi/4}\left[(c_{2}-c_{1})\frac{1}{\sqrt{2}}-(c_{1}+c_{2})\frac{1}{\sqrt{2}}\right]
=-\sqrt{2}\,c_{1}\,e^{-\pi/4}=-2,
$$

por lo que

$$
c_{1}=\sqrt{2}\,e^{\pi/4}.
$$

Al sustituir en $c_{1}+c_{2}=2\sqrt{2}\,e^{\pi/4}$ se obtiene
$c_{2}=\sqrt{2}\,e^{\pi/4}$. Por tanto $c_{1}=c_{2}=\sqrt{2}\,e^{\pi/4}$ y la
solución del problema con valor inicial es

$$
y(x)=e^{-x}\left(\sqrt{2}\,e^{\pi/4}\cos x+\sqrt{2}\,e^{\pi/4}\sin x\right)
=\sqrt{2}\,e^{\pi/4-x}\left(\cos x+\sin x\right).
$$

## Observaciones

La solución está definida y es derivable para todo $x\in\mathbb{R}$, sin
singularidades ni restricciones de dominio; el intervalo de validez es
$(-\infty,\infty)$.

Como $\cos x+\sin x=\sqrt{2}\cos\left(x-\frac{\pi}{4}\right)$, la solución puede
escribirse de forma equivalente como $y(x)=2\,e^{\pi/4-x}\cos\left(x-\frac{\pi}{4}\right)$.
Esta forma muestra que la solución es una oscilación de amplitud decreciente
$2\,e^{\pi/4-x}$, que tiende a cero cuando $x\to\infty$.

### Método alternativo: solución del sistema lineal de constantes

También puede determinarse la solución escribiendo la solución general en la
forma de amplitud y fase $y(x)=R\,e^{-x}\cos(x-\delta)$ y aplicando directamente
las condiciones. Este camino es equivalente y conduce al mismo resultado.
