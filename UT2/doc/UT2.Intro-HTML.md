# Tema 2: Introducción a HTML

**Recursos**

- VS-Code
    - Configúralo como un PRO
        - [Configuración muy chula](https://twitter.com/midudev/status/1642476365080326145?cxt=HHwWgsCzyajjn8stAAAA) (puedas probarla)
        - [Las mejores extensiones para VSCode](https://twitter.com/midudev/status/1633515362246602752)
    - Plugins
        - Emmet: ya incluido por defecto (no hace falta instalarlo)
        - [Live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): permite levantar un servidor directamente desde una página web simple (ej: index.html)

# **Introducción al desarrollo web**

El desarrollo web tiene que ver con todo lo que percibimos a través del navegador: páginas, aplicaciones y sitios web como Facebook, Instagram y Twitter.

Para comprender cómo funciona internet necesitamos conocer tres grandes conceptos:

- **Clients** (clientes): son los dispositivos a través de los cuales accedemos a los sitios web: un computador desktop, un teléfono, una laptop, etc.
- **Internet**: es toda la red formada por servidores y clientes que proveen y consumen contenidos web y se comunican entre sí a nivel global.
- **Server** (servidor): es un computador, ubicado en alguna parte de la red, que está funcionando todo el tiempo, en el que se alojan o almacenan sitios web y sus recursos y al cual se accede a través de nombres de dominio (.com, .net, .pe, etc.). También se les conoce como hosting.

Profesiones dentro del Desarrollo Web:

- **Frontend**: son los encargados de cuidar toda la apariencia y experiencia de usuario. Su misión es pasar todo el diseño gráfico de un sitio o aplicación web, a código, y proveer toda la interactividad a los clientes. Esta rama se puede subdividir en algunas especializaciones como: Arquitecto Frontend, Desarrollador JavaScript (frontend), etc.
- **Backend**: trabajan con los datos y la seguridad de las aplicaciones y sitios web. Su misión es crear y mantener toda la parte del sitio web que ocurre en los servidores. Pueden especializarse aún más en: SysAdmis, DevOps, Desarrollador JavaScript (backend), entre otros.

Las tres tecnologías básicas que debe conocer y manejar un **Frontend** son:

- **HTML**: es el lenguaje de marcado para hacer websites.
- **CSS**: hojas de estilos cascada, el diseño hecho código.
- **JavaScript**: es el único lenguaje que funciona actualmente dentro de los navegadores de manera nativa.

💡 Aquí os dejo un [video](https://youtu.be/cC44XvWzSh0?list=PLJpymL0goBgFzvCuhEJJ29-x1H_Uo5Esv&t=237) sobre qué y en que orden estudiar para aprender aprender desarrollo web moderno

### **Software para trabajar en desarrollo web**

La herramienta fundamental para el desarrollo web es el Editor de Código. Existen varias opciones pero la más popular es Visual Studio Code.

Los editores de código se pueden configurar y personalizar para ofrecer una mejor experiencia al desarrollador.

### DOM

DOM es el acrónimo de Document Object Model o Modelo de documento, y es la manera en que se **representa** el contenido del documento, de manera similar a un árbol de nodos.

A continuación, un ejemplo sencillo de la estructura del DOM:

- html
    - head
        - title
        - meta
    - body
        - header
            - nav
        - section
            - article
        - footer

## Etiquetas

Las etiquetas son la representación básica de la información en un documento html. Sirven para crear y organizar el contenido.

La sintaxis general de una etiqueta es:

```html
<nombre> contenido </nombre>
```

Hay ciertas etiquetas que tienen una sintaxis diferente, ya que se cierran en sí mismas; es decir, no tienen etiqueta de cierre:

```html
<nombre />
```

Básicamente podemos distinguir entre 2 tipos de etiquetas:

- Etiquetas con contenido
- Etiquetas sin contenido

<aside>
📢 [Hoja resumen](https://learntheweb.courses/topics/html-semantics-cheat-sheet/) HTML semántico

</aside>

### Etiquetas con contenido.

Son etiquetas que tiene tres partes (por este orden)

- Apertura de la etiqueta
- Contenido de la etiqueta
- Cierre de la etiqueta

### Etiquetas sin contenido

Son etiquetas que sólo tienen parte de apertura y carecen de contenido. Pueden estar cerradas o no, aunque yo recomiendo que se cierren. De esta manera:

```html
<etiqueta >
<etiqueta />
```

Un ejemplo de etiqueta HTML sin contenido sería una imagen:

```html
<img ...  />
```

HTML tiene un número limitado de etiquetas y no es necesario conocer todas. Con una lista más o menos pequeña podemos construir la gran mayoría de páginas web. En caso contrario, siempre podemos visitar las referencias.

Algunas de las etiquetas más conocidas y usadas son:

- Etiquetas de cabecera (head)
    - **doctype**: indica al navegador el tipo de documento que se está mostrando.
    - **html**: es la etiqueta que envuelve todo el documento
    - **head**: es la cabecera del documento y contiene sub etiquetas que describen al documento o incluyen recursos adicionales.
- Etiquetas del cuerpo del documento (body):
    - **p**: párrafo
    - **article**: diferencia partes del contenido que pueden vivir por sí mismas.
    - **nav**: para hacer menús de navegación.
    - **aside**: contenido menos relevante, como publicidad, etc.
    - **section**: sirve para diferenciar las secciones principales del contenido.
    - **header**: cabecera del documento.
    - **footer**: pie de página del documento.
    - **h1 - h6**: títulos de nuestro sitio web.
    - **table**: tablas de contenidos, similar a la estructura de las hojas de calculo.
    - **ul y ol**: listas de items.
    - **div**: cualquier división para organizar el contenido.

### Atributos

Las etiquetas pueden tener atributos de los que nos interesa saber lo siguiente:

- Proporcionan información adicional sobre la etiqueta.
- Las etiquetas puede tener o no tener atributos e incluso tener más de uno.
- Siempre se añaden en la etiqueta de apertura.
- Hay atributos generales (para todas) o específicos (para algunas).
- Se representan nombre_atributo=”valor_atributo”.

Un ejemplo:

```html
<img src="foto.png"  />
```

### Tipos de etiquetas

Hay muchos tipos de etiquetas pero a lo largo de este curso vamos a centrarnos en las siguientes:

- Etiquetas de cabecera
- Etiquetas de texto
- Etiquetas de imágenes, tablas, listas y enlaces
- Etiquetas multimedia
- Etiquetas semánticas
- Y alguna más pero no todas ;) .

### Comentarios

Además de todas estas etiquetas nuestra página web podrá llevar comentarios que son, normalmente, texto descriptivos que no se van a mostrar en nuestra web.

Los comentarios van encerrados en esta estructura y un ejemplo sería:

```html
<!-- Esto es un comentario en HTML -->
```

### Atributos HTML

Los atributos son valores agregados a las etiquetas (tags) html que extienden su habilidad o funcionalidad con información específica.

A continuación, un ejemplo de los atributos más comunes y usados en algunas etiquetas:

Para **img**:

- **src**: específica la *ruta* de la imagen que será mostrada a través de esta etiqueta. La ruta puede ser *absoluta* (cuando especifica una dirección exacta, incluyendo el prefijo *http(s)* ) o *relativa* (cuando la referencia a la ubicación de la imagen parte de la ubicación del archivo actual).
- **alt**: indica un texto alternativo que será mostrado en lugar de la imagen cuando ésta no pueda ser mostrada.
- **width**: ancho de la imagen en pixeles.
- **height**: alto de la imagen en pixeles.

Para **link**, en la cabecera *head* del documento:

- **rel**: indica la relación del recurso con el contenido.
- **type**: indica el tipo de recurso / formato.
- **href**: indica la ubicación (url) del recurso enlazado.

Para **meta**, también en la cabecera *head* del documento:

- **charset**: indica la tabla de caracteres (utf-8 para caracteres latinos) usada en el documento.

Para **a**:

- **href**: la ubicación o ruta a la que enlaza esta etiqueta de ancla. En el caso de querer enlazar a elementos que se encuentran dentro del mismo documento, este atributo debe indicar el valor del atributo ““id”” de ese elemento destino del enlace.

## Estructura de nuestro Sitio Web

De manera general podemos representar toda página Web como un árbol genealógico cuya estructura común, para todas las webs, podemos decir que será la siguiente:

De manera general podemos representar toda página Web como un árbol genealógico cuya estructura común, para todas las webs, podemos decir que será la siguiente:

Esto significa lo siguiente:

- Hay una etiqueta padre de todo, la etiqueta html y entre la apertura y el cierre de esta etiqueta meteremos el resto de nuestra página.
- La etiqueta html tiene dos hijos, la etiqueta head que es la cabecera, que ya veremos que elementos contiene, y la etiqueta body que es la que en realidad contiene los elementos de mi web.
- A su vez esas dos etiquetas anteriores puede tener sus propios hijos y así sucesivamente.

El archivo **index.html** es el archivo que el navegador abre por defecto al acceder a un directorio en un servidor web.

La estructura básica de un archivo html es la siguiente:

```html
<html>
  <head>
    <title> Título de la página </title>
  </head>
  <body>
      <header> Cabecera del contenido </header>
      <section> Sección principal </section>
    <section> Otra sección </section>
    <footer> Pié de página del documento </footer>
  </body>
</html>
```

> ↘️ [Probar Online](https://codesandbox.io/embed/crimson-breeze-dsw2p1?fontsize=14&hidenavigation=1&theme=dark)
    

Otras etiquetas HTML son las siguientes:

- **h1** a **h6**: son etiquetas para indicar títulos con un estilo que destaca del resto.
- **article**: es la parte de nuestro contenido que puede vivir por sí mismo. Pueden haber tantos artícle como proyectos o eventos tenga nuestro portafolio.
- **p**: define el texto de un párrafo.
- **small**: aplica una apariencia de texto reducido en tamaño.
- **strong**: aplica al texto un formato de negritas.
- **a**: corresponde a un ancla o enlace a una url interna o externa del documento.
- **img**: con esta etiqueta podemos enlazar imágenes en el documento.
- **figure**: le da un contexto semántico a las imágenes.

### Elementos semánticos HTML

Una de las principales ventajas de HTML5 es la inclusión d**e elementos semánticos, o marcados semánticos**, que nos ayudan a definir las distintas divisiones de una página web.

En las versiones anteriores a HTML5 **se solía utilizar la etiqueta <div**> para realizar las divisiones de una página web, pero **actualmente es recomendado utilizar los elementos semánticos** ya que describen claramente su propósito.

Como se puede observar en el esquema de la figura 2.1, mediante marcadores semánticos se puede diferenciar claramente el contenido que referencia cada etiqueta.

![Esquema básico de un documento HTML5](./img/Untitled.png)

Esquema básico de un documento HTML5

### Estructura página

- **Elementos raíz**
    
    
    | Elemento        | Descripción                                                                                                 |
    | --------------- | ----------------------------------------------------------------------------------------------------------- |
    | <!DOCTYPE html> | Indica que el documento está bajo el estándar de HTML5.                                                     |
    | <html>          | Representa la raíz de un documento HTML. Es una buena práctica indicar el idioma mediante el atributo lang. |
- **Metadatos**
    
    
    | Elemento | Descripción                                                                                                       |
    | -------- | ----------------------------------------------------------------------------------------------------------------- |
    | <head>   | En su interior se incluye la colección de metadatos sobre el documento y los enlaces a scripts y hojas de estilo. |
    | <title>  | Representa el título del documento. Se muestra en la barra superior del navegador o en las pestañas de página.    |
    | <link>   | Utilizada para enlazar documentos externos, por ejemplo CSS. Se debe incluir dentro del <head>.                   |
    | <meta>   | Define los metadatos que no pueden ser definidos usando otro elemento HTML.                                       |
    | <style>  | Usada para escribir CSS interno.                                                                                  |
- **Scripting**
    
    
    | Elemento   | Descripción                                                                             |
    | ---------- | --------------------------------------------------------------------------------------- |
    | <script>   | Define un script interno o un enlace hacia un script externo de JavaScript.             |
    | <noscript> | Representa un contenido alternativo a mostrar cuando el navegador no soporta scripting. |
- **Secciones**
    
    
    | Elemento                      | Descripción                                                                                                                                                                 |
    | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | <body>                        | Representa el contenido principal de un documento HTML. Sólo puede existir un elemento <body> en el documento.                                                              |
    | <section>                     | Define secciones de una web.                                                                                                                                                |
    | <nav>                         | Especifica una sección que contiene un menú de navegación.                                                                                                                  |
    | <article>                     | Determina secciones de contenido.                                                                                                                                           |
    | <aside>                       | Define la barra lateral de una página web.                                                                                                                                  |
    | <h1>,<h2>,<h3>,<h4>,<h5>,<h6> | Describe el tema de la sección. Disponemos de seis niveles: de h1 a h6, siendo <h1> la cabecera de mayor importancia. Sólo puede existir una etiqueta <h1> en el documento. |
    | <header>                      | Determina la cabecera de una web o de un elemento.                                                                                                                          |
    | <footer>                      | Define el pie de página. También se puede utilizar para definir el pie de otros elementos.                                                                                  |
    | <address>                     | Especifica una sección que contiene información de contacto.                                                                                                                |
    | <main>                        | Determina el contenido principal del documento. Solo puede existir un elemento <main> en el documento.                                                                      |

### Tipos de Etiquetas

### Cabecera | Head

La cabecera de mi página web es lo que está dentro de la etiqueta 'head'.

Todo lo que va dentro de esa etiqueta no representa contenido alguno, es decir, nada de lo que yo pongo se va a ver en nuestro navegador. Contiene otras etiquetas que nos van a ayudar a dar una descripción de mi página. Puede contener enlaces a hojas de estilos y scripts. De las etiquetas que puede contener la cabecera destacaremos las siguientes:

- title: que nos sirve para indicar el título de la página que es lo que se muestra en la parte de arriba del navegador.
- style: que es una etiqueta que me permite incluir estilos y que veremos con más detenimiento al final de este mismo curso.
- meta: que es una etiqueta que puede aparecer varias veces y con distintos atributos y que nos va a servir para dar una descripción de la página de diversas formas y maneras.
- link: para enlazar con archivos externos, normalmente hojas de estilos. base: para indicar la ruta base para contruir el resto de las rutas a archivos en mi página web.
- script: para incluir normalmente ficheros javascript que doten de vida o animación a mi web. La etiqueta meta Es una etiqueta muy importante ya que, aunque no muestre nada, describe mi web y es, entre otras cosas, lo primero que leen tanto los navegadores como los buscadores.

Puede tener varias posibilidades, dependiendo de los atributos que lleve.

- Es lo que pondremos siempre para no tener problemas con caracteres “extraños” (acentos, ñ etc…) u otros tipos de alfabetos.
- Es lo que incluiremos para añadir una descripción sobre lo que es mi web. Ese texto descriptivo irá en en el atributo content.
- Es lo que incluiremos para categorizar el contenidos de mi web. Por ejemplo: content="programacion,html,meta"
- ;)
- que es nuevo en HTML5 y que me asegura que mi web escalará para adaptarse a la pantalla del dispositivo. Esto, no obstante no asegura que se vea bien.
- que refrescará la web cada X segundos. Puede ser interesante para mostrar actualizaciones automáticamente en páginas que cambian , por ejemplo, las de resultados deportivos.

### Etiquetas de Texto

### Encabezados

Son etiquetas que nos van a permitir añadir “títulos” o encabezados a distintas secciones de nuestra página. Estas etiquetas tienen el siguiente formato:

```html
 <hx>
     ...
     Contenido o texto
     ...
 </hx>
```

x deberá ser sustituido por un número del 1 al 6, desde 1 que es el mayor tamaño hasta 6 que es el más pequeño. El texto se mostrará en negrita.

Veámos un ejemplo simple:

```html
   <h1>Hola</h1>
   <h2>Hola</h2>
   <h3>Hola</h3>
   <h4>Hola</h4>
   <h5>Hola</h5>
   <h6>Hola</h6>
```

### Etiquetas de formato

Hay multitud, todas le dan cierto estilo al texto que contienen y destacaremos las siguientes:

- b: para poner un texto en negrita.
- i: para poner un texto en cursiva.
- del: para mostrar un texto tachado.
- em: para poner un texto con énfasis (similar a cursiva).
- sup: para poner un texto como superíndice de otro texto.
- sub: para poner un texto como subíndice de otro texto.
- mark: para poner un texto subrayado (nuevo en html5).
- q: para mostrar una pequeña cita.
- cite: para mostrar el título de una referencia bibliográfica.
- time: para mostrar horas.
- address: para mostrar direcciones.
- blockquote: para poner citas largas.

Otras etiquetas interesantes

- br/: Salto de línea.
- p: Párrafo.
- hr/: Separación de Tema.

### Imágenes

Y además, explicaremos qué es un ruta y las clases que hay ya que, estos dos elementos anteriores, van a utilizar rutas en sus atributos.

Imágene simples La inclusión de imágenes simples se viene haciendo desde las primeras versiones de HTML con la etiqueta sin contendio <img .../>

Los atributos más comunes que le podemos poner a esta etiqueta son:

src: que indica la ruta en la que se encuentra el archivo de la imagen. alt: un texto alternativo para describir la imagen en caso de que no se cargue o para dispositivos especiales para usuarios con discapacidad visual (por ejemplo) width: para especificar la anchura de la imagen (px, % etc..). Si no se escogerá la anchura propia de la misma. height: para especificar la altura de la imagen (px, % etc..). Si no se escogerá la altura propia de la misma. Es importante destacar que la imagen es un elemento en línea que se pone, si cabe, inmediatamente después de los elementos previamente añadidos.

Algunos ejemplos de utilización de estos atributos podrían ser:

```html
    <!-- Si no pongo nada se respetan las dimensiones originales de la imagen-->
    <!-- Ruta relativa -->
    <img alt="Logo" src="img/openwebinars-logo.jpg">

    <!-- Ruta absoluta -->
    <img alt="Logo" src="/home/img/openwebinars-logo.jpg">

    <!-- Ruta URL -->
    <img alt="Logo" src="htts://www.linuxadictos.com/wp-content/uploads/openwebinars-logo.jpg">

    <!-- Si modifico una dimensión se respetan las proporciones-->
    <img height="50px" alt="Logo" src="img/openwebinars-logo.jpg">
    <img width="50px" alt="Logo" src="img/openwebinars-logo.jpg">

    <!-- Si pongo ambas dimensiones puedo modificar las proporciones-->
    <img height="300px" width="100px" alt="Log" src="img/openwebinars-logo.jpg">
```

### Rutas

El concepto de ruta es un concepto muy importante ya que se utiliza es muchos temas relacionados con la informática y en concreto, en la creación de páginas WEB, se utiliza para referenciar archivos, recursos y/o partes de alguna web. De manera general podemos distinguir:

- **Relativas**: Toman como base el directorio en el que se encuentra nuestro fichero. Son las recomendadas.
    
    ```html
      <img alt="Logo de OpenWebinars" src="img/openwebinars-logo.jpg">
    ```
    
- **Absolutas**: Toman como base el directorio raíz de mi equipo (/ en Linux y c:\ en Windows). Cuidado, sólo funcionarán en tu mismo equipo.
    
    ```html
     <img alt="Logo de OpenWebinars" src="/home/jssgarcia/examples/img/openwebinars-logo.jpg">
    ```
    
- **Url**: La dirección de Internet de un recurso (fichero, imagen etc..). Puede desaparecer y entonces dejará de mostrarse en nuestra web.
    
    ```html
    <img alt="Logo de OpenWebinars" src="https://www.linuxadictos.com/wp-content/uploads/openwebinars-logo.jpg">
    ```
    

### Figuras

Una novedad en HTML5 es la construcción de etiquetas alrededor de que nos va a permitir mostrar una imagen con un texto asociado.

Donde:

```html
<figure> es la etiqueta padre.
<img ../> es una etiqueta de imagen que hemos visto anteriormente.
<figcaption> es una etiqueta que contendrá el texto asociado a la imagen.
```

Un ejemplo:

```html
    <figure>
        <img alt="Logo de OpenWebinars" src="img/openwebinars-logo.jpg">
        <figcaption>Logotipo de OpenWebinars con la etiqueta figure</figcaption>
    </figure>
```

### Enlaces

Los enlaces, que se representan mediante el uso de la etiqueta 'a' es una de las contrucciones más importantes en HTML. Esta etiqueta puede tener varios atributos, de lo cuales los más importante son:

- href: que es la dirección de Internet de destino (ya sea otra página web, un imagen, un fichero o lo que sea).
- target: que indica dónde voy a abrir ese enlace. Si no pongo nada se abrirá en la misma pantalla y si le doy el valor target=”_blank” se abrirá en una nueva ventana de mi navegador.

Varios ejemplos de enlaces:

```html
<p><a href="http://www.openwebinars.net">Esto abre un enlace en la propia página</a></p>
<p><a href="http://www.openwebinars.net" target="_blank">Esto abre un enlace en una pestaña nueva</a></p>

<!-- Haciendo que una imagen sea enlace. Anidando etiquetas -->
<a href="http://www.openwebinars.net"><img width="100px" alt="Log" src="img/openwebinars-logo.jpg"></a>
```

**Enlaces dentro de la misma página**

Puedo enlazar enlaces dentro de la misma página con construcciones como la siguiente:

```html
    ...
    <a href="#contacto">Contacto</a>
    ...
    <section id="contacto">
        .....
    </section>
    ....
```

### Listas HTML

Las listas en HTML nos permite crear conjuntos de elementos en forma de lista dentro de una página, todos los cuales irán precedidos, generalmente, por un guión o número.

Los tipos de listas en HTML son los siguientes:

- Listas ordenadas
- Listas desordenadas
- Listas de definiciones

**Listas Ordenadas**

Las listas en HTML ordenadas son aquellas que nos muestran los elementos de la lista en orden. Para representar el orden tendremos los elementos numerados. Es decir, cada uno de los elementos irá precedido de un número o letra que establezca su orden.

Las listas en HTML ordenadas se representan mediante el elemento OL.

`<ol> ... </ol>`

Cada uno de los elementos de la lista ordenada se representará mediante el elemento LI.

```html
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  ...
  <li>Elemento N</li>
</ol>
```

Un ejemplo de lista ordenada sería el siguiente:

1. Julio
2. Carmen
3. Ignacio
4. Elena

**Número de inicio de la lista: start**

El atributo start nos permite indicar el número por el cual queremos que empiece la lista, ya que por defecto las listas ordenadas en HTML empiezan por el número 1.

`<ol start="numero"> ... </ol>`

De esta forma, si queremos que la lista empiece por el número 5, escribiremos el siguiente código:

```html
<ol start="5">
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
```

Que produciría el siguiente efecto:

1. Julio
2. Carmen
3. Ignacio
4. Elena

**Tipo de lista ordenada: type** De igual manera podemos indicar el tipo de lista ordenada en HTML que queremos representar.

Entre los tipos de listas que podemos representar tenemos:

1 - Listas decimales a - Listas alfabéticas en minúsculas A - Listas alfabéticas en mayúsculas i - Listas de números romanos en minúsculas I - Listas de números romanos en mayúsculas Los valores indicados al principio son los que le podemos asignar al atributo type de la lista ordenada en HTML.

`<ol type="tipo"> ... </ol>`

Si queremos que nuestra lista aparezca ordenada mediante letras en mayúsculas escribimos lo siguiente:

```html
<ol type=”A”>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
```

En este caso la lista se representará de la siguiente forma:

A. JulioB. CarmenC. IgnacioD. Elena

### Listas en orden inverso: reversed

En HTML 5 aparece el atributo reversed para las listas ordenadas. El atributo reversed nos permite invertir el orden de la lista. Es decir, realiza la numeración de la lista de forma inversa.

Para utilizarlo simplemente indicamos el atributo reversed sobre el elemento OL.

`<ol reversed> ... </ol>`

En este caso, si escribimos la siguiente lista:

```html
<ol reversed>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
```

Lo que obtendremos por pantalla será lo siguiente:

1. Julio
2. Carmen
3. Ignacio
4. Elena

### Listas Desordenadas

Las listas desordenadas en HTML nos sirven para mostrar los elementos sin ningún tipo de orden, simplemente precedidos por una viñeta que puede ser un punto, un cuadrado,…

Para definir una lista desordenada en HTML utilizamos el elemento ul.

`<ul> ... </ul>`

Para representar los elementos de la lista desordenada utilizamos el mismo elemento que con las listas ordenadas, es decir, el elemento li.

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  ...
  <li>Elemento N</li>
</ul>
```

De esa forma podríamos tener el siguiente código HTML:

```html
<ul>
  <li>FC. Barcelona</li>
  <li>Real Madrid</li>
  <li>Real Betis</li>
  <li>Atlético de Madrid</li>
</ul>
```

Lo que nos mostrará por pantalla:

- FC. Barcelona
- Real Madrid
- Real Betis
- Atlético de Madrid

### Listas de Definiciones

Las listas en HTML de definiciones en HTML nos sirven para montar listas en las que tenemos la estructura valor y definición. Suelen ser listas para definir términos, como si fuese un diccionario, si bien pueden ser cualquier par valor-definición.

Las listas en HTML de definiciones en HTML se construyen mediante el elemento dl.

`<dl> ... </dl>`

En este caso, dentro de las listas en HTML de definiciones tenemos dos elementos anidados, el que representa al valor dt y el que representa a la definición dd. De esta forma la estructura de las listas en HTML de definiciones es la siguiente:

```html
<dl>
  <dt>Término1</dt>
  <dd>Definición 1</dd>
  <dt>Término 2</dt>
  <dd>Definición 2</dd>
  ...
  <dt>Término N</dt>
  <dd>Definición N</dd>
</dl>
```

Si queremos crear una lista en HTML con definiciones de palabras, podemos escribir lo siguiente:

```html
<dl>
  <dt>Pizpireta</dt>
  <dd>Dicho de una mujer: Viva, pronta y aguda.</dd>
  <dt>Pulular</dt>
  <dd>Dicho de las personas, animales o cosas: Abundar y bullir en un lugar.</dd>
  <dt>Concupiscencia</dt>
  <dd>En la moral católica, deseo de bienes terrenos y, en especial, apetito desordenado de placeres deshonestos.</dd>
</dl>
```

Lo cual nos acabará mostrando por pantalla lo siguiente:

*Pizpireta*Dicho de una mujer: Viva, pronta y aguda.*Pulular*Dicho de las personas, animales o cosas: Abundar y bullir en un lugar.*Concupiscencia*En la moral católica, deseo de bienes terrenos y, en especial, apetito desordenado de placeres deshonestos.

Por defecto los navegadores dejan el término y en la siguiente líne, junto con un tabulador, la definición.

### Listas anidadas

Cuando estemos manejando listas podemos anidar unas en otras independientemente del tipo de lista que estemos anidando.

Para crear listas anidadas en HTML simplemente tenemos que hacer que el elemento de una de las listas sea a su vez una lista. Es decir, el esquema de listas sería parecido al siguiente:

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>
    <ol>
      <li>Elemento 2.1</li>
      <li>Elemento 2.2</li>
      ...
      <li>Elemento 2.N</li>
    </ol>
  </li>
  <li>Elemento 3</li>
  ...
  <li>Elemento N</li>
</ul>
```

En este caso hemos anidado una lista ordenada dentro del tercer elemento li de una lista desordenada.

Hay que tener cuidado de poner el elemento li dentro de la lista anidada, ya que si no lo ponemos estaremos generando un código incorrecto.

Las anidaciones de listas puede ser de cualquier tipo de lista y sin límite de anidación.

Un ejemplo de listas anidadas sería una clasificación de animales como la siguiente:

```html
<ul>
  <li>Carnívoro
  	<ul>
  		<li>León</li>
  		<li>Buitre</li>
  		<li>Hiena</li>
  	</ul>
  </li>
  <li>Herbívoro
  	<ul>
  		<li>Cabra</li>
  		<li>Vaca</li>
  	</ul>
  </li>
  <li>Omnívoro
  	<ul>
  		<li>Oso</li>
  		<li>Urraca</li>
  	</ul>
  </li>
</ul>
```

El efecto que obtendríamos sería el siguiente:

- Carnívoro
    - León
    - Buitre
    - Hiena
- Herbívoro
    - Cabra
    - Vaca
- Omnívoro
    - Oso
    - Urraca

### Tablas

**¿Qué son las tablas en HTML?** Las tablas es el elemento del lenguaje HTML que utilizaremos para mostrar información de forma agrupada. Ya sea texto, imágenes, vídeos,…

El elemento table será el que nos ayudará para crear las tablas en HTML.

Un mal uso de las tablas en HTML es el motivo de maquetación, uso que se dió a las tablas en los principios del lenguaje HTML. Algo que hoy en día es una mala práctica. Cambiando por un modelo de maquetación apoyado en capas.

**Crear una tabla simple** Para crear una tabla vamos a necesitar conocer, al menos, tres elementos: table, tr y td. Si bien existen otros cuantos que nos permitirán ampliar la funcionalidad de las tablas.

El primer elemento es table. table es el elemento que representa las tablas y será el que agrupe al resto de elementos. Por lo tanto tiene sus etiquetas de inicio y cierre.

```html
<table> ... </table>
```

Siguiendo con la construcción de la tabla el siguiente elemento que necesitamos es tr. El elemento tr representa a una fila de la tabla. Por lo tanto tendremos tantos elementos tr como filas tenga la tabla.

Así, si queremos tener una tabla de tres filas tendremos un código como el que sigue:

```html
<table>
  <tr> ... </tr>
  <tr> ... </tr>
  <tr> ... </tr>
</table>
```

El último elemento que necesitamos conocer es td. El elemento td es el que representa de una forma unitaria a una celda. Por lo tanto los elementos tr tendrán tantos elementos td en su interior como celdas contenga la fila.

El contenido que haya entre los elementos td será el contenido de la celda.

Una tabla de tres filas por cuatro columnas quedaría de la siguiente forma:

```html
<table>
  <tr>
    <td>Fila 1 Columna 1</td>
    <td>Fila 1 Columna 2</td>
    <td>Fila 1 Columna 3</td>
    <td>Fila 1 Columna 4</td>
  </tr>
  <tr>
    <td>Fila 2 Columna 1</td>
    <td>Fila 2 Columna 2</td>
    <td>Fila 2 Columna 3</td>
    <td>Fila 2 Columna 4</td>
  </tr>
  <tr>
    <td>Fila 3 Columna 1</td>
    <td>Fila 3 Columna 2</td>
    <td>Fila 3 Columna 3</td>
    <td>Fila 3 Columna 4</td>
  </tr>
</table>
```

Visualmente tendríamos algo así:

| Fila 1 Columna 1 | Fila 1 Columna 2 | Fila 1 Columna 3 | Fila 1 Columna 4 |
| ---------------- | ---------------- | ---------------- | ---------------- |
| Fila 2 Columna 1 | Fila 2 Columna 2 | Fila 2 Columna 3 | Fila 2 Columna 4 |
| Fila 3 Columna 1 | Fila 3 Columna 2 | Fila 3 Columna 3 | Fila 3 Columna 4 |

### Tablas básicas

**Poner título a la tabla** Ahora que conocemos cómo se construye una tabla básica con HTML vamos a ir viendo qué posibilidades adicionales tenemos sobre las tablas.

Lo primero que haremos será poner un título a la tabla. Para ello vamos a utilizar el elemento caption. El contenido del elemento caption será el título que le asignemos a la tabla.

Añadimos el elemento caption antes de cualquier definición de filas dentro de la tabla.

Así, el código para poner el título a la tabla sería:

```html
<table>
<caption>Mi tabla de ejemplo</caption>
  <tr>
    <td>Fila 1 Columna 1</td>
    <td>Fila 1 Columna 2</td>
    <td>Fila 1 Columna 3</td>
    <td>Fila 1 Columna 4</td>
  </tr>
</table>
```

**Resumen de la tabla** Aunque el título suele ser el elemento descriptivo de la tabla existe un atributo a nivel del elemento table de especial importancia. Este es el atributo summary. El atributo summary nos permite adjuntar un resumen de la información que contiene la tabla.

Este atributo será de gran interés para cuando nuestras páginas web sean interpretadas por programas para discapacitados, ya que la información que contiene una tabla suele ser de difícil interpretación.

Es por ello que es muy recomendable que siempre añadamos un resumen a nuestra tabla.

El código es tan sencillo como este:

```html
<table summary="Tabla que contiene datos de ejemplo para poder explicar como construir tablas con el lenguaje HTML">
<caption>Mi tabla de ejemplo</caption>
  <tr>
    <td>Fila 1 Columna 1</td>
    <td>Fila 1 Columna 2</td>
    <td>Fila 1 Columna 3</td>
    <td>Fila 1 Columna 4</td>
  </tr>
</table>
```

**Definiendo Una Cabecera en la Tabla** Una cosa que vemos es que las tablas suelen tener una primera fila de encabezado. Dentro de las tablas en HTML podemos identificar esta fila mediante el elemento th. Es decir, para las celdas de la fila de cabecera en vez de utilizar un elemento td utilizaremos un elemento th.

Así, la cabecera de una tabla quedará de la siguiente forma:

```html
<table>
  <tr>
    <th>Cabecera 1</th>
    <th>Cabecera 2</th>
    <th>Cabecera 3</th>
  </tr>
  <tr>
    <td>Fila 1 Columna 1</td>
    <td>Fila 1 Columna 2</td>
    <td>Fila 1 Columna 3</td>
  </tr>
</table>
```

**El atributo scope**

Hay celdas de cabecera que necesiten una pequeña explicación sobre si la información que representan es la de las columnas o la de las filas. Suele suceder, normalmente, con la primera celda.

![Untitled](./img/01.png)

Para resolver este problema tenemos el atributo scope. El atributo scope solo se puede aplicar a las celdas de una cabecera. Y sus valores son: “col”, “row”, “colgroup” o “rowgroup”.

De esta forma si queremos que esta celda sea representativa de columnas la definiremos como:

```html
<td scope="col">Contenido de la Celda</td>
```

**Agrupando Celdas**

A la hora de presentar datos en una tabla nos puede surgir la necesidad de agrupar celdas, ya que el contenido a presentar refleja una agrupación de datos.

Imaginemos una tabla que nos saca los ingresos y gastos por meses. Existirá una columna con el mes, la cual agrupará dos columnas: ingresos y gastos.

| Enero    | Febrero  |
| -------- | -------- |
| Ingresos | Gastos   |
| 1.000€   | 700€/td> |
| 1.800€   | 920€     |

En este caso lo que estamos diciendo es que una celda ocupa dos espacios. Para ello vamos a utilizar el atributo colspan sobre el elemento td de la celda.

Así indicaremos que el colspan de esa celda es 2. Ya que ocupa dos celdas.

```html
<td colspan="2">Enero</td>
```

El código completo sería:

```html
<table>
  <tr>
    <td colspan="2">Enero</td>
    <td colspan="2">Febrero</td>
  </tr>
  <tr>
    <td>Ingresos</td>
    <td>Gastos</td>
    <td>Ingresos</td>
    <td>Gastos</td>
  </tr>
  <tr>
    <td>1.000€</td>
    <td>700€/td>
    <td>1.100€</td>
    <td>580€</td>
  </tr>
  <tr>
    <td>1.800€</td>
    <td>920€</td>
    <td>1.750€</td>
    <td>920€</td>
  </tr>
</table>
```

De igual manera nos puede suceder en sentido horizontal. Es decir, que queramos que una celda ocupe dos filas.

Si lo vemos sobre nuestro ejemplo veremos que podemos añadir una columna que simplemente ponga que los valores numéricos tengan el literal “Datos Económicos”. En este caso tendremos que indicar que esa celda ocupa dos filas.

|                  | Enero    | Febrero |
| ---------------- | -------- | ------- |
| Datos Económicos | Ingresos | Gastos  |
| 1.000€           | 700€/td> | 1.100€  |
| 1.800€           | 920€     | 1.750€  |

Para la agrupación de filas tenemos otro atributo que es rowspan. Este atributo, al igual que colspan se aplica sobre la celda td

```html
<td rowspan="3">Datos Económicos</td>
```

```html
<table>
  <tr>
    <td></td>
    <td colspan="2">Enero</td>
    <td colspan="2">Febrero</td>
  </tr>
  <tr>
    <td rowspan="3">Datos Económicos</td>
    <td>Ingresos</td>
    <td>Gastos</td>
    <td>Ingresos</td>
    <td>Gastos</td>
  </tr>
  <tr>
    <td>1.000€</td>
    <td>700€/td>
    <td>1.100€</td>
    <td>580€</td>
  </tr>
  <tr>
    <td>1.800€</td>
    <td>920€</td>
    <td>1.750€</td>
    <td>920€</td>
  </tr>
</table>
```

### Tablas Avanzadas

**Grupos de Filas**

Ya hemos visto que las tablas se van definiendo por filas mediante el elemento tr. Pues dentro de HTMLpodemos agrupar estas filas por funcionalidad.

Para ello podemos agrupar las filas en tres partes:

- **Cabecera**, representada por el elemento thead.
- **Cuerpo**, representada por el elemento tbody.
- **Pie**, representada por el elemento tfoot.

Cada uno de estos elementos tendrá una o n filas, dependiendo de las que queramos agrupar. La estructura es la misma para los tres casos:

```html
<thead>
  <tr> <!-- fila(s) --></tr>
</thead>

<tbody>
  <tr> <!-- fila(s) --></tr>
</tbody>

<tfoot>
  <tr> <!-- fila(s) --></tr>
</tfoot>
```

Es importante saber que no es necesario que aparezcan en ese orden dentro de la tabla, este podría ser alterados. Si bien el navegador si que las representará en dicho orden.

De esta forma podríamos tener la siguiente tabla con agrupaciones:

```html
<table>
  <thead>
    <tr>
	<td scope="row">Mes</td>
      <td>Enero</td>
      <td>Febrero</td>
    </tr>
  </thead>
  <tfoot>
    <tr>
	<td>Total</td>
      <td>15</td>
      <td>25</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
	<td>Agua</td>
      <td>10</td>
      <td>15</td>
    </tr>
    <tr>
	<td>Gas</td>
      <td>5</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
```

Que representaría lo siguiente:

| Mes   | Enero | Febrero |
| ----- | ----- | ------- |
| Total | 15    | 25      |
| Agua  | 10    | 15      |
| Gas   | 5     | 10      |

Para conocer más de este tema en este (enlace)[[https://www.manualweb.net/html/tablas-avanzadas-html/](https://www.manualweb.net/html/tablas-avanzadas-html/)]

### Formularios HTML

Los Formularios en html son unidades de información que nos permiten recolectar información para enviarlos al propietario del website o a un servicio externo. Esta formado por dos partes o contextos: una parte donde se hace el ingreso y modelación de esos datos (en el frontend), y otra parte que se encarga de enviar, procesar y almacenar esos datos (en el backend).

Los formularios se crean con la etiqueta **form**. El atributo principal de un formulario es *action*, ya que contiene la ruta a la que serán enviados los datos recolectados.

Hay diversos elementos html que permiten la captura o recolección de datos, aunque generalmente se usan los elementos creados con la etiqueta *input*. Los inputs también sirven para crear botones, aunque existe una etiqueta especial para ésto llamada *button*… El atributo principal de los inputs es *type*, que indica el tipo de comportamiento o dato que se espera recibir.

**Campos de Formularios**

Dentro de los campos que podemos incluir en formularios HTML encontramos los siguientes:

- Campos de entrada de datos
- Campos de textos
- Contraseñas
- Checkbox
- Radios
- Botones de envío
- Botones de borrado
- Ficheros
- Campos Ocultos
- Imágenes
- Botones
- Áreas de texto
- Combos de selección

**Campos de entrada de datos**

Son los elementos básicos de un formulario ya que son los que nos permiten recuperar información del usuario de diferentes formas.

El elemento que representa los campos de entrada de datos es input. La estructura básica de un campo de entrada es la siguiente:

```html
<input type="tipo" id="identificador" size="tamaño" name="nombre" value="texto por defecto"/>
```

Si vemos los atributos que tiene el elemento input nos encontramos los siguientes:

- **type**, indica el tipo de campo de entrada de datos que vamos a utilizar. Dependiendo del tipo que indiquemos obtendremos un resultado u otro. Los valores que puede tener el atributo type son: “text”, “password”, “checkbox”, “radio”, “submit”, “reset”, “file”, “hidden”, “image” y “button”.
- **id**, es el identificador del campo. Es importante ya que será el nombre por el cual podremos identificar, de forma unívoca, al campo.
- **size**, será el tamaño del campo. Es decir, el número de caracteres que podríamos insertar en el campo de texto.
- **name**, es el nombre del campo el cual se enviará desde el formulario al servidor. value, será el valor por defecto que tendrá el campo de texto y que le aparecerá al usuario al cargar el formulario.

Cuando enviemos el formulario al servidor, se coge el la combinación name=value para ser enviada.

**Campos de texto**

El campo de texto, como bien indica su nombre, es el que nos permite insertar texto en un formulario. El usuario podrá insertar texto visible sobre el campo.

En este caso el tipo de elemento input que utilizaremos será “text”. Así, para definir un campo de texto lo haremos de la siguiente forma:

```html
<input type="text" id="identificador" size="tamaño" name="nombre" value="texto por defecto"/>
```

De esta forma si queremos crear un campo de texto para poder insertar 70 caracteres que contenga un email, lo definiremos de la siguiente forma:

```html
<input type="text" id="email" name="email" size="70" value="usuario@dominio.com"/>
```

**Contraseñas**

Cuando un usuario inserte una contraseña dentro de un formulario necesitaremos, casi seguro, que el valor de la contraseña no aparezca y que por el contrario aparezcan caracteres como asteriscos.

Para insertar un campo que acepte contraseñas dentro de un formulario vamos a utilizar un tipo “password” dentro del elemento input.

```html
<input type="password" id="identificador" size="tamaño" name="nombre"/>
```

En este caso, aunque podemos poner un valor por defecto, si bien, no parece tener mucho sentido. Si queremos definir un campo que acepte contraseñas de 20 caracteres lo codificaremos de la siguiente forma:

```html
<input type="password" id="clave" name="clave" size="20"/>
```

**Checkbox**

Un checkbox nos permite capturar un dato del usuario mediante un elemento de check. El check puede tener dos valores, seleccionado o no seleccionado. El tipo del elemento input que utilizaremos será “checkbox”. Así lo definiremos de la siguiente forma:

```html
<input type="checkbox" id="identificador" name="nombre"/>
```

En el caso del checkbox no tienen sentido el atributo tamaño ni el valor por defecto. Ya que, recordemos que solo podemos tener el check seleccionado o no. Pero lo que sí podemos hacer es generar un checkbox que esta preseleccionado. Para ello utilizamos el atributo checked.

```html
<input type="checkbox" id="identificador" name="nombre" checked="checked"/>
```

Pero ¿dónde está el texto que acompaña al checkbox? Realmente el checkbox no tiene definido que acompañe al checkbox. Si no que hay que añadir el texto directamente al lado del checkbox.

```html
<input type="checkbox" id="identificador" name="nombre" checked="checked"/>
```

**Texto del checkbox**

Aunque más adelante vamos a ver una forma más correcta de asociar el texto al checkbox.

Así, si queremos crear un checkbox que nos pregunte si estamos de acuerdo con unas condiciones podríamos codificarlo de la siguiente forma:

```html
<input type="checkbox" id="condiciones" name="condiciones"/>
```

Está de acuerdo con las condiciones explicadas más arriba.

Los checkbox suelen ir en grupos para seleccionar varias opciones. Por ejemplo podríamos tener el siguiente código con el que podamos seleccionar qué lenguaje de programación queremos aprender.

```html
<input type="checkbox" name="lenguaje" value="html">HTML
<input type="checkbox" name="lenguaje" value="javascript">Javascript
<input type="checkbox" name="lenguaje" value="css">CSS
<input type="checkbox" name="lenguaje" value="xml">XML
```

**Radios**

Con los elementos de radio podemos ofrecer un conjunto de opciones al usuario de tal manera que solo pueda elegir una de ellas. El tipo de elemento input que utilizamos es “radio”.

La sintaxis que seguiremos en los elementos input de tipo radio será la siguiente:

```html
<input type="radio" id="identificador" value="valor" name="nombre"/>
```

En el caso de los elementos radio toma un papel principal el atributo name. Ya que para poder agrupar opciones deberemos de tener el mismo valor de atributo name.

Así, si queremos crear un grupo de radios para que nos elija una edad le podremos crear de la siguiente forma:

```html
<input type="radio" id="menos18" value="menos18" name="edad"/>Menos de 18
<input type="radio" id="18a30" value="18a30" name="edad"/>18 a 30
<input type="radio" id="31a50" value="31a50" name="edad"/>31 a 50
<input type="radio" id="mas50" value="mas50" name="edad"/>Más de 50
```

Al igual que sucedía con los campos de entrada de tipo check, podemos cargar campos de tipo radio en nuestro formulario con un elemento preseleccionado. Para ello volvemos a recurrir al atributo checked.

```html
<input type="radio" id="identificador" value="valor" name="nombre" checked="checked"/>
```

**Ficheros**

Cuando diseñemos un formulario es posible que necesitemos enviar un fichero de datos al servidor. En este caso el campo de entrada de datos nos tiene que dar la posibilidad de acceder al sistema de fichero del dispositivo para poder seleccionar uno.

En este caso vamos a necesitar un campo de entrada de tipo “file”. La sintaxis de los campos de entrada para tipos file sería:

```html
<input type="file" id="identificador" value="valor" name="nombre"/>
```

**Campos Ocultos**

Otra de las opciones que nos podemos encontrar dentro de los formularios es con la necesidad de enviar información oculta. Es decir, información que tiene que ir anexa al formulario pero que no necesita ser introducida por el usuario. Para ello tenemos la posibilidad de crear campos de datos ocultos.

La sintaxis para los campos de entrada ocultos es:

```html
<input type="hidden" id="identificador" value="valor" name="nombre"/>
```

En estos casos el campo valor siempre va relleno, ya que no hay otra forma de que el usuario le asigne un valor.

**Imágenes**

Uno de los tipos de elementos input es el tipo “image”. Mediante el tipo “image” podemos crear un botón de envío que sea una imágen. La imagen se cargará mediante el atributo src. La estructura para elementos input de este tipo es:

```html
<input type="image" src="url-image" name="nombre" alt="texto-alternativo"/>
```

Como sucede cada vez que manipulamos imágenes hay que rellenar el atributo alt con un texto alternativo por motivos de accesibilidad.

Cuando pulsemos sobre la imagen se enviará el formulario, además se enviarán dos atributos name.x y name.y con los datos de las coordenadas x,y en las que se pulsó sobre la imagen.

**Áreas de texto**

Un elemento algo más avanzado que el campo de entrada de datos es el área de texto. Mediante un área de texto tenemos la capacidad de que el usuario inserte una gran cantidad de datos y además que esos datos puedan estar en diferentes líneas.

Para poder insertar un área de texto en nuestro formulario utilizamos el elemento textarea. La sintaxis del elemento textarea será la siguiente:

```html
<textarea rows="numerofilas" cols="numerocolumnas" name="nombre"></textarea>
```

A diferencia del elemento input, el textarea tiene una etiqueta de inicio y una de fin.

Los atributos que nos encontramos en un textarea son:

- **rows**, indica el número de filas que tiene el área de texto.
- **cols**, indica el número de columnas que tiene el área de texto.
- **name**, al igual que sucede con otros elementos del formulario, name contiene el nombre del campo, el cual será enviado al servidor para ser procesado.

De esta forma, si queremos crear un área de texto de 20 filas por 100 columnas en el que un usuario pueda insertar un comentario tendríamos el siguiente código:

```html
<textarea rows="20" cols="100" name="comentario"></textarea>
```

Si queremos que el área de texto vaya con un valor por defecto, tendremos que añadir dicho contenido entre las etiquetas de textarea.

```html
<textarea rows="20" cols="100" name="comentario">Contenido de comentario...</textarea>
```

**Combos de opciones**

Otro elemento que podemos insertar dentro de un formulario es un combo de opciones. Es decir, un elemento en el que el usuario pueda elegir un elemento o varios de una lista.

El elemento que nos permite insertar un combo de opciones es select. La sintaxis básica de un elemento select es:

```html
<select name="nombre" size="valoresvisibles" multiple="multiple">
</select>
```

De los valores que nos encontramos en el elemento select destacamos:

- **name**, que al igual que en anteriores casos sirve para dar un nombre al campo que se enviará al servidor.
- **size**, indica el número de opciones que aparecen visibles por defecto. En el caso de que haya más opciones que las elegidas por defecto lo que nos aparecerá será un scroll para poder localizar todas.
- **multiple**, este atributo nos servirá para poder elegir varias de las opciones. Es decir, para tener una elección múltiple.

Como hemos visto el elemento select sólo demarca el combo de las opciones. Para definir cada una de las opciones tenemos el elemento option.

La sintaxis básica del elemento option es la siguiente:

```html
<option label="etiqueta" value="valor"></option>
```

Dónde el atributo label indica el texto que aparecerá para poder ser seleccionado en el combo y value el valor realmente de ese item. En el caso de que no pongamos el atributo label o el atributo value, el valor que cogerán dichos atributos será el texto que encontremos entre los elementos de option.

Por lo tanto, si juntamos la sintaxis del elemento select y el elemento option tenemos la siguiente codificación:

```html
<select name="nombre" size="valoresvisibles" multiple="multiple">
  <option label="etiqueta" value="valor"></option>
</select>
```

Si queremos crear un combo de opciones donde podamos elegir un equipo de fútbol tendríamos el siguiente código:

```html
<select>
  <option>Atlético de Madrid</option>
  <option>Real Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
```

Así quedaría:

Atlético de Madrid Real Betis FC. Barcelona Real Madrid Zaragoza

Si queremos que una de las opciones del combo vaya marcada recurriremos al atributo selected. Así, en nuestro ejemplo si marcamos como predefinido el equipo del Betis tendríamos el siguiente código:

```html
<select>
  <option>Atletico de Madrid</option>
  <option selected="selected">Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
```

Así quedaría:

Atletico de Madrid Betis FC. Barcelona Real Madrid Zaragoza

Otra de las cosas que podemos realizar dentro de un combo es agrupar opciones. Si la lista de opciones es muy grande podemos utilizar el elemento optgroup.

La sintaxis del elemento optgroup es la siguiente:

```html
<optgroup label="etiqueta"></optgroup>
```

Dentro del elemento optgroup encontraremos todos los elementos option que queramos agrupar.

Si por ejemplo, queremos ofrecer un combo de ciudades y las queremos agrupar por continentes, tendríamos el siguiente código:

```html
<select name="ciudad">
  <optgroup label="Europa">
    <option>Madrid</option>
    <option>Londres</option>
    <option>Paris</option>
  </optgroup>
  <optgroup label="Suramerica">
    <option>Santiago</option>
    <option>Sao Paulo</option>
    <option>Lima</option>
    <option>Bogota</option>
  </optgroup>
    <optgroup label="Africa">
    <option>Casablanca</option>
    <option>Ciudad del Cabo</option>
  </optgroup>
</select>
```

Y se muestra así:

Madrid Londres Paris Santiago Sao Paulo Lima Bogota Casablanca Ciudad del Cabo

**Botones**

Una vez que hemos insertado campos de texto en nuestro formulario es hora de insertar botones. Mediante los botones podremos realizar operaciones de envío del formulario, de manipulación de datos, borrado,…

Existen dos formas de insertar botones dentro de un formulario: el elemento input y el elemento button. La primera es recurre nuevamente al elemento input que hemos visto anteriormente para los campos de texto.

La sintaxis para un botón mediante un elemento input será:

```html
<input type="button" value="TextoBotón"/>
```

Así queda:

Si bien, este botón no hace nada por sí solo y tendríamos que darle un comportamiento vía Javascript para que el botón tuviera funcionalidad.

**Botones de envío**

En el caso del elemento input podemos poner botones de otras dos formas y en estos casos ya con funcionalidad. Estos son los tipos “submit” y “reset”.

Para crear un botón que nos envíe los datos del formulario al servidor tenemos el tipo submit. Su sintaxis es la siguiente:

```html
<input type="submit" value="TextoBotón"/>
```

Una vez que pulsemos sobre el botón se enviarán los datos que el usuario haya insertado en el formulario.

**Botones de borrado**

El otro tipo de botón con funcionalidad es el que nos permite el borrado de los datos del formulario. Para ello tenemos el tipo “reset”. La sintaxis de este botón será:

```html
<input type="reset" value="TextoBotón"/>
```

Cuando el usuario pulse sobre el botón de borrado. Todos los valores que el usuario haya insertado en el formulario se eliminarán.

El elemento button Como hemos visto hasta ahora los botones que hemos insertado han sido mediante el elemento input, si bien contamos con otro elemento para poner botones en el formulario que es el elemento button. Cuya funcionalidad es la misma que la del elemento input.

La sintaxis del elemento button es:

```html
<button name="nombre" type="TipoBoton" value="ValorBoton"></button>
```

Dependiendo del tipo que asignamos al atributo type obtendremos un comportamiento u otro:

- **submit**, crea un botón para el envío de formulario.
- **reset**, crea un botón para el borrado de datos del formulario.
- **button**, crea un botón normal.

### LISTADO ETIQUETAS HTML por funcionalidad

continuación voy a indicarte cuales son las etiquetas HTML más usadas y también se indica su finalidad.

En la siguiente [página](https://www.mclibre.org/consultar/htmlcss/html/html-etiquetas.html) web tenéis un listado detallado de todas las etiquetas HTML con ejemplo.

<aside>
💡 Enlaces de interes:

</aside>

- [HTML DOCTOR: Resumen de todas las etiquetas disponibles en HTML5](http://html5doctor.com/)
- [Lista etiquetas HTML con ejemplos](https://www.mclibre.org/consultar/htmlcss/html/html-etiquetas.html)

