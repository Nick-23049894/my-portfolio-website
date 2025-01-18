import TaskManager from '../assets/images/Task-Manager.png';
import PizzaCo from '../assets/images/Nick’s-Pizza-Co.png';
import BrikHaven from '../assets/images/Brik-Haven.png';
// import swiftApp from '../assets/images/SwiftApp.png';

const projectsData = [
    {
        category: 'Web Apps',
        projects: [
            {
                name: 'Task Manager',
                description: 'A simple task management app for organizing your daily work.',
                applicationsUsed: ['React', 'Node.js', 'MongoDB'],
                coverImage: TaskManager,
                images: ['path/to/task-manager-1.jpg', 'path/to/task-manager-2.jpg'],
                links: [
                    { label: 'Live Demo', url: 'https://c237-miniproject-irid.onrender.com/' },
                    { label: 'GitHub', url: 'https://github.com/Nick-23049894/23049894_C237_GA_Submission' },
                ],
            },
            {
                name: 'E-commerce Store',
                description: 'An online platform for shopping with seamless checkout.',
                applicationsUsed: ['React', 'Firebase', 'Stripe'],
                coverImage: PizzaCo,
                images: ['path/to/ecommerce-1.jpg', 'path/to/ecommerce-2.jpg'],
                links: [
                    { label: 'Live Demo', url: 'https://example.com/ecommerce' },
                    { label: 'GitHub', url: 'https://github.com/user/ecommerce' },
                ],
            },
        ],
    },
    {
        category: 'Mobile Apps',
        projects: [
            {
                name: 'Fitness Tracker',
                description: 'Track your workouts and stay fit with this mobile app.',
                applicationsUsed: ['Flutter', 'Firebase'],
                coverImage: BrikHaven,
                images: ['path/to/fitness-tracker-1.jpg', 'path/to/fitness-tracker-2.jpg'],
                links: [
                    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=fitness-tracker' },
                    { label: 'GitHub', url: 'https://github.com/user/fitness-tracker' },
                ],
            },
        ],
    },
    {
        category: 'Video Editing',
        projects: [
            {
                name: 'Travel Vlog',
                description: 'Edited travel vlog videos with Adobe Premiere Pro.',
                applicationsUsed: ['Adobe Premiere Pro', 'Adobe After Effects'],
                coverImage: BrikHaven,
                images: ['path/to/travel-vlog-1.jpg', 'path/to/travel-vlog-2.jpg'],
                links: [
                    { label: 'YouTube', url: 'https://youtube.com/travel-vlog' },
                ],
            },
        ],
    },
];

export default projectsData;
