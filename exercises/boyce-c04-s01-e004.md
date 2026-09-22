---
title: "Boyce 4.1 Ejercicio 4"
exercise-id: boyce-c04-s01-e004
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.1, ejercicio 4"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.intervalo-existencia
hidden-competencies:
  - clasificar.lineal-no-hom
prerequisitos:
  - ecuaciones-diferenciales.existencia-unicidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s01i01-p222.png
---

## Enunciado

En cada uno de los problemas 1 a 6, determine los intervalos en los que se tenga la seguridad de que existen soluciones.

4. $y''' + xy'' + x^2 y' + x^3 y = \ln x$

## Solución

La ecuación es **lineal de tercer orden** y **no homogénea**. Ya está en forma normal, pues el coeficiente de $y'''$ es $1$. Los coeficientes $x$, $x^2$ y $x^3$ son continuos en todo $\mathbb{R}$; el término independiente $\ln x$ es continuo solo en $(0, \infty)$. Por tanto, el **teorema de existencia y unicidad** garantiza soluciones en

$$
(0, \infty).
$$

## Resolución

El coeficiente de $y'''$ es $1$, de modo que la ecuación ya está escrita en la forma normal

$$
y''' + p_1(x)y'' + p_2(x)y' + p_3(x)y = g(x),
$$

con $p_1(x) = x$, $p_2(x) = x^2$, $p_3(x) = x^3$ y $g(x) = \ln x$. No es necesario dividir entre ningún coeficiente principal.

El **teorema de existencia y unicidad** para ecuaciones lineales de orden $n$ afirma que, si los coeficientes $p_1, \dots, p_n$ y el término independiente $g$ son continuos en un intervalo abierto $I$ que contiene a $x_0$, entonces el problema de valor inicial planteado en $x_0$ tiene una única solución en todo $I$. Basta, entonces, con localizar el mayor intervalo abierto en el que todas esas funciones son continuas.

Se estudia la continuidad de cada función:

- $p_1(x) = x$, $p_2(x) = x^2$ y $p_3(x) = x^3$ son polinomios, continuos en todo $\mathbb{R}$;
- $g(x) = \ln x$ está definido y es continuo solo para $x > 0$.

Los coeficientes polinómicos no imponen ninguna restricción. La única limitación proviene del término independiente, continuo únicamente en $(0, \infty)$. El mayor intervalo abierto en el que todas las funciones son continuas es, por tanto,

$$
(0, \infty),
$$

y en él el teorema asegura la existencia de soluciones.

## Observaciones

El punto $x = 0$ es singular: $\ln x$ no está definido para $x \le 0$, de modo que la ecuación no puede escribirse con término independiente continuo en un intervalo que contenga a $x = 0$. La garantía se declara únicamente en $(0, \infty)$, que no puede ampliarse. Cualquier condición inicial planteada en un punto $x_0 > 0$ da lugar a una solución única en todo ese intervalo. Si el miembro derecho fuera un polinomio, el intervalo de existencia sería todo $\mathbb{R}$.
