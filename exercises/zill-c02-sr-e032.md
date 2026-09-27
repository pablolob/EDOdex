---
title: "Zill Repaso C2 Ejercicio 32"
exercise-id: zill-c02-sr-e032
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 32"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
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

En problemas de 31 y 32, resuelva el problema de valor inicial dado.

$$\frac{dy}{dx} + P(x)y = e^x, \quad y(0) = -1, \quad \text{donde } P(x) = \begin{cases} 1, & 0 \le x < 1 \\ -1, & x \ge 1 \end{cases}$$

## Solución

$$
y(x) = \begin{cases}
\dfrac{1}{2}e^{x} - \dfrac{3}{2}e^{-x}, & 0 \le x < 1, \\[6pt]
\left(x - \dfrac{1}{2} - \dfrac{3}{2}e^{-2}\right)e^{x}, & x \ge 1.
\end{cases}
$$

## Resolución

La ecuación es **lineal de primer orden**, con coeficiente $P(x)$ discontinuo en $x=1$. Se resuelve por **factor integrante** en cada intervalo y se enlazan ambas ramas imponiendo la continuidad de la solución en $x=1$.

En $0 \le x < 1$ se tiene $P(x)=1$ y la ecuación es

$$
\frac{dy}{dx} + y = e^{x}.
$$

El factor integrante es $\mu(x)=e^{x}$. Al multiplicar ambos miembros,

$$
\frac{d}{dx}\!\left(e^{x}y\right) = e^{2x}.
$$

La integración da

$$
e^{x}y = \frac{1}{2}e^{2x} + C_1,
\qquad\text{es decir}\qquad
y = \frac{1}{2}e^{x} + C_1 e^{-x}.
$$

La condición $y(0)=-1$ implica $\dfrac{1}{2} + C_1 = -1$, de donde $C_1 = -\dfrac{3}{2}$. Por tanto,

$$
y(x) = \frac{1}{2}e^{x} - \frac{3}{2}e^{-x}, \qquad 0 \le x < 1.
$$

En $x \ge 1$ se tiene $P(x)=-1$ y la ecuación es

$$
\frac{dy}{dx} - y = e^{x}.
$$

El factor integrante es $\mu(x)=e^{-x}$, de modo que

$$
\frac{d}{dx}\!\left(e^{-x}y\right) = 1.
$$

Al integrar resulta

$$
e^{-x}y = x + C_2,
\qquad\text{es decir}\qquad
y = (x + C_2)e^{x}.
$$

Para fijar $C_2$ se impone la continuidad en $x=1$. La rama anterior toma el valor

$$
y(1^-) = \frac{1}{2}e - \frac{3}{2}e^{-1}.
$$

Igualando con la segunda rama en $x=1$,

$$
(1 + C_2)e = \frac{1}{2}e - \frac{3}{2}e^{-1}
\;\Longrightarrow\;
1 + C_2 = \frac{1}{2} - \frac{3}{2}e^{-2},
$$

por lo que

$$
C_2 = -\frac{1}{2} - \frac{3}{2}e^{-2}.
$$

Así,

$$
y(x) = \left(x - \frac{1}{2} - \frac{3}{2}e^{-2}\right)e^{x}, \qquad x \ge 1.
$$

Cada rama satisface su ecuación lineal y la solución es continua en $x=1$; la condición inicial $y(0)=-1$ se cumple por construcción.

## Observaciones

El coeficiente $P(x)$ es discontinuo en $x=1$, así que la ecuación se satisface en sentido clásico en los intervalos $(0,1)$ y $(1,\infty)$. La solución es continua en $x=1$ pero su derivada presenta allí un salto, de modo que la ecuación no se cumple en ese punto.

Como la ecuación es lineal y los coeficientes son continuos por tramos, no existen soluciones singulares. La solución está definida y es válida en el intervalo $[0,\infty)$.
