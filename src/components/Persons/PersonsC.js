import React, {PureComponent} from 'react';

import Person  from './Person/Person';


class PersonsC extends PureComponent {
    constructor(props){
        super(props)
        this.lastPersonRef = React.createRef();
    }

    componentWillMount(){

    }

    componentDidMount(){
        this.lastPersonRef.current.focus();

    }

    componentWillReceiveProps(nextProps){
        console.log('will receive props Persons', nextProps)
    }


    componentWillUpdate(nextProps , nextState){
        console.log(nextProps , nextState)
    }

    componentDidUpdate(){
    }


    render () {
        return this.props.persons.map( (person , index) => {
            return <Person
                position={index}
                ref={this.lastPersonRef}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                // authenticated={this.props.isAuthenticated}
                key={person.id}
                changed={(event) => this.props.changed(event , person.id)}
            />
        });
    }
}



export default PersonsC;