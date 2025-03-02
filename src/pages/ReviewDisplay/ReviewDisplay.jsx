import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const sampleReview = [
  {
    id: 1,
    userName: 'John Doe',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    comment:
      'Al Faisal Kashmiri Restaurant offers an authentic dining experience with flavors that transport you straight to Kashmir!',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4,
    comment:
      'The food at Al Faisal Kashmiri is delicious, and the ambiance is perfect for a relaxing meal. I’ll definitely return!',
  },
  {
    id: 3,
    userName: 'Alex',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    rating: 5,
    comment:
      "Al Faisal Kashmiri Restaurant's lamb curry was incredible. The spices were just right, and I can't wait to come back!",
  },
  {
    id: 4,
    userName: 'Emma Brown',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4.5,
    comment:
      'Al Faisal Kashmiri provided an amazing dining experience with authentic Kashmiri flavors that impressed my whole family.',
  },
  {
    id: 5,
    userName: 'Mark Johnson',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    rating: 5,
    comment:
      'The service and food quality at Al Faisal Kashmiri are top-notch. The flavors are unmatched!',
  },
  {
    id: 6,
    userName: 'Sarah Wilson',
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
    rating: 4.5,
    comment:
      'I was impressed by the freshness and quality of the ingredients at Al Faisal Kashmiri Restaurant. Great for authentic food lovers!',
  },
  {
    id: 7,
    userName: 'Kalpona Chaula',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    rating: 5,
    comment:
      'Al Faisal Kashmiri has an incredible team. They served us authentic food with excellent hospitality. Highly recommended!',
  },
  {
    id: 8,
    userName: 'Lisa Green',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    rating: 4.5,
    comment:
      'I loved the Kashmiri tea and authentic dishes at Al Faisal Kashmiri. The attention to detail made it a memorable experience.',
  },
  {
    id: 9,
    userName: 'Santa Savanta',
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    rating: 5,
    comment:
      'Al Faisal Kashmiri Restaurant exceeded my expectations. The presentation and flavors were phenomenal!',
  },
  {
    id: 10,
    userName: 'Emily Clark',
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
    rating: 4,
    comment:
      'Choosing Al Faisal Kashmiri for dinner was a great choice. Their attention to flavor and quality is evident in every dish.',
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sampleReview.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className=" my-16">
      <h2
        style={{ fontFamily: 'Dancing Script, cursive' }}
        className="lg:text-5xl text-4xl text-center font-bold mt-10  text-[#6582F6]">
        Customer Reviews
      </h2>

      <div className="flex flex-col items-center my-8 px-4">
        <ReviewCard review={sampleReview[currentIndex]} />
      </div>
    </div>
  );
};

export default ReviewCarousel;
