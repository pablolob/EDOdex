
## Enunciado

En cada uno de los problemas 33 a 38 elimine las constantes $c_1$ y $c_2$ entre $y$, $y'$ y $y''$, para encontrar la ecuación diferencial que satisface la familia dada de funciones.

35. $y = c_1 x + c_2 \sin x$

## Solución

La familia satisface la ecuación diferencial **lineal, homogénea y de segundo orden**

$$
(x\cos x-\sin x)\,y''+x\sin x\,y'-\sin x\,y=0.
$$

La ecuación determina la solución general en los intervalos que no contienen los ceros de $x\cos x-\sin x$.

## Resolución

Se derivan dos veces las funciones de la familia:

$$
\begin{aligned}
y   &= c_1 x + c_2\sin x, \\
y'  &= c_1 + c_2\cos x, \\
y'' &= -c_2\sin x.
\end{aligned}
$$

La segunda derivada contiene solo la constante $c_2$; de ella se despeja el producto $c_2\sin x$:

$$
c_2\sin x = -y''.
$$

Al sustituir este valor en la expresión de $y$ se aísla el término con $c_1$:

$$
y = c_1 x + c_2\sin x = c_1 x - y'' \quad\Longrightarrow\quad c_1 x = y + y''.
$$

Para eliminar ambas constantes se multiplica $y' = c_1 + c_2\cos x$ por $x\sin x$, de modo que aparezcan los productos $c_1 x$ y $c_2\sin x$:

$$
x\sin x\,y' = (c_1 x)\sin x + (c_2\sin x)\,x\cos x.
$$

Al reemplazar $c_1 x$ y $c_2\sin x$ por las expresiones obtenidas,

$$
x\sin x\,y' = (y + y'')\sin x - x\cos x\,y''.
$$

Se agrupan los términos y resulta la ecuación diferencial pedida:

$$
(x\cos x-\sin x)\,y''+x\sin x\,y'-\sin x\,y=0.
$$

**Verificación.** Al sustituir las tres derivadas en el miembro izquierdo,

$$
\begin{aligned}
&(x\cos x-\sin x)(-c_2\sin x)+x\sin x\,(c_1+c_2\cos x)-\sin x\,(c_1x+c_2\sin x)\\
&\quad=-c_2x\cos x\sin x+c_2\sin^2x+c_1x\sin x+c_2x\sin x\cos x-c_1x\sin x-c_2\sin^2x=0,
\end{aligned}
$$

para todo $x$ y cualesquiera valores de $c_1$ y $c_2$.

## Observaciones

La familia contiene dos constantes arbitrarias, de modo que la ecuación que la describe es de **segundo orden**. A diferencia de las familias de exponenciales o de senos y cosenos, aquí las funciones $x$ y $\sin x$ no son soluciones de una ecuación con coeficientes constantes; la ecuación hallada tiene coeficientes variables.

En forma normal es

$$
y''+\frac{x\sin x}{x\cos x-\sin x}\,y'-\frac{\sin x}{x\cos x-\sin x}\,y=0.
$$

Los puntos singulares son los ceros de $x\cos x-\sin x$, es decir, $x=0$ y las raíces de $\tan x=x$. La familia $y=c_1x+c_2\sin x$ está definida para todo $x\in\mathbb{R}$, pero la ecuación solo describe su solución general en intervalos que no contienen esos ceros. Por ser lineal y homogénea, no posee soluciones singulares.

### Método alternativo: determinante

Las tres expresiones son combinaciones lineales de $(x,1,0)$ y $(\sin x,\cos x,-\sin x)$ con coeficientes $c_1$ y $c_2$. Por tanto, los tres vectores son linealmente dependientes y el determinante formado por ellos se anula:

$$
\begin{vmatrix}
y & x & \sin x\\
y' & 1 & \cos x\\
y'' & 0 & -\sin x
\end{vmatrix}=0.
$$

Al desarrollarlo se obtiene la misma ecuación, sin necesidad de despejar las constantes.
