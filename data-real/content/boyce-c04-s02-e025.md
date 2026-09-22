
## Enunciado

En cada uno de los problemas 23 a 26, halle la solución del problema con valor inicial dado.

25. $y^{iv} - 4y''' + 4y'' = 0; \quad y(1) = -1, \quad y'(1) = 2, \quad y''(1) = 0, \quad y'''(1) = 0$

## Solución

$$
y(x)=2x-3.
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **orden 4** y con **coeficientes constantes**. Al proponer $y=e^{rx}$, la ecuación característica resulta

$$
r^4-4r^3+4r^2=r^2(r-2)^2=0.
$$

Las raíces son $r=0$ y $r=2$, ambas dobles. Cada raíz doble aporta dos soluciones independientes, $e^{rx}$ y $x e^{rx}$. Por tanto, la solución general es

$$
y=C_1+C_2x+(C_3+C_4x)e^{2x}.
$$

Sus derivadas sucesivas son

$$
\begin{aligned}
y' &= C_2+\left(2C_3+C_4+2C_4x\right)e^{2x},\\
y'' &= \left(4C_3+4C_4+4C_4x\right)e^{2x},\\
y''' &= \left(8C_3+12C_4+8C_4x\right)e^{2x}.
\end{aligned}
$$

Al evaluar en $x=1$, con $E=e^{2}\ne 0$, las condiciones iniciales dan

$$
\begin{aligned}
y(1) &= C_1+C_2+(C_3+C_4)E = -1,\\
y'(1) &= C_2+(2C_3+3C_4)E = 2,\\
y''(1) &= (4C_3+8C_4)E = 0,\\
y'''(1) &= (8C_3+20C_4)E = 0.
\end{aligned}
$$

Las dos últimas ecuaciones forman el sistema

$$
\begin{aligned}
4C_3+8C_4 &= 0,\\
8C_3+20C_4 &= 0.
\end{aligned}
$$

De la primera se obtiene $C_3=-2C_4$. Al sustituir en la segunda resulta $-16C_4+20C_4=4C_4=0$, de modo que $C_4=0$ y $C_3=0$.

Con $C_3=C_4=0$, la segunda condición da $C_2=2$ y la primera da $C_1+2=-1$, es decir $C_1=-3$. La solución del problema con valor inicial es

$$
y(x)=2x-3.
$$

## Observaciones

Las condiciones $y''(1)=0$ y $y'''(1)=0$ anulan las dos contribuciones exponenciales, por lo que la solución se reduce a la parte polinómica asociada a la raíz $r=0$. El resultado es coherente: la recta $y=2x-3$ tiene segunda derivada idéntica a cero, así que satisface la ecuación y las cuatro condiciones.

La ecuación es lineal y homogénea, de modo que no existen soluciones singulares y su solución general contiene todas las soluciones. Como los coeficientes son constantes, el teorema de existencia y unicidad garantiza que esta solución es la única y está definida para todo $x\in\mathbb{R}$.
