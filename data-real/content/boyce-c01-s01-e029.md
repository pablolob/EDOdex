
## Enunciado

En cada uno de los problemas 27 a 32, verifique que la función o funciones dadas son una solución de la ecuación diferencial parcial correspondiente.

29. $a^2 u_{xx} = u_{tt}; \quad u_1(x, t) = \sin \lambda x \sin \lambda at, \quad u_2(x, t) = \sin(x - at), \quad \lambda \text{ es una constante real}$

## Solución

Las dos funciones propuestas satisfacen la ecuación $a^{2}u_{xx}=u_{tt}$. Para cada una, las derivadas segundas cumplen

$$
a^{2}(u_1)_{xx} = (u_1)_{tt} = -\lambda^{2}a^{2}\sin(\lambda x)\sin(\lambda at),
$$

$$
a^{2}(u_2)_{xx} = (u_2)_{tt} = -a^{2}\sin(x-at).
$$

## Resolución

Se calculan las derivadas parciales segundas de cada función y se sustituyen en la ecuación.

Para $u_1(x,t)=\sin(\lambda x)\sin(\lambda at)$, al derivar dos veces respecto de $x$ con $t$ fijo:

$$
(u_1)_x = \lambda\cos(\lambda x)\sin(\lambda at), \qquad (u_1)_{xx} = -\lambda^{2}\sin(\lambda x)\sin(\lambda at).
$$

Al derivar dos veces respecto de $t$ con $x$ fijo:

$$
(u_1)_t = \lambda a\sin(\lambda x)\cos(\lambda at), \qquad (u_1)_{tt} = -\lambda^{2}a^{2}\sin(\lambda x)\sin(\lambda at).
$$

Por tanto,

$$
a^{2}(u_1)_{xx} = -\lambda^{2}a^{2}\sin(\lambda x)\sin(\lambda at) = (u_1)_{tt}.
$$

Para $u_2(x,t)=\sin(x-at)$, las derivadas segundas son

$$
(u_2)_x = \cos(x-at), \qquad (u_2)_{xx} = -\sin(x-at),
$$

$$
(u_2)_t = -a\cos(x-at), \qquad (u_2)_{tt} = -a^{2}\sin(x-at).
$$

Por tanto,

$$
a^{2}(u_2)_{xx} = -a^{2}\sin(x-at) = (u_2)_{tt}.
$$

En ambos casos el miembro izquierdo coincide con el miembro derecho, de modo que $u_1$ y $u_2$ son soluciones de la ecuación para todo $(x,t)$ real.

## Observaciones

La igualdad se cumple para todo valor de la constante real $\lambda$; no se impone ninguna restricción sobre ella. La verificación emplea únicamente derivadas parciales y sustitución directa, sin condiciones iniciales ni de frontera.
