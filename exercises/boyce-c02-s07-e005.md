---
title: "Boyce 2.7 Ejercicio 5"
exercise-id: boyce-c02-s07-e005
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 5"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
hidden-competencies:
  - clasificar.linealidad
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c02s07i01-p092.png
---

## Enunciado

Un objeto de masa $m$ se deja caer desde el reposo en un medio que ofrece una resistencia proporcional a la magnitud de la velocidad. Halle el intervalo de tiempo que transcurre antes de que la velocidad del objeto alcance el 90% de su valor límite.

## Solución

Con el eje positivo dirigido hacia abajo y $v(t)$ la velocidad de descenso, el modelo es

$$
m\frac{dv}{dt}=mg-kv,\qquad v(0)=0,
$$

con $k>0$. Su solución es

$$
v(t)=\frac{mg}{k}\left(1-e^{-kt/m}\right),
$$

de modo que la velocidad límite es $v_L=\dfrac{mg}{k}$. La velocidad alcanza el 90% de $v_L$ en

$$
t=\frac{m}{k}\ln 10.
$$

## Resolución

Se toma el eje positivo dirigido hacia abajo. Sobre el objeto actúan el peso, de magnitud $mg$, y la resistencia, de magnitud $kv$ y sentido opuesto al movimiento. Con $v(t)$ la velocidad de descenso, la segunda ley de Newton conduce a

$$
m\frac{dv}{dt}=mg-kv.
$$

La condición inicial es $v(0)=0$, porque el objeto se deja caer desde el reposo. La ecuación es **lineal** de **primer orden**; en forma estándar,

$$
\frac{dv}{dt}+\frac{k}{m}v=g.
$$

Un **factor integrante** es $\mu(t)=e^{kt/m}$. Al multiplicar por él,

$$
e^{kt/m}\frac{dv}{dt}+\frac{k}{m}e^{kt/m}v=g\,e^{kt/m},
$$

cuyo miembro izquierdo es la derivada de un producto:

$$
\left(e^{kt/m}v\right)'=g\,e^{kt/m}.
$$

Integrando respecto a $t$,

$$
e^{kt/m}v=\frac{mg}{k}e^{kt/m}+C,
$$

donde $C$ es una constante arbitraria. Por tanto,

$$
v(t)=\frac{mg}{k}+C e^{-kt/m}.
$$

La condición $v(0)=0$ exige $\dfrac{mg}{k}+C=0$, es decir, $C=-\dfrac{mg}{k}$. Así,

$$
v(t)=\frac{mg}{k}\left(1-e^{-kt/m}\right).
$$

Como $e^{-kt/m}\to 0$ cuando $t\to\infty$, la velocidad tiende al valor límite

$$
v_L=\frac{mg}{k}.
$$

La velocidad alcanza el 90% de $v_L$ cuando

$$
\frac{mg}{k}\left(1-e^{-kt/m}\right)=0.9\,\frac{mg}{k}.
$$

Se simplifica el factor $\dfrac{mg}{k}$, que no es nulo, y queda $1-e^{-kt/m}=0.9$, esto es, $e^{-kt/m}=0.1$. Al tomar logaritmos naturales,

$$
-\frac{k}{m}t=\ln 0.1=-\ln 10,
$$

de donde

$$
t=\frac{m}{k}\ln 10.
$$

Comprobación: derivando la solución, $v'(t)=g\,e^{-kt/m}$; entonces $m v'+k v=mg\,e^{-kt/m}+mg\left(1-e^{-kt/m}\right)=mg$, que es la ecuación del modelo. Además $v(0)=0$.

## Observaciones

El tiempo obtenido no depende de $g$: la fracción de la velocidad límite alcanzada está gobernada por la razón $k/m$, no por la aceleración de la gravedad. El intervalo es $\ln 10\approx 2.303$ veces la constante de tiempo $\tau=m/k$.

### Método alternativo: separación de variables

La ecuación también es separable. Al separar,

$$
\frac{dv}{g-\frac{k}{m}v}=dt,
$$

e integrar ambos miembros se obtiene $v(t)=\dfrac{mg}{k}+C e^{-kt/m}$, y la condición $v(0)=0$ conduce a la misma solución.
