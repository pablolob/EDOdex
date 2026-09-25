---
title: "Boyce 3.2 Ejercicio 18"
exercise-id: boyce-c03-s02-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies: []
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - derivacion.cociente
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

Si el wronskiano $W$ de $f$ y $g$ es $x^2 e^x$ y si $f(x) = x$, halle $g(x)$.

## Solución

La función buscada es

$$
g(x) = x e^{x} + Cx,
$$

con $C$ una constante arbitraria.

## Resolución

El **wronskiano** de $f$ y $g$ es

$$
W(f,g)(x) = f(x)g'(x) - f'(x)g(x).
$$

Con $f(x) = x$ se tiene $f'(x) = 1$, y la condición $W = x^2 e^x$ da

$$
x\,g'(x) - g(x) = x^2 e^x.
$$

Esta es una ecuación diferencial de primer orden para $g$. Al dividir por $x^2$ (para $x \ne 0$),

$$
\frac{x\,g'(x) - g(x)}{x^2} = e^x.
$$

El miembro izquierdo es la derivada del cociente $g(x)/x$:

$$
\left(\frac{g(x)}{x}\right)' = e^x.
$$

Se integra:

$$
\frac{g(x)}{x} = e^x + C,
$$

de donde

$$
g(x) = x e^x + Cx.
$$

Comprobación: con $g(x) = xe^x + Cx$ se tiene $g'(x) = e^x + xe^x + C$, y

$$
\begin{aligned}
W(f,g) &= x\left(e^x + xe^x + C\right) - \left(xe^x + Cx\right) \\
&= xe^x + x^2e^x + Cx - xe^x - Cx \\
&= x^2e^x.
\end{aligned}
$$

La familia hallada satisface $W = x^2e^x$ para todo $x \in \mathbb{R}$.

## Observaciones

El wronskiano no determina $g$ de forma única: si $g$ es una solución, también lo es $g + Cf$, porque $W(f, g + Cf) = W(f,g)$. El término $Cx$ es precisamente un múltiplo arbitrario de $f(x) = x$.

La deducción divide por $x$, por lo que es válida en cualquier intervalo que no contenga el origen. La expresión final se extiende a todo $\mathbb{R}$ por sustitución directa.
