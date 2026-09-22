---
title: "Boyce 5.5 Ejercicio 22"
exercise-id: boyce-c05-s05-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
  - resolver-analiticamente.reduccion-orden
  - verificar.solucion
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - integracion.directa
  - derivacion.producto
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s05i01-p278.png
---

## Enunciado

Con aplicación del método de reducción de orden, demuestre que si $r_1$ es una raíz repetida de $r(r - 1) + \alpha r + \beta = 0$, entonces $x^{r_1}$ y $x^{r_1} \ln x$ son soluciones de $x^2 y'' + \alpha xy' + \beta y = 0$ para $x > 0$.

## Solución

Para $x>0$, las funciones

$$
y_1(x)=x^{r_1}, \qquad y_2(x)=x^{r_1}\ln x
$$

son soluciones de $x^2y''+\alpha xy'+\beta y=0$. Además son linealmente independientes, de modo que forman un conjunto fundamental y la solución general en el intervalo $(0,\infty)$ es

$$
y(x)=x^{r_1}\left(C_1+C_2\ln x\right).
$$

## Resolución

La ecuación es lineal, homogénea, de **segundo orden** y de tipo **Cauchy-Euler**: cada término contiene una potencia de $x$ cuyo exponente coincide con el orden de la derivada. El coeficiente de $y''$ se anula en $x=0$, así que el punto $x=0$ es singular y se trabaja en el intervalo $x>0$.

**Primera solución.** Se busca una solución de la forma $y=x^r$, con

$$
y'=rx^{r-1}, \qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
x^2\cdot r(r-1)x^{r-2}+\alpha x\cdot rx^{r-1}+\beta x^r
=\left[r(r-1)+\alpha r+\beta\right]x^r=0.
$$

Como $x^r\neq 0$ para $x>0$, el corchete debe anularse, lo que da la ecuación característica $r(r-1)+\alpha r+\beta=0$. Por hipótesis $r_1$ es raíz repetida, de manera que $y_1=x^{r_1}$ es una solución.

**Segunda solución por reducción de orden.** Se propone $y=v(x)y_1=v\,x^{r_1}$. Sus derivadas son

$$
\begin{aligned}
y' &= r_1x^{r_1-1}v+x^{r_1}v',\\
y'' &= r_1(r_1-1)x^{r_1-2}v+2r_1x^{r_1-1}v'+x^{r_1}v''.
\end{aligned}
$$

Al sustituir y agrupar los términos,

$$
x^{r_1}\left[r_1(r_1-1)+\alpha r_1+\beta\right]v
+x^{r_1+1}\left[xv''+(2r_1+\alpha)v'\right]=0.
$$

El primer corchete se anula porque $r_1$ es raíz de la ecuación característica. Como $x^{r_1+1}\neq 0$ para $x>0$, queda

$$
xv''+(2r_1+\alpha)v'=0.
$$

Con el cambio $w=v'$ se obtiene una ecuación de primer orden:

$$
xw'+(2r_1+\alpha)w=0.
$$

La ecuación característica es $r^2+(\alpha-1)r+\beta=0$. Al ser $r_1$ raíz doble, $r_1=\dfrac{1-\alpha}{2}$, es decir, $\alpha+2r_1=1$. Por lo tanto,

$$
xw'+w=0 \quad\Longrightarrow\quad (xw)'=0 \quad\Longrightarrow\quad w=\frac{C}{x}.
$$

Para $x>0$ se integra:

$$
v(x)=\int \frac{C}{x}\,dx=C\ln x+D.
$$

Tomando $C=1$ y $D=0$ se obtiene $v(x)=\ln x$, de donde

$$
y_2(x)=x^{r_1}\ln x.
$$

**Independencia lineal.** La función $y_2$ no es un múltiplo constante de $y_1$, pues contiene el factor $\ln x$. En consecuencia, $\{x^{r_1},\,x^{r_1}\ln x\}$ es un conjunto fundamental de soluciones en $(0,\infty)$.

## Observaciones

La raíz doble se traduce en condiciones sobre los coeficientes: de $r_1=\frac{1-\alpha}{2}$ se sigue $\alpha=1-2r_1$ y $\beta=r_1^2$. La ecuación es entonces $x^2y''+(1-2r_1)xy'+r_1^2y=0$, y el factor $\ln x$ proviene precisamente de la raíz repetida.

### Método alternativo: cambio $x=e^{t}$

Para $x>0$ puede usarse la sustitución $x=e^{t}$, con $t=\ln x$. Con ella, $xy'=\dot{y}$ y $x^2y''=\ddot{y}-\dot{y}$, y la ecuación se transforma en la de coeficientes constantes

$$
\ddot{y}+(\alpha-1)\dot{y}+\beta y=0,
$$

cuya ecuación característica es la misma. Una raíz doble $r_1$ produce las soluciones $e^{r_1t}$ y $te^{r_1t}$, que equivalen a $x^{r_1}$ y $x^{r_1}\ln x$.
