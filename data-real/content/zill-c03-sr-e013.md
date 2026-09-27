
## Enunciado

13. Un modelo para las poblaciones de dos especies de animales que interactúan es

$$
\begin{aligned}
\frac{dx}{dt} &= k_1 x(\alpha - x) \\
\frac{dy}{dt} &= k_2 x y.
\end{aligned}
$$

Resuelva para $x$ y $y$ en términos de $t$.

## Solución

La solución general del sistema es

$$
x(t)=\frac{\alpha}{1+C_1 e^{-\alpha k_1 t}},
\qquad
y(t)=C_2\,(\alpha-x(t))^{-k_2/k_1},
$$

donde $C_1$ y $C_2$ son constantes arbitrarias. La solución constante $x(t)\equiv 0$ es singular y no está contenida en esa familia; con ella la segunda ecuación da $y(t)\equiv C_0$.

## Resolución

La primera ecuación no contiene a $y$. Por tanto, se resuelve primero para $x$ y después se sustituye el resultado en la segunda.

### Primera ecuación: modelo logístico

La ecuación

$$
\frac{dx}{dt}=k_1 x(\alpha-x)
$$

es autónoma y de **variables separables**. Los valores $x=0$ y $x=\alpha$ anulan el miembro derecho y son soluciones de equilibrio. Para $x\ne 0$ y $x\ne\alpha$ se separan las variables:

$$
\frac{dx}{x(\alpha-x)}=k_1\,dt.
$$

El integrando se descompone en **fracciones parciales**:

$$
\frac{1}{x(\alpha-x)}=\frac{1}{\alpha}\left(\frac{1}{x}+\frac{1}{\alpha-x}\right).
$$

Al integrar ambos miembros resulta

$$
\begin{aligned}
\frac{1}{\alpha}\left(\ln|x|-\ln|\alpha-x|\right) &= k_1 t + C, \\
\ln\left|\frac{x}{\alpha-x}\right| &= \alpha k_1 t + \alpha C, \\
\frac{x}{\alpha-x} &= C_1 e^{\alpha k_1 t},
\end{aligned}
$$

donde $C_1$ absorbe la constante de integración. Despejando $x$:

$$
x(t)=\frac{\alpha C_1 e^{\alpha k_1 t}}{1+C_1 e^{\alpha k_1 t}}
=\frac{\alpha}{1+C_1 e^{-\alpha k_1 t}}.
$$

### Segunda ecuación: eliminación de $dt$

Para la segunda ecuación se elimina $t$ con la **regla de la cadena**:

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{k_2 x y}{k_1 x(\alpha-x)}=\frac{k_2}{k_1}\frac{y}{\alpha-x},
$$

válido para $x\ne 0$ y $x\ne\alpha$. Separando las variables,

$$
\frac{dy}{y}=\frac{k_2}{k_1}\frac{dx}{\alpha-x}.
$$

La integración da

$$
\ln|y|=-\frac{k_2}{k_1}\ln|\alpha-x|+C,
$$

es decir,

$$
y=C_2\,(\alpha-x)^{-k_2/k_1},
$$

con $C_2$ constante arbitraria.

### Solución general y comprobación

Al sustituir la expresión de $x(t)$ en $y$ se obtiene la solución en términos explícitos de $t$:

$$
\alpha-x(t)=\frac{\alpha C_1 e^{-\alpha k_1 t}}{1+C_1 e^{-\alpha k_1 t}},
\qquad
y(t)=C_2' e^{\alpha k_2 t}\left(1+C_1 e^{-\alpha k_1 t}\right)^{k_2/k_1},
$$

con $C_2'=C_2(\alpha C_1)^{-k_2/k_1}$.

La comprobación confirma ambas ecuaciones. Para $x(t)=\alpha\left(1+C_1 e^{-\alpha k_1 t}\right)^{-1}$,

$$
\frac{dx}{dt}=\frac{\alpha^2 C_1 k_1 e^{-\alpha k_1 t}}{\left(1+C_1 e^{-\alpha k_1 t}\right)^2}
=k_1 x(\alpha-x).
$$

Para $y=C_2(\alpha-x)^{-k_2/k_1}$,

$$
\frac{dy}{dt}
=C_2\left(-\frac{k_2}{k_1}\right)(\alpha-x)^{-k_2/k_1-1}(-x')
=k_2 x\,C_2(\alpha-x)^{-k_2/k_1}
=k_2 x y.
$$

Por tanto, $x(t)$ y $y(t)$ resuelven el sistema.

## Observaciones

El modelo tiene estructura triangular: $x$ evoluciona de forma logística sin depender de $y$, y $y$ crece impulsada por el producto $xy$.

Si se imponen las condiciones iniciales $x(0)=x_0$ y $y(0)=y_0$, con $0<x_0<\alpha$, las constantes quedan $C_1=(\alpha-x_0)/x_0$ y $C_2=y_0(\alpha-x_0)^{k_2/k_1}$. Entonces $y(t)=y_0\left[(\alpha-x_0)/(\alpha-x(t))\right]^{k_2/k_1}$.

La forma compacta de $y$ supone $\alpha-x>0$, esto es, poblaciones positivas con $0<x<\alpha$ y $y>0$. El caso $x\equiv 0$ es una solución singular de la primera ecuación y debe considerarse aparte.
