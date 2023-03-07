import React from 'react';
function Header5(props){
    var [f,setFname]=React.useState(props.fname);
    var [l,setLname]=React.useState(props.lname);
    //var [exp,setExp]=React.useState(props.exp);//
    function changing(){
        console.log("updating f and l");
       // console.log("updating experience");//
     setFname("Rahul");
     setLname("Dravid");
     //setExp("200")//
     console.log("new f and l="+f+" "+l);
     //console.log("new exp="+exp);//
    }

    
console.log(props.fname +" "+ props.lname);
//console.log(props.exp);//
    return (
      <h1 onClick={changing}>{f+" "+l}</h1>
      //<h1 onClick={changing}>{"experince:"+exp}</h1>//
    );
  }

  export default Header5;