import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       this.state={
       userInf0:{
        name:"j",
        location:"m",
       },
      
       };
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/jagroop5");
        const json= await data.json();
        this.setState({
            userInf0:json,
        });
        console.log(json);
    }
    render(){
        
        const{name,location,avatar_url
        }=this.state.userInf0;
        return(
            <div className="user-card">
<img src={avatar_url
}/>
   <h2>Name: {name}</h2>
            <h3>Location: {location} </h3>
            <h3>Contact:@Jagroop7254</h3>
                </div>
        );
    }
}
export default UserClass;