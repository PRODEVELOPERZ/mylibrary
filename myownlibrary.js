function isTouching(audi,lamborgini){
    if(lamborgini.x-audi.x<audi.width/2+lamborgini.width/2 && audi.x-lamborgini.x<audi.width/2+lamborgini.width/2
      && lamborgini.y-audi.y<audi.height/2+lamborgini.height/2&& audi.y-lamborgini.y<audi.height/2+lamborgini.height/2) {
     return true 
    }
    else{
      return false 
    }
  }