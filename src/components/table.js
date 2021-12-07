import { FormattedMessage } from "react-intl"


function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col"><FormattedMessage id ="Device"/></th>
          <th scope="col"><FormattedMessage id ="Value"/></th>
        </tr>
      </thead>
      <tbody>
      {props.device.devices.map((dev, i) => {
        return(
            <tr key={dev.id}>
                <th scope="row">{i+1}</th>
                <td>{dev.id}</td>
                <td>{dev.name}</td>
                <td>{dev.desired.value}</td>
            </tr>

        )}
       )}
      </tbody>
    </table>
  );
}

export default Table;
