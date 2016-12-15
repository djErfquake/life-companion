class Config {

  constructor() {

    // IMPORTANT!!!
    // _properties is private. Use getProperties(); Modify with applyProperties.
    // It keeps the file saving and loading simple, and makes the config
    // read only as this.property_name.
    //
    // Note. You can change this.property_name on the fly without saving it, or
    // worry about it polluting other things just fine during runtime. i.e.
    //
    // config.background_color = "#ff0000" is fine. (This will not save.)
    // config._properties.background_color = "#ff0000" is NOT fine. ->
    //    This will break things and I will hunt you down and do horrible
    //    things to you if you do this. Leave it alone. Use applyProperties.
    //
    this._properties = {
      //Basic Information (Global)
      'global_variable': 1920
    };

    this._overwrite_props = [];
  }

  loadFromFile(filename) {
    filename = path.join(__dirname, '../assets', filename);

    let config = JSON.parse(fs.readFileSync(filename, 'utf8'));
    this.applyProperties(config);
  }

  saveToFile(filename) {
    filename = path.join(__dirname, '../assets', filename);

    let json_data = JSON.stringify(this.getProperties(), null, '    ');
    fs.writeFileSync(filename, json_data, 'utf8')
  }

  applyProperties(props) {
    _.merge(this._properties, props);

    for(let name in this._properties) {
      let def = this._properties[name];

      if(_.keys(props).includes(name)) {

        //save the property
        if(typeof props[name] === "object" && !_.includes(this._overwrite_props, name))
          _.merge(this._properties[name], props[name]);
        else
          this._properties[name] = props[name];

        this[name] = this._properties[name]; //make publically available as read only on 'this'
      }
      else {
        this[name] = def;
      }
    }
  }

  getProperties() {
    //does a deep copy
    return JSON.parse(JSON.stringify(this._properties));
  }
}
