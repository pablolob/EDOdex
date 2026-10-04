
## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$(x^2 + 3xy + y^2)\,dx - x^2\,dy = 0$$

## Solución

La ecuación es **homogénea** de primer orden. La **sustitución** $y=ux$ la reduce a una ecuación de variables separables y da la solución general

$$
-\frac{x}{x+y} = \ln|x| + C,
$$

o, en forma explícita,

$$
y = -\frac{x}{\ln|x| + C} - x.
$$

Además, $y=-x$ es una **solución singular**.

## Resolución

Se escribe la ecuación en forma normal. Al despejar $dy/dx$ en $(x^2+3xy+y^2)\,dx-x^2\,dy=0$ resulta

$$
\frac{dy}{dx}=\frac{x^2+3xy+y^2}{x^2}, \qquad x\ne 0.
$$

La función $f(x,y)=\dfrac{x^2+3xy+y^2}{x^2}$ es un cociente de polinomios homogéneos del mismo grado. En efecto, para todo $t\ne 0$,

$$
f(tx,ty)=\frac{t^2x^2+3t^2xy+t^2y^2}{t^2x^2}=\frac{x^2+3xy+y^2}{x^2}=f(x,y).
$$

Por tanto, la ecuación es **homogénea** de primer orden.

La **sustitución** $y=ux$, con $u$ función de $x$, transforma la ecuación en una de variables separables. Como

$$
\frac{dy}{dx}=u+x\frac{du}{dx},
$$

al reemplazar queda

$$
u+x\frac{du}{dx}=\frac{x^2+3x(ux)+(ux)^2}{x^2}=1+3u+u^2.
$$

Se despeja $x\,du/dx$ y se factoriza:

$$
x\frac{du}{dx}=1+2u+u^2=(1+u)^2.
$$

Se separan las variables:

$$
\frac{du}{(1+u)^2}=\frac{dx}{x}.
$$

Al integrar ambos miembros,

$$
-\frac{1}{1+u}=\ln|x|+C.
$$

Se deshace la sustitución con $u=y/x$:

$$
-\frac{x}{x+y}=\ln|x|+C.
$$

Al despejar $y$ se obtiene la forma explícita

$$
y=-\frac{x}{\ln|x|+C}-x.
$$

Resta examinar el caso excluido al separar variables. La división entre $(1+u)^2$ supone $u\ne-1$. La función constante $u=-1$, es decir $y=-x$, satisface la ecuación, ya que $dy/dx=-1$ y

$$
\frac{x^2+3x(-x)+(-x)^2}{x^2}=\frac{-x^2}{x^2}=-1,
$$

pero no se obtiene para ningún valor finito de $C$. Por tanto, $y=-x$ es una **solución singular**.

## Observaciones

La solución general está definida en intervalos que no contienen $x=0$ ni los puntos donde $\ln|x|+C=0$, ya que allí la forma explícita pierde sentido. La ecuación degenera en $x=0$.

La solución singular $y=-x$ proviene del factor $1+u$ que se anuló al separar variables; no es miembro de la familia general.
