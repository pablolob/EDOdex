
## Enunciado

Considere la ecuación de Euler $x^2 y'' + \alpha xy' + \beta y = 0$. Determine las condiciones sobre $\alpha$ y $\beta$ de modo que

a) todas las soluciones tiendan a cero cuando $x \to 0$.

b) todas las soluciones sean acotadas cuando $x \to 0$.

c) todas las soluciones tiendan a cero cuando $x \to \infty$.

d) todas las soluciones sean acotadas cuando $x \to \infty$.

e) todas las soluciones tiendan a cero cuando $x \to 0$ y cuando $x \to \infty$.

## Solución

La sustitución $y=x^r$ conduce a la **ecuación indicial** $r^2+(\alpha-1)r+\beta=0$, cuyas raíces $r_1$ y $r_2$ cumplen $r_1+r_2=1-\alpha$ y $r_1r_2=\beta$. Las condiciones pedidas son:

a) todas las soluciones tienden a cero cuando $x\to0$: $\alpha<1$ y $\beta>0$;

b) todas las soluciones están acotadas cuando $x\to0$: $\alpha\le1$ y $\beta\ge0$, con $(\alpha,\beta)\ne(1,0)$;

c) todas las soluciones tienden a cero cuando $x\to\infty$: $\alpha>1$ y $\beta>0$;

d) todas las soluciones están acotadas cuando $x\to\infty$: $\alpha\ge1$ y $\beta\ge0$, con $(\alpha,\beta)\ne(1,0)$;

e) todas las soluciones tienden a cero cuando $x\to0$ y cuando $x\to\infty$: no existen valores de $\alpha$ y $\beta$ que lo cumplan.

## Resolución

Se trabaja en $x>0$. Se ensaya $y=x^r$, con

$$
y'=rx^{r-1}, \qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación se obtiene

$$
x^2y''+\alpha xy'+\beta y=\bigl[r(r-1)+\alpha r+\beta\bigr]x^r=0.
$$

Como $x^r\ne0$, la **ecuación indicial** es

$$
r^2+(\alpha-1)r+\beta=0,
$$

y sus raíces $r_1$ y $r_2$ satisfacen

$$
r_1+r_2=1-\alpha, \qquad r_1r_2=\beta.
$$

La forma de la solución general depende de la naturaleza de las raíces:

- raíces reales distintas $r_1\ne r_2$: $y=C_1x^{r_1}+C_2x^{r_2}$;
- raíz real doble $r$: $y=(C_1+C_2\ln x)x^{r}$;
- raíces complejas $r=\lambda\pm i\mu$, con $\mu\ne0$: $y=x^{\lambda}\left[C_1\cos(\mu\ln x)+C_2\sin(\mu\ln x)\right]$.

Comportamiento cuando $x\to0^+$. Para una raíz real $r$ se tiene $x^r\to0$ si $r>0$ y $x^r\to\infty$ si $r<0$. En el caso complejo, $x^\lambda\cos(\mu\ln x)$ y $x^\lambda\sin(\mu\ln x)$ tienden a cero si $\lambda>0$ y están acotadas si $\lambda=0$. En el caso de raíz doble aparece el factor $\ln x$, que tiende a $-\infty$; no obstante, $x^r\ln x\to0$ si $r>0$, mientras que para $r=0$ el término $\ln x$ no está acotado.

Comportamiento cuando $x\to\infty$. De forma análoga, $x^r\to0$ si $r<0$ y $x^r\to\infty$ si $r>0$. En el caso complejo, la cota $x^\lambda$ tiende a cero si $\lambda<0$ y está acotada si $\lambda=0$. En el caso de raíz doble, $x^r\ln x\to0$ si $r<0$ y no está acotado si $r=0$.

a) Todas las soluciones tienden a cero cuando $x\to0$ si y solo si todas las raíces tienen parte real positiva y, en el caso de raíz doble, la raíz es positiva. Para el polinomio de coeficientes reales esto equivale a que la suma y el producto de las raíces sean positivos:

$$
r_1+r_2=1-\alpha>0, \qquad r_1r_2=\beta>0.
$$

Es decir, $\alpha<1$ y $\beta>0$. Si la raíz es doble, $r=(1-\alpha)/2>0$ y el factor $\ln x$ no impide la convergencia.

b) Todas las soluciones están acotadas cuando $x\to0$ si y solo si todas las raíces tienen parte real no negativa y, en el caso de raíz doble, la raíz es positiva, para evitar el término $\ln x$. Esto equivale a

$$
1-\alpha\ge0, \qquad \beta\ge0,
$$

con la única excepción de la raíz doble $r=0$, que corresponde a $(\alpha,\beta)=(1,0)$. Por tanto, $\alpha\le1$ y $\beta\ge0$, con $(\alpha,\beta)\ne(1,0)$.

c) Todas las soluciones tienden a cero cuando $x\to\infty$ si y solo si todas las raíces tienen parte real negativa. De nuevo, la suma y el producto de las raíces deben ser negativa y positiva, respectivamente:

$$
1-\alpha<0, \qquad \beta>0,
$$

esto es, $\alpha>1$ y $\beta>0$. En el caso de raíz doble, $r=(1-\alpha)/2<0$, de modo que $x^r\ln x\to0$.

d) Todas las soluciones están acotadas cuando $x\to\infty$ si y solo si todas las raíces tienen parte real no positiva y, en el caso de raíz doble, la raíz es negativa. Esto equivale a

$$
1-\alpha\le0, \qquad \beta\ge0,
$$

excluyendo de nuevo la raíz doble $r=0$, es decir $(\alpha,\beta)=(1,0)$. Por tanto, $\alpha\ge1$ y $\beta\ge0$, con $(\alpha,\beta)\ne(1,0)$.

e) Los apartados a) y c) exigen a la vez $\alpha<1$ y $\alpha>1$, lo que es imposible. Por tanto, no existen valores de $\alpha$ y $\beta$ para los que todas las soluciones tiendan a cero en ambos extremos.

## Observaciones

El caso excluido $(\alpha,\beta)=(1,0)$ corresponde a $x^2y''+xy'=0$, es decir $(xy')'=0$, cuya solución general es $y=C_1\ln x+C_2$; el término logarítmico no está acotado ni cuando $x\to0$ ni cuando $x\to\infty$.

Los apartados a) y c) no pueden cumplirse simultáneamente porque las raíces de un mismo polinomio no pueden tener a la vez parte real positiva y negativa. Cuando todas las raíces son imaginarias puras ($\alpha=1$, $\beta>0$) las soluciones son oscilatorias y acotadas, pero no tienden a cero.

Por ser una ecuación de Euler, el análisis se desarrolla en $x>0$; en $x<0$ el comportamiento es análogo tras el cambio $x\to-x$.
