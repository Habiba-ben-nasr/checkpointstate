import React, { Component } from 'react'
import myImage from "../myImage.jpg"


export default class Counter extends Component {

    state = {
        Person: {
            fullName: "Habiba BEN NASR",
            bio: "I love my family",
            imgSrc: myImage,
            profession: "Civil engeneer"
        },
        show: true,
        timer: 0
    };

    componentDidMount() {
        setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);

    }
    render() {
        return (
            <div>
                <h3 style={{color:'#87AAAA'}}>{this.state.timer}</h3>
                {this.state.show && (
                    <div style={{ textAlign: 'center' ,color:'#87AAAA'}}>
                        <h1>{this.state.Person.fullName}</h1>
                        <img src={this.state.Person.imgSrc} alt="Naruto" width='30%' style={{borderRadius:"50%"}}></img>
                        <h1>{this.state.Person.profession}</h1>
                        <h1>{this.state.Person.bio}</h1>

                    </div>
                )}


            </div>
        )
    }
}
