class Polygon{
  constructor(array){
      this.array = array
  }
  get countSides(){
      return this.array.length
  }
  get perimeter(){
      let num=0;
      for(let i=0;i<this.array.length; i++){
          num+= this.array[i];
      }
      return num;
}
}
class Triangle extends Polygon{
   get isValid(){
       if(this.array[0]+ this.array[1] > this.array[2] && this.array[1]+this.array[2] > this.array[0] && this.array[2] + this.array[0] > this.array[1]){

        return true;
       } 
       else{

        return false;
       } 
   }
}
class Square extends Polygon{
  get isValid(){
      return (this.array[0] ===this.array[1]) ? true : false;
  }
  get area(){
      return Math.pow(this.array[0],2)

  }
}