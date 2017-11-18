import settings from 'Settings.json';

class Rotonde {

    client_url: string;
    version: [number, number, number];
    settings: any;

    constructor(client_url: string) {
        this.client_url = client_url;
        this.settings = JSON.parse(localStorage.getItem("Settings.json"));
        this.version[0] = parseInt(settings.version.major);
        this.version[1] = parseInt(settings.version.minor);
        this.version[2] = parseInt(settings.version.patch);
    }

    Start() {

    }

}