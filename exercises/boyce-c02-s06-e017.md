---
title: "Boyce 2.6 Ejercicio 17"
exercise-id: boyce-c02-s06-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.6, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
  - estabilidad
competencies:
  - resolver-analiticamente.cambio-variable
  - aplicar-condiciones.problema-valor-inicial
  - interpretar.contexto-modelo
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
  - derivacion.regla-cadena
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s06i03-p083.png
---

## Enunciado

a) Resuelva la ecuación de Gompertz

$$dN/dt = rN \ln(K/N),$$

sujeta a la condición inicial $N(0) = N_0$.

Sugerencia: Es conveniente hacer $u = \ln(N/K)$.

b) Para los datos del ejemplo 1 del texto [$r = 0.71$ por año, $K = 80.5 \times 10^6$ kg, $N_0/K = 0.25$], aplique el modelo de Gompertz para encontrar el valor predicho de $N(2)$.

c) Para los mismos datos del inciso b), use el modelo de Gompertz para encontrar el tiempo $\tau$ en el que $N(\tau) = 0.75 K$.

## Solución

La solución del problema de valor inicial es

$$
N(t) = K\left(\frac{N_0}{K}\right)^{e^{-rt}}.
$$

b) $N(2) \approx 5.76 \times 10^7$ kg.

c) $\tau \approx 2.21$ años.

## Resolución

Se resuelve el problema de valor inicial

$$
\frac{dN}{dt} = rN \ln\!\left(\frac{K}{N}\right), \qquad N(0)=N_0,
$$

con $N>0$, de modo que el logaritmo esté definido.

Se aplica la sustitución sugerida $u=\ln(N/K)$. Derivando respecto de $t$ y usando la regla de la cadena,

$$
\frac{du}{dt} = \frac{1}{N}\frac{dN}{dt}.
$$

Como $\ln(K/N)=-\ln(N/K)=-u$, la ecuación diferencial se escribe $dN/dt=-rNu$. Al sustituir en la expresión anterior,

$$
\frac{du}{dt} = \frac{1}{N}(-rNu) = -ru.
$$

Esta ecuación es **lineal homogénea** y **separable** en $u$. Separando variables e integrando,

$$
\int \frac{du}{u} = -r\int dt,
$$

de donde $\ln|u|=-rt+C$ y, por tanto, $u(t)=C_1e^{-rt}$.

La condición inicial $N(0)=N_0$ da $u(0)=\ln(N_0/K)$, luego $C_1=\ln(N_0/K)$ y

$$
u(t)=\ln\!\left(\frac{N_0}{K}\right)e^{-rt}.
$$

Se recupera $N$ con la definición de $u$:

$$
N(t)=K e^{u(t)}=K\exp\!\left(\ln\!\left(\frac{N_0}{K}\right)e^{-rt}\right)=K\left(\frac{N_0}{K}\right)^{e^{-rt}}.
$$

Para el inciso b), con $N_0/K=0.25$ y $r=0.71$,

$$
N(2)=80.5\times 10^6\exp\!\left(\ln(0.25)\,e^{-1.42}\right).
$$

Con $\ln(0.25)=-1.3863$ y $e^{-1.42}=0.2417$, el exponente vale $\ln(0.25)\,e^{-1.42}=-0.3351$ y

$$
N(2)\approx 80.5\times 10^6 \times 0.7153 \approx 5.76\times 10^7 \text{ kg}.
$$

Para el inciso c), se impone $N(\tau)=0.75K$:

$$
0.75 = \frac{N(\tau)}{K}=\left(\frac{N_0}{K}\right)^{e^{-r\tau}}=0.25^{\,e^{-r\tau}}.
$$

Tomando logaritmos,

$$
\ln(0.75)=e^{-r\tau}\ln(0.25),
$$

de donde

$$
e^{-r\tau}=\frac{\ln(0.75)}{\ln(0.25)}=0.2075.
$$

Por tanto, $-r\tau=\ln(0.2075)=-1.5725$ y

$$
\tau=\frac{1.5725}{0.71}\approx 2.21 \text{ años}.
$$

## Observaciones

La sustitución reduce la ecuación de Gompertz a la ecuación lineal $u'=-ru$; no se requiere ningún otro método. El valor $K$ es la capacidad de carga del modelo: para $0<N<K$ se cumple $\ln(K/N)>0$ y $N$ crece hacia $K$, mientras que para $N>K$ decrece. Así, $K$ es un equilibrio estable de la ecuación autónoma. Si $N_0=K$, la solución es la constante $N(t)=K$.
