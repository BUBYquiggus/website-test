class file {
    constructor({type, content, blob}) {
        this.type = type;
        this.content = content;
        this.blob = blob;
    }
    download(link, content, blob) {
        link.href = URL.createObjectURL(blob);
    }
}
