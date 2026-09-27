---
title: "Zill Repaso C12 Ejercicio 19"
exercise-id: zill-c12-sr-e019
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 19"
topics:
  - contorno
competencies:
  - verificar.solucion
prerequisitos:
  - calculo-avanzado.derivadas-parciales
statement-status: accepted
solution-status: draft
metadata-status: pending
difficulty:
  conceptual: 1
  technical: 1
source-images:
  - c12sri03-p514.png
---

## Enunciado

Una placa rectangular está descrita por la región en el plano $xy$ definida por $0 \le x \le a$, $0 \le y \le b$. En el análisis de la deflexión $w(x, y)$ de la placa bajo una carga sinusoidal, se encontró la siguiente ecuación diferencial parcial de cuarto orden lineal:
$$\frac{\partial^4 w}{\partial x^4} + 2\frac{\partial^4 w}{\partial x^2 \partial y^2} + \frac{\partial^4 w}{\partial y^4} = \frac{q_0}{D} \sin\frac{\pi x}{a}\sin\frac{\pi y}{b},$$
donde $q_0$ y $D$ son constantes. Encuentre una constante $C$ para que el producto $w(x, y) = C \sin\frac{\pi x}{a}\sin\frac{\pi y}{b}$ sea una solución particular de la EDP.

## Solución

La constante que hace que el producto propuesto sea solución particular es

$$
C = \frac{q_0}{D\left(\dfrac{\pi^2}{a^2}+\dfrac{\pi^2}{b^2}\right)^{2}}
= \frac{q_0\,a^4b^4}{D\,\pi^4\,(a^2+b^2)^2}.
$$

## Resolución

Se propone $w(x,y)=C\sin\dfrac{\pi x}{a}\sin\dfrac{\pi y}{b}$ y se calculan las derivadas parciales que aparecen en la EDP. Cada derivación respecto de $x$ multiplica por $-\left(\dfrac{\pi}{a}\right)^2$, y cada derivación respecto de $y$ multiplica por $-\left(\dfrac{\pi}{b}\right)^2$. Por tanto,

$$
\begin{aligned}
\frac{\partial^4 w}{\partial x^4}
&= C\left(\frac{\pi}{a}\right)^4\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}, \\[2pt]
\frac{\partial^4 w}{\partial y^4}
&= C\left(\frac{\pi}{b}\right)^4\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}, \\[2pt]
\frac{\partial^4 w}{\partial x^2\partial y^2}
&= C\left(\frac{\pi}{a}\right)^2\left(\frac{\pi}{b}\right)^2\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}.
\end{aligned}
$$

Al sustituir en el miembro izquierdo de la EDP y sacar el factor común $C\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}$ resulta

$$
C\left[\left(\frac{\pi}{a}\right)^4+2\left(\frac{\pi}{a}\right)^2\left(\frac{\pi}{b}\right)^2+\left(\frac{\pi}{b}\right)^4\right]\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}
= \frac{q_0}{D}\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}.
$$

El corchete es el desarrollo del cuadrado de una suma,

$$
\left(\frac{\pi}{a}\right)^4+2\left(\frac{\pi}{a}\right)^2\left(\frac{\pi}{b}\right)^2+\left(\frac{\pi}{b}\right)^4
= \left[\left(\frac{\pi}{a}\right)^2+\left(\frac{\pi}{b}\right)^2\right]^2.
$$

Como $a,b>0$, el factor $\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}$ no es idénticamente nulo en la región y se cancela en ambos miembros. Queda

$$
C\left[\left(\frac{\pi}{a}\right)^2+\left(\frac{\pi}{b}\right)^2\right]^2=\frac{q_0}{D},
$$

de donde

$$
C=\frac{q_0}{D\left[\left(\dfrac{\pi}{a}\right)^2+\left(\dfrac{\pi}{b}\right)^2\right]^2}.
$$

Al escribir $\left(\dfrac{\pi}{a}\right)^2+\left(\dfrac{\pi}{b}\right)^2=\dfrac{\pi^2(a^2+b^2)}{a^2b^2}$ y elevar al cuadrado, se obtiene la forma

$$
C=\frac{q_0\,a^4b^4}{D\,\pi^4\,(a^2+b^2)^2}.
$$

**Comprobación.** Con este valor de $C$, el miembro izquierdo de la EDP vale

$$
C\left[\left(\frac{\pi}{a}\right)^2+\left(\frac{\pi}{b}\right)^2\right]^2\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}
= \frac{q_0}{D}\sin\frac{\pi x}{a}\sin\frac{\pi y}{b},
$$

que coincide con el miembro derecho. Por tanto $w$ satisface la EDP y es una solución particular.

## Observaciones

La forma $w=C\sin\frac{\pi x}{a}\sin\frac{\pi y}{b}$ se anula en los cuatro bordes de la placa, pues $\sin 0=\sin\pi=0$. Es la deformada de una placa rectangular simplemente apoyada bajo una carga sinusoidal, y el factor $D$ es la rigidez a la flexión. El operador del miembro izquierdo es el biarmónico $\nabla^4 w$, igual a la suma de las derivadas cuartas puras más el doble de la derivada mixta.
