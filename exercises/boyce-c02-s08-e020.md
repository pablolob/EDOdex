---
title: "Boyce 2.8 Ejercicio 20"
exercise-id: boyce-c02-s08-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.8, ejercicio 20"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - clasificar.exacta
  - resolver.exacta
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - integracion.directa
  - derivacion.cociente
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s08i02-p102.png
---

## Enunciado

Demuestre que las ecuaciones de los problemas 19 a 22 no son exactas, aunque se transforman en exactas si se multiplican por el factor integrante dado. En seguida, resuelva las ecuaciones.

20. $$\left(\frac{\sin y}{y} - 2e^{-x} \sin x\right) \,dx + \left(\frac{\cos y + 2e^{-x} \cos x}{y}\right) \,dy = 0; \quad \mu(x, y) = ye^x$$

## Solución

La ecuación original no es **exacta**. Al multiplicarla por el factor integrante $\mu(x,y)=ye^x$ se obtiene la ecuación **exacta**

$$
\left(e^x\sin y - 2y\sin x\right)\,dx + \left(e^x\cos y + 2\cos x\right)\,dy = 0,
$$

cuya solución general es

$$
e^x\sin y + 2y\cos x = C.
$$

## Resolución

Se escribe la ecuación en la forma $M(x,y)\,dx + N(x,y)\,dy = 0$ con

$$
M=\frac{\sin y}{y}-2e^{-x}\sin x, \qquad N=\frac{\cos y+2e^{-x}\cos x}{y}.
$$

**Prueba de exactitud.** Se calculan las derivadas parciales cruzadas. La derivada de $\sin y/y$ respecto de $y$ requiere la regla del cociente, y la de $e^{-x}\cos x$ respecto de $x$, la regla del producto:

$$
\begin{aligned}
\frac{\partial M}{\partial y} &= \frac{y\cos y-\sin y}{y^{2}}, \\
\frac{\partial N}{\partial x} &= -\frac{2e^{-x}(\cos x+\sin x)}{y}.
\end{aligned}
$$

Estas expresiones no son idénticas. Por ejemplo, en $(x,y)=(0,1)$ valen $\cos 1-\sin 1$ y $-2$, respectivamente. Por tanto, la ecuación no es exacta.

**Factor integrante.** Al multiplicar por $\mu(x,y)=ye^x$ se simplifican los denominadores:

$$
\begin{aligned}
\tilde M &= ye^x\left(\frac{\sin y}{y}-2e^{-x}\sin x\right) = e^x\sin y - 2y\sin x, \\
\tilde N &= ye^x\left(\frac{\cos y+2e^{-x}\cos x}{y}\right) = e^x\cos y + 2\cos x.
\end{aligned}
$$

Las nuevas derivadas cruzadas coinciden:

$$
\frac{\partial \tilde M}{\partial y} = e^x\cos y - 2\sin x = \frac{\partial \tilde N}{\partial x},
$$

de modo que la ecuación transformada es exacta.

**Función potencial.** Se busca $F(x,y)$ tal que $F_x=\tilde M$ y $F_y=\tilde N$. Se integra $F_x$ respecto de $x$, tratando $y$ como constante:

$$
F(x,y) = \int\left(e^x\sin y-2y\sin x\right)\,dx = e^x\sin y + 2y\cos x + h(y).
$$

Se deriva respecto de $y$ y se iguala a $\tilde N$:

$$
F_y = e^x\cos y + 2\cos x + h'(y) = e^x\cos y + 2\cos x.
$$

Por tanto $h'(y)=0$, es decir, $h$ es constante. La función potencial es

$$
F(x,y)=e^x\sin y+2y\cos x,
$$

y las curvas de nivel $F(x,y)=C$ constituyen la solución general.

## Observaciones

El enunciado proporciona el factor integrante, que aquí depende de ambas variables; no es necesario deducirlo mediante las reglas para $\mu(x)$ o $\mu(y)$.

La ecuación original solo está definida para $y\ne 0$, por el denominador $y$. El factor $\mu=ye^x$ se anula en $y=0$, de modo que $y=0$ resuelve la ecuación transformada pero no pertenece al dominio de la original y no debe incorporarse a la familia de soluciones.

La solución permanece en forma implícita: no es posible despejar $y$ de $e^x\sin y+2y\cos x=C$ con funciones elementales.
