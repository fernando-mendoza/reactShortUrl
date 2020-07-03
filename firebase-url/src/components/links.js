import React from 'react';
import LinkForm from "./linkForm";

const Links = () => {
    const addUrl = () => {
        console.log('new url')
    };

    return <div>

    <LinkForm addOrEdit={addUrl}/>
    </div>
};

export default Links;