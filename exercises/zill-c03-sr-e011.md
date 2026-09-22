---
title: "Zill Repaso C3 Ejercicio 11"
exercise-id: zill-c03-sr-e011
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 3, ejercicio 11"
language: es
topics: []
competencies: []
difficulty: null
solution-status: open
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c03sri02-p128.png
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.variables-separables
  - interpretar.contexto-modelo
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

11. Supongamos que un circuito serie $RC$ tiene una resistencia variable. Si la resistencia al tiempo $t$ está definida por $R(t) = k_1 + k_2 t$, donde $k_1$ y $k_2$ son constantes positivas conocidas, entonces la ecuación diferencial (9) de la sección 3.1 se convierte

$$
(k_1 + k_2 t)\frac{dq}{dt} + \frac{1}{C}q = E(t),
$$

donde $C$ es una constante. Si $E(t) = E_0$ y $q(0) = q_0$, donde $E_0$ y $q_0$ son constantes, entonces demuestre que

$$
q(t) = E_0 C + (q_0 - E_0 C)\left(\frac{k_1}{k_1 + k_2 t}\right)^{1/C k_2}.
$$
