---
title: "Boyce 4.4 Ejercicio 6"
exercise-id: boyce-c04-s04-e006
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.4, ejercicio 6"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.variacion-parametros
hidden-competencies:
  - seleccionar-metodo.variacion-parametros
prerequisitos:
  - ecuaciones-diferenciales.wronskiano
  - matrices.determinantes
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s04i01-p240.png
---

## Enunciado

Halle una fórmula que comprenda integrales para una solución particular de la ecuación diferencial

$$y^{\mathrm{iv}} - y = g(x).$$

Sugerencia: las funciones $\sin x$, $\cos x$, $\sinh x$ y $\cosh x$ forman un conjunto fundamental de soluciones de la ecuación homogénea.

## Solución

$$
y_p(x)=\frac{1}{2}\int_0^x \bigl[\sinh(x-t)-\sin(x-t)\bigr]\,g(t)\,dt.
$$

## Resolución

La ecuación es **lineal**, de **cuarto orden**, **no homogénea** y con coeficientes constantes. El enunciado pide una fórmula con integrales y proporciona un conjunto fundamental de la ecuación homogénea $y^{\mathrm{iv}}-y=0$:

$$
y_1=\sin x,\qquad y_2=\cos x,\qquad y_3=\sinh x,\qquad y_4=\cosh x.
$$

Se aplica **variación de parámetros**. Se busca $y_p=u_1y_1+u_2y_2+u_3y_3+u_4y_4$, donde las funciones $u_k$ satisfacen el sistema

$$
\begin{aligned}
u_1'y_1+u_2'y_2+u_3'y_3+u_4'y_4 &= 0, \\
u_1'y_1'+u_2'y_2'+u_3'y_3'+u_4'y_4' &= 0, \\
u_1'y_1''+u_2'y_2''+u_3'y_3''+u_4'y_4'' &= 0, \\
u_1'y_1'''+u_2'y_2'''+u_3'y_3'''+u_4'y_4''' &= g(x).
\end{aligned}
$$

**Wronskiano.** La matriz wronskiana del conjunto fundamental es

$$
W(x)=
\begin{vmatrix}
\sin x & \cos x & \sinh x & \cosh x \\
\cos x & -\sin x & \cosh x & \sinh x \\
-\sin x & -\cos x & \sinh x & \cosh x \\
-\cos x & \sin x & \cosh x & \sinh x
\end{vmatrix}.
$$

El coeficiente de $y'''$ es nulo, de modo que la fórmula de Abel da $W'(x)=0$: el wronskiano es constante. Al evaluarlo en $x=0$ resulta $W=4$.

**Regla de Cramer.** Cada derivada es $u_k'=W_k/W$, donde $W_k$ se obtiene sustituyendo la $k$-ésima columna de $W$ por el vector $(0,0,0,g(x))$. Los determinantes valen

$$
W_1=-2g(x)\cos x,\qquad W_2=2g(x)\sin x,\qquad W_3=2g(x)\cosh x,\qquad W_4=-2g(x)\sinh x,
$$

de donde

$$
u_1'=-\frac{1}{2}g(x)\cos x,\quad u_2'=\frac{1}{2}g(x)\sin x,\quad u_3'=\frac{1}{2}g(x)\cosh x,\quad u_4'=-\frac{1}{2}g(x)\sinh x.
$$

**Integración.** Se integran las expresiones anteriores con la variable muda $t$ y las constantes de integración iguales a cero, ya que solo se requiere una solución particular. Al sustituir en $y_p=u_1y_1+u_2y_2+u_3y_3+u_4y_4$,

$$
\begin{aligned}
y_p &= -\frac{1}{2}\sin x\int_0^x g(t)\cos t\,dt
     +\frac{1}{2}\cos x\int_0^x g(t)\sin t\,dt
     +\frac{1}{2}\sinh x\int_0^x g(t)\cosh t\,dt
     -\frac{1}{2}\cosh x\int_0^x g(t)\sinh t\,dt \\
    &= \frac{1}{2}\int_0^x g(t)\bigl[-\sin x\cos t+\cos x\sin t+\sinh x\cosh t-\cosh x\sinh t\bigr]\,dt.
\end{aligned}
$$

Las identidades $\cos x\sin t-\sin x\cos t=\sin(t-x)=-\sin(x-t)$ y $\sinh x\cosh t-\cosh x\sinh t=\sinh(x-t)$ reducen el corchete a $\sinh(x-t)-\sin(x-t)$. Así,

$$
y_p(x)=\frac{1}{2}\int_0^x \bigl[\sinh(x-t)-\sin(x-t)\bigr]\,g(t)\,dt.
$$

**Comprobación.** Sea $F(x)=\tfrac{1}{2}\int_0^x[\sinh(x-t)-\sin(x-t)]g(t)\,dt$. Derivando con la regla de Leibniz,

$$
\begin{aligned}
F'(x) &= \frac{1}{2}\int_0^x\bigl[\cosh(x-t)-\cos(x-t)\bigr]g(t)\,dt, \\
F''(x) &= \frac{1}{2}\int_0^x\bigl[\sinh(x-t)+\sin(x-t)\bigr]g(t)\,dt, \\
F'''(x) &= \frac{1}{2}\int_0^x\bigl[\cosh(x-t)+\cos(x-t)\bigr]g(t)\,dt, \\
F^{\mathrm{iv}}(x) &= g(x)+\frac{1}{2}\int_0^x\bigl[\sinh(x-t)-\sin(x-t)\bigr]g(t)\,dt = g(x)+F(x).
\end{aligned}
$$

Por tanto, $F^{\mathrm{iv}}-F=g(x)$: la fórmula satisface la ecuación.

**Validez.** Si $g$ es continua en un intervalo que contiene a $0$, la fórmula define una solución particular en ese intervalo. La solución general es $y=y_c+y_p$, con $y_c=c_1\sin x+c_2\cos x+c_3\sinh x+c_4\cosh x$.

## Observaciones

El límite inferior $0$ de las integrales es una elección arbitraria. Cualquier otro punto fijo $x_0$ conduce a otra solución particular; la diferencia entre ambas es una combinación de $\sin x$, $\cos x$, $\sinh x$ y $\cosh x$, es decir, una solución de la ecuación homogénea.

La ecuación admite la factorización $D^4-1=(D^2+1)(D^2-1)$. Eso explica que el conjunto fundamental se divida en las soluciones de $y''+y=0$, que son $\sin x$ y $\cos x$, y las de $y''-y=0$, que son $\sinh x$ y $\cosh x$. El núcleo de la fórmula conserva esa separación en una parte trigonométrica y otra hiperbólica.

### Método alternativo: factorización del operador

Como $D^4-1=(D^2+1)(D^2-1)$, una solución particular de $y^{\mathrm{iv}}-y=g(x)$ es

$$
y_p=\frac{1}{2}\left(\int_0^x \sinh(x-t)\,g(t)\,dt-\int_0^x \sin(x-t)\,g(t)\,dt\right),
$$

pues $\int_0^x\sinh(x-t)g(t)\,dt$ resuelve $y''-y=g$ y $\int_0^x\sin(x-t)g(t)\,dt$ resuelve $y''+y=g$. Esta vía reproduce la fórmula obtenida por variación de parámetros.
