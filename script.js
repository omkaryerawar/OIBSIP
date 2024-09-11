function convertTemperature() {
  let degrees = parseFloat(document.getElementById("degrees").value);
  let fromType = document.getElementById("fromType").value;
  let toType = document.getElementById("toType").value;
  let result = document.getElementById("result");
  let convertedValue;

  // Conversion logic
  if (fromType === toType) {
    convertedValue = degrees;
  } else if (fromType === "Celsius") {
    if (toType === "Fahrenheit") {
      convertedValue = (degrees * 9) / 5 + 32;
    } else if (toType === "Kelvin") {
      convertedValue = degrees + 273.15;
    }
  } else if (fromType === "Fahrenheit") {
    if (toType === "Celsius") {
      convertedValue = (degrees - 32) * (5 / 9);
    } else if (toType === "Kelvin") {
      convertedValue = (degrees - 32) * (5 / 9) + 273.15;
    }
  } else if (fromType === "Kelvin") {
    if (toType === "Celsius") {
      convertedValue = degrees - 273.15;
    } else if (toType === "Fahrenheit") {
      convertedValue = ((degrees - 273.15) * 9) / 5 + 32;
    }
  }

  // Display the result
  result.value = convertedValue.toFixed(4) + " °" + toType.charAt(0);
}
