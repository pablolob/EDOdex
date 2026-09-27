---
title: "Zill Repaso C11 Ejercicio 11"
exercise-id: zill-c11-sr-e011
author:
  - name: "Dennis G. Zill"
source-key: zill
source-locator: "Repaso del capítulo 11, ejercicio 11"
statement-status: accepted
solution-status: draft
topics:
  - sturm-liouville
competencies:
  - resolver-series.serie-cosenos
  - analizar-espectralmente.ortogonalidad
prerequisitos:
  - integracion.identidades-trigonometricas
  - algebra-lineal-avanzada.producto-interno
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c11sri02-p472.png
---

## Enunciado

Sin hacer operaciones, explique por qué la serie de cosenos de $f(x) = \cos^2 x$, $0 < x < \pi$ es la serie finita $f(x) = \frac{1}{2} + \frac{1}{2} \cos 2x$.

## Solución

La **identidad del ángulo doble** reescribe la función como

$$
\cos^2 x = \frac{1}{2} + \frac{1}{2}\cos 2x.
$$

El segundo miembro ya es una combinación finita de funciones del sistema ortogonal $\{1,\cos x,\cos 2x,\dots\}$ sobre $[0,\pi]$. Por la unicidad de los coeficientes de una expansión ortogonal, esa combinación coincide con la serie de cosenos de $f$ y no hay términos adicionales:

$$
f(x)=\frac{1}{2}+\frac{1}{2}\cos 2x.
$$

## Resolución

En el intervalo $(0,\pi)$ la **serie de cosenos** de una función $f$ es su expansión en el sistema ortogonal

$$
\{1,\cos x,\cos 2x,\dots\} = \{\cos nx\}_{n\ge 0},
\qquad
\langle u,v\rangle=\int_0^{\pi} u(x)\,v(x)\,dx.
$$

Las funciones $\cos nx$ son ortogonales entre sí sobre $[0,\pi]$: para $n\ne m$,

$$
\int_0^{\pi}\cos(nx)\cos(mx)\,dx=0.
$$

La identidad del ángulo doble expresa $f$ sin cálculo alguno:

$$
\cos^2 x=\frac{1+\cos 2x}{2}=\frac{1}{2}+\frac{1}{2}\cos 2x.
$$

El miembro derecho es una suma finita de elementos del sistema. Los coeficientes de una expansión en un sistema ortogonal son únicos: si una función admite dos desarrollos, al tomar el producto interno con cada $\cos mx$ sobrevive únicamente el término del mismo índice. Por tanto, los únicos coeficientes no nulos de la serie de cosenos de $f$ son

$$
\frac{a_0}{2}=\frac{1}{2},
\qquad
a_2=\frac{1}{2},
$$

con $a_n=0$ para todo $n\ne 0,2$. La serie de cosenos es entonces la suma finita

$$
f(x)=\frac{1}{2}+\frac{1}{2}\cos 2x.
$$

La igualdad es válida en todo el intervalo $(0,\pi)$. La función es par y $\pi$-periódica, de modo que su extensión par y $2\pi$-periódica coincide con ella; por eso la serie la representa en todo $\mathbb{R}$ y no aparecen armónicos impares.

## Observaciones

- La serie es finita porque $\cos^2 x$ es un **polinomio trigonométrico**: ya pertenece al subespacio generado por un número finito de funciones del sistema. Una combinación finita de la base es su propia serie y no genera cola infinita.
- La unicidad de los coeficientes es la propiedad de ortogonalidad que también se usaría para calcularlos por integración. El enunciado pide precisamente evitar ese cálculo, reconocible en la identidad del ángulo doble.
- La identidad $\cos^2 x=\frac{1}{2}+\frac{1}{2}\cos 2x$ muestra además que $f$ tiene periodo $\pi$, coherente con la ausencia del armónico $\cos x$.
