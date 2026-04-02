import { useEffect } from "react";

const Page2 = () => {
    useEffect(() => {
        console.log('page2 loaded');
    }, [])
    return (
        <div>Page2</div>
    )
}


export default Page2;