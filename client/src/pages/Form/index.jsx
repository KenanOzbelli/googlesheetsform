import { useState } from 'react';
import API from '../../lib/API';
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [statusColor, setStatusColor] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formSubmit = (event) => {
        event.preventDefault();
        
        setIsLoading(true);
        setDisabled('disabled')
        API.post(name, email, message)
        .then(response => {
            if(response){
            setStatusColor('success')
            setStatusMsg(response.data)
            setIsLoading(false);
            setName('')
            setEmail('')
            setMessage('')
            setDisabled('')
            }
        }).catch(error => {
            setStatusColor('danger'); 
            if(error.response){           
                setStatusMsg(error.response.data);
                setIsLoading(false);
                setDisabled('');
            }else{
                setStatusMsg("Internal Error");
                setIsLoading(false);
                setDisabled('');
            }
        })
    }

    const handleChange = (event) => {
       let {name, value } = event.target;
       switch (name) {
           case "name":
               setName(value);
               break;
           case "email":
               setEmail(value);
               break;
           case "message":
               setMessage(value);
               break;
            default:
                break;
       }
    }

    return(
    <div className="p-1" style={{ maxWidth:"600px", margin:"0 auto"}}>
        <form style={{boxShadow:"0px 1px 2px rgb(0 0 0/40%)", padding:"1rem", borderRadius:".7rem"}} onSubmit={formSubmit}>
            <div className="mb-3">
                <label htmlFor="InputName" className="form-label">Name</label>
                <input type="text" className="form-control" maxLength="10" id="InputName" name="name" value={name} onChange={handleChange} placeholder="John Doe" />
            </div>
            <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" maxLength="20" id="InputEmail" name="email" value={email} onChange={handleChange} aria-describedby="emailHelp" placeholder="John.Doe@gmail.com"/>
                <div id="emailHelp" className="form-text fw-bold fst-italic"><u>Use a Fake Email for this Demo, Please.</u></div>
            </div>
            <div className="mb-3">
                <label htmlFor="InputMessage" className="form-label">Message</label>
                <textarea className="form-control" id="InputMessage" maxLength="250" name="message" value={message} onChange={handleChange} placeholder="Hello World" />
            </div>
            <button type="submit" className={`btn ${disabled} btn-secondary w-100`}>
                {isLoading? <span>Loading....</span>: <span>Submit</span>}</button>
        </form>
        {statusMsg !== ''? 
            <div className={`mt-3 bg-${statusColor} bg-opacity-25 border-start border-${statusColor} border-3`}>
                <p className={`text-center p-2 text-${statusColor}`}>{statusMsg}</p>
            </div>
        :null}
          <p className="text-muted text-center">&copy; KCC</p>
    </div>
    )
}

export default Form;