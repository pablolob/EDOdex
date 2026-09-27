---
title: "Zill Repaso C2 Ejercicio 36"
exercise-id: zill-c02-sr-e036
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 36"
language: es
competencies:
  - resolver-analiticamente.homogeneas-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.homogenea
  - seleccionar-metodo.sustitucion
prerequisitos:
  - integracion.directa
  - ecuaciones-diferenciales.primer-orden
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri02-p095.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

a) Encuentre una solución implícita del problema con valores iniciales
$$\frac{dy}{dx} = \frac{y^2 - x^2}{xy}, \quad y(1) = -\sqrt{2}.$$

b) Encuentre una solución explícita del problema del inciso a) e indique el intervalo de solución más largo de $I$ sobre el que la solución está definida. Aquí puede ser útil un programa de graficación.

## Solución

La ecuación es **homogénea de primer orden** y se resuelve con la sustitución $y = ux$. Una **solución implícita** del problema con valores iniciales es

$$
y^2 = 2x^2(1 - \ln x).
$$

La **solución explícita** es

$$
y(x) = -\sqrt{2}\,x\sqrt{1 - \ln x},
$$

y el intervalo de solución más largo que contiene a $x = 1$ es

$$
I = (0, e).
$$

## Resolución

Se escribe la ecuación en forma normal:

$$
\frac{dy}{dx} = \frac{y^2 - x^2}{xy}, \qquad xy \ne 0.
$$

La función $f(x,y) = \dfrac{y^2 - x^2}{xy}$ verifica $f(tx,ty) = f(x,y)$, pues

$$
f(tx,ty) = \frac{t^2y^2 - t^2x^2}{t^2xy} = \frac{y^2 - x^2}{xy} = f(x,y).
$$

Luego la ecuación es homogénea de grado cero. Se aplica la sustitución

$$
y = ux, \qquad \frac{dy}{dx} = u + x\frac{du}{dx},
$$

donde $u$ es una función de $x$. Al sustituir en la ecuación,

$$
u + x\frac{du}{dx} = \frac{u^2x^2 - x^2}{x\cdot ux} = \frac{u^2 - 1}{u}.
$$

Se despeja la derivada de $u$:

$$
x\frac{du}{dx} = \frac{u^2 - 1}{u} - u = -\frac{1}{u}.
$$

La ecuación resultante es separable. Con $u \ne 0$,

$$
u\,du = -\frac{dx}{x}.
$$

Se integran ambos miembros. En la rama $x > 0$, $\displaystyle\int \frac{dx}{x} = \ln x$, de modo que

$$
\frac{u^2}{2} = -\ln x + C.
$$

Se deshace la sustitución $u = y/x$:

$$
\frac{y^2}{2x^2} = C - \ln x
\quad\Longrightarrow\quad
y^2 = 2x^2(C - \ln x).
$$

La condición inicial $y(1) = -\sqrt{2}$ fija la constante. Como $y(1)^2 = 2$ y $\ln 1 = 0$,

$$
2 = 2(1)(C - 0) \quad\Longrightarrow\quad C = 1.
$$

Así, la solución implícita del problema es

$$
y^2 = 2x^2(1 - \ln x).
$$

Para la solución explícita se despeja $y$:

$$
y = \pm\sqrt{2}\,|x|\sqrt{1 - \ln x}.
$$

Como $y(1) = -\sqrt{2} < 0$ y el intervalo que contiene a $x = 1$ tiene $x > 0$, se elige la rama negativa:

$$
y(x) = -\sqrt{2}\,x\sqrt{1 - \ln x}.
$$

La raíz exige $1 - \ln x \ge 0$, es decir $x \le e$, y además $x > 0$; la función está definida en $(0, e]$. En $x = e$ se tiene $y(e) = 0$, pero la ecuación diferencial requiere $xy \ne 0$. La derivada

$$
y'(x) = -\sqrt{2}\,\frac{1 - 2\ln x}{2\sqrt{1 - \ln x}}
$$

tampoco es finita cuando $x \to e^{-}$. Por tanto, el intervalo más largo sobre el que la solución está definida y satisface la ecuación es $I = (0, e)$.

La verificación usa la solución implícita. Al derivar $y^2 = 2x^2(1 - \ln x)$,

$$
2yy' = 4x(1 - \ln x) - 2x = 2x(1 - 2\ln x).
$$

De $1 - \ln x = \dfrac{y^2}{2x^2}$ se obtiene $1 - 2\ln x = \dfrac{y^2 - x^2}{x^2}$, luego

$$
y' = \frac{x(1 - 2\ln x)}{y} = \frac{y^2 - x^2}{xy},
$$

que es la ecuación original. Además $y(1) = -\sqrt{2}\cdot 1\cdot\sqrt{1 - 0} = -\sqrt{2}$.

## Observaciones

La ecuación original requiere $x \ne 0$ y $y \ne 0$. La recta $y = 0$ no es solución, pues anula el denominador del miembro derecho; no hay soluciones singulares que recuperar.

El intervalo es abierto en $x = e$. La función está definida allí, pero deja de ser derivable con derivada finita y la ecuación no puede evaluarse porque $y(e) = 0$.

### Método alternativo: ecuación de Bernoulli

La ecuación también se reescribe como $y' - \dfrac{1}{x}y = -x\,y^{-1}$, que es de Bernoulli con $n = -1$. La sustitución $w = y^{1-n} = y^2$ la linealiza:

$$
w' - \frac{2}{x}w = -2x.
$$

Con el factor integrante $\mu = x^{-2}$ resulta $w = x^2(C - 2\ln x)$, esto es, $y^2 = x^2(C - 2\ln x)$. La condición inicial fija $C = 2$ y reproduce $y^2 = 2x^2(1 - \ln x)$.
