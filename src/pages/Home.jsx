import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomerFed from "../components/CustomerFed";
import WhyChoose from "../components/WhyChoose";
import FAQ from "../components/FAQ";


const Home = () => {
  const [boxes, setBoxes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = "Home | Subscription Box";
  }, []);


  useEffect(() => {
    fetch("/subscriptionBoxes.json")
      .then(res => res.json())
      .then(data => setBoxes(data));
  }, []);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 6);
  };
  

  return (
    <div className="p-6">
     <div className="home-wrap ">
          <div className="slide-container mb-24">
            
          <div className="w-full h-screen ">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="h-full"
            >
              {boxes.map((box) => (
                <SwiperSlide key={box.id}>
                  <div className="relative w-full h-screen">
                    
                    <img
                      src={box.thumbnail}
                      alt={box.name}
                      className="w-full h-full object-cover"
                    />


                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white p-6 max-w-2xl rounded-lg shadow-lg">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">{box.name}</h2>
                        <p className="text-lg md:text-xl mb-6">{box.description}</p>
                        <p className="text-2xl font-semibold mb-4">${box.price}</p>
                        <button className="btn btn-primary text-white text-lg px-6 py-3">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

          <h2 className="text-2xl font-bold my-6">Subscription Services</h2>
<div className="grid md:grid-cols-3 gap-6">
  {boxes.slice(0, visibleCount).map(box => (
    <div key={box.id} className="bg-white rounded-lg shadow-md p-4">
      <img src={box.banner} alt={box.name} className="rounded mb-3 h-60 w-full object-cover" />
      <h3 className="text-lg font-semibold">{box.name}</h3>
      <p className="text-sm text-gray-500">{box.tech_category}</p>
      <p className="mt-2 font-bold">${box.price} / {box.frequency}</p>
      <Link to={`/services/${box.id}`}>
        <button className="btn btn-sm  text-lg btn-primary mt-3">View Detaila</button>
      </Link>
    </div>
  ))}
</div>

{visibleCount < boxes.length && (
  <div className="flex justify-center mt-6 ">
    <button
      onClick={handleViewMore}
      className="btn btn-outline text-lg btn-primary"
    >
      View More
    </button>
  </div>
)}


      {/* Extra Section 1 */}
      <div className="mt-24">
      <WhyChoose />
      </div>

      <div className="mt-24">
      <FAQ />
      </div>

      <div className="mt-24">              
      {/* ...other home content... */}
      <CustomerFed />
    </div>
     </div>
    </div>
  );
};

export default Home;
