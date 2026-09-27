---
title: "Zill Repaso C2 Ejercicio 11"
exercise-id: zill-c02-sr-e011
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 2, ejercicio 11"
language: es
competencies:
  - resolver-analiticamente.lineales-primer-orden
  - seleccionar-metodo.factor-integrante
prerequisitos:
  - derivacion.producto
  - derivacion.regla-cadena
  - integracion.teorema-fundamental-calculo
solution-status: draft
statement-status: accepted
topics:
  - primer-orden
source-images:
  - c02sri01-p094.png
difficulty:
  conceptual: 2
  technical: 2
---

## Enunciado

**Responda los problemas 1-12 sin consultar las respuestas del libro. Llene los espacios en blanco o responda si es verdadero o falso.**

$y = e^{\cos x} \int_0^x t e^{-\cos t} \, dt$ es una solución de la ecuación diferencial lineal de primer orden ________

## Solución

La ecuación es

$$
\boxed{y' + (\sin x)\,y = x}.
$$

## Resolución

La ecuación buscada tiene la forma estándar de una ecuación lineal de primer orden,

$$
y' + P(x)\,y = f(x).
$$

El dato es la función

$$
y(x) = e^{\cos x} \int_0^x t\,e^{-\cos t}\,dt.
$$

Se deriva esta expresión. Con la regla del producto y el teorema fundamental del cálculo,

$$
\begin{aligned}
y'(x)
&= \frac{d}{dx}\!\left(e^{\cos x}\right)\int_0^x t\,e^{-\cos t}\,dt
 + e^{\cos x}\,\frac{d}{dx}\!\left(\int_0^x t\,e^{-\cos t}\,dt\right) \\
&= -\sin x\,e^{\cos x}\int_0^x t\,e^{-\cos t}\,dt
 + e^{\cos x}\,x\,e^{-\cos x}.
\end{aligned}
$$

El primer término contiene la propia función, $e^{\cos x}\int_0^x t\,e^{-\cos t}\,dt = y(x)$. En el segundo se cancela el producto $e^{\cos x}e^{-\cos x}=1$. Por tanto,

$$
y'(x) = -(\sin x)\,y(x) + x.
$$

Al llevar el término con $y$ al miembro izquierdo resulta la ecuación lineal de primer orden

$$
y' + (\sin x)\,y = x.
$$

La ecuación tiene $P(x)=\sin x$ y $f(x)=x$, continuas en $\mathbb{R}$. Como el límite inferior de la integral es $0$, se cumple $y(0)=e^{\cos 0}\int_0^0 t\,e^{-\cos t}\,dt=0$. La función dada es entonces la solución del problema de valor inicial

$$
y' + (\sin x)\,y = x, \qquad y(0)=0,
$$

y su intervalo de validez es $(-\infty,\infty)$.

La sustitución de $y$ y de $y'$ en la ecuación reproduce la identidad anterior, por lo que la ecuación hallada es correcta.

## Observaciones

La función dada es la solución del problema de valor inicial $y'+(\sin x)y=x$, $y(0)=0$. La solución general de la ecuación es

$$
y = e^{\cos x}\left(C + \int_0^x t\,e^{-\cos t}\,dt\right),
$$

donde el valor $C=0$ corresponde a la condición inicial.

### Método alternativo: reconstrucción por factor integrante

La expresión dada tiene la estructura de una solución obtenida por factor integrante. Se busca $\mu(x)$ tal que $\mu\,y = \int_0^x t\,e^{-\cos t}\,dt$. Esto se logra con $\mu(x)=e^{-\cos x}$, ya que $\mu\,y = e^{-\cos x}e^{\cos x}\int_0^x t\,e^{-\cos t}\,dt = \int_0^x t\,e^{-\cos t}\,dt$. Derivando,

$$
(\mu\,y)' = x\,e^{-\cos x}.
$$

Si la ecuación es $y'+P(x)y=f(x)$, al multiplicarla por $\mu$ se obtiene $(\mu\,y)'=\mu\,f$. La comparación exige $\mu\,f = x\,e^{-\cos x}$, de modo que $f(x)=x$. Además, $\mu=e^{\int P\,dx}$ impone $\int P\,dx = -\cos x$, es decir, $P(x)=\sin x$. Así se recupera $y'+(\sin x)y=x$.
