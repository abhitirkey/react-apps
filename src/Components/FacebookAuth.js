import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import FacebookLoginContext from './Contexts/FacebookLoginContext'

export default class FacebookAuth extends Component {
    static contextType = FacebookLoginContext;

    // constructor(){
    //     super();
    //     this.responseFacebook = this.responseFacebook.bind(this);
    //     this.componentClicked = this.componentClicked.bind(this);
    // }

    responseFacebook = (response) => {

        console.log(response);

        const [loginStatus, setLoginStatus] = this.context;
        if(response.status !== 'unknown')
            setLoginStatus(true);
    }

    componentClicked = () => console.log("Clicked, yeah!");

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="371643567201572"
                    autoLoad={true}
                    fields="name,email,picture,posts"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}
