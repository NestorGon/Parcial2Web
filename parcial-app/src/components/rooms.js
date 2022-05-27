import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Devices from "./devices";
import room from "../media/room.png";
import kitchen from "../media/kitchen.png";

function Rooms ({data}) {
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{  
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
        .then(res=>res.json())
        .then(res=>{
            let array = [];
            res.forEach((item)=>{
                if (item.homeId===data) {
                    array.push(item)
                }
            });
            setRooms(array);
        });
    },[data]);

    const [selected, setSelected] = useState(undefined);

    return (
        <>
            <div className="row">
                <h2>
                    <FormattedMessage id="Rooms"/>
                </h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        {rooms.map((item)=>(
                            <div key={item.name} className="col" onClick={()=>{setSelected(rooms.find(rooms => rooms.name===item.name))}}>
                                <div className="card">
                                    <img src={item.name.includes("room")?room:kitchen} className="card-img-top mx-auto" alt="..." style={{width:"100px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selected!==undefined &&
                    <div className="col-4">
                        <Devices devices={selected.devices}/>  
                    </div>
                }
            </div>
        </>
    );
}

export default Rooms;