import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout
import matplotlib.pyplot as plt
import numpy as np

mnist = keras.datasets.mnist
(img_train, lab_train), (img_test, lab_test) = mnist.load_data()
img_train, img_test = img_train / 255.0, img_test / 255.0

model = Sequential([
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

#model.fit(img_train, lab_train, epochs=5)

model.summary()

print('Evaluating...')
model.evaluate(img_test, lab_test)

# print('Saving...')
# model.save('saved_model_basic.h5')