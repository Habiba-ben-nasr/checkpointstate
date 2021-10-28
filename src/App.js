import React/*, {useEffect}*/ from 'react';
import './App.css';
import Counter from './Counter/Counter';



class App extends React.Component {
  state = {

    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };





  render() {
    return (
      < div style={{backgroundColor: "#FCD8D4"}}>

        <button onClick={this.handleShowPerson} style={{
         backgroundColor: "#FDF6F0", width: '20%', fontSize: '20px', borderRadius: '4px',color:'#87AAAA',padding: '14px 40px'
        }}> {(this.state.show)? 'Hello! I am HABIBA' : 'Click to show me'} </button>
        <br />

        {/* {this.state.show ? <Counter /> : null} */}
        {this.state.show && <Counter />}


      </div>
    );
  }
}

export default App;
