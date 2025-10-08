"use client";

import React, { useState } from 'react';

// --- UPDATED DUMMY DATA ---
// To add a new product, just add a new object to this array.
const productData = [
    {
        id: 'gear-pumps',
        title: 'Gear Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
        description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
        keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
        details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
        gallery: [
            'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '5-150 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 250 bar' },
            { name: 'Speed Range', value: '500-4000 rpm' },
            { name: 'Fluid Viscosity', value: '10-500 cSt' },
        ],
    },
    {
        id: 'piston-pumps',
        title: 'Piston Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
        description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
        keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
        details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
        gallery: [
            'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '20-500 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 450 bar' },
            { name: 'Control Options', value: 'Pressure, Flow, Power' },
            { name: 'Mounting', value: 'ISO, SAE' },
        ],
    },
    {
        id: 'vane-pumps',
        title: 'Vane Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
        description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
        keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
        details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
        gallery: [
            'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '10-200 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 210 bar' },
            { name: 'Noise Level', value: '< 70 dBA' },
            { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
        ],
    },
    {
        id: 'hydraulic-motors',
        title: 'Hydraulic Motors',
        imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
        description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
        keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
        details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
        gallery: [
            'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
        ],
        specifications: [
            { name: 'Torque Range', value: '50-2000 Nm' },
            { name: 'Speed', value: 'Up to 3000 rpm' },
            { name: 'Type', value: 'Gerotor, Orbital, Piston' },
            { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
        ],
    },
      {
        id: 'gea-pumps',
        title: 'Gear Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
        description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
        keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
        details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
        gallery: [
            'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '5-150 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 250 bar' },
            { name: 'Speed Range', value: '500-4000 rpm' },
            { name: 'Fluid Viscosity', value: '10-500 cSt' },
        ],
    },
    {
        id: 'piston-pups',
        title: 'Piston Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
        description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
        keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
        details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
        gallery: [
            'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '20-500 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 450 bar' },
            { name: 'Control Options', value: 'Pressure, Flow, Power' },
            { name: 'Mounting', value: 'ISO, SAE' },
        ],
    },
    {
        id: 'vae-pumps',
        title: 'Vane Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
        description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
        keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
        details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
        gallery: [
            'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '10-200 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 210 bar' },
            { name: 'Noise Level', value: '< 70 dBA' },
            { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
        ],
    },
    {
        id: 'hydralic-motors',
        title: 'Hydraulic Motors',
        imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
        description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
        keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
        details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
        gallery: [
            'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
        ],
        specifications: [
            { name: 'Torque Range', value: '50-2000 Nm' },
            { name: 'Speed', value: 'Up to 3000 rpm' },
            { name: 'Type', value: 'Gerotor, Orbital, Piston' },
            { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
        ],
    },
      {
        id: 'gear-umps',
        title: 'Gear Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=1920&auto=format&fit=crop',
        description: 'Robust and reliable, ideal for a wide range of fluid transfer applications in industrial and mobile settings.',
        keyFeatures: ['High Efficiency', 'Durable Cast Iron Body', 'Compact Design'],
        details: 'Our gear pumps are engineered for high performance and long service life. They operate efficiently under various pressures and are suitable for handling oils, fuels, and other hydraulic fluids. The simple construction with few moving parts ensures minimal maintenance and maximum uptime.',
        gallery: [
            'https://images.unsplash.com/photo-1616893452202-a6a64531f2bb?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Gear+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Gear+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '5-150 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 250 bar' },
            { name: 'Speed Range', value: '500-4000 rpm' },
            { name: 'Fluid Viscosity', value: '10-500 cSt' },
        ],
    },
    {
        id: 'piston-pump',
        title: 'Piston Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=1920&auto=format&fit=crop',
        description: 'High-pressure capabilities and precision control for the most demanding hydraulic systems.',
        keyFeatures: ['Variable Displacement', 'High Pressure Tolerance', 'Low Noise Operation'],
        details: 'The AXP series of piston pumps provides exceptional power density and precision. Featuring a variable displacement swashplate design, they are perfect for closed and open-loop circuits. Their robust construction ensures reliability in heavy-duty applications like construction and mining.',
        gallery: [
            'https://images.unsplash.com/photo-1599767253457-3a9b3a5c1f6a?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Piston+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Piston+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '20-500 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 450 bar' },
            { name: 'Control Options', value: 'Pressure, Flow, Power' },
            { name: 'Mounting', value: 'ISO, SAE' },
        ],
    },
    {
        id: 'vane-pum',
        title: 'Vane Pumps',
        imgSrc: 'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=1920&auto=format&fit=crop',
        description: 'Known for their low noise operation and excellent performance in medium-pressure applications.',
        keyFeatures: ['Low Pulsation Flow', 'Quiet Operation', 'Replaceable Cartridge'],
        details: 'Vane pumps are the ideal choice for applications requiring a smooth, low-pulsation flow and quiet operation. Their unique design minimizes pressure ripples, making them suitable for industrial machinery, power steering systems, and automation. They are available in fixed and variable displacement models.',
        gallery: [
            'https://images.unsplash.com/photo-1543285749-9f4a1b8753a3?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Vane+Pump+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Vane+Pump+View+3'
        ],
        specifications: [
            { name: 'Displacement', value: '10-200 cm³/rev' },
            { name: 'Max Pressure', value: 'Up to 210 bar' },
            { name: 'Noise Level', value: '< 70 dBA' },
            { name: 'Cartridge Kit', value: 'Replaceable for easy service' },
        ],
    },
    {
        id: 'hydraulic-motor',
        title: 'Hydraulic Motors',
        imgSrc: 'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=1920&auto=format&fit=crop',
        description: 'Efficiently convert hydraulic energy into mechanical power for various industrial uses.',
        keyFeatures: ['High Starting Torque', 'Wide Speed Range', 'Bi-directional Rotation'],
        details: 'Our hydraulic motors offer high torque and excellent efficiency across a wide speed range. Designed for durability, they perform reliably in the toughest conditions. We offer a variety of motor types, including gear, vane, and piston motors, to suit applications from conveyors to vehicle propulsion.',
        gallery: [
            'https://images.unsplash.com/photo-1605330353272-5d46808759b4?q=80&w=800&auto=format&fit=crop',
            'https://placehold.co/800x600/334155/ffffff?text=Motor+View+2',
            'https://placehold.co/800x600/475569/ffffff?text=Motor+View+3'
        ],
        specifications: [
            { name: 'Torque Range', value: '50-2000 Nm' },
            { name: 'Speed', value: 'Up to 3000 rpm' },
            { name: 'Type', value: 'Gerotor, Orbital, Piston' },
            { name: 'Shaft Options', value: 'Splined, Keyed, Tapered' },
        ],
    },
];

// --- NEW COMPONENT for Product Detail View ---
const ProductDetailView = ({ category, onBack }) => {
    const [mainImage, setMainImage] = useState(category.gallery[0]);

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <button
                    onClick={onBack}
                    className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to All Products
                </button>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Image Gallery */}
                    <div>
                        <img 
                            src={mainImage} 
                            alt={category.title} 
                            className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover aspect-video"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/e2e8f0/4a5568?text=Image+Not+Found'; }}
                        />
                        <div className="grid grid-cols-4 gap-2">
                            {category.gallery.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${category.title} view ${index + 1}`}
                                    className={`w-full h-auto rounded-md cursor-pointer object-cover aspect-video transition-all ${mainImage === img ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
                                    onClick={() => setMainImage(img)}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x150/e2e8f0/4a5568?text=Thumb'; }}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Product Details */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{category.details}</p>

                        {/* KEY FEATURES SECTION - ADDED */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-t pt-6">Key Features</h3>
                        <ul className="space-y-2 mb-6">
                            {category.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-t pt-6">Specifications</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border">
                                <tbody>
                                    {category.specifications.map((spec, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">{spec.name}</td>
                                            <td className="py-3 px-4 text-gray-600">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         <a href="/contact" className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                            Request a Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- MODIFIED Component for individual product category cards ---
const ProductCategoryCard = ({ imgSrc, title, description, keyFeatures, onClick }) => (
    <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 group cursor-pointer flex flex-col"
        onClick={onClick}
    >
        <div className="relative h-56">
            <img 
                src={imgSrc} 
                alt={title} 
                className="w-full h-full object-cover" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/4a5568?text=Pump'; }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
            {/* KEY FEATURES on card - ADDED */}
            <div className="border-t pt-3 mt-auto">
                 <ul className="text-xs text-gray-500 space-y-1">
                    {keyFeatures.slice(0, 2).map((feature, index) => (
                       <li key={index} className="flex items-center">
                           <svg className="w-3 h-3 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                           {feature}
                       </li>
                    ))}
                 </ul>
            </div>
            <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-4 block">
                View Details &rarr;
            </span>
        </div>
    </div>
);


// --- MAIN PAGE COMPONENT ---
export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Handler to set the selected category
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Handler to go back to the list
    const handleBack = () => {
        setSelectedCategory(null);
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white py-20 md:py-32">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594499468121-f45e83e0e4c8?q=80&w=1920&auto=format&fit=crop')" }}
                ></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Products</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        Engineered for durability and performance, our hydraulic pumps are the cornerstone of reliable machinery.
                    </p>
                </div>
            </section>

            {/* Conditional Rendering: Show grid or detail view */}
            {selectedCategory ? (
                <ProductDetailView category={selectedCategory} onBack={handleBack} />
            ) : (
                <>
                    {/* Product Categories Section */}
                    <section className="py-16 md:py-24">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800">Product Categories</h2>
                                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Explore our extensive range of hydraulic solutions tailored to your needs.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {productData.map((category) => (
                                    <ProductCategoryCard 
                                        key={category.id} 
                                        {...category} 
                                        onClick={() => handleCategoryClick(category)} 
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    
                    {/* WHY CHOOSE US SECTION - ADDED */}
                    <section className="bg-white py-16 md:py-24">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Pumps?</h2>
                                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We deliver more than just parts; we provide comprehensive hydraulic solutions.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div className="p-6">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
                                    <p className="text-gray-600">Every component is manufactured with precision and tested rigorously to ensure peak performance and longevity.</p>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                                    <p className="text-gray-600">Our team of hydraulic specialists is ready to assist you in selecting the perfect product for your application.</p>
                                </div>
                                <div className="p-6">
                                     <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                                    <p className="text-gray-600">We can engineer and manufacture custom hydraulic components to meet your unique specifications.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                     {/* CTA Section */}
                    <section className="bg-gray-800 text-white">
                        <div className="container mx-auto px-4 py-16 text-center">
                            <h2 className="text-3xl font-bold">Have a Custom Requirement?</h2>
                            <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
                                Our engineering team is ready to collaborate with you to design a hydraulic solution that meets your exact specifications.
                            </p>
                            <a href="/contact" className="mt-6 inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
                                Get in Touch
                            </a>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

