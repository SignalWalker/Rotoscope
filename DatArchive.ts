enum FileEncoding {
    UTF8 = "utf8",
    BASE64 = "base64",
    HEX = "hex",
    BINARY = "binary"
}

class Dat {

    private archive: any;

    constructor(url: string) {
        this.archive = new DatArchive(url);
    }

    ReadFile(name: string, encoding: FileEncoding = FileEncoding.UTF8, timeout: number = 5000): Promise<string|ArrayBuffer> {
        return this.archive.readFile(name, {encoding, timeout});
    }
}