---
title: "Boyce 3.3 Ejercicio 21"
exercise-id: boyce-c03-s03-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s03i02-p160.png
---

## Enunciado

En los problemas 19 a 21 suponga que $p$ y $q$ son continuas y que las funciones $y_1$ y $y_2$ son soluciones de la ecuación diferencial $y'' + p(x)y' + p(x)y = 0$ sobre un intervalo abierto $I$. Demuestre que si $y_1$ y $y_2$ tienen un punto de inflexión común $x_0$ en $I$, entonces no pueden ser un conjunto fundamental de soluciones.

## Solución

Salvo en el caso degenerado en que el coeficiente de $y'$ se anule en $x_0$, esto es, $p(x_0)=0$, un punto de inflexión común fuerza la anulación del wronskiano y el par no puede ser un conjunto fundamental de soluciones. En efecto,

$$
W[y_1,y_2](x_0)=0
\quad\Longrightarrow\quad
W[y_1,y_2](x)\equiv 0,\qquad x\in I.
$$

Un wronskiano idénticamente nulo implica que $y_1$ y $y_2$ son linealmente dependientes sobre $I$.

## Resolución

Sean $y_1$ y $y_2$ soluciones de $y''+p(x)y'+p(x)y=0$ sobre el intervalo abierto $I$, con $p$ continua en $I$, y sea $x_0\in I$ un punto de inflexión común:

$$
y_1''(x_0)=0, \qquad y_2''(x_0)=0.
$$

El **wronskiano** del par se define como

$$
W[y_1,y_2](x)=y_1(x)y_2'(x)-y_1'(x)y_2(x).
$$

Cada solución satisface $y_i''=-p(x)y_i'-p(x)y_i$. Al derivar el wronskiano y sustituir estas segundas derivadas,

$$
\begin{aligned}
W' &= y_1'y_2' + y_1y_2'' - y_1''y_2 - y_1'y_2'
    = y_1y_2'' - y_1''y_2 \\
   &= y_1\left(-p\,y_2' - p\,y_2\right) - \left(-p\,y_1' - p\,y_1\right)y_2 \\
   &= -p\left(y_1y_2' - y_1'y_2\right)
    = -p(x)\,W.
\end{aligned}
$$

Así, $W$ resuelve la ecuación lineal de primer orden $W'+p(x)W=0$. Como $p$ es continua en $I$, su solución viene dada por la **fórmula de Abel**,

$$
W[y_1,y_2](x)=W(x_0)\exp\!\left(-\int_{x_0}^{x}p(t)\,dt\right).
$$

Por otra parte, al evaluar $W'=y_1y_2''-y_1''y_2$ en $x_0$ ambos términos se anulan, porque $y_1''(x_0)=y_2''(x_0)=0$:

$$
W'(x_0)=y_1(x_0)\cdot 0 - 0\cdot y_2(x_0)=0.
$$

Como $W'(x_0)=-p(x_0)W(x_0)$, resulta

$$
p(x_0)\,W(x_0)=0.
$$

Si $p(x_0)\ne 0$, entonces $W(x_0)=0$ y la fórmula de Abel da $W\equiv 0$ sobre $I$. Por el **criterio del wronskiano**, $y_1$ y $y_2$ son linealmente dependientes y, en consecuencia, no forman un conjunto fundamental de soluciones sobre $I$. $\blacksquare$

Si $p(x_0)=0$, la relación $p(x_0)W(x_0)=0$ no aporta información sobre $W(x_0)$ y el argumento no decide; ese caso se discute en las observaciones.

## Observaciones

La conclusión requiere que el coeficiente de $y'$ no se anule en el punto común. Si $p(x_0)=0$, la ecuación evaluada en $x_0$ no impone restricción alguna y pueden existir pares fundamentales con un punto de inflexión común: por ejemplo, para $y''+xy'+xy=0$ toda solución cumple $y''(0)=0$, y hay pares linealmente independientes con inflexión genuina en $x_0=0$. El enunciado preciso excluye ese caso. En la forma general $y''+p(x)y'+q(x)y=0$ la excepción es que $p$ y $q$ se anulen simultáneamente en $x_0$.

### Método alternativo: evaluación de la ecuación en $x_0$

Al evaluar la ecuación en el punto de inflexión y usar $y_i''(x_0)=0$ se obtiene $p(x_0)\left(y_i'(x_0)+y_i(x_0)\right)=0$. Si $p(x_0)\ne0$, los vectores $\left(y_i(x_0),y_i'(x_0)\right)$ son ambos ortogonales a $(1,1)$, luego pertenecen a una misma recta y son linealmente dependientes. El determinante de esos dos vectores es $W(x_0)$, de modo que $W(x_0)=0$.
