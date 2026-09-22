
## Enunciado

Demuestre que

$$(\ln x)y'' + \frac{1}{2}y' + y = 0$$

tiene un punto singular regular en $x = 1$. Determine las raíces de la ecuación indicial en $x = 1$. Determine los tres primeros términos diferentes de cero de la serie $\sum_{n=0}^{\infty} a_n(x-1)^{r+n}$ correspondientes a la raíz más grande. Tome $x - 1 > 0$. ¿Cuál espera que sea el radio de convergencia de la serie?

## Solución

El punto $x=1$ es un **punto singular regular**. La **ecuación indicial** en $x=1$ tiene las raíces

$$r_1=\frac{1}{2},\qquad r_2=0.$$

Para la raíz mayor, $r_1=\frac12$, los tres primeros términos no nulos de la serie son

$$y(x)=a_0(x-1)^{1/2}\left[1-\frac{3}{4}(x-1)+\frac{53}{480}(x-1)^2+\cdots\right],\qquad a_0\ne 0.$$

El radio de convergencia esperado es $R=1$.

## Resolución

El cambio $t=x-1$, con $x=1+t$, deja la ecuación en la forma

$$(\ln(1+t))\frac{d^2y}{dt^2}+\frac{1}{2}\frac{dy}{dt}+y=0,$$

pues $\ln x=\ln(1+t)$ y las derivadas respecto de $x$ coinciden con las derivadas respecto de $t$.

### Punto singular regular

En la forma estándar $y''+p(t)y'+q(t)y=0$ los coeficientes son

$$p(t)=\frac{1}{2\ln(1+t)},\qquad q(t)=\frac{1}{\ln(1+t)}.$$

Ambos son singulares en $t=0$ porque $\ln 1=0$; por tanto $x=1$ es un punto singular. Para clasificarlo se usa el desarrollo

$$\frac{\ln(1+t)}{t}=1-\frac{t}{2}+\frac{t^2}{3}-\cdots,$$

que define una función analítica y no nula en $t=0$. Entonces

$$t\,p(t)=\frac{1}{2}\left(\frac{\ln(1+t)}{t}\right)^{-1},\qquad t^2q(t)=t\left(\frac{\ln(1+t)}{t}\right)^{-1}$$

son analíticas en $t=0$. En consecuencia, $x=1$ es un punto singular regular.

### Ecuación indicial

Con $p_0=\lim_{t\to0}t\,p(t)=\frac12$ y $q_0=\lim_{t\to0}t^2q(t)=0$, la ecuación indicial es

$$r(r-1)+p_0r+q_0=r(r-1)+\frac{1}{2}r=r\left(r-\frac{1}{2}\right)=0,$$

cuyas raíces son $r_1=\frac12$ y $r_2=0$.

### Serie para la raíz mayor

Se busca $y=\sum_{n\ge 0}a_n t^{n+1/2}$ con $t=x-1>0$. Sus derivadas son

$$y'=\sum_{n\ge 0}\left(n+\frac{1}{2}\right)a_n t^{n-1/2},\qquad y''=\sum_{n\ge 0}\left(n^2-\frac{1}{4}\right)a_n t^{n-3/2}.$$

Se desarrolla el coeficiente logarítmico,

$$\ln(1+t)=t-\frac{t^2}{2}+\frac{t^3}{3}-\cdots,$$

y se sustituye en $(\ln(1+t))y''+\frac{1}{2}y'+y=0$.

El coeficiente de $t^{1/2}$ recibe contribuciones de $n=1$ en $t\,y''$ y $n=0$ en $-\frac{t^2}{2}y''$, junto con los términos de $\frac12 y'$ y de $y$:

$$\left(\frac{3}{4}a_1+\frac{1}{8}a_0\right)+\frac{3}{4}a_1+a_0=\frac{3}{2}a_1+\frac{9}{8}a_0=0,$$

de donde $a_1=-\frac{3}{4}a_0$.

El coeficiente de $t^{3/2}$ reúne, de manera análoga,

$$\left(\frac{15}{4}a_2-\frac{3}{8}a_1-\frac{1}{12}a_0\right)+\frac{5}{4}a_2+a_1=5a_2+\frac{5}{8}a_1-\frac{1}{12}a_0=0.$$

Al sustituir $a_1=-\frac34 a_0$ resulta

$$5a_2=\left(\frac{15}{32}+\frac{1}{12}\right)a_0=\frac{53}{96}a_0,\qquad a_2=\frac{53}{480}a_0.$$

Los tres primeros términos no nulos de la serie son, por tanto,

$$y(x)=a_0\left[(x-1)^{1/2}-\frac{3}{4}(x-1)^{3/2}+\frac{53}{480}(x-1)^{5/2}+\cdots\right].$$

### Radio de convergencia

En la forma estándar, los coeficientes

$$(x-1)p(x)=\frac{x-1}{2\ln x},\qquad (x-1)^2q(x)=\frac{(x-1)^2}{\ln x}$$

son analíticos en $x=1$. El punto singular más próximo a $x=1$, distinto de él, es $x=0$, donde $\ln x$ tiene un punto de ramificación. Como $|1-0|=1$, la serie converge al menos para $|x-1|<1$ y ese valor no puede mejorarse. El radio esperado es $R=1$.

Como el enunciado fija $x-1>0$, la serie representa la solución en el intervalo $1<x<2$.

## Observaciones

Las raíces indiciales difieren en $\frac12$, que no es un entero; por ello la raíz menor $r_2=0$ también produce una solución independiente en serie de Frobenius. El enunciado solo pide la serie de la raíz mayor.

El radio de convergencia no lo fija el propio punto singular $x=1$, sino el punto de ramificación de $\ln x$ en $x=0$.

La constante $a_0$ es arbitraria y distinta de cero. El factor $(x-1)^{1/2}$ no es analítico en $x=1$, lo que confirma que allí la solución no admite una serie de potencias ordinaria.
