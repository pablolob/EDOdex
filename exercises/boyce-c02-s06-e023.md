---
title: "Boyce 2.6 Ejercicio 23"
exercise-id: boyce-c02-s06-e023
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.6, ejercicio 23"
statement-status: accepted
solution-status: open
requires-tooling: [grafica]
source-images:
  - c02s06i06-p086.png
---

## Enunciado

**Teoría de la bifurcación.** En muchos problemas físicos alguna cantidad observable, como una velocidad, forma de onda o reacción química, depende de un parámetro que describe el estado físico. A medida que aumenta este parámetro, se alcanza un valor crítico en que la velocidad, forma de onda o reacción cambia repentinamente su carácter. Por ejemplo, al aumentar la cantidad de uno de los compuestos químicos de una mezcla, en un fluido originalmente estático, repentinamente surgen patrones de onda en espiral de color cambiante. En muchos de estos casos el análisis matemático produce finalmente una ecuación de la forma

$$dx/dt = (R - R_c)x - ax^3. \tag{i}$$

Aquí $a$ y $R_c$ son constantes positivas y $R$ es un parámetro que puede tomar varios valores. Por ejemplo, $R$ puede medir la cantidad de cierto compuesto químico y $x$ puede medir una reacción química.

a) Si $R < R_c$, demuestre que sólo existe una solución de equilibrio $x = 0$ y que es estable.

b) Si $R > R_c$, demuestre que existen tres soluciones de equilibrio, $x = 0$ y $x = \pm\sqrt{(R - R_c)/a}$, y que la primera solución es inestable, en tanto que las otras dos son estables.

c) Trace una gráfica en el plano $Rx$ que muestre todas las soluciones de equilibrio e identifique cada una de ellas como estable o inestable.

El punto $R = R_c$ se llama **punto de bifurcación**. Para $R < R_c$, se observa la solución de equilibrio estable $x = 0$. Sin embargo, esta solución pierde su estabilidad al pasar $R$ por el valor $R_c$, y para $R > R_c$ las soluciones estables (y por tanto las observables) son $x = \sqrt{(R - R_c)/a}$ y $x = -\sqrt{(R - R_c)/a}$. Debido a la manera en la que las soluciones se ramifican en $R_c$, este tipo de bifurcación se le conoce como bifurcación de horquilla; su gráfica debe sugerir que este nombre resulta adecuado.
