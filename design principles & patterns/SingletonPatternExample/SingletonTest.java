public class SingletonTest {

    public static void main(String[] args) {

        // Get Logger instance
        Logger logger1 = Logger.getInstance();

        // Log a message
        logger1.log("Application Started");

        // Get Logger instance again
        Logger logger2 = Logger.getInstance();

        // Log another message
        logger2.log("Application Running");

        // Check whether both objects are same
        if (logger1 == logger2) {
            System.out.println("\nBoth logger objects are the same.");
            System.out.println("Singleton Pattern is implemented successfully.");
        } else {
            System.out.println("Singleton Pattern implementation failed.");
        }
    }
}
