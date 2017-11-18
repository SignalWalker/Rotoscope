class PortalReader {

    url: string;
    hash: string;
    dat: Dat;
    pFile: string;
    json: any;

    constructor(url: string) {
        this.url = url;
        this.hash = ToHash(url);
        this.dat = new Dat(url);
    }

    async Connect(): boolean {
        console.log(`Connecting to: ${this.url}`);

        try {
            this.pFile = <string>this.dat.ReadFile("/portal.json", FileEncoding.UTF8, 2000);
        } catch (err) {
            console.error(`Connection failed: ${this.url}`);
            //r.home.feed.next();
            return false;
        }

        try {
            this.json = JSON.parse(this.pFile);
            this.url = this.json.dat || this.url;
            //r.home.feed.register(p);
        } catch (err) {
            console.error(`Parsing failed: ${this.url}`);
        }

        //SetTimeout(r.home.feed.next, 250);
    }

}