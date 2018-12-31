import React, {Component} from 'react' ;
import PropTypes from 'prop-types'
import style from "./Person.module.css";
import withClass from '../../../hoc/withClass'
import { AuthContext } from '../../../containers/App';


class Person extends Component{
    constructor(props){
        super(props)
        this.inputElement = React.createRef();
    }

    componentWillMount(){

    }

    componentDidMount(){
        if (this.props.position === 0 ){
            this.inputElement.current.focus();
        }
    }
    focus(){
            this.inputElement.current.focus();
    }
    
    render (){
        return (
            <>
                <AuthContext.Consumer>
                {auth => auth  ? <p>authenticated</p> : null}
                </AuthContext.Consumer>
                <h2 onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</h2>
                <p>{this.props.children}</p>
                <input
                        ref={this.inputElement}
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name }/>
            </>
        )
    }
}

Person.ropTypes ={
    click: PropTypes.func ,
    name: PropTypes.string ,
    age: PropTypes.number,
    changed:PropTypes.func

};

export default withClass(Person , style.Person) ;