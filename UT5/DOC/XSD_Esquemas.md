# ESQUEMAS XSD

## 1. Introducción

Los esquemas XSD son un tipo de documento XML que sirve para definir la estructura de otros documentos XML. Los esquemas XSD se utilizan para validar la estructura de los documentos XML, es decir, para comprobar que los documentos XML cumplen con la estructura definida en el esquema XSD.

Es una alternativa a los DTD (Document Type Definition) que se utilizaban en XML. Los esquemas XSD son más potentes que los DTD y permiten definir estructuras más complejas que los DTD.

Las características más importantes de los esquemas XSD son las siguientes:	

- Se definen utilizando XML.
- Se utilizan para definir la estructura de los documentos XML.
- Se utilizan para validar la estructura de los documentos XML.
- Son más potentes que los DTD.
- Permiten definir estructuras más complejas que los DTD.
- Permiten definir tipos de datos complejos.
- Permiten definir restricciones sobre los tipos de datos.
- Permiten definir espacios de nombres.
- Permiten definir elementos XML que pueden aparecer en cualquier orden.
- Permite especificar de forma más precisa la cardinalidad de los elementos XML.

## 2. Definiciónn de XSD. XML Esquema

Ejemplo de schema XSD que identifica la estructura de un libro (libro.xsd)

```xml 
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
...  
</xs:element>
```
- 'xs:schema' es el elemento raíz de un esquema XSD.
- `xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"`: indica que el documento es un esquema XSD.
- El prefijo `xs` se utiliza para indicar que los elementos XML que se utilizan en el esquema XSD pertenecen al espacio de nombres `http://www.w3.org/2001/XMLSchema`.
- Cada vez que se utilice un elemento XML que pertenezca al espacio de nombres `http://www.w3.org/2001/XMLSchema` se debe utilizar el prefijo `xs`.

Un ejemplo de esquema completo sería el siguiente

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="libro">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="titulo" type="xs:string"/>
        <xs:element name="autor" type="xs:string"/>
        <xs:element name="editorial" type="xs:string"/>
        <xs:element name="precio" type="xs:decimal"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

El xml que valida este esquema sería el siguiente

```xml
<?xml version="1.0" encoding="UTF-8"?>
<libro xmlns:xs="http://www.w3.org/2001/XMLSchema-instance">
  <titulo autor="Miguel de Cervantes">El Quijote</titulo>
  <autor>Miguel de Cervantes</autor>
  <editorial>Planeta</editorial>
  <precio>19.95</precio>
</libro>
```

Como se puede observar, el elemento libro es un elemento `compuesto` que contiene otros elementos `simples` como titulo, autor, editorial y precio.

> 💡 En DTD el tipo #PCDATA es el equivalente al tipo `xs:string` de XSD. En DTD no se utilizaban prácticamente los tipos de datos.<br>
> ↘️ En XSD se utilizan los tipos de datos para definir los elementos XML.


## 3. Elementos de un esquema XSD

Un esquema XSD es un documento XML que contiene una serie de elementos que definen la estructura de los documentos XML que se van a validar con ese esquema XSD. Los elementos más importantes de un esquema XSD son los siguientes:

