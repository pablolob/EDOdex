---
title: "Zill Repaso C2 Ejercicio 15"
exercise-id: zill-c02-sr-e015
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 15"
language: es
competencies:
  - analizar-cualitativamente.estabilidad
  - analizar-cualitativamente.puntos-equilibrio
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
  - estabilidad
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 2
  technical: 1
---

## Enunciado

El número 0 es un punto crítico de la ecuación diferencial autónoma $dx/dt = x^n$, donde $n$ es un entero positivo. ¿Para qué valores de $n$ es 0 asintóticamente estable? ¿Semiestable? ¿Inestable? Repita para la ecuación diferencial $dx/dt = -x^n$.

## Solución

La ecuación tiene el único punto crítico $x=0$. Para $dx/dt=x^{n}$ el punto es **inestable** cuando $n$ es impar y **semiestable** cuando $n$ es par; nunca es asintóticamente estable. Para $dx/dt=-x^{n}$ el punto es **asintóticamente estable** cuando $n$ es impar y **semiestable** cuando $n$ es par; nunca es inestable.

$$
\begin{array}{c|c|c}
 & n\ \text{impar} & n\ \text{par}\\ \hline
\dfrac{dx}{dt}=x^{n} & \text{inestable} & \text{semiestable}\\[6pt]
\dfrac{dx}{dt}=-x^{n} & \text{asintóticamente estable} & \text{semiestable}
\end{array}
$$

## Resolución

La ecuación $dx/dt=x^{n}$ es **autónoma**: el miembro derecho depende solo de $x$. Se escribe $f(x)=x^{n}$. El único punto crítico es $x=0$, pues $f(x)$ solo se anula allí para $x\in\mathbb{R}$. El signo de $f$ a cada lado de $x=0$ determina si la solución crece ($f>0$) o decrece ($f<0$); con ello queda fijado si la solución se acerca o se aleja del punto crítico.

La función $x(t)\equiv 0$ es una solución de equilibrio. Por la unicidad de soluciones de una ecuación autónoma con $f$ polinómica, ninguna otra solución alcanza $x=0$ en tiempo finito; las ramas que se aproximan lo hacen de forma asintótica.

**Ecuación $dx/dt=x^{n}$.**

Si $n$ es par, $x^{n}>0$ para todo $x\ne 0$. Entonces $f(x)>0$ a ambos lados y toda solución no constante es creciente. Partiendo de $x_0<0$, la solución crece y se aproxima a $0$; partiendo de $x_0>0$, crece y se aleja. El punto $x=0$ es **semiestable**.

Si $n$ es impar, $x^{n}$ tiene el mismo signo que $x$. Partiendo de $x_0>0$, $f>0$ y la solución crece alejándose; partiendo de $x_0<0$, $f<0$ y la solución decrece alejándose. El punto $x=0$ es **inestable**.

**Ecuación $dx/dt=-x^{n}$.**

Si $n$ es impar, $-x^{n}$ tiene signo opuesto a $x$: para $x>0$ es negativa y la solución decrece hacia $0$; para $x<0$ es positiva y la solución crece hacia $0$. Ambas ramas se aproximan al punto crítico, que es **asintóticamente estable**.

Si $n$ es par, $-x^{n}<0$ para todo $x\ne 0$. Toda solución no constante es decreciente. Partiendo de $x_0>0$, decrece y se aproxima a $0$; partiendo de $x_0<0$, decrece y se aleja. El punto $x=0$ es **semiestable**.

Para $n=1$ se recuperan los casos conocidos $x'=x$ (inestable) y $x'=-x$ (asintóticamente estable), que confirman el patrón de $n$ impar.

## Observaciones

El criterio de la derivada clasifica $x=0$ por el signo de $f'(0)$. Aquí $f'(x)=n\,x^{n-1}$ para $dx/dt=x^{n}$, con signo opuesto para $dx/dt=-x^{n}$. En $x=0$ resulta $f'(0)=1$ si $n=1$, y $f'(0)=0$ si $n\ge 2$. En este último caso el criterio es inconcluso y la clasificación exige el análisis de signo; por eso el argumento por paridad es el general.

La **semiestabilidad** significa que las soluciones se aproximan a $x=0$ desde un lado y se alejan por el otro. En los casos inestables, las ramas que se alejan pueden escapar en tiempo finito; esto no altera la clasificación, que es local alrededor del punto crítico.
