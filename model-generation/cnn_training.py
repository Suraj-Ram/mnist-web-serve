import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout
import numpy as np

mnist = keras.datasets.mnist
(img_train, lab_train), (img_test, lab_test) = mnist.load_data()
img_train, img_test = img_train / 255.0, img_test / 255.0

img_train = img_train.reshape(60000, 28, 28, 1)
img_test = img_test.reshape(10000, 28, 28, 1)

model = Sequential([
    Conv2D(64, (3,3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D(2, 2),
    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D(2,2),
    Flatten(input_shape=(28, 28)),
    Dense(512, activation='relu'),
    Dense(256, activation='relu'),
    Dense(128, activation='relu'),
    Dropout(0.2),
    Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

print("Summary")
model.summary()

print("Training...")
model.fit(img_train, lab_train, epochs=5)

print('Evaluating...')
model.evaluate(img_test, lab_test)

print('Saving...')
model.save('cnn_model.h5')