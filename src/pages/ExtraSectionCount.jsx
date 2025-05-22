import React from 'react';
import CountUp from 'react-countup';

const ExtraSectionCount = () => {
    const stats = [
    {
      id: 1,
      title: 'Total Listings',
      count: 1540,
      image: 'https://cdn-icons-png.flaticon.com/512/833/833524.png',
      description: 'Find the perfect room from thousands of listings.',
    },
    {
      id: 2,
      title: 'Happy Roommates',
      count: 890,
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      description: 'People matched with great roommates!',
    },
    {
      id: 3,
      title: 'Cities Covered',
      count: 64,
      image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      description: 'We help people find roommates in multiple cities.',
    },
  ];
    return ( <>
        {/* <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5 px-5 rounded-xl bg-[#F2F8FC]'>
            
        </div> */}

        <section className="py-12 bg-[#F2F8FC]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl"
            >
              <img src={item.image} alt={item.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                <CountUp end={item.count} duration={5} />
              </p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    );
};

export default ExtraSectionCount;