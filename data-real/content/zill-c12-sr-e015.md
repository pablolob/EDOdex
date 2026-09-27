
## Enunciado

Resuelva el problema con valores en la frontera
$$\begin{aligned}\frac{\partial^2 u}{\partial x^2} &= \frac{\partial u}{\partial t}, \quad 0 < x < 1, \quad t > 0 \\ u(0, t) &= u_0, \quad \left.\frac{\partial u}{\partial x}\right|_{x=1} = -u(1, t) + u_1, \quad t > 0 \\ u(x, 0) &= u_0, \quad 0 < x < 1\end{aligned}$$
donde $u_0$ y $u_1$ son constantes.

## Solución

La temperatura es

$$
u(x,t)=u_0+\frac{u_1-u_0}{2}x+\sum_{n=1}^{\infty}\frac{2(u_1-u_0)(1+\alpha_n^{2})\cos\alpha_n}{\alpha_n(\alpha_n^{2}+2)}\,e^{-\alpha_n^{2}t}\sin(\alpha_n x),
$$

donde $\alpha_1<\alpha_2<\cdots$ son las raíces positivas consecutivas de

$$
\tan\alpha=-\alpha.
$$

## Resolución

Los datos de frontera son constantes en el tiempo y la condición inicial coincide con el valor en $x=0$. Se descompone la incógnita en un perfil de estado estable $\psi(x)$ que absorbe las no homogeneidades de la frontera y una parte transitoria $v(x,t)$:

$$
u(x,t)=\psi(x)+v(x,t).
$$

**Perfil de estado estable.** Al imponer $u_t=0$ y las condiciones de frontera, el perfil satisface

$$
\psi''(x)=0,\qquad \psi(0)=u_0,\qquad \psi'(1)=-\psi(1)+u_1.
$$

De $\psi''=0$ se sigue $\psi(x)=Ax+B$. La condición $\psi(0)=u_0$ da $B=u_0$. La condición en $x=1$ exige $A=-(u_0+A)+u_1$, de donde $2A=u_1-u_0$ y

$$
\psi(x)=u_0+\frac{u_1-u_0}{2}x.
$$

Al restar esta ecuación de la EDP original, la parte transitoria satisface la **ecuación del calor** homogénea con fronteras homogéneas y condición inicial trasladada:

$$
v_{xx}=v_t,\qquad v(0,t)=0,\qquad v_x(1,t)=-v(1,t),\qquad v(x,0)=u_0-\psi(x)=\frac{u_0-u_1}{2}x.
$$

**Separación de variables.** Se busca $v(x,t)=X(x)T(t)$. Al sustituir y dividir entre $X(x)T(t)$ resulta

