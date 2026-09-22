---
title: "Boyce 6.1 Ejercicio 27"
exercise-id: boyce-c06-s01-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 27"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - calculo-avanzado.series-taylor
  - calculo-avanzado.convergencia
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i02-p325.png
---

## Enunciado

Se pueden hallar de manera conveniente las transformadas de Laplace de ciertas funciones a partir de sus desarrollos en serie de Taylor.

a) Use la serie de Taylor para $\sin t$,

$$\sin t = \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n+1}}{(2n+1)!},$$

y suponga que puede calcularse término a término la transformada de Laplace de esta serie; compruebe que

$$\mathcal{L}\{\sin t\} = \frac{1}{s^2 + 1}, \quad s > 1.$$

b) Sea

$$f(t) = \begin{cases} (\sin t)/t, & t \neq 0, \\ 1, & t = 0. \end{cases}$$

Encuentre la serie de Taylor de $f$ alrededor de $t = 0$. Suponga que la transformada de Laplace de esta función puede calcularse término a término y compruebe que

$$\mathcal{L}\{f(t)\} = \arctan 1/s, \quad s > 1.$$

c) La función de Bessel de primera clase de orden cero, $J_0$, tiene la serie de Taylor (ver la sección 5.9)

$$J_0(t) = \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n}}{2^{2n}(n!)^2}.$$

Si se supone que las siguientes transformadas de Laplace pueden calcularse término a término, verificar que

$$\mathcal{L}\{J_0(t)\} = (s^2 + 1)^{-1/2}, \quad s > 1,$$

y que

$$\mathcal{L}\{J_0(\sqrt{t})\} = s^{-1} e^{-1/4s}, \quad s > 0.$$

## Solución

Bajo la hipótesis de convergencia del enunciado, los resultados son

$$
\begin{aligned}
\mathcal{L}\{\sin t\} &= \frac{1}{s^2+1}, & s>1;\\
\mathcal{L}\{f(t)\} &= \arctan\frac{1}{s}, & s>1;\\
\mathcal{L}\{J_0(t)\} &= \frac{1}{\sqrt{s^2+1}}, & s>1;\\
\mathcal{L}\{J_0(\sqrt{t})\} &= \frac{1}{s}\,e^{-1/(4s)}, & s>0.
\end{aligned}
$$

## Resolución

### Apartado a)

La serie de Taylor de $\sin t$ es

$$
\sin t = \sum_{n=0}^{\infty}\frac{(-1)^n t^{2n+1}}{(2n+1)!}.
$$

Bajo la hipótesis de que la transformada puede calcularse término a término, se aplica el par básico $\mathcal{L}\{t^k\}=k!/s^{k+1}$:

$$
\mathcal{L}\{\sin t\}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}\,\mathcal{L}\{t^{2n+1}\}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}\frac{(2n+1)!}{s^{2n+2}}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{s^{2n+2}}.
$$

Se extrae el factor $1/s^2$ y queda una serie geométrica de razón $-1/s^2$:

$$
\mathcal{L}\{\sin t\}
= \frac{1}{s^2}\sum_{n=0}^{\infty}\left(-\frac{1}{s^2}\right)^{n}
= \frac{1}{s^2}\cdot\frac{1}{1+\dfrac{1}{s^2}}
= \frac{1}{s^2+1}.
$$

La serie geométrica converge si $1/s^2<1$, esto es, si $s>1$.

### Apartado b)

La serie de Taylor de $f$ se obtiene dividiendo la de $\sin t$ entre $t$. El término constante es $1$, que coincide con el valor $f(0)$:

$$
f(t) = \frac{\sin t}{t} = \sum_{n=0}^{\infty}\frac{(-1)^n t^{2n}}{(2n+1)!}.
$$

Transformando término a término, con $\mathcal{L}\{t^{2n}\}=(2n)!/s^{2n+1}$,

$$
\mathcal{L}\{f(t)\}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}\frac{(2n)!}{s^{2n+1}}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}\frac{1}{s^{2n+1}}
= \frac{1}{s}\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}\left(\frac{1}{s^2}\right)^{n}.
$$

La serie $\sum_{n\ge0}\frac{(-1)^n x^{2n+1}}{2n+1}$ es el desarrollo de $\arctan x$ para $|x|\le1$. Con $x=1/s$ y $s>1$,

$$
\mathcal{L}\{f(t)\} = \arctan\frac{1}{s}.
$$

### Apartado c)

Con el mismo par básico y la serie de $J_0$,

$$
\mathcal{L}\{J_0(t)\}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{2^{2n}(n!)^2}\frac{(2n)!}{s^{2n+1}}
= \frac{1}{s}\sum_{n=0}^{\infty}\binom{2n}{n}\left(-\frac{1}{4s^2}\right)^{n}.
$$

Se emplea el desarrollo binomial

$$
\sum_{n=0}^{\infty}\binom{2n}{n}z^{n} = (1-4z)^{-1/2}, \qquad |z|<\frac{1}{4}.
$$

Con $z=-1/(4s^2)$, que satisface $|z|<1/4$ cuando $s>1$,

$$
\mathcal{L}\{J_0(t)\}
= \frac{1}{s}\left(1+\frac{1}{s^2}\right)^{-1/2}
= \frac{1}{s}\cdot\frac{s}{\sqrt{s^2+1}}
= \frac{1}{\sqrt{s^2+1}}.
$$

Al sustituir $t$ por $\sqrt{t}$ en la serie de $J_0$ resulta

$$
J_0(\sqrt{t}) = \sum_{n=0}^{\infty}\frac{(-1)^n t^{n}}{2^{2n}(n!)^2}.
$$

Transformando término a término, con $\mathcal{L}\{t^{n}\}=n!/s^{n+1}$,

$$
\mathcal{L}\{J_0(\sqrt{t})\}
= \sum_{n=0}^{\infty}\frac{(-1)^n}{2^{2n}(n!)^2}\frac{n!}{s^{n+1}}
= \frac{1}{s}\sum_{n=0}^{\infty}\frac{1}{n!}\left(-\frac{1}{4s}\right)^{n}
= \frac{1}{s}\,e^{-1/(4s)},
$$

válido para $s>0$. La última igualdad usa la serie exponencial $\sum_{n\ge0}z^{n}/n!=e^{z}$.

## Observaciones

La integración término a término es la hipótesis del enunciado. Se apoya en que las series de Taylor de $\sin t$, $f$, $J_0$ y $J_0(\sqrt{t})$ convergen uniformemente en cada intervalo compacto de $t\ge0$.

El desarrollo binomial usado en el apartado c) es la expansión de $(1-4z)^{-1/2}$; sus coeficientes $\binom{2n}{n}$ son los coeficientes binomiales centrales.

Las restricciones $s>1$ y $s>0$ provienen de la convergencia de las series geométrica, de arco tangente y binomial, respectivamente.
