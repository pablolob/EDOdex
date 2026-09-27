---
title: "Boyce 2.3 Ejercicio 20"
exercise-id: boyce-c02-s03-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.3, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - resolver-analiticamente.variables-separables
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - algebra.division-polinomios
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s03i02-p053.png
---

## Enunciado

Resuelva la ecuación

$$\frac{dy}{dx} = \frac{ax + b}{cx + d},$$

en donde $a$, $b$, $c$ y $d$ son constantes.

## Solución

La ecuación es **de primer orden** y **separable**. Para $c \neq 0$, su solución general es

$$
y(x)=\frac{a}{c}\,x+\frac{bc-ad}{c^{2}}\,\ln|cx+d|+C.
$$

Si $c=0$ con $d\neq 0$, la ecuación se reduce a $y'=\dfrac{ax+b}{d}$ y

$$
y(x)=\frac{a}{2d}\,x^{2}+\frac{b}{d}\,x+C.
$$

## Resolución

El miembro derecho depende únicamente de $x$, de modo que la ecuación admite **separación de variables**. Escribiendo la derivada como cociente de diferenciales,

$$
dy=\frac{ax+b}{cx+d}\,dx.
$$

Para integrar el miembro derecho se considera primero $c\neq 0$. Se divide el numerador entre el denominador:

$$
\frac{ax+b}{cx+d}=\frac{a}{c}+\frac{bc-ad}{c\,(cx+d)}.
$$

En efecto, al reunir los términos de la derecha con denominador común resulta

$$
\frac{a(cx+d)+(bc-ad)}{c\,(cx+d)}=\frac{acx+bc}{c\,(cx+d)}=\frac{ax+b}{cx+d}.
$$

Integrando término a término,

$$
y=\int\left(\frac{a}{c}+\frac{bc-ad}{c\,(cx+d)}\right)dx
=\frac{a}{c}\,x+\frac{bc-ad}{c^{2}}\,\ln|cx+d|+C.
$$

La solución se comprueba por derivación. La derivada del primer término es $a/c$ y la del segundo,

$$
\frac{d}{dx}\left[\frac{bc-ad}{c^{2}}\,\ln|cx+d|\right]
=\frac{bc-ad}{c^{2}}\cdot\frac{c}{cx+d}
=\frac{bc-ad}{c\,(cx+d)}.
$$

Sumando ambas contribuciones se recupera el miembro derecho de la ecuación:

$$
y'=\frac{a}{c}+\frac{bc-ad}{c\,(cx+d)}=\frac{ax+b}{cx+d}.
$$

La ecuación original exige $cx+d\neq 0$, es decir $x\neq -d/c$. Si $bc\neq ad$, el término logarítmico es singular en $x=-d/c$ y la solución es válida en cualquier intervalo que no contenga ese punto. Si $bc=ad$, el término logarítmico se anula y la familia se reduce a la recta $y=\frac{a}{c}x+C$, aunque el intervalo de validez sigue excluyendo $x=-d/c$ porque la ecuación no está definida allí.

Cuando $c=0$ y $d\neq 0$, la ecuación se convierte en $y'=\dfrac{ax+b}{d}$, que también es separable. Integrando directamente,

$$
y=\int\frac{ax+b}{d}\,dx=\frac{a}{2d}\,x^{2}+\frac{b}{d}\,x+C,
$$

definida para todo $x\in\mathbb{R}$ (con $d\neq 0$).

## Observaciones

La fórmula general supone $c\neq 0$; el caso $c=0$ se trata aparte porque el término logarítmico desaparece.

Cuando $bc=ad$, el miembro derecho es constante, $\frac{ax+b}{cx+d}=\frac{a}{c}$, y la solución es la recta $y=\frac{a}{c}x+C$. El único caso en que aparecen soluciones constantes es $a=b=0$, para el cual $y=C$; en los demás casos el miembro derecho no se anula idénticamente y no hay soluciones constantes.
