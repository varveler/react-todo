import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


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
        todos: [...this.state.todos, this.state.value],
        value : ''
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
  render(){
  {/*  console.log(this.state.todos); */}
    return (
      <React.Fragment>
        <Typography variant='h2' align='center' gutterBottom>
          To-Do List
        </Typography>
        <Grid container justify='center'>
          <Grid item>
            <form onSubmit={e => {
              e.preventDefault();
              {/*console.log(e.target);  e.target es el padre que llama el evento */}
              this.saveTodo()

            }}>
              <TextField
                label='nueva tarea'
                type='text'
                placeholder='pasear al gato'
                value = {this.state.value}
                onChange = {this.updateValue}
              />
            </form>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item md={6}>
          <List>
            {
              this.state.todos.map((item, index) => {
              return(
                <ListItem button key={index}>
                  <Checkbox />
                  <ListItemText primary={item} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={()=>this.deleteTodo(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })
            }
            </List>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
