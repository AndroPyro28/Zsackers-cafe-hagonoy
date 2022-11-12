
function Logic() {

    const handleChange = (setFunction: React.Dispatch<React.SetStateAction<number>>, value: any ) => {
        setFunction(Number(value))
    }

    return {handleChange}
}

export default Logic