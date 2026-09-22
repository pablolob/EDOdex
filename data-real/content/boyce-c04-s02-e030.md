
## Enunciado

En cada uno de los problemas 29 a 34, use una computadora para hallar la solución general de la ecuación diferencial dada.

30. $y''' - y = 0$

## Solución

La solución general es

$$
y(x)=C_1 e^{x}+e^{-x/2}\left(C_2\cos\frac{\sqrt{3}\,x}{2}+C_3\sin\frac{\sqrt{3}\,x}{2}\right),
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación

$$
y''' - y = 0
$$

es **lineal homogénea de tercer orden con coeficientes constantes**. Se propone $y=e^{rx}$. Como $y'''=r^3e^{rx}$, al sustituir resulta

$$
(r^3-1)e^{rx}=0.
$$

La exponencial $e^{rx}$ no se anula, de modo que la ecuación se satisface exactamente cuando se anula el factor polinómico. La **ecuación característica** es

$$
r^3-1=0.
$$

El enunciado pide emplear una computadora. Un sistema de álgebra computacional factoriza el polinomio auxiliar y devuelve sus raíces:

$$
r^3-1=(r-1)(r^2+r+1), \qquad r_1=1, \qquad r_{2,3}=-\frac{1}{2}\pm\frac{\sqrt{3}}{2}i.
$$

La factorización se comprueba por la diferencia de cubos, $r^3-1=(r-1)(r^2+r+1)$, y las raíces complejas provienen de la fórmula cuadrática aplicada a $r^2+r+1=0$:

$$
r=\frac{-1\pm\sqrt{1-4}}{2}=-\frac{1}{2}\pm\frac{\sqrt{3}}{2}i.
$$

Las tres raíces son simples. La raíz real $r_1=1$ aporta la solución $e^{x}$. El par complejo conjugado $\lambda\pm i\mu$ con $\lambda=-\tfrac{1}{2}$ y $\mu=\tfrac{\sqrt{3}}{2}$ aporta las soluciones reales

$$
e^{-x/2}\cos\frac{\sqrt{3}\,x}{2}, \qquad e^{-x/2}\sin\frac{\sqrt{3}\,x}{2}.
$$

Estas tres funciones son linealmente independientes en $\mathbb{R}$ y forman un conjunto fundamental de soluciones. La solución general es su combinación lineal:

$$
y(x)=C_1 e^{x}+e^{-x/2}\left(C_2\cos\frac{\sqrt{3}\,x}{2}+C_3\sin\frac{\sqrt{3}\,x}{2}\right).
$$

La sustitución confirma el resultado. Para $y=e^{x}$ se tiene $y'''=e^{x}$, luego $y'''-y=e^{x}-e^{x}=0$. Para las funciones del par complejo, el operador $D^2+D+1$ las anula, porque

$$
D^2+D+1=(D-\lambda)^2+\mu^2 \quad\text{con}\quad \lambda=-\frac{1}{2},\ \mu=\frac{\sqrt{3}}{2},
$$

y entonces $(D-1)(D^2+D+1)y=(D^3-1)y=0$. Al ser una ecuación lineal homogénea con coeficientes constantes, la solución está definida en todo $\mathbb{R}$.

## Observaciones

Las tres raíces son las raíces cúbicas de la unidad. El par complejo tiene parte real negativa, por lo que sus dos contribuciones decaen exponencialmente cuando $x\to\infty$, mientras que el término $C_1e^{x}$ crece si $C_1\ne 0$.

No hay soluciones singulares ni perdidas: la ecuación es lineal homogénea y no se divide por ningún factor que pueda anularse. El número de constantes arbitrarias coincide con el orden de la ecuación.

### Método alternativo: raíces cúbicas de la unidad en forma polar

La ecuación $r^3=1$ también se resuelve escribiendo la unidad en forma polar, $1=e^{i(0+2k\pi)}$, $k\in\mathbb{Z}$. Sus raíces cúbicas son

$$
r_k=e^{i2k\pi/3}, \qquad k=0,1,2,
$$

es decir, $r_0=1$, $r_1=e^{2\pi i/3}=-\tfrac{1}{2}+\tfrac{\sqrt{3}}{2}i$ y $r_2=e^{4\pi i/3}=-\tfrac{1}{2}-\tfrac{\sqrt{3}}{2}i$. Con ellas se forman las mismas tres soluciones reales.
