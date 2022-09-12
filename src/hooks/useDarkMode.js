import {useEffect, useState} from "react"

export default function useDarkMode() {

    const [isDarkMode, setDarkMode] = useState(localStorage.theme)
    const colorTheme = isDarkMode === "dark" ? "light" : "dark"
    
    useEffect(()=> {
        document.documentElement.classList.remove(colorTheme)
        document.documentElement.classList.add(isDarkMode)

        localStorage.setItem("theme", isDarkMode)
    }, [isDarkMode, colorTheme])

    return [colorTheme, setDarkMode]

}
