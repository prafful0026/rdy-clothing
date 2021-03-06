import React from "react"
import FormInput from "../form-input/form-input-component.jsx";
import "./sign-in-styles.scss"
import CustomButton from "../custom-button/custom-button-component.jsx"
import {auth,signInWithGoogle} from "../../firebase/firebase-utils.js"
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
      handleSubmit=async event=>{
          event.preventDefault();
        const {email,password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        } catch (error) {
            console.error(error);
        } 
          this.setState({email:'',password:''})
      }
      handleChange=event=>{
          const{value,name}=event.target;
          this.setState({[name]:value})
      }
    render() {
        return (
            <div onSubmit={this.handleSubmit} className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with ur emain and password</span>
                <form action="">
                <FormInput label='email' handleChange={this.handleChange} value={this.state.email} name="email" type="email" required/>
                <FormInput label="password" handleChange={this.handleChange} value={this.state.password} name="password" type="password" required/>
                <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
                </div>
                
                </form>
            </div>
        )
    }

}

export default SignIn; 