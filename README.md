# Impresi

Impresi is a Javascript library for creating beautiful slide presentations.

[Demo](https://538mkz3prl.codesandbox.io)

## Installation
### Through CDN
````
https://unpkg.com/impresi
````
[Demo](https://codepen.io/richjava/pen/XGjQbd)
### Through NPM
```
npm i impresi --save
````
[Demo](https://codesandbox.io/s/538mkz3prl)

## Usage
### The Impresi instance

Every Impresi application starts by creating a new Impresi instance:

````
let impresi = new Impresi("board");
````

In the above example, "board" is the ID of the HTML element acting as a container for the Impresi board, for example:

````
<div id="board"></div>
````

The easiest way to use Impresi is to pass a configuration object to the Impresi instance:

````
 let config = {
    resources: [
      {
        id: "b1",
        type: "background",
        options: {
          "backgroundColor": "#e6f7ea"
        }
      },{
        id: "b1h1",
        type: "heading",
        text: "Hello Impresi",
        options: {
          x: 37,
          y: 20
        }
      }
    ],
    actions: [
      { in: ["b1", "b1h1"] }
    ]
  };

  let impresi = new Impresi("board", config);
  impresi.start();
````

The same can be achieved by chaining methods together, like so:

````
let b1 = impresi.createBackground(options: {
          "backgroundColor": "#e6f7ea"
  });
 let b1h1 = impresi.createHeading(
    "A heading",
    {
      x: 37,
      y: 20
    }
  );
impresi
    .addActions({ in: [b1, b1h1] });
impresi.start();
````

## Methods
### createBackground
````
createBackground([options]) : Impresi
````
##### options

Type: Object

An optional plain object with sets of key/value pairs that configure the background. All properties are optional.

| Property | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| backgroundColor | String | Background color of background. | "#333" |
| imageUrl | String | Url of background image. | None |
| inAnimationName | String | Animate.css class name for in animation. | "fadeIn" |
| x | Integer | Horizontal point of the heading measured as a percentage of the screen width. | 10 |
| y | Integer | Vertical point of the heading measured as a percentage of the screen height. | 10 |

#### Example
````
//by config
{
    id: "b1",
    type: "background",
    options: {
        "backgroundColor": "#e6f7ea"
    }
}
//by code
let b1 = impresi.createBackground({
    imageUrl: "path/to/image.jpg"
  });
````
  
  
### createHeading
````
createHeading(text, [options]) : Impressi
````
##### text

Type: String

The text to set as the content of the heading. Required.


##### options

Type: Object

An optional plain object with sets of key/value pairs that configure the heading. All properties are optional.

| Property | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| fontSize | Integer | Size of font measured in percentage of the screen width. | 4 |
| fontColor | String | Color of font. | "#fff" |
| backgroundColor | String | Color of heading background or "transparent" for no background color. | "#333" |
| width | Integer | Width of the image  measured as a percentage of the screen width. | None |
| inAnimationName | String | Animate.css class name for in animation. | "slideInUp" |
| x | Integer | Horizontal point of the heading measured as a percentage of the screen width. | 10 |
| y | Integer | Vertical point of the heading measured as a percentage of the screen height. | 10 |

### Example
````
//by config
{
    id: "b1h1",
    type: "heading",
    text: "A heading",
    options: {
         x: 20,
         y: 20
    }
}
//by code
let b1h1 = impresi.createHeading(
    "A heading",
    {
      fontSize: 3,
      x: 10,
      y: 5
    }
  );
````

### createBlurb

````
createBlurb(text, [options]) : Impresi
````

##### text
Type: String

The text to set as the content of the blurb. Required.

##### options
Type: Object

An optional plain object with sets of key/value pairs that configure the blurb. All properties are optional.

| Property | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| fontSize | Integer | Size of font measured in percentage of the screen width. | 3 |
| fontColor | String | Color of font. | "#fff" |
| backgroundColor | String | Color of blurb background or "transparent" for no background color. | "#333" |
| width | Integer | Width of the image  measured as a percentage of the screen width. | None |
| inAnimationName | String | Animate.css class name for in animation. | "slideInUp" |
| x | Integer | Horizontal point of the blurb measured as a percentage of the screen width. | 10 |
| y | Integer | Vertical point of the blurb measured as a percentage of the screen height. | 10 |

#### Example

````
//by config
{
    id: "b1b1",
    type: "blurb",
    text: "A blurb",
    options: {
         x: 37,
         y: 20
    }
}
//by code
let b1b1 = impresi.createBlurb(
    "A blurb",
    {
      x: 10,
      y: 15
    }
  );
````

### createImage
````
createImage(src, [options]) : Impresi
````
##### src
Type: String

The value of the src attribute of the image. Required.

##### options

Type: Object

An optional plain object with sets of key/value pairs that configure the image. All properties are optional.

| Property | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| width | Integer | Width of the image  measured as a percentage of the screen width. | None |
| inAnimationName | String | Animate.css class name for in animation. | "slideInUp" |
| x | Integer | Horizontal point of the heading measured as a percentage of the screen width. | 10 |
| y | Integer | Vertical point of the heading measured as a percentage of the screen height. | 10 |

#### Example
````
//by config
{
  id: "b1i1",
  type: "image",
  src: "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/rtO9-christchurchartgallery_002_1024x1024.jpg",
  options: {
    width: 50,
    x: 26,
    y: 30
  }
}
//by code
let b1 = impresi.createImage({
    src: "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/rtO9-christchurchartgallery_002_1024x1024.jpg",
    options: {
      width: 50,
      x: 26,
      y: 30
    }
  });
````

### addActions

````
addActions(actions) : Impresi
````

##### actions

Type: Object

An plain object the following properties:

###### in

Type: Array

A collection of items to be displayed on the board.

###### out

Type: Array

A collection of items to be removed from the board.

#### Example

````
impresi
    .addActions({ in: [b1, b1h1, b1b1] })
    .addActions({ out: [b1, b1h1, b1b1], in: [b2, b2h1, b2b1] });
````