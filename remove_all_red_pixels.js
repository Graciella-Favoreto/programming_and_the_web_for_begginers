var img = new SimpleImage("chapel.png");

for (var pixel of img.values()){
        pixel.setRed(0);
    }
print(img)
