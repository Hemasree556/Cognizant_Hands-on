interface Document {
    void open();
}

// Word Document
class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }
}

// PDF Document
class PdfDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }
}

// Excel Document
class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}

// Abstract Factory
abstract class DocumentFactory {

    public abstract Document createDocument();

}

// Word Factory
class WordFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}

// PDF Factory
class PdfFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}

// Excel Factory
class ExcelFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}