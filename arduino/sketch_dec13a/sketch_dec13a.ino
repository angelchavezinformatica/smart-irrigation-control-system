double humedad;
double temperatura;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  temperatura = ((analogRead(A0) * 5000.0) / 1023.0) * 10;
  humedad = map(analogRead(A1), 1023, 0, 0, 100);

  Serial.print("{\"temperatura\":");
  Serial.print(temperatura);
  Serial.print(", \"humedad\":");
  Serial.print(humedad);
  Serial.println("}");

  delay(1000);
}
