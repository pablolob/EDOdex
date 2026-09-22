---
title: "Boyce 6.1 Ejercicio 17"
exercise-id: boyce-c06-s01-e017
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 6.1, ejercicio 17"
statement-status: accepted
solution-status: draft
topics:
  - laplace
competencies:
  - resolver-analiticamente.transformada-laplace
  - aplicar-condiciones.problema-valor-inicial
prerequisitos:
  - transformadas.transformada-laplace
  - algebra.factorizacion-polinomios
  - integracion.fracciones-parciales
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c06s01i01-p324.png
---

## Enunciado

En cada uno de los problemas 11 a 23 aplique la transformada de Laplace para resolver el problema con valor inicial dado.

17. $y^{\text{iv}} - 4y''' + 6y'' - 4y' + y = 0; \quad y(0) = 0, \quad y'(0) = 1, \quad y''(0) = 0, \quad y'''(0) = 1$

## Solución

La solución del problema con valor inicial es

$$
y(t) = e^{t}\left(t - t^{2} + \frac{2}{3}t^{3}\right), \qquad t \ge 0.
$$

## Resolución

Se aplica la **transformada de Laplace** a ambos miembros de la ecuación. Sea $Y(s)=\mathcal{L}\{y(t)\}$. Con las condiciones iniciales $y(0)=0$, $y'(0)=1$, $y''(0)=0$ y $y'''(0)=1$, las transformadas de las derivadas son

$$
\begin{aligned}
\mathcal{L}\{y'\} &= sY(s) - y(0) = sY(s),\\
\mathcal{L}\{y''\} &= s^{2}Y(s) - s\,y(0) - y'(0) = s^{2}Y(s) - 1,\\
\mathcal{L}\{y'''\} &= s^{3}Y(s) - s^{2}y(0) - s\,y'(0) - y''(0) = s^{3}Y(s) - s,\\
\mathcal{L}\{y^{(4)}\} &= s^{4}Y(s) - s^{3}y(0) - s^{2}y'(0) - s\,y''(0) - y'''(0) = s^{4}Y(s) - s^{2} - 1.
\end{aligned}
$$

Al sustituir en la ecuación $y^{(4)}-4y'''+6y''-4y'+y=0$ resulta

$$
\left(s^{4}Y - s^{2} - 1\right) - 4\left(s^{3}Y - s\right) + 6\left(s^{2}Y - 1\right) - 4sY + Y = 0.
$$

Se agrupan los términos en $Y$. Los términos constantes suman $-s^{2}-1+4s-6 = -s^{2}+4s-7$, de modo que

$$
\left(s^{4} - 4s^{3} + 6s^{2} - 4s + 1\right)Y = s^{2} - 4s + 7.
$$

El polinomio que multiplica a $Y$ es una potencia cuarta,

$$
s^{4} - 4s^{3} + 6s^{2} - 4s + 1 = (s-1)^{4},
$$

y por tanto

$$
Y(s) = \frac{s^{2}-4s+7}{(s-1)^{4}}.
$$

El denominador es un factor lineal repetido. Se escribe el numerador como combinación de potencias de $s-1$, lo que equivale a la descomposición en **fracciones parciales** para un polo cuádruple:

$$
s^{2}-4s+7 = (s-1)^{2} - 2(s-1) + 4.
$$

Con esto,

$$
Y(s) = \frac{1}{(s-1)^{2}} - \frac{2}{(s-1)^{3}} + \frac{4}{(s-1)^{4}}.
$$

Se invierte término a término con el par

$$
\mathcal{L}^{-1}\!\left\{\frac{1}{(s-a)^{n}}\right\} = \frac{t^{\,n-1}}{(n-1)!}\,e^{at}, \qquad n \ge 1,
$$

con $a=1$:

$$
\begin{aligned}
\mathcal{L}^{-1}\!\left\{\frac{1}{(s-1)^{2}}\right\} &= t\,e^{t},\\
\mathcal{L}^{-1}\!\left\{\frac{1}{(s-1)^{3}}\right\} &= \frac{t^{2}}{2}\,e^{t},\\
\mathcal{L}^{-1}\!\left\{\frac{1}{(s-1)^{4}}\right\} &= \frac{t^{3}}{6}\,e^{t}.
\end{aligned}
$$

Por **linealidad** de la transformada inversa,

$$
y(t) = t\,e^{t} - t^{2}e^{t} + \frac{2}{3}t^{3}e^{t} = e^{t}\left(t - t^{2} + \frac{2}{3}t^{3}\right).
$$

La solución satisface las cuatro condiciones iniciales. Con $P(t)=t-t^{2}+\frac{2}{3}t^{3}$ se tiene $P(0)=0$, $P'(0)=1$, $P''(0)=-2$ y $P'''(0)=4$; como $y=e^{t}P$, en $t=0$ resultan $y(0)=0$, $y'(0)=1$, $y''(0)=0$ y $y'''(0)=1$.

## Observaciones

La ecuación característica asociada es $r^{4}-4r^{3}+6r^{2}-4r+1=(r-1)^{4}$, con la raíz $r=1$ de multiplicidad cuatro. La solución general es entonces $(C_1+C_2t+C_3t^{2}+C_4t^{3})e^{t}$, y las cuatro condiciones iniciales fijan la misma solución. El factor repetido $(s-1)^{4}$ en $Y(s)$ refleja esa raíz múltiple. La solución está definida y es suave para todo $t \ge 0$.