- **xs:schema**: es el elemento raíz de un esquema XSD. Este elemento tiene un atributo llamado *targetNamespace* que se utiliza para indicar el espacio de nombres al que pertenecen los elementos definidos en el esquema XSD. El espacio de nombres de un esquema XSD se suele definir como una URL que apunta a la ubicación del esquema XSD. Por ejemplo, el espacio de nombres del esquema XSD que define la estructura de los documentos XML de la factura electrónica es el siguiente: http://www.facturae.es/Facturae/2009/v3.2/Facturae
  
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="http://www.facturae.es/Facturae/2009/v3.2/Facturae">
```

### 3.1 Componentes básicos de un esquema XSD	

Los componentes básicos de un esquema XSD son los siguientes:

- **xs:element**: se utiliza para definir los elementos XML que se pueden utilizar en los documentos XML que se van a validar con el esquema XSD.
- **xs:attribute**: se utiliza para definir los atributos XML que se pueden utilizar en los documentos XML que se van a validar con el esquema XSD.


### 3.2 Elementos de un esquema XSD

  #### 3.2.1 Element

  Un elemento se corresponde con una etiqueta XML. Un elemento puede ser simple o complejo.

  - Un elemento simple es un elemento que no contiene otros elementos XML. Por ejemplo, el elemento *titulo* del esquema XSD del libro es un elemento simple.
  - Un elemento complejo es un elemento que contiene otros elementos XML. Por ejemplo, el elemento *libro* del esquema XSD del libro es un elemento complejo.
  - Un elemento puede tener atributos. Por ejemplo, el elemento *libro* del esquema XSD del libro tiene un atributo llamado *autor*.
  - Un elemento tiene un tipo de datos. Por ejemplo, el elemento *titulo* del esquema XSD del libro tiene un tipo de datos *xs:string*.

  ##### Atributos de un xs:element

  Los atributos de un *xs:element* son los siguientes:

  - **name**: se utiliza para indicar el nombre del elemento XML que se está definiendo.
  - **type**: se utiliza para indicar el tipo de datos del elemento XML que se está definiendo.
  - **minOccurs**: se utiliza para indicar el número mínimo de veces que puede aparecer el elemento XML que se está definiendo.
  - **maxOccurs**: se utiliza para indicar el número máximo de veces que puede aparecer el elemento XML que se está definiendo.
  - **ref**: se utiliza para indicar que el elemento XML que se está definiendo es una referencia a otro elemento XML que se ha definido previamente en el esquema XSD.
  - **base**: se utiliza para indicar el tipo de datos del elemento XML que se está definiendo.
  - **default**: se utiliza para indicar el valor por defecto del elemento XML que se está definiendo.
  - **fixed**: se utiliza para indicar el valor fijo del elemento XML que se está definiendo.
  - **use**: se utiliza para indicar si el atributo XML que se está definiendo es obligatorio o no. Los valores que puede tomar este atributo son los siguientes:
    - **required**: indica que el atributo XML que se está definiendo es obligatorio.
    - **optional**: indica que el atributo XML que se está definiendo es opcional.
    - **prohibited**: indica que el atributo XML que se está definiendo no se puede utilizar.


  #### 3.2.2 Elementos complejos

  Un elemento complejo es un elemento que contiene otros elementos XML. Un elemento complejo se define utilizando el elemento *xs:complexType*.

  Un elemento complejo puede tener los siguientes elementos hijos:

  - **xs:sequence**: se utiliza este elemento para indicar una secuencia de elementos que tienen que aparecer en el documento XML. Deben aparecer todos, y en el mismo orden en que se especifican.

  ```xml
  <xsd:element name="camiseta">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="color" type="xsd:string"/>
        <xsd:element name="talla" type="xsd:string"/>
      <xsd:sequence>
    </xsd:complexType>
  </xsd:element>
  ```

  - **xs:choice**: especifica una lista de elementos de los cuales sólo puede aparecer uno en el documento XML.

    ```xml
    <xsd:element name="camiseta">
      <xsd:complexType>
        <xsd:choice>
          <xsd:element name="color" type="xsd:string"/>
          <xsd:element name="talla" type="xsd:string"/>
        <xsd:choice>
      </xsd:complexType>
    </xsd:element>
    ```
    Un XML que valida este esquema sería el siguiente

    ```xml
    <camiseta>
      <color>rojo</color>
    </camiseta>
    ```
    o este otro

    ```xml
    <camiseta>
      <talla>XL</talla>
    </camiseta>
    ```

    En un xs:choice solo puede aparecer centro del elemento uno de los elementos que forman parte del xs:choice.

  - **xs:all**: se comporta igual que el elemento <xsd:sequence>, pero no es obligado que en el documento XML aparezcan todos los elementos especificados, ni en el mismo orden

    ```xml
    <xsd:element name="camiseta">
      <xsd:complexType>
        <xsd:all>
          <xsd:element name="color" type="xsd:string"/>
          <xsd:element name="talla" type="xsd:string"/>
        <xsd:all>
      </xsd:complexType>
    </xsd:element>
    ```
    Un XML que valida este esquema sería el siguiente

    ```xml
    <camiseta>
      <color>rojo</color>
      <talla>XL</talla>
    </camiseta>
    ```
    y también este otro

    ```xml
    <camiseta>
      <talla>XL</talla>
      <color>rojo</color>
    </camiseta>
    ```

    o este otro:
    
    ```xml
    <camiseta>
      <color>rojo</color>
    </camiseta>
    ```



### 3.3 Modelo de contenido para elementos

El contenido de un elemento se define mediante un modelo de contenido. En XML Schema existen cuatro modelos de contenido para elementos:

1. Valor simple: el elemento XML sólo puede contener un valor simple. Por ejemplo, el elemento *titulo* del esquema XSD del libro tiene un modelo de contenido de valor simple.
1. Vacio: el elemento XML no puede contener ningún valor.
2. Lista: el elemento XML puede contener una lista de valores simples.
3. Mixto: el elemento XML puede contener un valor simple y otros elementos XML.

#### 3.3.1 Valor simple

Un elemento de valor simple solo contiene un valor de un tipo determinado especificado.

```xml
<xs:element name="titulo" type="xs:string"/>
```
o también

```xml
<xs:element name="edad" type="xs:int"/>
```

#### 3.3.2 Vacio

Un elemento vacío no contiene ningún valor. 

> 💡 En XML Schema se utiliza el elemento *xs:empty* para indicar que un elemento XML es vacío.

  ```xml
  <xs:element name="sin_clasificacion" type="xs:empty"/>
  ```
> ↘️ Pero eso no implica que el elemento no pueda tener atributos.

Más adelante se ampliará este concepto de elementos vacios, pues cuando se utilizan atributos es más complejo de definir.


#### 3.3.3 Lista

Un elemento puede contener centro otros sub-elementos. Existen 3 formas de indicar esto:

- **xs:sequence**
- **xs:choice**
- **xs:all**


#### 3.3.4 Mixto

Un elemento mixto es un elemento que puede contener un valor simple y otros elementos XML. Los elementos hijo se definen igual que en el modelo anterior, mediante los elementos “sequence”, “choice” o “all”. Para indicar que el elemento puede además incluir datos carácter se usa el atributo “mixed” con valor igual al “true” en el elemento “complexType”. Ejemplo:

```xml
<xsd:element name="confirmacionPedido">
  <xsd:complexType mixed=”true”>
    <xsd:sequence>
      <xsd:element name=”intro” type=”xsd:string”/>
      <xsd:element name=”nombre” type=”xsd:string”/>
      <xsd:element name=”fecha” type=”xsd:string”/>
      <xsd:element name=”titulo” type=”xsd:string”/>
    <xsd:sequence>
  </xsd:complexType>
