---
title: "Zill Repaso C1 Ejercicio 5"
exercise-id: zill-c01-sr-e005
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 5"
topics:
  - fundamentos
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 5 y 6.**

En los problemas 5 y 6 calcule $y'$ y $y''$ y después combine estas derivadas con $y$ como una ecuación diferencial lineal de segundo orden que no contiene los símbolos $c_1$ y $c_2$ y que tiene la forma $F(y, y', y'') = 0$. Estos símbolos $c_1$ y $c_2$ representan constantes.

5. $y = c_1 e^x + c_2 x e^x$

## Solución

La ecuación diferencial es

$$
y'' - 2y' + y = 0.
$$

## Resolución

Se deriva $y = c_1 e^x + c_2 x e^x$ dos veces:

$$
\begin{aligned}
y' &= c_1 e^x + c_2 e^x + c_2 x e^x = c_1 e^x + c_2 (x + 1) e^x, \\[4pt]
y'' &= c_1 e^x + c_2 e^x + c_2 (x + 1) e^x = c_1 e^x + c_2 (x + 2) e^x.
\end{aligned}
$$

Se buscan coeficientes $A$, $B$, $C$ tales que $A y'' + B y' + C y = 0$ para todo $x$, independientemente de $c_1$ y $c_2$. Se prueban combinaciones. Restando $y'$ de $y''$:

$$
y'' - y' = c_2 e^x.
$$

Restando $y$ de $y'$:

$$
y' - y = c_2 e^x.
$$

Ambas diferencias coinciden, por lo que $y'' - y' = y' - y$. Reordenando:

$$
y'' - 2y' + y = 0.
$$

Se verifica por sustitución directa:

$$
\begin{aligned}
y'' - 2y' + y &= \bigl[c_1 + c_2(x+2)\bigr]e^x - 2\bigl[c_1 + c_2(x+1)\bigr]e^x + \bigl[c_1 + c_2 x\bigr]e^x \\
&= \bigl[c_1 + c_2 x + 2c_2 - 2c_1 - 2c_2 x - 2c_2 + c_1 + c_2 x\bigr]e^x = 0.
\end{aligned}
$$

## Observaciones

La raíz doble $r = 1$ de la ecuación característica $r^2 - 2r + 1 = 0$ produce la solución general $y = c_1 e^x + c_2 x e^x$. El factor $x$ en el segundo término es característico de raíces repetidas.
