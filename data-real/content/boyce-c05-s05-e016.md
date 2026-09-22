
## Enunciado

En cada uno de los problemas 13 a 16, encuentre la solución del problema con valor inicial dado.

16. $x^2 y'' + 3xy' + 5y = 0, \quad y(1) = 1, \quad y'(1) = -1$

## Solución

La solución del problema con valor inicial, válida en $(0,\infty)$, es

$$
y(x)=\frac{\cos(2\ln x)}{x}.
$$

## Resolución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** (equidimensional). El coeficiente de $y''$ se anula en $x=0$, único punto singular; como la condición inicial se impone en $x=1$, el intervalo de validez es $(0,\infty)$.

Se propone $y=x^r$ para $x>0$, con derivadas

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\cdot r(r-1)x^{r-2}+3x\cdot rx^{r-1}+5x^r
  &= x^r\left[r(r-1)+3r+5\right] \\
  &= x^r\left(r^2+2r+5\right)=0.
\end{aligned}
$$

Como $x^r\ne 0$, se obtiene la **ecuación característica**

$$
r^2+2r+5=0,
$$

cuyas raíces son

$$
r=\frac{-2\pm\sqrt{4-20}}{2}=\frac{-2\pm 4i}{2}=-1\pm 2i.
$$

Con $\alpha=-1$ y $\beta=2$, la solución general para $x>0$ es

$$
y(x)=x^{-1}\left[C_1\cos(2\ln x)+C_2\sin(2\ln x)\right].
$$

Para aplicar las condiciones iniciales se deriva. Con la regla del producto,

$$
y'(x)=x^{-2}\left[\left(-C_1+2C_2\right)\cos(2\ln x)-\left(C_2+2C_1\right)\sin(2\ln x)\right].
$$

Al evaluar en $x=1$, donde $\ln 1=0$, resulta $y(1)=C_1$ y $y'(1)=-C_1+2C_2$. Las condiciones iniciales dan

$$
\begin{aligned}
C_1 &= 1, \\
-C_1+2C_2 &= -1.
\end{aligned}
$$

De la primera ecuación, $C_1=1$. Al sustituir en la segunda, $-1+2C_2=-1$, de donde $C_2=0$. Por lo tanto,

$$
y(x)=x^{-1}\cos(2\ln x)=\frac{\cos(2\ln x)}{x}.
$$

La sustitución directa confirma el resultado. Con $y=x^{-1}\cos(2\ln x)$ se tiene

$$
y'=-x^{-2}\left[\cos(2\ln x)+2\sin(2\ln x)\right],
\qquad
y''=x^{-3}\left[6\sin(2\ln x)-2\cos(2\ln x)\right].
$$

Entonces

$$
\begin{aligned}
x^2y''+3xy'+5y
&= x^{-1}\left(6\sin-2\cos\right)+x^{-1}\left(-3\cos-6\sin\right)+5x^{-1}\cos \\
&= x^{-1}\left(-2-3+5\right)\cos(2\ln x)+x^{-1}\left(6-6\right)\sin(2\ln x)=0.
\end{aligned}
$$

La solución está definida en $(0,\infty)$, el intervalo que contiene a $x=1$ y no incluye el punto singular $x=0$.

## Observaciones

El punto $x=0$ es el único punto singular de la ecuación. La solución no está definida en él, ya que el factor $x^{-1}$ diverge cuando $x\to 0^+$. En $(-\infty,0)$ la solución general de la misma familia se escribe con $\ln|x|$.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ el cambio $t=\ln x$ transforma la ecuación de Cauchy-Euler en la de coeficientes constantes

$$
\ddot y+2\dot y+5y=0,
$$

cuya ecuación característica $\lambda^2+2\lambda+5=0$ tiene las mismas raíces $\lambda=-1\pm 2i$. La solución $y=e^{-t}\left[C_1\cos(2t)+C_2\sin(2t)\right]$ conduce al mismo resultado al deshacer el cambio.
