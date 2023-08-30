import React, { createContext } from 'react'
import imgTab1 from '../assets/images/tab1.png'
import imgTab2 from '../assets/images/work-(1).jpg'
import imgTab3 from '../assets/images/work-(2).jpg'
import imgTab4 from '../assets/images/work-(3).jpg'

const DataContext = createContext();

const AppData = ({ children }) => {

    const workTabsData = [
        {
            para: 'At CYTA Technologies, we begin each project with thorough research to ensure that we fully understand your business needs and goals. Our team conducts market research, competitor analysis, and user research to inform the project scope and strategy.',
            image: imgTab1
        },
        {
            para: 'At CYTA Technologies, we begin each project with thorough research to ensure that we fully understand your business needs and goals. Our team conducts market research, competitor analysis, and user research to inform the project scope and strategy.',
            image: imgTab2
        },
        {
            para: 'At CYTA Technologies, we begin each project with thorough research to ensure that we fully understand your business needs and goals. Our team conducts market research, competitor analysis, and user research to inform the project scope and strategy.',
            image: imgTab3
        },
        {
            para: 'At CYTA Technologies, we begin each project with thorough research to ensure that we fully understand your business needs and goals. Our team conducts market research, competitor analysis, and user research to inform the project scope and strategy.',
            image: imgTab4
        },
    ]

    return (
        <>
            <DataContext.Provider value={{ workTabsData }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default AppData
export { DataContext }