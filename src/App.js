import React, { Component } from 'react';
import './App.css';
import Person  from './Person/Person';


class App extends Component {


    state ={
        persons:[
            {name : 'jay' , age : 77},
            {name : 'key' , age : 97},
            {name : 'ray' , age : 7},

        ],
            showPersons : false
    };

    switchNameHundler = (nameArg) =>{
        this.setState({
            persons:[
                {name : nameArg , age : 77},
                {name : 'mey' , age : 27},
                {name : 'Aray' , age : 17}

            ]
        })
    };
    NameChangeHundler = (event) =>{
        this.setState({
            persons:[
                {name : 'jo' , age : 77},
                {name : event.target.value , age : 27},
                {name : 'Aray' , age : 17}

            ]
        })
    };
    toggleHundler = () =>{

        const isVisibile = this.state.showPersons;
        this.setState({showPersons : !isVisibile});

    };

  render() {

        const style ={
          backgroundColor : "white",
          font : "inherit",
            border : "1px solid blue",
            padding : "8px",
            cursor: "pointer"
        };
        let persons = null;
        if(this.state.showPersons){
            persons=(
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}

                    > I love cats</Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHundler.bind(this, "Broo")}
                        changed={this.NameChangeHundler}
                    > I love cats</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    > I love cats</Person>
                </div>
            )
        }

    return (
      <div className="App">
        <h1>Hello</h1>
          <button
              style={style}
              onClick={this.toggleHundler}>toggle persons </button>

          {persons}
      </div>

    );
  }
}

export default App;
