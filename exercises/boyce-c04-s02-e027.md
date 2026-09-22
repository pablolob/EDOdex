---
title: "Boyce 4.2 Ejercicio 27"
exercise-id: boyce-c04-s02-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 27"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - algebra.numeros-complejos
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s02i02-p230.png
---

## Enunciado

Demuestre que la solución general de $y^{iv} - y = 0$ se puede escribir como

$$y = c_1 \cos x + c_2 \sin x + c_3 \cosh x + c_4 \sinh x.$$

Determine la solución que satisface las condiciones iniciales $y(0) = 0, \quad y'(0) = 0, \quad y''(0) = 1, \quad y'''(0) = 1$. ¿Por qué es conveniente usar las soluciones $\cosh x$ y $\sinh x$ en vez de $e^x$ y $e^{-x}$?

## Solución

La ecuación característica $r^4-1=0$ tiene raíces $r=\pm 1$ y $r=\pm i$. Como $\{e^{x},e^{-x}\}$ y $\{\cosh x,\sinh x\}$ generan el mismo espacio de soluciones, la solución general admite la forma del enunciado. Al imponer las condiciones iniciales resultan $c_1=c_2=-\tfrac12$ y $c_3=c_4=\tfrac12$, de modo que

$$
y(x)=\frac{1}{2}\left(e^{x}-\cos x-\sin x\right).
$$

El uso de $\cosh x$ y $\sinh x$ conviene porque son funciones par e impar, igual que $\cos x$ y $\sin x$; esa paridad desacopla las cuatro condiciones en $x=0$ en dos sistemas de orden 2. Con $e^{x}$ y $e^{-x}$, que no tienen paridad definida, las cuatro ecuaciones quedan acopladas.

## Resolución

La ecuación

$$
y^{\mathrm{iv}}-y=0
$$

es **lineal**, **homogénea**, de **orden 4** y con **coeficientes constantes**. Al proponer $y=e^{rx}$ se obtiene la **ecuación característica**

$$
r^{4}-1=(r^{2}-1)(r^{2}+1)=0,
$$

cuyas raíces son $r=1$, $r=-1$, $r=i$ y $r=-i$. Las dos raíces reales aportan $e^{x}$ y $e^{-x}$; el par complejo conjugado $\pm i$ aporta $\cos x$ y $\sin x$. La solución general es

$$
y=c_1e^{x}+c_2e^{-x}+c_3\cos x+c_4\sin x.
$$

Las identidades

$$
\cosh x=\frac{e^{x}+e^{-x}}{2}, \qquad \sinh x=\frac{e^{x}-e^{-x}}{2}
$$

permiten despejar $e^{x}=\cosh x+\sinh x$ y $e^{-x}=\cosh x-\sinh x$. Al sustituir en la solución general y redefinir las constantes, el par $\{e^{x},e^{-x}\}$ se reemplaza por $\{\cosh x,\sinh x\}$, que genera el mismo espacio. Por tanto, la solución general también se escribe

$$
y=c_1\cos x+c_2\sin x+c_3\cosh x+c_4\sinh x.
$$

Con esta forma, las derivadas sucesivas son

$$
\begin{aligned}
y' &= -c_1\sin x+c_2\cos x+c_3\sinh x+c_4\cosh x,\\
y'' &= -c_1\cos x-c_2\sin x+c_3\cosh x+c_4\sinh x,\\
y''' &= c_1\sin x-c_2\cos x+c_3\sinh x+c_4\cosh x.
\end{aligned}
$$

Al evaluar en $x=0$, con $\cos 0=\cosh 0=1$ y $\sin 0=\sinh 0=0$, las condiciones iniciales dan

$$
\begin{aligned}
y(0) &= c_1+c_3 = 0,\\
y'(0) &= c_2+c_4 = 0,\\
y''(0) &= -c_1+c_3 = 1,\\
y'''(0) &= -c_2+c_4 = 1.
\end{aligned}
$$

Las ecuaciones pares determinan $c_1$ y $c_3$: al sumar $c_1+c_3=0$ y $-c_1+c_3=1$ resulta $c_3=\tfrac12$ y $c_1=-\tfrac12$. Las ecuaciones impares determinan $c_2$ y $c_4$: al sumar $c_2+c_4=0$ y $-c_2+c_4=1$ resulta $c_4=\tfrac12$ y $c_2=-\tfrac12$. La solución del problema con valor inicial es

$$
y(x)=-\frac{1}{2}\cos x-\frac{1}{2}\sin x+\frac{1}{2}\cosh x+\frac{1}{2}\sinh x.
$$

Como $\cosh x+\sinh x=e^{x}$, también se escribe

$$
y(x)=\frac{1}{2}\left(e^{x}-\cos x-\sin x\right).
$$

La conveniencia de $\cosh x$ y $\sinh x$ frente a $e^{x}$ y $e^{-x}$ está en la **paridad**. Las funciones $\cos x$ y $\cosh x$ son pares, y $\sin x$ y $\sinh x$ son impares. En $x=0$ las funciones pares solo contribuyen a $y$ y a $y''$, y las impares solo a $y'$ y a $y'''$; así, las cuatro condiciones se separan en dos sistemas de orden 2, uno para $\{c_1,c_3\}$ y otro para $\{c_2,c_4\}$. Con $e^{x}$ y $e^{-x}$, que no son pares ni impares, las cuatro condiciones quedan acopladas en un único sistema de orden 4.

## Observaciones

El conjunto $\{\cos x,\sin x,\cosh x,\sinh x\}$ es fundamental: sus cuatro elementos son soluciones y son linealmente independientes, igual al orden de la ecuación. No hay soluciones singulares ni ramas perdidas. Como la ecuación es lineal con coeficientes constantes, el teorema de existencia y unicidad garantiza que la solución hallada es única y está definida en todo $\mathbb{R}$.

### Método alternativo: base exponencial

Si se conserva la base $\{e^{x},e^{-x},\cos x,\sin x\}$, las condiciones iniciales conducen al sistema acoplado

$$
\begin{aligned}
y(0) &= C_1+C_2+C_3 = 0,\\
y'(0) &= C_1-C_2+C_4 = 0,\\
y''(0) &= C_1+C_2-C_3 = 1,\\
y'''(0) &= C_1-C_2-C_4 = 1,
\end{aligned}
$$

pues todas las derivadas de $e^{x}$ y $e^{-x}$ valen $1$ en $x=0$. Su resolución conduce a la misma solución $y=\tfrac12(e^{x}-\cos x-\sin x)$.
