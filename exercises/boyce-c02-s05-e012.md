---
title: "Boyce 2.5 Ejercicio 12"
exercise-id: boyce-c02-s05-e012
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 12"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
hidden-competencies:
  - clasificar.lineal-no-hom
prerequisitos:
  - integracion.directa
  - ecuaciones-diferenciales.primer-orden
difficulty:
  conceptual: 2
  technical: 2
solution-status: draft
statement-status: accepted
source-images:
  - c02s05i03-p069.png
---

## Enunciado

Un jubilado tiene invertida una suma $S(t)$ de modo que obtenga interés a una tasa anual $r$, compuesto continuamente. Los retiros para sus gastos se hacen a razón de $k$ dólares anuales; suponga que los retiros se hacen continuamente.

a) Si el valor inicial de la inversión es $S_0$, determínese $S(t)$ en cualquier momento.

b) Si se supone que $S_0$ y $r$ son fijos, determine la cuota de retiro $k_0$ a la que $S(t)$ permanecerá constante.

c) Si $k$ sobrepasa el valor $k_0$ hallado en el inciso b), entonces $S(t)$ disminuirá y, finalmente, será cero. Encuentre el tiempo $T$ en el que $S(t) = 0$.

d) Determine $T$ si $r = 8\%$ y $k = 2 k_0$.

e) Suponga que una persona que se jubila con un capital $S_0$ desea retirar fondos a una cuota anual $k$ por no más de $T$ años. Determine la cuota máxima posible de retiro.

f) ¿De cuánto debe ser una inversión inicial para permitir un retiro anual de $\$12\,000$ durante 20 años, si se supone una tasa de interés del 8%?

## Solución

El saldo satisface el problema con valor inicial

$$
\frac{dS}{dt}=rS-k,\qquad S(0)=S_0,
$$

y sus resultados por inciso son:

a)
$$
S(t)=\frac{k}{r}+\left(S_0-\frac{k}{r}\right)e^{rt}.
$$

b)
$$
k_0=rS_0.
$$

c)
$$
T=\frac{1}{r}\ln\!\left(\frac{k}{k-rS_0}\right),\qquad k>k_0.
$$

d)
$$
T=\frac{\ln 2}{r}=\frac{\ln 2}{0.08}\approx 8.66\ \text{años}.
$$

e)
$$
k_{\max}=\frac{rS_0}{1-e^{-rT}}.
$$

f)
$$
S_0=\frac{k\left(1-e^{-rT}\right)}{r}\approx \$119\,715.52.
$$

## Resolución

**Modelo.** El saldo cambia por dos motivos: el interés lo aumenta a razón de $rS$ y los retiros lo disminuyen a razón de $k$. Por tanto,

$$
\frac{dS}{dt}=rS-k,\qquad S(0)=S_0.
$$

Esta ecuación es **lineal de primer orden no homogénea**.

**a) Saldo en cualquier momento.** En la forma estándar $S'-rS=-k$ el factor integrante es $\mu(t)=e^{-rt}$. Al multiplicar,

$$
e^{-rt}S'-re^{-rt}S=-ke^{-rt}\quad\Longrightarrow\quad \frac{d}{dt}\!\left(e^{-rt}S\right)=-ke^{-rt}.
$$

Integrando,

$$
e^{-rt}S=\frac{k}{r}e^{-rt}+C\quad\Longrightarrow\quad S(t)=\frac{k}{r}+Ce^{rt}.
$$

La condición inicial $S(0)=S_0$ da $C=S_0-\dfrac{k}{r}$, de donde

$$
S(t)=\frac{k}{r}+\left(S_0-\frac{k}{r}\right)e^{rt}.
$$

**b) Cuota que mantiene el saldo constante.** Si $S(t)$ es constante, entonces $\dfrac{dS}{dt}=0$. Con $S=S_0$ en la ecuación del modelo, $0=rS_0-k$, es decir,

$$
k_0=rS_0.
$$

**c) Tiempo de agotamiento.** Para $k>k_0$ se impone $S(T)=0$ en el resultado del inciso a:

$$
0=\frac{k}{r}+\left(S_0-\frac{k}{r}\right)e^{rT}.
$$

Al despejar la exponencial,

$$
e^{rT}=\frac{k/r}{k/r-S_0}=\frac{k}{k-rS_0},
$$

y al tomar logaritmos,

$$
T=\frac{1}{r}\ln\!\left(\frac{k}{k-rS_0}\right).
$$

Como $k>rS_0$, el argumento del logaritmo es mayor que $1$ y $T>0$.

**d) Caso $r=8\%$ y $k=2k_0$.** Con $k=2rS_0$ se tiene $k-rS_0=rS_0$, luego

$$
T=\frac{1}{r}\ln\!\left(\frac{2rS_0}{rS_0}\right)=\frac{\ln 2}{r}=\frac{0.6931}{0.08}\approx 8.66\ \text{años}.
$$

**e) Cuota máxima para $T$ años.** De la expresión del inciso c se despeja $k$:

$$
e^{rT}=\frac{k}{k-rS_0}\quad\Longrightarrow\quad k\left(e^{rT}-1\right)=rS_0e^{rT}.
$$

Dividiendo entre $e^{rT}$,

$$
k_{\max}=\frac{rS_0e^{rT}}{e^{rT}-1}=\frac{rS_0}{1-e^{-rT}}.
$$

**f) Inversión inicial.** Con $k=12\,000$, $r=0.08$ y $T=20$ años,

$$
S_0=\frac{k\left(1-e^{-rT}\right)}{r}=\frac{12\,000\left(1-e^{-1.6}\right)}{0.08}.
$$

Como $e^{-1.6}\approx 0.20190$, resulta

$$
S_0=\frac{12\,000(0.79810)}{0.08}\approx \$119\,715.52.
$$

## Observaciones

La cuota $k_0=rS_0$ es la tasa de retiro de equilibrio. Si $k<k_0$ el saldo crece exponencialmente; si $k=k_0$ permanece igual a $S_0$; si $k>k_0$ decrece y se agota en el tiempo finito $T$ calculado. El modelo supone que la tasa $r$ y la cuota $k$ son constantes y que el interés se compone y los retiros se efectúan de forma continua.
