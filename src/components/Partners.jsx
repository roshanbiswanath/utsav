import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'Twinverse', logo: 'twinverse.png' },
        { name: 'Prelude', logo: 'prelude.jpg' },
        // Add more sponsors here
    ];

    return (
        <div className="partners-grid flex flex-col pb-8 px-5">
            <h2 className='md:text-5xl text-3xl font-bold my-8'>Our Patners</h2>
            <div className="partners-divider">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-item">
                        <img src={partner.logo} alt={partner.name}
                            className="partner-logo rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;