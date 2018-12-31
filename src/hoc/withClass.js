import React, {Component} from 'react';

const withClass = (WrappdComponent , ClassName) =>{

    const WithClass = class extends Component {
        render(){
      return (
            <div className={ClassName}>
                <WrappdComponent ref={this.props.forwardRef} {...this.props}/>
            </div>
            )
         }
    }
    return React.forwardRef((props , ref) => {
        return <WithClass {...props} forwardRef={ref} />;
    })
};

export default withClass;