---
title: "Boyce 3.4 Ejercicio 35"
exercise-id: boyce-c03-s04-e035
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.4, ejercicio 35"
statement-status: accepted
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.cambio-variable
  - resolver-analiticamente.lineales-coeficientes-constantes
  - resolver-analiticamente.cauchy-euler
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c03s04i03-p168.png
---

## Enunciado

En cada uno de los problemas 33 a 36 aplique el resultado del problema 32 para resolver la ecuación dada, para $x > 0$.

35. $x^2 y'' + 3xy' + 1.25y = 0$

## Solución

$$
y(x)=x^{-1}\left[C_1\cos\!\left(\frac{1}{2}\ln x\right)+C_2\sin\!\left(\frac{1}{2}\ln x\right)\right], \quad x>0.
$$

## Resolución

La ecuación es de Euler con $\alpha = 3$ y $\beta = 1.25 = \frac{5}{4}$. El resultado del problema 32 establece que la sustitución $z = \ln x$ la transforma en la ecuación con coeficientes constantes

$$
\frac{d^2Y}{dz^2} + (\alpha - 1)\frac{dY}{dz} + \beta Y = 0,
$$

donde $Y(z) = y(e^{z})$. Al sustituir los valores de los coeficientes se obtiene

$$
\frac{d^2Y}{dz^2} + 2\frac{dY}{dz} + \frac{5}{4}Y = 0.
$$

La ecuación característica asociada es

$$
r^2 + 2r + \frac{5}{4} = 0,
$$

cuyas raíces son

$$
r = \frac{-2 \pm \sqrt{4 - 5}}{2} = \frac{-2 \pm i}{2} = -1 \pm \frac{i}{2}.
$$

Las raíces son complejas conjugadas con parte real $-1$ y parte imaginaria $\frac{1}{2}$. Por tanto, la solución general de la ecuación transformada es

$$
Y(z) = e^{-z}\left(C_1\cos\!\left(\frac{z}{2}\right) + C_2\sin\!\left(\frac{z}{2}\right)\right).
$$

Se recupera la solución de la ecuación original con la sustitución inversa $z = \ln x$. Como $e^{-z} = e^{-\ln x} = x^{-1}$ y $\frac{z}{2} = \frac{1}{2}\ln x$, resulta

$$
y(x) = x^{-1}\left[C_1\cos\!\left(\frac{1}{2}\ln x\right) + C_2\sin\!\left(\frac{1}{2}\ln x\right)\right].
$$

El cambio de variable es invertible en el dominio indicado $x > 0$, donde $\ln x$ está definida y toma todos los valores reales.

## Observaciones

La ecuación es de Cauchy-Euler. El resultado del problema 32 equivale al siguiente camino directo.

### Método alternativo: solución de prueba $y = x^{m}$

Al sustituir $y = x^{m}$ en la ecuación se obtiene $m(m-1)x^{m} + 3mx^{m} + \frac{5}{4}x^{m} = 0$. Como $x^{m} > 0$, el factor común no se anula y queda la ecuación característica $m^2 + 2m + \frac{5}{4} = 0$, con raíces $m = -1 \pm \frac{i}{2}$. Las soluciones reales son

$$
y(x) = C_1 x^{-1}\cos\!\left(\frac{1}{2}\ln x\right) + C_2 x^{-1}\sin\!\left(\frac{1}{2}\ln x\right),
$$

que coincide con la solución obtenida mediante el cambio de variable.
