import React, { createContext, useState } from 'react'
import imgTab1 from '../assets/images/tab1.png'
import imgTab2 from '../assets/images/work-(1).jpg'
import imgTab3 from '../assets/images/work-(2).jpg'
import imgTab4 from '../assets/images/work-(3).jpg'
import projectImg1 from '../assets/images/project1.png'
import projectImg2 from '../assets/images/project2.png'
import projectImg3 from '../assets/images/project3.png'
import projectImg4 from '../assets/images/project4.png'
import projectImg5 from '../assets/images/project5.png'
import projectImg6 from '../assets/images/project6.png'
import projectImg7 from '../assets/images/project7.png'
import projectImg8 from '../assets/images/project8.png'
import serviceImage1 from '../assets/images/image3.png'
import clientImg1 from '../assets/images/stories1.png'
import service1 from '../assets/images/woman-working.png'
import service2 from '../assets/images/woman-taking.png'
import service3 from '../assets/images/parcel-paper.png'
import service4 from '../assets/images/content-management.png'
import service5 from '../assets/images/business-blogging.png'
import service6 from '../assets/images/mobile-app.png'

const DataContext = createContext();

const AppData = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const workTabsData = [
        {
            para: "At CYTA Technology, we are not just marketers; we are partners in your digital success. We explore deep into understanding your target audience. Through comprehensive market research, we identify trends, assess competitors, and uncover opportunities. Our approach extends to robust keyword exploration, ensuring our digital strategy is informed by data and finely tuned to capture your audience's attention. By leveraging data-driven insights, we shape a strategy and lay the groundwork for a tailored and effective digital marketing campaign.",
            image: imgTab1
        },
        {
            para: "You can start a successful digital marketing strategy by aligning our efforts with your goals. Develop buyer personas and plan engaging campaigns. Our detailed strategies, including content calendars and channel-specific approaches, ensure a consistent brand presence across various digital touchpoints. Map customer journeys to enhance the user experience across all digital platforms. Continuously monitor user behavior to adapt and optimize campaigns in real time.",
            image: imgTab2
        },
        {
            para: "We bring our carefully designed strategies to life with practical implementation. Implement campaigns using accurate methodologies and a tailored tech stack. Produce engaging and relevant content for various digital channels. Implement continuous optimization strategies based on analytics and performance metrics. Collaborate closely with clients to ensure campaign goals are met.",
            image: imgTab3
        },
        {
            para: "Define clear testing objectives, employ A/B testing, and utilize analytics for data-driven optimization. Ongoing optimization is not just a goal but a commitment. We share detailed reports with clients, highlighting successes, insights, and areas for refinement. Our focus on continuous improvement ensures that your digital marketing efforts evolve to meet and exceed expectations in the ever-changing digital landscape.",
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
            for: 'LOOTCRATE'
        },
        {
            image: projectImg2,
            for: 'Death Wish'
        },
        {
            image: projectImg3,
            for: 'FitTea'
        },
        {
            image: projectImg4,
            for: 'NOTICE'
        }, {
            image: projectImg5,
            for: 'PIPCORN'
        },
        {
            image: projectImg6,
            for: 'UGMONK'
        },
        {
            image: projectImg7,
            for: 'Luca + Danni'
        },
        {
            image: projectImg8,
            for: 'BURGA'
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
            title: 'Search Engine Optimization (SEO)',
            image: service2,
            type: 'SEO',
            para: "Supercharge your online visibility with our Search Engine Optimization Services. Our advanced SEO strategies deliver measurable results, driving increased traffic, higher rankings, and a powerful digital presence. Experience the impact of effective SEO, where success is not just a goal but a guarantee.",
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
            title: 'Shopify Theme Development',
            image: service1,
            type: 'Shopify',
            para: "Revolutionize your online presence with our Shopify Theme Development Services. Elevate your brand with stunning designs, seamless customization, and top-notch performance. Join our digital agency and redefine your e-commerce journey today!",
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
            title: 'WordPress Website Development',
            image: service3,
            type: 'WordPress',
            para: "Transform your digital presence with our WordPress Website Development Services. From sleek designs to seamless functionality, we craft websites that captivate audiences and elevate user experiences. Empower your brand with our expertise, where innovation meets excellence in every WordPress site we build.",
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
            para: "Elevate your digital experience with our UX&UI Design and Consulting Services. We go beyond aesthetics, crafting interfaces that captivate and functionalities that resonate. From user-centric design to strategic consulting, we redefine digital interactions for a seamless, engaging journey. Partner with us to unlock the full potential of your user experience.",
            description: "CYTA Technology takes your digital experience to the next level with our top-notch UX&UI Design and Consulting Services. Our skilled team specializes in creating visually stunning and user-friendly interfaces, ensuring seamless navigation and optimum engagement. Leading companies and startups collaborate with CYTA Tech to augment their design teams and formulate digital strategies to achieve business goals. Elevate your website's appeal and functionality with CYTA's UI & UX services, where innovation meets user satisfaction. We are dedicated to delivering highly engaging mobile and web applications, covering areas such as",
            subTypes: [
                'Prototype Designing',
                'Testing',
                'Customer Experience Research',
            ]
        },
        {
            title: 'Custom Website Development',
            image: service5,
            type: '',
            para: "Unlock your digital vision with our Custom Website Development Services. Tailored to your unique needs, we craft websites that blend innovation and functionality seamlessly. Our custom solutions ensure your online presence stands out, from intricate designs to robust features. You can experience the power of bespoke web development where your vision meets our expertise.",
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
            para: "Shape the future of your business with our Mobile App Development Services. We turn your ideas into innovative, user-friendly applications that stand out in the digital landscape. From concept to execution, our expert team ensures your mobile app meets and exceeds expectations. Elevate your brand's presence in the palm of your users' hands with our cutting-edge solutions.",
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