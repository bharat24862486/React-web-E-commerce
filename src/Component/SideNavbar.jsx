import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function SideNavbar() {

    const [searchParam, setSearchParam] = useSearchParams()

    let initialValue = searchParam.getAll("gender")

    console.log('params', searchParam.getAll("gender"))
    console.log('filter', searchParam.get("order"))

    const [oldvalue, setValue] = useState(initialValue || [])
    const [filter, setFilter] = useState(searchParam.get("order") || '')
    // const [firstRadio,setFirstRadio] = useState(false)
    // const [secondRadio,setSecondRadio] = useState(false)

    function handleChange(e) {
        const storeTarget = e.target.value
        // console.log(oldvalue)
        const newArray = [...oldvalue]

        if (oldvalue.includes(storeTarget)) {
            newArray.splice(newArray.indexOf(storeTarget), 1)
        } else {
            newArray.push(storeTarget)
        }

        setValue(newArray)

    }

    function handleFilter(e) {
       
        const { value } = e.target

        console.log(value)
        if(filter == value){
            setFilter('')
        } else{
            setFilter(value)
        }
        
        
    }

    

    useEffect(() => {
        let params = {
            gender: oldvalue
        }

        filter && (params.order = filter);

        

        setSearchParam(params)
    }, [oldvalue,filter])

    return (

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ fontSize: "25px" }}>Filter</h2>
            <div>
                <Checkbox colorScheme='green' spacing='1rem' value={"Man"} onChange={handleChange} isChecked={searchParam.getAll("gender").includes("Man")}>Man</Checkbox>
            </div>
            <div>
                <Checkbox colorScheme='green' spacing='1rem' value={"Women"} onChange={handleChange} isChecked={searchParam.getAll("gender").includes("Women")}>
                    Women
                </Checkbox>
            </div>
            <div>
                <Checkbox colorScheme='green' spacing='1rem' value={"Kids"} onChange={handleChange} isChecked={searchParam.getAll("gender").includes("Kids")}>
                    Kids
                </Checkbox>
            </div>

            <h2 style={{ fontSize: "25px" }}>Sort</h2>

            <div>
                <input type="radio" value="asc" name='order' onChange={handleFilter} checked={searchParam.get("order") == "asc"}/>
                <label >Low to High</label><br />
                <input type="radio" value="desc" name='order' onChange={handleFilter} checked={searchParam.get("order") == "desc"} />
                <label >High to Low</label>
                <br />
            </div>
        </div>



    )
}

export default SideNavbar