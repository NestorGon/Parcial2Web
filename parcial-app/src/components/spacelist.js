import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Rooms from "./rooms";
import house from "../media/house.png";
import apto from "../media/apartment.png";

function SpaceList () {

    const [spaces, setSpaces] = useState([]);
    const [selected, setSelected] = useState(-1);

    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json")
        .then(res=>res.json())
        .then(res=>{
            setSpaces(res);
        });
    },[]);
    
    return (
        <div className="container">
            <div className="row">
                <h1>
                    <FormattedMessage id="Spaces"/>
                </h1>
            </div>
            <div className="row">
                {spaces.map((item)=>(
                    <div key={item.id} className="col" onClick={()=>setSelected(item.id)}>
                        <div className="card text-center">
                            <img src={item.name.includes("Casa")?house:apto} className="card-img-top mx-auto" alt="..." style={{width:"100px"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selected!==-1 &&
                <Rooms key={selected} data={selected}/>
            }
        </div>
    );

}

export default SpaceList;

/**
https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json
https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json
 */