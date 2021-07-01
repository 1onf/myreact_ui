import  { useState } from 'react'

export default function useColorSwitch() {
    const [state, setstate] = useState("pink")
    const handleButton1 = () => {
        console.log("按钮1点击事件，让文字变为黄绿色")
        setstate("yellowGreen")
    }
    const handleButton2 = () => {
        console.log("按钮2点击事件，让文字变为红色")
        setstate("red")
    }
    return [state, handleButton1, handleButton2]
}
