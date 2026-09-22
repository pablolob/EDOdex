---
title: "Boyce 5.7 Ejercicio 15"
exercise-id: boyce-c05-s07-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.7, ejercicio 15"
statement-status: accepted
solution-status: open
blocked: enunciado
blocked-detail: "El inciso e) remite al «problema 21 de la sección 5.4», cuya ecuación, teorema o condición no está escrita explícitamente en el enunciado ni disponible como material verificado del repositorio; además, el inciso d) contiene una fórmula con notación defectuosa («(2-γ)!» en el denominador del primer término) que no puede corregirse sin recurrir a la fuente ausente."
source-images:
  - c05s07i02-p291.png
---

## Enunciado

En varios problemas de física matemática (por ejemplo, la ecuación de Schrödinger para un átomo de hidrógeno) es necesario estudiar la ecuación diferencial

$$x(1 - x)y'' + [\gamma - (1 + \alpha + \beta)x]y' - \alpha\beta y = 0, \tag{i}$$

en donde $\alpha$, $\beta$ y $\gamma$ son constantes. Esta ecuación se conoce como ecuación hipergeométrica.

a) Demuestre que $x = 0$ es un punto singular regular y que las raíces de la ecuación indicial son $0$ y $1 - \gamma$.

b) Demuestre que $x = 1$ es un punto singular regular y que las raíces de la ecuación indicial son $0$ y $\gamma - \alpha - \beta$.

c) Si se supone que $1 - \gamma$ no es un entero positivo, demuestre que en la vecindad de $x = 0$ una solución de (i) es

$$y_1(x) = 1 + \frac{\alpha\beta}{\gamma \cdot 1!}x + \frac{\alpha(\alpha + 1)\beta(\beta + 1)}{\gamma(\gamma + 1)2!}x^2 + \cdots.$$

¿Cuál espera que sea el radio de convergencia de esta serie?

d) Si se supone que $1 - \gamma$ no es un entero o cero, demuestre que una segunda solución para $0 < x < 1$ es

$$y_2(x) = x^{1-\gamma}\left[1 + \frac{(\alpha - \gamma + 1)(\beta - \gamma + 1)}{(2 - \gamma)!}x + \frac{(\alpha - \gamma + 1)(\alpha - \gamma + 2)(\beta - \gamma + 1)(\beta - \gamma + 2)}{(2 - \gamma)(3 - \gamma)2!}x^2 + \cdots\right].$$

e) Demuestre que el punto en el infinito es un punto singular regular y que las raíces de la ecuación indicial son $\alpha$ y $\beta$. Ver el problema 21 de la sección 5.4.
