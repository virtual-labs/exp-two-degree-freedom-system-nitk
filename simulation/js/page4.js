function runPage4() {
    background(255);
    image(bg, 0, 0);
    
    
    textSize(21);
    stroke('black')
    textFont("Comic Sans MS");
    text('Motor on a Foundation  as 2DOF System ',200, 40);
    text('Free Vibration with rotating unbalance' , 210 , 60);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    textSize(20);
    stroke('black')
    text('Frequency Response Curves',50, 120);
    
   magFac1.initialise();
   magFac1.draw();

   magFac2.initialise();
   magFac2.draw();


   stroke('red')
   textSize(15);
   line(420 , 165 , 450  , 165 );
   
   stroke('black')
   text('Frequency response curve ' , 380 , 180 + 10)
   text(' with respect to  amplitude of' , 380 , 195+20)
   text(' X1 and w1' , 380, 205+30)

   stroke('purple')
   textSize(15);
   line(420 , 260 , 450  , 260 );
   
   stroke('black')
   text('Frequency response curve ' , 380 , 230+50)
   text(' with respect to  amplitude of ' , 380 , 240+60)
   text('X2 and w2' , 380 , 250+70)

    
   let add = 330;
   let dy = 250;
   stroke('red')
   strokeWeight(5)
   point(50+add , 100+dy)
   strokeWeight(1)
   text('w2' , 55+add ,100 +dy)
   stroke('blue')
   strokeWeight(5)
   point(50+add , 120+dy);
   strokeWeight(1)
   text('w1' , 55 +add, 120+dy)

   stroke('blue');
   strokeWeight(10);
   point(70 + spring1.w1*8, 500);

   stroke('red');
   strokeWeight(10);
   point( 130+ spring1.w2*30, 500);

   strokeWeight(1);
   button7.draw()
   strokeWeight(1);
   spring1.initialise(x1.inp,x2.inp,k1.inp,m1.inp,k2.inp,m2.inp);
   spring1.update(t,factor)

   x1.draw();
   x2.draw();
   k1.draw();
   m1.draw();
   k2.draw();
   m2.draw();
   t = t+dt;
}
