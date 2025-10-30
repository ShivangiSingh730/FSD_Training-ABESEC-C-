//  <div id="outer">
//     <div id="inner1">
//         <div id="span-container">
//             <span>span 1</span>
//             <span>span 2</span>
//         </div>
//     </div>
//  </div>
//  const react = React.createElement("div",{id:"outer"},
//     React.createElement("div",{id:"inner1"},
//         React.createElement("div",{id:"span-container"},

// [
//     React.createElement("span",{}, "span 1"),
//     React.createElement("span",{}, "span 2")
// ]
//          )
//          )
//         )
const span1Content="span 1";
const reactElement2=<div>Header</div>
console.log(typeof reactElement2);
const divStyle={
    backgroundColor:"lightblue",
    height:"150px",
    width:"150px",
}

const  reactElement=<div id="outer" style={divStyle}>
    
    <div id="inner1">
        <div id="span-container">
            <span className="span-1">span 1</span>
            <span className="span-2">span 2</span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container2">
            <span >span 1</span>
            <span>span 2</span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container2">
            <span>span 1</span>
            <span>span 2</span>
        </div>
    </div>
 </div>
 const root = ReactDOM.createRoot(document.getElementById('root'));
const divElement = React.createElement('div', {}, 'hello react learners');
root.render(reactElement);