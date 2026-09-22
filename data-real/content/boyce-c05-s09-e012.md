
## Enunciado

En cada uno de los problemas 11 a 14 recuerde que $\cos bt = (e^{ibt} + e^{-ibt})/2$ y $\operatorname{sen} bt = (e^{ibt} - e^{-ibt})/2i$. Si se supone que las fórmulas de integración elementales necesarias se extienden hasta este caso, halle la transformada de Laplace de la función dada; $a$ y $b$ son constantes reales.

12. $\cos bt$

## Solución

La transformada de Laplace de $\cos bt$ es

$$
\mathcal{L}\{\cos bt\}=\frac{s}{s^{2}+b^{2}}, \qquad \operatorname{Re}(s)>0.
$$

## Resolución

Se parte de la definición de la transformada,

$$
\mathcal{L}\{\cos bt\}=\int_{0}^{\infty} e^{-st}\cos bt\,dt,
$$

y se sustituye la forma exponencial $\cos bt=\dfrac{e^{ibt}+e^{-ibt}}{2}$. Por linealidad de la integral,

$$
\mathcal{L}\{\cos bt\}
=\frac{1}{2}\int_{0}^{\infty} e^{-(s-ib)t}\,dt
+\frac{1}{2}\int_{0}^{\infty} e^{-(s+ib)t}\,dt.
$$

Para $\operatorname{Re}(s)>0$ cada integral impropia converge y vale

$$
\int_{0}^{\infty} e^{-(s\mp ib)t}\,dt=\frac{1}{s\mp ib}.
$$

Al sumar las dos contribuciones,

$$
\begin{aligned}
\mathcal{L}\{\cos bt\}
&=\frac{1}{2}\left(\frac{1}{s-ib}+\frac{1}{s+ib}\right) \\
&=\frac{1}{2}\cdot\frac{(s+ib)+(s-ib)}{(s-ib)(s+ib)}
=\frac{1}{2}\cdot\frac{2s}{s^{2}+b^{2}}
=\frac{s}{s^{2}+b^{2}}.
\end{aligned}
$$

## Observaciones

La región de convergencia $\operatorname{Re}(s)>0$ es la del factor $e^{-st}$; sobre el eje real se reduce a $s>0$. Los pasos intermedios son complejos, pero el resultado es real porque las contribuciones de $e^{ibt}$ y $e^{-ibt}$ son conjugadas. El mismo procedimiento, con $\sin bt=(e^{ibt}-e^{-ibt})/(2i)$, da el par $\mathcal{L}\{\sin bt\}=\dfrac{b}{s^{2}+b^{2}}$.
