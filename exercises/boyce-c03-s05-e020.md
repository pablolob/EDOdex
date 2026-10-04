---
title: "Boyce 3.5 Ejercicio 20"
exercise-id: boyce-c03-s05-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.reduccion-orden
prerequisitos:
  - derivacion.producto
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c03s05i02-p176.png
---

## Enunciado

En cada uno de los problemas 18 a 25, aplique el método de reducción de orden para hallar una segunda solución de la ecuación diferencial dada.

20. $x^2 y'' + 3xy' + y = 0, \quad x > 0; \quad y_1(x) = x^{-1}$

## Solución

Una segunda solución linealmente independiente es

$$
y_2(x)=x^{-1}\ln x.
$$

La solución general es

$$
y(x)=C_1x^{-1}+C_2x^{-1}\ln x=\frac{C_1+C_2\ln x}{x}, \qquad x>0.
$$

## Resolución

La ecuación es **lineal**, **homogénea** y de **segundo orden**, con coeficientes variables. Se conoce la solución $y_1=x^{-1}$ y se aplica **reducción de orden**. Se busca una segunda solución de la forma $y_2(x)=u(x)y_1(x)=u(x)x^{-1}$, con $u$ no constante. Por la regla del producto,

$$
\begin{aligned}
y_2' &= u'x^{-1}-ux^{-2}, \\
y_2'' &= u''x^{-1}-2u'x^{-2}+2ux^{-3}.
\end{aligned}
$$

Al sustituir en $x^{2}y''+3xy'+y=0$,

$$
x^{2}\left(u''x^{-1}-2u'x^{-2}+2ux^{-3}\right)+3x\left(u'x^{-1}-ux^{-2}\right)+ux^{-1}=0.
$$

Al distribuir, los tres términos en $u$ se cancelan,

$$
xu''-2u'+2ux^{-1}+3u'-3ux^{-1}+ux^{-1}=xu''+u'=0.
$$

La cancelación del término en $u$ es consecuencia de que $y_1$ resuelve la ecuación; por eso queda una ecuación de primer orden en $u'$. La variable $u$ no aparece, de modo que se define $w=u'$:

$$
xw'+w=0,
$$

es decir, $(xw)'=0$. Por tanto $xw=C$. Con la elección $C=1$ se tiene $w=x^{-1}$, y al integrar resulta $u=\ln x$ para $x>0$. La constante aditiva solo reproduce $y_1$ y se omite. Así,

$$
y_2(x)=x^{-1}\ln x.
$$

Para confirmar la independencia lineal, el wronskiano en $x>0$ es

$$
W(y_1,y_2)=x^{-1}\left(-x^{-2}\ln x+x^{-2}\right)-\left(-x^{-2}\right)x^{-1}\ln x=x^{-3}\ne 0.
$$

Por lo tanto, $\{x^{-1},\,x^{-1}\ln x\}$ es un conjunto fundamental y la solución general es

$$
y(x)=C_1x^{-1}+C_2x^{-1}\ln x, \qquad x>0.
$$

## Observaciones

El intervalo de validez es $x>0$, el dominio indicado en el enunciado: allí $x^{-1}$ y $\ln x$ están definidos y son continuos.

### Método alternativo: fórmula de reducción de orden

La segunda solución puede obtenerse directamente con

$$
y_2=y_1\int \frac{e^{-\int P(x)\,dx}}{y_1^{2}}\,dx,
$$

donde $P(x)=3/x$ es el coeficiente de $y'$ en la forma estándar $y''+P(x)y'+Q(x)y=0$. Como $e^{-\int P\,dx}=x^{-3}$ y $y_1^{2}=x^{-2}$,

$$
y_2=x^{-1}\int x^{-1}\,dx=x^{-1}\ln x.
$$
