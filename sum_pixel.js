function sumPixel(nameImage, xpos, ypos) {
    var image = new SimpleImage(nameImage);
    var pixel = image.getPixel(xpos, ypos);
    var red = pixel.getRed();
    var blue = pixel.getBlue();
    var green = pixel.getGreen();
    var soma = red+blue+green;
    return soma;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);
