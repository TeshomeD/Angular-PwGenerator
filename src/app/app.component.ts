import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genPassword = "";
  isUseNumbers=false;
  isUseSymbols = false;
  isUseLetters = false;
  
  length = 0;
  onchangeLength(value:string){
    if(isNaN(parseInt(value))){
      console.log("It is not a number")
    }else{ 
      this.length = parseInt(value)
      console.log('lenght is:'+ this.length)
    }   
    
  }

  onchangeUseNumbers(){
    this.isUseNumbers = !this.isUseNumbers
  }
  onchangeUseSymbols(){
    this.isUseSymbols = !this.isUseSymbols
  }
  onchangeUseLetters(){
    this.isUseLetters = !this.isUseLetters
  }
  onButtonClick(){
    
    console.log(`
      About to generate a password with the following:
      Includes Letters: ${this.isUseLetters}
      Includes Number: ${this.isUseNumbers}
      Includes Symbols: ${this.isUseSymbols}
     `)
    const letter = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const symbol = '@#$%^&*()';

    let validchar = '';
    if(this.isUseLetters){
      validchar+=letter;
    }
    if(this.isUseNumbers){
      validchar+=number;
    }
    if(this.isUseSymbols){
      validchar+=symbol;
    }
    
    let generatedPassword = '';
    if(validchar.length>0){
      for(let i=0; i<this.length; i++){
        let index = Math.floor(Math.random() *validchar.length)
        generatedPassword+=validchar[index]
     }
     this.genPassword = generatedPassword;
    }else{
      this.genPassword = '';
    } 

  }

}
