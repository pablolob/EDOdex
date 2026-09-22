---
title: "Boyce 6.5 Ejercicio 21"
exercise-id: boyce-c06-s05-e021
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.5, ejercicio 21"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
hidden-competencies:
  - resolver-analiticamente.convolucion
prerequisitos:
  - transformadas.transformada-laplace
  - transformadas.convolucion
  - integracion.por-partes
  - integracion.fracciones-parciales
  - ecuaciones-diferenciales.condiciones-iniciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s05i02-p350.png
  - c06s05i03-p351.png
---

## Enunciado

Considere la ecuación integral de Volterra (ver el problema 20).

$$\phi(t) + \int_0^t (t - \xi)\phi(\xi) \,d\xi = \operatorname{sen} 2t.$$

a) Demuestre que si $u$ es una función total que $u''(t) = \phi(t)$, entonces

$$u''(t) + u(t) - tu'(0) - u(0) = \operatorname{sen} 2t.$$

b) Demuestre que la ecuación integral dada es equivalente al problema con valor inicial

$$u''(t) + u(t) = \operatorname{sen} 2t; \quad u(0) = 0, \ u'(0) = 0.$$

c) Resuelva la ecuación integral dada mediante la aplicación de la transformada de Laplace.

d) Resuelva el problema con valor inicial del inciso b) y compruebe que la solución es la misma que la obtenida en c).

## Solución

La ecuación integral es de tipo Volterra con núcleo $k(t)=t$. Su solución es

$$
\phi(t)=\frac{4}{3}\sin 2t-\frac{2}{3}\sin t.
$$

El problema con valor inicial del inciso b) tiene por solución

$$
u(t)=\frac{2}{3}\sin t-\frac{1}{3}\sin 2t,
$$

y se cumple $\phi=u''$. Los incisos a) y b) establecen la equivalencia entre ambos problemas.

## Resolución

### Inciso a)

Puesto que $u''=\phi$, la integral se evalúa mediante **integración por partes**:

$$
\begin{aligned}
\int_0^t (t-\xi)\phi(\xi)\,d\xi
&=\int_0^t (t-\xi)u''(\xi)\,d\xi \\
&=\Big[(t-\xi)u'(\xi)\Big]_{\xi=0}^{\xi=t}+\int_0^t u'(\xi)\,d\xi \\
&=-t\,u'(0)+u(t)-u(0).
\end{aligned}
$$

Al sustituir $\phi=u''$ y este resultado en la ecuación integral,

$$
u''(t)+u(t)-t\,u'(0)-u(0)=\sin 2t,
$$

que es la identidad pedida.

### Inciso b)

Dada $\phi$, la condición $u''=\phi$ determina $u$ salvo una función lineal $at+b$. La combinación $u''+u-tu'(0)-u(0)$ no cambia al sumar $at+b$ a $u$, de modo que puede elegirse el representante con $u(0)=u'(0)=0$. Con esa elección, la identidad del inciso a) se reduce a

$$
u''(t)+u(t)=\sin 2t,\qquad u(0)=0,\quad u'(0)=0.
$$

Recíprocamente, si $u$ resuelve este problema con valor inicial, entonces $u(0)=u'(0)=0$ y, al definir $\phi=u''$, la identidad del inciso a) reproduce la ecuación integral. Por tanto, ambos problemas son equivalentes.

### Inciso c)

Se aplica la **transformada de Laplace**. Sea $\Phi(s)=\mathcal{L}\{\phi(t)\}$. La integral es la convolución de $t$ con $\phi$,

$$
\int_0^t (t-\xi)\phi(\xi)\,d\xi=(t*\phi)(t),
$$

y por el **teorema de convolución** su transformada es $\dfrac{1}{s^2}\Phi(s)$. Como $\mathcal{L}\{\sin 2t\}=\dfrac{2}{s^2+4}$, la ecuación transformada es

$$
\Phi(s)+\frac{1}{s^2}\Phi(s)=\frac{2}{s^2+4}.
$$

Al despejar,

$$
\Phi(s)=\frac{2s^2}{(s^2+1)(s^2+4)}.
$$

La descomposición en **fracciones parciales**,

$$
\frac{2s^2}{(s^2+1)(s^2+4)}=\frac{A}{s^2+1}+\frac{B}{s^2+4},
$$

conduce a $2s^2=A(s^2+4)+B(s^2+1)$, es decir, $A+B=2$ y $4A+B=0$. Resulta $A=-\dfrac{2}{3}$ y $B=\dfrac{8}{3}$. Por tanto,

$$
\Phi(s)=-\frac{2}{3}\frac{1}{s^2+1}+\frac{8}{3}\frac{1}{s^2+4}.
$$

Con la transformada inversa $\mathcal{L}^{-1}\left\{\dfrac{1}{s^2+a^2}\right\}=\dfrac{1}{a}\sin at$,

$$
\phi(t)=-\frac{2}{3}\sin t+\frac{8}{3}\cdot\frac{1}{2}\sin 2t=\frac{4}{3}\sin 2t-\frac{2}{3}\sin t.
$$

### Inciso d)

Se resuelve $u''+u=\sin 2t$ con $u(0)=u'(0)=0$ por **coeficientes indeterminados**. La solución de la ecuación homogénea es $u_c=C_1\cos t+C_2\sin t$. Para el término no homogéneo se propone $u_p=A\sin 2t+B\cos 2t$. Al sustituir,

$$
u_p''+u_p=-3A\sin 2t-3B\cos 2t=\sin 2t,
$$

de donde $A=-\dfrac{1}{3}$ y $B=0$. Así,

$$
u(t)=C_1\cos t+C_2\sin t-\frac{1}{3}\sin 2t.
$$

Las condiciones iniciales dan $u(0)=C_1=0$ y $u'(0)=C_2-\dfrac{2}{3}=0$, es decir, $C_2=\dfrac{2}{3}$. Por tanto,

$$
u(t)=\frac{2}{3}\sin t-\frac{1}{3}\sin 2t.
$$

Al derivar dos veces,

$$
u''(t)=-\frac{2}{3}\sin t+\frac{4}{3}\sin 2t=\phi(t),
$$

que coincide con la solución del inciso c). Esto comprueba la equivalencia.

## Observaciones

La ecuación integral es de tipo Volterra con núcleo $k(t)=t$; el término integral es la convolución $t*\phi$. La equivalencia del inciso b) muestra que resolver la ecuación integral equivale a resolver un problema con valor inicial de segundo orden.

### Método alternativo: transformada de Laplace para el inciso d)

El problema con valor inicial también puede resolverse con **transformada de Laplace**. Con $U(s)=\mathcal{L}\{u(t)\}$ y $u(0)=u'(0)=0$,

$$
(s^2+1)U(s)=\frac{2}{s^2+4},\qquad U(s)=\frac{2}{(s^2+1)(s^2+4)}.
$$

Como $\Phi(s)=s^2U(s)$, ambas vías conducen al mismo $u$ y a $\phi=u''$.
