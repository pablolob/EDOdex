---
title: "Boyce 2.5 Ejercicio 6"
exercise-id: boyce-c02-s05-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 6"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
hidden-competencies:
  - clasificar.lineal-hom
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c02s05i02-p068.png
---

## Enunciado

Suponga que se deposita una suma $S_0$ en un banco que paga interés a una tasa anual $r$, compuesto continuamente.

a) Halle el tiempo $T$ necesario para duplicar el valor de la suma original, como una función de la tasa de interés $r$.

b) Determine $T$ si $r = 7\%$.

c) Encuentre la tasa de interés que debe pagarse si la inversión inicial tiene que duplicarse en ocho años.

## Solución

a) El tiempo de duplicación es

$$
T=\frac{\ln 2}{r}.
$$

b) Para $r=7\%=0.07$,

$$
T=\frac{\ln 2}{0.07}\approx 9.90\ \text{años}.
$$

c) Para $T=8$ años,

$$
r=\frac{\ln 2}{8}\approx 0.0866,
$$

es decir, una tasa anual de aproximadamente $8.66\%$.

## Resolución

Sea $S(t)$ la suma depositada en el instante $t$, en años, con $S(0)=S_0$. El interés compuesto de forma continua significa que la rapidez de crecimiento es proporcional a la cantidad presente, con constante de proporcionalidad igual a la tasa anual $r$:

$$
\frac{dS}{dt}=rS.
$$

Es una ecuación lineal de primer orden homogénea. En forma estándar es $S'-rS=0$, con factor integrante $\mu(t)=e^{-rt}$. Al multiplicar ambos miembros,

$$
e^{-rt}\left(S'-rS\right)=0 \quad\Longrightarrow\quad \frac{d}{dt}\left(e^{-rt}S\right)=0.
$$

La integración da $e^{-rt}S=C$, es decir,

$$
S(t)=Ce^{rt}.
$$

La condición inicial $S(0)=S_0$ fija $C=S_0$, por lo que la solución es

$$
S(t)=S_0e^{rt}.
$$

**a)** El valor de la suma se duplica cuando $S(T)=2S_0$. Se sustituye en la solución y se simplifica $S_0$:

$$
S_0e^{rT}=2S_0 \quad\Longrightarrow\quad e^{rT}=2.
$$

Tomando logaritmos, $rT=\ln 2$, de donde

$$
T=\frac{\ln 2}{r}.
$$

**b)** Con $r=0.07$,

$$
T=\frac{\ln 2}{0.07}\approx 9.902,
$$

esto es, aproximadamente $9.90$ años.

**c)** Si la duplicación debe ocurrir en $T=8$ años, se despeja la tasa:

$$
r=\frac{\ln 2}{T}=\frac{\ln 2}{8}\approx 0.08664.
$$

La tasa requerida es de aproximadamente $8.66\%$ anual.

## Observaciones

El tiempo de duplicación $T=\ln 2/r$ no depende de la suma inicial $S_0$. Como $\ln 2\approx 0.693$, resulta la regla práctica $T\approx 69.3/r_{\%}$ años, donde $r_{\%}$ es la tasa expresada en porcentaje.

El modelo supone una tasa $r$ constante y no contempla depósitos ni retiros adicionales. Bajo estas hipótesis la suma crece de forma exponencial y tiende a infinito cuando $t\to\infty$.

### Método alternativo: separación de variables

La ecuación $S'=rS$ también es separable. Al escribir $dS/S=r\,dt$ e integrar se obtiene $\ln S=rt+C$, de donde $S(t)=Ce^{rt}$, equivalente a la solución anterior.
