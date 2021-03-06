import React from 'react';
import CardsList from './CardsList';
import {robots} from './robots';
import SearchBox from './SearchBox'; 


class App extends React.Component 
{
    constructor(){
        super()
        this.state = {
           
            robots: robots,
            searchfield: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
       
    }


    render(){
        const filteredRobots = this.state.robots.filter(robots =>{

            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })

        return(
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardsList robots={filteredRobots}/>
            </div>
        );
    }
    

}



export default App; 