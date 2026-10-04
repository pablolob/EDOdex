
## Enunciado

En cada uno de los problemas 1 a 10, halle la solución general de la ecuación diferencial dada.

9. $25y'' - 20y' + 4y = 0$

## Solución

La ecuación característica $25r^2-20r+4=(5r-2)^2=0$ tiene la raíz repetida $r=\frac{2}{5}$. La solución general es

$$
y(x)=C_1e^{2x/5}+C_2xe^{2x/5}=(C_1+C_2x)e^{2x/5}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
25r^2e^{rx}-20re^{rx}+4e^{rx}=e^{rx}\left(25r^2-20r+4\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
25r^2-20r+4=0.
$$

El polinomio es un cuadrado perfecto,

$$
25r^2-20r+4=(5r-2)^2=0,
$$

de modo que hay una única raíz real, $r=\frac{2}{5}$, con multiplicidad dos. Una solución es $e^{2x/5}$. Para una raíz repetida, la segunda solución linealmente independiente se obtiene multiplicando por $x$, es decir, $xe^{2x/5}$. Por lo tanto, la solución general es

$$
y(x)=C_1e^{2x/5}+C_2xe^{2x/5}=(C_1+C_2x)e^{2x/5}.
$$

## Observaciones

El discriminante de la ecuación característica es $(-20)^2-4(25)(4)=400-400=0$, lo que confirma la raíz doble. Ambas funciones $e^{2x/5}$ y $xe^{2x/5}$ están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.

### Método alternativo: reducción de orden

Conocida la solución $y_1=e^{2x/5}$, puede buscarse una segunda solución de la forma $y_2=u(x)e^{2x/5}$. Al sustituir en la ecuación se obtiene $u''=0$, de donde $u(x)=x$ (salvo combinaciones con $y_1$) y, por tanto, $y_2=xe^{2x/5}$.
