
## Enunciado

a) Demuestre que $\phi(x) = e^{2x}$ es una solución de $y' - 2y = 0$ y que $y = c\phi(x)$ también es una solución de esta ecuación para cualquier valor de la constante $c$.

b) Demuestre que $\phi(x) = 1/x$ es una solución de $y' + y^2 = 0$, para $x > 0$, pero que $y = c\phi(x)$ no es una solución de esta ecuación, a menos que $c = 0$ o $c = 1$. Observe que la ecuación del inciso b) es no lineal, mientras que la del inciso a) es lineal.

## Solución

En el inciso a), $\phi(x)=e^{2x}$ satisface $y'-2y=0$ y toda combinación $y=ce^{2x}$ también es solución, para cualquier constante $c$. En el inciso b), $\phi(x)=1/x$ satisface $y'+y^2=0$ en $x>0$, mientras que $y=c/x$ solo es solución si $c=0$ o $c=1$:

$$
y' - 2y = 0 \quad \text{admite} \quad y = c\,e^{2x}, \qquad
y' + y^2 = 0 \quad \text{solo admite} \quad y = \frac{c}{x} \ \text{con} \ c \in \{0,1\}.
$$

## Resolución

En ambos incisos se verifica por **sustitución directa** en la ecuación diferencial.

**Inciso a).** Para $\phi(x)=e^{2x}$ la derivada es

$$
\phi'(x) = 2e^{2x}.
$$

Se sustituye en $y'-2y=0$:

$$
\phi' - 2\phi = 2e^{2x} - 2e^{2x} = 0.
$$

Por tanto, $\phi$ es solución. Para $y=c\phi(x)=ce^{2x}$ se tiene $y'=2ce^{2x}$ y

$$
y' - 2y = 2ce^{2x} - 2ce^{2x} = c\,(2e^{2x} - 2e^{2x}) = 0
$$

para todo valor de $c$. La ecuación es **lineal** y homogénea, de modo que cualquier múltiplo constante de una solución vuelve a ser solución.

**Inciso b).** Para $\phi(x)=1/x$, con $x>0$, la derivada es

$$
\phi'(x) = -\frac{1}{x^2}.
$$

Se sustituye en $y'+y^2=0$:

$$
\phi' + \phi^2 = -\frac{1}{x^2} + \frac{1}{x^2} = 0.
$$

Por tanto, $\phi$ es solución en $x>0$. Para $y=c\phi(x)=c/x$ se tiene $y'=-c/x^2$ y

$$
y' + y^2 = -\frac{c}{x^2} + \frac{c^2}{x^2} = \frac{c^2-c}{x^2} = \frac{c(c-1)}{x^2}.
$$

Como $x>0$, esta expresión se anula para todo $x$ si y solo si $c(c-1)=0$, es decir, $c=0$ o $c=1$. Para cualquier otro valor de $c$ el miembro izquierdo no es cero. La ecuación es **no lineal**, por lo que el principio de superposición no se cumple y solo ciertos múltiplos constantes de $\phi$ son solución.

## Observaciones

En una ecuación lineal homogénea, como $y'-2y=0$, el conjunto de soluciones es cerrado bajo la multiplicación por constantes: si $\phi$ es solución, $c\phi$ también lo es para todo $c$. En una ecuación no lineal, como $y'+y^2=0$, esa propiedad puede fallar. Aquí $c=0$ da la solución trivial $y=0$ y $c=1$ recupera la propia $\phi$; los demás valores de $c$ no producen soluciones.
