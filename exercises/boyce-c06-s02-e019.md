---
title: "Boyce 6.2 Ejercicio 19"
exercise-id: boyce-c06-s02-e019
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 19"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - calculo-avanzado.integrales-impropias
  - integracion.sustitucion
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c06s02i02-p333.png
---

## Enunciado

Suponga que $F(s) = \mathcal{L}\{f(t)\}$ existe para $s > a \ge 0$.

a) Demuestre que si $c$ es una constante positiva, entonces

$$\mathcal{L}\{f(ct)\} = \frac{1}{c} F\left(\frac{s}{c}\right), \quad s > ca.$$

b) Demuestre que si $k$ es una constante positiva, entonces

$$\mathcal{L}^{-1}\{F(ks)\} = \frac{1}{k} f\left(\frac{t}{k}\right).$$

c) Demuestre que si $a$ y $b$ son constantes con $a > 0$, entonces

$$\mathcal{L}^{-1}\{F(as + b)\} = \frac{1}{a} e^{-bt/a} f\left(\frac{t}{a}\right).$$

## Solución

$$
\begin{aligned}
\mathcal{L}\{f(ct)\} &= \frac{1}{c}F\!\left(\frac{s}{c}\right), & s &> ca, \\[2pt]
\mathcal{L}^{-1}\{F(ks)\} &= \frac{1}{k}f\!\left(\frac{t}{k}\right), & s &> \frac{a}{k}, \\[2pt]
\mathcal{L}^{-1}\{F(as+b)\} &= \frac{1}{a}e^{-bt/a}f\!\left(\frac{t}{a}\right), & s &> \frac{a-b}{a}.
\end{aligned}
$$

## Resolución

Las tres identidades se demuestran a partir de la definición de la transformada,

$$
F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty e^{-st}f(t)\,dt, \qquad s > a.
$$

### Apartado a)

Con $c > 0$, la definición aplicada a $f(ct)$ da

$$
\mathcal{L}\{f(ct)\} = \int_0^\infty e^{-st}f(ct)\,dt.
$$

El cambio de variable $u = ct$, con $dt = du/c$, transforma la integral en

$$
\mathcal{L}\{f(ct)\}
= \frac{1}{c}\int_0^\infty e^{-(s/c)u}f(u)\,du
= \frac{1}{c}F\!\left(\frac{s}{c}\right).
$$

La integral impropia converge cuando $s/c > a$, esto es, para $s > ca$.

### Apartado b)

La definición aplicada a $\dfrac{1}{k}f\!\left(\dfrac{t}{k}\right)$ da

$$
\mathcal{L}\left\{\frac{1}{k}f\!\left(\frac{t}{k}\right)\right\}
= \int_0^\infty e^{-st}\frac{1}{k}f\!\left(\frac{t}{k}\right)dt.
$$

El cambio de variable $u = t/k$, con $t = ku$ y $dt = k\,du$, conduce a

$$
\mathcal{L}\left\{\frac{1}{k}f\!\left(\frac{t}{k}\right)\right\}
= \frac{1}{k}\int_0^\infty e^{-ksu}f(u)\,k\,du
= \int_0^\infty e^{-(ks)u}f(u)\,du
= F(ks).
$$

Por tanto, $\mathcal{L}^{-1}\{F(ks)\} = \dfrac{1}{k}f\!\left(\dfrac{t}{k}\right)$.

### Apartado c)

Con $a > 0$, la definición aplicada a $\dfrac{1}{a}e^{-bt/a}f\!\left(\dfrac{t}{a}\right)$ da

$$
\mathcal{L}\left\{\frac{1}{a}e^{-bt/a}f\!\left(\frac{t}{a}\right)\right\}
= \int_0^\infty e^{-st}\frac{1}{a}e^{-bt/a}f\!\left(\frac{t}{a}\right)dt.
$$

El cambio de variable $u = t/a$, con $t = au$ y $dt = a\,du$, conduce a

$$
\mathcal{L}\left\{\frac{1}{a}e^{-bt/a}f\!\left(\frac{t}{a}\right)\right\}
= \int_0^\infty e^{-asu}\frac{1}{a}e^{-bu}f(u)\,a\,du
= \int_0^\infty e^{-(as+b)u}f(u)\,du
= F(as+b).
$$

Por tanto, $\mathcal{L}^{-1}\{F(as+b)\} = \dfrac{1}{a}e^{-bt/a}f\!\left(\dfrac{t}{a}\right)$.

## Observaciones

El apartado b) también se obtiene del apartado a) tomando $c = 1/k$, pues entonces $\frac{1}{c}F(s/c) = kF(ks)$ y, en consecuencia, $F(ks) = \mathcal{L}\{\frac{1}{k}f(t/k)\}$.

El factor $e^{-bt/a}$ del apartado c) desplaza el argumento de la transformada de $as$ a $as+b$. Con $b = 0$, la identidad se reduce al apartado b) con $k = a$.

Como $F(s)$ existe para $s > a$, las tres transformadas convergen en $s > ca$, $s > a/k$ y $s > (a-b)/a$, respectivamente.
