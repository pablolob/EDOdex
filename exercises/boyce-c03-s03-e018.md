---
title: "Boyce 3.3 Ejercicio 18"
exercise-id: boyce-c03-s03-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.3, ejercicio 18"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - determinar.independencia-lineal
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c03s03i02-p160.png
---

## Enunciado

Si $f$, $g$ y $h$ son funciones diferenciables, demostrar que $W(fg, fh) = f^2 W(g, h)$.

## Solución

La identidad se cumple para toda terna de funciones diferenciables $f$, $g$ y $h$:

$$
W(fg, fh) = f^2\, W(g, h).
$$

Es válida en todo intervalo donde las tres funciones sean diferenciables. No se requiere que $f$ sea distinta de cero.

## Resolución

El **wronskiano** de dos funciones $u$ y $v$ se define como el determinante

$$
W(u, v) = u v' - u' v.
$$

Se aplica con $u = fg$ y $v = fh$. Por la **regla del producto**,

$$
(fg)' = f'g + fg', \qquad (fh)' = f'h + fh'.
$$

Al sustituir en la definición del wronskiano,

$$
\begin{aligned}
W(fg, fh) &= (fg)(fh)' - (fg)'(fh) \\
&= fg\left(f'h + fh'\right) - \left(f'g + fg'\right)fh \\
&= f^2 g h' + f f' g h - f f' g h - f^2 g' h \\
&= f^2\left(g h' - g' h\right) \\
&= f^2\, W(g, h).
\end{aligned}
$$

Los términos $f f' g h$ aparecen con signos opuestos y se cancelan, de modo que la identidad queda demostrada.

## Observaciones

La identidad no exige $f \ne 0$. El factor $f^2$ proviene de que el wronskiano es un determinante y cada una de sus dos entradas se multiplica por el factor común $f$; como el determinante es lineal en cada entrada, el factor aparece dos veces.

Una consecuencia directa: si $f$ no es idénticamente nula, $W(fg, fh)$ y $W(g, h)$ se anulan en los mismos puntos. En particular, el par $\{fg, fh\}$ es linealmente dependiente si y solo si lo es $\{g, h\}$ en todo intervalo donde $f$ no se anule.
