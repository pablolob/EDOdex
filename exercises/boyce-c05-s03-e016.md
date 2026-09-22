---
title: "Boyce 5.3 Ejercicio 16"
exercise-id: boyce-c05-s03-e016
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 16"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
competencies:
  - resolver-series.serie-potencias
  - resolver-series.recurrencia
prerequisitos:
  - calculo-avanzado.series-potencias
  - calculo-avanzado.series-taylor
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s03i02-p264.png
---

## Enunciado

Resuelva la ecuación diferencial dada mediante una serie de potencias de $x$ (tres términos) y compruebe que $a_0$ es arbitraria en cada caso:

16. $y' = e^{x^2}y$

## Solución

$$
y(x)=a_0\left(1+x+\frac{x^2}{2}+\cdots\right),\qquad a_0\in\mathbb{R}.
$$

El coeficiente $a_0=y(0)$ permanece libre: la recurrencia no impone ninguna condición sobre él.

## Resolución

Se busca una solución en **serie de potencias** centrada en $x_0=0$,

$$
y=\sum_{n=0}^{\infty} a_n x^n.
$$

La función $e^{x^2}$ es entera y su desarrollo de Taylor alrededor de $x=0$ es

$$
e^{x^2}=\sum_{k=0}^{\infty}\frac{x^{2k}}{k!}=1+x^2+\frac{x^4}{2}+\cdots .
$$

La derivación término a término es válida dentro del intervalo de convergencia. La derivada y el producto $e^{x^2}y$ se reescriben con potencias $x^n$:

$$
y'=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n,\qquad
e^{x^2}y=\sum_{n=0}^{\infty}\left(\sum_{k=0}^{\lfloor n/2\rfloor}\frac{a_{n-2k}}{k!}\right)x^n.
$$

Al sustituir en $y'=e^{x^2}y$ e igualar los coeficientes de $x^n$ resulta

$$
(n+1)a_{n+1}=\sum_{k=0}^{\lfloor n/2\rfloor}\frac{a_{n-2k}}{k!},
$$

es decir, la relación de recurrencia

$$
a_{n+1}=\frac{1}{n+1}\sum_{k=0}^{\lfloor n/2\rfloor}\frac{a_{n-2k}}{k!},\qquad n=0,1,2,\dots
$$

Los primeros coeficientes son

$$
a_1=a_0,\qquad
a_2=\frac{a_1}{2}=\frac{a_0}{2},\qquad
a_3=\frac{a_2+a_0}{3}=\frac{a_0}{2},\qquad
a_4=\frac{a_3+a_1}{4}=\frac{3a_0}{8},\qquad
a_5=\frac{a_4+a_2+\frac{a_0}{2}}{5}=\frac{11a_0}{40}.
$$

Cada coeficiente se obtiene de los anteriores y ninguno de los pasos impone condición sobre $a_0$. Por tanto $a_0=y(0)$ es la constante arbitraria de la solución general. Con los tres primeros términos,

$$
y=a_0\left(1+x+\frac{x^2}{2}\right)+\cdots .
$$

Como $e^{x^2}$ es entera, el radio de convergencia es infinito y la solución es válida para todo $x\in\mathbb{R}$.

## Observaciones

### Método alternativo: separación de variables

La ecuación es de **variables separables**. Al separar e integrar,

$$
\ln|y|=\int e^{x^2}\,dx+C,
$$

de donde

$$
y=C\exp\!\left(\int_0^x e^{t^2}\,dt\right).
$$

La integral no es elemental. Su desarrollo en serie reproduce los coeficientes obtenidos con la serie de potencias y confirma que $a_0$ corresponde a la constante $C$.
