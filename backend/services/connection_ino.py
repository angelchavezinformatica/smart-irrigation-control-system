import json
import serial

import environ as env


class ArduinoConnection:
    def __init__(self):
        self.arduino_serial = serial.Serial(
            env.PORT, env.BAUDRATE, timeout=env.TIMEOUT)

    def read_as_json(self):
        data = self.arduino_serial.readline()
        return json.loads(data)
