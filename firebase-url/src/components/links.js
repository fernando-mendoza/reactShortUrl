import React from 'react';
import LinkForm from "./linkForm";
import {db} from "../firebase";

const Links = () => {


    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject)
        console.log('new link added')
    };

    return <div>

    <LinkForm addOrEditLink={addOrEditLink}/>
    </div>
};

export default Links;