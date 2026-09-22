---
title: "Boyce 5.3 Ejercicio 15"
exercise-id: boyce-c05-s03-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 15"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s03i02-p264.png
---

## Enunciado

Resuelva la ecuación diferencial dada mediante una serie de potencias de $x$ y compruebe que $a_0$ es arbitraria en cada caso:

15. $y' - xy = 0$

## Solución

$$
y(x)=a_0\sum_{k=0}^{\infty}\frac{x^{2k}}{2^k k!}=a_0 e^{x^{2}/2},\qquad a_0\in\mathbb{R}.
$$

## Resolución

Se busca una solución en **serie de potencias** centrada en $x_0=0$,

$$
y=\sum_{n=0}^{\infty} a_n x^n.
$$

La derivación término a término es válida dentro del intervalo de convergencia. La derivada y el producto $xy$ se reescriben con potencias $x^n$:

$$
y'=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n,\qquad
xy=\sum_{n=1}^{\infty}a_{n-1}x^n.
$$

Al sustituir en $y'-xy=0$,

$$
a_1+\sum_{n=1}^{\infty}\big[(n+1)a_{n+1}-a_{n-1}\big]x^n=0.
$$

La representación de una función mediante una serie de potencias es única, de modo que cada coeficiente se anula. El término constante da $a_1=0$ y, para $n\ge 1$,

$$
(n+1)a_{n+1}=a_{n-1}.
$$

La relación de recurrencia es, por tanto,

$$
a_{n+1}=\frac{a_{n-1}}{n+1},\qquad n\ge 1.
$$

La recurrencia no impone condición sobre $a_0$, y el término constante fija $a_1=0$. Los primeros coeficientes son

$$
a_1=0,\quad a_2=\frac{a_0}{2},\quad a_3=\frac{a_1}{3}=0,\quad
a_4=\frac{a_2}{4}=\frac{a_0}{8},\quad a_5=\frac{a_3}{5}=0,\quad
a_6=\frac{a_4}{6}=\frac{a_0}{48}.
$$

Los coeficientes de índice impar se anulan; los de índice par quedan en función de $a_0$. Por inducción, para $k\ge 0$,

$$
a_{2k}=\frac{a_0}{2^k k!},\qquad a_{2k+1}=0.
$$

En efecto, la recurrencia aplicada a $n=2k+1$ da $a_{2k+2}=\dfrac{a_{2k}}{2k+2}$, de modo que el denominador incorpora el factor $2(k+1)$ al avanzar de $2k$ a $2k+2$ y reproduce $2^k k!$.

Sustituyendo en la serie,

$$
y=a_0\sum_{k=0}^{\infty}\frac{x^{2k}}{2^k k!}
=a_0\sum_{k=0}^{\infty}\frac{\left(x^2/2\right)^k}{k!}
=a_0 e^{x^2/2}.
$$

El coeficiente $a_0=y(0)$ permanece libre, como corresponde a la constante arbitraria de la solución general de una ecuación de primer orden. La serie del exponencial tiene radio de convergencia infinito; como $x_0=0$ es un punto ordinario de la ecuación, la solución es válida para todo $x\in\mathbb{R}$.

## Observaciones

La comprobación directa confirma el resultado: si $y=a_0e^{x^2/2}$, entonces $y'=a_0xe^{x^2/2}=xy$.

### Método alternativo: separación de variables

La ecuación $y'-xy=0$ también es de **variables separables**. Al escribir $y'/y=x$ e integrar, $\ln|y|=x^2/2+C$, de donde $y=Ce^{x^2/2}$. La constante $C$ corresponde a $a_0$, en concordancia con la solución en serie.
