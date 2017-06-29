# Flights

{% method %}
### Get Emissions
Find Emissions for a flight between two airports.
Only [ICAO Airport Codes](https://en.wikipedia.org/wiki/International_Civil_Aviation_Organization_airport_code) are supported.

**Example**
```JSON
{
	"origin": "DEL",
	"destination": "JFK",
	"type": "international",
	"model": "A380",
	"passengers": 840
}
```
`200` - **Response**
```JSON
{
	"success": true,
	"emissions": {
		"CO2": 122.192782162
	},
	"unit": "kg"
}
```
`400` - **Error** 
```JSON
{
	"success": false,
	"error": "Unable to find a given airport. Please use ICAO airport code."
}
```
{% sample lang="http" %}
```
POST /v1/flight
```
**Parameters**

| Name        | Type           | Description  |
| ------------- |-------------| -----|
| origin | string |**Required:** Flight origin airport _ICAO_ code. |
| destination  | string |**Required:** Flight destination airport _ICAO_ code. |
| type     | string | Flight type (`international` or `domestic`). Default is `international`. |
| model     | string | Flight model (e.g A310). Default is `A380` for international flights and `A320` for domestic flights. |
| passengers     | number | Pass the number of passengers to get the emissions relative to per person on the flight. |



{% endmethod %}