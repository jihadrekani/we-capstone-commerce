import React from 'react';
import Layout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';



    
   /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    type: ' Toyota Camry',
    model: '2020',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://thumbs.dreamstime.com/b/dubai-uae-november-taxi-car-toyota-camry-city-street-toyota-camry-133407230.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$21000',
  }, {
    id: 2,
    type: ' Toyota Camry',
    model: '2021',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://thumbs.dreamstime.com/b/toyota-camry-moscow-russia-may-yellow-taxi-car-city-street-121804730.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$23000',
  }, {
    id: 1,
    type: 'Nissan',
    model: '2021',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://www.intelligenttransport.com/wp-content/uploads/Dubai-Taxi-3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$20000',
  }, {
    id: 1,
    type: 'Ford',
    model: '2020',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://cdn.motor1.com/images/mgl/r8b3E/s3/ford-fusion-and-transit-connect-taxi.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$18000',
  }, {
    id: 1,
    type: 'Skoda',
    model: '2020',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://previews.123rf.com/images/joseh51/joseh512007/joseh51200705467/151745197-budapest-hungary-july-15-2020-view-of-a-traditional-yellow-hungarian-taxi-for-passengers-driving-thr.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$25000',
  }, {
    id: 1,
    type: 'Skoda',
    model: '2021',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://thumbs.dreamstime.com/b/praga-republika-czech-%C5%BC%C3%B3%C5%82ty-skoda-octavia-iii-taxi-samoch%C3%B3d-parkuj%C4%85cy-104132065.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$33000',
  }, {
    id: 1,
    type: 'Skoda',
    model: '2022',
    color: 'Yellow',
    href: '#',
    imageSrc: 'https://www.athenseasytransfers.gr/wp-content/uploads/2015/08/skodaoctaviataxitimes.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$28000',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white" >
          <Navbar />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Taxis Section</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.type}{product.model}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>



    
  )
}




