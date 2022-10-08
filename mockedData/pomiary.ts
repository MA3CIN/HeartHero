const TetnoData = [{"value": 80, "date":"09/08/2022", "time" : "9:04"},{"value": 74, "date":"08/08/2022", "time" : "9:02"},{"value": 85, "date":"07/08/2022", "time" : "9:07"},{"value": 89, "date":"06/08/2022", "time" : "9:01"}]
const CisnienieData = [{"value": 80, "date":"09/08/2022", "time" : "10:03"},{"value": 74, "date":"08/08/2022", "time" : "10:02"},{"value": 85, "date":"07/08/2022", "time" : "10:01"},{"value": 89, "date":"06/08/2022", "time" : "10:03"}]
const WagaData = [{"value": 70, "date":"09/08/2022", "time" : "11:07"},{"value": 71, "date":"08/08/2022", "time" : "11:05"},{"value": 70, "date":"07/08/2022", "time" : "11:00"},{"value": 72, "date":"06/08/2022", "time" : "11:01"}]
const TemperaturaData = [{"value": 36.8, "date":"09/08/2022", "time" : "10:40"},{"value": 36.6, "date":"08/08/2022", "time" : "10:41"},{"value": 36.7, "date":"07/08/2022", "time" : "10:42"},{"value": 36.5, "date":"06/08/2022", "time" : "10:40"}]



export const Pomiary = [{  
        "name":       "Tętno",   
        "value":      TetnoData[0].value,
        "source":   require('./pulse.png'),
        "data": TetnoData
}, {  
    "name":       "Ciśnienie",   
    "value":      CisnienieData[0].value,
    "source": require('./blood-pressure.png'),
    "data": CisnienieData
},{  
    "name":       "Waga",   
    "value":        WagaData[0].value,
    "source": require('./weight-scale.png'),
    "data": WagaData
},{  
    "name":       "Temperatura",   
    "value":        TemperaturaData[0].value,
    "source": require('./thermometer.png'),
    "data": TemperaturaData

}]