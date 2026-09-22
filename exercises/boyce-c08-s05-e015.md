---
title: "Boyce 8.5 Ejercicio 15"
exercise-id: boyce-c08-s05-e015
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 8.5, ejercicio 15"
statement-status: accepted
solution-status: open
source-images:
  - c08s05i02-p466.png
---

## Enunciado

Este problema está relacionado con la fórmula predictora-correctora de Milne. La fórmula predictora se dio en la fórmula (4) del texto. La fórmula correctora se deduce al evaluar la integral de $\phi'(t)$ desde $t_{n-1}$ hasta $t_{n+1}$ por la regla de Simpson. La fórmula es $$y_{n+1} = y_{n-1} + \frac{h}{3}(y'_{n-1} + 4y'_n + y'_{n+1}).$$ Tanto la fórmula predictora como la correctora tienen errores locales por truncamiento proporcionales a $h^5$. El método de Milne suele ser muy eficaz, pero la correctora puede ser inestable (ver el problema 17). Por consiguiente, debe preferirse el método predictor-corrector de Adams-Moulton. En cada uno de los siguientes problemas, determine un valor aproximado de la solución exacta en $t = 0.4$ aplicando el método predictor-corrector de Milne. Use la fórmula correctora para calcular una corrección. a) Problema 1 \quad b) Problema 2 \quad c) Problema 3 \quad d) Problema 4.
