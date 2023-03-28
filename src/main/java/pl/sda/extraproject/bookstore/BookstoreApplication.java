package pl.sda.extraproject.bookstore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pl.sda.extraproject.bookstore.model.Book;
import pl.sda.extraproject.bookstore.service.BookService;

@SpringBootApplication
public class BookstoreApplication implements CommandLineRunner {

	@Autowired
	private BookService bookService;

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		for (int i = 0; i < 200 ; i++) {
			Book book = new Book();
			book.setTitle("Titanic");
			book.setAuthor("Mr Yo");
			book.setPhotoUrl("https://i.pinimg.com/736x/8e/b8/6e/8eb86e77583008a395cf7e923a37ebff.jpg");
			book.setIsbn(123432L);
			book.setPrice(22.50);
			bookService.save(book);
		}
	}
}
