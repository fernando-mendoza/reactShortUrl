import React from 'react';

const LinkForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder="https://yoururl.com" name="url"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text" className="form-control" placeholder="website name" name="websiteName"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="description" name="description"/>
            </div>
            <button className="btn btn-primary btn-block">Save</button>
            </form>
    )
};

export default LinkForm;