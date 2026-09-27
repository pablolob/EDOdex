
## Enunciado

Algunas enfermedades (como la fiebre tifoidea) son propagadas en gran medida por *portadores*, individuos que pueden transmitir la enfermedad aunque no presentan síntomas evidentes. Sean $x$ y $y$, respectivamente, la proporción de individuos susceptibles y portadores en la población. Suponga que se identifican los portadores y se retiran de la población a una razón $\beta$, de modo que

$$dy/dt = \beta y. \tag{i}$$

Suponga también que la enfermedad se propaga a una razón proporcional al producto de $x$ y $y$; entonces,

$$dx/dt = -\alpha xy. \tag{ii}$$

a) Determine $y$ en cualquier instante $t$ al resolver la ecuación (i) sujeta a la condición inicial $y(0) = y_0$.

b) Aplique el resultado del inciso a) para hallar $x$ en cualquier instante al resolver la ecuación (ii) sujeta a la condición inicial $x(0) = x_0$.

c) Encuentre la proporción de la población que escapa de la epidemia, al hallar el valor límite de $x$ cuando $t \to \infty$.

## Solución

Las ecuaciones (i) y (ii) son **separables**. Con las condiciones iniciales $y(0)=y_0$ y $x(0)=x_0$,

$$
y(t)=y_0e^{\beta t},
\qquad
x(t)=x_0\exp\!\left[-\frac{\alpha y_0}{\beta}\left(e^{\beta t}-1\right)\right].
$$

Para $y_0>0$ el exponente de $x$ tiende a $-\infty$, de modo que

$$
\lim_{t\to\infty}x(t)=0.
$$

## Resolución

La ecuación (i), $dy/dt=\beta y$, es **separable**. Se separan las variables y se integran ambos miembros:

$$
\begin{aligned}
\frac{dy}{y} &= \beta\,dt,\\
\ln|y| &= \beta t+C.
\end{aligned}
$$

La solución general es $y=Ce^{\beta t}$. La condición inicial $y(0)=y_0$ fija $C=y_0$, así que

$$
y(t)=y_0e^{\beta t}. \tag{1}
$$

Se sustituye (1) en (ii). Como $y$ solo depende de $t$, la ecuación (ii) queda también **separable**:

$$
\frac{dx}{dt}=-\alpha x\,y_0e^{\beta t}.
$$

Se separan las variables y se integra:

$$
\begin{aligned}
\frac{dx}{x} &= -\alpha y_0e^{\beta t}\,dt,\\
\ln|x| &= -\frac{\alpha y_0}{\beta}e^{\beta t}+C_1.
\end{aligned}
$$

La condición inicial $x(0)=x_0$ determina la constante:

$$
\ln x_0=-\frac{\alpha y_0}{\beta}+C_1
\quad\Longrightarrow\quad
C_1=\ln x_0+\frac{\alpha y_0}{\beta}.
$$

Al sustituir $C_1$ y agrupar los términos,

$$
\ln x=\ln x_0-\frac{\alpha y_0}{\beta}\left(e^{\beta t}-1\right).
$$

Se exponencian ambos miembros:

$$
x(t)=x_0\exp\!\left[-\frac{\alpha y_0}{\beta}\left(e^{\beta t}-1\right)\right]. \tag{2}
$$

**Inciso c).** Para $y_0>0$ y $\beta>0$, el término $e^{\beta t}$ crece sin cota, por lo que el exponente de (2) tiende a $-\infty$ y

$$
\lim_{t\to\infty}x(t)=0.
$$

La proporción de la población que escapa de la epidemia es nula. Si $y_0=0$ no hay portadores, $y(t)\equiv 0$ y la ecuación (ii) da $x(t)\equiv x_0$.

## Observaciones

El signo positivo de la ecuación (i) describe portadores que aumentan, no que se retiran: con $y_0>0$ la proporción $y$ crece sin cota y deja de representar una proporción, de modo que el modelo solo es interpretable mientras $y\le 1$. La descripción verbal del enunciado (los portadores se retiran) corresponde a $dy/dt=-\beta y$. Bajo ese signo, la proporción de susceptibles sería

$$
x(t)=x_0\exp\!\left[-\frac{\alpha y_0}{\beta}\left(1-e^{-\beta t}\right)\right],
$$

y escaparían de la epidemia una fracción $x_0e^{-\alpha y_0/\beta}$ de la población.
