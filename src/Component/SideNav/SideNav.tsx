import React from 'react';
import "./SideNav.css";
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
    const navigate = useNavigate();

    const Home=()=>{
        navigate('/');
    }

    const AllFiles=()=>{
        navigate('/AllFiles');
    }
    const Saved=()=>{
        navigate('/Saved');
    }
    const Integrations=()=>{
        navigate('/Integration');
    }
    const Trash=()=>{
        navigate('/Trash');
    }
    const Settings=()=>{
        navigate('/Setting');
    }
    const HelpandSupprot=()=>{
        navigate('/HelpandSupprot');
    }

    return (
        <div className='SideNav-Main'>
            <h1 className='sideNav-heading'>abc firm</h1>
            <div className="files">
                <li onClick={Home}><i className='bi bi-house-door'></i>Home</li>
                <li onClick={AllFiles}><i className='bi bi-folder'></i>All Files</li>
                <li onClick={Saved}><i className='bi bi-bookmark'></i>Saved</li>
                <li onClick={Integrations}><i className='bi bi-share'></i>Integrations</li>
                <li onClick={Trash}><i className='bi bi-trash3'></i>Trash</li>
                <li onClick={Settings}><i className='bi bi-gear'></i>Settings</li>
                <li onClick={HelpandSupprot}><i className='bi bi-question-circle'></i>Help and Support</li>
            </div>
        </div>
    )
}

export default SideNav
