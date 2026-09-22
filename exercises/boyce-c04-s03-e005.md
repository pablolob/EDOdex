---
title: "Boyce 4.3 Ejercicio 5"
exercise-id: boyce-c04-s03-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 5"
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
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s03i01-p234.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

5. $y^{(iv)} - 4y'' = x^2 + e^x$

## Solución

$$
y = c_1 + c_2 x + c_3 e^{2x} + c_4 e^{-2x} - \frac{1}{48}x^4 - \frac{1}{16}x^2 - \frac{1}{3}e^x.
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$, donde $y_c$ resuelve la ecuación homogénea asociada e $y_p$ es una solución particular.

**Solución complementaria.** La ecuación característica es

$$
r^4 - 4r^2 = r^2(r^2 - 4) = r^2(r-2)(r+2) = 0.
$$

Las raíces son $r = 0$ (doble) y $r = \pm 2$. La raíz doble aporta $1$ y $x$; las raíces reales distintas aportan $e^{2x}$ y $e^{-2x}$. Por tanto,

$$
y_c = c_1 + c_2 x + c_3 e^{2x} + c_4 e^{-2x}.
$$

**Solución particular.** El término no homogéneo es $g(x) = x^2 + e^x$. Se aplica el principio de superposición y se busca una solución particular para cada sumando.

Para el término $x^2$ la forma natural $Ax^2 + Bx + C$ contiene una constante, que ya figura en $y_c$ porque $r = 0$ es raíz. Como $r = 0$ es raíz doble del polinomio auxiliar, la **regla de modificación** obliga a multiplicar por $x^2$:

$$
Y_1 = x^2(Ax^2 + Bx + C) = Ax^4 + Bx^3 + Cx^2.
$$

Sus derivadas relevantes son $Y_1'' = 12Ax^2 + 6Bx + 2C$ y $Y_1^{(iv)} = 24A$. Al sustituir en el miembro izquierdo,

$$
Y_1^{(iv)} - 4Y_1'' = 24A - 4(12Ax^2 + 6Bx + 2C) = -48Ax^2 - 24Bx + (24A - 8C).
$$

La igualdad $-48Ax^2 - 24Bx + (24A - 8C) = x^2$ fija $A = -\tfrac{1}{48}$, $B = 0$ y $C = -\tfrac{1}{16}$. Así,

$$
Y_1 = -\frac{1}{48}x^4 - \frac{1}{16}x^2.
$$

Para el término $e^x$ la forma $De^x$ no duplica ningún término de $y_c$, ya que $r = 1$ no es raíz del polinomio auxiliar. Con $Y_2 = De^x$ se tiene $Y_2'' = Y_2^{(iv)} = De^x$, de modo que

$$
Y_2^{(iv)} - 4Y_2'' = De^x - 4De^x = -3De^x.
$$

La igualdad $-3De^x = e^x$ fija $D = -\tfrac{1}{3}$. Por tanto,

$$
y_p = -\frac{1}{48}x^4 - \frac{1}{16}x^2 - \frac{1}{3}e^x.
$$

**Solución general.** Al reunir ambas partes,

$$
y = c_1 + c_2 x + c_3 e^{2x} + c_4 e^{-2x} - \frac{1}{48}x^4 - \frac{1}{16}x^2 - \frac{1}{3}e^x.
$$

Los coeficientes de la ecuación son constantes y $g(x)$ está definida en todo $\mathbb{R}$, de modo que la solución general es válida en el intervalo $(-\infty, \infty)$.

## Observaciones

La regla de modificación se aplica cuando la forma de prueba de $y_p$ ya figura en $y_c$: se multiplica por la menor potencia de $x$ que elimine la duplicación. Aquí el término constante de $x^2$ es solución de la homogénea y $r = 0$ es raíz doble, por lo que la potencia necesaria es $x^2$.

El término $e^x$ no requiere modificación, porque $e^x$ no pertenece a $y_c$: los exponenciales de la parte complementaria son $e^{2x}$ y $e^{-2x}$.

### Método alternativo: aniquiladores

El mismo resultado se obtiene con operadores aniquiladores. El operador $D^3$ aniquila a $x^2$ y $D-1$ aniquila a $e^x$. Al aplicar $D^3(D-1)$ a la ecuación se obtiene la homogénea

$$
D^3(D-1)(D^4 - 4D^2)y = D^3(D-1)D^2(D-2)(D+2)y = 0,
$$

cuya ecuación característica $r^3(r-1)r^2(r-2)(r+2)=0$ tiene raíces $r=0$ (quíntuple), $r=1$, $r=2$ y $r=-2$. La forma de prueba es $A + Bx + Cx^2 + Dx^3 + Ex^4 + Fe^x + c_1 + c_2 x + c_3 e^{2x} + c_4 e^{-2x}$; tras descartar las funciones que ya aparecen en $y_c$ queda $Cx^2 + Dx^3 + Ex^4 + Fe^x$, la misma familia de $y_p$ empleada arriba.
