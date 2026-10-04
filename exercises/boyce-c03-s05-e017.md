---
title: "Boyce 3.5 Ejercicio 17"
exercise-id: boyce-c03-s05-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-coeficientes-constantes
  - verificar.solucion
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - derivacion.producto
  - calculo-avanzado.derivadas-parciales
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c03s05i01-p175.png
  - c03s05i02-p176.png
---

## Enunciado

a) Si $ar^2 + br + c = 0$ tiene las raíces iguales $r_1$, demuestre que

$$L[e^{rx}] = a(e^{rx})'' + b(e^{rx})' + ce^{rx} = a(r - r_1)^2e^{rx}. \quad \text{(i)}$$

Dado que el segundo miembro de (i) es cero cuando $r = r_1$, se concluye que $\exp(r_1x)$ es una solución de $L[y] = ay'' + by' + cy = 0$.

b) Derive (i) con respecto a $r$ e intercambie la derivación con respecto a $r$ y con respecto a $x$ demostrando en consecuencia que

$$\frac{\partial}{\partial r} L[e^{rx}] = L\left[\frac{\partial}{\partial r} e^{rx}\right] = L[xe^{rx}] = ax e^{rx}(r - r_1)^2 + 2a e^{rx}(r - r_1). \quad \text{(ii)}$$

Dado que el segundo miembro de (ii) es cero cuando $r = r_1$, concluya que $x \exp(r_1x)$ también es una solución de $L[y] = 0$.

## Solución

Con $L[y]=ay''+by'+cy$ y $r_1$ raíz doble de $ar^2+br+c=0$, la sustitución $y=e^{rx}$ da

$$
L[e^{rx}]=(ar^2+br+c)e^{rx}=a(r-r_1)^2e^{rx}.
$$

Al evaluar en $r=r_1$, el miembro derecho se anula; por tanto, $e^{r_1x}$ resuelve $L[y]=0$.

La derivación de (i) respecto de $r$, con el intercambio de derivadas, conduce a

$$
L[xe^{rx}]=axe^{rx}(r-r_1)^2+2ae^{rx}(r-r_1),
$$

cuyo miembro derecho también se anula en $r=r_1$. En consecuencia, $xe^{r_1x}$ resuelve $L[y]=0$.

## Resolución

Se escribe el operador lineal de coeficientes constantes

$$
L[y]=ay''+by'+cy.
$$

**Parte a).** Al sustituir $y=e^{rx}$ resultan $(e^{rx})'=re^{rx}$ y $(e^{rx})''=r^2e^{rx}$, de modo que

$$
L[e^{rx}]=ar^2e^{rx}+bre^{rx}+ce^{rx}=(ar^2+br+c)e^{rx}.
$$

Como $r_1$ es una raíz doble de la **ecuación característica** $ar^2+br+c=0$, el polinomio se factoriza como

$$
ar^2+br+c=a(r-r_1)^2.
$$

En efecto, por las relaciones entre coeficientes y raíces, la suma de las raíces es $2r_1=-b/a$, luego $b=-2ar_1$, y el producto es $r_1^2=c/a$, luego $c=ar_1^2$. Al desarrollar,

$$
a(r-r_1)^2=ar^2-2ar_1r+ar_1^2=ar^2+br+c.
$$

Queda así demostrada (i):

$$
L[e^{rx}]=a(r-r_1)^2e^{rx}.
$$

En $r=r_1$ el miembro derecho es cero, por lo que $L[e^{r_1x}]=0$; es decir, $\exp(r_1x)$ es solución de $L[y]=0$.

**Parte b).** Se deriva (i) respecto del parámetro $r$. Los coeficientes $a$, $b$ y $c$ son constantes y $e^{rx}$ admite derivadas mixtas continuas, así que pueden intercambiarse las derivadas con respecto a $r$ y a $x$:

$$
\frac{\partial}{\partial r}L[e^{rx}]
=a\frac{\partial}{\partial r}\bigl[(e^{rx})''\bigr]
+b\frac{\partial}{\partial r}\bigl[(e^{rx})'\bigr]
+c\frac{\partial}{\partial r}\bigl[e^{rx}\bigr]
=L\left[\frac{\partial}{\partial r}e^{rx}\right].
$$

Puesto que $\dfrac{\partial}{\partial r}e^{rx}=xe^{rx}$, el miembro izquierdo es

$$
\frac{\partial}{\partial r}L[e^{rx}]=L[xe^{rx}].
$$

Al derivar el miembro derecho de (i) con la **regla del producto** se obtiene

$$
\frac{\partial}{\partial r}\bigl[a(r-r_1)^2e^{rx}\bigr]
=a\bigl[2(r-r_1)e^{rx}+x(r-r_1)^2e^{rx}\bigr]
=2ae^{rx}(r-r_1)+axe^{rx}(r-r_1)^2.
$$

La igualdad de ambos resultados es (ii):

$$
L[xe^{rx}]=axe^{rx}(r-r_1)^2+2ae^{rx}(r-r_1).
$$

En $r=r_1$ los dos sumandos se anulan, por lo que $L[xe^{r_1x}]=0$; es decir, $x\exp(r_1x)$ es solución de $L[y]=0$.

## Observaciones

El intercambio $\dfrac{\partial}{\partial r}L[e^{rx}]=L\left[\dfrac{\partial}{\partial r}e^{rx}\right]$ es válido porque $a$, $b$ y $c$ son constantes y $e^{rx}$ tiene derivadas mixtas continuas; el teorema de Clairaut-Schwarz permite entonces conmutar las derivadas respecto de $r$ y de $x$.

El argumento muestra que, en el caso de raíz doble, tanto $e^{r_1x}$ como $xe^{r_1x}$ resuelven $L[y]=0$. La segunda solución surge de derivar la identidad respecto del parámetro $r$ y evaluar en $r=r_1$.
