//Interest Calculator
interface ICalculator{
    amount:number;
    rate:number;
}

class InterestCalculator implements ICalculator{
    amount:number;
    rate:number;
    interest:number;
    total:number;

    constructor(amount:number, rate:number)
    {
        this.interest = amount * (rate / 100);  
        this.total = amount + this.interest;
    }

}
let test = new InterestCalculator(1000,10);
console.log(test);


//Shape Calculator

interface IShape{
    Radius: number;
}

class ShapeCalculator implements IShape{
    Radius: number;
    
    constructor(Radius:number){
        this.Radius= Radius;
    }

    AreaOfCircle(){
        return 3.14 * this.Radius * this.Radius;
    }
    CircumferenceOfCircle(){
        return 2 * 3.14 * this.Radius;
    }

}

let circle = new ShapeCalculator(3);
let area = circle.AreaOfCircle();
let circumference = circle.CircumferenceOfCircle();

console.log ("Area : "+area);
console.log("circumference : "+circumference);