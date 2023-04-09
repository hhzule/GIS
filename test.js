var jsonData = {
    "type": "FeatureCollection",
    "name": "Buildings",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "fid": 1, "id": 1, "Building Name": "7424 Middlebrook Pike", "Street Address": "7424 Middlebrook Pike", "City": "Knoxville", "State": "Tn", "Postal": 37909, "Country": "United States", "MSA Name": "KNOXVILLE, TN", "Latitude": 35.940923, "Longitude": -84.041424, "Elevation": null, "Serving Wire Center CLLI": "KNVLTNWH01T", "Building CLLI": null, "Network Build Status": "Not Connected", "Building Connection Status": "Near Net", "Building Category": "Commercial Building,Health Care", "NPA": 865, "NXX": 470, "LATA": 474, "Demarc Code": null, "Fiber Ownership": null, "Access Medium": null, "Install Interval": null, "Supplier Name": null, "Access Customer Name": null, "Access Floor": null, "Access Room": null, "Ethernet Handoff Type": null, "Minimum Circuit Level": null, "Minimum Quantity to Accept an Order": null, "Special Construction Cost": null, "Customer Unique Key": null, "CB Building key": null, "Transaction Indicator": "N", "Primary NNI Location": null, "Secondary NNI Location": null, "Primary Number": "7424", "Street Predirection": null, "Street Name": "Middlebrook", "Street Postdirection": null, "Street Suffix": "Pike", "Secondary Designator": null, "Secondary Number": null, "Extra Secondary Designator": null, "Extra Secondary Number": null, "Plus4 Code": 3109, "Conformed State": null, "Conformed City": null, "Building Notes": null, "Distance Band": " 0 - 500 feet", "LOS Distance 1 Path": 239, "LOS Distance 2 Path": null, "ROW Distance 1 Path": null, "ROW Distance 2 Path": null, "LOS Distance 1 Access Point": null, "LOS Distance 2 Access Point": null, "ROW Distance 1 Access Point": null, "ROW Distance 2 Access Point": null, "Comcast Pricing Zone": null, "Indatel Pricing Zone": null, "CenturyLink Pricing Zone": null, "Sprint Pricing Zone": null, "Verizon Pricing Zone": null, "AT&T Pricing Zone": null, "Building Competitive Rating": null, "AT&T Serving Node CLLI": null, "AT&T Unique Key": null, "Pricing Zone": null, "Pricing Type": null, "Wavelength Handoff Type": null, "Wave Zone": null, "Wave Install Interval": null, "Custom Pricing Zone": null, "Building Type": null, "Status": null, "NPA- NXX": null, "Ethernet Zone": null, "Horizontal Coordinate": null, "Vertical Coordinate": null, "Protection Type": null, "Handoff Pricing": null, "Diversity Type": null, "Tenant Count": null, "Building Sq Footage": null, "Building Floors": null, "Property Type": null, "Address Status": null }, "geometry": { "type": "Point", "coordinates": [ -84.041424, 35.940923 ] } },
    { "type": "Feature", "properties": { "fid": 2, "id": 2, "Building Name": "5006 Middlebrook Pike", "Street Address": "5006 Middlebrook Pike", "City": "Knoxville", "State": "Tn", "Postal": 37921, "Country": "USA", "MSA Name": "KNOXVILLE, TN", "Latitude": 35.960636, "Longitude": -83.9968, "Elevation": null, "Serving Wire Center CLLI": "KNVLTNBEDS0", "Building CLLI": null, "Network Build Status": "Not Connected", "Building Connection Status": "Near Net", "Building Category": "Commercial Building", "NPA": 865, "NXX": 212, "LATA": 474, "Demarc Code": null, "Fiber Ownership": null, "Access Medium": null, "Install Interval": null, "Supplier Name": null, "Access Customer Name": null, "Access Floor": null, "Access Room": null, "Ethernet Handoff Type": null, "Minimum Circuit Level": null, "Minimum Quantity to Accept an Order": null, "Special Construction Cost": null, "Customer Unique Key": null, "CB Building key": null, "Transaction Indicator": "N", "Primary NNI Location": null, "Secondary NNI Location": null, "Primary Number": "5006", "Street Predirection": null, "Street Name": "Middlebrook", "Street Postdirection": null, "Street Suffix": "Pike", "Secondary Designator": null, "Secondary Number": null, "Extra Secondary Designator": null, "Extra Secondary Number": null, "Plus4 Code": 5907, "Conformed State": null, "Conformed City": null, "Building Notes": null, "Distance Band": " 501 - 1000 feet", "LOS Distance 1 Path": 754, "LOS Distance 2 Path": null, "ROW Distance 1 Path": null, "ROW Distance 2 Path": null, "LOS Distance 1 Access Point": null, "LOS Distance 2 Access Point": null, "ROW Distance 1 Access Point": null, "ROW Distance 2 Access Point": null, "Comcast Pricing Zone": null, "Indatel Pricing Zone": null, "CenturyLink Pricing Zone": null, "Sprint Pricing Zone": null, "Verizon Pricing Zone": null, "AT&T Pricing Zone": null, "Building Competitive Rating": null, "AT&T Serving Node CLLI": null, "AT&T Unique Key": null, "Pricing Zone": null, "Pricing Type": null, "Wavelength Handoff Type": null, "Wave Zone": null, "Wave Install Interval": null, "Custom Pricing Zone": null, "Building Type": null, "Status": null, "NPA- NXX": null, "Ethernet Zone": null, "Horizontal Coordinate": null, "Vertical Coordinate": null, "Protection Type": null, "Handoff Pricing": null, "Diversity Type": null, "Tenant Count": null, "Building Sq Footage": null, "Building Floors": null, "Property Type": null, "Address Status": null }, "geometry": { "type": "Point", "coordinates": [ -83.9968, 35.960636 ] } },
    ]};

    var features = jsonData.features[0]
    function obj2htmltable(obj) {
        var html = '<table>';
        for (var key in obj) {
            var item = obj[key];
          if(item){
            var value = (typeof(item) === 'object') ? obj2htmltable(item) : item.toString();

            if(value !== null){
                html += '<tr><td>' + key + '</td><td>' + value + '</tr>';
        
              }   
          }
   }
        html += '</table>';
        return html;
    }

      var see = obj2htmltable(features)

      console.log("see==>", see)
      