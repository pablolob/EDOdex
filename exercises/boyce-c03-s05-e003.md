---
title: "Boyce 3.5 Ejercicio 3"
exercise-id: boyce-c03-s05-e003
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 3"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver.lineal.homogenea.coeficientes-constantes
hidden-competencies:
  - clasificar.coeficientes-constantes
  - seleccionar.metodo.coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - polinomios.resolver
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s05i01-p175.png
---

## Enunciado

En cada uno de los problemas 1 a 10, halle la solución general de la ecuación diferencial dada.

3. $4y'' - 4y' - 3y = 0$

## Solución

La ecuación es **de segundo orden**, **lineal**, **homogénea** y con **coeficientes constantes**. Su ecuación característica tiene dos raíces reales distintas, y la solución general es

$$
y(x) = C_1 e^{3x/2} + C_2 e^{-x/2},
$$

válida para todo $x \in \mathbb{R}$.

## Resolución

Se busca la solución general de

$$
4y'' - 4y' - 3y = 0.
$$

Al ser una ecuación de coeficientes constantes, se propone $y = e^{rx}$, de donde $y' = r e^{rx}$ y $y'' = r^2 e^{rx}$. Al sustituir y dividir entre $e^{rx} \neq 0$ resulta la **ecuación característica**

$$
4r^2 - 4r - 3 = 0.
$$

El polinomio se factoriza como

$$
4r^2 - 4r - 3 = (2r - 3)(2r + 1),
$$

por lo que sus raíces son

$$
r_1 = \frac{3}{2}, \qquad r_2 = -\frac{1}{2}.
$$

Son reales y distintas, así que cada una aporta una solución exponencial y ambas son linealmente independientes. La solución general es la combinación lineal

$$
y(x) = C_1 e^{3x/2} + C_2 e^{-x/2}.
$$

La sustitución confirma el resultado: $4\left(\tfrac94\right) - 4\left(\tfrac32\right) - 3 = 9 - 6 - 3 = 0$ para $r_1$, y $4\left(\tfrac14\right) - 4\left(-\tfrac12\right) - 3 = 1 + 2 - 3 = 0$ para $r_2$. Al no haber condiciones iniciales, $C_1$ y $C_2$ quedan arbitrarias, y la solución está definida para todo $x \in \mathbb{R}$.

## Observaciones

Las raíces de la ecuación característica son reales y distintas, de modo que la solución general combina dos exponenciales reales y no aparecen soluciones singulares. La misma ecuación característica se resuelve con la fórmula general: $r = \frac{4 \pm \sqrt{16 + 48}}{8} = \frac{4 \pm 8}{8}$. Como $r_1 > 0$, el término $C_1 e^{3x/2}$ domina cuando $x \to \infty$.
