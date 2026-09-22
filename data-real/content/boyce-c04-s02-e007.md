
## Enunciado

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero y que

$$[e^{i(\theta + 2m\pi)}]^{1/n} = e^{i(\theta + 2m\pi)/n} = \cos\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right) + i\sin\left(\frac{\theta}{n} + \frac{2m\pi}{n}\right).$$

En cada uno de los problemas 7 a 10 aplique estos hechos para determinar la raíz indicada del número complejo dado.

7. $1^{1/3}$

## Solución

Las raíces cúbicas de $1$ son

$$
1^{1/3} = 1,\qquad -\frac{1}{2}+i\frac{\sqrt{3}}{2},\qquad -\frac{1}{2}-i\frac{\sqrt{3}}{2}.
$$

## Resolución

El número $1$ se escribe en forma exponencial. Su módulo es $R=1$ y su argumento principal es $\theta=0$, de modo que

$$
1 = e^{i(0+2m\pi)} = e^{i2m\pi},\qquad m\in\mathbb{Z}.
$$

Al aplicar el hecho del enunciado con $n=3$,

$$
1^{1/3} = \left(e^{i(0+2m\pi)}\right)^{1/3} = e^{i(0+2m\pi)/3} = \cos\left(\frac{2m\pi}{3}\right) + i\sin\left(\frac{2m\pi}{3}\right).
$$

El argumento solo está definido módulo $2\pi$, por lo que bastan $m=0,1,2$ para obtener raíces distintas; el valor $m=3$ reproduce $m=0$. Se evalúa cada caso:

$$
\begin{aligned}
m=0:&\quad \cos 0 + i\sin 0 = 1, \\
m=1:&\quad \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}, \\
m=2:&\quad \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}.
\end{aligned}
$$

Estas tres expresiones son las raíces cúbicas distintas de la unidad.

## Observaciones

- En $\mathbb{C}$ el símbolo $1^{1/3}$ no designa un único número: la ecuación $z^3=1$ tiene tres soluciones. Al recorrer $m=0,1,\dots,n-1$ con el argumento $\theta+2m\pi$ se recogen las $n$ raíces distintas.
- Comprobación directa: cada resultado elevado al cubo vale $1$; por ejemplo, $\left(-\frac{1}{2}+i\frac{\sqrt{3}}{2}\right)^3 = 1$.
