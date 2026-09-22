---
title: "Boyce 9.2 Ejercicio 22"
exercise-id: boyce-c09-s02-e022
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 9.2, ejercicio 22"
statement-status: accepted
solution-status: open
source-images:
  - c09s02i03-p506.png
  - c09s02i04-p507.png
---

## Enunciado

En este problema se deduce una fórmula para el periodo natural de un péndulo no lineal y no amortiguado [$c = 0$ en la ecuación (17)]. Suponga que se tira de la lenteja hasta formar un ángulo $\alpha$ y luego se suelta con velocidad cero. Suponga que puede despejarse $t$ como función de $\theta$ de la expresión para $\theta$ como función de $t$, de modo que puede considerarse $d\theta/dt$ como función de $\theta$. Deduzca la siguiente sucesión de ecuaciones:
$$\frac{1}{2}ml^2 \frac{d}{d\theta}\left[ \left(\frac{d\theta}{dt}\right)^2 \right] = -mgl \sin \theta,$$
$$\frac{1}{2}m \left( l \frac{d\theta}{dt} \right)^2 = mgl(\cos \theta - \cos \alpha),$$
$$dt = -\sqrt{\frac{l}{2g}} \frac{d\theta}{\sqrt{\cos \theta - \cos \alpha}}$$
¿Por qué en la última ecuación se eligió la raíz cuadrada negativa?
Si $T$ es el periodo natural de oscilación del péndulo, deduzca la fórmula
$$\frac{T}{4} = -\sqrt{\frac{l}{2g}} \int_\alpha^0 \frac{d\theta}{\sqrt{\cos \theta - \cos \alpha}}.$$
Al hacer el cambio de variables $\cos \theta = 1 - 2\sin^2 \frac{\theta}{2}$, $\cos \alpha = 1 - 2\sin^2 \frac{\alpha}{2}$ seguido por $\sin \frac{\theta}{2} = k \sin \phi$ con $k = \sin \frac{\alpha}{2}$, demuestre que
$$T = 4\sqrt{\frac{l}{g}} \int_0^{\pi/2} \frac{d\phi}{\sqrt{1 - k^2 \sin^2 \phi}} = 4\sqrt{\frac{l}{g}} F\left(k, \frac{\pi}{2}\right).$$
La función $F$ se conoce como **integral elíptica** de primera clase. Observe que el periodo depende de la razón $l/g$ y también del desplazamiento inicial $\alpha$, a través de $k = \sin \frac{\alpha}{2}$. El periodo correspondiente para el péndulo linealizado es $2\pi\left(\frac{l}{g}\right)^{1/2}$ y es independiente del desplazamiento inicial. Para obtener este resultado especial a partir de la fórmula general, es necesario considerar el caso límite de $\alpha$ pequeño (desplazamiento angular pequeño), en cuyo caso $k$ es pequeña. En el límite $k \to 0$, la fórmula precedente da $T = 4\left(\frac{l}{g}\right)^{1/2} F\left(0, \frac{\pi}{2}\right) = 2\pi\left(\frac{l}{g}\right)^{1/2}.
