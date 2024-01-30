# XPath, XQuery

### recursos

- [Tutorial xpath (mclibre)](https://www.mclibre.org/consultar/xml/lecciones/xml-xpath.html)
- [Hoja resumen selectores xpath](https://devhints.io/xpath)


## XPATH

## Introducción a xpath

XPath es un lenguaje que permite seleccionar nodos de un documento XML y calcular valores a partir de su contenido.

Estos ejemplos se hacen sobre el fichero `book.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<bookstore>
<book category="COOKING">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>
<book category="CHILDREN">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <author>Giada De Laurentiis</author>
  <year>2006</year>
  <price>29.99</price>
</book>
</bookstore>
```

Todas las búsquedas se hacen desde el nodo raíz.

1. Ruta de localización:
    - `/bookstore/book`: Selecciona todos los nodos “book” que están en la ruta.
    - `//year`: Selecciona todos los nodos “year” a partir del nodo raíz.
    - `/bookstore/book/title/text()`: Selecciona todos los nodos texto (información) de los elementos seleccionados con la ruta.
    - `/bookstore/book/title/@lang`: Selecciona todos los atributos llamados “lang” de los elementos seleccionados con la ruta.
    - `//book[1]/title/text()`: Selecciona la información del nodo `tittle` del **primer nodo** `book`.
    - `.` : Selecciona el nodo actual.
    - `..` : Selecciona al nodo padre.
    - `` : Selecciona todos los nodos

2. Filtrado de nodos:
    - `/bookstore/book[title="Everyday Italian"]`: Predicado que filtra de todos los nodos seleccionados con la ruta, aquellos que tienen un nodo hijo cuya información coincide con la indicada.
    - `/bookstore/book[year>2005]`: En este caso se hace una comparación numérica.
    - `/bookstore/book/title[@lang="en"]`: Ahora la selección se hace con un atributo.
    - `/bookstore/book/title[@lang="en"]/text()`: Ejemplo igual que el anterior, pero en este caso se selecciona el nodo texto (información).
    - `//book[@category="CHILDREN" and price="29.99"]`: Se pueden utilizar expresiones lógicas: and y or.

3. Algunas funciones xpath
    - `count(//book/title)`: Devuelve el número de nodos seleccionados.
    - `sum(//book/price)`: Devuelve la suma de los valores de los nodos seleccionados.
    - `//book/author[contains(text(),'De')]`: Devuelve los autores cuya información contine la subcadena “De”.


## Lenguaje XPath

Los detalles del lenguaje están disponibles en la siguiente [documentación](https://www.mclibre.org/consultar/xml/lecciones/xml-xpath.html) de mclibre.



## Ejercicios introducción a XPath

Para realizar estos ejercicios utiliza el programa [BaseX]()

### Ejercicio 1

Dado el siguiente documento XML, escriba las expresiones XPath que devuelvan la respuesta deseada:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ies>
  <nombre>IES Gonzalo Nazareno</nombre>
  <web>http://www.gonzalonazareno.org</web>
  <ciclos>
    <ciclo id="ASIR">
      <nombre>Administración de Sistemas Informáticos en Red</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2009" />
    </ciclo>
    <ciclo id="DAW">
      <nombre>Desarrollo de Aplicaciones Web</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2010" />
    </ciclo>
    <ciclo id="SMR">
      <nombre>Sistemas Microinformáticos y Redes</nombre>
      <grado>Medio</grado>
      <decretoTitulo año="2008" />
    </ciclo>
  </ciclos>
</ies>
```

1. Nombre del instituto:
    
     `<nombre>IES Gonzalo Nazareno</nombre>`
    
2. Página web del Instituto:
    
     `http://www.gonzalonazareno.org`

3. Nombre de los Ciclos Formativos:
    
     `Administración de Sistemas Informáticos en Red
     Desarrollo de Aplicaciones Web
     Sistemas Microinformáticos y Redes`
    
4. Siglas por las que se conocen los Ciclos Formativos:
    
     `id="ASIR"
     id="DAW"
     id="SMR"`
    
5. Años en los que se publicaron los decretos de título de los Ciclos Formativos:
    
     `año="2009"
     año="2010"
     año="2008"`
    
6. Ciclos Formativos de Grado Medio (se trata de obtener el elemento completo):
    
     ```xml
     <ciclo id="SMR">
       <nombre>Sistemas Microinformáticos y Redes</nombre>
       <grado>Medio</grado>
       <decretoTitulo año="2008"/>
     </ciclo>`
     ``````
    
7. Nombre de los Ciclos Formativos de Grado Superior:
    
     `<nombre>Administración de Sistemas Informáticos en Red</nombre>
     <nombre>Desarrollo de Aplicaciones Web</nombre>`
    
8. Nombre de los Ciclos Formativos anteriores a 2010:
    
     `Administración de Sistemas Informáticos en Red
     Sistemas Microinformáticos y Redes`
    
9. Nombre de los Ciclos Formativos de 2008 o 2010:
    
     `Desarrollo de Aplicaciones Web
     Sistemas Microinformáticos y Redes`


### Ejercicio 2

Dado el siguiente documento XML, escriba las expresiones XPath que devuelvan la respuesta deseada:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ies>
  <modulos>
    <modulo id="0228">
      <nombre>Aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>4</horasSemanales>
      <ciclo>SMR</ciclo>
    </modulo>
    <modulo id="0372">
      <nombre>Gestión de bases de datos</nombre>
      <curso>1</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
    <modulo id="0373">
      <nombre>Lenguajes de marcas y sistemas de gestión de información</nombre>
      <curso>1</curso>
      <horasSemanales>3</horasSemanales>
      <ciclo>ASIR</ciclo>
      <ciclo>DAW</ciclo>
    </modulo>
    <modulo id="0376">
      <nombre>Implantación de aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
  </modulos>
</ies>
```

1. Nombre de los módulos que se imparten en el Instituto:
    
     `Aplicaciones web
     Gestión de bases de datos
     Lenguajes de marcas y sistemas de gestión de información
     Implantación de aplicaciones web`

2. Nombre de los módulos del ciclo ASIR:
    
     `Gestión de bases de datos
     Lenguajes de marcas y sistemas de gestión de información
     Implantación de aplicaciones web`
    
3. Nombre de los módulos que se imparten en el segundo curso de cualquier ciclo:
    
     `Aplicaciones web
     Implantación de aplicaciones web`
    
4. Nombre de los módulos de menos de 5 horas semanales:
    
     `Aplicaciones web
     Lenguajes de marcas y sistemas de gestión de información`
    
5. Nombre de los módulos que se imparten en el primer curso de ASIR:
    
     `Gestión de bases de datos
     Lenguajes de marcas y sistemas de gestión de información`
    
6. Horas semanales de los módulos de más de 3 horas semanales:
    
     `4
     5
     5`


### Ejercicio 3

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ies>
  <nombre>IES Gonzalo Nzareno</nombre>
  <web>http://www.gonzalonzareno.org</web>
  <ciclos>
    <ciclo id="ASIR">
      <nombre>Administración de Sistemas Informáticos en Red</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2009" />
    </ciclo>
    <ciclo id="DAW">
      <nombre>Desarrollo de Aplicaciones Web</nombre>
      <grado>Superior</grado>
      <decretoTitulo año="2010" />
    </ciclo>
    <ciclo id="SMR">
      <nombre>Sistemas Microinformáticos y Redes</nombre>
      <grado>Medio</grado>
      <decretoTitulo año="2008" />
    </ciclo>
  </ciclos>
  <modulos>
    <modulo id="0228">
      <nombre>Aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>4</horasSemanales>
      <ciclo>SMR</ciclo>
    </modulo>
    <modulo id="0372">
      <nombre>Gestión de bases de datos</nombre>
      <curso>1</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
    <modulo id="0373">
      <nombre>Lenguajes de marcas y sistemas de gestión de información</nombre>
      <curso>1</curso>
      <horasSemanales>3</horasSemanales>
      <ciclo>ASIR</ciclo>
      <ciclo>DAW</ciclo>
    </modulo>
    <modulo id="0376">
      <nombre>Implantación de aplicaciones web</nombre>
      <curso>2</curso>
      <horasSemanales>5</horasSemanales>
      <ciclo>ASIR</ciclo>
    </modulo>
  </modulos>
</ies>
```

1. Nombre de los módulos del ciclo “Sistemas Microinformáticos y Redes” (en la expresión final no deben aparecer las siglas SMR):
    
     `Aplicaciones web`
    
2. Nombre de los ciclos que incluyen el módulo “Lenguajes de marcas y sistemas de gestión de información”:
    
     `Administración de Sistemas Informáticos en Red
     Desarrollo de Aplicaciones Web`
    
3. Nombre de los módulos de ciclos de Grado Superior:
    
     `Gestión de bases de datos
     Lenguajes de marcas y sistemas de gestión de información
     Implantación de aplicaciones web`
    
4. Nombre de los módulos de ciclos cuyo título se aprobó en 2008:
    
     `Aplicaciones web`
    
5. Grado de los ciclos con módulos de primer curso:
    
     `Superior
     Superior`



### Ejercicio 4

```xml
<universidad>
    <nombre>Universidad de Victoria</nombre>
    <pais>EspaÃ±a</pais>
    <!--  CARRERAS  -->
    <carreras>
        <carrera id="c01">
            <nombre>I.T. InformÃ¡tica</nombre>
            <plan>2003</plan>
            <creditos>250</creditos>
            <centro>Escuela de InformÃ¡tica</centro>
        </carrera>
        <carrera id="c02">
            <nombre>Dipl. Empresariales</nombre>
            <plan>2001</plan>
            <creditos>275</creditos>
            <centro>Facultad de Ciencias Sociales</centro>
        </carrera>
        <carrera id="c03">
            <nombre>Dipl. Relaciones Laborales</nombre>
            <plan>2001</plan>
            <creditos>280</creditos>
            <centro>Facultad de Ciencias Sociales</centro>
            <subdirector>Alfonso MartÃ­n Luque</subdirector>
        </carrera>
        <carrera id="c04">
            <nombre>Lic. Quimica</nombre>
            <plan>2003</plan>
            <creditos>175</creditos>
            <centro>Facultad de Ciencias Experimentales</centro>
        </carrera>
        <carrera id="c05">
            <nombre>Lic. BiologÃ­a</nombre>
            <plan>2001</plan>
            <creditos>175</creditos>
            <centro>Facultad de Ciencias Experimentales</centro>
        </carrera>
        <carrera id="c06">
            <nombre>Lic. Humanidades</nombre>
            <plan>1980</plan>
            <creditos>475</creditos>
            <centro>Facultad de Humanidades</centro>
        </carrera>
    </carreras>
    <!--  ASIGNATURAS  -->
    <asignaturas>
        <asignatura id="a01" titulacion="c01">
            <nombre>OfimÃ¡tica</nombre>
            <creditos_teoricos>3</creditos_teoricos>
            <creditos_practicos>1.5</creditos_practicos>
            <trimestre>1</trimestre>
        </asignatura>
        <asignatura id="a02" titulacion="c01">
            <nombre>IngenierÃ­a del Software</nombre>
            <creditos_teoricos>6</creditos_teoricos>
            <creditos_practicos>1.5</creditos_practicos>
            <trimestre>2</trimestre>
        </asignatura>
        <asignatura id="a03" titulacion="c02">
            <nombre>AdministraciÃ³n de Empresas</nombre>
            <creditos_teoricos>4</creditos_teoricos>
            <creditos_practicos>1.5</creditos_practicos>
            <trimestre>1</trimestre>
        </asignatura>
        <asignatura id="a04" titulacion="c02">
            <nombre>Derecho Internacional</nombre>
            <creditos_teoricos>4</creditos_teoricos>
            <creditos_practicos>5</creditos_practicos>
            <trimestre>1</trimestre>
        </asignatura>
        <asignatura id="a05" titulacion="c04">
            <nombre>PedagogÃ­a</nombre>
            <creditos_teoricos>4</creditos_teoricos>
            <creditos_practicos>1.5</creditos_practicos>
            <trimestre>2</trimestre>
        </asignatura>
        <asignatura id="a06" titulacion="c03">
            <nombre>DidÃ¡ctica</nombre>
            <creditos_teoricos>4</creditos_teoricos>
            <creditos_practicos>3</creditos_practicos>
            <trimestre>2</trimestre>
        </asignatura>
        <asignatura id="a07" titulacion="c04">
            <nombre>TecnologÃ­a de los Alimentos</nombre>
            <creditos_teoricos>1.5</creditos_teoricos>
            <creditos_practicos>7.5</creditos_practicos>
            <trimestre>2</trimestre>
        </asignatura>
        <asignatura id="a08" titulacion="c01">
            <nombre>Bases de Datos</nombre>
            <creditos_teoricos>4.5</creditos_teoricos>
            <creditos_practicos>5.5</creditos_practicos>
            <trimestre>1</trimestre>
        </asignatura>
        <asignatura id="a09" titulacion="c06">
            <nombre>Historia del Pensamiento</nombre>
            <creditos_teoricos>6</creditos_teoricos>
            <creditos_practicos>0</creditos_practicos>
            <trimestre>2</trimestre>
        </asignatura>
    </asignaturas>
    <!--  ALUMNOS  -->
    <alumnos>
        <alumno id="e01">
            <apellido1>Rivas</apellido1>
            <apellido2>Santos</apellido2>
            <nombre>VÃ­ctor Manuel</nombre>
            <sexo>Hombre</sexo>
            <estudios>
                <carrera codigo="c01" />
                <asignaturas>
                    <asignatura codigo="a01" />
                    <asignatura codigo="a03" />
                    <asignatura codigo="a05" />
                    <asignatura codigo="a09" />
                </asignaturas>
            </estudios>
        </alumno>
        <alumno id="e02">
            <apellido1>PÃ©rez</apellido1>
            <apellido2>GarcÃ­a</apellido2>
            <nombre>Luisa</nombre>
            <sexo>Mujer</sexo>
            <estudios>
                <carrera codigo="c02" />
                <asignaturas>
                    <asignatura codigo="a02" />
                    <asignatura codigo="a01" />
                </asignaturas>
                <proyecto>Web de IBM.com</proyecto>
            </estudios>
        </alumno>
        <alumno id="e03" beca="si">
            <apellido1>PÃ©rez</apellido1>
            <apellido2>Romero</apellido2>
            <nombre>Fernando</nombre>
            <sexo>Hombre</sexo>
            <estudios>
                <carrera codigo="c02" />
                <asignaturas>
                    <asignatura codigo="a02" />
                    <asignatura codigo="a01" />
                    <asignatura codigo="a04" />
                    <asignatura codigo="a09" />
                </asignaturas>
            </estudios>
        </alumno>
        <alumno id="e04">
            <apellido1>AvalÃ³n</apellido1>
            <apellido2>JimÃ©nez</apellido2>
            <nombre>MarÃ­a</nombre>
            <sexo>Mujer</sexo>
            <estudios>
                <carrera codigo="c01" />
                <asignaturas>
                    <asignatura codigo="a02" />
                    <asignatura codigo="a01" />
                    <asignatura codigo="a07" />
                </asignaturas>
                <proyecto>Estudio de Salinidad del Pantano Iris</proyecto>
            </estudios>
        </alumno>
    </alumnos>
</universidad>
```

1. Nombre de la Universidad.
2. Pais de la Universidad.
3. Nombres de las Carreras.
4. Años de plan de estudio de las carreras.
5. Nombres de todos los alumnos.
6. Identificadores de todas las carreras.
7. Datos de la carrera cuyo id es c01.
8. Centro en que se estudia de la carrera cuyo id es c02.
9. Nombre de las carreras que tengan subdirector.
10. Nombre de los alumnos que estén haciendo proyecto.
11. Códigos de las carreras en las que hay algún alumno matriculado.
12. Apellidos y Nombre de los alumnos con beca.
13. Nombre de las asignaturas de la titulación c04.
14. Nombre de las asignaturas de segundo trimestre.
15. Nombre de las asignaturas que no tienen 4 créditos teóricos.
16. Código de la carrera que estudia el último alumno.
17. Código de las asignaturas que estudian mujeres.
18. Nombre de los alumnos que matriculados en la asignatura a02.
19. Códigos de las carreras que estudian los alumnos matriculados en alguna asignatura.
20. Apellidos de todos los hombres.
21. Nombre de la carrera que estudia Víctor Manuel.
22. Nombre de las asignaturas que estudia Luisa.
23. Primer apellido de los alumnos matriculados en Ingeniería del Software.
24. Nombre de las carreras que estudian los alumnos matriculados en la asignatura Tecnología de los Alimentos.
25. Nombre de los alumnos matriculados en carreras que no tienen subdirector.
26. Nombre de las alumnos matriculados en asignaturas con 0 créditos prácticos y que estudien la carrera de I.T. Informática .
27. Nombre de los alumnos que estudian carreras cuyos planes son anteriores a 2002.

