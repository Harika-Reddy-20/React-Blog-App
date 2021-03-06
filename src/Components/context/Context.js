import React,{createContext,useState} from "react";

//! Context Data...
export const CategoryContext=createContext();
export const CategoryProvider=(props)=>{
    const [category,]=useState([
        {
            id:"1",
            category:"TollyWood",
            img:"https://i.ytimg.com/vi/_AhnhBPpQ68/maxresdefault.jpg",
            det:"RRR Box Office Day 23 (Early Trends): Picks Up Terrifically On 4th Saturday",
            date:"March-18, 2022",
            description:"RRR will now release either on March 18, 2022, or April 28. The film has Ram Charan, Jr NTR, Alia Bhatt, and Ajay Devgn in key roles and is produced by D. V. V. Danayya of DVV Entertainments. The makers of RRR captioned their note as followed by a lit emoji."
        },
        {
            id:"2",
            category:"TollyWood",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxNOquKLKqlbK6h34qPwimqCy0sGz0obKbA&usqp=CAU",
            det:"Pushpa Box Office Day 23 (Early Trends): Picks Up Terrifically On 4th Saturday",
            date:"By IANS -January 3, 2022",
            description:"Allu Arjun's Pushpa: The Rise is roaring ahead at the box office, 25 days on. Reportedly, the film has grossed Rs 100 crore in the Hindi belt alone. Pushpa Hindi will start streaming on Amazon Prime Video on January 14.Pushpa: The Rise has become a phenomenon, and Allu Arjun, a force to reckon with. The film's meteoric success at the box office despite competition from films 83 and Spider-Man: No Way Home, is simply outstanding. Reportedly, the film has crossed the Rs 325 crore-mark, but doesn't look like it is in any mood to slow down. For those who still failed to catch the film in theatres, Pushpa: The Rise is now streaming on Amazon Prime Video in four languages - Tamil, Telugu, Malayalam and Kannada. Now, we hear that the OTT giants will release the Hindi version of Pushpa on January 14."
        },
        {
            id:"3",
            category:"TollyWood",
            img:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/rrr-1601963942.jpg",
            det:"Delay In 'RRR' Release, A Blessing In Disguise For Other Tollywood Films",
            date:"Published: 05 Jan 2022, Updated: 05 Jan 2022 8:14 pm",
            description:"Filmmaker S.S Rajamouli announced on January 1, that his much-awaited Pan India project 'RRR' will not be hitting theatres on January 7 due to the rise of Covid-19 cases and theatres being shut in major markets of Mumbai and Delhi. Within the next 48 hours, as many as five Telugu films announced their release dates around January 14, making it a Makar Sankranthi release. Experts reveal that with a major player like Jr NTR and Ram Charan's 'RRR' off the grid, it is a favourable situation for Telugu films that target mostly Telangana and Andhra Pradesh film market."

        },
        {
            id:"4",
            category:"TollyWood",
            img:"https://assets.thehansindia.com/h-upload/2022/01/24/1600x960_1196656-good-luck-sakhi.jpg",
            det:"Good Luck Sakhi movie review: Keerthy Suresh underperforms in Nagesh Kukunoor's coming-of-age sports drama",
            date:"Published: 28nd January 2022 05:00 AM",
            description:"Good Luck Sakhi movie review: Keerthy Suresh underperforms in Nagesh Kukunoor's coming-of-age sports dramaNagesh Kukunoor's Good Luck Sakhi a sports drama, good or bad, is ungenerous and, more importantly, inaccurate. Yes, there is a sport in the middle of it all???shooting, but it is merely a device to help Sakhi (Keerthy Suresh) understand the world beyond her village and her place in it. "
            
        },
        {
            id:"5",
            category:"Technology",
            img:"https://www.thefirstwrite.com/wp-content/uploads/2020/10/backend-developer-1.jpg",
            det:"The Back end developer job is to understand the goals of the website and come up with effective solutions",
            date:"24/09/2020",
            description:"Generating and extending Web Services API to access the data Extensive communication with the customer, discussing and clarifying the requirements Potentially getting involved in architectural/deployment/integration activities Work with and lead other developers who analyze requirements, design solutions, develop new functionality"
        },
        {
            id:"6",
            category:"Technology",
            img:"https://th.bing.com/th/id/OIP.85TGfelUVT13oJRWZ3DOagHaE8?pid=ImgDet&rs=1",
            det:"Data Science One of the most trending technologies, not only in India but also abroad is Data Science.",
            date:"18 August 1951",
            description:"Technology is the continually developing result of accumulated knowledge and application in all techniques, skills, methods, and processes used in industrial production and scientific research. Technology is embedded in the operation of all machines, with or without detailed knowledge of their function, for the intended purpose of an organization. The technologies of society consist of what is known as systems. Systems apply the intended application of a technology's accumulated knowledge by obtaining an input, altering this input for the system's intended purpose through what is known as a process, and then producing an outcome that alters the ultimate intended purpose of the system. This is also known as a technology system or technological system."
        },
        {
            id:"7",
            category:"Technology",
            img:"https://i.gadgets360cdn.com/large/intel_core_i9_12900ks_intel_youtube_1641564934678.jpg?downsize=950:*",
            det:"Intel Core i9-12900KS Announced at CES With Massive 5.5GHz Clock Speed on a Single Core",
            date:"by David Delima, 9 March 2022",
            description:"Intel Core i9-12900KS was announced by the company at CES 2022. The 12th Gen Intel Core ???Alder Lake' CPU offers a 5.5GHz boost clock speed on a single core. The new Intel Core i9-12900KS is also capable of functioning at 5.2GHz on all cores while performing heavy multi-core tasks, according to the company. This is the first Special Edition processor for desktops from Intel since the Core i9-9900KS in 2019 and will be available to manufacturers in Q1 2022, according to the company.The new processor unveiled by Intel is similar to the Core i9-12900K CPU and sports eight performance cores and eight efficiency cores. The new 12th Gen Alder Lake Intel Core i9-12900KS offers up to 40 percent higher performance generation-on-generation, according to the company. The company also ran a live demo of the CPU running Hitman 3 at CES 2022, where the CPU was shown to maintain a clock speed of 5.2GHz on all eight performance cores. Intel is yet to reveal details of exactly how much power the new Intel Core i9-12900KS will draw, or how much the CPU will cost."
        }, 
        {
            id:"8",
            category:"Technology",
            img:"https://i.gadgets360cdn.com/large/fire_boltt_ninja_2_smartwatch_website_1641540469956.jpg?downsize=950:*",
            det:"Fire-Boltt Ninja 2 Budget Smartwatch With 30 Sports Modes, SpO2 Tracking Launched in India: Price, Specifications",
            date:"by Nithya P Nair, 7 March 2022",
            description:"Fire-Boltt Ninja 2, the newest smartwatch from the popular wearables brand is now official in India. The budget smartwatch features a 1.3-inch touch screen display and a blood oxygen saturation (SpO2) monitor. It also comes with inbuilt arcade-style games. Fire-Boltt Ninja 2 offers 30 sports modes and is claimed to have a battery life of up to 7 days when in use and a standby time of up to 25 days. Fire-Boltt Ninja 2 is certified to be dust- and water-resistant with an IP68 rating.Fire-Boltt Ninja 2 price in India, availability The new Fire-Boltt Ninja 2 is available in India at an introductory price of Rs. 1,899 and will be available to purchase exclusively via Amazon. The latest Fire-Boltt smartwatch is offered in three colour options ??? Black, Blue, and Pink.Fire-Boltt Ninja 2 specifications, features The Fire-Boltt Ninja 2 smartwatch has a rectangular dial and comes with a 1.3-inch HD (240x240 pixels) touchscreen display. The new Fire-Boltt wearable sports a side-mounted button for navigation and support for multiple watch faces that can be customised via the Da Fit app in the paired Android or iOS smartphone.HTC Launches Wrist Tracker Companion for Its Vive Focus 3 VR Headset Fire-Boltt Ninja 2 supports 30 sports modes including walking, cycling, hiking, aerobics, badminton, football, running, and skipping among others. It sports SpO2 monitoring alongside inbuild features such as alarm, menstrual reminders, stopwatch, smart notifications, and weather updates.The new smartwatch also packs a heart-rate tracker, a sleep tracker, and a steps counter. Users can also control music and the camera running on the smartphone using the watch.As mentioned, Fire-Boltt Ninja 2 smartwatch has an IP68 build. The wearable has an inbuilt gaming option, that allows users to play games like 2048 and Young Bird."
        },
        {
            id:"9",
            category:"Jobs",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq1YYFWJlLJ_PR7e79XLP0mM7ByE26t1HLg&usqp=CAU",
            det:"Non-traditional ways to bag data science job roles in 2022",
            date:"PUBLISHED ON March 9, 2022 By BY SREEJANI BHATTACHARYYA",
            description:"A job role as a data scientist is a dream for many. But in 2022, the traditional ways of getting into analytics is just not enough. Even after your concepts are crystal clear, an aspiring data scientist cannot expect to land their desired jobs just by applying when they see job openings. Times have changed, and one has to take other proactive steps to ensure that they crack the interviews that will land them in such rewarding roles. Here are a few ways to ease the process of landing data science job roles this year.Hackathons and competitions Hackathons and competitions are a great way to test ones own skills and understand what is needed out of you as a data scientist. Kaggle has emerged as a go-to platform for aspiring data scientists as well as those who are already in the profession to prove their skills and compete with like-minded people.  MachineHack is another immensely popular platform that frequently hosts challenges and hackathons to solve problems through data science and analytics.Active participation in different hackathons is a great way to learn new skills as well. Ayan Basak, who works as a data scientist at Snapdeal, says, ???According to me, hackathons and competitions are very important components of one???s portfolio for a data scientist role. Especially for me, coming from an electronics engineering background having no formal education in DS, it has been a huge factor to advertise myself. It has also helped me to develop my technical knowledge and navigate across various challenges one might face in this domain.???",
        },
        {
            id:"10",
            category:"Jobs",
            img:"https://th.bing.com/th/id/OIP.Jm0Lorqlgol1reX8idvG8AHaE8?pid=ImgDet&rs=1",
            det:"Jobs: Infosys invites applications from graduates",
            date:"Updated: 17th March 2022",
            description:"Hyderabad:As the world's largest corporate university, the Infosys global education centre in the 337 acre campus has 400 instructors and 200+ classrooms, with international benchmarks at its core. Established in 2002, it had trained around 125,000 engineering graduates by June 2015. It can train 14,000 employees at a given point of time on various technologies.The Infosys Leadership Institute (ILI), based in Mysuru, has 196 rooms and trains about 4,000 trainees annually. Its purpose is to prepare and develop the senior leaders in Infosys for current and future executive leadership roles.The Infosys Training Centre in Mysuru also provides a number of extracurricular facilities like tennis, badminton, basketball, swimming pool, gym and bowling alley. It has an international level cricket ground approved by BCCI.",
        },
        {
            id:"11",
            category:"Jobs",
            img:"https://images.news18.com/telugu/uploads/2022/01/HAL-Jobs-16416411333x2.jpg?impolicy=website&width=509&height=339",
            det:"Jobs in Hyderabad: Apprentice jobs in Hyderabad .. Qualifications, application process",
            date:"Published by: Sharath Chandra March 06, 2022, 17:04 IST",
            description:"Hindustan Aeronautics Limited has issued a notification for the replacement of multiple posts in Hyderabad . Through this notification , Technician Apprentice Trainee and Graduate Apprentice Trainee jobs will be filled. The notification details for this post need to be downloaded after registering on the official website. Without any examination .. HAL will replace these posts on academic merit basis only, reservation. Selected candidates will be given a stipend of Rs. 8,000 to Rs. 9,000 depending on the post. Application ProcessIs completely online. The application process will run from January 7, 2022 to January 17, 2022. For notification and application process, one has to visit the official website https://portal.mhrdnats .gov.in/ Selection Procedure ..- Selection process will be done on the basis of notification only. - Applications will be accepted from candidates in a timely manner. - Applicants will be shortlisted on the basis of academic merit and reservation. - The final selection will be made after reviewing the credentials. - Action will be taken against those who submit false credentials. Application Procedure ..  Step 1: Candidates should first open the website  Step 2: Click on Register here on the home page.  Step 3: Candidates should complete the registration with their details. AIIMS Jobs: 118 jobs in AIIMS .. Salary above Rs.  Step 4: Wait a day for enrollment verification and approval.  Step 5: After completing the verification and approval, re- open the website  Step 6: Click on Login and login with details  Step 7: Then click on the Establishment Request menu.  Step 8: Click on Find Establishment. Step 9: Type Hindustan Aeronautics Limited Apprentice and search. Step 10: Then click on the Apply button and apply. Step 11: In addition, the format of the application form is placed in the notification. Step 12: The deadline to apply is January 17, 2022.",
        },
        {
            id:"12",
            category:"Jobs",
            img:"https://images.news18.com/telugu/uploads/2022/01/capgemini_1583049452007_1641716280065-16417963133x2.jpg?impolicy=website&width=509&height=339",
            det:"IT Jobs: Good news for freshers .. Cap Gemini will be hosted by Off Campus Drive .. Full details ..",
            date:"LAST UPDATED: March 10, 2022, 12:03 IST",
            description:"Capgemini, Multi National Information Technology Company ( IT Company ), says good news for the unemployed. Off campus drive will be conducted for engineering students who have completed graduation in 2019 or 2020. This will create large scale job opportunities for freshers. Capgemini currently operates in 13 cities with over 1,50,000 employees. The company has offices in Bangalore, Bhubaneswar, Chennai, Coimbatore, Gandhinagar, Gurugram, Hyderabad , Kolkata, Mumbai, Noida, Pune, Salem and Tiruchirappalli. Selected candidates will be posted in the respective offices. Eligible candidates are required to apply through the official website of CapGemini.Eligibility Criteria Candidates must have completed graduation in 2019/2020. Those who have completed it before are ineligible to apply. Only those who have completed MCA, BE / BTech in any discipline are eligible to apply. ME / MTech students must have passed only in Information Technology, Information Science and Computer Science. Only those who have secured at least 50% or more marks in Graduation (8 semesters in total), MCA (6 semesters in total), ME / MTech are eligible to apply.         Candidate should not have a gap of more than 1 year in the amount of academic education. Candidate should not take more than 4 years to complete BE / BTech. The candidate should not have any backlog by the time of attending the interview. Must be ready to work at any Capzemini location in the country. Be prepared to work in shifts if necessary.Must be willing to sign a service bond at the time of joining the company. Only shortlisted candidates will have the opportunity to participate in the selection process. ",
        },
        {
            id:"13",
            category:"Nature",
            img:"https://greenglobaltravel.com/wp-content/uploads/2016/08/Things-to-do-in-Malaysia-for-Nature-Lovers.jpg",
            det:"These Malayalis make Christmas clean and green It's time to celebrate our festivals in an eco-friendly manner showing the way towards the same! ",
            date:"TNN / Feb 26, 2021, 09:53 (IST)",
            description:"nGreen is the way to celebrate festivals in these days of climate emergency, but not everyone takes the effort for it. However, these Malayalis found ways to make Christmas eco-friendly and also help others do the same. Wonder how they make merry without hurting nature? Read on! Muhamma in Alappuzha district is known for coir making and a handful of youngsters there, belonging to St George Churchs Yuvadeepthi group, made an eco-friendly star that suits the spirit of their place. Made of 40 kg coir, the star is 22 feet tall and was made in about 10 days. Binu K Joseph, who was part of the group, tells us, We decided to make an eco-friendly star revering Pope Francis's message to lead an eco-friendly life. The star also houses our church's crib in the middle. The team will be giving away the coir for erosion control efforts, after the Christmas season Priya Ann Varghese has been making Christmas decors for long, but this year, she decided to make her collection as eco-friendly as possible. The former techies online profile @annzcreations, filled with the green tree ornaments, berries, pine cones and more is quite popular among Keralas young nature lovers too. ???Sourcing the raw materials for green decors isnt easy in Kerala. But, today environmentally-aware youngsters are seriously into recycling and eco-friendly decors, so I wanted to cater to them. The products, made of raw materials like bamboo, also last for a long time,??? says Priya.",
        },
        {
            id:"14",
            category:"Nature",
            img:"https://static.toiimg.com/thumb/msid-88744684,imgsize-116232,width-400,resizemode-4/88744684.jpg",
            det:"Fire accident 'act of God' only if caused by natural force:..",
            date:"TNN / Updated: March 7, 2022, 05:15 IST ",
            description:"NEW DELHI: The  has held that only those fire accidents could be termed acts of God which is inevitable and caused by external natural force and not due to active or passive negligence of human being. A force majeure clause or act of God is one exception that releases the party of its contractual obligations to an extent when events beyond their control take place and leave them unable to perform their part of the contract. It has also not been the case that the fire was a result of any mischief by any person. The fire that started around 12:55pm on April 10, 2003, could be brought under control only by 5am on April 11. When all the relevant factors are cumulatively taken into account, we find it difficult to accept that the fire and the resultant loss had been beyond the control of human agency,it said. ",
        },
        {
            id:"22",
            category:"Nature",
            img:"https://static.toiimg.com/thumb/msid-88218300,imgsize-165476,width-400,resizemode-4/88218300.jpg",
            det:"Natural, eco-friendly fibre weaves its way into Surats poly ..",
            date:"Yagnesh Bharat Mehta / TNN / Updated: March 11, 2021, 09 .",
            description:"SURAT: With the world consciously trying to leave at least one carbon footprint less in the sands of time, Suras textile hub, known for its polyester products, too is making efforts into weaving a greener thinking by adopting After introducing plant-based cupro fibre and viscose rayon, the city is now experimenting with fibre and yarn sourced from pineapple, birch wood, banana and bamboo. Few of the products are researched and developed locally, while some innovations made abroad are also trying to find its footing in the man-made fabric hub. Besides fabrics like nylon, cotton, cuprammonium, viscos,inen and a few others, almost 80 percent of fabric products at present are polyester based. ???Plantain stems weighing around 45kg each were earlier considered waste and would actually incur the farmer an additional Rs 15,000 per hectare cost for removal of the eco-trash. But now, with the innovation of plant-based fibre, farmers can earn from that waste, said ",
        },
        {
            id:"15",
            category:"Nature",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLft0QYhp6YeBFJpadhB8w8qVmKVEBmhB62Q&usqp=CAU",
            det:"These Malayalis make Christmas clean and green It's time to celebrate our festivals in an eco-friendly manner showing the way towards the same! ",
            date:"TNN / Feb 26, 2021, 09:53 (IST)",
            description:"nGreen is the way to celebrate festivals in these days of climate emergency, but not everyone takes the effort for it. However, these Malayalis found ways to make Christmas eco-friendly and also help others do the same. Wonder how they make merry without hurting nature? Read on! Muhamma in Alappuzha district is known for coir making and a handful of youngsters there, belonging to St George Churchs Yuvadeepthi group, made an eco-friendly star that suits the spirit of their place. Made of 40 kg coir, the star is 22 feet tall and was made in about 10 days. Binu K Joseph, who was part of the group, tells us, We decided to make an eco-friendly star revering Pope Francis's message to lead an eco-friendly life. The star also houses our church's crib in the middle. The team will be giving away the coir for erosion control efforts, after the Christmas season Priya Ann Varghese has been making Christmas decors for long, but this year, she decided to make her collection as eco-friendly as possible. The former techies online profile @annzcreations, filled with the green tree ornaments, berries, pine cones and more is quite popular among Keralas young nature lovers too. ???Sourcing the raw materials for green decors isnt easy in Kerala. But, today environmentally-aware youngsters are seriously into recycling and eco-friendly decors, so I wanted to cater to them. The products, made of raw materials like bamboo, also last for a long time,??? says Priya.",
        },
    ])
    return(
        <CategoryContext.Provider value={[category]}>
            {props.children}
        </CategoryContext.Provider>
    )
}