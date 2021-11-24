// A component is just a FUNCTION!
function H1Component (props){

///// for writing js

// const clickHandler=()=>{
//     console.log("click-click")
//   }

  /////js 

    return (
    <div>
        <h1 onClick={props.clickFunction}>Woobly</h1>
     </div>)

}

export default H1Component;