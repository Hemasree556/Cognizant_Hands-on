import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    // Linear Search
    public static Product linearSearch(Product[] products, int searchId) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productId == searchId) {
                return products[i];
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int searchId) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == searchId) {
                return products[mid];
            }

            else if (products[mid].productId < searchId) {
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(105, "Mobile", "Electronics"),
                new Product(102, "Watch", "Accessories"),
                new Product(104, "Book", "Education")

        };

        int searchId = 102;

        System.out.println("----- Linear Search -----");

        Product result = linearSearch(products, searchId);

        if (result != null) {
            result.display();
        } else {
            System.out.println("Product not found.");
        }

        // Sort array before Binary Search
        Arrays.sort(products, Comparator.comparingInt(product -> product.productId));

        System.out.println("\n----- Binary Search -----");

        result = binarySearch(products, searchId);

        if (result != null) {
            result.display();
        } else {
            System.out.println("Product not found.");
        }
    }
}