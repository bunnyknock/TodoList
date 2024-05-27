import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Inputs from '../../utils/Inputs'
import { toast } from 'react-toastify'

export default function AllLeads() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [dataFilter, setDataFilter] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const existingData = localStorage.getItem('myData');
        setData(JSON.parse(existingData))
    }, [])

    useEffect(() => {
        filterData()
    }, [searchText, data])
    const deletehandler = (ind) => {
        const existingData = localStorage.getItem('myData');
        const dataArray = existingData ? JSON.parse(existingData) : [];
        dataArray?.splice(ind, 1);
        const newDataString = JSON.stringify(dataArray);
        localStorage.setItem('myData', newDataString);
        setData(dataArray);
        toast.success('Deleted successfully')
    }
    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    const filterData = () => {
        const filtered = data?.filter(item => {
            const nameMatch = item?.name?.toLowerCase().includes(searchText.toLowerCase());
            const emailMatch = item?.email?.toLowerCase().includes(searchText.toLowerCase());
            return nameMatch || emailMatch;
        });
        setDataFilter(filtered);
    };

    const handleFilter = (e) => {
        if (Number(e.target.value) > 0) {
            const filtered = data?.filter(item => {
                const filterBy = item?.status?.includes(Number(e.target.value))
                return filterBy
            })
            setDataFilter(filtered);
        }
    }

    return (
        < >
            <div className=' '>
                <div className='navMain'>
                    <h3>Welcome</h3>
                    <button className='button' onClick={() => navigate('/lead')}>Add Lead</button>
                </div>
                {
                    data?.length ?
                     <div>

                        <div className='mainDiv filterDiv'>
                            <Inputs
                                type={"text"}
                                name={"search"}
                                onChange={handleSearch}
                                placeholder={'Search by name and email'}
                                lable={false}
                            />
                            <div>
                                <select onChange={handleFilter}>
                                    <option value={0}>Select</option>
                                    <option value={1}>New</option>
                                    <option value={2}>Contacted</option>
                                    <option value={3}>Qualified</option>
                                </select>
                            </div>
                        </div>
                        {
                           dataFilter?.length>0 ?
                           <div className='scroll mainDiv'>

                           <table className='table'>
                               <tr>
                                   <th>Name</th>
                                   <th>E mail</th>
                                   <th>Phone Number</th>
                                   <th>Status</th>
                                   <th>Actions</th>
                               </tr>

                               {
                                   dataFilter?.map((e, i, a) => {
                                       return (
                                           <tr key={i}>
                                               <td>{e?.name}</td>
                                               <td>{e?.email}</td>
                                               <td>{e?.phoneNumber}</td>
                                               <td>{e?.status == 1 ? 'New' : e?.status == 2 ? "Contacted" : e?.status == 3 ? "Qualified" : null}</td>
                                               <td style={{ display: 'flex', justifyContent: 'space-around', border: '0px' }}>
                                                   <button className='buttonSave' onClick={() => navigate(`/lead`, { state: { state: data[i], id: i } })}>Edit</button>
                                                   <button className='deleteBtn' onClick={() => deletehandler(i)}>Delete</button>
                                               </td>
                                           </tr>
                                       )
                                   })
                               }
                           </table>
                       </div>
                       :<div className='gridCenter'>No Data</div>}
                       
                       
                    </div> 
                    : <div className='gridCenter'>No Data</div>}
            </div>
        </>
    )
}
