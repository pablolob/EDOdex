
## Enunciado

En cada uno de los problemas 24 a 29, aplique el método del problema 23 para resolver la ecuación dada para $x > 0$.

28. $x^2 y'' + xy' + 4y = \sin(\ln x)$

## Solución

El cambio $z=\ln x$ reduce la ecuación a una de coeficientes constantes. La solución general, válida en $x>0$, es

$$
y(x)=c_1\cos(2\ln x)+c_2\sin(2\ln x)+\frac{1}{3}\sin(\ln x).
$$

## Resolución

La ecuación es una **ecuación de Cauchy-Euler** no homogénea. El método del problema 23 introduce la variable $z=\ln x$, equivalente a $x=e^z$, definida en el intervalo $x>0$ que fija el enunciado. Para este cambio se cumple

$$
x\frac{dy}{dx}=\frac{dy}{dz}, \qquad x^2\frac{d^2y}{dx^2}=\frac{d^2y}{dz^2}-\frac{dy}{dz}.
$$

Como $\sin(\ln x)=\sin z$, al sustituir en $x^2y''+xy'+4y=\sin(\ln x)$ resulta

$$
\left(\frac{d^2y}{dz^2}-\frac{dy}{dz}\right)+\frac{dy}{dz}+4y=\sin z,
$$

es decir,

$$
\frac{d^2y}{dz^2}+4y=\sin z.
$$

**Solución homogénea.** La ecuación característica de $y''+4y=0$ es $r^2+4=0$, con raíces $r=\pm 2i$. La solución homogénea es

$$
y_c(z)=c_1\cos(2z)+c_2\sin(2z).
$$

**Solución particular.** El término no homogéneo $\sin z$ no coincide con ninguna solución de la ecuación homogénea, de modo que se propone

$$
y_p(z)=A\sin z+B\cos z.
$$

Con $y_p''=-A\sin z-B\cos z$ se obtiene

$$
y_p''+4y_p=3A\sin z+3B\cos z=\sin z,
$$

de donde $A=\frac{1}{3}$ y $B=0$. Por lo tanto, $y_p(z)=\frac{1}{3}\sin z$.

**Solución general.** La solución general de la ecuación transformada es la suma de la solución homogénea y la particular. Al volver a la variable original con $z=\ln x$,

$$
y(x)=c_1\cos(2\ln x)+c_2\sin(2\ln x)+\frac{1}{3}\sin(\ln x), \qquad x>0.
$$

**Comprobación.** Para $y_p=\frac{1}{3}\sin u$ con $u=\ln x$ se tiene $y_p'=\frac{\cos u}{3x}$ y $y_p''=-\frac{\sin u+\cos u}{3x^2}$. Entonces

$$
x^2y_p''+xy_p'+4y_p=-\frac{\sin u+\cos u}{3}+\frac{\cos u}{3}+\frac{4\sin u}{3}=\sin u.
$$

Las funciones $\cos(2u)$ y $\sin(2u)$ satisfacen la ecuación homogénea, según confirma la ecuación característica. Por linealidad, la suma propuesta satisface la ecuación completa.

## Observaciones

El cambio $z=\ln x$ solo es válido en $x>0$, el intervalo fijado por el enunciado. La ecuación es lineal de segundo orden, por lo que no presenta soluciones singulares ni soluciones perdidas.

### Método alternativo: solución particular por exponenciales complejas

La solución particular también se obtiene escribiendo $\sin z=\operatorname{Im}(e^{iz})$ y proponiendo $y_p=\operatorname{Im}(C e^{iz})$. Al sustituir, $(i^2+4)C=1$, es decir $C=\frac{1}{3}$, y resulta $y_p=\frac{1}{3}\sin z$, como antes.
