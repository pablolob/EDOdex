---
title: "Boyce 3.2 Ejercicio 14"
exercise-id: boyce-c03-s02-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.2, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - verificar.solucion
  - clasificar.linealidad
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s02i01-p152.png
---

## Enunciado

Compruebe que $y_1(x) = 1$ y $y_2(x) = x^{1/2}$ son soluciones de la ecuación diferencial $yy'' + (y')^2 = 0$ para $x > 0$. En seguida demuestre que $c_1 + c_2 x^{1/2}$ no es, en general, una solución de esta ecuación. ¿Por qué no?

## Solución

Las funciones $y_1(x) = 1$ y $y_2(x) = x^{1/2}$ satisfacen la ecuación en $x > 0$. En cambio, para $y = c_1 + c_2 x^{1/2}$ se obtiene

$$
yy'' + (y')^2 = -\frac{c_1 c_2}{4}\,x^{-3/2},
$$

expresión que no se anula cuando $c_1 c_2 \ne 0$. Por tanto, la combinación no es solución en general: la ecuación es **no lineal** y el **principio de superposición** no se cumple.

## Resolución

Se verifica primero cada solución por **sustitución directa** y después se sustituye la combinación lineal.

**Verificación de $y_1(x) = 1$.** Sus derivadas son $y_1'(x) = 0$ y $y_1''(x) = 0$. Al sustituir,

$$
y_1 y_1'' + (y_1')^2 = 1 \cdot 0 + 0^2 = 0.
$$

**Verificación de $y_2(x) = x^{1/2}$.** Para $x > 0$,

$$
y_2'(x) = \frac{1}{2}x^{-1/2}, \qquad y_2''(x) = -\frac{1}{4}x^{-3/2}.
$$

Al sustituir,

$$
\begin{aligned}
y_2 y_2'' + (y_2')^2
&= x^{1/2}\left(-\frac{1}{4}x^{-3/2}\right) + \left(\frac{1}{2}x^{-1/2}\right)^2 \\
&= -\frac{1}{4}x^{-1} + \frac{1}{4}x^{-1} = 0.
\end{aligned}
$$

Ambas funciones son solución en $x > 0$.

**Combinación lineal.** Para $y = c_1 + c_2 x^{1/2}$ las derivadas son

$$
y' = \frac{c_2}{2}x^{-1/2}, \qquad y'' = -\frac{c_2}{4}x^{-3/2}.
$$

Se sustituye en la ecuación:

$$
\begin{aligned}
y y'' + (y')^2
&= \left(c_1 + c_2 x^{1/2}\right)\left(-\frac{c_2}{4}x^{-3/2}\right)
   + \frac{c_2^2}{4}x^{-1} \\
&= -\frac{c_1 c_2}{4}x^{-3/2} - \frac{c_2^2}{4}x^{-1}
   + \frac{c_2^2}{4}x^{-1} \\
&= -\frac{c_1 c_2}{4}x^{-3/2}.
\end{aligned}
$$

Como $x > 0$, esta expresión es cero para todo $x$ solo si $c_1 c_2 = 0$. Para $c_1 c_2 \ne 0$ no se anula; por ejemplo, con $c_1 = c_2 = 1$ resulta $-\dfrac{1}{4}x^{-3/2} \ne 0$. Por tanto, $c_1 + c_2 x^{1/2}$ no es solución en general.

**Motivo.** La ecuación es **no lineal**, porque la variable dependiente y sus derivadas aparecen multiplicadas entre sí en los términos $yy''$ y $(y')^2$. El **principio de superposición** (toda combinación lineal de soluciones es solución) es válido únicamente para ecuaciones lineales homogéneas. Aquí el operador $L[y] = yy'' + (y')^2$ no es lineal: al aplicar $L$ a la suma $y_1 + y_2$ aparecen términos cruzados,

$$
L[y_1 + y_2] = L[y_1] + L[y_2] + y_1 y_2'' + y_2 y_1'' + 2 y_1' y_2',
$$

y el término $y_2'' = -\dfrac{1}{4}x^{-3/2}$ no se anula. Por eso la suma de dos soluciones no vuelve a ser solución.

## Observaciones

La ecuación puede reescribirse como $(y y')' = 0$, ya que por la regla del producto $y y'' + (y')^2 = (y y')'$. De ahí que toda solución cumpla $y y' = C$ con $C$ constante. Para $y_1 = 1$ se tiene $y_1 y_1' = 0$ y para $y_2 = x^{1/2}$, $y_2 y_2' = \dfrac{1}{2}$; en cambio, para $c_1 + c_2 x^{1/2}$ el producto $y y' = \dfrac{c_1 c_2}{2}x^{-1/2} + \dfrac{c_2^2}{2}$ no es constante si $c_1 c_2 \ne 0$. La falla de la superposición se debe, entonces, a la no linealidad de la ecuación, no a la elección particular de las funciones.
