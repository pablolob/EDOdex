---
title: "Boyce 8.1 Ejercicio 11"
exercise-id: boyce-c08-s01-e011
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.1, ejercicio 11"
statement-status: accepted
solution-status: open
source-images:
  - c08s01i03-p443.png
---

## Enunciado

Se dice que un método numérico tiene exactitud de $r$-ésimo orden si el error en $\bar{t} = t_0 + nh$ es proporcional a $h^r$; o, con más precisión, si $\phi(\bar{t}) = y_n(h) + Ch^r + M(h)$, en donde la constante $C$ depende de la ecuación diferencial y de $\bar{t}$ pero es independiente de $h$, y $M(h)$ es proporcional a $h^{r+1}$. Por tanto, el método de Euler tiene una exactitud de primer orden. Siguiendo el procedimiento del problema 9, demuestre que una estimación mejorada de $\phi(\bar{t})$ queda dada por $\phi(\bar{t}) = y_{2n}(h/2) + [y_{2n}(h/2) - y_n(h)] / (2^r - 1)$.
