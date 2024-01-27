import React from "react"

const NotesComp=() => {
    const [data,setData]=React.useState({title:'',text:''})
    
    const handleChange=(e,name)=>{
            setData(prevState => ({...prevState,[e.target.name] : e.target.value}))
    }

    const handleCreateNote=async()=>{
        const response=await fetch("http://localhost:3000/create-note",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })

        const jsonRes=await response.json()
        console.log(jsonRes);
    }
    return (
        <div>
            title: <input type="text" placeholder="title" value={data.title} name="title" onChange={(e)=>handleChange(e)}/><br/>
            text: <input type="text" placeholder="text" value={data.text} name="text" onChange={(e)=>handleChange(e)}/><br/>
            <button onClick={handleCreateNote}>SUBMIT</button>
        </div>
    )
}

export default NotesComp