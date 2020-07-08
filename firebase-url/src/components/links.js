import React, {useEffect} from 'react';
import LinkForm from "./linkForm";
import {db} from "../firebase";

const Links = () => {

    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        console.log('new link added')
    };

    const getLinks = async () => {
        const querySnapshot = await db.collection('links').get();
        querySnapshot.forEach(doc => {
            console.log(doc.data())
        })
    }

    useEffect(() => {
        getLinks();
    }, []);

    return <div>

    <LinkForm addOrEditLink={addOrEditLink}/>
    </div>
};

export default Links;