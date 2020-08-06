import React, {Component} from 'react';
import axios from 'axios';
import{Works, WorkTitle, Span, Part, Icon, PartTitle, Line, PartDesc} from './style'


class Work extends Component {

  state={
    works:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then( res => {this.setState({works: res.data.works})} )
 
  }
    render(){
      const {works} =this.state;
  const WorkList = works.map((workItem)=>{
    return(
      <Part first={workItem.id} key={workItem.id}>
      <Icon className={workItem.icon_name}></Icon>
      <PartTitle>{workItem.title}</PartTitle>
      <Line  />
      <PartDesc>
         {workItem.body}
      </PartDesc>
  </Part>
    )
  })
      
      return (
  
        <Works>
            <div className="container">
            
                <WorkTitle><Span>My</Span> Work</WorkTitle>
             {WorkList}
                
            </div>
        </Works>
    
    
      );
    }
    
  
    }
   
  

export default Work ;