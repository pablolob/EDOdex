
## Enunciado

Encuentre dos soluciones linealmente independientes de la ecuación de Bessel de orden $\frac{3}{2}$,

$$x^2 y'' + xy' + \left(x^2 - \frac{9}{4}\right)y = 0, \quad x > 0$$

## Solución

La ecuación es la **ecuación de Bessel de orden** $\nu=\frac{3}{2}$. Dos soluciones linealmente independientes para $x>0$ son las funciones de Bessel

$$
y_1(x)=J_{3/2}(x)=\sqrt{\frac{2}{\pi x}}\left(\frac{\sin x}{x}-\cos x\right),
$$

$$
y_2(x)=J_{-3/2}(x)=-\sqrt{\frac{2}{\pi x}}\left(\frac{\cos x}{x}+\sin x\right).
$$

La solución general es

$$
y(x)=C_1J_{3/2}(x)+C_2J_{-3/2}(x).
$$

## Resolución

Se compara la ecuación con la forma estándar de la ecuación de Bessel,

$$
x^2y''+xy'+\left(x^2-\nu^2\right)y=0.
$$

La comparación directa da $\nu^2=\frac{9}{4}$, de modo que $\nu=\frac{3}{2}$ (la ecuación depende de $\nu^2$, así que se toma el valor positivo).

Como $\nu=\frac{3}{2}$ no es un entero, las funciones de Bessel $J_\nu$ y $J_{-\nu}$ son linealmente independientes y constituyen un conjunto fundamental de soluciones. La solución general para $x>0$ es

$$
y(x)=C_1J_{3/2}(x)+C_2J_{-3/2}(x).
$$

Para escribir $J_{\pm3/2}$ en forma elemental se usa la **relación de recurrencia**

$$
J_{\nu-1}(x)+J_{\nu+1}(x)=\frac{2\nu}{x}J_\nu(x)
$$

y las funciones de orden $\pm\frac{1}{2}$,

$$
J_{1/2}(x)=\sqrt{\frac{2}{\pi x}}\,\sin x,\qquad
J_{-1/2}(x)=\sqrt{\frac{2}{\pi x}}\,\cos x.
$$

Con $\nu=\frac{1}{2}$ la recurrencia es $J_{-1/2}+J_{3/2}=\frac{1}{x}J_{1/2}$; al despejar,

$$
J_{3/2}(x)=\frac{1}{x}J_{1/2}(x)-J_{-1/2}(x)
=\sqrt{\frac{2}{\pi x}}\left(\frac{\sin x}{x}-\cos x\right).
$$

Con $\nu=-\frac{1}{2}$ la recurrencia es $J_{-3/2}+J_{1/2}=-\frac{1}{x}J_{-1/2}$; al despejar,

$$
J_{-3/2}(x)=-\frac{1}{x}J_{-1/2}(x)-J_{1/2}(x)
=-\sqrt{\frac{2}{\pi x}}\left(\frac{\cos x}{x}+\sin x\right).
$$

La independencia lineal se comprueba con el **Wronskiano**. Con $c=\sqrt{2/\pi}$, $p(x)=\sin x-x\cos x$ y $q(x)=\cos x+x\sin x$ se tiene $J_{3/2}=c\,x^{-3/2}p$ y $J_{-3/2}=-c\,x^{-3/2}q$. Para un factor común $f(x)$ vale $W(fp,fq)=f^2W(p,q)$; con $f=x^{-3/2}$,

$$
W\!\left(J_{3/2},J_{-3/2}\right)=-c^2\,x^{-3}\,W(p,q).
$$

Como $p'=x\sin x$ y $q'=x\cos x$,

$$
W(p,q)=p\,q'-p'\,q
=(\sin x-x\cos x)(x\cos x)-(x\sin x)(\cos x+x\sin x)=-x^2.
$$

Por tanto,

$$
W\!\left(J_{3/2},J_{-3/2}\right)=-c^2\,x^{-3}(-x^2)=\frac{c^2}{x}=\frac{2}{\pi x}\ne 0,\qquad x>0.
$$

El Wronskiano no se anula, luego $J_{3/2}$ y $J_{-3/2}$ son linealmente independientes en $x>0$.

## Observaciones

La segunda solución de Bessel $Y_{3/2}$ coincide con $J_{-3/2}$; por eso $\{J_{3/2},Y_{3/2}\}$ es otro conjunto fundamental.

Las funciones de orden $\pm\frac{1}{2}$ empleadas proceden de reducir la ecuación de orden $\frac{1}{2}$ a $v''+v=0$ mediante el cambio $y=x^{-1/2}v$.

Las soluciones halladas son, salvo constantes, las funciones de Bessel esféricas de primer orden: $J_{3/2}(x)=\sqrt{2x/\pi}\,j_1(x)$.

El punto $x=0$ es un punto singular regular de la ecuación; de ahí que el enunciado restrinja el dominio a $x>0$.
