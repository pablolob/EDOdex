---
title: "Boyce 1.1 Ejercicio 13"
exercise-id: boyce-c01-s01-e013
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 1.1, ejercicio 13"
statement-status: accepted
solution-status: draft
topics:
  - fundamentos
competencies:
  - verificar.solucion
prerequisitos:
  - derivacion.regla-cadena
  - derivacion.producto
difficulty:
  conceptual: 1
  technical: 2
source-images:
  - c01s01i01-p025.png
---

## Enunciado

Verifique que la función o funciones que se dan son una solución de la ecuación diferencial: $$y'' + y = \sec x, \quad 0 < x < \frac{\pi}{2}, \quad y = (\cos x) \ln \cos x + x \sin x$$

## Solución

La función dada satisface la ecuación diferencial. Al sustituir se obtiene la identidad

$$
y'' + y = \sec x.
$$

## Resolución

Se define

$$
y = \cos x\,\ln(\cos x) + x\sin x.
$$

Se deriva una primera vez, aplicando la **regla del producto** y la **regla de la cadena**:

$$
\begin{aligned}
y' &= \frac{d}{dx}\big[\cos x\,\ln(\cos x)\big] + \frac{d}{dx}\big[x\sin x\big] \\
&= -\sin x\,\ln(\cos x) + \cos x\cdot\frac{-\sin x}{\cos x} + \sin x + x\cos x \\
&= -\sin x\,\ln(\cos x) - \sin x + \sin x + x\cos x \\
&= -\sin x\,\ln(\cos x) + x\cos x.
\end{aligned}
$$

Se deriva una segunda vez:

$$
\begin{aligned}
y'' &= \frac{d}{dx}\big[-\sin x\,\ln(\cos x)\big] + \frac{d}{dx}\big[x\cos x\big] \\
&= -\cos x\,\ln(\cos x) - \sin x\cdot\frac{-\sin x}{\cos x} + \cos x - x\sin x \\
&= -\cos x\,\ln(\cos x) + \frac{\sin^2 x}{\cos x} + \cos x - x\sin x.
\end{aligned}
$$

Se sustituyen $y$ y $y''$ en el miembro izquierdo de la ecuación:

$$
\begin{aligned}
y'' + y &= -\cos x\,\ln(\cos x) + \frac{\sin^2 x}{\cos x} + \cos x - x\sin x + \cos x\,\ln(\cos x) + x\sin x \\
&= \frac{\sin^2 x}{\cos x} + \cos x \\
&= \frac{\sin^2 x + \cos^2 x}{\cos x} \\
&= \frac{1}{\cos x} \\
&= \sec x.
\end{aligned}
$$

Se concluye que $y$ es una solución de $y'' + y = \sec x$ en el intervalo $0 < x < \dfrac{\pi}{2}$.

## Observaciones

La verificación emplea únicamente cálculo diferencial: las derivadas requieren la regla del producto y la regla de la cadena, y la identidad $\sin^2 x + \cos^2 x = 1$ reduce el resultado a $\sec x$. En el intervalo $0 < x < \dfrac{\pi}{2}$ el coseno es positivo, de modo que $\ln(\cos x)$ y $\sec x$ están bien definidos.