</xsd:element>
```
El elemento definido arriba podría usarse dentro de un documento XML de la siguiente manera:

```xml
<confimacionPedido>
  <intro>Para:</intro>
  <nombre>Antonio Lara</nombre>
  Confirmamos que con fecha <fecha>24-01-2005</fecha> hemos recibido su pedido de <titulo>Raices</titulo>. Su título será enviado en 2 días hábiles desde la recepción del pedido. Gracias,Ediciones Aranda.
</confimacionPedido>
```



### 3.4 Tipos de datos

Son 44 los tipos de datos que define el estándar XML Schema, clasificados de una manera jerárquica, en el que los elementos hijos poseen las mismas características del padre más alguna particularidad añadida que los distinga.

El tipos de datos predefinido principal es `xs:anyType`, el más genérico y del cual derivan el resto de tipos de datos predefinidos como podemos ver en la siguiente imagen.

![Jerarquía de tipos de datos](./_res/img/../../../_res/img/xsd.data_type.png)




## 4. Atributos de un esquema XSD

**¿ Cómo se define un atributo en un esquema XSD ?**

La sintaxis genérica de declaración de atributos es la siguiente:

```xml
<xsd:attribute name="nombreAtributo" type="tipoSimple" use="valor" default="valor" fixed="valor"/>
```
- **name**: es el nombre del atributo.
- **type**: el tipo del atributo. Los atributos sólo pueden contener tipos simples.
- **use** (Opcional): puede tomar uno de los siguientes valores:
  - required: el atributo debe aparecer en el documento XML.
  - optional: el atributo puede aparecer o no aparecer en el documento XML. Este es el valor por defecto.
  - prohibited: el atributo no debe aparecer en el documento XML.
  
- **default** (Opcional): si el atributo no aparece en el documento XML, se le asigna el valor especificado en el atributo “default”. Los valores por defecto sólo tienen sentido si el atributo es opcional, de lo contrario tendremos un error.
- **fixed** (Opcional): define un valor fijo para el atributo. 
  - Si el valor del atributo está presente en la instancia del documento XML, el valor debe ser el mismo que el que indica el atributo “fixed”
  - si el atributo no está presente en el documento XML, se le asigna el valor contenido en el atributo “fixed”

> 💡 Los valores de los atributos “default” y “fixed” son mutuamente exclusivos, por lo tanto habrá un error si una declaración contiene ambos.<br>
> ↘️ Si no se especifica el atributo “use”, el valor por defecto es “optional”.<br>
> 🌩️ Solo los elementos de tipo compuesto pueden tener atributos.<br>

Las declaraciones de atributos para un elemento deben aparecer siempre al final de la declaración del elemento. Ejemplo:

```xml
<xsd:element name="libro">
  <xsd:complexType>
    <xsd:sequence>
      <xsd:element name="titulo" type="xsd:string"/>
      <xsd:element name="autor" type="xsd:string"/>
    </xsd:sequence>
    <xsd:attribute name="isbn" type="xsd:string"/>
  </xsd:complexType>
</xsd:element>
```
El elemento complejo libro tiene dos elementos hijos (titulo y autor) y un atributo (isbn). El atributo isbn es opcional, ya que no tiene el atributo “use” y por lo tanto el valor por defecto es “optional”.



## 5. Tipos de datos de usuario (contruidos)

Los tipos de datos de usuario se definen utilizando el elemento *xs:simpleType* o el elemento *xs:complexType*.

### 5.1 Tipos de datos simples

Los tipos de datos de usuario son generados por el usuairo a partir de un tipo de datos predefinido y aplicándole restricciones si se desea (estas restricciones se explican más adelante). 

- Puede usarse directamente en la definición de un elemento, en lugar de usar atributo “type”.

```xml
<xs:element name="edad" minOccurs="1" maxOccurs="1">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="100"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```
> La definición anterior indica que el elemento edad debe ser un número entero entre 0 y 100.

- También pueden definirse asignádoles un nombre y pudiéndose usar en cualquier elemento mediante el atributo type. Esta sección es indiferente colocarla antes o después de la definición del elemento raíz.

```xml	
<xs:simpleType name="type_edad">
  <xs:restriction base="xs:integer">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="100"/>
  </xs:restriction>
</xs:simpleType>
```
y luego usarlo en la definición del elemento edad:

```xml
<xs:element name="edad" type="type_edad"/>
```



