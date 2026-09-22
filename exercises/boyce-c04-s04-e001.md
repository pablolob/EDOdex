---
title: "Boyce 4.4 Ejercicio 1"
exercise-id: boyce-c04-s04-e001
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.4, ejercicio 1"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.variacion-parametros
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.numeros-complejos
  - ecuaciones-diferenciales.wronskiano
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s04i01-p240.png
---

## Enunciado

En cada uno de los problemas 1 a 3, aplique el método de parámetros para determinar una solución particular de la ecuación diferencial dada.

1. $y''' + y' = \tan x, \quad 0 < x < \pi/2$

## Solución

$$
y_p = -\ln(\cos x) - \sin x\,\ln(\sec x + \tan x).
$$

## Resolución

La ecuación es **lineal**, de **tercer orden**, **no homogénea** y con coeficientes constantes. Se pide una solución particular mediante **variación de parámetros**, de modo que primero se determina un conjunto fundamental de la ecuación homogénea asociada.

**Ecuación homogénea.** La ecuación asociada es $y''' + y' = 0$. Su ecuación característica es

$$
r^3 + r = r(r^2+1) = 0,
$$

cuyas raíces son $r=0$, $r=i$ y $r=-i$. El conjunto fundamental correspondiente es

$$
y_1 = 1, \qquad y_2 = \cos x, \qquad y_3 = \sin x.
$$

**Sistema de variación de parámetros.** Se busca $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$, donde las funciones $u_k$ satisfacen

$$
\begin{aligned}
u_1' y_1 + u_2' y_2 + u_3' y_3 &= 0, \\
u_1' y_1' + u_2' y_2' + u_3' y_3' &= 0, \\
u_1' y_1'' + u_2' y_2'' + u_3' y_3'' &= \tan x.
\end{aligned}
$$

Con $y_1=1$, $y_2=\cos x$ y $y_3=\sin x$ el sistema resulta

$$
\begin{aligned}
u_1' + u_2'\cos x + u_3'\sin x &= 0, \\
-u_2'\sin x + u_3'\cos x &= 0, \\
-u_2'\cos x - u_3'\sin x &= \tan x.
\end{aligned}
$$

El wronskiano del conjunto fundamental es

$$
W = \det\begin{pmatrix} 1 & \cos x & \sin x \\ 0 & -\sin x & \cos x \\ 0 & -\cos x & -\sin x \end{pmatrix} = \sin^2 x + \cos^2 x = 1.
$$

Por la regla de Cramer, cada derivada es el cociente entre el determinante con la columna correspondiente sustituida por $(0,0,\tan x)$ y $W$:

$$
\begin{aligned}
u_1' &= \det\begin{pmatrix} 0 & \cos x & \sin x \\ 0 & -\sin x & \cos x \\ \tan x & -\cos x & -\sin x \end{pmatrix} = \tan x, \\
u_2' &= \det\begin{pmatrix} 1 & 0 & \sin x \\ 0 & 0 & \cos x \\ 0 & \tan x & -\sin x \end{pmatrix} = -\sin x, \\
u_3' &= \det\begin{pmatrix} 1 & \cos x & 0 \\ 0 & -\sin x & 0 \\ 0 & -\cos x & \tan x \end{pmatrix} = -\sin x\tan x = \cos x - \sec x.
\end{aligned}
$$

**Integración.** En el intervalo $0<x<\pi/2$ se tiene $\cos x>0$, de modo que las integrales son

$$
\begin{aligned}
u_1 &= \int \tan x\,dx = -\ln(\cos x), \\
u_2 &= \int (-\sin x)\,dx = \cos x, \\
u_3 &= \int (\cos x - \sec x)\,dx = \sin x - \ln(\sec x + \tan x).
\end{aligned}
$$

Se toman las constantes de integración iguales a cero, ya que solo se requiere una solución particular.

**Solución particular.** Al sustituir,

$$
\begin{aligned}
y_p &= u_1 + u_2\cos x + u_3\sin x \\
&= -\ln(\cos x) + \cos^2 x + \sin^2 x - \sin x\,\ln(\sec x + \tan x) \\
&= 1 - \ln(\cos x) - \sin x\,\ln(\sec x + \tan x).
\end{aligned}
$$

El término constante $1$ es solución de la ecuación homogénea, por lo que puede suprimirse. Así,

$$
y_p = -\ln(\cos x) - \sin x\,\ln(\sec x + \tan x).
$$

La función $\tan x$ es continua en $0<x<\pi/2$ y las integrales obtenidas están definidas en ese intervalo. La solución particular es válida en $0<x<\pi/2$.

## Observaciones

En el sistema de variación de parámetros el término no homogéneo aparece solo en la última ecuación. Las primeras $n-1$ ecuaciones son las condiciones que evitan que las incógnitas $u_k$ aparezcan derivadas al derivar $y_p$. Para $n=3$ hay tres ecuaciones.

Las constantes de integración pueden tomarse nulas porque cualquier elección de ellas añade una combinación de $y_1$, $y_2$ y $y_3$, es decir, una solución de la ecuación homogénea.

El término constante $1$ que surge de $\cos^2 x + \sin^2 x$ también es solución de la ecuación homogénea, ya que $y_1=1$. Por eso no forma parte de la solución particular estricta y se elimina al final.
