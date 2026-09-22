---
title: "Boyce 4.4 Ejercicio 8"
exercise-id: boyce-c04-s04-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.4, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.variacion-parametros
  - verificar.solucion
hidden-competencies:
  - clasificar.cauchy-euler
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s04i01-p240.png
---

## Enunciado

Halle una fórmula que comprenda integrales para una solución particular de la ecuación diferencial

$$x^3 y''' - 3x^2 y'' + 6xy' - 6y = g(x), \quad x > 0.$$

Sugerencia: compruebe que $x$, $x^2$ y $x^3$ son soluciones de la ecuación homogénea.

## Solución

Una solución particular es

$$
y_p(x) = \frac{x}{2}\int \frac{g(x)}{x^2}\,dx - x^2\int \frac{g(x)}{x^3}\,dx + \frac{x^3}{2}\int \frac{g(x)}{x^4}\,dx.
$$

## Resolución

La ecuación es **lineal de tercer orden** y no homogénea. Se aplica **variación de parámetros** con el conjunto fundamental que señala la sugerencia.

Primero se comprueba que $y_1 = x$, $y_2 = x^2$ y $y_3 = x^3$ resuelven la ecuación homogénea. Sus derivadas son

$$
\begin{aligned}
y_1 = x, &\quad y_1' = 1, &\quad y_1'' = 0, &\quad y_1''' = 0, \\
y_2 = x^2, &\quad y_2' = 2x, &\quad y_2'' = 2, &\quad y_2''' = 0, \\
y_3 = x^3, &\quad y_3' = 3x^2, &\quad y_3'' = 6x, &\quad y_3''' = 6.
\end{aligned}
$$

Al sustituir en $x^3 y''' - 3x^2 y'' + 6xy' - 6y$ resulta, respectivamente,

$$
0 - 0 + 6x - 6x = 0, \qquad 0 - 6x^2 + 12x^2 - 6x^2 = 0, \qquad 6x^3 - 18x^3 + 18x^3 - 6x^3 = 0.
$$

El wronskiano del conjunto es

$$
W(x) = \begin{vmatrix} x & x^2 & x^3 \\ 1 & 2x & 3x^2 \\ 0 & 2 & 6x \end{vmatrix} = 2x^3 \ne 0 \quad (x>0),
$$

por lo que $\{x, x^2, x^3\}$ es un conjunto fundamental de la ecuación homogénea en $x>0$.

Para aplicar el método se escribe la ecuación en la forma estándar, con coeficiente principal unitario. Al dividir entre $x^3$ se obtiene

$$
y''' - \frac{3}{x}y'' + \frac{6}{x^2}y' - \frac{6}{x^3}y = \frac{g(x)}{x^3}.
$$

Se busca $y_p = u_1(x)\,x + u_2(x)\,x^2 + u_3(x)\,x^3$, donde las funciones $u_i$ satisfacen el sistema

$$
\begin{aligned}
u_1'\,x + u_2'\,x^2 + u_3'\,x^3 &= 0, \\
u_1' + 2x\,u_2' + 3x^2\,u_3' &= 0, \\
2\,u_2' + 6x\,u_3' &= \frac{g(x)}{x^3}.
\end{aligned}
$$

La tercera ecuación incorpora el término no homogéneo ya normalizado, $g(x)/x^3$. Por la **regla de Cramer**, cada derivada es un cociente de determinantes. Con el wronskiano $W = 2x^3$ y los determinantes

$$
W_1 = g(x)\,x, \qquad W_2 = -2g(x), \qquad W_3 = \frac{g(x)}{x},
$$

se obtiene

$$
u_1' = \frac{W_1}{W} = \frac{g(x)}{2x^2}, \qquad u_2' = \frac{W_2}{W} = -\frac{g(x)}{x^3}, \qquad u_3' = \frac{W_3}{W} = \frac{g(x)}{2x^4}.
$$

Al integrar,

$$
u_1 = \frac{1}{2}\int \frac{g(x)}{x^2}\,dx, \qquad u_2 = -\int \frac{g(x)}{x^3}\,dx, \qquad u_3 = \frac{1}{2}\int \frac{g(x)}{x^4}\,dx.
$$

Sustituyendo en $y_p = u_1 x + u_2 x^2 + u_3 x^3$ resulta la fórmula pedida.

## Observaciones

La ecuación es de tipo **Cauchy-Euler**, con coeficientes potencia de $x$ que igualan el orden de la derivada. Esa estructura es la que produce el conjunto fundamental $\{x, x^2, x^3\}$.

Las constantes de integración de $u_1$, $u_2$ y $u_3$ se toman iguales a cero. Cualquier otra elección solo añade combinaciones de $x$, $x^2$ y $x^3$, que ya forman parte de la solución complementaria

$$
y_c = c_1 x + c_2 x^2 + c_3 x^3.
$$

La solución general es $y = y_c + y_p$, válida en $x>0$, intervalo donde $W(x)=2x^3$ no se anula y $g(x)/x^3$ es continuo si $g$ lo es.
