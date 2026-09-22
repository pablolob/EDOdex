
## Enunciado

En este problema se analiza el error global por truncamiento asociado con el método de Euler para el problema con valor inicial $y' = f(t, y)$, $y(t_0) = y_0$. Si se supone que las funciones $f$ y $f_y$ son continuas en una región $R$ del plano que incluye al punto $(t_0, y_0)$, es posible demostrar que existe una constante $L$ tal que $|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}|$, en donde $(t, y)$ y $(t, \tilde{y})$ son dos puntos cualesquiera en $R$ que tiene la misma coordenada $t$ (ver el problema 11 de la sección 2.11). Además, se supone que $f_t$ es continua, de modo que la segunda derivada de la función $\phi$ es continua.

a) Aplique la ecuación (9) para demostrar que

$$|E_{n+1}| \le |E_n| + h|f[t_n, \phi(t_n)] - f(t_n, y_n)| + \frac{1}{2}h^2|\phi''(t_n)| \le \alpha |E_n| + \beta h^2, \quad \text{(i)}$$

en donde $\alpha = 1 + hL$ y $\beta = \text{máx } \phi''(t)/2$ sobre $t_0 \le t \le t_n$.

b) Si se acepta sin demostración que si $E_0 = 0$ y si $|E_n|$ satisface la ecuación (i), entonces $|E_n| \le \beta h^2(\alpha^n - 1)/(\alpha - 1)$ para $\alpha \ne 1$, demuestre que

$$|E_n| \le \frac{(1 + hL)^n}{L} \beta h. \quad \text{(ii)}$$

La ecuación (ii) da una cota para $|E_n|$ en términos de $h$, $L$, $n$ y $\beta$. Observe que para $h$ fijo, esta cota del error aumenta con la $n$ creciente; es decir, la cota de error aumenta con la distancia al punto de partida $t_0$.

c) Demuestre que $(1 + hL)^n \le e^{nhL}$, de donde

$$|E_n| \le \frac{e^{nhL} - 1}{L} \beta h \le \frac{e^{(t_n - t_0)L} - 1}{L} \beta h.$$
