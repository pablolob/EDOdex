---
title: "Boyce 5.5 Ejercicio 34"
exercise-id: boyce-c05-s05-e034
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 34"
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

34. $x^2 y'' + xy' - 2iy = 0$

## Solución

La ecuación de Euler es homogénea de segundo orden con coeficientes complejos. Su solución general, válida en $x>0$, es

$$
y=c_1x^{1+i}+c_2x^{-1-i},
$$

donde $c_1$ y $c_2$ son constantes complejas arbitrarias.

## Resolución

La ecuación $x^2y''+xy'-2iy=0$ es una **ecuación de Euler** de segundo orden, homogénea y con coeficientes complejos. Se buscan soluciones de la forma $y=x^r$, con $r$ posiblemente complejo. Para $x>0$ la potencia se define mediante $x^r=e^{r\ln x}$, de modo que

$$
y'=rx^{r-1}, \qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\,r(r-1)x^{r-2}+x\,rx^{r-1}-2ix^r
  &=\left[r(r-1)+r-2i\right]x^r \\
  &=\left(r^2-2i\right)x^r=0.
\end{aligned}
$$

Como $x^r\ne 0$ para $x>0$, el factor entre corchetes debe anularse. Resulta la ecuación característica

$$
r^2=2i.
$$

Para resolverla se escribe el miembro derecho en forma polar: $2i=2e^{i\pi/2}$. Sus raíces cuadradas tienen módulo $\sqrt{2}$ y argumentos $\pi/4$ y $\pi/4+\pi$, esto es,

$$
r_1=\sqrt{2}\,e^{i\pi/4}=1+i, \qquad r_2=\sqrt{2}\,e^{i5\pi/4}=-1-i.
$$

Las raíces son distintas, $r_1\ne r_2$, de modo que $x^{1+i}$ y $x^{-1-i}$ son linealmente independientes en $x>0$. La solución general es

$$
y=c_1x^{1+i}+c_2x^{-1-i}.
$$

**Comprobación.** Para $y_1=x^{1+i}$ se tiene $y_1'=(1+i)x^{i}$ y $y_1''=(1+i)i\,x^{i-1}=(i-1)x^{i-1}$. Entonces

$$
x^2y_1''+xy_1'-2iy_1
=\left[(i-1)+(1+i)-2i\right]x^{1+i}=0.
$$

El mismo cálculo vale para $y_2=x^{-1-i}$, porque $r_2$ también anula la ecuación característica. Por linealidad, cualquier combinación $c_1x^{1+i}+c_2x^{-1-i}$ satisface la ecuación.

## Observaciones

La solución general es de valores complejos. Al ser los coeficientes complejos, las raíces $r_1=1+i$ y $r_2=-1-i$ no son conjugadas, por lo que no procede el paso a la forma real $x^{\lambda}\left[c_1\cos(\mu\ln x)+c_2\sin(\mu\ln x)\right]$.

El intervalo de validez es $x>0$, donde $x^r=e^{r\ln x}$ está bien definida para todo $r$ complejo. Para $x<0$ se trabaja con $|x|$ y las potencias complejas exigen elegir una rama del logaritmo.

La ecuación es lineal y homogénea; no presenta soluciones singulares ni soluciones perdidas.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ la sustitución $x=e^t$, con $t=\ln x$, transforma la ecuación de Euler en una de coeficientes constantes. Como $x^2y''=\ddot{y}-\dot{y}$ y $xy'=\dot{y}$, la ecuación se reduce a $\ddot{y}-2iy=0$, cuya ecuación característica $m^2-2i=0$ tiene las mismas raíces $m=\pm(1+i)$. Así $y=c_1e^{(1+i)t}+c_2e^{-(1+i)t}=c_1x^{1+i}+c_2x^{-1-i}$.
