import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      articulos:[]
    }
  }
  componentDidMount(){
    let promesa = fetch
    ('https://jsonplaceholder.typicode.com/posts');
    promesa.then((response=>response.json().then(data=>{
      this.setState({
      articulos:data
    });
    })))
  }
    render(){
      return(
        <div>
        {
          this.state.articulos.map((articulo)=>{
            return (
              <table className="card" style={{backgroundColor:"green",
              color:'black'}}>
              <tr>
              <th>User ID</th>
              <td>{articulo.userId}</td>
              </tr>
              <tr>
              <th>ID</th>
              <td>{articulo.id}</td>
              </tr>
              <tr>
              <th>Title</th>
              <td>{articulo.title}</td>
              </tr>
              <tr>
              <th>Body</th>
              <td>{articulo.body}</td>
              </tr>
              </table>
            )
          })
        }
        </div>
      )
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Blog/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

