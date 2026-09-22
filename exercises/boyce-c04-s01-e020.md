---
title: "Boyce 4.1 Ejercicio 20"
exercise-id: boyce-c04-s01-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies:
  - clasificar.linealidad
  - verificar.solucion
prerequisitos:
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s01i02-p223.png
---

## Enunciado

Compruebe que el operador diferencial definido por

$$\mathcal{L}[y] = y^{(n)} + p_1(x)y^{(n-1)} + \cdots + p_n(x)y$$

es un operador diferencial lineal. Es decir, demuestre que

$$\mathcal{L}[c_1 y_1 + c_2 y_2] = c_1 \mathcal{L}[y_1] + c_2 \mathcal{L}[y_2],$$

en donde $y_1$ y $y_2$ son funciones diferenciables $n$ veces y $c_1$ y $c_2$ son constantes arbitrarias. De donde, demuestre que si $y_1, y_2, \dots, y_n$ son soluciones de $\mathcal{L}[y] = 0$, entonces la combinación lineal $c_1 y_1 + \cdots + c_n y_n$ también es una solución de $\mathcal{L}[y] = 0$.

## Solución

El operador $\mathcal{L}$ es **lineal**. Para cualesquiera funciones $y_1$ y $y_2$ diferenciables $n$ veces y constantes arbitrarias $c_1$ y $c_2$ se cumple

$$
\mathcal{L}[c_1 y_1 + c_2 y_2] = c_1 \mathcal{L}[y_1] + c_2 \mathcal{L}[y_2].
$$

En consecuencia, si $\mathcal{L}[y_i] = 0$ para $i = 1, \dots, n$, toda combinación lineal satisface

$$
\mathcal{L}[c_1 y_1 + \cdots + c_n y_n] = 0.
$$

## Resolución

El operador se escribe de forma compacta introduciendo el coeficiente $p_0(x) \equiv 1$:

$$
\mathcal{L}[y] = \sum_{k=0}^{n} p_k(x)\,y^{(n-k)}.
$$

La derivación de orden $m$ es lineal. Para constantes $c_1$ y $c_2$ y funciones diferenciables $m$ veces,

$$
(c_1 y_1 + c_2 y_2)^{(m)} = c_1 y_1^{(m)} + c_2 y_2^{(m)}.
$$

Al sustituir $c_1 y_1 + c_2 y_2$ en el operador y aplicar esa linealidad término a término resulta

$$
\begin{aligned}
\mathcal{L}[c_1 y_1 + c_2 y_2]
&= \sum_{k=0}^{n} p_k(x)\,(c_1 y_1 + c_2 y_2)^{(n-k)} \\
&= \sum_{k=0}^{n} p_k(x)\left[c_1 y_1^{(n-k)} + c_2 y_2^{(n-k)}\right] \\
&= c_1 \sum_{k=0}^{n} p_k(x)\,y_1^{(n-k)} + c_2 \sum_{k=0}^{n} p_k(x)\,y_2^{(n-k)} \\
&= c_1 \mathcal{L}[y_1] + c_2 \mathcal{L}[y_2].
\end{aligned}
$$

Esto demuestra que $\mathcal{L}$ es un operador diferencial lineal.

Para extender el resultado a $n$ sumandos se procede por inducción sobre el número de términos. El caso de dos términos es la linealidad recién probada. Si se supone el resultado cierto para $m-1$ términos, entonces

$$
\begin{aligned}
\mathcal{L}\left[\sum_{i=1}^{m} c_i y_i\right]
&= \mathcal{L}\left[\sum_{i=1}^{m-1} c_i y_i + c_m y_m\right] \\
&= \mathcal{L}\left[\sum_{i=1}^{m-1} c_i y_i\right] + c_m \mathcal{L}[y_m] \\
&= \sum_{i=1}^{m} c_i \mathcal{L}[y_i],
\end{aligned}
$$

donde el último paso usa la hipótesis de inducción. Para $m = n$ se obtiene

$$
\mathcal{L}[c_1 y_1 + \cdots + c_n y_n] = c_1 \mathcal{L}[y_1] + \cdots + c_n \mathcal{L}[y_n].
$$

Si cada $y_i$ es solución de $\mathcal{L}[y] = 0$, el miembro derecho es $c_1 \cdot 0 + \cdots + c_n \cdot 0 = 0$. Por tanto, la combinación lineal $c_1 y_1 + \cdots + c_n y_n$ también es solución de $\mathcal{L}[y] = 0$.

## Observaciones

La condición del enunciado reúne las dos propiedades de la linealidad: la aditividad, $\mathcal{L}[y_1 + y_2] = \mathcal{L}[y_1] + \mathcal{L}[y_2]$, y la homogeneidad, $\mathcal{L}[c\,y] = c\,\mathcal{L}[y]$. La primera se recupera con $c_1 = c_2 = 1$ y la segunda con $c_2 = 0$.

La linealidad solo exige que las derivadas y los productos $p_k(x)\,y^{(n-k)}$ estén definidos; no requiere que los coeficientes $p_k$ sean continuos. La continuidad de los coeficientes interviene más adelante, en los teoremas de existencia y unicidad.

El resultado es el **principio de superposición**, base de la estructura de la solución general $y = y_c + y_p$ de las ecuaciones lineales.
