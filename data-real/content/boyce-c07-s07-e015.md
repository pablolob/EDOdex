
## Enunciado

El método de aproximaciones sucesivas (ver la sección 2.11) también puede aplicarse a los sistemas de ecuaciones. Por ejemplo, considere el problema con valor inicial
$$\mathbf{x}' = \mathbf{Ax}, \quad \mathbf{x}(0) = \mathbf{x}^0 \quad \text{(i)}$$
en donde $\mathbf{A}$ es una matriz constante y $\mathbf{x}^0$ un vector preescrito.
a) Si se supone que existe una solución $\mathbf{x} = \mathbf{\phi}(t)$, demuestre que ésta debe satisfacer la ecuación integral
$$\mathbf{\phi}(t) = \mathbf{x}^0 + \int_0^t \mathbf{A}\mathbf{\phi}(s)\,ds \quad \text{(ii)}$$
b) Parta de la aproximación inicial $\mathbf{\phi}^{(0)}(t) = \mathbf{x}^0$. Sustituya $\mathbf{\phi}(s)$ por esta expresión en el segundo miembro de la ecuación (ii) y obtenga una nueva aproximación $\mathbf{\phi}^{(1)}(t)$. Demuestre que
$$\mathbf{\phi}^{(1)}(t) = (\mathbf{I} + \mathbf{A}t)\mathbf{x}^0 \quad \text{(iii)}$$
c) Repita este proceso y obtenga de ese modo una sucesión de aproximaciones $\mathbf{\phi}^{(0)}$, $\mathbf{\phi}^{(1)}, \mathbf{\phi}^{(2)}, \dots, \mathbf{\phi}^{(n)}, \dots$ Aplique un argumento inductivo para demostrar que
$$\mathbf{\phi}^{(n)}(t) = \left(\mathbf{I} + \mathbf{A}t + \mathbf{A}^2 \frac{t^2}{2!} + \dots + \mathbf{A}^n \frac{t^n}{n!}\right)\mathbf{x}^0 \quad \text{(iv)}$$
d) Sea $n \to \infty$ y demuestre que la solución del problema con valor inicial (i) es
$$\mathbf{\phi}(t) = \exp(\mathbf{A}t)\mathbf{x}^0 \quad \text{(v)}$$
