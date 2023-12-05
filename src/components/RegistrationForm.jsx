import { Component } from "react";
import { Container } from "react-bootstrap";

import { useState } from "react";

// // class 
// export class RegistrationForm extends Component{

//     constructor(){
//         super();
//         this.state={
            
//             formData: {
//                     fname : '',
//                     lname : '',
//                     phone : '',
//                     email : '',
//             },
//             score : 0 ,
//             news : []
//         }
//     }
//       handleChange= (e)=>{

//         const fieldName = e.target.name;

//         console.log(fieldName);
//         console.log( e.target.value );

//         // this.setState({ fname : e.target.n})

//         // this.setState({ [e.target.name] :  e.target.value});  // here [fielname] ==> dynamically computed property name



//         // used spread operator to preserve previouse state 
//         // 
//         this.setState({
//             formData :  { ...this.state.formData , [e.target.name]  :  e.target.value }
//         })
        
//     }

//     handleSubmit = ( e )=>{

//         e.preventDefault();

//         console.log(this.state.formData);
//     }


//     render(){
//         return(
//            <Container className="mt-5">
//              <div> 
//                 <form>
//                     <input type='text' placeholder="enter first name" onKeyUp={ this.handleChange } name="fname" ></input>


//                     <input type='text' placeholder="enter last name"  onKeyUp={ this.handleChange } name="lname" ></input>


//                     <input type='text' placeholder="enter phone" name="phone" onKeyUp={ this.handleChange }  ></input>


//                     <input type='email' placeholder="enter email" name="email" onKeyUp={ this.handleChange } ></input>

//             <div>
                        
//   <input type="submit" value='Register' onClick={ this.handleSubmit } ></input>

//             </div>
                  
//                 </form>
//             </div>
//            </Container>
//         )
//     }
// }



// //  handleNameChange= ( e )=>{
// //         // console.log('keys entered ');

// //         // when we hanlde any event pass ref of function 
// //         // and that function will be having obj of occured event
// //         // we are having access of event here 
// //         // that obj will pass into argument of function 
// //         // console.log( e.target.value );

// //         this.setState( {fname : e.target.value });
        
// //     }

//     // handleLastNameChange= (e)=>{
//     //     this.setState({lname:  e.target.value});
//     //     console.log( e.target.value );
//     // }



// function compenent

export function RegistrationForm (){

    // useState( { fname:"", lname:"" , phone:"", email:"" });

      const [formData  , setData ] = useState( { fname:"", lname:"" , phone:"", email:"" });


      const handleChange = (e )=>{
            setData( {  ...formData   ,[e.target.name] : e.target.value} );
      }

      const handleSubmit= (e)=>{
        e.preventDefault();
        console.log( formData );
      }


    return(
           <Container className="mt-5">
             <div> 
                <form>
                    <input type='text' placeholder="enter first name" onKeyUp={ handleChange } name="fname" ></input>


                    <input type='text' placeholder="enter last name"  onKeyUp={handleChange } name="lname" ></input>


                    <input type='text' placeholder="enter phone" name="phone" onKeyUp={ handleChange }  ></input>


                    <input type='email' placeholder="enter email" name="email" onKeyUp={ handleChange } ></input>

            <div>
                        
  <input type="submit" value='Register' onClick={ handleSubmit } ></input>

            </div>
                  
                </form>
            </div>
           </Container>

    );
}