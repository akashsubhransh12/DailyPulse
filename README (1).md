# Real-Time Emotion Recognition

A comprehensive multimodal emotion detection system that analyzes emotions from text, voice, and facial expressions using state-of-the-art AI models.

🌐 **NEW: Web UI Available!** Run `streamlit run streamlit_app.py` for an interactive browser interface.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Web UI (Streamlit)](#web-ui-streamlit)
4. [Demo](#demo)
5. [Requirements](#requirements)
6. [Installation](#installation)
7. [Usage](#usage)
8. [How It Works](#how-it-works)
9. [Troubleshooting & Tips](#troubleshooting--tips)
10. [License](#license)

---

## 🎭 Facial Emotion Detection System

A comprehensive **Multimodal Emotion Detection System** that analyzes emotions from **Text**, **Voice**, and **Facial Expressions** using state-of-the-art deep learning models.

![Python](https://img.shields.io/badge/Python-3.13-blue.svg)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.20.0-orange.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.9.0-red.svg)
![Streamlit](https://img.shields.io/badge/Streamlit-1.36.0-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

### 🔤 Text Emotion Detection
- **Model**: BERT-based DistilRoBERTa (`j-hartmann/emotion-english-distilroberta-base`)
- **Emotions**: 7 categories (joy, sadness, anger, fear, surprise, disgust, neutral)
- **Accuracy**: ~95% confidence on clear emotional text

### 🎤 Voice Emotion Detection
- **Technology**: MFCC (Mel-frequency cepstral coefficients) feature extraction
- **Features**: 40 MFCC features with ML-based classification
- **Supported Formats**: WAV audio files
- **Capabilities**: Real-time recording and classification

### 😊 Facial Emotion Detection
- **Model**: DeepFace CNN with multiple backend support
- **Emotions**: 7 categories (happy, sad, angry, surprise, fear, disgust, neutral)
- **Input**: Webcam feed or uploaded images
- **Features**: Real-time detection with confidence scores

### 🔄 Multimodal Fusion
- **Fusion Strategies**:
  - **Weighted Voting** (Recommended): Combines predictions weighted by confidence
  - **Majority Voting**: Simple majority vote across modalities
  - **Average Confidence**: Averages confidence scores
- **Accuracy**: 85-95% when combining multiple modalities

## 🚀 Quick Start

### Prerequisites
- **Python**: 3.13 or higher
- **OS**: Windows, macOS, or Linux
- **Hardware**: 
  - Webcam (optional, for facial emotion detection)
  - Microphone (optional, for voice recording)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Lucid-Lifo/Facial-Emotion-Detection-System.git
cd Facial-Emotion-Detection-System
```

2. **Create a virtual environment** (recommended)
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

## 💻 Usage

### Web Interface (Streamlit)

Launch the interactive web application:

```bash
streamlit run streamlit_app.py
```

Then open your browser at: **http://localhost:8501**

### Features in Web UI:
- ✍️ **Text Input**: Type or paste text to analyze emotions
- 🎵 **Voice Upload**: Upload `.wav` audio files
- 📸 **Image Upload**: Upload photos for facial emotion analysis
- 📷 **Webcam**: Use live webcam for real-time facial detection
- 🔄 **Multimodal Fusion**: Combine all three inputs for comprehensive analysis

### Command Line Usage

#### Text Emotion Detection
```python
from emotion_detection import classify_text_emotion

text = "I am so happy today!"
emotion = classify_text_emotion(text)
print(f"Emotion: {emotion}")
```

#### Voice Emotion Detection
```python
from emotion_detection import classify_voice_emotion

audio_file = "path/to/audio.wav"
emotion = classify_voice_emotion(audio_file)
print(f"Emotion: {emotion}")
```

#### Facial Emotion Detection (Webcam)
```python
from emotion_detection import run_webcam_demo

run_webcam_demo()  # Press 'q' to quit
```

#### Multimodal Detection
```python
from multimodal_emotion import multimodal_emotion_detection

result = multimodal_emotion_detection(
    text="I feel amazing!",
    audio_path="audio.wav",
    frame=image_frame,  # numpy array
    fusion_method='weighted_voting'
)

print(f"Final Emotion: {result['final_emotion']}")
print(f"Confidence: {result['confidence']:.2%}")
```

## 📁 Project Structure

```
Facial-Emotion-Detection-System/
├── streamlit_app.py              # Web UI application
├── emotion_detection.py          # Core emotion detection functions
├── multimodal_emotion.py         # Multimodal fusion logic
├── voice_emotion_detection.py   # Voice emotion detector class
├── requirements.txt              # Python dependencies
├── README.md                     # This file
├── docs/                         # Documentation
│   ├── TEXT_EMOTION_FEATURE.md
│   ├── VOICE_EMOTION_FEATURE.md
│   ├── MULTIMODAL_DETECTION.md
│   ├── MULTIMODAL_QUICKSTART.md
│   ├── STREAMLIT_GUIDE.md
│   └── STREAMLIT_COMPLETE.md
└── demos/                        # Demo scripts
    ├── demo_multimodal_emotion.py
    ├── test_text_emotion.py
    ├── test_voice_emotion.py
    └── system_architecture.py
```

## 🛠️ Technologies Used

### Deep Learning Frameworks
- **TensorFlow 2.20.0** - For DeepFace facial emotion recognition
- **PyTorch 2.9.0** - For BERT text emotion models
- **Transformers** - HuggingFace library for NLP models

### Models
- **Text**: `j-hartmann/emotion-english-distilroberta-base`
- **Voice**: MFCC + ML classification
- **Face**: DeepFace CNN

### Libraries
- **OpenCV** - Image/video processing
- **Librosa** - Audio feature extraction
- **Streamlit** - Web interface
- **NumPy/Pandas** - Data manipulation

## 📊 Performance

| Modality | Accuracy | Speed | Requirements |
|----------|----------|-------|--------------|
| Text | ~95% | Fast | Internet (first run) |
| Voice | ~80-85% | Medium | Microphone/Audio files |
| Face | ~85-90% | Medium | Webcam/Images |
| **Multimodal** | **85-95%** | **Medium** | **Any combination** |

## 🎯 Use Cases

- 🎓 **Education**: Analyze student engagement and emotional states
- 💼 **Customer Service**: Monitor customer satisfaction in real-time
- 🏥 **Healthcare**: Track patient emotional well-being
- 🎮 **Gaming**: Adaptive gameplay based on player emotions
- 📱 **Social Media**: Content moderation and sentiment analysis
- 🤖 **Human-Computer Interaction**: More empathetic AI assistants

## 🐛 Troubleshooting

### Common Issues

**1. TensorFlow/PyTorch Version Conflicts**
```bash
pip install tensorflow==2.20.0 tf-keras==2.20.1
pip install torch==2.9.0 torchvision==0.24.0
```

**2. Webcam Not Detected**
- Ensure your webcam is connected and not used by other applications
- Check permissions in your OS settings

**3. Audio Recording Issues**
```bash
pip install sounddevice soundfile
```

**4. Import Errors**
- Make sure you're using Python 3.13+
- Activate your virtual environment
- Reinstall requirements: `pip install -r requirements.txt --force-reinstall`

## 📝 Documentation

Detailed documentation is available in the `docs/` folder:
- **[Text Emotion Feature](TEXT_EMOTION_FEATURE.md)** - BERT-based text analysis
- **[Voice Emotion Feature](VOICE_EMOTION_FEATURE.md)** - Audio emotion detection
- **[Multimodal Detection](MULTIMODAL_DETECTION.md)** - Complete fusion guide
- **[Streamlit Guide](STREAMLIT_GUIDE.md)** - Web UI documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **DeepFace** - Facial recognition and emotion detection
- **HuggingFace** - Transformers library and pre-trained models
- **Streamlit** - Interactive web application framework
- **OpenCV** - Computer vision library

## 📧 Contact

**GitHub**: [@Lucid-Lifo](https://github.com/Lucid-Lifo)
**Repository**: [Facial-Emotion-Detection-System](https://github.com/Lucid-Lifo/Facial-Emotion-Detection-System)

---

<p align="center">Made with ❤️ using Python, TensorFlow, PyTorch, and Streamlit</p>
<p align="center">⭐ Star this repository if you found it helpful!</p>

---

## Features

* **🌐 Web UI (Streamlit)**: Interactive browser-based interface with real-time analysis
* **Live Webcam Capture**: Streams frames from your default webcam using OpenCV.
* **DeepFace Emotion Analysis**: Utilizes DeepFace's pre-trained emotion detector to identify the dominant emotion per frame.
* **Text Emotion Classification**: NEW! Classify emotions from text input using pretrained BERT model (j-hartmann/emotion-english-distilroberta-base).
* **Voice Emotion Detection**: NEW! Detect emotions from audio/speech using MFCC features and ML models.
* **🎯 Multimodal Fusion**: NEW! Combine text, voice, and facial emotion detection for superior accuracy using advanced fusion techniques.
* **Multi-Modal Support**: Analyze emotions from facial expressions, text, and voice in one system.
* **Real-Time Overlay**: Draws the detected emotion text on each frame via OpenCV's `putText`.
* **Lightweight & Self-Contained**: Only one Python script—minimal dependencies.
* **Immediate Feedback**: Run the script and see "Emotion: \[label]" displayed in the top-left corner of the live video window. Press **q** to exit gracefully.

---

## Web UI (Streamlit)

### Launch the Interactive Web Interface

```bash
streamlit run streamlit_app.py
```

The app opens automatically in your browser with three input sections:

### 📝 Text Section
- Type or paste any message
- Click "Analyze Text"
- See emotion prediction with confidence

### 🎤 Voice Section
- Upload .wav audio file
- Click "Analyze Voice"
- View detected vocal emotion

### 😊 Facial Section
- Upload image OR use webcam
- Capture your expression
- Click "Analyze Face"
- Get facial emotion result

### 🎯 Multimodal Fusion
- Analyze 2 or more modalities
- Click "Combine Results"
- Choose fusion strategy (weighted/majority/average)
- See final combined emotion with interpretation

**Features:**
- Color-coded emotion displays
- Confidence bars
- Real-time predictions
- Responsive design
- Emoji indicators

See [STREAMLIT_GUIDE.md](STREAMLIT_GUIDE.md) for detailed documentation.

---

## Demo

![Screenshot of Emotion Recognition Demo](docs/screenshot.png)

> *Note: Depending on your webcam’s resolution and lighting conditions, the text placement and clarity may vary.*

---

## Requirements

* **Python 3.7+**
* **OpenCV** (`opencv-python`)
* **DeepFace** (`deepface`)
* **Transformers** (`transformers`) - for text emotion classification
* **PyTorch** (`torch`) - backend for transformers
* **Librosa** (`librosa`) - for audio feature extraction
* **SoundDevice** (`sounddevice`) - for audio recording
* **SoundFile** (`soundfile`) - for audio I/O
* **SciPy** (`scipy`) - for signal processing
* A working webcam (for facial detection)
* A microphone (for voice detection)

---

## Installation

1. **Clone this Repository**

   ```bash
   git clone https://github.com/your-username/real-time-emotion-recognition.git
   cd real-time-emotion-recognition
   ```

2. **Create a Virtual Environment (Recommended)**

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # on Linux/Mac
   venv\Scripts\activate      # on Windows
   ```

3. **Install Dependencies**

   ```bash
   pip install --upgrade pip
   pip install opencv-python deepface transformers torch tf-keras
   pip install librosa sounddevice soundfile scipy
   ```

   * If you run into installation errors, ensure you're using a compatible Python version (≥ 3.7) and that `pip` is up to date.

---

## Usage

### Facial Emotion Recognition (Webcam)

1. **Run the Script**
   Open a terminal (with the virtual environment activated, if applicable) and execute:

   ```bash
   python emotion_recognition.py
   ```

2. **Allow Camera Access** (if prompted).

3. **Observe the Video Window**

   * A window titled **"Emotion Recognition"** will appear, streaming live feed from your webcam.
   * You should see text like **"Emotion: happy"** or **"Emotion: neutral"** updating in real time.

4. **Quit**

   * Press **q** on your keyboard to stop the script and close the window.

### Text Emotion Classification

You can use the `classify_text_emotion()` function to analyze emotions in text:

```python
from emotion_detection import classify_text_emotion

# Classify a single text
emotion = classify_text_emotion("I am so happy today!")
print(f"Detected emotion: {emotion}")
```

Or run the test script:

```bash
python test_text_emotion.py
```

This will classify various sample texts and show the predicted emotions with confidence scores.

**Supported Emotions**: The BERT model can detect: `anger`, `disgust`, `fear`, `joy`, `neutral`, `sadness`, `surprise`

### Voice/Audio Emotion Detection

You can use the voice emotion detection functions to analyze emotions in speech:

```python
from emotion_detection import classify_voice_emotion, record_and_classify_voice

# Analyze existing audio file
emotion = classify_voice_emotion("audio_sample.wav")
print(f"Detected emotion: {emotion}")

# Record and analyze in real-time
emotion = record_and_classify_voice(duration=5)  # Record for 5 seconds
print(f"Detected emotion: {emotion}")
```

**Supported Emotions**: `happy`, `sad`, `angry`, `neutral`, `fear`, `disgust`, `surprise`

### 🎯 Multimodal Emotion Detection (RECOMMENDED)

Combine multiple emotion detection methods for superior accuracy:

```python
from multimodal_emotion import multimodal_emotion_detection
import cv2

# Capture a frame
cap = cv2.VideoCapture(0)
ret, frame = cap.read()
cap.release()

# Analyze with all three modalities
result = multimodal_emotion_detection(
    text="I'm feeling great today!",
    audio_path="voice_sample.wav",
    frame=frame,
    fusion_method='weighted_voting'
)

print(f"Final Emotion: {result['final_emotion']}")
print(f"Confidence: {result['confidence']:.1%}")
print(f"Individual results: {result['individual_results']}")
```

**Interactive Demo**:
```bash
python demo_multimodal_emotion.py
# Select option 3 for multimodal fusion demo
```

**Test Suite**:
```bash
python test_multimodal.py
```

**Fusion Methods**:
- `majority_voting` - Simple vote count
- `weighted_voting` - Confidence-weighted (RECOMMENDED)
- `average_confidence` - Average scores per emotion

See [MULTIMODAL_DETECTION.md](MULTIMODAL_DETECTION.md) for detailed documentation.

# Option 1: Analyze an existing audio file
emotion = classify_voice_emotion("path/to/audio.wav")
print(f"Detected emotion: {emotion}")

# Option 2: Record and analyze
emotion = record_and_classify_voice(duration=5)  # Record for 5 seconds
print(f"Detected emotion: {emotion}")
```

Or run the voice emotion test script:

```bash
python test_voice_emotion.py
```

**Features**:
- Records audio from microphone
- Extracts MFCC (Mel-frequency cepstral coefficients) features
- Supports multiple detection methods (MFCC-based, CNN, or HuggingFace models)
- Returns emotion labels: `neutral`, `happy`, `sad`, `angry`, `fear`, `disgust`, `surprise`

### Multi-Modal Emotion Detection

Run the comprehensive demo that combines all three methods:

```bash
python demo_multimodal_emotion.py
```

This allows you to:
- Analyze text emotion
- Record and analyze voice emotion
- Compare results across modalities

---

## How It Works

1. **Capture Frame**

   ```python
   cap = cv2.VideoCapture(0)
   ret, frame = cap.read()
   ```

   * Initializes video capture from the default webcam (`0`).
   * Reads a single frame (`frame`) each iteration.

2. **Emotion Analysis**

   ```python
   results = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)
   emotion = results[0]['dominant_emotion']
   ```

   * Uses `DeepFace.analyze(...)` to run inference on the captured frame.
   * `actions=['emotion']` specifies we only want emotion predictions.
   * `enforce_detection=False` tells DeepFace to skip raising an error if no face is detected.

3. **Overlay Text**

   ```python
   cv2.putText(
       frame,
       f'Emotion: {emotion}',
       (50, 50),
       cv2.FONT_HERSHEY_SIMPLEX,
       1,
       (255, 0, 0),
       2
   )
   ```

   * Draws the string **“Emotion: {emotion}”** at coordinates (50, 50) in the frame.
   * Uses a blue font `(BGR = 255, 0, 0)` with thickness 2.

4. **Display Frame**

   ```python
   cv2.imshow("Emotion Recognition", frame)
   if cv2.waitKey(1) & 0xFF == ord('q'):
       break
   ```

   * Shows the annotated frame in a window titled **“Emotion Recognition”**.
   * Every loop iteration calls `cv2.waitKey(1)`, and if you press **q** it breaks out of the loop.

5. **Cleanup**

   ```python
   cap.release()
   cv2.destroyAllWindows()
   ```

   * Releases the webcam resource and closes all OpenCV windows upon exit.

---

## Troubleshooting & Tips

* **Webcam Not Detected**

  * Ensure no other application is using the camera.
  * Try changing `cv2.VideoCapture(0)` to `cv2.VideoCapture(1)` (or another index) if your default device isn’t at index 0.

* **Laggy Performance**

  * Emotion inference can be compute-intensive. Consider using a machine with a dedicated GPU or reducing the webcam resolution:

    ```python
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 320)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 240)
    ```

* **DeepFace Errors**

  * If DeepFace reports missing backend libraries, install TensorFlow or PyTorch explicitly:

    ```bash
    pip install tensorflow   # or
    pip install torch torchvision
    ```

* **enforce\_detection=False**

  * With `enforce_detection=False`, DeepFace skips errors when no face is found, returning the last valid output instead. If strict face detection is required, set `enforce_detection=True`, but be prepared for possible runtime errors when no face is visible.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

> **Happy coding!** If you find this project useful or have ideas for improvements, please ⭐ star this repo, open an issue, or submit a pull request.
