---
title: "Boyce 5.5 Ejercicio 23"
exercise-id: boyce-c05-s05-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.5, ejercicio 23"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - frobenius
competencies:
  - resolver-analiticamente.cauchy-euler
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - derivacion.regla-cadena
  - derivacion.producto
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c05s05i02-p279.png
---

## Enunciado

**Transformación a una ecuación con coeficientes constantes.** La ecuación de Euler $x^2 y'' + \alpha x y' + \beta y = 0$ se puede reducir a una ecuación con coeficientes constantes mediante un cambio de la variable independiente. Sea $x = e^z$ o $z = \ln x$, y considere sólo el intervalo $x > 0$.

a) Demuestre que

$$\frac{dy}{dx} = \frac{1}{x}\frac{dy}{dz} \quad \text{y} \quad \frac{d^2 y}{dx^2} = \frac{1}{x^2}\frac{d^2 y}{dz^2} - \frac{1}{x^2}\frac{dy}{dz}$$

b) Demuestre que la ecuación de Euler queda

$$\frac{d^2 y}{dz^2} + (\alpha - 1)\frac{dy}{dz} + \beta y = 0$$

Si por $r_1$ y $r_2$ se denotan las raíces de $r^2 + (\alpha - 1)r + \beta = 0$, demuestre que

c) si $r_1$ y $r_2$ son reales y diferentes, entonces

$$y = c_1 e^{r_1 z} + c_2 e^{r_2 z} = c_1 x^{r_1} + c_2 x^{r_2}$$

d) si $r_1$ y $r_2$ son reales e iguales, entonces

$$y = (c_1 + c_2 z)e^{r_1 z} = (c_1 + c_2 \ln x)x^{r_1}$$

e) si $r_1$ y $r_2$ son complejos conjugados, $r_1 = \lambda + i\mu$, entonces

$$y = e^{\lambda z}[c_1 \cos(\mu z) + c_2 \sin(\mu z)] = x^\lambda [c_1 \cos(\mu \ln x) + c_2 \sin(\mu \ln x)]$$

## Solución

Con el cambio $x=e^z$, es decir $z=\ln x$ para $x>0$, se cumple

$$
\frac{dy}{dx}=\frac{1}{x}\frac{dy}{dz}, \qquad
\frac{d^2y}{dx^2}=\frac{1}{x^2}\left(\frac{d^2y}{dz^2}-\frac{dy}{dz}\right),
$$

y la ecuación de Euler se transforma en la ecuación con coeficientes constantes

$$
\frac{d^2y}{dz^2}+(\alpha-1)\frac{dy}{dz}+\beta y=0.
$$

Si $r_1$ y $r_2$ son las raíces de $r^2+(\alpha-1)r+\beta=0$, la solución general de la ecuación de Euler en $x>0$ es

$$
y=
\begin{cases}
c_1x^{r_1}+c_2x^{r_2}, & r_1\ne r_2 \text{ reales}, \\[4pt]
(c_1+c_2\ln x)\,x^{r_1}, & r_1=r_2, \\[4pt]
x^{\lambda}\left[c_1\cos(\mu\ln x)+c_2\sin(\mu\ln x)\right], & r_{1,2}=\lambda\pm i\mu.
\end{cases}
$$

## Resolución

El cambio $x=e^z$ es una biyección de $z\in\mathbb{R}$ en $x>0$, con inversa $z=\ln x$. Cada solución $y$ se lee entonces como función de $z$ a través de $y(e^z)$.

### Apartado a)

La **regla de la cadena** aplicada a $z=\ln x$ da

$$
\frac{dy}{dx}=\frac{dy}{dz}\frac{dz}{dx}=\frac{dy}{dz}\cdot\frac{1}{x}=\frac{1}{x}\frac{dy}{dz}.
$$

Para la segunda derivada se deriva el producto $\dfrac{1}{x}\dfrac{dy}{dz}$ respecto de $x$ con la **regla del producto**:

$$
\frac{d^2y}{dx^2}=\frac{d}{dx}\left(\frac{1}{x}\frac{dy}{dz}\right)
=-\frac{1}{x^2}\frac{dy}{dz}+\frac{1}{x}\frac{d}{dx}\left(\frac{dy}{dz}\right).
$$

