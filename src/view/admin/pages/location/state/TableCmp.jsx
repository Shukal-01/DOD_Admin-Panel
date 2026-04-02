/* eslint-disable react/prop-types */

import { DeleteBtn } from "../../../../../components/button/crudBtns/DeleteBtn";
import { EditBtn } from "../../../../../components/button/crudBtns/EditBtn";
import { ViewBtn } from "../../../../../components/button/crudBtns/ViewBtn";
import { modalTypes } from "../../../../../data/static";

// >>>>>>>>>>>>>>>>>>>>> update needed
const tds = [
    'State',
    'Code',
    'Country',
    'Status',
]
// >>>>>>>>>>>>>>>>>>>>> update needed
const RenderValue = ({ givenValue, index, handleEdit, handleDelete, allCountries }) => {
    return (<tr key={index}>
        <th>{index + 1}.</th>
        <td>{givenValue.name}</td>
        <td>{givenValue.code}</td>
        <td>
            {allCountries && allCountries.length > 0 &&
                allCountries.filter((value) => value._id === givenValue.countryCode)[0]?.name}
        </td>
        <td>{(givenValue.status === '1') ? 'Active' : 'Inactive'}</td>
        <td style={{ minWidth: 170 }}   >
            <EditBtn btnFunction={() => { handleEdit(givenValue, modalTypes.edit) }} />
            <ViewBtn btnFunction={() => { handleEdit(givenValue, modalTypes.view) }} />
            <DeleteBtn btnFunction={() => { handleDelete(givenValue) }} />
        </td>
    </tr>)
}


export const TableCmp = ({ data, handleEdit, handleDelete, allCountries }) => {


    return (
        <>
            <table className="table bodyContentTable   gDcol w-100">
                <thead className="gRow gHeader w-100">
                    <tr>
                        <th scope="col">#</th>
                        {tds.map((value, index) => {
                            return <th scope="col" key={index}>{value}</th>
                        })}
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody className="gRow gContent w-100">
                    {!(data && data.length) ? (<></>) : (
                        data.map((value, index) => {
                            return <RenderValue key={index} index={index} givenValue={value} handleEdit={handleEdit} handleDelete={handleDelete} allCountries={allCountries} />
                        })
                    )}
                </tbody>
            </table>
            {!(data && data.length) && <div className="gDflex gDjcc gDaic   h-100"><span>Nothing To Show</span></div>}
        </>
    );
};
