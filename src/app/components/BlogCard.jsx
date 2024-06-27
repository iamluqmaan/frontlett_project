import Image from "next/image";

// components/BlogCard.js
const BlogCard = ({ title, description, imageUrl, videoUrl, url }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full"  src={url} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-sm mb-2">{title}</div>
          <div className="flex gap-4 items-center py-3">
            <p className="text-gray-700 text-xs ">{description}</p>
            <Image src={imageUrl} width={50} height={55} />
          </div>
        </div>
        
      </div>
    );
  }
  
  export default BlogCard;
  