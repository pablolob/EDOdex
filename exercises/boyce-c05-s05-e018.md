---
title: "Boyce 5.5 Ejercicio 18"
exercise-id: boyce-c05-s05-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
  - analizar-cualitativamente.comportamiento-asintotico
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 3
  technical: 2
source-images:
  - c05s05i01-p278.png
---

## Enunciado

Halle todos los valores de $\beta$ para los que todas las soluciones de $x^2 y'' + \beta y = 0$ tienden a cero cuando $x \to 0$.

## Solución

Los valores pedidos son todos los reales positivos:

$$
\boxed{\beta>0.}
$$

## Resolución

La ecuación es **lineal**, **homogénea**, de **segundo orden** y de tipo **Cauchy-Euler** (equidimensional). El único punto singular es $x=0$, donde se anula el coeficiente de $y''$. Se buscan soluciones de la forma $y=x^r$ para $x\ne 0$, con derivadas

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
x^2\cdot r(r-1)x^{r-2}+\beta x^r
  = x^r\left[r(r-1)+\beta\right]=0.
$$

Como $x^r\ne 0$, se obtiene la **ecuación característica**

$$
r^2-r+\beta=0,
$$

cuyas raíces son

$$
r=\frac{1\pm\sqrt{1-4\beta}}{2}.
$$

El comportamiento de las soluciones cuando $x\to 0$ depende del signo del discriminante $1-4\beta$. En $x<0$ el análisis es idéntico al escribirlo con $|x|$, de modo que basta estudiar $x\to 0^+$.

**Caso $\beta<\frac14$.** Las raíces son reales y distintas, $r_1>r_2$, con $r_1+r_2=1$. La solución general es $y=C_1x^{r_1}+C_2x^{r_2}$. Como $x^r\to 0$ si $r>0$ y $x^r\to\infty$ si $r<0$, todas las soluciones tienden a cero si y solo si $r_2>0$. La condición

$$
r_2=\frac{1-\sqrt{1-4\beta}}{2}>0
$$

equivale a $\sqrt{1-4\beta}<1$, es decir, a $\beta>0$. Por tanto este caso aporta el intervalo $0<\beta<\frac14$. Para $\beta\le 0$ falla: en $\beta=0$ la raíz $r_2=0$ produce la solución constante $y=C_2$, y para $\beta<0$ se tiene $r_2<0$, con $x^{r_2}\to\infty$.

**Caso $\beta=\frac14$.** Hay una raíz doble $r=\frac12$. Las soluciones fundamentales son $x^{1/2}$ y $x^{1/2}\ln x$, y ambas tienden a cero porque el factor $x^{1/2}$ domina al crecimiento logarítmico. Este valor es admisible.

**Caso $\beta>\frac14$.** Las raíces son complejas conjugadas,

$$
r=\frac12\pm i\mu,\qquad \mu=\frac{\sqrt{4\beta-1}}{2}>0.
$$

Las soluciones fundamentales son $x^{1/2}\cos(\mu\ln x)$ y $x^{1/2}\sin(\mu\ln x)$. Aunque oscilan sin límite de frecuencia, su amplitud $x^{1/2}$ tiende a cero. Todas las soluciones tienden a cero.

Los tres casos se resumen en la condición $\beta>0$.

## Observaciones

La exigencia es sobre **todas** las soluciones, no sobre una en particular. Por eso $\beta=0$ queda excluido: la solución constante $y=C_2$ no tiende a cero. El resultado no distingue el lado desde el que $x\to 0$, porque la ecuación solo depende de $x^2$ y el análisis se repite con $|x|$.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ la sustitución $x=e^t$ convierte la ecuación de Cauchy-Euler en la de coeficientes constantes $\ddot y-\dot y+\beta y=0$, cuya ecuación característica es la misma, $\lambda^2-\lambda+\beta=0$. La condición $x\to 0^+$ corresponde a $t\to-\infty$, y las soluciones $e^{\lambda t}$ tienden a cero en ese límite cuando $\operatorname{Re}\lambda>0$. Como la suma de las raíces es $1$, ambas tienen parte real positiva si y solo si la menor de ellas es positiva, lo que vuelve a dar $\beta>0$.
