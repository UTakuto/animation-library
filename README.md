CSS Animation Kit

CSS Animation Kit is a collection of pre-built CSS and JavaScript animations that you can easily integrate into your web projects. This package includes various text and element animations, such as fade-in, slide-in, typing effects, and more.

📦 Installation

You can install the package using npm:

npm i css-animation-kit

🚀 Usage

After installing the package, you can use the animations by including the CSS and JavaScript files in your HTML:

Include the CSS and JS Files

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

Apply Animation Classes

Use the pre-defined animation classes to animate elements in your project:

Animation Class

Description

fade-in

Fades in the element

fade-out

Fades out the element

slide-in

Slides the element in

bounce

Bounces the element

typing-text

Typing text effect

For example:

<div class="animation-box slide-in">This is a slide-in animation!</div>

🎨 Available Animations

Basic Motions

fade-in

fade-out

slide-in

slide-out

zoom-in

zoom-out

Text Animations

typing-text (Typing effect)

typewriter

Attention Grabbers

bounce

shake

flash

Hover Effects

hover-scale-up

hover-slide-in

hover-rotate

🛠️ Customization

You can customize the animations by adjusting the CSS properties in animation.css or adding new keyframes.

📋 License

This project is licensed under the MIT License.

