---
title: "Boyce 6.2 Ejercicio 27"
exercise-id: boyce-c06-s02-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.2, ejercicio 27"
statement-status: pending-review
solution-status: open
source-images:
  - c06s02i02-p325.png
---

## Enunciado

*27. Se pueden hallar de manera conveniente las transformadas de Laplace de ciertas funciones a partir de sus desarrollos en serie de Taylor.
a) Use la serie de Taylor para $\sin t$,
$$\sin t = \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n+1}}{(2n+1)!},$$
y suponga que puede calcularse término a término la transformada de Laplace de esta serie; compruebe que
$$\mathcal{L}\{\sin t\} = \frac{1}{s^2 + 1}, \quad s > 1.$$
b) Sea
$$f(t) = \begin{cases} (\sin t)/t, & t \ne 0, \\ 1, & t = 0. \end{cases}$$
Encuentre la serie de Taylor de $f$ alrededor de $t = 0$. Suponga que la transformada de Laplace de esta función puede calcularse término a término y compruebe que
$$\mathcal{L}\{f(t)\} = \arctan 1/s, \quad s > 1.$$
c) La función de Bessel de primera clase de orden cero, $J_0$, tiene la serie de Taylor (ver la sección 5.9)
$$J_0(t) = \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n}}{2^{2n}(n!)^2}.$$
Si se supone que las siguientes transformadas de Laplace pueden calcularse término a término, verificar que
$$\mathcal{L}\{J_0(t)\} = (s^2 + 1)^{-1/2}, \quad s > 1,$$
y que
$$\mathcal{L}\{J_0(\sqrt{t})\} = s^{-1} e^{-1/4s}, \quad s > 0.$$
