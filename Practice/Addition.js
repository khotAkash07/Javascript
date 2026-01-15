import {useRef} from 'react'

let UseRefDemo=()=>{
	
	let inputRef = useRef(null);
	
	function handleRef(){
		inputRef.current.value = "";
	}
	
	return(
		<div>
			<h1>useRef Practice</h1>
			<label htmlFor="fname">Enter Your name</label>
			<input type="text" name="fname" id="fname" />
			<label htmlFor="Age">Enter Your Age</label>
			<input type="text" name="Age" id="Age" />
			<label htmlFor="Hobbie">Enter Your Hobbie</label>
			<input type="text" name="Hobbie" id="Hobbie" />
			
			<button>Clear</button>
		</div>
	);
};

export default UseRefDemo;