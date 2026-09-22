---
title: "Boyce 6.5 Ejercicio 1"
exercise-id: boyce-c06-s05-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.convolucion
prerequisitos:
  - transformadas.convolucion
  - calculo-avanzado.integrales-dobles
  - integracion.sustitucion
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s05i01-p349.png
  - c06s05i02-p350.png
---

## Enunciado

Establezca las propiedades conmutativa, distributiva y asociativa de la integral de convolución.

a) $f * g = g * f$

b) $f * (g_1 + g_2) = f * g_1 + f * g_2$

c) $f * (g * h) = (f * g) * h$

## Solución

Con la definición de la integral de convolución

$$
(f*g)(t)=\int_0^t f(t-\tau)g(\tau)\,d\tau,
$$

se cumplen las tres propiedades:

$$
f*g=g*f,\qquad
f*(g_1+g_2)=f*g_1+f*g_2,\qquad
f*(g*h)=(f*g)*h.
$$

## Resolución

Se parte de la definición de la integral de convolución,

$$
(f*g)(t)=\int_0^t f(t-\tau)g(\tau)\,d\tau .
$$

**a) Propiedad conmutativa.** En la definición se aplica el **cambio de variable** $u=t-\tau$, de modo que $\tau=t-u$ y $d\tau=-du$. Los límites $\tau=0$ y $\tau=t$ se transforman en $u=t$ y $u=0$. Entonces

$$
(f*g)(t)=\int_{t}^{0} f(u)g(t-u)\,(-du)=\int_0^t g(t-u)f(u)\,du=(g*f)(t).
$$

**b) Propiedad distributiva.** Por la **linealidad de la integral**,

$$
\begin{aligned}
\bigl(f*(g_1+g_2)\bigr)(t)
&=\int_0^t f(t-\tau)\bigl(g_1(\tau)+g_2(\tau)\bigr)\,d\tau\\
&=\int_0^t f(t-\tau)g_1(\tau)\,d\tau+\int_0^t f(t-\tau)g_2(\tau)\,d\tau\\
&=(f*g_1)(t)+(f*g_2)(t).
\end{aligned}
$$

**c) Propiedad asociativa.** Se calcula primero $(g*h)(\tau)=\int_0^\tau g(\tau-s)h(s)\,ds$. Al sustituir en la definición,

$$
\bigl(f*(g*h)\bigr)(t)=\int_0^t f(t-\tau)\left[\int_0^\tau g(\tau-s)h(s)\,ds\right]d\tau .
$$

La expresión anterior es una integral doble sobre la región $0\le s\le\tau\le t$. Se **intercambia el orden de integración** (teorema de Fubini; el integrando es continuo en esa región). Para cada $s$ fijo, la variable $\tau$ recorre de $s$ a $t$:

$$
\bigl(f*(g*h)\bigr)(t)=\int_0^t h(s)\left[\int_s^t f(t-\tau)g(\tau-s)\,d\tau\right]ds .
$$

En la integral interior se aplica el **cambio de variable** $w=\tau-s$, con $d\tau=dw$; los límites $\tau=s$ y $\tau=t$ pasan a $w=0$ y $w=t-s$. Así,

$$
\int_s^t f(t-\tau)g(\tau-s)\,d\tau=\int_0^{t-s} f(t-s-w)g(w)\,dw=(f*g)(t-s).
$$

Al sustituir este resultado,

$$
\bigl(f*(g*h)\bigr)(t)=\int_0^t (f*g)(t-s)h(s)\,ds=\bigl((f*g)*h\bigr)(t),
$$

pues la última integral es, por definición, la convolución de $f*g$ con $h$ evaluada en $t$.

## Observaciones

La integral de convolución es la convolución causal del capítulo de la transformada de Laplace: $f$ y $g$ se consideran definidas en $[0,\infty)$ y las identidades valen para todo $t\ge 0$.

### Método alternativo: teorema de convolución

Si se dispone del teorema de convolución $\mathcal{L}\{f*g\}=F(s)G(s)$, las tres propiedades se obtienen de las propiedades del producto de transformadas y de la unicidad de la transformada inversa. Por ejemplo, $\mathcal{L}\{f*g\}=FG=GF=\mathcal{L}\{g*f\}$ implica $f*g=g*f$. La demostración directa anterior es autocontenida y no requiere ese teorema.
