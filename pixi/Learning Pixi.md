# 简介

Pixi是一款非常快速的2D精灵渲染引擎。 这意味着什么？ 这意味着它可以帮助您显示，动画和管理交互式图形，以便您可以使用JavaScript和其他HTML5技术制作游戏和应用程序。 它有一个明智的，整洁的API，包括许多有用的功能，如支持纹理地图集，并提供精简的系统来动画精灵（交互式图像）。 它还为您提供了一个完整的场景图，以便您可以创建嵌套精灵层次结构（精灵内精灵），还可以将鼠标和触摸事件直接附加到精灵。 而且，最重要的是，Pixi不但可以使用尽可能多的数量，而且可以适应您的个人编码风格，并将其与其他有用的框架无缝集成。

Pixi的API实际上是由Macromedia / Adobe Flash开创的经过磨练和经过测试的API的改进。 旧的Skool Flash开发者会感到宾至如归。 其他当前的sprite渲染框架使用类似的API：CreateJS，Starling，Sparrow和Apple的SpriteKit。 Pixi的API的优势在于它是通用的：它不是游戏引擎。 这是很好的，因为它让你完全表达自由，做任何你喜欢的，并围绕它自己的定制游戏引擎。

在本教程中，您将了解如何将Pixi强大的图像渲染功能和场景图形结合起来，开始制作游戏。 您还将学习如何使用纹理图集准备游戏图形，如何使用Proton粒子引擎进行粒子效果，以及如何将Pixi集成到自己的自定义游戏引擎中。 但Pixi不仅适用于游戏 - 您可以使用这些相同的技术来创建任何交互式媒体应用程序。 这意味着手机的应用程序！

在开始使用本教程之前，您需要知道什么？

您应该对HTML和JavaScript有一个合理的理解。 你不必是一个专家，只是一个渴望学习的雄心勃勃的初学者。 如果您不了解HTML和JavaScript，最好开始学习的是本书：

[Foundation Game Design with HTML5 and JavaScript](http://www.apress.com/9781430247166)

我知道一个事实，这是最好的书，因为我写的！

还有一些很好的互联网资源帮助您开始：

[Khan Academy: ComputerProgramming](http://www.khanacademy.org/computing/cs)

[Code Academy:JavaScript](http://www.codecademy.com/tracks/javascript)

选择最适合您的学习风格。

好的，知道了？ 你知道JavaScript变量，函数，数组和对象是什么以及如何使用它们？ 你知道什么是[JSON数据文件](www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/)吗？ 你使用了[Canvas Drawing API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_graphics_with_canvas)吗？

要使用Pixi，您还需要在根目录中运行Web服务器。 你知道一个网络服务器是什么，以及如何在你的项目文件夹中启动一个？ 最好的方法是使用[node.js](http://nodejs.org)然后安装非常容易使用的[http-server](https://github.com/nodeapps/http-server)。 但是，如果你想要这样做，你需要很好的使用Unix命令行。 您可以在[此视频 ](https://www.youtube.com/watch?feature=player_embedded&v=cX9ASUE3YAQ)中了解如何使用Unix，完成后，请使用[此视频](https://www.youtube.com/watch?v=INk0ATBbclc)。 您应该学习如何使用Unix  - 只需花费几个小时的时间来学习，这是一种非常有趣和简单的方式与您的计算机进行交互。

但是如果您不想因为命令行搞的头大，请尝试Mongoose网络服务器：

[Mongoose](http://cesanta.com/mongoose.shtml)

或者，只需使用优秀的[Brackets](http://brackets.io)文本编辑器编写所有代码。 当您单击主工作区中的减轻螺栓按钮时，Brackets将为您自动启动Web服务器和浏览器。

现在，如果你认为你准备好了，请继续阅读！

（请求读者：这是一个活的文件。如果您对具体细节有任何疑问或需要澄清任何内容，请在此GitHub存储库中创建一个问题，并更新文本以获取更多信息。）

# Setting up

在开始编写任何代码之前，请为项目创建一个文件夹，并在项目的根目录中启动一个Web服务器。 如果您没有运行网络服务器，Pixi将无法正常工作。

接下来，您需要安装Pixi。 有两种方法可以做到这一点：简单的方式，使用Git或Gulp和Node。

## 安装Pixi简单的方式

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello World</title>
</head>
  <script src="pixi.min.js"></script>
<body>
  <script type="text/javascript">
    var type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }
    PIXI.utils.sayHello(type)
  </script>
</body>
</html>
```

## 用Git安装Pixi

## 用Node和Gulp安装Pixi

# 创建渲染器和舞台

现在你可以开始使用Pixi！

但是怎么样

第一步是创建一个可以开始显示图像的矩形显示区域。 Pixi具有为您创建的`rerender`对象。 它自动生成一个HTML `<canvas>`元素，并计算出如何在画布上显示图像。 然后，您需要创建一个名为`stage`的特殊Pixi `Container`对象。 正如您将看到的，这个`stage`对象将被用作保存Pixi要显示的所有东西的根容器。

以下是编写创建渲染器和舞台的代码。 将此代码添加到`<script>`标签之间的HTML文档中：

```javascript
//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
```

这是您开始使用Pixi所需编写的最基本的代码。 它生成一个黑色256像素2

56像素画布元素，并将其添加到您的HTML文档。 运行此代码时，浏览器中的内容就是这样。

![Basic display](https://github.com/kittykatattack/learningPixi/raw/master/examples/images/screenshots/01.png)

没错，一个黑色的正方形！

Pixi的`autoDetectRenderer`方法可以看出是否使用Canvas Drawing API或WebGL渲染图形，具体取决于哪些可用。 第一个和第二个参数是画布的宽度和高度。 但是，您可以添加一个可选的第三个参数和一些可以设置的附加值。 这个第三个参数是一个对象字面值，下面是如何使用它设置反锯齿，透明度和分辨率：

```javascript
renderer = PIXI.autoDetectRenderer(
  256, 256,
  {antialias: false, transparent: false, resolution: 1}
);
```

第三个参数（options对象）是可选的 - 如果您对Pixi的默认设置感到满意，可以将其删除，并且通常不需要更改它们。 （但是，如果需要，请参阅Pixi在[CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html)和[WebGLRenderer](http://pixijs.download/release/docs/PIXI.WebGLRenderer.html)上的文档以获取更多信息。）

这些选项做什么？

```javascript
{antialias: false, transparent: false, resolution: 1}
```

`antialias`平滑字体和图形图元的边缘。 （WebGL反锯齿并非在所有平台上都可用，因此您需要在游戏的目标平台上进行测试）`transparent`使画布背景变得透明。 `resolution`使得更容易使用不同分辨率和像素密度的显示。 设置分辨率有点超出本教程的范围，但请查看Mat Grove关于如何使用`resolution`的所有细节的[说明](http://www.goodboydigital.com/pixi-js-v2-fastest-2d-webgl-renderer/)。 但是通常情况下，大多数项目只要将分辨率保持在1，那么你就会很满意。