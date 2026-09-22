
## Enunciado

Determine el orden de la ecuación diferencial dada; diga también si la ecuación es lineal o no lineal: $$\frac{d^4y}{dx^4} + \frac{d^3y}{dx^3} + \frac{d^2y}{dx^2} + \frac{dy}{dx} + y = 1$$

## Solución

La ecuación es de **cuarto orden** y **lineal**.

## Resolución

El **orden** de una ecuación diferencial es el de la derivada de mayor orden que aparece en ella. La derivada más alta presente es $\dfrac{d^4y}{dx^4}$, de modo que la ecuación es de **cuarto orden**.

Para decidir la **linealidad**, se compara la ecuación con la forma general de una ecuación lineal de orden $n$:

$$
a_n(x)\frac{d^ny}{dx^n} + a_{n-1}(x)\frac{d^{n-1}y}{dx^{n-1}} + \cdots + a_1(x)\frac{dy}{dx} + a_0(x)y = g(x).
$$

En este caso $n=4$ y todos los coeficientes valen $1$:

$$
a_4(x)=a_3(x)=a_2(x)=a_1(x)=a_0(x)=1,\qquad g(x)=1.
$$

La variable dependiente $y$ y sus derivadas aparecen únicamente a la primera potencia y no se multiplican entre sí. Por tanto, la ecuación es **lineal**.

## Observaciones

La linealidad se refiere a la variable dependiente $y$ y a sus derivadas, no a la variable independiente $x$. Los coeficientes pueden depender de $x$; aquí, al ser todos constantes, la ecuación es lineal con coeficientes constantes. El miembro derecho $g(x)=1$ es una función solo de $x$, lo que también es compatible con la forma lineal.
