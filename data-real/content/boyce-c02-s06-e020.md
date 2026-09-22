
## Enunciado

**Epidemias.** El empleo de los métodos matemáticos para estudiar la propagación de enfermedades contagiosas se remonta por lo menos hasta algunos trabajos de Daniel Bernoulli sobre la viruela, en 1760. En años más recientes se han propuesto y estudiado muchos modelos matemáticos para muchas enfermedades diferentes. En los problemas 20 al 22 se tratan algunos de los modelos más sencillos y las conclusiones que es posible obtener de ellos. También se han utilizado modelos semejantes para describir la propagación de rumores y de productos para el consumidor.

Suponga que una población dada puede dividirse en dos partes: aquellos que tienen una enfermedad dada y pueden contagiar a los demás, y aquellos que no la tienen pero son susceptibles de adquirirla. Sea $x$ la proporción de individuos susceptibles y $y$ la proporción de individuos infectados; entonces $x + y = 1$. Suponga que la enfermedad se propaga por contacto entre los miembros enfermos y los sanos de la población y que la razón de propagación $dy/dt$ es proporcional al número de esos contactos. Además, suponga que los miembros de los dos grupos se desplazan libremente entre sí, de modo que el número de contactos es proporcional al producto de $x$ y $y$. Como $x = 1 - y$, se obtiene el problema con valor inicial

$$dy/dt = \alpha y(1 - y), \quad y(0) = y_0, \tag{i}$$
