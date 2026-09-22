
## Enunciado

Considere el problema con valor inicial

$$y' = t^2 + e^y, \quad y(0) = 0. \tag{i}$$

Si se aplica el método de Runge-Kutta con un tamaño de paso $h$, se obtiene los resultados de la tabla 8.5.3. Estos resultados sugieren que la solución tiene una asíntota vertical entre $t = 0.9$ y $t = 1.0$.
a) Demuestre que para $0 \le t \le 1$ la solución $y = \phi(t)$ del problema (i) satisface

$$\phi_2(t) \le \phi(t) \le \phi_1(t), \tag{ii}$$

en donde $y = \phi_1(t)$ es la solución de

$$y' = 1 + e^y, \quad y(0) = 0, \tag{iii}$$

y $y = \phi_2(t)$ es la solución de

$$y' = e^y, \quad y(0) = 0. \tag{iv}$$

b) Determine $\phi_1(t)$ y $\phi_2(t)$. Luego demuestre que $\phi(t) \to \infty$ para alguna $t$ entre $t = \ln 2 \approx 0.69315$ y $t = 1$.
c) Resuelva las ecuaciones diferenciales $y' = e^y$ y $y' = 1 + e^y$, respectivamente, con la condición inicial $y(0.9) = 3.4298$. Use los resultados para demostrar que $\phi(t) \to \infty$ cuando $t \approx 0.932$.
