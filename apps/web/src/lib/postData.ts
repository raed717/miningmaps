export type PostSection =
  | {
      heading: string;
      type: "bullet_list";
      image?: string[];     
      content: string[];
    }
  | {
      heading: string;
      type: "paragraph";
      image?: string[];
      content: string;
    };

export interface Post {
  id: string;
  title: string;
  summary: string;
  previewImage?: string;
  section: PostSection[];
}


export const mockPosts: Post[] = [
  {
    id: "post-001",
    title: "The Future of Mining: Trends and Innovations",
    summary:
      "Explore the latest trends and innovations shaping the future of mining, from automation to sustainable practices.",
    previewImage:
      "https://images.unsplash.com/photo-1600363503477-a8d1d6d57dfc?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    section: [
      {
        heading: "Automation in Mining",
        type: "paragraph",
        content:
          "Automation is revolutionizing the mining industry by increasing efficiency and safety. Autonomous vehicles and machinery are being deployed in mines around the world, reducing the need for human labor in hazardous environments.",
      },
      {
        heading: "Sustainable Mining Practices",
        type: "paragraph",
        image: [
          "https://plus.unsplash.com/premium_photo-1664298475896-230e7b2c0ddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1626710507764-146db0a81e44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        content:
          "Sustainability is becoming a key focus in mining, with companies adopting practices that minimize environmental impact. This includes water conservation, waste reduction, and land reclamation efforts.",
      },
      {
        heading: "Emerging Technologies",
        type: "bullet_list",
        content: [
          "Artificial Intelligence for predictive maintenance",
          "Drones for aerial surveying and monitoring",
          "3D printing for spare parts and equipment",
        ],
      },
    ],
  },
  {
    id: "post-002",
    title: "The Role of Technology in Modern Mining",
    summary:
      "Discover how technology is transforming the mining industry, from data analytics to real-time monitoring.",
    section: [
      {
        heading: "Data Analytics in Mining",
        type: "paragraph",
        content:
          "Data analytics is playing a crucial role in optimizing mining operations. By analyzing vast amounts of data, companies can make informed decisions about resource allocation, equipment maintenance, and safety protocols.",
      },
      {
        heading: "Real-Time Monitoring",
        type: "paragraph",
        content:
          "Real-time monitoring systems provide valuable insights into mining operations, enabling companies to respond quickly to changes and potential issues. This technology enhances both efficiency and safety.",
      },
    ],
  },
];