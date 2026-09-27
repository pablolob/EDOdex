---
title: "Zill Repaso C2 Ejercicio 10"
exercise-id: zill-c02-sr-e010
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 10"
language: es
competencies:
  - resolver-analiticamente.variables-separables
  - aplicar-condiciones.problema-valor-inicial
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

Si una función derivable $y(x)$ satisface $y' = |x|, y(-1) = 2$, entonces $y(x) =$ ________

## Solución

$$
\boxed{y(x)=\frac{x|x|}{2}+\frac{5}{2}}
$$

## Resolución

El miembro derecho de la ecuación depende solo de $x$, por lo que la ecuación es **separable**. Integrando desde la condición inicial,

$$
y(x)=y(-1)+\int_{-1}^{x}|t|\,dt=2+\int_{-1}^{x}|t|\,dt.
$$

La función $\dfrac{t|t|}{2}$ es una primitiva de $|t|$ en todo $\mathbb{R}$. Para $t>0$ su derivada es $t=|t|$; para $t<0$ vale $-\dfrac{t^2}{2}$ y su derivada es $-t=|t|$; en $t=0$ la derivada vale $0=|0|$. Por tanto,

$$
\int_{-1}^{x}|t|\,dt=\frac{x|x|}{2}-\frac{(-1)|-1|}{2}=\frac{x|x|}{2}+\frac{1}{2}.
$$

Al sustituir en la expresión anterior,

$$
y(x)=2+\frac{x|x|}{2}+\frac{1}{2}=\frac{x|x|}{2}+\frac{5}{2}.
$$

La solución satisface $y(-1)=\dfrac{(-1)(1)}{2}+\dfrac{5}{2}=2$ y $y'(x)=|x|$. Como $|x|$ es continua en $\mathbb{R}$, la solución está definida en todo $\mathbb{R}$.

## Observaciones

Como $|x|$ es continua y no depende de $y$, el problema de valor inicial tiene solución única.

### Método alternativo: integración por tramos

El problema también admite una lectura por regiones. En $x<0$ la ecuación es $y'=-x$, cuya solución general es $y=-\dfrac{x^2}{2}+C$; la condición inicial da $C=\dfrac{5}{2}$. En $x\ge 0$ la ecuación es $y'=x$ y la solución general $y=\dfrac{x^2}{2}+C'$. La continuidad de $y$ en $x=0$ impone $C'=\dfrac{5}{2}$. Las dos expresiones se unifican como $y(x)=\dfrac{x|x|}{2}+\dfrac{5}{2}$.
