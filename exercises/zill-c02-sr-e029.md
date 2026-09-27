---
title: "Zill Repaso C2 Ejercicio 29"
exercise-id: zill-c02-sr-e029
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 29"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
  - determinar.intervalo-existencia
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.teorema-fundamental-calculo
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

$$x \frac{dy}{dx} + 2y = x e^{x^2}, \quad y(1) = 3$$

## Solución

La ecuación es **lineal de primer orden**. Su solución es

$$
y(x)=\frac{3}{x^2}+\frac{1}{x^2}\int_1^x t^2e^{t^2}\,dt,
$$

válida en el intervalo $(0,\infty)$.

## Resolución

Para $x\ne 0$, la ecuación se escribe en forma estándar:

$$
\frac{dy}{dx}+\frac{2}{x}y=e^{x^2}.
$$

Es **lineal de primer orden** con $P(x)=2/x$. Un factor integrante es

$$
\mu(x)=\exp\!\left(\int \frac{2}{x}\,dx\right)=e^{2\ln x}=x^2,
$$

definido en $x>0$, intervalo que contiene al punto inicial $x=1$.

Al multiplicar la forma estándar por $x^2$,

$$
x^2\frac{dy}{dx}+2xy=x^2e^{x^2},
$$

es decir,

$$
\frac{d}{dx}\!\left(x^2y\right)=x^2e^{x^2}.
$$

Se integra esta igualdad entre $1$ y $x$. Por el teorema fundamental del cálculo,

$$
x^2y(x)-1^2y(1)=\int_1^x t^2e^{t^2}\,dt.
$$

La condición inicial $y(1)=3$ da

$$
x^2y(x)-3=\int_1^x t^2e^{t^2}\,dt,
$$

de donde

$$
y(x)=\frac{1}{x^2}\left(3+\int_1^x t^2e^{t^2}\,dt\right)
=\frac{3}{x^2}+\frac{1}{x^2}\int_1^x t^2e^{t^2}\,dt.
$$

El integrando $t^2e^{t^2}$ no tiene primitiva elemental; por eso la solución queda expresada mediante la integral definida pedida. El intervalo más amplio que contiene a $x=1$ y en el que la solución está definida es $(0,\infty)$, donde el factor integrante $x^2$ es positivo y la integral es finita.

La sustitución directa confirma el resultado. Si

$$
F(x)=\int_1^x t^2e^{t^2}\,dt,
\qquad
y(x)=\frac{3+F(x)}{x^2},
$$

la regla del cociente da

$$
y'(x)=\frac{F'(x)x^2-2x\left(3+F(x)\right)}{x^4}
=e^{x^2}-\frac{2\left(3+F(x)\right)}{x^3}.
$$

Entonces

$$
xy'(x)+2y(x)
=xe^{x^2}-\frac{2\left(3+F(x)\right)}{x^2}+\frac{2\left(3+F(x)\right)}{x^2}
=xe^{x^2},
$$

y además $y(1)=\dfrac{3+0}{1}=3$.

## Observaciones

La imposibilidad de expresar $\int t^2e^{t^2}\,dt$ con funciones elementales es la razón de pedir la solución en forma integral. Si se parte de una primitiva cualquiera $G(x)$ del integrando, la constante se determina con $y(1)=3$ y se recupera la misma expresión mediante $G(x)-G(1)$.
