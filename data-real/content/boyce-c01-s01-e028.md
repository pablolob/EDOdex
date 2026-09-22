
## Enunciado

En cada uno de los problemas 27 a 32, verifique que la función o funciones dadas son una solución de la ecuación diferencial parcial correspondiente.

28. $\alpha^2 u_{xx} = u_t; \quad u_1(x, t) = e^{-\alpha^2 t} \sin x, \quad u_2(x, t) = e^{-\alpha^2 \lambda^2 t} \sin \lambda x, \quad \lambda \text{ es una constante real}$

## Solución

Ambas funciones satisfacen la ecuación en derivadas parciales $\alpha^2 u_{xx} = u_t$; se verifica por **sustitución directa** de las derivadas parciales.

## Resolución

Se calculan las derivadas parciales de cada función candidata y se sustituyen en la ecuación $\alpha^2 u_{xx} = u_t$.

**Para $u_1(x,t) = e^{-\alpha^2 t}\sin x$.** Derivando respecto de $x$ dos veces y respecto de $t$ una vez:

$$
u_{1,x} = e^{-\alpha^2 t}\cos x, \qquad
u_{1,xx} = -e^{-\alpha^2 t}\sin x, \qquad
u_{1,t} = -\alpha^2 e^{-\alpha^2 t}\sin x.
$$

Al sustituir en el miembro izquierdo de la ecuación:

$$
\alpha^2 u_{1,xx} = -\alpha^2 e^{-\alpha^2 t}\sin x = u_{1,t}.
$$

La igualdad se cumple para todo $(x,t)$, de modo que $u_1$ es una solución.

**Para $u_2(x,t) = e^{-\alpha^2\lambda^2 t}\sin(\lambda x)$, con $\lambda$ real.** Derivando:

$$
u_{2,x} = \lambda e^{-\alpha^2\lambda^2 t}\cos(\lambda x), \qquad
u_{2,xx} = -\lambda^2 e^{-\alpha^2\lambda^2 t}\sin(\lambda x),
$$

$$
u_{2,t} = -\alpha^2\lambda^2 e^{-\alpha^2\lambda^2 t}\sin(\lambda x).
$$

Al sustituir en el miembro izquierdo:

$$
\alpha^2 u_{2,xx} = -\alpha^2\lambda^2 e^{-\alpha^2\lambda^2 t}\sin(\lambda x) = u_{2,t}.
$$

La igualdad se cumple para todo $(x,t)$ y para todo valor real de $\lambda$. Por tanto, $u_2$ también es una solución.

## Observaciones

La ecuación $\alpha^2 u_{xx} = u_t$ es la **ecuación del calor** en una dimensión espacial. Las dos funciones verificadas son soluciones particulares: $u_1$ corresponde al caso $\lambda = 1$, y $u_2$ generaliza la forma con una constante real $\lambda$ que, al aparecer en la exponencial como $-\alpha^2\lambda^2 t$, produce un decaimiento tanto más rápido cuanto mayor es $|\lambda|$. La sustitución es directa: como la derivada segunda en $x$ de $\sin(\lambda x)$ es $-\lambda^2\sin(\lambda x)$, basta comparar coeficientes con la derivada temporal.
