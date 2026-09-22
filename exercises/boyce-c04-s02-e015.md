---
title: "Boyce 4.2 Ejercicio 15"
exercise-id: boyce-c04-s02-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.2, ejercicio 15"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - clasificar.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s02i01-p229.png
---

## Enunciado

En cada uno de los problemas 11 a 22, determine la solución de la ecuación diferencial dada.

15. $y^{\mathrm{vi}} + y = 0$

## Solución

La ecuación es **lineal**, **homogénea**, de **orden 6** y con **coeficientes constantes**. Su solución general es

$$
y(x)=C_1\cos x+C_2\sin x
+e^{\sqrt{3}\,x/2}\left(C_3\cos\frac{x}{2}+C_4\sin\frac{x}{2}\right)
+e^{-\sqrt{3}\,x/2}\left(C_5\cos\frac{x}{2}+C_6\sin\frac{x}{2}\right),
$$

válida para todo $x\in\mathbb{R}$.

## Resolución

La ecuación es lineal, homogénea, de orden 6 y con coeficientes constantes. Al proponer $y=e^{rx}$, la ecuación característica resulta

$$
r^6+1=0.
$$

Sus raíces son las seis raíces sextas de $-1$. En forma polar, $-1=e^{i\pi}=e^{i(\pi+2k\pi)}$ con $k$ entero, de modo que

$$
r_k=e^{i(\pi+2k\pi)/6}=e^{i(2k+1)\pi/6},\qquad k=0,1,\dots,5.
$$

Estas raíces forman tres pares de complejos conjugados:

$$
r=\pm i,\qquad r=\frac{\sqrt{3}}{2}\pm\frac{i}{2},\qquad r=-\frac{\sqrt{3}}{2}\pm\frac{i}{2}.
$$

El polinomio $r^6+1$ no tiene raíces repetidas: su derivada $6r^5$ se anula solo en $r=0$, que no es raíz. Por tanto, las seis raíces son simples y aportan seis soluciones linealmente independientes.

Cada par de raíces $\lambda\pm i\mu$ contribuye con $e^{\lambda x}\left(C\cos(\mu x)+D\sin(\mu x)\right)$. El par $\pm i$ corresponde a $\lambda=0$ y $\mu=1$; los otros dos pares tienen $\mu=1/2$ y partes reales $\lambda=\pm\sqrt{3}/2$. Al reunir las contribuciones,

$$
y(x)=C_1\cos x+C_2\sin x
+e^{\sqrt{3}\,x/2}\left(C_3\cos\frac{x}{2}+C_4\sin\frac{x}{2}\right)
+e^{-\sqrt{3}\,x/2}\left(C_5\cos\frac{x}{2}+C_6\sin\frac{x}{2}\right).
$$

## Observaciones

El polinomio auxiliar no tiene raíces reales: todas son complejas, por lo que la solución general no contiene términos exponenciales reales puros ni polinomios en $x$. El par $\pm i$ produce oscilaciones de amplitud constante, mientras que los pares con parte real $\pm\sqrt{3}/2$ producen un término exponencial creciente y otro decreciente.

La ecuación es lineal y homogénea, así que no presenta soluciones singulares ni soluciones perdidas. El número de constantes arbitrarias coincide con el orden de la ecuación.
