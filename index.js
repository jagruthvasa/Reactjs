import React from 'react';
import ReactDOM from 'react-dom';


function Abc(props){
  return  <p>{props.name}</p>  
}


ReactDOM.render(<div>

<Abc name="hello" />
<p>helo</p> 
<Abc name="bitch" />
</div>

,document.getElementById("root"));