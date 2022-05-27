import { FormattedMessage } from "react-intl";

function Devices ({devices}) {

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col"><FormattedMessage id="Device"/></th>
                        <th scope="col"><FormattedMessage id="Value"/></th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((item,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.desired.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Devices;