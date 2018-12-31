import React, { PureComponent } from 'react';
import Style from './App.module.css';
import Persons  from '../components/Persons/PersonsC';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'


export const AuthContext = React.createContext(false);
class App extends PureComponent {

    // constructor(props){
    //     super(props);
    //
    // }


    state ={
        persons:[
            { id : 1,name : 'jay' , age : 77},
            { id : 2,name : 'key' , age : 97},
            { id : 3,name : 'ray' , age : 7},

        ],
            showPersons : false ,
        toggleClicked : 0,
        authenticated : false
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
        this.setState((prevState , props) =>{
            return {
                showPersons: !isVisibile,
                toggleClicked: prevState.toggleClicked + 1
            }
        });

    };
    deletePersonHundler = (persomIndex) => {
        // const persons = this.state.persons.slice()
        const persons = [...this.state.persons];
        persons.splice(persomIndex , 1);
        this.setState({persons : persons})

    };

    loginHundler = () =>{
        this.setState({authenticated: true})
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    componentWillUpdate(nextProps , nextState){
    }

    componentDidUpdate(){
    }



    render() {


        let persons = null;
        if(this.state.showPersons){
            persons=(
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHundler}
                        changed={this.NameChangeHundler}
                        // isAuthenticated={this.state.authenticated}
                    />

                </div>
            )
        }

        const classes = [];
        if (this.state.persons.length <= 2){
            classes.push(Style.red)
        }
        if (this.state.persons.length <= 1) {
            classes.push(Style.bold)
        }

    return (
          <>

              <Cockpit
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              login={this.loginHundler}
              clicked={this.toggleHundler}
              />
              <AuthContext.Provider value={this.state.authenticated}>
              {persons}
              </AuthContext.Provider>

                  </>

    );
  }
}

export default withClass(App , Style.App);
