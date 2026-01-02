import {useState} from 'react';

let CheckBoxEvents= function () {

    let subject = ["Java", "Python", "JavaScript", "React", "Spring", "Spring-Boot", "Html", "Css", "Bootstrap"];
	
	let [tech, setTech] = useState([]);
	
    let handelChange = (event) =>{
		if(event.target.checked){
			setTech(event.target.value);
		}else{
			setTech(tech.filter((item)=>{item !== event.target.value}))
		}
	}
	
    return(
        <>
			{
                subject.map((item,index) => (
					<label className="flex gap-7" key={index}>
                        <input type='checkBox' key={index} onChange={handelChange}/>{item}
                    </label>
                ))
            }
        </>
    )
}

export default CheckBoxEvents