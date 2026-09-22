---
title: "Zill Repaso C1 Ejercicio 14"
exercise-id: zill-c01-sr-e014
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 1, ejercicio 14"
topics:
  - fundamentos
competencies:
  - verificar.sustitucion-directa
difficulty:
  conceptual: 1
  technical: 1
solution-status: draft
---

## Enunciado

**Problemas 13 y 14.**

En los problemas 13 y 14 determine por inspección al menos una solución de la ecuación diferencial dada.

14. $y' = y(y - 3)$

## Solución

Dos soluciones son $y = 0$ y $y = 3$.

## Resolución

La ecuación $y' = y(y - 3)$ es autónoma: el miembro derecho depende solo de $y$.

- Si $y(x) = 0$, entonces $y'(x) = 0$ y el miembro derecho es $0 \cdot (-3) = 0$. Se satisface.
- Si $y(x) = 3$, entonces $y'(x) = 0$ y el miembro derecho es $3 \cdot 0 = 0$. Se satisface.

Ambas son **soluciones de equilibrio** (constantes) de la ecuación diferencial.

## Observaciones

Los valores $y = 0$ e $y = 3$ son los puntos críticos de la EDO autónoma. La solución general se obtiene por **separación de variables**: $y(x) = \dfrac{3}{1 + C e^{-3x}}$.
