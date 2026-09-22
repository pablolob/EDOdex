---
title: "Boyce 2.2 Ejercicio 1"
exercise-id: boyce-c02-s02-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.2, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.lineales-primer-orden
hidden-competencies:
  - clasificar.lineal-primer-orden
prerequisitos:
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c02s02i01-p045.png
---

## Enunciado

En cada uno de los problemas 1 a 4, halle la solución general de la ecuación diferencial dada.

$$y' + \frac{1}{x}y = \sin x, \quad x > 0$$

## Solución

La ecuación es **lineal de primer orden**. Su solución general, para $x>0$, es

$$
y(x) = -\cos x + \frac{\sin x}{x} + \frac{C}{x}.
$$

## Resolución

La ecuación ya está en la forma estándar $y' + P(x)y = f(x)$, con $P(x) = 1/x$ y $f(x) = \sin x$. Ambas funciones son continuas en el intervalo $x>0$. El **factor integrante** es

$$
\mu(x) = \exp\!\left(\int \frac{1}{x}\,dx\right) = e^{\ln x} = x.
$$

Al multiplicar la ecuación por $\mu(x)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dx}\!\left[x y\right] = x \sin x.
$$

Integrando ambos miembros respecto de $x$,

$$
x y = \int x \sin x\,dx.
$$

La integral se calcula por partes, con $u = x$ y $dv = \sin x\,dx$:

$$
\int x \sin x\,dx = -x \cos x + \int \cos x\,dx = -x \cos x + \sin x + C.
$$

Al despejar $y$ resulta

$$
y(x) = -\cos x + \frac{\sin x}{x} + \frac{C}{x}.
$$

Como $\mu(x) = x > 0$ en $x>0$, la multiplicación no introduce ni descarta soluciones. La solución general es válida en todo el intervalo $x>0$.

## Observaciones

La solución general puede escribirse también como $y(x) = \dfrac{\sin x - x\cos x + C}{x}$. El término $\dfrac{C}{x}$ resuelve la ecuación homogénea asociada y es el único que depende de la constante arbitraria. Cuando $x \to 0^+$, ese término domina salvo si $C=0$, lo que refleja la discontinuidad del coeficiente $1/x$ en $x=0$.
