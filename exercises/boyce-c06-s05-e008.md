---
title: "Boyce 6.5 Ejercicio 8"
exercise-id: boyce-c06-s05-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.convolucion
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.convolucion
  - integracion.por-partes
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c06s05i02-p350.png
---

## Enunciado

En cada uno de los problemas 8 a 11 encuentre la transformada inversa de Laplace de la función dada al aplicar el teorema de convolución.

8. $F(s) = \frac{1}{s^4(s^2 + 1)}$

## Solución

La transformada inversa es

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s^4(s^2+1)}\right\}=\frac{t^3}{6}-t+\sin t .
$$

## Resolución

La función se factoriza como el producto de dos transformadas conocidas:

$$
F(s)=\frac{1}{s^4}\cdot\frac{1}{s^2+1}.
$$

Se identifican las transformadas inversas de cada factor:

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s^4}\right\}=\frac{t^3}{3!}=\frac{t^3}{6},
\qquad
\mathcal{L}^{-1}\!\left\{\frac{1}{s^2+1}\right\}=\sin t .
$$

Se definen $f(t)=\dfrac{t^3}{6}$ y $g(t)=\sin t$. Por el **teorema de convolución**, la transformada inversa del producto es la convolución

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s^4(s^2+1)}\right\}
=(f*g)(t)
=\int_0^t f(t-\tau)\,g(\tau)\,d\tau
=\frac{1}{6}\int_0^t (t-\tau)^3\sin\tau\,d\tau .
$$

Para evaluar la integral se aplica **integración por partes** de forma repetida. Se denota

$$
J=\int_0^t (t-\tau)^3\sin\tau\,d\tau .
$$

Con $u=(t-\tau)^3$ y $dv=\sin\tau\,d\tau$, de modo que $v=-\cos\tau$ y $du=-3(t-\tau)^2\,d\tau$,

$$
J=\Bigl[-(t-\tau)^3\cos\tau\Bigr]_0^t-3\int_0^t (t-\tau)^2\cos\tau\,d\tau=t^3-3K,
$$

donde $K=\displaystyle\int_0^t (t-\tau)^2\cos\tau\,d\tau$. La evaluación del corchete da $t^3$, pues el término se anula en $\tau=t$ y vale $-t^3$ en $\tau=0$.

Con $u=(t-\tau)^2$ y $dv=\cos\tau\,d\tau$,

$$
K=\Bigl[(t-\tau)^2\sin\tau\Bigr]_0^t+2\int_0^t (t-\tau)\sin\tau\,d\tau=2L,
$$

con $L=\displaystyle\int_0^t (t-\tau)\sin\tau\,d\tau$ y corchete nulo en ambos extremos.

Con $u=(t-\tau)$ y $dv=\sin\tau\,d\tau$,

$$
L=\Bigl[-(t-\tau)\cos\tau\Bigr]_0^t-\int_0^t\cos\tau\,d\tau=t-\sin t .
$$

Al sustituir hacia atrás,

$$
K=2(t-\sin t),\qquad
J=t^3-3K=t^3-6t+6\sin t .
$$

Por lo tanto,

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{s^4(s^2+1)}\right\}=\frac{J}{6}=\frac{t^3}{6}-t+\sin t .
$$

## Observaciones

El resultado es la convolución de $t^3/6$ con $\sin t$. La integral de convolución también puede dejarse sin evaluar; la evaluación anterior la reduce a funciones elementales.

### Método alternativo: fracciones parciales

La descomposición

$$
\frac{1}{s^4(s^2+1)}=\frac{1}{s^4}-\frac{1}{s^2}+\frac{1}{s^2+1}
$$

permite invertir término a término y conduce al mismo resultado $\dfrac{t^3}{6}-t+\sin t$. Este camino no emplea el teorema de convolución que pide el enunciado, pero sirve para comprobar la respuesta.
