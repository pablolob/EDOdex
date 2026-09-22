
## Enunciado

En cada uno de los problemas 27 a 32, verifique que la función o funciones dadas son una solución de la ecuación diferencial parcial correspondiente.

32. $a^2 u_{xx} = u_{tt}; \quad u = f(x - at) + g(x + at), \text{ en donde } f \text{ y } g \text{ son funciones doblemente diferenciables}$

## Solución

La función $u(x, t) = f(x - at) + g(x + at)$ satisface la ecuación de onda $a^2 u_{xx} = u_{tt}$. Al derivar con la regla de la cadena se obtiene

$$
u_{xx} = f''(x - at) + g''(x + at), \qquad
u_{tt} = a^2 f''(x - at) + a^2 g''(x + at),
$$

y por tanto $a^2 u_{xx} = u_{tt}$.

## Resolución

Se definen las variables auxiliares $\xi = x - at$ y $\eta = x + at$, de modo que $u = f(\xi) + g(\eta)$. Se deriva respecto a cada variable con la **regla de la cadena**.

Derivadas respecto a $x$:

$$
\begin{aligned}
u_x &= f'(\xi) \cdot 1 + g'(\eta) \cdot 1 = f'(\xi) + g'(\eta), \\
u_{xx} &= f''(\xi) + g''(\eta).
\end{aligned}
$$

Derivadas respecto a $t$:

$$
\begin{aligned}
u_t &= f'(\xi) \cdot (-a) + g'(\eta) \cdot a = -a f'(\xi) + a g'(\eta), \\
u_{tt} &= -a f''(\xi) \cdot (-a) + a g''(\eta) \cdot a = a^2 f''(\xi) + a^2 g''(\eta).
\end{aligned}
$$

Se multiplica $u_{xx}$ por $a^2$ y se compara con $u_{tt}$:

$$
a^2 u_{xx} = a^2 f''(\xi) + a^2 g''(\eta) = u_{tt}.
$$

Los dos miembros de la ecuación coinciden, de modo que $u = f(x - at) + g(x + at)$ es solución de $a^2 u_{xx} = u_{tt}$.

## Observaciones

Esta es la solución de D'Alembert de la ecuación de onda unidimensional. El término $f(x - at)$ describe una onda que se desplaza hacia la derecha con velocidad $a$; el término $g(x + at)$, una onda que se desplaza hacia la izquierda. La verificación solo exige que $f$ y $g$ sean dos veces diferenciables, condición ya declarada en el enunciado. No hay condiciones iniciales ni de frontera que comprobar.
