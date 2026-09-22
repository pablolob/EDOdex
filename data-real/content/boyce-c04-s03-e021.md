
## Enunciado

Aplique el método de los aniquiladores para encontrar la forma de la solución particular $Y(x)$ para cada una de las ecuaciones de los problemas 12 a 17. No evalúe los coeficientes.

## Solución

$$
\begin{aligned}
12.\quad Y &= x(Ax^3+Bx^2+Cx+D)+Ex^2e^{x},\\
13.\quad Y &= (Ax^2+Bx)e^{-x}+C\cos x+D\sin x,\\
14.\quad Y &= Ax^2e^{x}+B\cos x+C\sin x,\\
15.\quad Y &= Ax^2+(Bx+C)e^{x}+x(D\cos 2x+E\sin 2x),\\
16.\quad Y &= Ax^3+Bx^2+Cx+D\cos x+E\sin x+Fx\cos x+Gx\sin x,\\
17.\quad Y &= Ae^{x}+(Bx+C)e^{-x}+xe^{-x}(D\cos x+E\sin x).
\end{aligned}
$$

## Resolución

El **método de los aniquiladores** reduce la ecuación no homogénea $L(D)y=g(x)$ a una ecuación homogénea. Si $A(D)$ es un operador que anula $g(x)$, entonces

$$
A(D)L(D)y=0.
$$

El polinomio característico de esta ecuación aumentada es $A(r)L(r)$. Las raíces nuevas, es decir, las raíces de $A(r)$ que no figuran ya en $L(r)$, determinan la forma de la solución particular $Y$. Los términos que duplican a los de $y_c$ se descartan.

Los aniquiladores que se emplean son: $D^{m+1}$ para un polinomio de grado $m$, $(D-a)^{k+1}$ para $x^ke^{ax}$, y $(D-a)^2+b^2$ para $e^{ax}\sin bx$ o $e^{ax}\cos bx$.

**Problema 12.** $L(D)=D^3-2D^2+D=D(D-1)^2$, con raíces $0$ (simple) y $1$ (doble). El aniquilador de $x^3+2e^{x}$ es $D^4(D-1)$. La ecuación aumentada es

$$
D^4(D-1)\,D(D-1)^2y=D^5(D-1)^3y=0,
$$

cuyas raíces son $0$ (multiplicidad $5$) y $1$ (multiplicidad $3$). Al descartar los términos de $y_c$ quedan $x,x^2,x^3,x^4$ y $x^2e^{x}$:

$$
Y=x(Ax^3+Bx^2+Cx+D)+Ex^2e^{x}.
$$

**Problema 13.** $L(D)=D^3-D=D(D-1)(D+1)$, con raíces $0,1,-1$. El aniquilador de $xe^{-x}+2\cos x$ es $(D+1)^2(D^2+1)$. La ecuación aumentada es

$$
(D+1)^2(D^2+1)\,D(D-1)(D+1)y=D(D-1)(D+1)^3(D^2+1)y=0,
$$

con raíces $0,1,-1$ (multiplicidad $3$) y $\pm i$. Las raíces nuevas aportan $xe^{-x},x^2e^{-x},\cos x,\sin x$:

$$
Y=(Ax^2+Bx)e^{-x}+C\cos x+D\sin x.
$$

**Problema 14.** $L(D)=D^4-2D^2+1=(D-1)^2(D+1)^2$, con raíces $1$ y $-1$, ambas dobles. El aniquilador de $e^{x}+\sin x$ es $(D-1)(D^2+1)$. La ecuación aumentada es

$$
(D-1)(D^2+1)(D-1)^2(D+1)^2y=(D-1)^3(D+1)^2(D^2+1)y=0,
$$

con raíces $1$ (multiplicidad $3$), $-1$ (multiplicidad $2$) y $\pm i$. Las raíces nuevas aportan $x^2e^{x},\cos x,\sin x$:

