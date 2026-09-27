
## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

La ED lineal, $y' - ky = A$, donde $k$ y $A$ son constantes, es autónomo. El punto crítico ________ de la ecuación es un ________ (atractor o repulsor) para $k > 0$ y un ________ (atractor o repulsor) para $k < 0$.

## Solución

El punto crítico es $y^* = -A/k$. Es un **repulsor** para $k>0$ y un **atractor** para $k<0$:

$$
y^* = -\frac{A}{k};
\qquad
\begin{cases}
\text{repulsor si } k>0,\\[2pt]
\text{atractor si } k<0.
\end{cases}
$$

## Resolución

La ecuación es autónoma porque el miembro derecho $f(y)=ky+A$ no depende de la variable independiente. Los puntos críticos son las raíces de $f$:

$$
ky + A = 0
\quad\Longrightarrow\quad
y^* = -\frac{A}{k}.
$$

Alrededor de $y^*$ el miembro derecho se factoriza como

$$
f(y) = k\left(y + \frac{A}{k}\right) = k\,(y - y^*).
$$

El signo de $f(y)$ sobre la recta de fase indica si las soluciones se acercan a $y^*$ o se alejan de él.

Para $k>0$: si $y>y^*$, entonces $f(y)>0$ y $y$ crece, de modo que la solución se aleja por arriba; si $y<y^*$, entonces $f(y)<0$ y $y$ decrece, de modo que se aleja por abajo. Por tanto $y^*$ es un **repulsor**.

Para $k<0$: el factor $k$ invierte los signos. Si $y>y^*$, entonces $f(y)<0$ y $y$ decrece hacia $y^*$; si $y<y^*$, entonces $f(y)>0$ y $y$ crece hacia $y^*$. Por tanto $y^*$ es un **atractor**.

## Observaciones

La solución general,

$$
y(t) = -\frac{A}{k} + Ce^{kt},
$$

confirma la clasificación: para $k>0$ el término $Ce^{kt}$ crece y la solución se separa de $y^*$; para $k<0$ ese término decae y la solución tiende a $y^*$.

La clasificación supone $k\ne 0$. Si $k=0$, la ecuación se reduce a $y'=A$, que carece de punto crítico cuando $A\ne 0$.

### Método alternativo: criterio de la derivada

Como $f'(y)=k$, el criterio de estabilidad lineal asigna directamente un atractor cuando $f'(y^*)<0$ y un repulsor cuando $f'(y^*)>0$. Este criterio reproduce el mismo resultado: atractor para $k<0$ y repulsor para $k>0$.
