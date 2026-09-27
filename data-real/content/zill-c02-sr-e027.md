
## Enunciado

En problemas 27-30 exprese la solución del problema de valor inicial dado en términos de una función dada por la integral definida.

$$2\frac{dy}{dx} + (4 \cos x)y = x, \quad y(0) = 0$$

## Solución

La solución del problema de valor inicial es

$$
y(x)=\frac{1}{2}e^{-2\sin x}\int_0^x t\,e^{2\sin t}\,dt.
$$

## Resolución

La ecuación es **lineal de primer orden** y **no homogénea**. Se escribe en forma estándar dividiendo por $2$:

$$
\frac{dy}{dx}+(2\cos x)y=\frac{x}{2}.
$$

El factor integrante es

$$
\mu(x)=\exp\!\left(\int 2\cos x\,dx\right)=e^{2\sin x}.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada del producto $e^{2\sin x}y$:

$$
\frac{d}{dx}\left(e^{2\sin x}y\right)=\frac{x}{2}e^{2\sin x}.
$$

Se integra esta igualdad desde $0$ hasta $x$:

$$
e^{2\sin x}y(x)-e^{0}y(0)=\frac{1}{2}\int_0^x t\,e^{2\sin t}\,dt.
$$

La condición inicial $y(0)=0$ anula el segundo término del miembro izquierdo. Al despejar $y(x)$ resulta

$$
y(x)=\frac{1}{2}e^{-2\sin x}\int_0^x t\,e^{2\sin t}\,dt.
$$

El integrando $t\,e^{2\sin t}$ es continuo en todo $\mathbb{R}$. Por el **teorema fundamental del cálculo**, la integral definida define una función derivable en todo $\mathbb{R}$ y se anula en $x=0$, de modo que la condición inicial se satisface. La sustitución directa confirma la solución: al derivar el producto,

$$
\frac{d}{dx}\left(\frac{1}{2}e^{-2\sin x}\int_0^x t\,e^{2\sin t}\,dt\right)
=-2\cos x\,y(x)+\frac{x}{2},
$$

es decir, $y'+(2\cos x)y=x/2$, que es la ecuación original.

## Observaciones

Una forma equivalente, con el factor exponencial dentro de la integral, es

$$
y(x)=\frac{1}{2}\int_0^x t\,e^{2(\sin t-\sin x)}\,dt.
$$

La primitiva de $t\,e^{2\sin t}$ no se expresa con funciones elementales, por lo que el resultado se deja en forma integral. La solución está definida y es derivable en todo $\mathbb{R}$.