$$
Y=Ax^2e^{x}+B\cos x+C\sin x.
$$

**Problema 15.** $L(D)=D^4+4D^2=D^2(D^2+4)$, con raíces $0$ (doble) y $\pm 2i$. El aniquilador de $\sin 2x+xe^{x}+4$ es $(D^2+4)(D-1)^2D$. La ecuación aumentada es

$$
(D^2+4)(D-1)^2D\,D^2(D^2+4)y=D^3(D-1)^2(D^2+4)^2y=0,
$$

con raíces $0$ (multiplicidad $3$), $1$ (multiplicidad $2$) y $\pm 2i$ (multiplicidad $2$). Las raíces nuevas aportan $x^2$, $e^{x},xe^{x}$ y $x\cos 2x,x\sin 2x$:

$$
Y=Ax^2+(Bx+C)e^{x}+x(D\cos 2x+E\sin 2x).
$$

**Problema 16.** $L(D)=D^4-D^3-D^2+D=D(D-1)^2(D+1)$, con raíces $0$, $1$ (doble) y $-1$. El aniquilador de $x^2+4+x\sin x$ es $D^3(D^2+1)^2$. La ecuación aumentada es

$$
D^3(D^2+1)^2\,D(D-1)^2(D+1)y=D^4(D-1)^2(D+1)(D^2+1)^2y=0,
$$

con raíces $0$ (multiplicidad $4$), $1$ (multiplicidad $2$), $-1$ y $\pm i$ (multiplicidad $2$). Las raíces nuevas aportan $x,x^2,x^3$ y $\cos x,\sin x,x\cos x,x\sin x$:

$$
Y=Ax^3+Bx^2+Cx+D\cos x+E\sin x+Fx\cos x+Gx\sin x.
$$

**Problema 17.** $L(D)=D^4+2D^3+2D^2=D^2(D^2+2D+2)$, con raíces $0$ (doble) y $-1\pm i$. El aniquilador de $3e^{x}+2xe^{-x}+e^{-x}\sin x$ es $(D-1)(D+1)^2(D^2+2D+2)$. La ecuación aumentada es

$$
(D-1)(D+1)^2(D^2+2D+2)\,D^2(D^2+2D+2)y=D^2(D-1)(D+1)^2(D^2+2D+2)^2y=0,
$$

con raíces $0$ (multiplicidad $2$), $1$, $-1$ (multiplicidad $2$) y $-1\pm i$ (multiplicidad $2$). Las raíces nuevas aportan $e^{x}$, $e^{-x},xe^{-x}$ y $xe^{-x}\cos x,xe^{-x}\sin x$:

$$
Y=Ae^{x}+(Bx+C)e^{-x}+xe^{-x}(D\cos x+E\sin x).
$$

## Observaciones

El método proporciona solo la forma de $Y$; el enunciado pide no evaluar los coeficientes. El número de constantes de $Y$ coincide con el número de raíces nuevas del polinomio aumentado, no con su grado total, porque los términos que ya figuran en $y_c$ se descartan.

Cuando la raíz nueva ya era raíz de $L$, su multiplicidad aumenta y aparece un factor $x$ adicional. En el problema 15 la raíz $0$ es doble en $L$, de modo que el término constante $4$ exige un factor $x^2$. En el problema 14 la raíz $1$ es doble y el término $e^{x}$ exige $x^2e^{x}$.

En el problema 17 el aniquilador $D^2+2D+2$ de $e^{-x}\sin x$ coincide con el factor cuadrático de $L$. Las raíces $-1\pm i$ pasan a ser dobles y la forma incorpora $xe^{-x}\cos x$ y $xe^{-x}\sin x$.

### Método alternativo: superposición

Las mismas formas se obtienen con el enfoque de superposición de los problemas 12 a 17: se propone una forma de prueba por cada sumando de $g(x)$ y se multiplica por la menor potencia de $x$ que elimina la duplicación con $y_c$.
