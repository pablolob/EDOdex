---
title: "Boyce 5.9 Ejercicio 14"
exercise-id: boyce-c05-s09-e014
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 5.9, ejercicio 14"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
prerequisitos:
  - algebra.numeros-complejos
  - calculo-avanzado.integrales-impropias
  - integracion.directa
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c05s09i01-p314.png
---

## Enunciado

En cada uno de los problemas 11 a 14 recuerde que $\cos bt = (e^{ibt} + e^{-ibt})/2$ y $\operatorname{sen} bt = (e^{ibt} - e^{-ibt})/2i$. Si se supone que las fórmulas de integración elementales necesarias se extienden hasta este caso, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

14. $e^{at} \cos bt$

## Solución

La transformada de Laplace de $e^{at}\cos bt$ es

$$
\mathcal{L}\{e^{at}\cos bt\}=\frac{s-a}{(s-a)^{2}+b^{2}}, \qquad \operatorname{Re}(s)>a.
$$

## Resolución

Se parte de la definición de la transformada y se agrupan las exponenciales en $t$,

$$
\mathcal{L}\{e^{at}\cos bt\}
=\int_{0}^{\infty} e^{-st}e^{at}\cos bt\,dt
=\int_{0}^{\infty} e^{-(s-a)t}\cos bt\,dt.
$$

Se sustituye la forma exponencial $\cos bt=\dfrac{e^{ibt}+e^{-ibt}}{2}$. Por linealidad de la integral,

$$
\mathcal{L}\{e^{at}\cos bt\}
=\frac{1}{2}\int_{0}^{\infty} e^{-(s-a-ib)t}\,dt
+\frac{1}{2}\int_{0}^{\infty} e^{-(s-a+ib)t}\,dt.
$$

Para $\operatorname{Re}(s)>a$ cada integral impropia converge y vale

$$
\int_{0}^{\infty} e^{-(s-a\mp ib)t}\,dt=\frac{1}{s-a\mp ib}.
$$

Al sustituir y sumar las dos fracciones,

$$
\begin{aligned}
\mathcal{L}\{e^{at}\cos bt\}
&=\frac{1}{2}\left(\frac{1}{s-a-ib}+\frac{1}{s-a+ib}\right) \\
&=\frac{1}{2}\cdot\frac{(s-a+ib)+(s-a-ib)}{(s-a)^{2}+b^{2}} \\
&=\frac{1}{2}\cdot\frac{2(s-a)}{(s-a)^{2}+b^{2}}
=\frac{s-a}{(s-a)^{2}+b^{2}}.
\end{aligned}
$$

## Observaciones

La región de convergencia $\operatorname{Re}(s)>a$ la fija el factor $e^{-(s-a)t}$; sobre el eje real se reduce a $s>a$. Los pasos intermedios son complejos, pero el resultado es real porque las contribuciones de $e^{ibt}$ y $e^{-ibt}$ son conjugadas. Con $a=0$ la fórmula reproduce el par $\mathcal{L}\{\cos bt\}=\dfrac{s}{s^{2}+b^{2}}$.
