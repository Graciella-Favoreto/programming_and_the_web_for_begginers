var img = new SimpleImage("chapel.png");

print(img.getWidth())
print(img.getHeight())

for (var pixel of img.values()){
    if(pixel.getY() < 50){
        if(pixel.getX() <50 ){
            pixel.setGreen(255);   
            pixel.setRed(0);
            pixel.setBlue(0);
        }
    }
}
print(img)
