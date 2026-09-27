---
title: "Boyce 2.5 Ejercicio 18"
exercise-id: boyce-c02-s05-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 18"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.comportamiento-solucion
hidden-competencies:
  - clasificar.linealidad
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c02s05i03-p069.png
---

## Enunciado

Inicialmente un tanque contiene 120 litros de agua pura. Al tanque entra a razón de 2 litros/min, una mezcla que contiene una concentración de $\gamma$ g/litro de sal y la mezcla bien revuelta sale del tanque a la misma razón. Encuentre una expresión en términos de $\gamma$ para la cantidad de sal en el tanque en cualquier instante $t$. Halle también la cantidad límite de sal en el tanque $t \to \infty$.

## Solución

La cantidad de sal, en gramos, presente en el tanque en el instante $t$, medido en minutos, es

$$
Q(t)=120\gamma\left(1-e^{-t/60}\right).
$$

La cantidad límite cuando $t\to\infty$ es

$$
\lim_{t\to\infty}Q(t)=120\gamma\ \text{g}.
$$

## Resolución

Sea $Q(t)$ la cantidad de sal, en gramos, presente en el tanque en el instante $t$, medido en minutos desde $t=0$. El volumen de líquido permanece constante e igual a $120$ litros, porque entra y sale la misma razón de $2$ litros por minuto.

La rapidez con que entra la sal es el producto del caudal por la concentración de entrada:

$$
\text{entrada}=2\cdot\gamma=2\gamma\ \text{g/min}.
$$

La mezcla está bien revuelta, de modo que la concentración de salida es uniforme e igual a $\dfrac{Q(t)}{120}$ gramos por litro. La rapidez de salida es entonces

$$
\text{salida}=2\cdot\frac{Q(t)}{120}=\frac{Q(t)}{60}\ \text{g/min}.
$$

Al igualar la rapidez de cambio de $Q$ con la diferencia entra menos sale, se obtiene el modelo

$$
\frac{dQ}{dt}=2\gamma-\frac{Q}{60}.
$$

En forma estándar, la ecuación es **lineal de primer orden**:

$$
\frac{dQ}{dt}+\frac{1}{60}Q=2\gamma.
$$

El **factor integrante** es

$$
\mu(t)=\exp\!\left(\int\frac{1}{60}\,dt\right)=e^{t/60}.
$$

Al multiplicar ambos miembros por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left(e^{t/60}Q\right)=2\gamma\,e^{t/60}.
$$

La integración directa da

$$
e^{t/60}Q=120\gamma\,e^{t/60}+C,
$$

y al despejar $Q$,

$$
Q(t)=120\gamma+Ce^{-t/60}.
$$

La condición inicial es $Q(0)=0$, porque el tanque contiene agua pura. Entonces $0=120\gamma+C$, de donde $C=-120\gamma$, y la solución particular es

$$
Q(t)=120\gamma\left(1-e^{-t/60}\right).
$$

Como $e^{-t/60}\to 0$ cuando $t\to\infty$, la cantidad límite de sal es

$$
\lim_{t\to\infty}Q(t)=120\gamma\ \text{g}.
$$

## Observaciones

La cantidad límite coincide con el producto de la concentración de entrada por el volumen del tanque: $120\gamma$ gramos. Es el valor al que tendería el contenido si el líquido del tanque llegara a tener la concentración de la mezcla entrante. La sal se acumula de forma asintótica y nunca rebasa ese valor para $t\ge 0$.

### Método alternativo: separación de variables

La ecuación también es separable. Al separar las variables,

$$
\frac{dQ}{2\gamma-Q/60}=dt
\quad\Longrightarrow\quad
-60\ln\!\left|2\gamma-\frac{Q}{60}\right|=t+C_1,
$$

de donde $2\gamma-\dfrac{Q}{60}=Ke^{-t/60}$ y, con $Q(0)=0$, se recupera $Q(t)=120\gamma\left(1-e^{-t/60}\right)$.
