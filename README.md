# Lip-Reading-in-Native-Language

Automated Lip reading is a use-case for speech recognition through visual interpretation without relying on audio cues. It is an emerging field that involves understanding speech by observing a speaker’s lip movements using machine learning techniques. This helps address accessibility issues for those with hearing impairments and in noisy settings. Identifying commonly used words and phrases in the Hindi language, we created a script inspired by the GRID Corpus Dataset. 

Due to the lack of publicly accessible Hindi language lip-reading datasets, we created our custom dataset consisting of videos of 20 subjects speaking a pre-selected script. 
On this data, we performed pre-processing and extracted features for model training. Random forest classifier achieved an optimistic training accuracy of 34.125%
for predicting a sentence consisting of 10 words.

We have used the shape_predictor_68_face_landmarks.dat pre-trained model to get the lip landmarks.
