---
title: "Zill Repaso C2 Ejercicio 30"
exercise-id: zill-c02-sr-e030
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 30"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-hom
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - integracion.teorema-fundamental-calculo
  - derivacion.regla-cadena
  - derivacion.producto
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

En problemas 27-30 exprese la solución del problema de valor inicial dado en términos de una función dada por la integral definida.

$$x \frac{dy}{dx} + (\text{sen } x)y = 0, \quad y(0) = 10$$

## Solución

La ecuación es **lineal de primer orden** y **homogénea**. La solución del problema de valor inicial es

$$
y(x)=10\exp\!\left(-\int_0^x \frac{\sin t}{t}\,dt\right),
$$

definida en $\mathbb{R}$.

## Resolución

Para $x\ne 0$ la ecuación se escribe en forma estándar:

$$
\frac{dy}{dx}+\frac{\sin x}{x}\,y=0.
$$

El coeficiente $P(x)=\dfrac{\sin x}{x}$ tiene una singularidad evitable en $x=0$, ya que $\displaystyle\lim_{x\to 0}\frac{\sin x}{x}=1$. Al extenderlo por continuidad, $P$ es continuo en todo $\mathbb{R}$.

Un factor integrante es

$$
\mu(x)=\exp\!\left(\int_0^x \frac{\sin t}{t}\,dt\right),
$$

donde el integrando se extiende por continuidad en $t=0$. Al multiplicar la forma estándar por $\mu(x)$ resulta

$$
\mu(x)\frac{dy}{dx}+\mu(x)\frac{\sin x}{x}\,y=0.
$$

Como $\mu'(x)=\dfrac{\sin x}{x}\mu(x)$, el miembro izquierdo es la derivada del producto $\mu(x)y$:

$$
\frac{d}{dx}\!\left[\mu(x)\,y\right]=0.
$$

Se integra esta igualdad. Por el teorema fundamental del cálculo,

$$
\mu(x)\,y(x)=C,
$$

y al despejar $y$ se obtiene la solución general

$$
y(x)=C\exp\!\left(-\int_0^x \frac{\sin t}{t}\,dt\right).
$$

La condición inicial $y(0)=10$ fija la constante: en $x=0$ la integral se anula, luego $y(0)=C$ y $C=10$. Por tanto,

$$
y(x)=10\exp\!\left(-\int_0^x \frac{\sin t}{t}\,dt\right).
$$

La sustitución directa confirma el resultado. Si $F(x)=\displaystyle\int_0^x \frac{\sin t}{t}\,dt$, entonces $F'(x)=\dfrac{\sin x}{x}$ por el teorema fundamental del cálculo, y la regla de la cadena da

$$
y'(x)=-10\,e^{-F(x)}\frac{\sin x}{x}=-\frac{\sin x}{x}\,y(x)
$$

para $x\ne 0$. Al multiplicar por $x$,

$$
x\,y'(x)+(\sin x)\,y(x)=-\sin x\,y(x)+(\sin x)\,y(x)=0.
$$

En $x=0$ ambos términos de la ecuación se anulan, y además $y(0)=10e^{0}=10$.

El integrando $\dfrac{\sin t}{t}$ es continuo en $\mathbb{R}$ tras la extensión en $t=0$, de modo que $F$ es derivable en todo $\mathbb{R}$. La solución está definida y es derivable en $(-\infty,\infty)$. Al ser la ecuación lineal, no hay soluciones singulares ni ramas perdidas.

## Observaciones

### Método alternativo: separación de variables

La ecuación también es de variables separables. Para $x\ne 0$ e $y\ne 0$, que es el caso cerca del punto inicial $y(0)=10>0$,

$$
\frac{dy}{y}=-\frac{\sin x}{x}\,dx.
$$

Al integrar desde $0$ hasta $x$ y aplicar $y(0)=10$,

$$
\ln|y(x)|-\ln 10=-\int_0^x \frac{\sin t}{t}\,dt,
$$

de donde se recupera la misma solución $y(x)=10e^{-\int_0^x \frac{\sin t}{t}\,dt}$.

La integral $\displaystyle\int_0^x \frac{\sin t}{t}\,dt$ es la función seno integral, $\operatorname{Si}(x)$. El integrando $\dfrac{\sin t}{t}$ no tiene primitiva elemental, y esa es la razón de expresar la solución mediante una integral definida. Su aparente singularidad en $t=0$ es evitable, pues $\displaystyle\lim_{t\to 0}\frac{\sin t}{t}=1$.
