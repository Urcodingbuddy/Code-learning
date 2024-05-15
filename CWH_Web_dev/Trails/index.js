// Access the webcam
async function getWebcam() {
    return new Promise((resolve, reject) => {
      const webcam = document.getElementById('webcam');
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          webcam.srcObject = stream;
          webcam.onloadedmetadata = () => {
            webcam.play();
            resolve(webcam);
          };
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  // Initialize the face detection model
  async function initFaceDetection() {
    return await ml5.faceApi(modelLoaded);
  
    function modelLoaded() {
      console.log('Face detection model loaded!');
    }
  }
  
  // Initialize the MobileNet model for skin type classification
  async function initModel() {
    return await ml5.imageClassifier('MobileNet', skinTypeModelLoaded);
  
    function skinTypeModelLoaded() {
      console.log('Skin type model loaded!');
    }
  }
  
  // Analyze the skin color
  function analyzeSkinColor(face) {
    const r = face.region[0].x;
  const g = face.region[0].y;
    const b = face.region[0].width;
    const skinColor = {
      r: r.toFixed(0),
      g: g.toFixed(0),
      b: b.toFixed(0),
    };
    return skinColor;
  }
  
  // Classify the skin type and analyze the skin color
  async function classifySkinTypeAndColor(webcam, faceDetection, model) {
    const faces = await faceDetection.detect(webcam);
  
    if (faces.length > 0) {
      const face = faces[0];
      const skinColor = analyzeSkinColor(face);
      const result = await model.classify(face.region[0]);
  
      // Display the classification output
      document.getElementById('output').innerText = `
        Skin Type: ${result[0].label}
        Confidence: ${result[0].confidence * 100}
        Skin Color: R: ${skinColor.r} G: ${skinColor.g} B: ${skinColor.b}
      `;
    }
  }
  
  // Main function
  async function main() {
    const webcam = await getWebcam();
    const faceDetection = await initFaceDetection();
    const model = await initModel();
  
    setInterval(() => {
      classifySkinTypeAndColor(webcam, faceDetection, model);
    }, 1000);
  }
  
  main();