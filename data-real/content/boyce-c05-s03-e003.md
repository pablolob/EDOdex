
## Enunciado

En cada uno de los problemas 1 a 4, determine $\phi''(x_0)$, $\phi'''(x_0)$ y $\phi^{\text{iv}}(x_0)$ para el punto $x_0$ dado si $y = \phi(x)$ es una solución del problema con valor inicial que se da.

3. $x^2 y'' + (1 + x)y' + (3\ln x)y = 0; \quad y(1) = 2, \quad y'(1) = 0$

## Solución

$$
\phi''(1)=0,\qquad \phi'''(1)=-6,\qquad \phi^{\text{iv}}(1)=42.
$$

## Resolución

La función $\phi$ satisface la ecuación en un intervalo que contiene a $x_0=1$. Como la ecuación es lineal de segundo orden y sus coeficientes son continuos para $x>0$, ese intervalo puede tomarse dentro de $(0,\infty)$. Los valores pedidos se obtienen derivando la ecuación sucesivamente y evaluando en $x=1$ con los datos iniciales.

Al evaluar la ecuación en $x_0=1$,

$$
1^2\phi''(1)+(1+1)\phi'(1)+(3\ln 1)\phi(1)=0.
$$

Como $\phi(1)=2$ y $\phi'(1)=0$, y $\ln 1=0$,

$$
\phi''(1)+2\cdot 0+0=0 \quad\Longrightarrow\quad \phi''(1)=0.
$$

Para el orden siguiente se deriva la ecuación miembro a miembro. Con la **regla del producto**,

$$
2x\phi''+x^2\phi'''+\phi'+(1+x)\phi''+\frac{3}{x}\phi+3\ln x\,\phi'=0.
$$

Agrupando por derivadas de $\phi$,

$$
x^2\phi'''+(1+3x)\phi''+(1+3\ln x)\phi'+\frac{3}{x}\phi=0.
$$

Al evaluar en $x=1$ y usar los valores ya conocidos,

$$
\phi'''(1)+4\phi''(1)+\phi'(1)+3\phi(1)=0
\quad\Longrightarrow\quad
\phi'''(1)+0+0+6=0,
$$

de modo que

$$
\phi'''(1)=-6.
$$

Se deriva una vez más la expresión anterior:

$$
2x\phi'''+x^2\phi''''+3\phi''+(1+3x)\phi'''+\frac{3}{x}\phi'+(1+3\ln x)\phi''
-\frac{3}{x^2}\phi+\frac{3}{x}\phi'=0.
$$

Reordenando,

$$
x^2\phi''''+(1+5x)\phi'''+(4+3\ln x)\phi''+\frac{6}{x}\phi'-\frac{3}{x^2}\phi=0.
$$

La evaluación en $x=1$ da

$$
\phi^{\text{iv}}(1)+6\phi'''(1)+4\phi''(1)+6\phi'(1)-3\phi(1)=0.
$$

Al sustituir $\phi(1)=2$, $\phi'(1)=0$, $\phi''(1)=0$ y $\phi'''(1)=-6$,

$$
\phi^{\text{iv}}(1)+6(-6)-3(2)=0
\quad\Longrightarrow\quad
\phi^{\text{iv}}(1)=42.
$$

## Observaciones

El punto $x_0=1$ es un **punto ordinario** de la ecuación. El punto $x=0$ es singular, porque en él $\ln x$ y $1/x^2$ no están definidos; por eso la solución está definida en el intervalo $(0,\infty)$ y su serie de Taylor alrededor de $x=1$ converge al menos en $(0,2)$.

Los valores obtenidos son los coeficientes de Taylor de la solución:

$$
\phi(x)=2-(x-1)^3+\frac{7}{4}(x-1)^4+\cdots,
$$

pues $\phi''(1)/2!=0$, $\phi'''(1)/3!=-1$ y $\phi^{\text{iv}}(1)/4!=42/24=7/4$. Este procedimiento es el primer paso del método de **series de potencias** alrededor de un punto ordinario.
