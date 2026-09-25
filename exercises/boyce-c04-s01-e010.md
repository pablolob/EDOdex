---
title: "Boyce 4.1 Ejercicio 10"
exercise-id: boyce-c04-s01-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 10"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
  - fundamentos
competencies:
  - modelizar.formular-edo
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c04s01i02-p223.png
---

## Enunciado

En cada uno de los problemas 7 a 12 elimine las constantes $c_1, c_2, \ldots, c_n$ entre las expresiones para $y$ y sus derivadas $y', \ldots, y^{(n-1)}$. Con ello, determine la ecuación diferencial que satisface la función dada.

10. $y = c_1 x + c_2 x^2 + c_3 x^3$

## Solución

La ecuación diferencial que satisface la familia es de **tercer orden**, **lineal** y **homogénea**:

$$
x^3 y''' - 3x^2 y'' + 6x y' - 6y = 0.
$$

## Resolución

La familia está formada por

$$
y = c_1 x + c_2 x^2 + c_3 x^3.
$$

Se deriva sucesivamente:

$$
\begin{aligned}
y' &= c_1 + 2c_2 x + 3c_3 x^2, \\
y'' &= 2c_2 + 6c_3 x, \\
y''' &= 6c_3.
\end{aligned}
$$

La tercera derivada contiene solo $c_3$, de modo que

$$
c_3 = \frac{y'''}{6}.
$$

Al sustituir este valor en $y''$ se despeja $c_2$:

$$
y'' = 2c_2 + x y''' \quad\Longrightarrow\quad c_2 = \frac{y'' - x y'''}{2}.
$$

Con $c_2$ y $c_3$ ya conocidos, la expresión de $y'$ permite despejar $c_1$:

$$
c_1 = y' - 2c_2 x - 3c_3 x^2
    = y' - x\left(y'' - x y'''\right) - \frac{x^2}{2}y'''
    = y' - x y'' + \frac{x^2}{2}y'''.
$$

Se sustituyen las tres constantes en la familia:

$$
\begin{aligned}
y &= x c_1 + x^2 c_2 + x^3 c_3 \\
  &= x\left(y' - x y'' + \frac{x^2}{2}y'''\right)
     + \frac{x^2}{2}\left(y'' - x y'''\right)
     + \frac{x^3}{6}y''' \\
  &= x y' - x^2 y'' + \frac{x^3}{2}y''' + \frac{x^2}{2}y''
     - \frac{x^3}{2}y''' + \frac{x^3}{6}y''' \\
  &= x y' - \frac{x^2}{2}y'' + \frac{x^3}{6}y'''.
\end{aligned}
$$

Al agrupar los términos y multiplicar por $6$,

$$
6y = 6x y' - 3x^2 y'' + x^3 y''',
$$

es decir,

$$
x^3 y''' - 3x^2 y'' + 6x y' - 6y = 0.
$$

**Verificación.** Al sustituir la familia y sus derivadas en el miembro izquierdo,

$$
\begin{aligned}
&x^3(6c_3) - 3x^2\left(2c_2 + 6c_3 x\right) + 6x\left(c_1 + 2c_2 x + 3c_3 x^2\right)
 - 6\left(c_1 x + c_2 x^2 + c_3 x^3\right) \\
&\quad = (6 - 18 + 18 - 6)c_3 x^3 + (-6 + 12 - 6)c_2 x^2 + (6 - 6)c_1 x = 0
\end{aligned}
$$

para todo $x$ y cualesquiera valores de $c_1$, $c_2$ y $c_3$.

## Observaciones

La familia contiene tres constantes arbitrarias, de modo que la ecuación que la describe es de **tercer orden**.

En forma estándar la ecuación es

$$
y''' - \frac{3}{x}y'' + \frac{6}{x^2}y' - \frac{6}{x^3}y = 0,
$$

que no está definida en $x = 0$. La familia está definida en todo $\mathbb{R}$, pero la ecuación describe su solución general solo en intervalos que no contienen el origen, como $(0,\infty)$ o $(-\infty,0)$.

La ecuación es lineal y homogénea, así que no posee soluciones singulares, y queda determinada salvo un factor multiplicativo no nulo.

### Método alternativo: determinante

Como $y$, $y'$, $y''$ y $y'''$ son combinaciones lineales de las columnas $(x,1,0,0)$, $(x^2,2x,2,0)$ y $(x^3,3x^2,6x,6)$, los cuatro vectores son linealmente dependientes y el determinante formado por ellos se anula:

$$
\begin{vmatrix}
y & x & x^2 & x^3\\
y' & 1 & 2x & 3x^2\\
y'' & 0 & 2 & 6x\\
y''' & 0 & 0 & 6
\end{vmatrix} = 0.
$$

Al desarrollar por la primera columna resulta $12y - 12x y' + 6x^2 y'' - 2x^3 y''' = 0$, que equivale a la misma ecuación.
