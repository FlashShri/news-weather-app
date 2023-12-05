import { Component } from "react";
import { Container } from "react-bootstrap";

// class 
export class RegistrationForm extends Component{

    constructor(){
        super();
        this.state={
            fname : '',
            lname : '',
            phone : '',
            email : ''
        }
    }
      handleChange= (e)=>{

        const fieldName = e.target.name;

        console.log(fieldName);

        this.setState({ fieldName :  e.target.value});
        
    }

    render(){
        return(
           <Container className="mt-5">
             <div> 
                <form>

                    <input type='text' placeholder="enter first name" onKeyUp={ this.handleChange } name="fname" ></input>


                    <input type='text' placeholder="enter last name"  onKeyUp={ this.handleChange } name="lname" ></input>


                    <input type='text' placeholder="enter phone" name="phone" onKeyUp={ this.handleChange }  ></input>


                    <input type='email' placeholder="enter email" name="email" onKeyUp={ this.handleChange } ></input>

            <div>
                        
  <input type="submit" value='Register'></input>

            </div>
                  
                </form>
            </div>
           </Container>
        )
    }
}



//  handleNameChange= ( e )=>{
//         // console.log('keys entered ');

//         // when we hanlde any event pass ref of function 
//         // and that function will be having obj of occured event
//         // we are having access of event here 
//         // that obj will pass into argument of function 
//         // console.log( e.target.value );

//         this.setState( {fname : e.target.value });
        
//     }

    // handleLastNameChange= (e)=>{
    //     this.setState({lname:  e.target.value});
    //     console.log( e.target.value );
    // }
