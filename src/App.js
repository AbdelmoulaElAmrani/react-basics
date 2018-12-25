import React, { Component } from 'react';
import Style from './App.module.css';
import Person  from './Person/Person';


class App extends Component {


    state ={
        persons:[
            { id : 1,name : 'jay' , age : 77},
            { id : 2,name : 'key' , age : 97},
            { id : 3,name : 'ray' , age : 7},

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
    NameChangeHundler = (event , id) =>{
        const personIndex  = this.state.persons.findIndex(p =>{
            return p.id === id ;
        } );
        const person ={
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value ;
        const persons = [...this.state.persons];
        persons[personIndex] = person ;
        this.setState({
            persons:persons
        })
    };
    toggleHundler = () =>{

        const isVisibile = this.state.showPersons;
        this.setState({showPersons : !isVisibile});

    };
    deletePersonHundler = (persomIndex) => {
        // const persons = this.state.persons.slice()
        const persons = [...this.state.persons];
        persons.splice(persomIndex , 1);
        this.setState({persons : persons})

    }

  render() {

        const style ={
          backgroundColor : "green",
          font : "inherit",
            border : "1px solid blue",
            padding : "8px",
            cursor: "pointer",

        };
        let persons = null;
        if(this.state.showPersons){
            persons=(
                <div>
                    {this.state.persons.map( (person , index) => {
                        return <Person
                        click={() => this.deletePersonHundler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.NameChangeHundler(event , person.id)}
                        />
                    })}
                    {/*<Person*/}
                        {/*name={this.state.persons[0].name}*/}
                        {/*age={this.state.persons[0].age}*/}

                    {/*> I love cats</Person>*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[1].name}*/}
                        {/*age={this.state.persons[1].age}*/}
                        {/*click={this.switchNameHundler.bind(this, "Broo")}*/}
                        {/*changed={this.NameChangeHundler}*/}
                    {/*> I love cats</Person>*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[2].name}*/}
                        {/*age={this.state.persons[2].age}*/}
                    {/*> I love cats</Person>*/}
                </div>
            )
            style.backgroundColor = 'red';

        }

        const classes = [];
        if (this.state.persons.length <= 2){
            classes.push(Style.red)
        }
        if (this.state.persons.length <= 1) {
            classes.push(Style.bold)
        }

    return (
          <div className={Style.App}>
            <h1>Hello</h1>
              <p className={classes.join(' ')}>list of persons</p>
              <button
                  style={style}
                  onClick={this.toggleHundler}>toggle persons </button>

              {persons}
          </div>

    );
  }
}

export default App;
