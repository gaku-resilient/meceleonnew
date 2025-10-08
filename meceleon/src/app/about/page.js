// "use client"; // This directive marks the component as a Client Component

// import React from 'react';

// // Placeholder for team member images. Replace with actual image paths.
// const TeamMemberCard = ({ imageSrc, name, title }) => (
//     <div className="text-center">
//         <img 
//             className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-lg" 
//             src={imageSrc} 
//             alt={`Photo of ${name}`}
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/e2e8f0/4a5568?text=Member'; }}
//         />
//         <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
//         <p className="text-gray-600">{title}</p>
//     </div>
// );

// // Component for Core Values
// const ValueCard = ({ icon, title, description }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
//         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
//         <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
// );

// export default function AboutPage() {
//     return (
//         <div className="bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative bg-gray-800 text-white py-20 md:py-32">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center opacity-30" 
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop')" }}
//                 ></div>
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">About Meceleon</h1>
//                     <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
//                         Pioneering excellence in hydraulic engineering since our inception. Discover our story, our mission, and the people who make it all happen.
//                     </p>
//                 </div>
//             </section>

//             {/* Our Story Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
//                             <p className="text-gray-600 mb-4">
//                                 Founded with a vision to revolutionize the hydraulic industry, Meceleon began as a small workshop with a big dream. Our commitment to quality and innovation quickly set us apart, allowing us to grow into a trusted partner for industries worldwide.
//                             </p>
//                             <p className="text-gray-600">
//                                 From our first custom-designed pump to our current state-of-the-art product line, our journey has been driven by a passion for solving complex challenges and a relentless pursuit of engineering perfection.
//                             </p>
//                         </div>
//                         <div>
//                             <img 
//                                 src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" 
//                                 alt="Team collaborating in a modern office" 
//                                 className="rounded-lg shadow-xl w-full h-auto"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Mission and Vision Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-10">
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To design, manufacture, and deliver the most reliable and efficient hydraulic pumps, empowering our clients to achieve new heights of productivity and performance. We are dedicated to providing exceptional customer service and technical support.
//                             </p>
//                         </div>
//                         <div className="bg-gray-50 p-8 rounded-lg">
//                             <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 To be the global leader in hydraulic solutions, recognized for our innovative technology, sustainable practices, and unwavering commitment to quality. We aim to shape the future of the industry through continuous research and development.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Core Values Section */}
//             <section className="py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
//                          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
//                             title="Integrity"
//                             description="We operate with honesty and uphold the highest ethical standards in all our actions."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>}
//                             title="Quality"
//                             description="From materials to manufacturing, we are committed to delivering unparalleled quality."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>}
//                             title="Innovation"
//                             description="We constantly explore new technologies to push the boundaries of what's possible."
//                         />
//                         <ValueCard
//                             icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
//                             title="Partnership"
//                             description="We build lasting relationships with our clients, working together to achieve success."
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Team Section */}
//             <section className="bg-white py-16 md:py-24">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership</h2>
//                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The experienced team dedicated to driving our company forward.</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/2d3748/ffffff?text=CEO" name="Alex Johnson" title="Founder & CEO" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/4a5568/ffffff?text=CTO" name="Jane Doe" title="Chief Technology Officer" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/718096/ffffff?text=COO" name="Samuel Lee" title="Chief Operating Officer" />
//                         <TeamMemberCard imageSrc="https://placehold.co/160x160/a0aec0/ffffff?text=CSO" name="Emily White" title="Head of Sales" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }


"use client"; // This directive marks the component as a Client Component

import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

// Placeholder for team member images. Replace with actual image paths.
const TeamMemberCard = ({ imageSrc, name, title }) => (
    <div className="text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg">
            <Image 
                src={imageSrc} 
                alt={`Photo of ${name}`}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600">{title}</p>
    </div>
);

// Component for Core Values
const ValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{title}</h3>
        <p className="text-center text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

export default function AboutPage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white py-20 md:py-32">
                <div className="absolute inset-0 opacity-30">
                    <Image 
                        src="https://images.unsplash.com/photo-1555526242-a3a8a05f314c?q=80&w=1920&auto=format&fit=crop"
                        alt="Abstract background image"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">About Meceleon</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        Pioneering excellence in hydraulic engineering since our inception. Discover our story, our mission, and the people who make it all happen.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a vision to revolutionize the hydraulic industry, Meceleon began as a small workshop with a big dream. Our commitment to quality and innovation quickly set us apart, allowing us to grow into a trusted partner for industries worldwide.
                            </p>
                            <p className="text-gray-600">
                                From our first custom-designed pump to our current state-of-the-art product line, our journey has been driven by a passion for solving complex challenges and a relentless pursuit of engineering perfection.
                            </p>
                        </div>
                        <div className="relative w-full h-80 rounded-lg shadow-xl overflow-hidden">
                             <Image 
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop" 
                                alt="Team collaborating in a modern office" 
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To design, manufacture, and deliver the most reliable and efficient hydraulic pumps, empowering our clients to achieve new heights of productivity and performance. We are dedicated to providing exceptional customer service and technical support.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the global leader in hydraulic solutions, recognized for our innovative technology, sustainable practices, and unwavering commitment to quality. We aim to shape the future of the industry through continuous research and development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
                         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                            title="Integrity"
                            description="We operate with honesty and uphold the highest ethical standards in all our actions."
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>}
                            title="Quality"
                            description="From materials to manufacturing, we are committed to delivering unparalleled quality."
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>}
                            title="Innovation"
                            description="We constantly explore new technologies to push the boundaries of what's possible."
                        />
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                            title="Partnership"
                            description="We build lasting relationships with our clients, working together to achieve success."
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Meet Our Leadership</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The experienced team dedicated to driving our company forward.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        <TeamMemberCard imageSrc="https://placehold.co/160x160/2d3748/ffffff?text=CEO" name="Alex Johnson" title="Founder & CEO" />
                        <TeamMemberCard imageSrc="https://placehold.co/160x160/4a5568/ffffff?text=CTO" name="Jane Doe" title="Chief Technology Officer" />
                        <TeamMemberCard imageSrc="https://placehold.co/160x160/718096/ffffff?text=COO" name="Samuel Lee" title="Chief Operating Officer" />
                        <TeamMemberCard imageSrc="https://placehold.co/160x160/a0aec0/ffffff?text=CSO" name="Emily White" title="Head of Sales" />
                    </div>
                </div>
            </section>
        </div>
    );
}

