---
title: "Boyce 2.5 Ejercicio 3"
exercise-id: boyce-c02-s05-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s05i01-p067.png
---

## Enunciado

El radio 226 tiene una vida media de 1 620 años. Encúentrese el periodo en el que un cuerpo de este material se reduce a tres cuartas partes de su tamaño original.

## Solución

El tiempo pedido es

$$
t=\frac{1620\ln(4/3)}{\ln 2}\approx 672.4\ \text{años}.
$$

## Resolución

Sea $A(t)$ la cantidad de radio 226 presente al tiempo $t$, en años, y sea $A_0=A(0)$ la cantidad inicial. El enunciado indica que la rapidez de decaimiento es proporcional a la cantidad presente. Con constante de proporcionalidad $k>0$,

$$
\frac{dA}{dt}=-kA.
$$

Esta es una ecuación lineal de primer orden homogénea. En forma estándar es $A'+kA=0$, con factor integrante $\mu(t)=e^{kt}$. Al multiplicar ambos miembros,

$$
e^{kt}\left(A'+kA\right)=0 \quad\Longrightarrow\quad \frac{d}{dt}\left(e^{kt}A\right)=0.
$$

La integración da $e^{kt}A=C$, es decir,

$$
A(t)=Ce^{-kt}.
$$

La condición inicial $A(0)=A_0$ fija $C=A_0$, por lo que la solución es $A(t)=A_0e^{-kt}$.

La vida media es de $1620$ años: al tiempo $t=1620$ queda la mitad de la cantidad inicial,

$$
A(1620)=A_0e^{-1620k}=\frac{A_0}{2}.
$$

Al simplificar $A_0$ y tomar logaritmos,

$$
-1620k=-\ln 2 \quad\Longrightarrow\quad k=\frac{\ln 2}{1620}.
$$

Que el cuerpo se reduzca a tres cuartas partes de su tamaño original significa que $A(t)=\tfrac{3}{4}A_0$. Se sustituye la solución y se despeja $t$:

$$
A_0e^{-kt}=\frac{3}{4}A_0 \quad\Longrightarrow\quad e^{-kt}=\frac{3}{4}.
$$

Al tomar logaritmos, $-kt=\ln(3/4)=-\ln(4/3)$, de donde

$$
t=\frac{\ln(4/3)}{k}=\frac{1620\ln(4/3)}{\ln 2}.
$$

Numéricamente, $t\approx 672.4$ años.

## Observaciones

El resultado no depende de la cantidad inicial. La fracción de material restante es $A(t)/A_0=e^{-kt}$; reducirse a tres cuartas partes fija esa fracción en $3/4$.

En el decaimiento exponencial la cantidad tiende a cero cuando $t\to\infty$: el material se transforma por completo de forma asintótica.

### Método alternativo: base 2

De la vida media se obtiene directamente la fracción restante $A(t)/A_0=2^{-t/1620}$. Igualarla a $3/4$ conduce a $t=1620\log_2(4/3)$, que coincide con el resultado anterior.
