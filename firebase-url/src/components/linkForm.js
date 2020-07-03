import React, {useState} from 'react';

const LinkForm = (props) => {

    const initialStateValues = {
        url: '',
        websiteName: '',
        description: ''
    };
    const [values, setValues] = useState(initialStateValues);

    const handelInputChange = e => {
        //console.log(e.target.value)
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        props.addOrEdit();
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)
    }
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input onChange={handelInputChange} type="text" className="form-control" placeholder="https://yoururl.com" name="url"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handelInputChange} type="text" className="form-control" placeholder="website name" name="websiteName"/>
            </div>
            <div className="form-group">
                <textarea onChange={handelInputChange} className="form-control" placeholder="description" name="description"/>
            </div>
            <button className="btn btn-primary btn-block">Save</button>
            </form>
    )
};

export default LinkForm;