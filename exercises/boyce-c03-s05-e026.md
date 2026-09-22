---
title: "Boyce 3.5 Ejercicio 26"
exercise-id: boyce-c03-s05-e026
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 3.5, ejercicio 26"
statement-status: accepted
solution-status: open
source-images:
  - c03s05i02-p176.png
---

## Enunciado

La ecuación diferencial

$$xy'' - (x + N)y' + Ny = 0,$$

en donde $N$ es un entero no negativo, ha sido analizada por varios autores. Una de las razones por las que resulta interesante es que tiene una solución exponencial y una solución polinomial.

a) Verifique que una solución es $y_1(x) = e^x$.

b) Demuestre que una segunda solución tiene la forma $y_2(x) = c e^x \int x^N e^{-x} \,dx$. Calcule $y_2(x)$ para $N = 1$ y $N = 2$; compruebe que, con $c = -1/N!$,

$$y_2(x) = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \dots + \frac{x^N}{N!}.$$

Observe que $y_2(x)$ es exactamente los $N + 1$ primeros términos de la serie de Taylor en torno a $x = 0$ para $e^x$; es decir, para $y_1(x)$.
