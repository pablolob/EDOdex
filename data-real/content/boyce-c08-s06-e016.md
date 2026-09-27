
## Enunciado

En este problema se demuestra que la fórmula correctora (5) de Adams-Moulton es estable para la ecuación diferencial lineal $y' = Ay$.
a) Demuestre que la solución de la ecuación diferencial es $y = ce^{At}$.
b) Demuestre que la ecuación en diferencias adecuada es
$$(1 - 9\alpha)y_{n+1} - (1 + 19\alpha)y_n + 5\alpha y_{n-1} - \alpha y_{n-2} = 0 \quad \text{(i)}$$
en donde $\alpha = Ah / 24$.
c) En seguida, demuestre que $y_n = \lambda^n$ es una solución de la ecuación (i) si $\lambda$ es una raíz de
$$(1 - 9\alpha)\lambda^3 - (1 + 19\alpha)\lambda^2 + 5\alpha\lambda - \alpha = 0 \quad \text{(ii)}$$
d) En el límite cuando $h \to 0$, lo cual implica que $\alpha \to 0$, demuestre que las raíces de la (ii) son $\lambda_1 = 1, \lambda_2 = 0, \lambda_3 = 0$.
e) Se examinará la raíz $\lambda_1$ con más cuidado para $h$ pequeño. Sea $\lambda_1 = 1 + \lambda_{11}h$, sustituya en la ecuación (ii) y desprecie los términos proporcionales a $h^2$ o superiores. Deduzca que $\lambda_{11} = A$ y demuestre que si $y_1 = \lambda_1^n \simeq (1 + Ah)^n$ entonces $y_1 \to e^{Atn}$ cuando $h \to 0$, al usar $t_n = nh$.
Por tanto, la solución correspondiente a $\lambda_1$ se aproxima a la solución verdadera de la ecuación diferencial. Para $h$ pequeño se tiene $|\lambda_2| < 1$ y $|\lambda_3| < 1$; por tanto, las soluciones extrañas correspondientes no crecerán. Como consecuencia, la fórmula correctora de Adams-Moulton es muy estable.
