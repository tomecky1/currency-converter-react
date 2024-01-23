import "./style.css";

const Table = (props) => (
    <table className="table" align="center">
        <thead className="table__header">
            <tr>
                <th>Nazwa waluty</th>
                <th>Kod waluty</th>
                <th>Kurs średni NBP</th>
            </tr>
        </thead>
        <tbody className="table__body js-table-body"></tbody>
    </table>
);

export default Table;