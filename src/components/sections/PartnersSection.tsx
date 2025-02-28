'use client';

const partners = [
  { name: 'Zid', country: 'SAUDI ARABIA', logo: '/partners/zid.png' },
  { name: 'Digital Weers', country: 'TURKIYE', logo: '/partners/digitalweers.png' },
  { name: 'Sedalia', country: 'KUWAIT', logo: '/partners/sedalia.png' },
  { name: 'Ethis', country: 'MALAYSIA', logo: '/partners/ethis.png' },
  { name: 'Algaecell', country: 'UNITED KINGDOM', logo: '/partners/algaecell.png' },
  { name: 'Growth Mobile', country: 'KUWAIT', logo: '/partners/growthmobile.png' },
  { name: 'Smplcty', country: 'USA', logo: '/partners/smplcty.png' },
  { name: 'Be Public', country: 'USA', logo: '/partners/bepublic.png' },
  { name: 'NTG', country: 'CANADA', logo: '/partners/ntg.png' },
  { name: 'Ma3asid', country: 'TURKIYE', logo: '/partners/ma3asid.png' },
  { name: 'The Productive Muslim', country: 'USA', logo: '/partners/productivemuslim.png' },
  { name: 'Gladha Tech', country: 'GERMANY', logo: '/partners/gladhatech.png' },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          A GLIMPSE OF WHO WE WORKED WITH
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[3/2] relative bg-gray-100 rounded-lg mb-4 p-4">
                {/* Replace with actual partner logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">{partner.name}</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">{partner.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 