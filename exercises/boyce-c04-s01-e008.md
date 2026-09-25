---
title: "Boyce 4.1 Ejercicio 8"
exercise-id: boyce-c04-s01-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12 elimine las constantes $c_1, c_2, \ldots, c_n$ entre las expresiones para $y$ y sus derivadas $y', \ldots, y^{(n-1)}$. Con ello, determine la ecuación diferencial que satisface la función dada.

8. $y = c_1 + c_2 \cos x + c_3 \sin x$

## Solución

La familia satisface la ecuación diferencial **lineal, homogénea y de tercer orden**

$$
y''' + y' = 0,
$$

definida para todo $x \in \mathbb{R}$.

## Resolución

Se derivan sucesivamente las funciones de la familia:

$$
\begin{aligned}
y    &= c_1 + c_2 \cos x + c_3 \sin x, \\
y'   &= -c_2 \sin x + c_3 \cos x, \\
y''  &= -c_2 \cos x - c_3 \sin x, \\
y''' &= c_2 \sin x - c_3 \cos x.
\end{aligned}
$$

El miembro derecho de $y''$ es el opuesto de $c_2 \cos x + c_3 \sin x$, y esta última expresión es $y - c_1$. Por tanto,

$$
y'' = -(y - c_1),
$$

es decir,

$$
y'' + y = c_1.
$$

En esta relación quedan eliminadas $c_2$ y $c_3$; solo permanece $c_1$. Al derivar una vez más se elimina también esa constante:

$$
y''' + y' = 0.
$$

**Verificación.** Al sustituir $y'''$ y $y'$ en el miembro izquierdo,

$$
y''' + y' = \left(c_2 \sin x - c_3 \cos x\right) + \left(-c_2 \sin x + c_3 \cos x\right) = 0,
$$

para todo $x \in \mathbb{R}$ y cualesquiera valores de $c_1$, $c_2$ y $c_3$.

## Observaciones

La ecuación obtenida es de tercer orden, lineal, homogénea y con coeficientes constantes. Su ecuación característica es

$$
r^3 + r = r\left(r^2 + 1\right) = 0,
$$

con raíces $r = 0$ y $r = \pm i$. La raíz $r = 0$ aporta la constante $c_1$ y el par $r = \pm i$ aporta la combinación $c_2 \cos x + c_3 \sin x$, de modo que la familia dada es la solución general de la ecuación.

El procedimiento es general: una familia con $n$ constantes arbitrarias origina una ecuación diferencial de orden $n$.

### Método alternativo: comparación directa de las derivadas

Sin pasar por la relación $y'' + y = c_1$, la comparación de $y'$ y $y'''$ da directamente el resultado. En efecto,

$$
y' = -c_2 \sin x + c_3 \cos x, \qquad y''' = c_2 \sin x - c_3 \cos x,
$$

son opuestos, luego $y''' = -y'$ y de ahí $y''' + y' = 0$.
