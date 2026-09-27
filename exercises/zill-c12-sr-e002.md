---
title: "Zill Repaso C12 Ejercicio 2"
exercise-id: zill-c12-sr-e002
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 12, ejercicio 2"
topics:
  - contorno
competencies:
  - seleccionar-metodo.separacion-variables-edp
  - resolver-edp.separacion-variables
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - calculo-avanzado.derivadas-parciales
  - algebra.ecuaciones-caracteristicas
statement-status: accepted
solution-status: draft
metadata-status: pending
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c12sri01-p512.png
---

## Enunciado

Use separación de variables para determinar las soluciones producto de
$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + 2\frac{\partial u}{\partial x} + 2\frac{\partial u}{\partial y} = 0.
$$
¿Es posible elegir una constante de separación tal que tanto $X$ como $Y$ sean funciones oscilatorias?

## Solución

Con la solución producto $u(x,y)=X(x)Y(y)$ y constante de separación $-\lambda$, ambas funciones satisfacen EDO lineales homogéneas de coeficientes constantes:

$$
X''+2X'+\lambda X=0, \qquad Y''+2Y'-\lambda Y=0.
$$

Las raíces características son $-1\pm\sqrt{1-\lambda}$ para $X$ y $-1\pm\sqrt{1+\lambda}$ para $Y$. Las soluciones producto son

$$
u(x,y)=e^{-(x+y)}\left(c_1e^{\sqrt{1-\lambda}\,x}+c_2e^{-\sqrt{1-\lambda}\,x}\right)\left(d_1e^{\sqrt{1+\lambda}\,y}+d_2e^{-\sqrt{1+\lambda}\,y}\right),
$$

donde $\lambda$ es real arbitrario, $\lambda\ne\pm1$; cuando un radicando es negativo, el factor correspondiente se escribe con $\cos$ y $\sin$. Los casos límite son $X=e^{-x}(c_1+c_2x)$ para $\lambda=1$ y $Y=e^{-y}(d_1+d_2y)$ para $\lambda=-1$.

No existe ninguna constante de separación que haga oscilatorias a $X$ y a $Y$ a la vez: $X$ oscila solo si $\lambda>1$ y $Y$ solo si $\lambda<-1$, condiciones incompatibles.

## Resolución

Se propone la solución producto $u(x,y)=X(x)Y(y)$. Sus derivadas parciales son $u_{xx}=X''Y$, $u_{yy}=XY''$, $u_x=X'Y$ y $u_y=XY'$. Al sustituir en la ecuación diferencial parcial resulta

$$
X''Y+XY''+2X'Y+2XY'=0.
$$

Se agrupan los términos de cada variable y se divide entre el producto $XY$, supuesto no nulo:

$$
\frac{X''+2X'}{X}+\frac{Y''+2Y'}{Y}=0
\quad\Longrightarrow\quad
\frac{X''+2X'}{X}=-\frac{Y''+2Y'}{Y}.
$$

El miembro izquierdo depende solo de $x$ y el derecho solo de $y$. Para que la igualdad se cumpla en una región del plano, ambos deben ser la misma constante. Se denota $-\lambda$:

$$
\frac{X''+2X'}{X}=-\frac{Y''+2Y'}{Y}=-\lambda.
$$

De aquí resultan dos EDO lineales homogéneas de coeficientes constantes:

$$
\begin{aligned}
X''+2X'+\lambda X &= 0, \\
Y''+2Y'-\lambda Y &= 0.
\end{aligned}
$$

Cada solución se obtiene de su ecuación característica. Para $X$,

$$
r^{2}+2r+\lambda=0 \quad\Longrightarrow\quad r=-1\pm\sqrt{1-\lambda},
$$

y para $Y$,

$$
s^{2}+2s-\lambda=0 \quad\Longrightarrow\quad s=-1\pm\sqrt{1+\lambda}.
$$

El carácter de las raíces, y por tanto el de las soluciones, depende del signo de los radicandos.

**Caso $\lambda>1$.** En la ecuación de $X$ se tiene $1-\lambda<0$; las raíces son complejas $-1\pm i\sqrt{\lambda-1}$ y

$$
X(x)=e^{-x}\left(c_1\cos\sqrt{\lambda-1}\,x+c_2\sin\sqrt{\lambda-1}\,x\right),
$$

que es oscilatoria. En la ecuación de $Y$ se tiene $1+\lambda>0$; las raíces son reales y

$$
Y(y)=e^{-y}\left(d_1e^{\sqrt{1+\lambda}\,y}+d_2e^{-\sqrt{1+\lambda}\,y}\right),
$$

que no es oscilatoria.

**Caso $-1<\lambda<1$.** Ambos radicandos son positivos, de modo que las cuatro raíces son reales:

$$
X(x)=e^{-x}\left(c_1e^{\sqrt{1-\lambda}\,x}+c_2e^{-\sqrt{1-\lambda}\,x}\right),
\qquad
Y(y)=e^{-y}\left(d_1e^{\sqrt{1+\lambda}\,y}+d_2e^{-\sqrt{1+\lambda}\,y}\right).
$$

Ninguno de los dos factores es oscilatorio.

**Caso $\lambda<-1$.** Es simétrico al primero. Las raíces de $X$ son reales y las de $Y$ complejas:

$$
X(x)=e^{-x}\left(c_1e^{\sqrt{1-\lambda}\,x}+c_2e^{-\sqrt{1-\lambda}\,x}\right),
\qquad
Y(y)=e^{-y}\left(d_1\cos\sqrt{-\lambda-1}\,y+d_2\sin\sqrt{-\lambda-1}\,y\right).
$$

Ahora solo $Y$ es oscilatoria.

**Casos límite $\lambda=1$ y $\lambda=-1$.** Si $\lambda=1$, la raíz de la ecuación de $X$ es doble, $r=-1$, y $X=e^{-x}(c_1+c_2x)$; si $\lambda=-1$, la raíz doble $s=-1$ aparece en la ecuación de $Y$ y $Y=e^{-y}(d_1+d_2y)$. En ninguno de los dos casos hay factor oscilatorio.

Por tanto, $X$ es oscilatoria exactamente cuando $\lambda>1$, y $Y$ lo es exactamente cuando $\lambda<-1$. Las dos condiciones no pueden satisfacerse a la vez, así que no existe una constante de separación que haga oscilatorias a ambas funciones.

**Comprobación.** De las EDO se tiene $X''+2X'=-\lambda X$ y $Y''+2Y'=\lambda Y$. Entonces

$$
u_{xx}+u_{yy}+2u_x+2u_y
=(X''+2X')Y+X(Y''+2Y')
=-\lambda XY+\lambda XY=0,
$$

de modo que toda solución producto así construida satisface la ecuación diferencial parcial.

## Observaciones

Los términos de primer orden de la EDP no cambian el criterio de oscilación, solo añaden el factor exponencial $e^{-(x+y)}$. Con los cambios $X=e^{-x}W$ y $Y=e^{-y}V$, las EDO se reducen a $W''+(\lambda-1)W=0$ y $V''-(\lambda+1)V=0$; el signo de $\lambda-1$ y de $-(1+\lambda)$ decide qué factor oscila. En el caso $\lambda>1$, $X$ es una oscilación amortiguada por $e^{-x}$.

Como el enunciado no impone condiciones de frontera ni iniciales, la constante $\lambda$ queda libre y cada valor produce una solución producto distinta. Por el **principio de superposición**, cualquier combinación lineal finita de soluciones producto también resuelve la EDP.
