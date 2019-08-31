import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      todos: []
    };
  }
  updateValue = event =>{
    //console.log(event.target.value); //{/* e.target es el padre que llama el evento, en este caso es imput */}
    this.setState({
      value: event.target.value
    })
    //console.log(this.state.value);
  }
  saveTodo = () => {
    if(this.state.value.trim()){
      this.setState({
        todos: [
          ...this.state.todos,
          {
          value: this.state.value,
          completed: false
          }
        ],
        value: ''
      });
    }
  }
  deleteTodo = (index) => {
    //imperative
    // const todos = [...this.state.todos]
    // todos.splice(index,1);
    // this.setState({todos});
    //declarative
    this.setState({
      todos: this.state.todos.filter((_, i) => index !== i) //es seguro usar filter porque no muta el estado arroja un nuevo string
    });
  }
  toggledCompleted = index => {
    //console.log(index)
    // Imperative
    // const todos = [... this.state.todos]
    // todos[index].completed = !todos[index].completed
    // this.setState({
    //   todos: todos
    // })
    // declarative
    this.setState({
      todos: this.state.todos.map((todo, i) =>
        index === i ? {...todo, completed: !todo.completed } : todo
      )
    });
  };
  render(){
  {/*  console.log(this.state.todos); */}
    return (
      <React.Fragment>
        <Typography variant='h2' align='center' gutterBottom>
          To-Do List
        </Typography>
        <Grid container justify='center'>
          <Grid item>
            <TodoForm
              updateValue={this.updateValue}
              saveTodo={this.saveTodo}
              value={this.state.value}
            />
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item md={6}>
            <TodoList
            todos={this.state.todos}
            toggledCompleted={this.toggledCompleted}
            deleteTodo={this.deleteTodo} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
