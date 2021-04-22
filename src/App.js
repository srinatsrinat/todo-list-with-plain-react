import React, {Component} from "react"
import './App.css';


class App extends Component {
  
  constructor(){

    super()
    this.countt = 0;
  }



  addToDo = () => {
    
    var newEle = document.createElement('div')
    
    this.countt++
    if(document.getElementById('Text').value!=''){
    newEle.innerHTML = document.getElementById('Text').value
    document.getElementById('Text').value = ''

    var hold = document.createElement('div')
    hold.id = 'newEle'+this.countt

   var b = document.createElement('button')
   b.innerHTML = 'Delete Item From List'
   b.classList.add('b')
   b.value = 'newEle'+this.countt
   b.classList.add('b')
   b.onclick = this.deleteEle
   newEle.append(b)
   hold.append(newEle)

   var a = document.getElementById('toDo')
   a.append(hold)
   console.log(this.toDo)
    }
  }

  deleteEle = (val) => {

    console.log('working',val.target.value)

    var toDelete = document.getElementById('toDo')

    var deleteThis = document.getElementById(val.target.value)
    toDelete.removeChild(deleteThis)
    
    
    
    
    
    
      }

  
  render () {

  return (
    <div className="App">
      <div class='top'>Enter Items To Create To Do List</div>

    <input type ='text' class = 'textBox' id = 'Text' onKeyDown ={eve => {if(eve.keyCode == '13') this.addToDo()}}></input>
    <button type = 'button' class ='btn' id = 'btn' onClick = {this.addToDo} > Add </button>
    <div class='title'> Your To Do List Will Appear Below </div>
    <div id = 'toDo' class = 'toDo'> </div>


    </div>
 
 
  
  );
}

}

export default App;
