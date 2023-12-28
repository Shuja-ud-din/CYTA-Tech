import React, { createContext, useState } from 'react'
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
    const [activeIndex, setActiveIndex] = useState(0);

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
            title: 'Shopify Theme Development',
            image: service1,
            type: 'Shopify',
            description: "Take your online business to the next level with CYTA Technologies Shopify Theme Development Services, which helps deliver the optimal shopping experience to customers. Our team of seasoned professionals brings vast experience and in-depth knowledge to the table, ensuring your store stands out in the digital landscape. Here's how we can elevate your e-commerce venture: ",
            subTypes: [
                'Customize Shopify Theme Designs',
                'Efficient Theme Development',
                'Strategic Content Integration',
                'User-Centric Approach',
                'Continuous Optimization',
                'Security Measures',
                'Expert Guidance'
            ]
        },
        {
            title: 'Search Engine Optimization (SEO)',
            image: service2,
            type: 'SEO',
            description: "Boost your site’s search performance with CYTA Technology SEO marketing solutions. Our SEO agency will collaborate closely with you to grasp your requirements and formulate a personalized strategy to optimize your website, Get a free report now to enhance rankings on Google, Bing, Yahoo, and beyond! We use ethical and proven methods to optimize your website, including ",
            subTypes: [
                'Custom strategy',
                'SEO audit Service',
                'Competitor analysis',
                'Off-page optimization',
                'On-page optimization',
                'Ongoing optimization',
                'Monthly reports',
                'ROI tracking',
            ]
        },
        {
            title: 'WordPress Website Development',
            image: service3,
            type: 'WordPress',
            description: 'CYTA Technology enhances the functionality of content management systems through WordPress website development services. Our skilled website developers create a site that captures your brand, boosts conversion rates, maximizes revenue, and optimizes search engine rankings to attract more visitors. We are dedicated to crafting robust digital solutions with our custom WordPress development services to support all of your WordPress needs. Contact us for WordPress theme customization, website development, and other WordPress projects. Our strategy process for WordPress website development consists of the following steps:',
            subTypes: [
                'Identify Requirements',
                'Define Solutions',
                'Recommend Approach',
            ]
        },
        {
            title: 'UX&UI Design and Consulting Services',
            image: service4,
            type: 'UI / UX',
            description: "CYTA Technology takes your digital experience to the next level with our top-notch UX&UI Design and Consulting Services. Our skilled team specializes in creating visually stunning and user-friendly interfaces, ensuring seamless navigation and optimum engagement. Leading companies and startups collaborate with CYTA Tech to augment their design teams and formulate digital strategies to achieve business goals. Elevate your website's appeal and functionality with CYTA's UI & UX services, where innovation meets user satisfaction. We are dedicated to delivering highly engaging mobile and web applications, covering areas such as",
            subTypes: [
                'Prototype Designing',
                'Testing',
                'Customer Experience Research',
            ]
        },
        {
            title: 'Custom Website Developmen',
            image: service5,
            type: 'Blogging',
            description: "Bring your digital aspirations to life with CYTA Technology's premier Custom Website Development Services, designed to construct high-performance websites. Our seasoned website developer possesses a robust background in custom website development and a commitment to excellence, ensuring we stay current with the latest technologies and trends. Bring your digital vision by constructing innovative and user-friendly websites, empowering you to transform more visitors into valuable customers. Whether crafting engaging corporate sites or intricate animations, create a digital experience that delivers solid results.",
            subTypes: [
                'Custom UX & UI Design',
                'Strategic Search & Conversion Optimization',
                'Comprehensive End-to-End Development',
            ]
        },
        {
            title: 'Mobile App Development Services',
            image: service6,
            type: '',
            description: "Empower your business with CYTA Technology's Mobile App Development Services. Our mobile app developer team specializes in creating cutting-edge mobile applications tailored to your unique requirements. We assist international brands in crafting and developing exceptional digital products, ensuring smooth user experiences across contemporary platforms and devices. Collaborate with CYTA to transform your app ideas into reality, leveraging the latest technologies to enhance user engagement and drive business growth. Whether you need iOS, Android, or cross-platform development, we offer end-to-end solutions to ensure your mobile app stands out in the digital landscape. Our mobile app development services include:",
            subTypes: [
                'Product design',
                'Mobile app consulting',
                'Mobile app design',
                'Mobile app development',
                'Web development',
                'Testing and QA',
                'Mobile app modernization',
            ]
        },
    ]

    return (
        <>
            <DataContext.Provider value={{ workTabsData, serviceTabsData, projectsData, storyData, servicesData, activeIndex, setActiveIndex }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default AppData
export { DataContext }