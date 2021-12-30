var img = new SimpleImage("astrachan.jpg");

print(img.getWidth())
print(img.getHeight())

for (var pixel of img.values()){
    if(pixel.getY() > img.getHeight()-10){
            pixel.setGreen(0);   
            pixel.setRed(0);
            pixel.setBlue(0);
    }
}
print(img)
