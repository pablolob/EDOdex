---
title: "Boyce 2.5 Ejercicio 10"
exercise-id: boyce-c02-s05-e010
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.5, ejercicio 10"
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.lineales-primer-orden
  - interpretar.contexto-modelo
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.directa
difficulty:
  conceptual: 2
  technical: 1
statement-status: accepted
solution-status: draft
source-images:
  - c02s05i02-p068.png
---

## Enunciado

El comprador de una casa no puede pagar más de $\$800$ mensuales por la hipoteca. Suponga que la tasa de interés es de 9% y que el término de la hipoteca es de 20 años. Suponga que el interés se compone continuamente y que también los pagos se hacen en la misma forma.

a) Determine la cantidad máxima que este comprador puede solicitar en préstamo.

b) Determine el interés total que se paga durante el término de la hipoteca.

## Solución

Con el saldo $S(t)$ en dólares y $t$ en años, el modelo es $S'=0.09\,S-9600$, pues $\$800$ mensuales equivalen a $\$9600$ anuales. La condición de término es $S(20)=0$.

$$
S(t)=\frac{9600}{0.09}+Ce^{0.09t}.
$$

a) Al imponer $S(20)=0$ y evaluar en $t=0$,

$$
S(0)=\frac{9600}{0.09}\left(1-e^{-1.8}\right)\approx \$89\,034.79.
$$

El préstamo máximo es aproximadamente $\$89\,034.79$.

b) El total pagado es $9600\cdot 20=\$192\,000$, de modo que el interés total asciende a

$$
192\,000-89\,034.79\approx \$102\,965.21.
$$

## Resolución

Se mide el tiempo $t$ en años desde la concesión del préstamo y se designa
$S(t)$ al saldo pendiente en dólares. La tasa de interés anual es $r=0.09$,
compuesta de forma continua, y los pagos se realizan de forma continua a razón
de $k=800\cdot 12=9600$ dólares por año. El saldo aumenta por el interés
$rS(t)$ y disminuye por los pagos $k$, por lo que satisface la **ecuación
lineal** de primer orden

$$
\frac{dS}{dt}=rS-k=0.09\,S-9600.
$$

Esta ecuación es lineal no homogénea con coeficientes constantes. Se reescribe
en la forma estándar

$$
\frac{dS}{dt}-0.09\,S=-9600
$$

y se aplica el **factor integrante** $\mu(t)=e^{-0.09t}$. Al multiplicar ambos
miembros,

$$
\frac{d}{dt}\!\left(e^{-0.09t}S\right)=-9600\,e^{-0.09t}.
$$

La integración respecto de $t$ da

$$
e^{-0.09t}S=\frac{9600}{0.09}\,e^{-0.09t}+C,
$$

de donde, al despejar el saldo,

$$
S(t)=\frac{9600}{0.09}+Ce^{0.09t}=106\,666.67+Ce^{0.09t}.
$$

La constante $C$ se determina con la condición de que la hipoteca queda
liquidada al cabo de 20 años, esto es, $S(20)=0$:

$$
0=106\,666.67+Ce^{0.09\cdot 20},
$$

$$
C=-106\,666.67\,e^{-1.8}.
$$

Sustituyendo el valor de $C$ y evaluando en $t=0$ se obtiene el saldo inicial,
que es la cantidad máxima prestada:

$$
S(0)=106\,666.67\left(1-e^{-1.8}\right)\approx 89\,034.79.
$$

Para el interés total se calcula el desembolso acumulado en los 20 años. Los
pagos suman $9600\cdot 20=192\,000$ dólares. La diferencia entre lo pagado y el
capital recibido es el interés pagado:

$$
192\,000-89\,034.79\approx 102\,965.21.
$$

## Observaciones

El modelo supone pagos continuos. Con pagos mensuales discretos el capital
prestado sería ligeramente menor, porque cada pago mensual se adelanta respecto
del flujo continuo equivalente.

La solución puede escribirse como
$S(t)=\dfrac{k}{r}\left(1-e^{-r(20-t)}\right)$, forma que muestra que el saldo
decrece de manera casi exponencial y se anula exactamente en $t=20$.

### Método alternativo: fórmula del valor presente

La cantidad máxima prestada es el valor presente de los 20 años de pagos
descontados a la tasa continua del 9%:

$$
S(0)=\int_{0}^{20}9600\,e^{-0.09t}\,dt
=\frac{9600}{0.09}\left(1-e^{-1.8}\right).
$$

Este cálculo reproduce el mismo resultado numérico y evita resolver la ecuación
diferencial, aunque no describe la evolución del saldo.
