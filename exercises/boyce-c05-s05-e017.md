---
title: "Boyce 5.5 Ejercicio 17"
exercise-id: boyce-c05-s05-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 17"
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
  conceptual: 2
  technical: 1
source-images:
  - c05s05i01-p278.png
---

## Enunciado

Halle todos los valores de $\alpha$ para los que todas las soluciones de $x^2 y'' + \alpha xy' + (5/2)y = 0$ tienden a cero cuando $x \to 0$.

## Solución

Todas las soluciones tienden a cero cuando $x\to 0$ si y solo si

$$
\alpha<1,
$$

es decir, $\alpha\in(-\infty,1)$.

## Resolución

La ecuación es de **segundo orden**, **lineal**, **homogénea** y de tipo **Cauchy-Euler** (equidimensional). El coeficiente de $y''$ se anula en $x=0$, único punto singular.

Para $x>0$ se propone $y=x^r$, con derivadas

$$
y'=rx^{r-1},\qquad y''=r(r-1)x^{r-2}.
$$

Al sustituir en la ecuación,

$$
\begin{aligned}
x^2\,r(r-1)x^{r-2}+\alpha x\,rx^{r-1}+\frac{5}{2}x^r
  &= x^r\left[r(r-1)+\alpha r+\frac{5}{2}\right] \\
  &= x^r\left[r^2+(\alpha-1)r+\frac{5}{2}\right]=0.
\end{aligned}
$$

Como $x^r\ne 0$, la **ecuación característica** (o indicial) es

$$
r^2+(\alpha-1)r+\frac{5}{2}=0.
$$

Sean $r_1$ y $r_2$ sus raíces. Las relaciones de Vieta dan

$$
r_1+r_2=1-\alpha,\qquad r_1r_2=\frac{5}{2}.
$$

El comportamiento de las soluciones cuando $x\to 0^+$ queda determinado por la parte real de las raíces. Cada solución fundamental tiende a cero si y solo si $\operatorname{Re}(r)>0$: para raíces reales, $x^r\to 0$ solo si $r>0$; para una raíz doble aparece el factor $x^r\ln x$, que también tiende a cero si $r>0$; y para raíces complejas $r=a\pm bi$, las soluciones $x^a\cos(b\ln x)$ y $x^a\sin(b\ln x)$ tienden a cero si y solo si $a>0$. Por tanto, todas las soluciones tienden a cero si y solo si ambas raíces tienen parte real positiva.

Para una cuadrática con coeficientes reales, ambas raíces tienen parte real positiva si y solo si su suma y su producto son positivos. Si las raíces son complejas conjugadas $a\pm bi$, la parte real es $a=(r_1+r_2)/2$ y el producto $a^2+b^2$ es positivo; si son reales, ambas positivas equivale a suma y producto positivos.

Aquí el producto es $r_1r_2=5/2>0$ para todo $\alpha$. La condición se reduce a la suma:

$$
r_1+r_2=1-\alpha>0 \iff \alpha<1.
$$

Para $\alpha=1$ la ecuación característica es $r^2+\frac{5}{2}=0$, con raíces $r=\pm i\sqrt{5/2}$; las soluciones oscilan y no tienen límite. Para $\alpha>1$ ambas raíces tienen parte real negativa y las soluciones son no acotadas cuando $x\to 0^+$. Por lo tanto, el conjunto de valores pedido es $\alpha<1$.

## Observaciones

El único punto singular es $x=0$. El análisis es idéntico cuando $x\to 0^-$: allí la solución general se escribe con $|x|$ en lugar de $x$, y la condición sobre la parte real de las raíces no cambia.

En $\alpha=1$ la solución general es $y=C_1\cos\!\left(\sqrt{5/2}\,\ln x\right)+C_2\sin\!\left(\sqrt{5/2}\,\ln x\right)$, acotada pero sin límite en el origen.

### Método alternativo: cambio a coeficientes constantes

Para $x>0$ el cambio $t=\ln x$ transforma la ecuación de Cauchy-Euler en la de coeficientes constantes

$$
\ddot y+(\alpha-1)\dot y+\frac{5}{2}y=0,
$$

cuya ecuación característica $\lambda^2+(\alpha-1)\lambda+\frac{5}{2}=0$ tiene las mismas raíces que la indicial. Como $x\to 0^+$ corresponde a $t\to-\infty$, las soluciones $e^{\lambda t}$ tienden a cero si y solo si $\operatorname{Re}(\lambda)>0$, es decir, $1-\alpha>0$, de donde $\alpha<1$.
