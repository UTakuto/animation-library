# CSS Animation Kit

CSS Animation Kit は、Webプロジェクトに簡単に統合できる、事前に構築されたCSSおよびJavaScriptアニメーションのコレクションです。このパッケージには、フェードイン、スライドイン、タイピングエフェクトなど、さまざまなテキストおよび要素のアニメーションが含まれています。

## 📦 インストール方法

以下のコマンドで、npmを使用してパッケージをインストールできます
```
npm i css-animation-kit
```
## 🚀 使用方法

インストール後、HTMLにCSSファイルとJavaScriptファイルをインポートしてアニメーションを利用できます。

CSSおよびJSファイルのインポート

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation Kitの使用例</title>
    <link rel="stylesheet" href="./node_modules/css-animation-kit/css/animation.css">
</head>
<body>
    <h1>CSSアニメーションの例</h1>

    <div class="animation-box fade-in">こんにちは、世界！</div>

    <script src="./node_modules/css-animation-kit/js/script.js"></script>
</body>
</html>
```

#### アニメーションクラスの適用

事前に定義されたアニメーションクラスを使用して、プロジェクト内の要素をアニメーションさせることができます。


| クラス名        | 説明             |
|----------------|------------------|
| `fade-in`      | 要素がフェードインする |
| `fade-out`     | 要素がフェードアウトする |
| `slide-in`     | 要素がスライドインする |
| `bounce`     | 要素がバウンドする |
| `typing-text`     | タイピングエフェクト |

例
```html
<div class="animation-box slide-in">これはスライドインアニメーションです！</div>
```
## 🎨 利用可能なアニメーション

### 基本的なモーション

- fade-in

- fade-out

- slide-in

- slide-out

### テキストアニメーション

- typing-text

- typewriter

### 注意喚起のアニメーション

- bounce

- shake

- flash

- pulse

### ホバーエフェクト

- hover-scale-up

- hover-slide-in

- hover-rotate

## 🛠️ カスタマイズ方法

animation.css ファイルのCSSプロパティを調整することで、アニメーションをカスタマイズできます。また、新しいキーフレームを追加して独自のアニメーションを作成することも可能です。

## 📋 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。

# CSS Animation Kit

CSS Animation Kit is a collection of pre-built CSS and JavaScript animations that you can easily integrate into your web projects. This package includes various text and element animations, such as fade-in, slide-in, typing effects, and more.

## 📦 Installation

You can install the package using npm:
```
npm i css-animation-kit
```
## 🚀 Usage

After installing the package, you can use the animations by including the CSS and JavaScript files in your HTML:

Include the CSS and JS Files
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using CSS Animation Kit</title>
    <link rel="stylesheet" href="./node_modules/css-animation-kit/css/animation.css">
</head>
<body>
    <h1>CSS Animation Example</h1>

    <div class="animation-box fade-in">Hello World!</div>

    <script src="./node_modules/css-animation-kit/js/script.js"></script>
</body>
</html>
```
#### Apply Animation Classes

Use the pre-defined animation classes to animate elements in your project:

| Animation Class      | Description             |
|----------------|------------------|
| `fade-in`      | Fades in the element |
| `fade-out`     | Fades out the element |
| `slide-in`     | Slides the element in |
| `bounce`     | Bounces the element |
| `typing-text`     | Typing text effect |

For example
```html
<div class="animation-box slide-in">This is a slide-in animation!</div>
```
## 🎨 Available Animations

### Basic Motions

- fade-in

- fade-out

- slide-in

- slide-out

### Text Animations

- typing-text

- typewriter

### Attention Grabbers

- bounce

- shake

- flash

- pulse

### Hover Effects

- hover-scale-up

- hover-slide-in

- hover-rotate


## 🛠️ Customization

You can customize the animations by adjusting the CSS properties in animation.css or adding new keyframes.

## 📋 License

This project is licensed under the MIT License.
