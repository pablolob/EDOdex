
## Enunciado

En cada uno de los problemas 1 a 6, exprese el número complejo dado en la forma $a + ib$.

2. $\exp(2 - 3i)$

## Solución

Con $a=e^{2}\cos 3$ y $b=-e^{2}\sin 3$,

$$
\exp(2-3i)=e^{2}\cos 3-i\,e^{2}\sin 3.
$$

## Resolución

Se emplea la **fórmula de Euler** $e^{i\theta}=\cos\theta+i\sin\theta$. El exponente se escribe como $2+(-3)i$, de modo que la exponencial se factoriza:

$$
\exp(2-3i)=e^{2}e^{-3i}=e^{2}\left(\cos(-3)+i\sin(-3)\right).
$$

Como $\cos(-3)=\cos 3$ y $\sin(-3)=-\sin 3$,

$$
\exp(2-3i)=e^{2}\left(\cos 3-i\sin 3\right)=e^{2}\cos 3-i\,e^{2}\sin 3.
$$

Al comparar con la forma $a+ib$ se identifica $a=e^{2}\cos 3$ y $b=-e^{2}\sin 3$.

## Observaciones

El ángulo $3$ está en radianes. Las partes real e imaginaria son ambas negativas, de modo que el número se ubica en el tercer cuadrante. Los valores aproximados son $a\approx -7.3151$ y $b\approx -1.0427$. Las expresiones $e^{2}\cos 3$ y $-e^{2}\sin 3$ son la forma exacta; no se reducen a números racionales.
