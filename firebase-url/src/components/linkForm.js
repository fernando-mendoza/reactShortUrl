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
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateValues});
        //console.log(values)
    }
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input onChange={handelInputChange} type="text" className="form-control" placeholder="https://yoururl.com" name="url" value={values.url}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handelInputChange} type="text" className="form-control" placeholder="website name" name="websiteName" value={values.websiteName}/>
            </div>
            <div className="form-group">
                <textarea onChange={handelInputChange} className="form-control" placeholder="description" name="description" value={values.description}/>
            </div>
            <button className="btn btn-primary btn-block">Save</button>
            </form>
    )
};

export default LinkForm;