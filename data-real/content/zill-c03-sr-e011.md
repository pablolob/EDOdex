
## Enunciado

11. Supongamos que un circuito serie $RC$ tiene una resistencia variable. Si la resistencia al tiempo $t$ está definida por $R(t) = k_1 + k_2 t$, donde $k_1$ y $k_2$ son constantes positivas conocidas, entonces la ecuación diferencial (9) de la sección 3.1 se convierte

$$
(k_1 + k_2 t)\frac{dq}{dt} + \frac{1}{C}q = E(t),
$$

donde $C$ es una constante. Si $E(t) = E_0$ y $q(0) = q_0$, donde $E_0$ y $q_0$ son constantes, entonces demuestre que

$$
q(t) = E_0 C + (q_0 - E_0 C)\left(\frac{k_1}{k_1 + k_2 t}\right)^{1/C k_2}.
$$

## Solución

La solución del problema de valor inicial es

$$
\boxed{
q(t) = E_0 C + (q_0 - E_0 C)\left(\frac{k_1}{k_1 + k_2 t}\right)^{\frac{1}{C k_2}}
}
$$

para $t \ge 0$, que es la expresión pedida.

## Resolución

La ecuación es **lineal de primer orden** y **no homogénea**. Se divide entre el coeficiente $k_1+k_2t$ para llevarla a la forma estándar. Como $k_1>0$, $k_2>0$ y $t\ge 0$, se cumple $k_1+k_2t>0$, de modo que la división es válida en todo el dominio.

$$
\frac{dq}{dt} + \frac{1}{C(k_1+k_2 t)}q = \frac{E_0}{k_1+k_2 t}.
$$

Se aplica el **factor integrante**.

$$
\mu(t) = \exp\!\left(\int \frac{dt}{C(k_1+k_2 t)}\right).
$$

La integral es

$$
\int \frac{dt}{C(k_1+k_2 t)} = \frac{1}{C k_2}\ln(k_1+k_2 t),
$$

donde no se usa valor absoluto porque $k_1+k_2t>0$. Por tanto,

$$
\mu(t) = (k_1+k_2 t)^{\frac{1}{C k_2}}.
$$

Al multiplicar la ecuación estándar por $\mu$, el miembro izquierdo es la derivada de un producto,

$$
\frac{d}{dt}\!\left[(k_1+k_2 t)^{\frac{1}{C k_2}}q\right]
= (k_1+k_2 t)^{\frac{1}{C k_2}}\cdot\frac{E_0}{k_1+k_2 t}
= E_0(k_1+k_2 t)^{\frac{1}{C k_2}-1}.
$$

Se integra en $t$. Para simplificar el exponente se define $a=\dfrac{1}{C k_2}$.

$$
(k_1+k_2 t)^{a}q = E_0\int (k_1+k_2 t)^{a-1}\,dt.
$$

La integral es directa, pues $k_2 a = \dfrac{1}{C}$ y por tanto $\dfrac{1}{k_2 a}=C$:

$$
\int (k_1+k_2 t)^{a-1}\,dt = \frac{(k_1+k_2 t)^{a}}{k_2 a} = C(k_1+k_2 t)^{a}.
$$

Así,

$$
(k_1+k_2 t)^{a}q = E_0 C(k_1+k_2 t)^{a}+K,
$$

donde $K$ es la constante de integración. Al despejar $q$,

$$
q(t) = E_0 C + K(k_1+k_2 t)^{-a}.
$$

La condición inicial $q(0)=q_0$ determina $K$:

$$
q_0 = E_0 C + K k_1^{-a}
\quad\Longrightarrow\quad
K = (q_0-E_0 C)k_1^{a}.
$$

Al sustituir y agrupar la potencia,

$$
q(t) = E_0 C + (q_0-E_0 C)k_1^{a}(k_1+k_2 t)^{-a}
= E_0 C + (q_0-E_0 C)\left(\frac{k_1}{k_1+k_2 t}\right)^{a}.
$$

Con $a=\dfrac{1}{C k_2}$ se obtiene la expresión que se pide demostrar.

## Observaciones

La división entre $k_1+k_2t$ no pierde soluciones, porque ese factor nunca se anula para $t\ge 0$ y $k_1,k_2>0$. La solución está definida en $[0,\infty)$.

El término $(k_1/(k_1+k_2t))^{1/(Ck_2)}$ decae cuando $t$ crece, ya que $k_2>0$. Por eso $q(t)\to E_0C$ cuando $t\to\infty$. El valor $E_0C$ es la carga de régimen permanente y coincide con la solución constante que se obtiene si $q_0=E_0C$. Físicamente, la resistencia creciente frena la carga del capacitor.

### Método alternativo: separación de variables

La ecuación también es separable. Al escribirla como $C\dfrac{dq}{dt}=\dfrac{E_0C-q}{k_1+k_2t}$ y separar,

$$
\frac{dq}{E_0C-q} = \frac{dt}{C(k_1+k_2t)}.
$$

Al integrar,

$$
-\ln|E_0C-q| = \frac{1}{Ck_2}\ln(k_1+k_2t)+c,
$$

de donde $E_0C-q = K'(k_1+k_2t)^{-1/(Ck_2)}$, es decir, $q=E_0C+K'(k_1+k_2t)^{-a}$. La condición inicial $q(0)=q_0$ conduce a $K'=(q_0-E_0C)k_1^{a}$ y al mismo resultado.
