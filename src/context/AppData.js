import React, { createContext } from 'react'
import imgTab1 from '../assets/images/tab1.png'
import imgTab2 from '../assets/images/work-(1).jpg'
import imgTab3 from '../assets/images/work-(2).jpg'
import imgTab4 from '../assets/images/work-(3).jpg'
import projectImg1 from '../assets/images/r-project1.png'
import serviceImage1 from '../assets/images/image3.png'
import clientImg1 from '../assets/images/stories1.png'

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

    const serviceTabsData = [
        {
            para: 'At CYTA Technologies, we specialize in creating visually appealing, user-friendly websites that deliver a seamless experience for your visitors. Our UI/UX design services ensure that your website reflects your brand and engages your audience, driving results for your business.',
            image: serviceImage1
        },
        {
            para: "We don't have anything but happy trees here. See. We take the corner of the brush and let it play back-and-forth.",
            image: serviceImage1
        },
        {
            para: "Isn't that fantastic? You can just push a little tree out of your brush like that. Happy painting, God bless. You better get your coat out, this is going to be a cold painting.",
            image: serviceImage1
        },
        {
            para: "Just go out and talk to a tree. Make friends with it. For the lack of a better word I call them hangy downs. There's nothing wrong with having a tree as a friend. Maybe there's a happy little waterfall happening over here.",
            image: serviceImage1
        },
        {
            para: "Just go out and talk to a tree. Make friends with it. For the lack of a better word I call them hangy downs. There's nothing wrong with having a tree as a friend. Maybe there's a happy little waterfall happening over here.",
            image: serviceImage1
        },
        {
            para: "Just go out and talk to a tree. Make friends with it. For the lack of a better word I call them hangy downs. There's nothing wrong with having a tree as a friend. Maybe there's a happy little waterfall happening over here.",
            image: serviceImage1
        },
        {
            para: "Just go out and talk to a tree. Make friends with it. For the lack of a better word I call them hangy downs. There's nothing wrong with having a tree as a friend. Maybe there's a happy little waterfall happening over here.",
            image: serviceImage1
        }
    ]

    const projectsData = [
        {
            image: projectImg1,
            for: 'Myers Chang'
        },
        {
            image: projectImg1,
            for: 'Myers Chang'
        },
        {
            image: projectImg1,
            for: 'Myers Chang'
        },
        {
            image: projectImg1,
            for: 'Myers Chang'
        }, {
            image: projectImg1,
            for: 'Myers Chang'
        },
        {
            image: projectImg1,
            for: 'Myers Chang'
        },
        {
            image: projectImg1,
            for: 'Myers Chang'
        },
        {
            image: projectImg1,
            for: 'Myers Chang'
        }
    ]

    const storyData = [
        {
            content: "Working with CYTA Technologies has been a game-changer for our business. Their expertise in UI/UX design helped us create a website that not only looks great but also delivers a seamless user experience. We highly recommend CYTA Technologies for their professionalism, expertise, and dedication to their clients.",
            clientImage: clientImg1,
            clientName: 'John Smith',
            company: 'CEO at Blue lounge'
        },
        {
            content: "Working with CYTA Technologies has been a game-changer for our business. Their expertise in UI/UX design helped us create a website that not only looks great but also delivers a seamless user experience. We highly recommend CYTA Technologies for their professionalism, expertise, and dedication to their clients.",
            clientImage: clientImg1,
            clientName: 'John Smith',
            company: 'CEO at Blue lounge'
        },
        {
            content: "Working with CYTA Technologies has been a game-changer for our business. Their expertise in UI/UX design helped us create a website that not only looks great but also delivers a seamless user experience. We highly recommend CYTA Technologies for their professionalism, expertise, and dedication to their clients.",
            clientImage: clientImg1,
            clientName: 'John Smith',
            company: 'CEO at Blue lounge'
        },
        {
            content: "Working with CYTA Technologies has been a game-changer for our business. Their expertise in UI/UX design helped us create a website that not only looks great but also delivers a seamless user experience. We highly recommend CYTA Technologies for their professionalism, expertise, and dedication to their clients.",
            clientImage: clientImg1,
            clientName: 'John Smith',
            company: 'CEO at Blue lounge'
        }
    ]

    return (
        <>
            <DataContext.Provider value={{ workTabsData, serviceTabsData, projectsData, storyData }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default AppData
export { DataContext }