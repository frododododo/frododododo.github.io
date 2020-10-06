function setup() {
  createCanvas(800,800);
  background(157, 129, 137);
  // put setup code here

  //gebouw 1
  //helft gebouw 1
  noStroke()
  fill(244, 172, 183)
  rect(400,10,170,790)

  //helft gebouw 1
  fill(255, 202, 212)
  rect(570,10,170,790)

  //ramen gebouw 1
  fill(255)
  rect(420,20,300,30)
  rect(420,80,300,30)
  rect(420,140,300,30)
  rect(420,200,300,30)
  rect(420,260,300,30)
  rect(420,320,300,30)
  rect(420,380,300,30)
  rect(420,440,300,30)
  rect(420,500,300,30)
  rect(420,560,300,30)
  rect(420,620,300,30)

  //gebouw 2
  fill(244, 172, 183)
  rect(50,300,300,800)

  //schoorsteen 2
  fill(255)
  rect(250,250,80,50)

  //raam 2
  rect(75,330,250,30)

  //raam verlengd 2
  rect(25,400,350,50)
  
  //raam verlengd daar onder 2
  rect(25,475,350,50)

  //groep mini raampjes 2 rij 1 van 3
  rect(80,575,50,60)
  rect(145,575,50,60)
  rect(205,575,50,60)
  rect(270,575,50,60)

  //rij 2 van 3
  rect(80,655,50,60)
  rect(145,655,50,60)
  rect(205,655,50,60)
  rect(270,655,50,60)

  //rij 3 van 3
  rect(80,735,50,60)
  rect(145,735,50,60)
  rect(205,735,50,60)
  rect(270,735,50,60)

  ///////////////////////////////////////
  ///////////gebouw 3////////////////////
  //////////////////////////////////////

  //gebouw 3
  fill(255, 229, 217)
  rect(350,600,200,200)

  //schaduws 3
  //fill(224, 201, 191)
  fill(240, 233, 235)
  rect(350,600,30,25)

  fill(224, 201, 191)
  rect(350,625,30,35)

  fill(240, 233, 235)
  rect(350,660,30,25)

  fill(224, 201, 191)
  rect(350,685,30,30)
  
  fill(240, 233, 235)
  rect(350,715,30,25)

  fill(224, 201, 191)
  rect(350,740,30,30)

  fill(240, 233, 235)
  rect(350,770,30,25)
  
  fill(224, 201, 191)
  rect(350,795,30,5)

  //ramen 3
  fill(255)
  rect(380,600,170,25)

  fill(255)
  rect(380,660,150,25)

  fill(255)
  rect(380,715,150,25)

  fill(255)
  rect(380,770,150,25)


  ////////////////gebouw 4///////////////

  //rondje gebouw 4
  stroke(255)
  strokeWeight(3)
  fill(255, 202, 212)
  ellipse(670, 500, 150)
  noStroke()

  //gebouw vierkant 4
  fill(244, 172, 183)
  rect(570,500,200,330)

  //rand gebouw boven 4
  fill(255)
  rect(570,500,200,20)

  //ramen verticaal 4
  rect(600,530,32,262)

  //ramen verticaal 4
  rect(636,530,32,262)

  //ramen verticaal 4
  rect(672,530,32,262)

  //ramen verticaal 4
  rect(708,530,32,262)


  //////schaduwen extra / vergeten hihi /////

  ///schaduws
  fill(201, 139, 148)
  rect(550,500,30,300)
  fill(240, 233, 235)
  rect(550,500,30,30)
  rect(550,560,30,30)
  rect(550,620,30,30)

  
}

function draw() {
  // put drawing code here
  textSize(32);
fill(255, 0, 255 )
text('frododo', mouseX, mouseY);
fill(98, 255, 0);
text('dodoo', mouseX - 100, mouseY - 20);

}