---
title: "Zill Repaso C1 Ejercicio 18"
exercise-id: zill-c01-sr-e018
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 18"
topics:
  - fundamentos
competencies:
  - verificar.sustitucion-directa
  - verificar.condiciones-iniciales
  - determinar.dominio
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

18. **a)** Compruebe que la familia uniparamétrica $y^2 - 2y = x^2 - x + c$ es una solución implícita de la ecuación diferencial

$$
(2y - 2)\,y' = 2x - 1.
$$

    **b)** Encuentre un miembro de la familia en el inciso a) que satisfaga la condición inicial $y(0) = 1$.

    **c)** Utilice su resultado del inciso b) para determinar una *función explícita* $y = \phi(x)$ que satisfaga $y(0) = 1$. Dé el dominio de la función $\phi$. ¿Es $y = \phi(x)$ una *solución* del problema con valores iniciales? Si es así, dé su intervalo $I$ de definición; si no, explique por qué.

## Solución

**a)** La familia es solución implícita (ver resolución).

**b)** El miembro que satisface $y(0) = 1$ corresponde a $c = -1$:
$$
y^2 - 2y = x^2 - x - 1.
$$

**c)** La función explícita es $y = \phi(x) = 1 - \sqrt{x^2 - x}$ para $x \le 0$, o bien $y = \phi(x) = 1 + \sqrt{x^2 - x}$ para $x \ge 1$. Su dominio es $(-\infty, 0] \cup [1, \infty)$. **No** es solución del PVI porque no es diferenciable en $x = 0$; no existe un intervalo abierto que contenga a $x = 0$ donde $\phi$ satisfaga la EDO.

## Resolución

**a)** Se deriva implícitamente la familia $y^2 - 2y = x^2 - x + c$ respecto de $x$:

$$
\frac{d}{dx}\bigl(y^2 - 2y\bigr) = \frac{d}{dx}\bigl(x^2 - x + c\bigr),
$$
$$
2y\,y' - 2y' = 2x - 1,
$$
$$
(2y - 2)\,y' = 2x - 1.
$$

La familia satisface la EDO; es una solución implícita.

**b)** Se impone $y(0) = 1$ en la familia:

$$
1^2 - 2(1) = 0^2 - 0 + c \;\Longrightarrow\; 1 - 2 = c \;\Longrightarrow\; c = -1.
$$

El miembro buscado es

$$
y^2 - 2y = x^2 - x - 1.
$$

**c)** Se despeja $y$ completando el cuadrado:

$$
y^2 - 2y + 1 = x^2 - x - 1 + 1,
$$
$$
(y - 1)^2 = x^2 - x = x(x - 1).
$$

Para que exista $y$ real debe cumplirse $x(x - 1) \ge 0$, es decir, $x \le 0$ o $x \ge 1$. Se obtienen dos ramas explícitas:

$$
y = 1 \pm \sqrt{x^2 - x}.
$$

Ambas satisfacen $y(0) = 1$. El dominio de cada función explícita es $(-\infty, 0] \cup [1, \infty)$.

Sin embargo, para que $\phi$ sea solución del PVI debe existir un intervalo abierto que contenga a $x = 0$ en el cual $\phi$ sea diferenciable y satisfaga la EDO. La derivada de cada rama es

$$
\phi'(x) = \pm \frac{2x - 1}{2\sqrt{x^2 - x}},
$$

que no está definida en $x = 0$ (el denominador se anula). Por tanto, $\phi$ no es diferenciable en $x = 0$ y no puede ser solución del PVI en ningún intervalo que contenga a $x = 0$.

## Observaciones

La pérdida de diferenciabilidad en $x = 0$ se debe a que la derivada implícita $(2y - 2)y' = 2x - 1$ tiene coeficiente $2y - 2 = 0$ en $y = 1$. El teorema de la función implícita no garantiza una función explícita diferenciable en un entorno de $(0, 1)$. La solución del PVI existe solo como solución implícita.