$$
\frac{X''(x)}{X(x)}=\frac{T'(t)}{T(t)}=-\lambda,
$$

que conduce a las EDO

$$
X''+\lambda X=0,\qquad T'+\lambda T=0,
$$

con $X(0)=0$ y $X'(1)+X(1)=0$. El problema espacial es un **problema de Sturm-Liouville** regular.

**Valores y funciones propias.** Si $\lambda=-\beta^{2}<0$, la solución es $X=c_1\cosh(\beta x)+c_2\sinh(\beta x)$. La condición $X(0)=0$ da $c_1=0$ y la condición $X'(1)+X(1)=c_2(\beta\cosh\beta+\sinh\beta)=0$ obliga a $c_2=0$, pues $\beta\cosh\beta+\sinh\beta>0$. Si $\lambda=0$, entonces $X=c_1x+c_2$; la condición $X(0)=0$ da $c_2=0$ y $X'(1)+X(1)=2c_1=0$ obliga a $c_1=0$. En ambos casos solo surge la solución trivial.

Para $\lambda=\alpha^{2}>0$ se tiene $X=c_1\cos(\alpha x)+c_2\sin(\alpha x)$. La condición $X(0)=0$ da $c_1=0$. La condición en $x=1$ exige

$$
X'(1)+X(1)=c_2\bigl(\alpha\cos\alpha+\sin\alpha\bigr)=0.
$$

Para una solución no trivial,

$$
\alpha\cos\alpha+\sin\alpha=0 \quad\Longleftrightarrow\quad \tan\alpha=-\alpha.
$$

Los valores propios son $\lambda_n=\alpha_n^{2}$ y las funciones propias $X_n(x)=\sin(\alpha_n x)$, donde $\alpha_n$ son las raíces positivas consecutivas. Cada raíz cumple $\alpha_n\in\left(\left(n-\tfrac12\right)\pi,\,n\pi\right)$ para $n=1,2,3,\dots$

**Ecuación temporal y superposición.** Para cada $n$, la EDO $T'+\alpha_n^{2}T=0$ tiene por solución $T_n(t)=e^{-\alpha_n^{2}t}$. Por el **principio de superposición**,

$$
v(x,t)=\sum_{n=1}^{\infty} c_n e^{-\alpha_n^{2}t}\sin(\alpha_n x).
$$

**Coeficientes.** La condición inicial exige

$$
\sum_{n=1}^{\infty} c_n\sin(\alpha_n x)=\frac{u_0-u_1}{2}x.
$$

El problema espacial es de Sturm-Liouville, de modo que las funciones $\sin(\alpha_n x)$ son ortogonales en $[0,1]$ con peso $1$. La norma se calcula usando la condición de frontera. Como

$$
N_n=\int_0^1\sin^{2}(\alpha_n x)\,dx=\frac12-\frac{\sin(2\alpha_n)}{4\alpha_n}
$$

y de $\sin\alpha_n=-\alpha_n\cos\alpha_n$ se sigue $\sin(2\alpha_n)=-2\alpha_n\cos^{2}\alpha_n$, resulta

$$
N_n=\frac12+\frac{\cos^{2}\alpha_n}{2}=\frac{1+\cos^{2}\alpha_n}{2}.
$$

Con $\cos^{2}\alpha_n=\dfrac{1}{1+\alpha_n^{2}}$,

$$
N_n=\frac{\alpha_n^{2}+2}{2(1+\alpha_n^{2})}.
$$

Por ortogonalidad,

$$
\begin{aligned}
c_n&=\frac{1}{N_n}\int_0^1\frac{u_0-u_1}{2}x\sin(\alpha_n x)\,dx\\
&=\frac{u_0-u_1}{2N_n}\int_0^1 x\sin(\alpha_n x)\,dx.
\end{aligned}
$$

La integral se obtiene integrando por partes:

$$
\int_0^1 x\sin(\alpha x)\,dx=\left[-\frac{x\cos(\alpha x)}{\alpha}\right]_0^1+\frac{1}{\alpha}\int_0^1\cos(\alpha x)\,dx=-\frac{\cos\alpha}{\alpha}+\frac{\sin\alpha}{\alpha^{2}}.
$$

Al usar $\sin\alpha_n=-\alpha_n\cos\alpha_n$,

$$
\int_0^1 x\sin(\alpha_n x)\,dx=-\frac{2\cos\alpha_n}{\alpha_n}.
$$

Al sustituir en $c_n$,

$$
c_n=\frac{u_0-u_1}{2N_n}\left(-\frac{2\cos\alpha_n}{\alpha_n}\right)=\frac{2(u_1-u_0)(1+\alpha_n^{2})\cos\alpha_n}{\alpha_n(\alpha_n^{2}+2)}.
$$

Finalmente, $u=\psi+v$ recupera la solución del problema.

**Comprobación.** En $x=0$ se anulan $v(0,t)$ y todos los $\sin(0)$, luego $u(0,t)=\psi(0)=u_0$. En $x=1$, $\psi'(1)=\dfrac{u_1-u_0}{2}$ y, como $\alpha_n\cos\alpha_n=-\sin\alpha_n$, resulta $u_x(1,t)=\psi'(1)+v_x(1,t)=-\psi(1)-v(1,t)+u_1=-u(1,t)+u_1$. Cada término de la serie cumple $v_t=-\alpha_n^{2}v$ y $v_{xx}=-\alpha_n^{2}v$, de modo que $u_{xx}=v_{xx}=v_t=u_t$. En $t=0$ la serie reconstruye $\dfrac{u_0-u_1}{2}x$, así que $u(x,0)=\psi(x)+\dfrac{u_0-u_1}{2}x=u_0$.

## Observaciones

La condición en $x=1$ es de tipo **Robin** y describe la transferencia de calor hacia un medio a temperatura $u_1$. Como las fronteras se mantienen fijas, la solución tiende al perfil lineal $\psi(x)=u_0+\dfrac{u_1-u_0}{2}x$ cuando $t\to\infty$; en particular, la temperatura del extremo derecho tiende a $\dfrac{u_0+u_1}{2}$.

Los valores propios no son $n\pi$, sino las raíces de $\tan\alpha=-\alpha$. Si $u_1=u_0$, el perfil es constante $\psi\equiv u_0$ y todos los coeficientes se anulan, de modo que $u\equiv u_0$. El valor $\lambda=0$ no es propio: la única solución de $X''=0$ que cumple $X(0)=0$ y $X'(1)+X(1)=0$ es $X=0$.

Los coeficientes decaen como $\alpha_n^{-2}$, por lo que la serie para $u$ converge absoluta y uniformemente para $t\ge t_0>0$; esto permite derivar la solución término a término y confirma que satisface la ecuación y las condiciones.
