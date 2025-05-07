import React, { useState } from "react";

function ImageUpload() {
    const [images, setImages] = useState([null, null]);

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    return (
        <div style={styles.container}>
            <h2>사진 업로드</h2>
            <div style={styles.uploadBox}>
                {[0, 1].map((i) => (
                    <div key={i} style={styles.imageContainer}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, i)}
                        />
                        {images[i] && (
                            <img src={images[i]} alt={`uploaded-${i}`} style={styles.preview} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    uploadBox: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
    },
    imageContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    preview: {
        marginTop: "10px",
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        border: "1px solid #ccc",
    },
};

export default smallroom;
