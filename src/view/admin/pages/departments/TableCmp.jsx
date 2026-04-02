/* eslint-disable react/prop-types */

import { DeleteBtn } from "../../../../components/button/crudBtns/DeleteBtn";
import { EditBtn } from "../../../../components/button/crudBtns/EditBtn";
import { ViewBtn } from "../../../../components/button/crudBtns/ViewBtn";
import { modalTypes } from "../../../../data/static";
import { bgColor } from "../../../../styles/colour";

// >>>>>>>>>>>>>>>>>>>>> update needed
const tds = [
    'icon',
    'name',
    // 'description',
    'departmentId',
    'status',
]
// >>>>>>>>>>>>>>>>>>>>> update needed
const RenderValue = ({ givenValue, index, handleEdit, handleDelete }) => {
    return (<tr key={index}>
        <th>{index + 1}.</th>
        <td><img src={givenValue.icon}  style={{ background: bgColor.imgTintColour }} height={50} className="rounded" alt="" /></td>
        <td>{givenValue.name}</td>
        {/* <td>{givenValue.description}</td> */}
        <td>{givenValue.departmentId}</td>
        <td>{(givenValue.status === '1') ? 'Active' : 'Inactive'}</td>
        <td style={{ minWidth: 170 }}   >
            <EditBtn btnFunction={() => { handleEdit(givenValue, modalTypes.edit) }} />
            <ViewBtn btnFunction={() => { handleEdit(givenValue, modalTypes.view) }} />
            <DeleteBtn btnFunction={() => { handleDelete(givenValue) }} />
        </td>
    </tr>)
}


export const TableCmp = ({ data, handleEdit, handleDelete }) => {


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
                            return <RenderValue key={index} index={index} givenValue={value} handleEdit={handleEdit} handleDelete={handleDelete} />
                        })
                    )}
                </tbody>
            </table>
            {!(data && data.length) && <div className="gDflex gDjcc gDaic   h-100"><span>Nothing To Show</span></div>}
        </>
    );
};