El factor restante vuelve a calcularse con la regla de la cadena:

$$
\frac{d}{dx}\left(\frac{dy}{dz}\right)=\frac{d^2y}{dz^2}\frac{dz}{dx}=\frac{1}{x}\frac{d^2y}{dz^2}.
$$

Al sustituir,

$$
\frac{d^2y}{dx^2}=-\frac{1}{x^2}\frac{dy}{dz}+\frac{1}{x^2}\frac{d^2y}{dz^2}
=\frac{1}{x^2}\frac{d^2y}{dz^2}-\frac{1}{x^2}\frac{dy}{dz}.
$$

### Apartado b)

De los resultados anteriores se despejan las expresiones útiles para la ecuación de Euler:

$$
x\frac{dy}{dx}=\frac{dy}{dz}, \qquad
x^2\frac{d^2y}{dx^2}=\frac{d^2y}{dz^2}-\frac{dy}{dz}.
$$

Al sustituir en $x^2 y''+\alpha x y'+\beta y=0$,

$$
\left(\frac{d^2y}{dz^2}-\frac{dy}{dz}\right)+\alpha\frac{dy}{dz}+\beta y=0.
$$

Agrupando los términos que contienen $\dfrac{dy}{dz}$,

$$
\frac{d^2y}{dz^2}+(\alpha-1)\frac{dy}{dz}+\beta y=0.
$$

La ecuación resultante es **lineal**, **homogénea**, de **segundo orden** y con **coeficientes constantes**, con ecuación característica

$$
r^2+(\alpha-1)r+\beta=0.
$$

### Apartados c), d) y e)

Como $e^{rz}=(e^z)^r=x^r$ para $x>0$, cada solución de la ecuación transformada se traduce directamente a la variable original. En los tres casos la solución general de una ecuación lineal homogénea de segundo orden con coeficientes constantes tiene dimensión dos.

**Apartado c)** Si $r_1\ne r_2$ son reales, $e^{r_1z}$ y $e^{r_2z}$ son linealmente independientes, de modo que

$$
y=c_1e^{r_1z}+c_2e^{r_2z}=c_1x^{r_1}+c_2x^{r_2}.
$$

**Apartado d)** Si $r_1=r_2=r$, las dos soluciones independientes son $e^{rz}$ y $ze^{rz}$. Entonces

$$
y=(c_1+c_2z)e^{rz}=(c_1+c_2\ln x)\,x^{r}.
$$

**Apartado e)** Si $r_{1,2}=\lambda\pm i\mu$, con $\mu\ne 0$, la solución real de la ecuación transformada es

$$
y=e^{\lambda z}\left[c_1\cos(\mu z)+c_2\sin(\mu z)\right].
$$

Como $e^{\lambda z}=x^{\lambda}$ y $z=\ln x$,

$$
y=x^{\lambda}\left[c_1\cos(\mu\ln x)+c_2\sin(\mu\ln x)\right].
$$

## Observaciones

El cambio $x=e^z$ solo está definido para $x>0$, que es el intervalo que fija el enunciado. En $x<0$ puede emplearse $x=-e^z$ y se obtiene la misma ecuación característica.

Los tres casos son exhaustivos porque el polinomio característico tiene coeficientes reales: sus raíces son reales distintas, reales repetidas o complejas conjugadas. La ecuación de Euler es lineal y homogénea, por lo que no tiene soluciones singulares.

### Método alternativo: sustitución directa $y=x^r$

La misma conclusión se obtiene proponiendo $y=x^r$ en la ecuación de Euler. Con $y'=rx^{r-1}$ y $y''=r(r-1)x^{r-2}$,

$$
x^2r(r-1)x^{r-2}+\alpha x\,rx^{r-1}+\beta x^r
=\left[r(r-1)+\alpha r+\beta\right]x^r=0,
$$

de donde surge la ecuación indicial $r^2+(\alpha-1)r+\beta=0$, idéntica a la característica. Este camino no necesita el cambio de variable, pero el de $x=e^z$ explica por qué la ecuación admite coeficientes constantes.
