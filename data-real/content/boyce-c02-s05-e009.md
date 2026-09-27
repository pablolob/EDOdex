
## Enunciado

Una persona solicita un préstamo de $\$8\,000$ para comprar un automóvil. El prestamista carga el interés a una tasa anual del 10%. Si se supone que el interés se compone de manera continua y que el deudor efectúa pagos continuamente con una cuota anual constante $k$, determine la cuota de pago $k$ necesaria para cubrir el adeudo en tres años. Determine también cuánto interés se paga durante el periodo de tres años.

## Solución

La cuota anual constante que liquida el adeudo en tres años es

$$
k=\frac{8000\,e^{0.3}}{e^{0.3}-1}\approx \$3\,086.64,
$$

y el interés total pagado durante el periodo es

$$
3k-8000\approx \$1\,259.91.
$$

## Resolución

Sea $S(t)$ el saldo deudor, en dólares, transcurridos $t$ años. El interés se acumula de forma continua a razón de $0.10\,S(t)$ por año, mientras que los pagos continuos disminuyen el saldo a razón de $k$ por año. El saldo satisface la **ecuación lineal de primer orden**

$$
\frac{dS}{dt}=0.10\,S-k,\qquad S(0)=8000.
$$

En forma estándar,

$$
\frac{dS}{dt}-0.10\,S=-k.
$$

El factor integrante es $\mu(t)=e^{-0.10t}$. Al multiplicar la ecuación por $\mu(t)$, el miembro izquierdo es la derivada de un producto:

$$
\frac{d}{dt}\!\left(e^{-0.10t}S\right)=-k\,e^{-0.10t}.
$$

Integrando ambos miembros,

$$
e^{-0.10t}S(t)=\frac{k}{0.10}e^{-0.10t}+C,
$$

de donde

$$
S(t)=10k+C e^{0.10t}.
$$

La condición inicial $S(0)=8000$ fija $C=8000-10k$. Por tanto,

$$
S(t)=10k+(8000-10k)\,e^{0.10t}.
$$

El adeudo queda cubierto en tres años, es decir, $S(3)=0$:

$$
10k+(8000-10k)\,e^{0.3}=0.
$$

Se despeja $k$:

$$
\begin{aligned}
8000\,e^{0.3} &= 10k\left(e^{0.3}-1\right), \\
k &= \frac{800\,e^{0.3}}{e^{0.3}-1}=\frac{800}{1-e^{-0.3}}.
\end{aligned}
$$

Con $e^{0.3}\approx 1.34986$,

$$
k\approx \$3\,086.64.
$$

El total desembolsado en los tres años es $3k\approx \$9\,259.91$. El interés pagado es la diferencia entre ese total y el principal prestado:

$$
3k-8000\approx \$1\,259.91.
$$

## Observaciones

El saldo es estrictamente decreciente en el intervalo de validez $0\le t\le 3$. En efecto, como $0.10\,S(t)\le 0.10\cdot 8000=800<k$, la pendiente $\frac{dS}{dt}=0.10\,S-k$ es negativa mientras la deuda no se ha saldado. El modelo solo describe el periodo del préstamo; después de $t=3$ la expresión de $S(t)$ daría un saldo negativo, que carece de sentido porque los pagos cesan al cubrirse el adeudo.
