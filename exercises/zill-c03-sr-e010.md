---
title: "Zill Repaso C3 Ejercicio 10"
exercise-id: zill-c03-sr-e010
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 3, ejercicio 10"
language: es
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
  - interpretar.contexto-modelo
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - integracion.fracciones-parciales
  - calculo-avanzado.series-taylor
source-images:
  - c03sri02-p128.png
difficulty:
  conceptual: 2
  technical: 2
solution-status: draft
statement-status: accepted
---

## Enunciado

10. De acuerdo con la ley de Stefan de la radiación, la temperatura absoluta $T$ de un cuerpo que se enfría en un medio a temperatura absoluta constante $T_m$ está dada como

$$
\frac{dT}{dt} = k(T^4 - T_m^4),
$$

donde $k$ es una constante. La ley de Stefan se puede utilizar en un intervalo de temperatura mayor que la ley de Newton del enfriamiento.

a) Resuelva la ecuación diferencial.

b) Demuestre que cuando $T - T_m$ es pequeña comparada con $T_m$ entonces la ley de Newton del enfriamiento se aproxima a la ley de Stefan. [Sugerencia: Considere la serie binomial del lado derecho de la ED.]

## Solución

a) La solución general, en forma implícita, es

$$
\ln\left|\frac{T-T_m}{T+T_m}\right|-2\arctan\!\left(\frac{T}{T_m}\right)=4T_m^3\,k\,t+C,
$$

con $T_m>0$. La función constante $T(t)\equiv T_m$ también es solución.

b) Si la diferencia $T-T_m$ es pequeña frente a $T_m$, entonces $T^4-T_m^4\approx 4T_m^3(T-T_m)$ y la ley de Stefan se reduce a

$$
\frac{dT}{dt}\approx 4kT_m^3(T-T_m)=-K(T-T_m),\qquad K=-4kT_m^3>0,
$$

que es la **ley de enfriamiento de Newton**.

## Resolución

### a) Resolución de la ecuación diferencial

La ecuación es **autónoma de primer orden** y **separable**. Separando las variables,

$$
\frac{dT}{T^4-T_m^4}=k\,dt.
$$

El denominador se factoriza como

$$
T^4-T_m^4=(T^2-T_m^2)(T^2+T_m^2)=(T-T_m)(T+T_m)(T^2+T_m^2).
$$

La descomposición en **fracciones parciales** es

$$
\frac{1}{T^4-T_m^4}=\frac{1}{4T_m^3}\frac{1}{T-T_m}-\frac{1}{4T_m^3}\frac{1}{T+T_m}-\frac{1}{2T_m^2}\frac{1}{T^2+T_m^2}.
$$

Al integrar cada término,

$$
\int\frac{dT}{T^4-T_m^4}=\frac{1}{4T_m^3}\ln\left|\frac{T-T_m}{T+T_m}\right|-\frac{1}{2T_m^3}\arctan\!\left(\frac{T}{T_m}\right)+C_1.
$$

El miembro derecho de la ecuación separada es $\int k\,dt=kt+C_2$. Igualando ambas integrales y agrupando las constantes,

$$
\ln\left|\frac{T-T_m}{T+T_m}\right|-2\arctan\!\left(\frac{T}{T_m}\right)=4T_m^3\,k\,t+C.
$$

Esta expresión es la solución general en forma implícita. La integral no admite un despeje elemental de $T$, por lo que se conserva así.

Al separar las variables se dividió por $T^4-T_m^4$, factor que se anula en $T=T_m$. Por tanto, la solución constante $T(t)\equiv T_m$ se pierde en el proceso y debe agregarse como solución singular. En el contexto físico, $T_m$ es la temperatura de equilibrio del cuerpo.

### b) Aproximación a la ley de Newton

Se escribe $T=T_m+\Delta T$ con $\Delta T=T-T_m$. La **serie binomial** da

$$
T^4=(T_m+\Delta T)^4=T_m^4\left(1+\frac{\Delta T}{T_m}\right)^4
=T_m^4\left[1+4\frac{\Delta T}{T_m}+6\left(\frac{\Delta T}{T_m}\right)^2+\cdots\right].
$$

Al restar $T_m^4$,

$$
T^4-T_m^4=4T_m^3\,\Delta T+6T_m^2\,\Delta T^2+\cdots
\approx 4T_m^3(T-T_m),
$$

donde se desprecian los términos de orden $\Delta T^2$ y superiores porque $|\Delta T|\ll T_m$. Al sustituir en la ecuación diferencial,

$$
\frac{dT}{dt}=k(T^4-T_m^4)\approx 4kT_m^3(T-T_m)=-K(T-T_m),
$$

con $K=-4kT_m^3$. Un cuerpo que se enfría satisface $T>T_m$ y $dT/dt<0$, de modo que $k<0$ y $K>0$. El resultado tiene la forma de la **ley de enfriamiento de Newton**,

$$
\frac{dT}{dt}=-K(T-T_m),
$$

que es la aproximación lineal de la ley de Stefan para diferencias pequeñas de temperatura.

## Observaciones

La ley de Stefan es válida en un intervalo amplio de temperaturas; la ley de Newton solo describe el enfriamiento cuando $|T-T_m|$ es pequeña frente a $T_m$. La constante de Newton $K=-4kT_m^3$ depende de la temperatura del medio, por lo que la equivalencia es local alrededor de $T_m$.

La solución constante $T\equiv T_m$ es un punto de equilibrio del modelo. Como $T^4-T_m^4$ es negativo para $T<T_m$ y positivo para $T>T_m$, para $k<0$ el equilibrio es asintóticamente estable: la temperatura tiende a la del medio.
