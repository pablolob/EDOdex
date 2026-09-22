---
title: "Boyce 6.5 Ejercicio 20"
exercise-id: boyce-c06-s05-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - resolver-analiticamente.convolucion
prerequisitos:
  - transformadas.convolucion
  - transformadas.transformada-laplace
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c06s05i02-p350.png
---

## Enunciado

Considere la ecuación

$$\phi(t) + \int_0^t k(t - \xi)\phi(\xi) \,d\xi = f(t),$$

en la que $f$ y $k$ son funciones conocidas y ha de determinarse $\phi$. Dado que la función desconocida $\phi$ aparece bajo un signo integral, la ecuación dada se llama **ecuación integral**; en particular, pertenece a una clase de ecuaciones integrales conocidas como ecuaciones integrales de Volterra. Calcule la transformada de Laplace de la ecuación integral dada y obtenga una expresión para $\mathscr{L}\{\phi(t)\}$ en términos de las transformadas $\mathscr{L}\{f(t)\}$ y $\mathscr{L}\{k(t)\}$ de las funciones dadas $f$ y $k$. La transformada inversa de $\mathscr{L}\{\phi(t)\}$ es la solución de la ecuación integral original.

## Solución

$$
\mathscr{L}\{\phi(t)\}=\frac{\mathscr{L}\{f(t)\}}{1+\mathscr{L}\{k(t)\}}.
$$

## Resolución

La integral del miembro izquierdo es una **integral de convolución**. Con la definición

$$
(k*\phi)(t)=\int_0^t k(t-\xi)\phi(\xi)\,d\xi,
$$

la ecuación integral se escribe

$$
\phi(t)+(k*\phi)(t)=f(t).
$$

Se aplica la **transformada de Laplace** a ambos miembros. Por linealidad,

$$
\mathscr{L}\{\phi(t)\}+\mathscr{L}\{(k*\phi)(t)\}=\mathscr{L}\{f(t)\}.
$$

Por el **teorema de convolución**, $\mathscr{L}\{k*\phi\}=\mathscr{L}\{k(t)\}\,\mathscr{L}\{\phi(t)\}$. Al escribir

$$
\Phi(s)=\mathscr{L}\{\phi(t)\},\qquad
F(s)=\mathscr{L}\{f(t)\},\qquad
K(s)=\mathscr{L}\{k(t)\},
$$

la ecuación transformada resulta

$$
\Phi(s)+K(s)\Phi(s)=F(s).
$$

Se factoriza $\Phi(s)$:

$$
\bigl(1+K(s)\bigr)\Phi(s)=F(s).
$$

Si $1+K(s)\ne 0$, se despeja la transformada de la incógnita:

$$
\Phi(s)=\frac{F(s)}{1+K(s)}.
$$

En términos de las transformadas dadas,

$$
\mathscr{L}\{\phi(t)\}=\frac{\mathscr{L}\{f(t)\}}{1+\mathscr{L}\{k(t)\}}.
$$

La solución de la ecuación integral es la transformada inversa de esta expresión.

## Observaciones

La ecuación integral de Volterra se convierte, al transformar, en una ecuación algebraica en la variable $s$. La condición $1+K(s)\ne 0$ es la que permite despejar $\Phi(s)$; la igualdad es válida en la región de convergencia común de las transformadas de $f$ y $k$.
