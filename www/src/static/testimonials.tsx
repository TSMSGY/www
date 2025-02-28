interface Testimonial {
  author: string;
  quote: string;
  title: string;
  avatarUrl: string; // Added avatarUrl field
}

// Function to generate a randomuser.me avatar URL based on a seed
const generateAvatarUrl = (seed: number): string => {
  return `https://randomuser.me/api/portraits/women/${seed}.jpg`; // Or 'men' if appropriate
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "As a surgical resident, I found the simulator incredibly helpful in preparing for complex procedures. The realistic haptics and detailed anatomy made a huge difference in my confidence and performance in the OR.",
    author: "Dr. Michael Brown",
    title: "Surgical Resident",
    avatarUrl: generateAvatarUrl(3), // Seed 3
  },
  {
    quote:
      "Our hospital has seen a significant improvement in surgical outcomes since implementing these simulators. The ability to practice and refine techniques in a safe environment has been invaluable.",
    author: "Sarah Williams",
    title: "Hospital Administrator",
    avatarUrl: generateAvatarUrl(4), // Seed 4
  },
  {
    quote:
      "The TrueSim system is a game-changer for surgical education. It allows us to provide our students with a level of training that was simply not possible before.",
    author: "Professor David Lee",
    title: "Professor of Surgery",
    avatarUrl: generateAvatarUrl(5), // Seed 5
  },
  {
    quote:
      "I was initially skeptical about the value of surgical simulation, but after using the TrueSim simulator, I'm a convert. The realism is truly impressive, and the feedback is incredibly helpful.",
    author: "Dr. Emily Chen",
    title: "Experienced Surgeon",
    avatarUrl: generateAvatarUrl(6), // Seed 6
  },
  {
    quote:
      "The simulator's modular design allows us to customize the training experience to meet the specific needs of our surgeons. This flexibility is a major advantage.",
    author: "Robert Garcia",
    title: "Training Coordinator",
    avatarUrl: generateAvatarUrl(7), // Seed 7
  },
  {
    quote:
      "The TrueSim team has been incredibly supportive throughout the implementation process. They've provided excellent training and ongoing support.",
    author: "Maria Rodriguez",
    title: "Surgical Simulation Specialist",
    avatarUrl: generateAvatarUrl(8), // Seed 8
  },
  {
    quote:
      "The simulator's ability to track and analyze performance data is invaluable for identifying areas where surgeons need to improve. This data-driven approach to training is a major step forward.",
    author: "Dr. Kevin O'Connell",
    title: "Director of Research",
    avatarUrl: generateAvatarUrl(9), // Seed 9
  },
  {
    quote:
      "I highly recommend TrueSim to any hospital or training program looking to improve surgical outcomes and enhance surgical education.",
    author: "Dr. Aisha Khan",
    title: "Chief of Surgery",
    avatarUrl: generateAvatarUrl(10), // Seed 10
  },
  {
    quote:
      "The simulator is so realistic, it's like being in the OR without the pressure. I can experiment with different techniques and learn from my mistakes without putting patients at risk.",
    author: "Dr. Ben Carter",
    title: "Surgical Fellow",
    avatarUrl: generateAvatarUrl(11), // Seed 11
  },
  {
    quote:
      "Our residents are more confident and better prepared for surgery thanks to TrueSim. It's an investment that pays off in improved patient care.",
    author: "Dr. Olivia Davis",
    title: "Program Director",
    avatarUrl: generateAvatarUrl(12), // Seed 12
  },
  {
    quote:
      "TrueSim has transformed our surgical training program. It's an essential tool for preparing the next generation of surgeons.",
    author: "Dr. Samuel Wilson",
    title: "Chairman of Surgery",
    avatarUrl: generateAvatarUrl(13), // Seed 13
  },
  {
    quote:
      "The simulator's advanced features, such as the ability to simulate complications, are incredibly valuable for training surgeons to handle unexpected situations.",
    author: "Dr. Grace Thompson",
    title: "Surgical Simulation Instructor",
    avatarUrl: generateAvatarUrl(14), // Seed 14
  },
  {
    quote:
      "TrueSim is not just a simulator; it's a complete surgical training solution.",
    author: "Dr. Henry Martinez",
    title: "Surgical Education Consultant",
    avatarUrl: generateAvatarUrl(15), // Seed 15
  },
];

export default testimonials;
