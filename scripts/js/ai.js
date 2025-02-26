document.addEventListener("DOMContentLoaded", function() {
    
    // Checking if the required settings are enabled in localStorage
    if (localStorage.getItem("ai_teacher_detection") === "true" && localStorage.getItem("premium") === "true") {

        document.body.onload = () => {
            // Dynamically load TensorFlow.js
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs";
            script.onload = main; // Automatically start the main function after TensorFlow.js is loaded
            document.head.appendChild(script);
            
        };

        async function setupWebcam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                const videoElement = document.createElement('video');
                videoElement.srcObject = stream;
                videoElement.play();  // Ensure the video plays
                return new Promise((resolve) => {
                    videoElement.onloadedmetadata = () => {
                        resolve(videoElement);
                    };
                });
            } catch (error) {
                console.error('Error accessing webcam:', error);
                return null;
            }
        }

        async function loadModel() {
            const modelUrl = './assets/ai/model.json'; // Ensure the server is running and accessible
            try {
                const response = await fetch(modelUrl, { method: 'HEAD' });
                if (response.ok) {
                    return await tf.loadLayersModel(modelUrl);
                } else {
                    console.error('Server or model not available.');
                    return null;
                }
            } catch (error) {
                console.error('Error loading model:', error);
                return null;
            }
        }

        async function main() {
            if (typeof tf === 'undefined') {
                console.error('TensorFlow.js is not loaded.');
                return;
            }

            const videoElement = await setupWebcam();
            if (!videoElement) {
                console.error('Webcam could not be accessed.');
                return;
            }

            const model = await loadModel();
            if (!model) {
                console.error('Model could not be loaded.');
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
    } else {
        console.warn("A.I detection isn't enabled or premium isn't active.");
    }
});

