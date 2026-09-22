---
title: "Boyce 5.5 Ejercicio 19"
exercise-id: boyce-c05-s05-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
  - aplicar-condiciones.problema-valor-inicial
  - analizar-cualitativamente.comportamiento-asintotico
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c05s05i01-p278.png
---

## Enunciado

Halle $\gamma$ de modo que la solución del problema con valor inicial $x^2 y'' - 2y = 0$, $y(1) = 1$, $y'(1) = \gamma$ sea acotado cuando $x \to 0$.

## Solución

El valor pedido es $\gamma = 2$. Con él, la solución del problema con valor inicial es

$$
y(x)=x^2,
$$

que es acotada cuando $x\to 0$.

## Resolución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** (equidimensional). El coeficiente de $y''$, $x^2$, se anula en $x=0$, único punto singular. Como la condición inicial se impone en $x=1$, la solución se busca en el intervalo $(0,\infty)$.

Se proponen soluciones de la forma $y=x^r$ para $x>0$, con derivadas

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\cdot r(r-1)x^{r-2}-2x^r
  &= \left[r(r-1)-2\right]x^r \\
  &= \left(r^2-r-2\right)x^r=0.
\end{aligned}
$$

Como $x^r\ne 0$, se obtiene la **ecuación característica**

$$
r^2-r-2=(r-2)(r+1)=0,
$$

cuyas raíces son $r_1=2$ y $r_2=-1$, reales y distintas. La solución general en $(0,\infty)$ es

$$
y(x)=C_1x^2+C_2x^{-1}.
$$

La condición de acotamiento cuando $x\to 0$ fija la constante $C_2$. El término $x^{-1}$ no está acotado en las proximidades de $x=0$, mientras que $x^2$ sí lo está. Por lo tanto, la solución es acotada si y solo si $C_2=0$, y queda

$$
y(x)=C_1x^2.
$$

La condición $y(1)=1$ da $C_1=1$, de modo que $y(x)=x^2$. Su derivada es $y'(x)=2x$ y, en consecuencia,

$$
\gamma=y'(1)=2.
$$

La sustitución directa confirma el resultado: con $y=x^2$, $y'=2x$ y $y''=2$,

$$
x^2y''-2y=2x^2-2x^2=0,
$$

y se cumplen $y(1)=1$ y $y'(1)=2=\gamma$. El término $x^2$ tiene límite finito en $x=0$, que es la propiedad de acotamiento solicitada.

## Observaciones

El acotamiento cuando $x\to 0$ selecciona la solución fundamental $x^2$ y descarta $x^{-1}$, que diverge. El punto singular $x=0$ queda excluido del intervalo de validez $(0,\infty)$.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ el cambio $t=\ln x$ transforma la ecuación de Cauchy-Euler en la de coeficientes constantes

$$
\ddot y-\dot y-2y=0,
$$

cuya ecuación característica $\lambda^2-\lambda-2=0$ tiene las mismas raíces $\lambda=2$ y $\lambda=-1$. La solución $y=C_1e^{2t}+C_2e^{-t}$ conduce al mismo resultado al deshacer el cambio.
