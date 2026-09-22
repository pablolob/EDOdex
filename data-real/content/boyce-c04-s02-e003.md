
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma

$$R(\cos\theta + i\sin\theta) = Re^{i\theta}.$$

Observe que $e^{i(\theta + 2m\pi)} = e^{i\theta}$ si $m$ es un entero.

3. $-3$

## Solución

El número complejo es real negativo. Su módulo es $R = 3$ y su argumento principal es $\theta = \pi$. Por tanto,

$$
-3 = 3\left(\cos\pi + i\sin\pi\right) = 3e^{i\pi} = 3e^{i(\pi + 2m\pi)}, \qquad m \in \mathbb{Z}.
$$

## Resolución

Un número complejo $z = a + bi$ se escribe en forma polar como $z = R(\cos\theta + i\sin\theta) = Re^{i\theta}$, donde $R = |z| \ge 0$ es el módulo y $\theta$ es un argumento de $z$.

Para $z = -3$ se tiene $a = -3$ y $b = 0$. El módulo es

$$
R = \sqrt{a^2 + b^2} = \sqrt{(-3)^2 + 0^2} = 3.
$$

El argumento $\theta$ satisface

$$
\cos\theta = \frac{a}{R} = \frac{-3}{3} = -1, \qquad \sin\theta = \frac{b}{R} = \frac{0}{3} = 0.
$$

El único ángulo en $[0, 2\pi)$ que cumple ambas condiciones es $\theta = \pi$. Sustituyendo $R$ y $\theta$,

$$
-3 = 3\left(\cos\pi + i\sin\pi\right) = 3e^{i\pi}.
$$

Como el argumento solo está determinado módulo $2\pi$, la forma exponencial completa es

$$
-3 = 3e^{i(\pi + 2m\pi)}, \qquad m \in \mathbb{Z},
$$

que coincide con la identidad $e^{i(\theta + 2m\pi)} = e^{i\theta}$ del enunciado.

## Observaciones

El argumento de un número complejo no nulo es único salvo múltiplos enteros de $2\pi$. El valor $\theta = \pi$ es el argumento principal, situado en $[0, 2\pi)$; cualquier otro argumento válido difiere de él en $2m\pi$. Al tratarse de un número real, el argumento solo puede ser $0$ (para $R > 0$) o $\pi$ (para $R < 0$), según el signo.
