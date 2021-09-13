function setup() { 

  createCanvas(710, 400, WEBGL); 

} 

  

function draw() { 

  background(200); 

  rotateX(frameCount * 0.01); 

  rotateY(frameCount * 0.01); 

  fill(color(backAround(frameCount,255),backAround(frameCount,255),backAround(frameCount,255)) )

  box(0.1 * frameCount); 

} 

function backAround(v,max){ 

  if(v>max){ 

    vn = v; 

    while(vn > max){ 

      vn-=max;  

    } 

    return vn; 

  }else{ 

    return v; 

  } 

} 

 
