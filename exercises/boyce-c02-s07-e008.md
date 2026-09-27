---
title: "Boyce 2.7 Ejercicio 8"
exercise-id: boyce-c02-s07-e008
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 2.7, ejercicio 8"
statement-status: accepted
solution-status: draft
topics:
  - primer-orden
competencies:
  - modelizar.formular-edo
  - resolver-analiticamente.variables-separables
  - analizar-cualitativamente.comportamiento-asintotico
hidden-competencies:
  - clasificar.separable
prerequisitos:
  - ecuaciones-diferenciales.primer-orden
  - integracion.sustitucion
  - algebra.division-polinomios
difficulty:
  conceptual: 2
  technical: 2
source-images:
  - c02s07i02-p093.png
---

## Enunciado

Un cuerpo de masa $m$ se proyecta verticalmente hacia abajo con una velocidad inicial $v_0$ en un medio que presenta una resistencia proporcional a la raíz cuadrada de la magnitud de la velocidad. Encuentre la relación entre la velocidad $v$ y el tiempo $t$. Encuentre la velocidad límite.

## Solución

Con el eje positivo dirigido hacia abajo, la ecuación del movimiento es $m\,dv/dt=mg-k\sqrt{v}$ y su solución implícita, con $v(0)=v_0$, es

$$
t=\frac{2m}{k}\left(\sqrt{v_0}-\sqrt{v}\right)+\frac{2m^2 g}{k^2}\ln\left|\frac{mg-k\sqrt{v_0}}{mg-k\sqrt{v}}\right|.
$$

La velocidad límite es

$$
v_L=\left(\frac{mg}{k}\right)^2.
$$

## Resolución

Se toma el eje positivo dirigido hacia abajo y $v(t)$ como la velocidad de descenso. Sobre el cuerpo actúan el peso, de magnitud $mg$ y en el sentido del movimiento, y la resistencia, de magnitud $k\sqrt{v}$ y sentido opuesto, con $k>0$. La segunda ley de Newton conduce a

$$
m\frac{dv}{dt}=mg-k\sqrt{v},\qquad v(0)=v_0.
$$

La ecuación es **no lineal** de **primer orden** y **separable**. Al separar las variables,

$$
\frac{dv}{mg-k\sqrt{v}}=\frac{dt}{m}.
$$

Para integrar el miembro izquierdo se sustituye $u=\sqrt{v}$, con lo que $v=u^2$ y $dv=2u\,du$. La integral resulta

$$
\int\frac{2u}{mg-ku}\,du=\frac{t}{m}.
$$

La división previa del integrando,

$$
\frac{2u}{mg-ku}=-\frac{2}{k}+\frac{2mg/k}{mg-ku},
$$

permite integrar término a término:

$$
\frac{t}{m}=-\frac{2u}{k}-\frac{2mg}{k^2}\ln|mg-ku|+C_1.
$$

Al multiplicar por $m$ y volver a $u=\sqrt{v}$,

$$
t=-\frac{2m}{k}\sqrt{v}-\frac{2m^2 g}{k^2}\ln|mg-k\sqrt{v}|+C.
$$

La condición $v(0)=v_0$ fija la constante:

$$
C=\frac{2m}{k}\sqrt{v_0}+\frac{2m^2 g}{k^2}\ln|mg-k\sqrt{v_0}|.
$$

Al restar esta expresión y usar $\ln a-\ln b=\ln(a/b)$ se obtiene la relación pedida:

$$
t=\frac{2m}{k}\left(\sqrt{v_0}-\sqrt{v}\right)+\frac{2m^2 g}{k^2}\ln\left|\frac{mg-k\sqrt{v_0}}{mg-k\sqrt{v}}\right|.
$$

En la rama física habitual $0<v_0<v_L$ y $v\le v_0$, los argumentos del logaritmo son positivos y puede prescindirse del valor absoluto.

La velocidad límite se obtiene anulando la aceleración:

$$
mg-k\sqrt{v}=0
\quad\Longrightarrow\quad
\sqrt{v}=\frac{mg}{k}
\quad\Longrightarrow\quad
v_L=\left(\frac{mg}{k}\right)^2.
$$

La relación obtenida es consistente con este valor: cuando $v\to v_L$, el factor $mg-k\sqrt{v}$ tiende a cero y el logaritmo diverge, de modo que $t\to\infty$. La velocidad límite se alcanza solo asintóticamente.

Comprobación: al derivar la relación respecto de $v$ se obtiene $dt/dv=m/(mg-k\sqrt{v})$, equivalente a la ecuación del modelo. Además, al evaluar en $v=v_0$ el logaritmo se anula y resulta $t=0$.

## Observaciones

La velocidad límite $v_L=(mg/k)^2$ no depende de la velocidad inicial. Si $v_0<v_L$ el cuerpo acelera y si $v_0>v_L$ desacelera; en ambos casos $v\to v_L$ cuando $t\to\infty$, y esa es la interpretación de la velocidad límite.

Al separar las variables se divide por $mg-k\sqrt{v}$, que se anula en $v=v_L$. Por ello la solución constante $v\equiv v_L$ no aparece como caso particular de la relación anterior para valores finitos de $v_0$, aunque coincide con el límite hallado y es la solución de equilibrio de la ecuación.

La relación entre $v$ y $t$ es implícita; $v(t)$ no admite una expresión elemental explícita.
