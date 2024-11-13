import React, { useState } from 'react';
import ExternalOpportunitiesModal from '../components/events/ExternalOpportunitiesModal';

const eventData = [
  {
    icon: '🎨',
    title: 'UX Days at Siebel Center for Design',
    location: 'Siebel Center for Design',
    date: 'Friday, March 22 | 11:30 AM to 6:00 PM',
    time: 'Saturday, March 23 | 8:45 AM - 6:00 PM',
    description:
      "UX Days 2024 is not just a conference; it's an immersive journey designed to empower students pursuing careers in UX design. We're expanding from a single-day event to a thrilling two-day experience from March 22nd to 23rd, packed with enlightening sessions, inspiring speakers, and unparalleled networking opportunities. Registration is $25 for one day, or $50 for the full conference.",
    link: 'https://en.wikipedia.org/wiki/Link',
  },
  {
    icon: '🔗',
    title: 'Web Development Bootcamp',
    location: 'Online',
    date: 'Monday, April 1 | 10:00 AM to 4:00 PM',
    time: 'Monday, April 1 | 10:00 AM - 4:00 PM',
    description:
      'Join us for an intensive full-day bootcamp covering the fundamentals of web development. From HTML and CSS to JavaScript, this event is perfect for beginners eager to start building websites.',
    link: 'https://en.wikipedia.org/wiki/Bootcamp',
  },
  {
    icon: '💻',
    title: 'Hackathon 2024',
    location: 'Tech Innovation Center',
    date: 'Friday, May 10 | 6:00 PM to 10:00 PM',
    time: 'Saturday, May 11 | 9:00 AM - 9:00 PM',
    description:
      'A 24-hour coding challenge where participants work in teams to create innovative tech solutions. Great prizes await the winning team, as well as networking opportunities with industry leaders.',
    link: 'https://en.wikipedia.org/wiki/Hackathon',
  },
  {
    icon: '🎤',
    title: 'Design Thinking Conference',
    location: 'Chicago Convention Center',
    date: 'Saturday, June 5 | 9:00 AM to 5:00 PM',
    time: 'Saturday, June 5 | 9:00 AM - 5:00 PM',
    description:
      'Explore the world of design thinking with workshops and talks from top designers. Learn about empathy, ideation, and prototyping through interactive sessions designed to give you real-world experience.',
    link: 'https://en.wikipedia.org/wiki/DesignThinking',
  },
  {
    icon: '🎮',
    title: 'Game Development Summit',
    location: 'Los Angeles Convention Center',
    date: 'Friday, July 19 | 10:00 AM to 6:00 PM',
    time: 'Saturday, July 20 | 9:00 AM - 5:00 PM',
    description:
      'Join industry experts at the Game Development Summit to learn about the latest trends in game design, VR development, and indie game publishing. Connect with like-minded professionals and potential collaborators.',
    link: 'https://en.wikipedia.org/wiki/GameDevelopment',
  },
  {
    icon: '🌐',
    title: 'Digital Marketing Conference',
    location: 'Online',
    date: 'Thursday, August 22 | 12:00 PM to 3:00 PM',
    time: 'Thursday, August 22 | 12:00 PM - 3:00 PM',
    description:
      'A virtual event that brings together digital marketing professionals from around the globe to discuss the future of online advertising, SEO, social media strategies, and more. Perfect for marketers looking to stay ahead of the curve.',
    link: 'https://en.wikipedia.org/wiki/DigitalMarketing',
  },
];

export default function ExternalOpportunitiesSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Show Event
      </button>
      <ExternalOpportunitiesModal
        category="Conferences and Events"
        data={eventData}
        isOpen={isModalOpen}
        closeModal={toggleModal}
      />
    </div>
  );
}
