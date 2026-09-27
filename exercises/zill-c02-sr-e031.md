---
title: "Zill Repaso C2 Ejercicio 31"
exercise-id: zill-c02-sr-e031
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 31"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
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

En problemas de 31 y 32, resuelva el problema de valor inicial dado.

$$\frac{dy}{dx} + y = f(x), \quad y(0) = 5, \quad \text{donde } f(x) = \begin{cases} e^{-x}, & 0 \le x < 1 \\ 0, & x \ge 1 \end{cases}$$

## Solución

$$
y(x) =
\begin{cases}
(x+5)e^{-x}, & 0 \le x < 1, \\[2pt]
6e^{-x}, & x \ge 1.
\end{cases}
$$

La solución está definida en $[0,\infty)$ y es continua en $x=1$, donde $y(1)=6e^{-1}$.

## Resolución

La ecuación es **lineal de primer orden** con término no homogéneo discontinuo. Se resuelve por separado en cada tramo y se impone la continuidad de la solución en $x=1$. En forma estándar,

$$
\frac{dy}{dx} + y = f(x),
$$

el **factor integrante** es $\mu(x) = e^{\int 1\,dx} = e^{x}$. Al multiplicar,

$$
\frac{d}{dx}\bigl[e^{x}y\bigr] = e^{x}f(x).
$$

En el tramo $0 \le x < 1$ se tiene $e^{x}f(x) = e^{x}e^{-x} = 1$, de modo que

$$
e^{x}y = \int 1\,dx = x + C_1,
\qquad
y = (x + C_1)e^{-x}.
$$

La condición inicial $y(0)=5$ da $C_1 = 5$. Así,

$$
y(x) = (x+5)e^{-x}, \qquad 0 \le x < 1.
$$

En el tramo $x \ge 1$ se tiene $f(x)=0$ y la ecuación es homogénea:

$$
\frac{d}{dx}\bigl[e^{x}y\bigr] = 0,
\qquad
y = C_2 e^{-x}.
$$

La solución debe ser continua en $x=1$. El límite por la izquierda es

$$
\lim_{x \to 1^-} (x+5)e^{-x} = 6e^{-1}.
$$

Igualando con el valor del tramo derecho en $x=1$:

$$
C_2 e^{-1} = 6e^{-1}
\;\Longrightarrow\;
C_2 = 6.
$$

Por tanto, la solución del problema de valor inicial es

$$
y(x) =
\begin{cases}
(x+5)e^{-x}, & 0 \le x < 1, \\[2pt]
6e^{-x}, & x \ge 1.
\end{cases}
$$

**Intervalo.** La solución es continua en $[0,\infty)$. La función forzante $f$ es discontinua en $x=1$; la solución satisface la ecuación en todo punto salvo en $x=1$, donde solo se exige continuidad. El intervalo más largo que contiene a $x=0$ es $[0,\infty)$.

## Observaciones

En $x=1$ la solución es continua pero no derivable: la derivada lateral izquierda vale $-5e^{-1}$ y la derecha $-6e^{-1}$. La discontinuidad de $f$ se refleja como un cambio de pendiente. La primera fórmula también da $y(1)=6e^{-1}$, de modo que el empalme es inmediato.
