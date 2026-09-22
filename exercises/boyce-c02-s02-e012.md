---
title: "Boyce 2.2 Ejercicio 12"
exercise-id: boyce-c02-s02-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 12"
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
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s02i01-p045.png
---

## Enunciado

En cada uno de los problemas del 5 al 12, determine la solución del problema con valor inicial dado. Escriba el intervalo en que la solución es válida.

$$(1 - x^2)y' - xy = x(1 - x^2), \quad y(0) = 2$$

## Solución

La ecuación es **lineal de primer orden**. La solución del problema de valor inicial es

$$
y(x) = \frac{7}{3\sqrt{1-x^2}} - \frac{1-x^2}{3},
$$

válida en el intervalo $-1 < x < 1$.

## Resolución

La ecuación se escribe en la forma estándar de una ecuación lineal de primer orden. Como $1-x^2 \ne 0$ en una vecindad de $x=0$, se divide entre $1-x^2$:

$$
y' - \frac{x}{1-x^2}\,y = x.
$$

Así, $P(x) = -\dfrac{x}{1-x^2}$ y $f(x) = x$. Ambas funciones son continuas en $-1 < x < 1$, intervalo que contiene al punto inicial $x=0$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int -\frac{x}{1-x^2}\,dx\right).
$$

Con la sustitución $u = 1-x^2$, $du = -2x\,dx$, resulta

$$
\int -\frac{x}{1-x^2}\,dx = \frac{1}{2}\int \frac{du}{u} = \frac{1}{2}\ln(1-x^2),
$$

de modo que

$$
\mu(x) = \exp\!\left(\frac{1}{2}\ln(1-x^2)\right) = \sqrt{1-x^2} > 0.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[\sqrt{1-x^2}\,y\right] = x\sqrt{1-x^2}.
$$

Integrando ambos miembros respecto de $x$, con la misma sustitución $u = 1-x^2$,

$$
\sqrt{1-x^2}\,y = \int x\sqrt{1-x^2}\,dx = -\frac{1}{3}(1-x^2)^{3/2} + C.
$$

La condición inicial $y(0)=2$ fija la constante. Como $(1-0^2)^{1/2} = 1$,

$$
2 = C - \frac{1}{3}, \qquad C = \frac{7}{3}.
$$

Al despejar $y$ se obtiene

$$
y(x) = \frac{7}{3\sqrt{1-x^2}} - \frac{1-x^2}{3}.
$$

La solución y los coeficientes $P$ y $f$ son continuos en $-1 < x < 1$, y la solución crece sin cota cuando $x \to \pm 1$. Por tanto, el intervalo de validez es $-1 < x < 1$.

## Observaciones

La solución puede escribirse de forma implícita como $\sqrt{1-x^2}\,y + \dfrac{1}{3}(1-x^2)^{3/2} = \dfrac{7}{3}$. Los puntos $x = \pm 1$ son singulares para el coeficiente $P$; la condición inicial en $x=0$ selecciona el intervalo $(-1,1)$ entre los tres intervalos donde los coeficientes son continuos.
