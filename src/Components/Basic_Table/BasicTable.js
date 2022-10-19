import React,{useEffect, useMemo, useState} from 'react'
// import { useTable } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
// import {COLUMNS} from '../Columns'
import './table.css'

const BasicTable = (props) => {
    
   
   

    // const columns = useMemo(()=> COLUMNS,[])
    // const data = useMemo(()=>MOCK_DATA,[])


    // const tableInstance = useTable({
    //     columns,
    //     data
    // });

    // const{
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     preparRows
    // } = tableInstance;

  return (
    <div>
    {
        MOCK_DATA.map(mocData =>{
            const {id,first_name,last_name,age,country,email,phone} = mocData;
            return(
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{first_name + ' ' + last_name} </td>
                            <td>{age}</td>
                            <td>{country} </td>
                            <td>{email} </td>
                            <td>{phone}</td>
                            
                        </tr>
                    </tbody>
                </table>
            )
        })
    }
    </div>
    
    
    
    
    //   <table {...getTableProps()}>
    //     <thead>
    //       {headerGroups.map((headerGroups) => (
    //         <tr {...headerGroups.getHeaderGroupProps()}>
    //           {headerGroups.map((column) => (
    //             <th {...column.getHeaderGroupProps()}>{column.render('Header')} </th>
    //           ))}
    //         </tr>
    //       ))}
    //     </thead>
    //     <tbody {...getTableBodyProps()}>
    //         {rows.map(row =>{
    //             preparRows(row)
    //             return (
    //               <tr{...row.getRowProps()}>
    //               {
    //                 row.cells.map((cell) => {
    //                 return (<td {...cell.getCellProps()}>{cell.render('cell')}</td>)
    //               })}
                    
    //               </tr>
    //             );
    //         })}
          
    //     </tbody>
    //   </table>

   
  );
}

export default BasicTable