---
title: "Zill Repaso C11 Ejercicio 14"
exercise-id: zill-c11-sr-e014
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 14"
statement-status: accepted
solution-status: draft
source-images:
  - c11sri02-p472.png
topics:
  - sturm-liouville
competencies:
  - resolver-series.serie-fourier
  - resolver-series.serie-cosenos
hidden-competencies:
  - clasificar.paridad
prerequisitos:
  - integracion.por-partes
  - algebra-lineal-avanzada.ortogonalidad
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

Desarrolle $f(x) = 2x^2 - 1$, $-1 < x < 1$ en una serie de Fourier.

## Solución

La serie de Fourier de $f$ en $(-1,1)$ es

$$
f(x) = -\frac{1}{3} + \frac{8}{\pi^2}\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\,\cos(n\pi x).
$$

## Resolución

Como el intervalo es $[-p,p]$ con $p=1$, la serie de Fourier se escribe

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos(n\pi x) + b_n\sin(n\pi x)\right),
$$

con los coeficientes

$$
a_0 = \int_{-1}^{1} f(x)\,dx, \qquad
a_n = \int_{-1}^{1} f(x)\cos(n\pi x)\,dx, \qquad
b_n = \int_{-1}^{1} f(x)\sin(n\pi x)\,dx.
$$

La función $f(x)=2x^2-1$ es par, y $\cos(n\pi x)$ también lo es, mientras que $\sin(n\pi x)$ es impar. El producto $f(x)\sin(n\pi x)$ es impar y su integral sobre el intervalo simétrico $[-1,1]$ se anula, de modo que $b_n=0$ para todo $n\ge 1$. La serie contiene únicamente cosenos.

El término constante resulta de

$$
a_0 = \int_{-1}^{1}(2x^2-1)\,dx
= \left[\frac{2x^3}{3} - x\right]_{-1}^{1}
= \left(\frac{2}{3}-1\right) - \left(-\frac{2}{3}+1\right)
= -\frac{2}{3}.
$$

Para los coeficientes de coseno se usa la paridad del integrando:

$$
a_n = \int_{-1}^{1}(2x^2-1)\cos(n\pi x)\,dx
= 2\int_{0}^{1}(2x^2-1)\cos(n\pi x)\,dx.
$$

Se separa la integral:

$$
a_n = 4\int_{0}^{1} x^2\cos(n\pi x)\,dx - 2\int_{0}^{1}\cos(n\pi x)\,dx.
$$

La segunda integral es

$$
\int_{0}^{1}\cos(n\pi x)\,dx
= \left[\frac{\sin(n\pi x)}{n\pi}\right]_{0}^{1}
= \frac{\sin(n\pi)}{n\pi} = 0, \qquad n\ge 1.
$$

La primera se integra dos veces por partes. En la primera,

$$
\int_{0}^{1} x^2\cos(n\pi x)\,dx
= \left[\frac{x^2\sin(n\pi x)}{n\pi}\right]_{0}^{1}
- \frac{2}{n\pi}\int_{0}^{1} x\sin(n\pi x)\,dx
= -\frac{2}{n\pi}\int_{0}^{1} x\sin(n\pi x)\,dx,
$$

porque $\sin(n\pi)=0$. En la segunda,

$$
\int_{0}^{1} x\sin(n\pi x)\,dx
= \left[-\frac{x\cos(n\pi x)}{n\pi}\right]_{0}^{1}
+ \frac{1}{n\pi}\int_{0}^{1}\cos(n\pi x)\,dx
= -\frac{\cos(n\pi)}{n\pi}.
$$

Al sustituir $\cos(n\pi)=(-1)^n$ se obtiene

$$
\int_{0}^{1} x^2\cos(n\pi x)\,dx
= -\frac{2}{n\pi}\left(-\frac{(-1)^n}{n\pi}\right)
= \frac{2(-1)^n}{n^2\pi^2}.
$$

Por tanto,

$$
a_n = 4\cdot\frac{2(-1)^n}{n^2\pi^2} - 0
= \frac{8(-1)^n}{n^2\pi^2}, \qquad n\ge 1.
$$

Finalmente, con $a_0/2 = -1/3$ y $b_n=0$,

$$
f(x) = -\frac{1}{3} + \frac{8}{\pi^2}\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\,\cos(n\pi x).
$$

## Observaciones

La función es par, por lo que su serie de Fourier es una serie en cosenos y no requiere el cálculo de los coeficientes $b_n$. El término constante $a_0/2=-1/3$ es el valor medio de $f$ sobre $(-1,1)$.

En $x=0$ la serie reproduce $f(0)=-1$; en $x=\pm1$ converge a $f(\pm1)=1$. La función y su extensión periódica par son continuas, así que la serie converge al valor de $f$ en todo punto del intervalo cerrado. La serie también permite evaluar $\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}=-\frac{\pi^2}{12}$ sustituyendo $x=0$.
