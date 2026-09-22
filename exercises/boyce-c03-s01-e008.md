---
title: "Boyce 3.1 Ejercicio 8"
exercise-id: boyce-c03-s01-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.1, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s01i01-p142.png
---

## Enunciado

En cada uno de los problemas 1 a 8, halle la solución general de la ecuación diferencial dada.

8. $y'' - 2y' - 2y = 0$

## Solución

La ecuación característica tiene dos raíces reales distintas, $r=1\pm\sqrt{3}$. La solución general es

$$
y(x)=C_1e^{(1+\sqrt{3})x}+C_2e^{(1-\sqrt{3})x}.
$$

## Resolución

La ecuación es lineal, homogénea y de **coeficientes constantes**. Se buscan soluciones de la forma $y=e^{rx}$. Sus derivadas son $y'=re^{rx}$ y $y''=r^2e^{rx}$. Al sustituir,

$$
r^2e^{rx}-2re^{rx}-2e^{rx}=e^{rx}\left(r^2-2r-2\right)=0.
$$

Como $e^{rx}\ne 0$, se obtiene la **ecuación característica**

$$
r^2-2r-2=0.
$$

Se resuelve con la fórmula cuadrática:

$$
r=\frac{2\pm\sqrt{(-2)^2-4(1)(-2)}}{2}=\frac{2\pm\sqrt{12}}{2}=\frac{2\pm 2\sqrt{3}}{2}=1\pm\sqrt{3}.
$$

Las raíces $r_1=1+\sqrt{3}$ y $r_2=1-\sqrt{3}$ son reales y distintas. Cada una produce una solución $e^{r_1x}$ y $e^{r_2x}$, linealmente independientes. Por lo tanto, la solución general es

$$
y(x)=C_1e^{(1+\sqrt{3})x}+C_2e^{(1-\sqrt{3})x}.
$$

## Observaciones

El discriminante de la ecuación característica es positivo, $(-2)^2-4(1)(-2)=12$, de modo que las raíces son reales y distintas y no aparecen funciones trigonométricas ni factores polinómicos. Las dos exponenciales están definidas para todo $x\in\mathbb{R}$; la solución general también, cualesquiera sean $C_1$ y $C_2$.
