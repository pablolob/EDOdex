---
title: "Boyce 4.3 Ejercicio 7"
exercise-id: boyce-c04-s03-e007
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 7"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - resolver-analiticamente.coeficientes-indeterminados
hidden-competencies:
  - clasificar.lineal-no-hom
  - seleccionar-metodo.coeficientes-indeterminados
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s03i01-p234.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

7. $y^{(vi)} + y''' = x$

## Solución

$$
y = c_1 + c_2 x + c_3 x^2 + c_4 e^{-x} + e^{x/2}\left(c_5\cos\frac{\sqrt{3}}{2}x + c_6\sin\frac{\sqrt{3}}{2}x\right) + \frac{x^{4}}{24}.
$$

## Resolución

La ecuación es **lineal**, de **sexto orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación homogénea es $y^{(vi)} + y''' = 0$, con ecuación característica

$$
r^6 + r^3 = r^3(r^3+1) = 0.
$$

El factor $r^3$ aporta la raíz $r = 0$ con multiplicidad tres. El factor $r^3+1 = (r+1)(r^2-r+1)$ aporta la raíz real $r = -1$ y el par complejo conjugado

$$
r = \frac{1 \pm i\sqrt{3}}{2} = \frac{1}{2} \pm i\frac{\sqrt{3}}{2}.
$$

Por tanto,

$$
y_c = c_1 + c_2 x + c_3 x^2 + c_4 e^{-x} + e^{x/2}\left(c_5\cos\frac{\sqrt{3}}{2}x + c_6\sin\frac{\sqrt{3}}{2}x\right).
$$

**Solución particular.** El término no homogéneo es $g(x) = x$, un polinomio de grado 1. La forma natural $Ax + B$ duplica funciones de $y_c$, porque $r = 0$ es raíz triple de la ecuación característica. La **regla de modificación** obliga a multiplicar por $x^3$:

$$
Y = x^3(Ax + B) = Ax^4 + Bx^3.
$$

Sus derivadas de interés son $Y''' = 24Ax + 6B$ y $Y^{(vi)} = 0$. Al sustituir en la ecuación,

$$
Y^{(vi)} + Y''' = 24Ax + 6B = x.
$$

La igualdad de polinomios fija $24A = 1$ y $6B = 0$, de modo que $A = \tfrac{1}{24}$ y $B = 0$. Así,

$$
y_p = \frac{x^4}{24}.
$$

**Solución general.** Al reunir ambas partes,

$$
y = c_1 + c_2 x + c_3 x^2 + c_4 e^{-x} + e^{x/2}\left(c_5\cos\frac{\sqrt{3}}{2}x + c_6\sin\frac{\sqrt{3}}{2}x\right) + \frac{x^{4}}{24}.
$$

Los coeficientes de la ecuación son constantes y $g(x)$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

La **regla de modificación** multiplica por la menor potencia de $x$ que elimina la duplicación con $y_c$. Aquí $r = 0$ es raíz triple, de modo que $1$, $x$ y $x^2$ ya son soluciones de la homogénea; por eso el polinomio de prueba se eleva a $x^3$ y el término resultante es $x^4/24$.

La raíz triple en $r = 0$ es la única que interviene en la parte particular. El término exponencial $e^{-x}$ y el par complejo $\frac{1}{2} \pm i\frac{\sqrt{3}}{2}$ provienen de $r^3+1 = 0$ y no afectan a $y_p$.

### Método alternativo: aniquiladores

El operador $D^2$ aniquila a $g(x) = x$. Al aplicarlo a la ecuación $(D^6+D^3)y = x$ se obtiene la homogénea

$$
D^2(D^6+D^3)y = (D^8+D^5)y = 0,
$$

con ecuación característica $r^5(r^3+1) = 0$. Sus raíces son $r = 0$ con multiplicidad cinco y las tres raíces de $r^3+1 = 0$. La forma de prueba contiene los polinomios $1, x, x^2, x^3, x^4$; tras descartar $1, x, x^2$ (que ya figuran en $y_c$) queda $Y = Ax^4 + Bx^3$, la misma empleada arriba.
