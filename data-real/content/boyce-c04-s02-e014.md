
## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

14. $y^{\mathrm{iv}} - 4y''' + 4y'' = 0$

## Solución

La solución general es

$$
y(x) = c_1 + c_2 x + c_3 e^{2x} + c_4 x e^{2x},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

La ecuación

$$
y^{\mathrm{iv}} - 4y''' + 4y'' = 0
$$

es **lineal homogénea de cuarto orden con coeficientes constantes**. Se propone $y = e^{rx}$, lo que conduce a la **ecuación característica**

$$
r^4 - 4r^3 + 4r^2 = 0.
$$

Se factoriza extrayendo el factor común $r^2$ y reconociendo el trinomio cuadrado perfecto:

$$
r^2(r^2 - 4r + 4) = r^2(r - 2)^2 = 0.
$$

Las raíces son $r = 0$ y $r = 2$, ambas de multiplicidad dos.

Para una raíz real $r$ de multiplicidad $m$, la ecuación característica aporta las soluciones $e^{rx}, xe^{rx}, \dots, x^{m-1}e^{rx}$. La raíz $r = 0$, de multiplicidad dos, aporta $1$ y $x$; la raíz $r = 2$, también de multiplicidad dos, aporta $e^{2x}$ y $xe^{2x}$. Estas cuatro funciones son linealmente independientes en $\mathbb{R}$, de modo que forman un conjunto fundamental de soluciones.

La solución general es la combinación lineal de ese conjunto fundamental:

$$
y(x) = c_1 + c_2 x + c_3 e^{2x} + c_4 x e^{2x}.
$$

Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

- El polinomio característico tiene dos raíces repetidas, cada una de multiplicidad dos. El término $c_1 + c_2 x$ proviene de la raíz doble $r = 0$, que corresponde a la ausencia de los términos en $y$ y $y'$ en la ecuación.
- No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse.

### Método alternativo: reducción con $u = y''$

Como la ecuación no contiene $y$ ni $y'$, la sustitución $u = y''$ reduce el orden a la ecuación de segundo orden

$$
u'' - 4u' + 4u = 0,
$$

cuya ecuación característica $(r - 2)^2 = 0$ da $u = (C_3 + C_4 x)e^{2x}$. Al integrar dos veces se recupera la forma de la solución general, con las constantes redefinidas.
