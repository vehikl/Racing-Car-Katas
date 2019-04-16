
class Sensor {

	static Offset() {
		return 16;
	}

	static SamplePressure () {
		// placeholder implementation that simulate a real sensor in a real tire

		var pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	}

	popNextPressurePsiValue() {
		var pressureTelemetryValue = Sensor.SamplePressure();

		return Sensor.Offset() + pressureTelemetryValue;
	}
}

module.exports = Sensor;