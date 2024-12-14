char buffer[100];
double humedad;
double temperatura;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  // Leer y calcular temperatura y humedad
  temperatura = ((analogRead(A0) * 5000.0) / 1023.0) / 10;
  humedad = map(analogRead(A1), 1023, 0, 0, 100);

  // Buffers temporales para los valores convertidos a cadenas
  char temp_str[10];
  char hum_str[10];

  // Convertir los valores de temperatura y humedad a texto
  dtostrf(temperatura, 6, 2, temp_str); // 6 caracteres de ancho, 2 decimales
  dtostrf(humedad, 6, 2, hum_str);     // 6 caracteres de ancho, 2 decimales

  // Crear el mensaje JSON
  snprintf(buffer, sizeof(buffer), "{\"temperatura\":%s, \"humedad\":%s}", temp_str, hum_str);

  // Enviar el mensaje JSON completo al puerto serie
  Serial.println(buffer);

  delay(1000);
}
