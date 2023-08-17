const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.png',
      isFeatured: true,
    },
    {
      id: 'e4',
      title: 'Mastering Web Development',
      description:
        'Dive into the world of web development with this comprehensive event. From HTML and CSS basics to advanced JavaScript frameworks, you will gain the skills to create stunning websites.',
      location: 'TechHub Avenue 8, 54321 Codeville',
      date: '2023-03-15',
      image: 'images/coding-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e5',
      title: 'Artificial Intelligence Unleashed',
      description:
        'Discover the power of AI in this event that covers machine learning, neural networks, and real-world applications. Join us to explore the fascinating field of artificial intelligence.',
      location: 'AI Plaza 3, 67890 Techopolis',
      date: '2023-06-20',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e6',
      title: 'The Future of Technology Summit',
      description:
        'Get a glimpse of the future at this tech summit. From virtual reality to quantum computing, leading experts will share insights about the upcoming technological advancements.',
      location: 'Innovation Hall 9, 30303 Futuria',
      date: '2023-09-05',
      image: 'images/extrovert-event.png',
      isFeatured: false,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  