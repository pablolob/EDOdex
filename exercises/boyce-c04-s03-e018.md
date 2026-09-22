---
title: "Boyce 4.3 Ejercicio 18"
exercise-id: boyce-c04-s03-e018
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 18"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.lineales-orden-superior
  - seleccionar-metodo.sustitucion
  - verificar.solucion
prerequisitos:
  - derivacion.producto
  - algebra.ecuaciones-caracteristicas
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c04s03i02-p235.png
---

## Enunciado

Considere la ecuación diferencial lineal no homogénea de $n$-ésimo orden

$$a_0 y^{(n)} + a_1 y^{(n-1)} + \cdots + a_n y = g(x),$$

en donde $a_0, \dots, a_n$ son constantes. Compruebe que si $g(x)$ es de la forma

$$e^{\alpha x} (b_0 x^m + \cdots + b_m),$$

entonces la sustitución $y = e^{\alpha x}u(x)$ reduce la ecuación precedente a la forma

$$t_0 u^{(n)} + t_1 u^{(n-1)} + \cdots + t_n u = b_0 x^m + \cdots + b_m,$$

en donde $t_0, \dots, t_n$ son constantes. Determine $t_0$ y $t_n$ en términos de las $a$ y de $\alpha$. Por tanto, el problema de determinar una solución particular de la ecuación original se reduce al problema más sencillo de determinar una solución particular de una ecuación con coeficientes constantes y un polinomio para el término no homogéneo.

## Solución

$$
t_0 = a_0, \qquad t_n = a_0\alpha^n + a_1\alpha^{n-1} + \cdots + a_n = P(\alpha),
$$

donde $P(r) = a_0 r^n + a_1 r^{n-1} + \cdots + a_n$ es el polinomio característico de la ecuación homogénea asociada.

## Resolución

La ecuación es **lineal**, de **orden** $n$, **no homogénea** y con coeficientes constantes. Se introduce el operador derivada $D = \dfrac{d}{dx}$ y se escribe la ecuación como

$$
L[y] = g(x), \qquad L = a_0 D^n + a_1 D^{n-1} + \cdots + a_n.
$$

Se define además el polinomio característico de la ecuación homogénea asociada,

$$
P(r) = a_0 r^n + a_1 r^{n-1} + \cdots + a_n.
$$

**Desplazamiento exponencial.** Se busca la acción del operador $L$ sobre un producto $e^{\alpha x}u(x)$. La regla del producto da

$$
D\!\left[e^{\alpha x}u\right] = e^{\alpha x}\left(\alpha u + u'\right) = e^{\alpha x}(D+\alpha)[u].
$$

Al repetir la operación $k$ veces resulta

$$
D^k\!\left[e^{\alpha x}u\right] = e^{\alpha x}(D+\alpha)^k[u], \qquad k = 0, 1, \dots, n.
$$

Al aplicar cada término del operador se obtiene un factor común $e^{\alpha x}$:

$$
L\!\left[e^{\alpha x}u\right]
= \sum_{k=0}^{n} a_k\, D^{n-k}\!\left[e^{\alpha x}u\right]
= e^{\alpha x}\sum_{k=0}^{n} a_k (D+\alpha)^{n-k}[u]
= e^{\alpha x}\, P(D+\alpha)[u].
$$

**Expansión y coeficientes.** Se desarrolla cada potencia del operador con el binomio de Newton:

$$
P(D+\alpha)[u]
= \sum_{k=0}^{n} a_k \sum_{j=0}^{n-k} \binom{n-k}{j} \alpha^{\,n-k-j}\, u^{(j)}.
$$

Se agrupan los términos según el orden de la derivada de $u$. El término $u^{(n-i)}$, con $0 \le i \le n$, procede de $j = n-i$, lo que exige $j \le n-k$, es decir, $k \le i$. Su coeficiente es

$$
t_i = \sum_{k=0}^{i} a_k \binom{n-k}{n-i} \alpha^{\,n-k-(n-i)}
= \sum_{k=0}^{i} a_k \binom{n-k}{i-k} \alpha^{\,i-k}, \qquad i = 0, 1, \dots, n.
$$

Cada $t_i$ depende solo de las constantes $a_0, \dots, a_n$ y de $\alpha$, de modo que la expresión anterior se reordena como

$$
P(D+\alpha)[u] = t_0 u^{(n)} + t_1 u^{(n-1)} + \cdots + t_n u.
$$

**Reducción de la ecuación.** Con la sustitución $y = e^{\alpha x}u(x)$ y el término no homogéneo $g(x) = e^{\alpha x}(b_0 x^m + \cdots + b_m)$, la ecuación $L[y] = g(x)$ toma la forma

$$
e^{\alpha x}\, P(D+\alpha)[u] = e^{\alpha x}\left(b_0 x^m + \cdots + b_m\right).
$$

Como $e^{\alpha x} \neq 0$, se divide entre ese factor y queda

$$
t_0 u^{(n)} + t_1 u^{(n-1)} + \cdots + t_n u = b_0 x^m + \cdots + b_m,
$$

que es la forma anunciada, con coeficientes constantes y término no homogéneo polinómico.

**Coeficientes extremos.** Para $i = 0$ solo contribuye $k = 0$:

$$
t_0 = a_0 \binom{n}{0} \alpha^{0} = a_0.
$$

Para $i = n$ todos los términos del binomio valen uno:

$$
t_n = \sum_{k=0}^{n} a_k \binom{n-k}{n-k} \alpha^{\,n-k}
= a_0 \alpha^n + a_1 \alpha^{n-1} + \cdots + a_n
= P(\alpha).
$$

Por tanto, $t_0 = a_0$ y $t_n = P(\alpha)$.

La deducción es algebraica y no impone restricciones sobre $x$; la división entre $e^{\alpha x}$ es legítima para todo $x \in \mathbb{R}$ porque la exponencial nunca se anula.

## Observaciones

El coeficiente $t_n$ es exactamente el polinomio característico evaluado en $\alpha$. Si $\alpha$ es raíz de $P$, entonces $t_n = 0$ y el término en $u$ desaparece de la ecuación reducida; ese hecho es el origen algebraico de la regla de modificación, que obliga a multiplicar la solución particular de prueba por una potencia de $x$.

El conjunto completo de coeficientes son los de $P(r+\alpha)$ desarrollado en potencias de $r$, ya que $P(D+\alpha)$ tiene polinomio característico $P(r+\alpha)$. En particular $t_n$ es su término independiente.

El resultado vale también para $\alpha$ complejo, con $e^{\alpha x}$ de valor complejo.
