'use client';

const ApproachSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike traditional business management consultancy firms, we bring together our business development
                  methods, innovation and technologies to reveal how growing companies can survive in today's competitive
                  world in order to achieve their business and financial goals.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a group of business innovation and growth professionals with extensive expertise in bringing
                  together our business development methods.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Our track record of performance proves that clear communication and expert collaboration will increase
                  your bottom line.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg">
              {/* Add your illustration here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 