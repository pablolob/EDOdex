
## Enunciado

9. a) Un caso especial de la ecuación de Liénard del problema 8 es
$$\frac{d^2u}{dt^2} + \frac{du}{dt} + g(u) = 0,$$
en donde $g$ satisface las condiciones del problema 6. Hágase $x = u$, $y = du/dt$ y demuestre que el origen es un punto crítico del sistema resultante. Esta ecuación puede interpretarse como si diera el movimiento de un sistema resorte-masa con amortiguamiento proporcional a la velocidad y a una fuerza de restitución no lineal. Use la función de Liapunov del problema 6 y demuestre que el origen es un punto crítico estable, pero observe que incluso con amortiguamiento no es posible concluir la estabilidad asintótica al utilizar esta función de Liapunov.
*b) Puede demostrarse la estabilidad asintótica del punto crítico $(0, 0)$ al construir una mejor función de Liapunov que la del inciso d) del problema 7. Sin embargo, el análisis para una función general $g$ es algo complicado, por lo que solamente se mencionará que $V$ tendrá la forma
$$V(x, y) = \frac{1}{2}y^2 + Ayg(x) + \int_{0}^{x} g(s)\,ds,$$
en donde $A$ es una constante positiva que debe elegirse de modo que $V$ sea definida positiva y $\dot{V}$ sea definida negativa. Para el problema del péndulo [$g(x) = \sin x$] use $V$, según la da la ecuación anterior, con $A = \frac{1}{2}$, para demostrar que el origen es asóticamente estable.
Sugerencia: Use $\sin x = x - \alpha x^3/3!$ y $\cos x = 1 - \beta x^2/2!$, en donde $\alpha$ y $\beta$ depende de $x$, pero $0 < \alpha < 1$ y $0 < \beta < 1$, para $-\pi/2 < x < \pi/2$; haga $x = r \cos \theta$, $y = r \sin \theta$ y demuestre que $V(r \cos \theta, r \sin \theta) = -\frac{1}{2}r^2[1 + \frac{1}{2}\sin 2\theta + h(r, \theta)]$, en donde $|h(r, \theta)| < \frac{1}{2}$ si $r$ es suficientemente pequeña. Para demostrar que $V$ es definida positiva use $\cos x = 1 - x^2/2 + \gamma x^4/4!$, en donde $\gamma$ depende de $x$, pero $0 < \gamma < 1$ para $-\pi/2 < x < \pi/2$.
