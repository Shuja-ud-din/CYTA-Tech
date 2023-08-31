import React, { createContext } from 'react'
import imgTab1 from '../assets/images/tab1.png'
import imgTab2 from '../assets/images/work-(1).jpg'
import imgTab3 from '../assets/images/work-(2).jpg'
import imgTab4 from '../assets/images/work-(3).jpg'
import projectImg1 from '../assets/images/r-project1.png'
import serviceImage1 from '../assets/images/image3.png'
import clientImg1 from '../assets/images/stories1.png'
import service1 from '../assets/images/woman-working.png'
import service2 from '../assets/images/woman-taking.png'
import service3 from '../assets/images/parcel-paper.png'
import service4 from '../assets/images/content-management.png'
import service5 from '../assets/images/business-blogging.png'
import service6 from '../assets/images/mobile-app.png'
import service7 from '../assets/images/ux-ui-design.png'

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

    const servicesData = [
        {
            title: 'UI/UX Design Websites',
            image: service1,
            type: 'UI/UX',
            description: "We believe in building long-term relationships with our clients and helping them achieve their business goals. If you are ready to take the next step and start working with us, fill out the contact form below and we'll get in touch with you shortly.",
            subTypes: [
                'Complte Website Redesign',
                'Website Design From Scratch',
                'Payment & Security Integration',
                'Indicating Design Inconsistencies In Current Website',
                'Fixing Functional Issues'
            ]
        },
        {
            title: 'Custom Website Development',
            image: service2,
            type: '',
            description: "At CYTA Technologies, we understand that each business has unique needs and requirements when it comes to their online presence. That's why we offer custom website development services to help businesses create a website that is tailored to their specific needs.",
            subTypes: [
                'Portfolio Websites',
                'Corporate Websites',
                'Non-Profit Websites',
                'Educational Websites'
            ]
        },
        {
            title: 'E-commerce Websites',
            image: service3,
            type: 'E-COMMERCE',
            description: 'At CYTA Technologies, we specialize in creating e-commerce websites that are tailored to your business needs. Our team of experts has extensive experience in developing custom e-commerce solutions that help businesses drive sales and increase revenue.',
            subTypes: [
                'Shopify Store',
                'Single Product Store',
                'Multi-Product Store',
                'Marketplace',
                'Dropshipping Store'
            ]
        },
        {
            title: 'CMS Websites',
            image: service4,
            type: 'CMS',
            description: "At CYTA Technologies, we offer CMS website development services that make it easy for businesses to manage their website content. Our team of experts has experience in developing custom CMS websites that allow businesses to update their website content easily and quickly.",
            subTypes: [
                'Wordpress Websites',
                'Blogging Platforms',
                'Community Portals',
                'News and Media Websites'
            ]
        },
        {
            title: 'Blogging Websites',
            image: service5,
            type: 'Blogging',
            description: 'At CYTA Technologies, we specialize in developing blogging websites that help businesses establish an online presence and engage with their audience. Our team of experts has experience in creating custom blogging solutions that allow businesses to publish and share content easily and effectively.',
            subTypes: [
                'Personal Blogging Website',
                'Niche Blogging Websites',
                'Microblogs',
                'Review Blogs'
            ]
        },
        {
            title: 'Mobile App Websites',
            image: service6,
            type: '',
            description: 'At CYTA Technologies, we offer mobile app development services that help businesses reach their customers on-the-go. Our team of experts has experience in developing custom mobile apps that are user-friendly and deliver a seamless experience for your customers.',
            subTypes: [
                'App Landing Page',
                'App Review Website',
                'App Blog',
                'App Store Optimization (ASO) Websites'
            ]
        },
        {
            title: 'Web Application Development',
            image: service7,
            type: '',
            description: 'At CYTA Technologies, we offer web application development services that help businesses streamline their operations and improve their efficiency. Our team of experts has experience in developing custom web applications that are tailored to your business needs and requirements.',
            subTypes: [
                'E-commerce Applications',
                'Social Media Applications',
                'Customer Relationship Management (CRM) Systems',
                'Human Resources (HR) Management Systems',
                'Learning Management Systems (LMS)'
            ]
        }
    ]

    return (
        <>
            <DataContext.Provider value={{ workTabsData, serviceTabsData, projectsData, storyData, servicesData }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default AppData
export { DataContext }