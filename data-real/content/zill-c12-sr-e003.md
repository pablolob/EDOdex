
## Enunciado

Encuentre una solución de estado estable $\psi(x)$ del problema con valores en la frontera

$$
\begin{aligned}
k \frac{\partial^2 u}{\partial x^2} &= \frac{\partial u}{\partial t}, \quad 0 < x < \pi, \quad t > 0, \\
u(0, t) &= u_0, \quad \left.-\frac{\partial u}{\partial x}\right|_{x=\pi} = u(\pi, t) - u_1, \quad t > 0, \\
u(x, 0) &= 0, \quad 0 < x < \pi.
\end{aligned}
$$

## Solución

$$
\psi(x)=u_0+\frac{u_1-u_0}{1+\pi}\,x.
$$

## Resolución

En el **estado estable** la temperatura ya no depende del tiempo, de modo que $\partial u/\partial t=0$ y $u=\psi(x)$. La ecuación del calor se reduce a una EDO:

$$
k\,\psi''(x)=0 \quad\Longrightarrow\quad \psi''(x)=0.
$$

Al integrar dos veces,

$$
\psi(x)=Ax+B.
$$

Las constantes se determinan con las condiciones de frontera. De $\psi(0)=u_0$ resulta

$$
B=u_0.
$$

La condición en $x=\pi$ es de tipo **Robin**: relaciona el flujo $-\psi'(\pi)$ con la diferencia de temperatura $\psi(\pi)-u_1$. Como $\psi'(x)=A$,

$$
-A=A\pi+u_0-u_1.
$$

Al despejar,

$$
A(1+\pi)=u_1-u_0 \quad\Longrightarrow\quad A=\frac{u_1-u_0}{1+\pi}.
$$

Sustituyendo $A$ y $B$,

$$
\psi(x)=u_0+\frac{u_1-u_0}{1+\pi}\,x.
$$

**Comprobación.** La solución satisface la EDO y las dos condiciones de frontera. La segunda derivada es nula, luego $k\psi''=0$; como $\psi$ no depende de $t$, también $\psi_t=0$. En las fronteras,

$$
\psi(0)=u_0,\qquad
-\psi'(\pi)=-\frac{u_1-u_0}{1+\pi}
=\psi(\pi)-u_1,
$$

pues $\psi(\pi)-u_1=u_0+\frac{u_1-u_0}{1+\pi}\pi-u_1=-\frac{u_1-u_0}{1+\pi}$. La condición inicial $u(x,0)=0$ no restringe el estado estable; determina el transitorio que se superpone a él.

## Observaciones

El estado estable es el perfil hacia el que tiende la temperatura para tiempos grandes. La condición inicial $u(x,0)=0$ fija la amplitud del transitorio, pero no el perfil límite.

La condición de frontera en $x=\pi$ es de tipo **Robin**: combina el flujo de calor con la temperatura de referencia $u_1$. Cuando $u_1=u_0$ la pendiente se anula y el estado estable se reduce a la temperatura constante $\psi(x)=u_0$.
