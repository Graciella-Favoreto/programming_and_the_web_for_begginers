var img = new SimpleImage("eastereggs.jpg");

for (var pixel of img.values()){
    if(pixel.getRed()>70){
        pixel.setRed(70);
    }
}
print(img)
