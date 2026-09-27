---
title: "Boyce 7.8 Ejercicio 15"
exercise-id: boyce-c07-s08-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 7.8, ejercicio 15"
statement-status: pending-review
solution-status: open
source-images:
  - c07s08i02-p419.png
---

## Enunciado

*15. El método de aproximaciones sucesivas (ver la sección 2.11) también puede aplicarse a los sistemas de ecuaciones. Por ejemplo, considere el problema con valor inicial
$$\mathbf{x}' = \mathbf{A}\mathbf{x}, \quad \mathbf{x}(0) = \mathbf{x}^0, \tag{i}$$
en donde $\mathbf{A}$ es una matriz constante y $\mathbf{x}^0$ un vector preescrito.
a) Si se supone que existe una solución $\mathbf{x} = \boldsymbol{\phi}(t)$, demuestre que ésta debe satisfacer la ecuación integral
$$\boldsymbol{\phi}(t) = \mathbf{x}^0 + \int_0^t \mathbf{A}\boldsymbol{\phi}(s)\,ds. \tag{ii}$$
b) Parta de la aproximación inicial $\boldsymbol{\phi}^{(0)}(t) = \mathbf{x}^0$. Sustituya $\boldsymbol{\phi}(s)$ por esta expresión en el segundo miembro de la ecuación (ii) y obtenga una nueva aproximación $\boldsymbol{\phi}^{(1)}(t)$. Demuestre que
$$\boldsymbol{\phi}^{(1)}(t) = (\mathbf{I} + \mathbf{A}t)\mathbf{x}^0. \tag{iii}$$
c) Repita este proceso y obtenga de ese modo una sucesión de aproximaciones $\boldsymbol{\phi}^{(0)}$, $\boldsymbol{\phi}^{(1)}$, $\boldsymbol{\phi}^{(2)}, \dots, \boldsymbol{\phi}^{(n)}, \dots$ Aplique un argumento inductivo para demostrar que
$$\boldsymbol{\phi}^{(n)}(t) = \left( \mathbf{I} + \mathbf{A}t + \mathbf{A}^2\frac{t^2}{2!} + \dots + \mathbf{A}^n\frac{t^n}{n!} \right) \mathbf{x}^0. \tag{iv}$$
d) Sea $n\to\infty$ y demuestre que la solución del problema con valor inicial (i) es
$$\boldsymbol{\phi}(t) = \exp(\mathbf{A}t)\mathbf{x}^0. \tag{v}$$
