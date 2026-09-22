---
title: "Boyce 2.2 Ejercicio 11"
exercise-id: boyce-c02-s02-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.teorema-fundamental-calculo
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s02i01-p045.png
---

## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$y' + y = \frac{1}{1 + x^2}, \quad y(0) = 0$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema con valor inicial es

$$
y(x) = e^{-x}\int_0^x \frac{e^t}{1 + t^2}\,dt,
$$

válida en el intervalo $(-\infty, \infty)$.

## Resolución

La ecuación ya está en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = 1$ y $f(x) = \dfrac{1}{1 + x^2}$. Ambas funciones son continuas para todo $x$ real.

Se aplica el **método del factor integrante**. Con $P(x) = 1$,

$$
\mu(x) = \exp\!\left(\int 1\,dx\right) = e^x.
$$

Al multiplicar la ecuación por $\mu(x) = e^x$, el miembro izquierdo es la derivada del producto $e^x y$:

$$
\frac{d}{dx}\!\left(e^x y\right) = \frac{e^x}{1 + x^2}.
$$

Se integra desde $x = 0$ hasta $x$, lo que incorpora directamente la condición inicial. Con $y(0) = 0$,

$$
e^x y(x) - e^0 y(0) = \int_0^x \frac{e^t}{1 + t^2}\,dt
\qquad \Longrightarrow \qquad
e^x y(x) = \int_0^x \frac{e^t}{1 + t^2}\,dt.
$$

Al despejar $y$ resulta

$$
y(x) = e^{-x}\int_0^x \frac{e^t}{1 + t^2}\,dt.
$$

El integrando $\dfrac{e^t}{1 + t^2}$ no tiene primitiva elemental, por lo que la solución se deja en forma integral.

Como $P(x)$ y $f(x)$ son continuas en todo $\mathbb{R}$, el intervalo de validez es $(-\infty, \infty)$.

## Observaciones

La integral $\displaystyle\int_0^x \frac{e^t}{1 + t^2}\,dt$ no admite una expresión elemental. Elegir $0$ como límite inferior no es arbitrario: hace que la solución valga $0$ en $x = 0$ y satisface la condición inicial sin añadir una constante. El intervalo de validez lo fijan los coeficientes de la forma estándar, que son continuos en todo $\mathbb{R}$.
