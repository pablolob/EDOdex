---
title: "Boyce 10.2 Ejercicio 29"
exercise-id: boyce-c10-s02-e029
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 10.2, ejercicio 29"
statement-status: pending-review
solution-status: open
source-images:
  - c10s02i03-p581.png
  - c10s02i04-p582.png
---

## Enunciado

En este problema se indican ciertas semejanzas entre los vectores geométricos tridimensionales y las series de Fourier.
a) Sean $\mathbf{v}_1, \mathbf{v}_2 \text{ y } \mathbf{v}_3$ un conjunto de vectores mutuamente ortogonales en tres dimensiones y $\mathbf{u}$ cualquier vector tridimensional. Demuestre que
$$\mathbf{u} = a_1 \mathbf{v}_1 + a_2 \mathbf{v}_2 + a_3 \mathbf{v}_3 \tag{i}$$
en donde
$$a_i = \frac{\mathbf{u} \cdot \mathbf{v}_i}{\mathbf{v}_i \cdot \mathbf{v}_i}, \quad i = 1, 2, 3 \tag{ii}$$
Demuestre que $a_i$ puede interpretarse como la proyección de $\mathbf{u}$ en la dirección de $\mathbf{v}_i$, dividida entre la longitud de $\mathbf{v}_i$;
b) Defina el producto interno $(u, v)$ por
$$(u, v) = \int_{-l}^{l} u(x)v(x) \,dx \tag{iii}$$
Haga también
$$\begin{aligned}
\phi_n(x) &= \cos(n\pi x / l), & n &= 0, 1, 2, \dots; \\
\psi_n(x) &= \sin(n\pi x / l), & n &= 1, 2, \dots
\end{aligned} \tag{iv}$$
Demuestre que la ecuación (10) puede escribirse en la forma
$$(f, \phi_n) = \frac{a_0}{2} (\phi_0, \phi_n) + \sum_{m=1}^{\infty} a_m (\phi_m, \phi_n) + \sum_{m=1}^{\infty} b_m (\psi_m, \phi_n) \tag{v}$$
c) Use la ecuación (v) y las relaciones de ortogonalidad para demostrar que
$$a_n = \frac{(f, \phi_n)}{(\phi_n, \phi_n)}, \quad n = 0, 1, 2, \dots; \quad b_n = \frac{(f, \psi_n)}{(\psi_n, \psi_n)}, \quad n = 1, 2, \dots \tag{vi}$$
