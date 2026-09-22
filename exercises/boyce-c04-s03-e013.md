---
title: "Boyce 4.3 Ejercicio 13"
exercise-id: boyce-c04-s03-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 13"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.coeficientes-indeterminados
  - resolver-analiticamente.lineales-coeficientes-constantes
hidden-competencies:
  - clasificar.lineal-no-hom
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s03i02-p235.png
---

## Enunciado

En cada uno de los problemas 12 a 17, determine una forma adecuada para $Y(x)$, si ha de aplicarse el método de los coeficientes indeterminados. No evalúe las constantes.

13. $y''' - y' = xe^{-x} + 2\cos x$

## Solución

$$
Y(x) = x(Ax+B)e^{-x} + C\cos x + D\sin x.
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Su solución general tiene la estructura $y = y_c + y_p$. El enunciado solo pide la forma de la solución particular $Y(x)$ por **coeficientes indeterminados**, con el enfoque de superposición, sin evaluar las constantes.

**Solución complementaria.** La ecuación homogénea asociada es $y''' - y' = 0$. Su ecuación característica es

$$
r^3 - r = r(r^2-1) = r(r-1)(r+1) = 0,
$$

cuyas raíces son $r = 0$, $r = 1$ y $r = -1$ (todas simples). Por tanto,

$$
y_c = c_1 + c_2 e^{x} + c_3 e^{-x}.
$$

**Forma de la solución particular.** El término no homogéneo es $g(x) = xe^{-x} + 2\cos x$. Por el principio de superposición se propone una forma de prueba para cada sumando y se reúnen al final.

Para el término $xe^{-x}$, el polinomio es de grado $1$ y la exponencial es $e^{-x}$. La forma natural sería $(Ax+B)e^{-x}$. Sin embargo, $e^{-x}$ ya figura en $y_c$, porque $r = -1$ es raíz simple del polinomio auxiliar. La **regla de modificación** exige multiplicar por la menor potencia de $x$ que elimine la duplicación, esto es, por $x$:

$$
Y_1 = x(Ax+B)e^{-x} = (Ax^2 + Bx)e^{-x}.
$$

Para el término $2\cos x$, la forma natural es $C\cos x + D\sin x$, que corresponde a las raíces complejas $\pm i$. Estas no son raíces del polinomio auxiliar, cuyas raíces son $0$, $1$ y $-1$. No hay duplicación y no se necesita ningún factor $x$:

$$
Y_2 = C\cos x + D\sin x.
$$

**Forma propuesta.** Al reunir ambas contribuciones,

$$
Y(x) = (Ax^2 + Bx)e^{-x} + C\cos x + D\sin x.
$$

## Observaciones

El factor $x$ de la parte exponencial no es opcional. Si se ensayara $(Ax+B)e^{-x}$, el miembro izquierdo de la ecuación anularía esa expresión, pues $e^{-x}$ resuelve la ecuación homogénea, y no podría igualarse a $xe^{-x}$.

La regla de modificación se aplica con la menor potencia de $x$ que rompe la duplicación. Como $r = -1$ es una raíz simple, basta $x^1$; si fuera doble haría falta $x^2$.

El término trigonométrico no requiere modificación porque $\pm i$ no son raíces del polinomio auxiliar. Las constantes $A$, $B$, $C$ y $D$ quedan sin determinar, según lo pedido.

### Método alternativo: aniquiladores

El mismo resultado se obtiene con **aniquiladores**. El operador $(D+1)^2$ aniquila $xe^{-x}$ y el operador $D^2+1$ aniquila $2\cos x$. Al aplicar ambos a la ecuación se obtiene una ecuación homogénea cuya ecuación característica añade las raíces $-1$ (doble) y $\pm i$ a las raíces $0$, $1$ y $-1$; la forma de $Y(x)$ se lee de las raíces nuevas.
