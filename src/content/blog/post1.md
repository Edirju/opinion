---
title: 'Guía de estilo Markdown'
description: 'He aquí una muestra de la sintaxis básica de Markdown que puede utilizarse al escribir contenido Markdown en Astro.'
pubDate: 'Jun 19 2024'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

A continuación se muestra un ejemplo de sintaxis básica de Markdown que puede utilizarse al escribir contenido Markdown en Astro.

## Encabezados

Los siguientes elementos HTML `<h1>`-`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto, mientras que `<h6>` es el más bajo.

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## Párrafo

En Markdown, un párrafo se crea simplemente escribiendo texto en líneas consecutivas. Para separar un párrafo de otro, se deja una línea en blanco entre ellos.

## Imágenes

### Sintaxis

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Resultado

![blog placeholder](../../assets/blog-placeholder-about.jpg)

## Blockquotes

El elemento blockquote representa contenido citado de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

### Blockquote sin atribución

#### Sintaxis

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Resultado

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Sintaxis

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Resultado

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tablas

### Sintaxis

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### Output

| Italics     | Bold      | Code    |
| ---------   | --------  | ------  |
| _italics_   | **bold**  | `code`  |

## Bloques de código

### Sintaxis

Podemos utilizar 3 backticks ``` en la nueva línea y escribir fragmento y cerrar con 3 backticks en la nueva línea y para resaltar la sintaxis específica del idioma, escriba una palabra del nombre del idioma después de los 3 primeros backticks, por ejemplo, html, javascript, css, markdown, typescript, txt, bash.

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Resultado

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Tipos de listas

### lista Ordenada

#### Sintaxis

```markdown
1. First item
2. Second item
3. Third item
```

#### Resultado

1. First item
2. Second item
3. Third item

### Lista desordenada

#### Sintaxis

```markdown
- List item
- Another item
- And another item
```

#### Resultado

- List item
- Another item
- And another item

### Lista anidada

#### Sintaxis

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Resultado

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Sintaxis

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### Resultado

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para terminar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.
