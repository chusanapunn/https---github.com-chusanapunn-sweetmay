import { useState } from 'react';

export default function ImageUploader() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e: React.ChangeEvent<any>) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        // reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file); // Convert to base64
    };

    const handleUpload = async () => {
        await fetch('/api/uploadIMG', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Image Title', imageData: image }),
        });
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button 
            className="bg-orange-100 p-4 m-4 rounded-xl hover:bg-orange-400"
            onClick={handleUpload}>Upload Image</button>
        </div>
    );
}
