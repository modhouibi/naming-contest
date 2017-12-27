import React,{Component} from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends Component{
   
    constructor(props){
        super(props);
        this.state={
           header:'Naming Contests' 
        }
    }


    render(){

        return(
            <div className="App">
                <Header message={this.state.header} />
            <div>
                {

                    this.props.data.contests.map((contest)=>{

                     return  <ContestPreview key={contest.id} contest={contest}  />
                    })
                }
                </div>
            </div>
        )
    }
  

}

export default App;