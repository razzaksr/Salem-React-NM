import { useEffect, useState } from "react"
import {laptops} from "../data"
import lapimg from "../images/laptop.webp"

export const Read=()=>{

    const[lap,setLap]=useState([])

    useEffect(()=>{
        setLap(laptops)
    },[])

    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-12 table-responsive">
                        <table className="table table-striped text-nowrap">
                            <thead>
                                <th>Laptop Model Name</th>
                                <th>Laptop RAM Capacity</th>
                                <th>Laptop SSD Memory</th>
                                <th>Laptop Price</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>
                                {
                                    lap.map((value,index)=>(
                                        <tr>
                                            <td>{value.model}</td>
                                            <td>{value.ram}</td>
                                            <td>{value.ssd}</td>
                                            <td>{value.price}</td>
                                            <td className="row justify-content-between">
                                                <button className="btn btn-outline-danger col-6" onClick={()=>{
                                                    setLap(lap.filter((v,pos)=>{
                                                        return pos!==index
                                                    })
                                                    )
                                                }
                                                }>
                                                    <span className="bi bi-trash3-fill"/>
                                                </button>
                                                <button className="btn btn-outline-warning col-6">
                                                    <span className="bi bi-pencil-square"/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <img src={lapimg} width="100%" height="20%" className="col-lg-4 col-md-8 col-12"/>
                </div>
            </div>
        </>
    )
}

// function Read(){

// }