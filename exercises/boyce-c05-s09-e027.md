---
title: "Boyce 5.9 Ejercicio 27"
exercise-id: boyce-c05-s09-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 27"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - transformadas.transformada-laplace
  - integracion.sustitucion
  - calculo-avanzado.integrales-impropias
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s09i02-p315.png
  - c05s09i03-p316.png
---

## Enunciado

Considere la transformada de Laplace de $t^p$, en donde $p > -1$.

a) Con referencia al problema 26, demuestre que

$$\mathscr{L}\{t^p\} = \int_0^\infty e^{-st} t^p \,dt = \frac{1}{s^{p + 1}} \int_0^\infty e^{-x} x^p \,dx = \frac{\Gamma(p + 1)}{s^{p + 1}}, \quad s > 0.$$

b) Si $p$ es un entero positivo $n$, demuestre que

$$\mathscr{L}\{t^n\} = \frac{n!}{s^{n + 1}}, \quad s > 0.$$

c) Demuestre que

$$\mathscr{L}\{t^{-1/2}\} = \frac{2}{\sqrt{s}} \int_0^\infty e^{-x^2} \,dx, \quad s > 0.$$

Es posible demostrar que

$$\int_0^\infty e^{-x^2} \,dx = \frac{\sqrt{\pi}}{2};$$

de donde,

$$\mathscr{L}\{t^{-1/2}\} = \sqrt{\pi / s}, \quad s > 0.$$

d) Demuestre que

$$\mathscr{L}\{t^{1/2}\} = \frac{\sqrt{\pi}}{2s^{3/2}}, \quad s > 0.$$

## Solución

Para $p>-1$ y $s>0$,

$$
\mathcal{L}\{t^{p}\}=\frac{\Gamma(p+1)}{s^{p+1}}.
$$

En particular, para $n$ entero positivo, para $p=-\tfrac{1}{2}$ y para $p=\tfrac{1}{2}$,

$$
\mathcal{L}\{t^{n}\}=\frac{n!}{s^{n+1}},\qquad
\mathcal{L}\{t^{-1/2}\}=\sqrt{\frac{\pi}{s}},\qquad
\mathcal{L}\{t^{1/2}\}=\frac{\sqrt{\pi}}{2s^{3/2}}.
$$

## Resolución

### Apartado a)

Por la definición de la transformada de Laplace,

$$
\mathcal{L}\{t^{p}\}=\int_{0}^{\infty} e^{-st}t^{p}\,dt.
$$

Se aplica el **cambio de variable** $x=st$, de modo que $t=x/s$ y $dt=dx/s$. Como $s>0$, el cambio transforma $[0,\infty)$ en $[0,\infty)$ y conserva el sentido de la integración. Entonces $t^{p}=x^{p}/s^{p}$ y

$$
\int_{0}^{\infty} e^{-st}t^{p}\,dt
=\int_{0}^{\infty} e^{-x}\frac{x^{p}}{s^{p}}\,\frac{dx}{s}
=\frac{1}{s^{p+1}}\int_{0}^{\infty} e^{-x}x^{p}\,dx.
$$

La última integral es $\Gamma(p+1)$ por la definición (i) del problema 26. Por tanto,

$$
\mathcal{L}\{t^{p}\}=\frac{\Gamma(p+1)}{s^{p+1}},\qquad s>0.
$$

La integral converge en el infinito porque $s>0$, y en $x=0$ porque $p>-1$, que es la hipótesis del enunciado.

### Apartado b)

Si $p=n$ es un entero positivo, el apartado c) del problema 26 da $\Gamma(n+1)=n!$. Al sustituir en el apartado a),

$$
\mathcal{L}\{t^{n}\}=\frac{\Gamma(n+1)}{s^{n+1}}=\frac{n!}{s^{n+1}},\qquad s>0.
$$

### Apartado c)

Se toma $p=-\tfrac{1}{2}$ en el apartado a):

$$
\mathcal{L}\{t^{-1/2}\}
=\frac{\Gamma(1/2)}{s^{1/2}}
=\frac{1}{\sqrt{s}}\int_{0}^{\infty} e^{-x}x^{-1/2}\,dx.
$$

Se aplica el **cambio de variable** $x=u^{2}$ con $u>0$, de modo que $dx=2u\,du$ y $x^{-1/2}=1/u$:

$$
\int_{0}^{\infty} e^{-x}x^{-1/2}\,dx
=\int_{0}^{\infty} e^{-u^{2}}\frac{1}{u}\,2u\,du
=2\int_{0}^{\infty} e^{-u^{2}}\,du.
$$

Al sustituir este resultado,

$$
\mathcal{L}\{t^{-1/2}\}=\frac{2}{\sqrt{s}}\int_{0}^{\infty} e^{-u^{2}}\,du.
$$

Con el valor $\int_{0}^{\infty} e^{-u^{2}}\,du=\dfrac{\sqrt{\pi}}{2}$ que da el enunciado,

$$
\mathcal{L}\{t^{-1/2}\}=\frac{2}{\sqrt{s}}\cdot\frac{\sqrt{\pi}}{2}=\sqrt{\frac{\pi}{s}},\qquad s>0.
$$

### Apartado d)

Para $p=\tfrac{1}{2}$, la propiedad de recurrencia del apartado a) del problema 26, $\Gamma(p+1)=p\,\Gamma(p)$, con $p=\tfrac{1}{2}$ da

$$
\Gamma\!\left(\frac{3}{2}\right)=\frac{1}{2}\,\Gamma\!\left(\frac{1}{2}\right)=\frac{\sqrt{\pi}}{2},
$$

pues $\Gamma\!\left(\frac{1}{2}\right)=\sqrt{\pi}$. Al sustituir en el apartado a),

$$
\mathcal{L}\{t^{1/2}\}=\frac{\Gamma(3/2)}{s^{3/2}}=\frac{\sqrt{\pi}}{2s^{3/2}},\qquad s>0.
$$

## Observaciones

La fórmula del apartado a) extiende la transformada de Laplace a potencias no enteras de $t$. Los apartados b) y d) son casos particulares, y el apartado b) reproduce el resultado elemental $\mathcal{L}\{t^{n}\}=n!/s^{n+1}$.

El cambio de variable $x=u^{2}$ del apartado c) relaciona $\Gamma(1/2)$ con la integral gaussiana $\int_{0}^{\infty} e^{-u^{2}}\,du$. La restricción $p>-1$ es la que garantiza la convergencia de la integral en $t=0$; para $p=-1/2$ se cumple, ya que $-1/2>-1$.
