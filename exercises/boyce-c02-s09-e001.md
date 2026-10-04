---
title: "Boyce 2.9 Ejercicio 1"
exercise-id: boyce-c02-s09-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.9, ejercicio 1"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.homogenea
  - resolver-analiticamente.homogeneas-primer-orden
hidden-competencies:
  - seleccionar-metodo.sustitucion
prerequisitos:
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c02s09i01-p106.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 1 a 8 son homogéneas y encuentre sus soluciones.

$$\frac{dy}{dx} = \frac{x + y}{x}$$

## Solución

La ecuación es **de primer orden** y **homogénea**. Su solución general es

$$
y(x) = x\ln|x| + Cx,
$$

definida en cualquier intervalo que no contenga $x = 0$.

## Resolución

La ecuación se escribe en la forma diferencial

$$
(x + y)\,dx - x\,dy = 0,
$$

con $M(x,y) = x + y$ y $N(x,y) = -x$. Ambas funciones son homogéneas del mismo grado, pues

$$
M(tx,ty) = t(x + y) = t\,M(x,y), \qquad N(tx,ty) = -tx = t\,N(x,y).
$$

Por tanto la ecuación es **homogénea**.

Se introduce la sustitución $y = ux$, donde $u$ es función de $x$; esta sustitución requiere $x \neq 0$. Derivando,

$$
y' = u + x\,u'.
$$

Al sustituir en la ecuación dada,

$$
u + x\,u' = \frac{x + ux}{x} = 1 + u.
$$

Los términos $u$ se cancelan y queda una ecuación separable:

$$
x\,u' = 1 \quad\Longrightarrow\quad \frac{du}{dx} = \frac{1}{x}.
$$

Integrando respecto de $x$,

$$
u = \ln|x| + C.
$$

Al deshacer la sustitución, $y = ux$, se obtiene la solución general:

$$
y = x\ln|x| + Cx.
$$

La solución se comprueba por sustitución directa. De la familia anterior,

$$
y' = \ln|x| + 1 + C,
$$

mientras que el miembro derecho de la ecuación es

$$
\frac{x + y}{x} = 1 + \frac{y}{x} = 1 + \ln|x| + C.
$$

Ambos coinciden, de modo que la familia satisface la ecuación.

El dominio excluye $x = 0$, donde la ecuación original no está definida y la sustitución pierde sentido. La solución es válida en $(0,\infty)$ o en $(-\infty,0)$. No hay soluciones constantes: la ecuación $u' = 1/x$ no se anula para ningún $x$ finito, por lo que no se pierde ninguna solución singular.

## Observaciones

### Método alternativo: factor integrante

La ecuación también es **lineal**. En la forma estándar

$$
y' - \frac{1}{x}\,y = 1,
$$

el factor integrante es $\mu(x) = 1/x$ para $x > 0$. Entonces $(y/x)' = 1/x$; integrando resulta $y = x\ln x + Cx$, la misma familia de soluciones.
