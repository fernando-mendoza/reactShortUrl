import React, {useEffect, useState} from 'react';
import LinkForm from "./linkForm";
import {db} from "../firebase";

const Links = () => {


    const [links, setLinks] = useState([])

    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        console.log('new link added')
    };

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id});
            });
            setLinks(docs);
        });

    }

    useEffect(() => {
        getLinks();
    }, []);

    return  (
    <div>
    <LinkForm addOrEditLink={addOrEditLink}/>
    <div className="col-md-8">
        {links.map(link => (
            <div className="card mb-1">
                <div className="card-body">
                <h4>{link.websiteName}</h4>
                <p>{link.description}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
    );
};

export default Links;