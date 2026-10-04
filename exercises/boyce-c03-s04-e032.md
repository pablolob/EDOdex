---
title: "Boyce 3.4 Ejercicio 32"
exercise-id: boyce-c03-s04-e032
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 32"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.cambio-variable
prerequisitos:
  - derivacion.regla-cadena
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c03s04i02-p167.png
  - c03s04i03-p168.png
---

## Enunciado

**Ecuaciones de Euler.** En una ecuación de la forma

$$x^2 y'' + \alpha xy' + \beta y = 0, \quad x > 0,$$

en donde $\alpha$ y $\beta$ son constantes reales, se conoce como ecuación de Euler. Demuestre que la sustitución $z = \ln x$ transforma una ecuación de Euler en una ecuación con coeficientes constantes. Las ecuaciones de Euler se analizan con detalle en la sección 5.5.

## Solución

Con el cambio de variable independiente $z = \ln x$, la ecuación de Euler se transforma en la ecuación con coeficientes constantes

$$
\frac{d^2y}{dz^2} + (\alpha - 1)\frac{dy}{dz} + \beta y = 0.
$$

## Resolución

Sea $z = \ln x$, de modo que $x = e^{z}$. Como $x > 0$, el cambio de variable es invertible y $z$ recorre todos los números reales. Se define la función $Y(z) = y(e^{z})$, es decir, $y(x) = Y(\ln x)$. El objetivo es expresar las derivadas de $y$ respecto de $x$ en términos de las derivadas de $Y$ respecto de $z$.

**Primera derivada.** Por la **regla de la cadena** y $dz/dx = 1/x$,

$$
\frac{dy}{dx} = \frac{dy}{dz}\frac{dz}{dx} = \frac{1}{x}\frac{dY}{dz}.
$$

**Segunda derivada.** Se deriva la expresión anterior respecto de $x$. Con la **regla del producto** y de nuevo la regla de la cadena,

$$
\begin{aligned}
\frac{d^2y}{dx^2}
&= \frac{d}{dx}\left(\frac{1}{x}\frac{dY}{dz}\right) \\
&= -\frac{1}{x^2}\frac{dY}{dz} + \frac{1}{x}\frac{d}{dx}\left(\frac{dY}{dz}\right) \\
&= -\frac{1}{x^2}\frac{dY}{dz} + \frac{1}{x}\left(\frac{d^2Y}{dz^2}\frac{dz}{dx}\right) \\
&= -\frac{1}{x^2}\frac{dY}{dz} + \frac{1}{x^2}\frac{d^2Y}{dz^2}.
\end{aligned}
$$

**Sustitución en la ecuación.** Se multiplican las derivadas por los coeficientes de la ecuación de Euler. Los factores en $x$ se simplifican:

$$
\begin{aligned}
x^2\frac{d^2y}{dx^2} &= x^2\left(-\frac{1}{x^2}\frac{dY}{dz} + \frac{1}{x^2}\frac{d^2Y}{dz^2}\right) = \frac{d^2Y}{dz^2} - \frac{dY}{dz}, \\
\alpha x\frac{dy}{dx} &= \alpha x\left(\frac{1}{x}\frac{dY}{dz}\right) = \alpha\frac{dY}{dz}, \\
\beta y &= \beta Y.
\end{aligned}
$$

Al sumar los tres términos, la ecuación de Euler queda

$$
\frac{d^2Y}{dz^2} - \frac{dY}{dz} + \alpha\frac{dY}{dz} + \beta Y = 0,
$$

o, agrupando la derivada primera,

$$
\frac{d^2Y}{dz^2} + (\alpha - 1)\frac{dY}{dz} + \beta Y = 0.
$$

Los coeficientes de esta última ecuación son las constantes $\alpha - 1$ y $\beta$. Por tanto, la sustitución $z = \ln x$ transforma la ecuación de Euler en una ecuación con coeficientes constantes.

## Observaciones

El cambio de variable es invertible precisamente en el dominio indicado $x > 0$, donde $\ln x$ está definida y es creciente. Para $x < 0$ habría que emplear $z = \ln(-x)$ u otra rama del logaritmo.

La sustitución relaciona las soluciones de prueba de ambos problemas: $y = x^{m}$ se corresponde con $Y = e^{mz}$. La ecuación característica de la ecuación transformada es

$$
r^2 + (\alpha - 1)r + \beta = 0,
$$

cuyo polinomio coincide con $m(m - 1) + \alpha m + \beta$ al identificar $r = m$. Una vez obtenida la solución $Y(z)$ de la ecuación con coeficientes constantes, se recupera la solución de la ecuación de Euler con la sustitución inversa $z = \ln x$.
