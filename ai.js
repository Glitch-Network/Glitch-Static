try{
if (localStorage.getItem("ai_teacher_detection") == "true" && localStorage.getItem("premium") == "true") {
document.body.onload = main;

async function setupWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();  // Ensure the video plays even though it's not in the DOM
        return new Promise((resolve) => {
            videoElement.onloadedmetadata = () => {
                resolve(videoElement);
            };
        });
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
}

async function loadModel() {
    const modelUrl = './/ai/model.json'; // Ensure the server is running and accessible
    try {
        const response = await fetch(modelUrl, { method: 'HEAD' });
        if (response.ok) {
            return await tf.loadLayersModel(modelUrl);
        } else {
            console.error('Server or model not available.');
        }
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

async function main() {
    const model = await loadModel();
    if (!model) {
        console.error('Model could not be loaded.');
        return;
    }

    const videoElement = await setupWebcam();
    if (!videoElement) {
        console.error('Webcam could not be accessed.');
        return;
    }

    setInterval(async () => {
        const tensor = tf.tidy(() => {
            let img = tf.browser.fromPixels(videoElement).resizeNearestNeighbor([224, 224]).toFloat();
            let offset = tf.scalar(127.5);
            return img.sub(offset).div(offset).expandDims();
        });

        const predictions = await model.predict(tensor);
        const predictedClass = predictions.as1D().argMax().dataSync()[0];
        tensor.dispose();
        predictions.dispose();
        
        if (predictedClass === 0) {
            window.location.href = "https://google.com";
        }

    }, 1000); // Executes every second
}

// Load TensorFlow.js
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs";
script.onload = () => console.log("TensorFlow.js loaded");
document.head.appendChild(script);

}

} catch (error) {
    console.warn("A.I Teacher detection isn't working.")
}