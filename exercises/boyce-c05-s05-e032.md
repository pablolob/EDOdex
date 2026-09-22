---
title: "Boyce 5.5 Ejercicio 32"
exercise-id: boyce-c05-s05-e032
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 32"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
prerequisitos:
  - algebra.numeros-complejos
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s05i02-p279.png
---

## Enunciado

**Coeficientes complejos.** Si las constantes $\alpha$ y $\beta$ de la ecuación de Euler $x^2 y'' + \alpha x y' + \beta y = 0$ son números complejos, sigue siendo posible obtener soluciones de la forma $x^r$. Sin embargo, en general, las soluciones ya no son de valores reales. En cada uno de los problemas 32 a 34, determine la solución general de la ecuación dada.

32. $x^2 y'' + 2ixy' - iy = 0$

## Solución

La ecuación de Euler es homogénea de segundo orden con coeficientes complejos. Su solución general, válida en $x>0$, es

$$
y=c_1x^{r_1}+c_2x^{r_2}, \qquad
r_{1,2}=\frac{1-2i\pm i\sqrt{3}}{2},
$$

donde $c_1$ y $c_2$ son constantes complejas arbitrarias.

## Resolución

La ecuación es una **ecuación de Euler** de segundo orden, homogénea y con coeficientes complejos. Se buscan soluciones de la forma $y=x^r$, con $r$ posiblemente complejo. Para $x>0$ la potencia se define mediante $x^r=e^{r\ln x}$, de modo que

$$
y'=rx^{r-1}, \qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en $x^2y''+2ixy'-iy=0$,

$$
x^2\,r(r-1)x^{r-2}+2ix\,rx^{r-1}-ix^r
=\left[r(r-1)+2ir-i\right]x^r=0.
$$

Como $x^r\ne 0$ para $x>0$, el factor entre corchetes debe anularse. Resulta la ecuación característica

$$
r^2+(2i-1)r-i=0.
$$

Su discriminante es

$$
\Delta=(2i-1)^2+4i=(-3-4i)+4i=-3,
$$

por lo que $\sqrt{\Delta}=i\sqrt{3}$ y las raíces son

$$
r_{1,2}=\frac{1-2i\pm i\sqrt{3}}{2},
\qquad\text{es decir}\qquad
r_1=\frac{1+i(\sqrt{3}-2)}{2},\quad
r_2=\frac{1-i(\sqrt{3}+2)}{2}.
$$

Las raíces son distintas, $r_1\ne r_2$, de modo que $x^{r_1}$ y $x^{r_2}$ son linealmente independientes en $x>0$. La solución general es

$$
y=c_1x^{r_1}+c_2x^{r_2}.
$$

**Comprobación.** Para $y_1=x^{r_1}$ se tiene $y_1'=r_1x^{r_1-1}$ y $y_1''=r_1(r_1-1)x^{r_1-2}$. Entonces

$$
x^2y_1''+2ixy_1'-iy_1
=\left[r_1(r_1-1)+2ir_1-i\right]x^{r_1}=0,
$$

porque $r_1$ anula la ecuación característica. El mismo cálculo vale para $y_2=x^{r_2}$. Por linealidad, cualquier combinación $c_1x^{r_1}+c_2x^{r_2}$ satisface la ecuación.

## Observaciones

La solución general es de valores complejos. Al ser los coeficientes complejos, las raíces $r_1$ y $r_2$ no son conjugadas, por lo que no procede el paso a la forma real $x^{\lambda}\left[c_1\cos(\mu\ln x)+c_2\sin(\mu\ln x)\right]$.

El intervalo de validez es $x>0$, donde $x^r=e^{r\ln x}$ está bien definida para todo $r$ complejo. Para $x<0$ se trabaja con $|x|$ y las potencias complejas exigen elegir una rama del logaritmo.

La ecuación es lineal y homogénea; no presenta soluciones singulares ni soluciones perdidas.
