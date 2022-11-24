import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Quality Consoles`;
    }, [title])
};

export default useTitle;