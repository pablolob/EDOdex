---
title: "Boyce 11.3 Ejercicio 27"
exercise-id: boyce-c11-s03-e027
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 11.3, ejercicio 27"
statement-status: accepted
solution-status: open
source-images:
  - c11s03i04-p678.png
---

## Enunciado

En este problema se analiza un poco más la analogía entre los problemas con valores en la frontera de Sturm-Liouville y las matrices hermitianas. Sea $\mathbf{A}$ una matriz hermitiana de $n \times n$ con los eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ y los eigenvectors ortonormales correspondientes, $\xi^{(1)}, \dots, \xi^{(n)}$.

Considere el sistema no homogéneo de ecuaciones
$$\mathbf{A}\mathbf{x} - \mu \mathbf{x} = \mathbf{b}, \tag{i}$$ 
en donde $\mu$ es un número real dado y $\mathbf{b}$ es un vector dado. Se señalará una manera de resolver la ecuación (i) que es análoga al método presentado en el texto para resolver las ecuaciones (1) y (2).

a) Demuestre que $\mathbf{b} = \sum_{i=1}^n b_i \xi^{(i)}$, en donde $b_i = (\mathbf{b}, \xi^{(i)})$.

b) Suponga que $\mathbf{x} = \sum_{i=1}^n a_i \xi^{(i)}$ y demuestre que para satisfacer la ecuación (i) es necesario que $a_i = \frac{b_i}{\lambda_i - \mu}$. De este modo,
$$\mathbf{x} = \sum_{i=1}^n \frac{(\mathbf{b}, \xi^{(i)})}{\lambda_i - \mu} \xi^{(i)}, \tag{ii}$$ 
siempre que $\mu$ no sea uno de los eigenvalues de $\mathbf{A}$, $\mu \neq \lambda_i$ para $i = 1, \dots, n$. Compare este resultado con la ecuación (13).
