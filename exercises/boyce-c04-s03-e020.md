---
title: "Boyce 4.3 Ejercicio 20"
exercise-id: boyce-c04-s03-e020
author:
  - name: "William E. Boyce"
source-key: boyce
source-locator: "Sección 4.3, ejercicio 20"
statement-status: accepted
metadata-status: pending
solution-status: draft
topics:
  - orden-superior
competencies:
  - resolver-analiticamente.aniquiladores
  - resolver-analiticamente.lineales-coeficientes-constantes
prerequisitos:
  - algebra.ecuaciones-caracteristicas
  - algebra.factorizacion-polinomios
  - ecuaciones-diferenciales.linealidad
difficulty:
  conceptual: 2
  technical: 1
source-images:
  - c04s03i02-p235.png
  - c04s03i03-p236.png
---

## Enunciado

Considere el problema de encontrar la forma de la solución particular $Y(x)$ de

$$(D - 2)^3 (D + 1)Y = 3e^{2x} - xe^{-x}, \tag{i}$$

en donde el primer miembro de la ecuación está escrito en una forma correspondiente a la factorización del polinomio característico.

a) Demuestre que $D - 2$ y $(D + 1)^2$, respectivamente, son aniquiladores de los términos del segundo miembro de la ecuación (i) y que el operador combinado $(D - 2)(D + 1)^2$ aniquila simultáneamente los dos términos del segundo miembro de la ecuación (i).

b) Aplique el operador $(D - 2)(D - 1)^2$ a la ecuación (i) y use el resultado del problema 19 para obtener

$$(D - 2)^4 (D + 1)^3 Y = 0. \tag{ii}$$

Por tanto, $Y$ es una solución de la ecuación homogénea (ii). Al resolver la ecuación (ii), demuestre que

$$Y(x) = c_1 e^{2x} + c_2 x e^{2x} + c_3 x^2 e^{2x} + c_4 x^3 e^{2x} + c_5 e^{-x} + c_6 x e^{-x} + c_7 x^2 e^{-x}, \tag{iii}$$

en donde $c_1, \dots, c_7$ son constantes, por el momento no determinadas.

c) Observe que $e^{2x}, xe^{2x}, x^2 e^{2x}$ y $e^{-x}$ son soluciones de la ecuación homogénea correspondiente a la ecuación (i); de donde, estos términos no son útiles para resolver la ecuación no homogénea. Por lo tanto, elegir $c_1, c_2, c_3$ y $c_5$ como cero en la ecuación (iii), de modo que

$$Y(x) = c_4 x^3 e^{2x} + c_6 x e^{-x} + c_7 x^2 e^{-x}. \tag{iv}$$

Esta es la forma de la solución particular $Y$ de la ecuación (i). Se pueden hallar los valores de los coeficientes $c_4, c_6$ y $c_7$ al sustituir (iv) en la ecuación diferencial (i).

## Solución

El operador $D-2$ anula $3e^{2x}$ y el operador $(D+1)^2$ anula $xe^{-x}$. Como los operadores lineales con coeficientes constantes conmutan, el operador producto $(D-2)(D+1)^2$ anula simultáneamente ambos términos del miembro derecho de (i).

Al aplicar ese operador a (i) se obtiene la ecuación homogénea

$$
(D-2)^4(D+1)^3Y=0,
$$

cuya solución general es (iii). Los términos $e^{2x}$, $xe^{2x}$, $x^2e^{2x}$ y $e^{-x}$ ya resuelven la ecuación homogénea asociada a (i), así que no sirven para la solución particular y se eliminan de (iii). La forma de la solución particular es

$$
Y(x)=c_4x^3e^{2x}+c_6xe^{-x}+c_7x^2e^{-x}.
$$

## Resolución

**Apartado (a).** El operador $D-2$ anula el término exponencial $3e^{2x}$:

$$
(D-2)\left(3e^{2x}\right)=6e^{2x}-6e^{2x}=0.
$$

Para el término $xe^{-x}$, la primera aplicación de $D+1$ baja el grado del factor polinómico:

$$
(D+1)\left(xe^{-x}\right)=\left(e^{-x}-xe^{-x}\right)+xe^{-x}=e^{-x}.
$$

La segunda aplicación anula el resultado:

$$
(D+1)\left(e^{-x}\right)=-e^{-x}+e^{-x}=0.
$$

Por tanto, $(D+1)^2$ anula $xe^{-x}$. Los operadores diferenciales lineales con coeficientes constantes conmutan (resultado del problema 19), de modo que el operador producto anula cada término por separado y, por linealidad, también su suma:

$$
(D-2)(D+1)^2\left(3e^{2x}-xe^{-x}\right)
=(D+1)^2(D-2)\left(3e^{2x}\right)-(D-2)(D+1)^2\left(xe^{-x}\right)=0.
$$

**Apartado (b).** Se aplica el operador $(D-2)(D+1)^2$ a ambos miembros de (i). Es el aniquilador identificado en el apartado (a); el enunciado transcribe este factor como $(D-1)^2$, que no anula el miembro derecho (véase Observaciones). En el miembro izquierdo se reordenan los factores:

$$
(D-2)(D+1)^2(D-2)^3(D+1)Y=(D-2)^4(D+1)^3Y.
$$

En el miembro derecho el operador anula $3e^{2x}-xe^{-x}$, luego el resultado es cero. Se obtiene (ii).

La ecuación (ii) es homogénea y con coeficientes constantes. Su ecuación característica es

$$
(r-2)^4(r+1)^3=0,
$$

con raíces $r=2$ de multiplicidad $4$ y $r=-1$ de multiplicidad $3$. Una raíz real $r$ de multiplicidad $m$ aporta las soluciones $e^{rx}, xe^{rx}, \dots, x^{m-1}e^{rx}$. Al reunir las contribuciones de ambas raíces resulta la solución general (iii).

**Apartado (c).** La ecuación homogénea asociada a (i) es $(D-2)^3(D+1)Y=0$, con ecuación característica $(r-2)^3(r+1)=0$ y raíces $2$ (multiplicidad $3$) y $-1$ (multiplicidad $1$). Su solución general es

$$
y_c=c_1e^{2x}+c_2xe^{2x}+c_3x^2e^{2x}+c_5e^{-x}.
$$

Los cuatro primeros términos de (iii) son precisamente $y_c$: al sustituirlos en el miembro izquierdo de (i) dan cero y no pueden reproducir $3e^{2x}-xe^{-x}$. Por eso se eligen $c_1=c_2=c_3=c_5=0$. Los términos restantes, $x^3e^{2x}$, $xe^{-x}$ y $x^2e^{-x}$, no resuelven la ecuación homogénea y son los únicos capaces de generar el miembro derecho. Así se obtiene la forma (iv).

## Observaciones

### Sobre el factor del apartado (b)

El operador que anula el miembro derecho de (i) es $(D-2)(D+1)^2$, según el apartado (a). La transcripción del enunciado imprime $(D-2)(D-1)^2$; ese operador no anula $3e^{2x}-xe^{-x}$ y no conduce a la ecuación (ii). La resolución emplea el operador correcto.

### Comprobación de la forma

Al sustituir (iv) en (i) resultan $c_4=\tfrac16$, $c_6=\tfrac1{27}$ y $c_7=\tfrac1{54}$. El sistema tiene solución única, de modo que (iv) es una forma adecuada: no le falta ningún término ni incluye términos que el operador aniquilaría.
