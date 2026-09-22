---
title: "Boyce 5.3 Ejercicio 24"
exercise-id: boyce-c05-s03-e024
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.3, ejercicio 24"
statement-status: accepted
solution-status: draft
topics:
  - frobenius
  - orden-superior
competencies:
  - resolver-series.serie-legendre
prerequisitos:
  - calculo-avanzado.series-potencias
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s03i03-p265.png
---

## Enunciado

Es posible demostrar que la fórmula general para $P_n(x)$ es

$$P_n(x) = \frac{1}{2^n} \sum_{k=0}^{[n/2]} \frac{(-1)^k (2n - 2k)!}{k!(n - k)!(n - 2k)!} x^{n - 2k},$$

en donde $[n/2]$ denota el mayor entero menor que, o igual a, $n/2$. Observe la forma de $P_n(x)$ para $n$ par y $n$ impar demuestre que $P_n(-1) = (-1)^n$.

## Solución

Para todo entero $n\ge 0$,

$$
P_n(-1)=(-1)^n.
$$

## Resolución

En cada término de la fórmula la potencia de $x$ es $n-2k$. El exponente $n-2k$ tiene la paridad de $n$. Por tanto, si $n$ es par el polinomio $P_n$ solo contiene potencias pares y es par, mientras que si $n$ es impar solo contiene potencias impares y es impar. En ambos casos,

$$
P_n(-1)=(-1)^n P_n(1).
$$

El cálculo se reduce a determinar $P_n(1)$. Al sustituir $x=1$ en la fórmula y multiplicar y dividir por $n!$,

$$
P_n(1)=\frac{1}{2^n n!}\sum_{k=0}^{[n/2]}(-1)^k\binom{n}{k}\frac{(2n-2k)!}{(n-2k)!}.
$$

El factor $\dfrac{(2n-2k)!}{(n-2k)!}$ es la derivada $n$-ésima de $x^{2n-2k}$ evaluada en $x=1$:

$$
\left.\frac{d^n}{dx^n}x^{2n-2k}\right|_{x=1}=(2n-2k)(2n-2k-1)\cdots(n-2k+1)=\frac{(2n-2k)!}{(n-2k)!}.
$$

Por el teorema del binomio,

$$
\sum_{k=0}^{n}(-1)^k\binom{n}{k}x^{2n-2k}=x^{2n}\left(1-x^{-2}\right)^n=(x^2-1)^n.
$$

Los términos añadidos con $k>[n/2]$ son monomios de grado $2n-2k<n$, cuya derivada $n$-ésima se anula; por eso no alteran la suma de derivadas. En consecuencia,

$$
P_n(1)=\frac{1}{2^n n!}\left.\frac{d^n}{dx^n}(x^2-1)^n\right|_{x=1}.
$$

Para evaluar esta derivada se escribe $x=1+u$. Entonces $x^2-1=u(u+2)$ y

$$
(x^2-1)^n=u^n(u+2)^n=\sum_{j=0}^{n}\binom{n}{j}2^{n-j}u^{n+j}.
$$

La derivada $n$-ésima respecto de $u$ en $u=0$ selecciona el término $j=0$, de valor $n!\,2^n$. Por tanto,

$$
P_n(1)=\frac{1}{2^n n!}\,n!\,2^n=1.
$$

Finalmente,

$$
P_n(-1)=(-1)^n P_n(1)=(-1)^n.
$$

## Observaciones

La fórmula del enunciado es el desarrollo de la fórmula de Rodrigues
$P_n(x)=\dfrac{1}{2^n n!}\dfrac{d^n}{dx^n}(x^2-1)^n$. Los valores $P_n(1)=1$ y $P_n(-1)=(-1)^n$ son propiedades estándar de los polinomios de Legendre.

### Método alternativo: función generadora

Los polinomios de Legendre tienen función generadora

$$
\sum_{n=0}^{\infty}P_n(x)t^n=(1-2xt+t^2)^{-1/2}.
$$

Al evaluar en $x=-1$,

$$
\sum_{n=0}^{\infty}P_n(-1)t^n=(1+t)^{-1}=\sum_{n=0}^{\infty}(-1)^n t^n,
$$

y la unicidad del desarrollo en serie de potencias da $P_n(-1)=(-1)^n$.
