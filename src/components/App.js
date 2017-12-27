import React,{Component} from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends Component{
   
    constructor(props){
        super(props);
        this.state={
           header:'Naming Contests',
		   contests:this.props.initialdata
        }
    }

componentDidMount(){
	
	axios.get('/api/contests')
  .then((response)=>{

 this.setState({contests:response.data})
  })
  .catch(function (error) {
    console.log(error);
  });
	
}
    render(){

        return(
            <div className="App">
                <Header message={this.state.header} />
            <div>
                {

                    this.state.contests.map((contest)=>{

                     return  <ContestPreview key={contest.id} contest={contest}  />
                    })
                }
                </div>
            </div>
        )
    }
  

}

export default App;