---
title: "Boyce 2.5 Ejercicio 22"
exercise-id: boyce-c02-s05-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 22"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s05i04-p070.png
---

## Enunciado

Suponga que un recinto que contiene 1 200 pies$^3$ de aire originalmente está libre de monóxido de carbono. A partir del instante $t = 0$, se introduce al recinto humo de cigarro, que contiene 4% de monóxido de carbono, a razón de 0.1 pies$^3$/min y se permite que la mezcla bien circulada salga a la misma razón.

a) Halle una expresión para la concentración $x(t)$ de monóxido de carbono en el recinto, en cualquier instante $t > 0$.

b) La exposición prolongada a una concentración de monóxido de carbono no tan baja como 0.00012 es dañina para el organismo humano. Halle el instante $\tau$ en el que se alcanza esta concentración.

## Solución

La concentración de monóxido de carbono en el recinto es

$$
x(t)=0.04\left(1-e^{-t/12000}\right),\qquad t\ge 0,
$$

y alcanza el valor $0.00012$ en el instante

$$
\tau=-12000\ln(0.997)=12000\ln\!\left(\frac{1000}{997}\right)\approx 36.05\ \text{min}.
$$

## Resolución

Sea $x(t)$ la concentración de monóxido de carbono en el recinto en el instante $t$, medido en minutos. La concentración se expresa como fracción del volumen de aire, de modo que $x$ es adimensional. Como el humo entra y la mezcla sale a la misma razón de $0.1$ pies$^3$/min, el volumen de aire permanece constante en $V=1200$ pies$^3$; la cantidad de monóxido de carbono es $Vx$.

La rapidez con que entra el monóxido de carbono es el producto del gasto por su concentración en el humo,

$$
0.1\cdot 0.04 = 0.004\ \text{pies}^3/\text{min}.
$$

La rapidez con que sale es el gasto por la concentración del recinto, $0.1\,x$, porque la mezcla está bien circulada. La razón de cambio de la cantidad $Vx$ es entonces

$$
1200\,\frac{dx}{dt}=0.004-0.1\,x.
$$

Al dividir entre $1200$ se obtiene la ecuación **lineal de primer orden** en forma estándar,

$$
\frac{dx}{dt}+\frac{1}{12000}\,x=\frac{1}{300000}.
$$

El **factor integrante** es $\mu(t)=e^{t/12000}$. Al multiplicar por $\mu$,

$$
\frac{d}{dt}\!\left(e^{t/12000}x\right)=\frac{1}{300000}\,e^{t/12000}.
$$

La integración de ambos miembros da

$$
e^{t/12000}x=0.04\,e^{t/12000}+C,
$$

ya que $\displaystyle\int \frac{1}{300000}\,e^{t/12000}\,dt=\frac{12000}{300000}\,e^{t/12000}=0.04\,e^{t/12000}$. Por tanto,

$$
x(t)=0.04+C e^{-t/12000}.
$$

La condición inicial es $x(0)=0$, porque el recinto está inicialmente libre de monóxido de carbono. Entonces $0.04+C=0$, es decir $C=-0.04$, y

$$
x(t)=0.04\left(1-e^{-t/12000}\right),\qquad t\ge 0.
$$

**b)** Se busca el instante $\tau$ en el que la concentración es $x=0.00012$. Al sustituir en la expresión anterior,

$$
\begin{aligned}
0.04\left(1-e^{-\tau/12000}\right) &= 0.00012, \\
1-e^{-\tau/12000} &= \frac{0.00012}{0.04}=0.003, \\
e^{-\tau/12000} &= 0.997.
\end{aligned}
$$

Al tomar logaritmos naturales,

$$
\tau=-12000\ln(0.997)=12000\ln\!\left(\frac{1000}{997}\right)\approx 36.05\ \text{min}.
$$

Por tanto, la concentración dañina se alcanza aproximadamente $36.1$ minutos después de $t=0$, esto es, unos $36$ minutos y $3$ segundos.

## Observaciones

La concentración de equilibrio es $0.04$, la del humo: cuando $t\to\infty$, $x(t)\to 0.04$. El recinto termina por igualar la concentración de la corriente de entrada.

La constante de tiempo del recinto es $12000$ min. El umbral $0.00012$ es muy pequeño frente a $0.04$, de modo que se alcanza al inicio, donde $x(t)\approx 0.04\,t/12000$; de ahí que $\tau\approx 12000\cdot 0.003=36$ min.

### Método alternativo: separación de variables

La ecuación $\dfrac{dx}{dt}=\dfrac{1}{12000}(0.04-x)$ también es separable. Al separar e integrar,

$$
\int \frac{dx}{0.04-x}=\int \frac{dt}{12000}
\quad\Longrightarrow\quad
-\ln|0.04-x|=\frac{t}{12000}+C_1,
$$

de donde $x(t)=0.04+C_2 e^{-t/12000}$, equivalente a la solución obtenida.
