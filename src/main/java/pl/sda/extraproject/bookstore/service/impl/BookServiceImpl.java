package pl.sda.extraproject.bookstore.service.impl;

import org.springframework.stereotype.Service;
import pl.sda.extraproject.bookstore.model.Book;
import pl.sda.extraproject.bookstore.service.BookService;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class BookServiceImpl implements BookService {

    private Long bookId = 100L;
    private Map<Long, Book> bookMap = new HashMap<Long, Book>();
    {
        Book book= new Book();
        book.setId(bookId);
        book.setTitle("Titanic");
        book.setAuthor("Mr Yo");
        book.setPhotoUrl("https://i.pinimg.com/736x/8e/b8/6e/8eb86e77583008a395cf7e923a37ebff.jpg");
        book.setIsbn(123432);
        book.setPrice(22.50);
        bookMap.put(book.getId(), book);
    }
    @Override
    public Collection<Book> findAll() {
        return bookMap.values();
    }

    @Override
    public Book findById(Long id) {
        return bookMap.get(id);
    }

    @Override
    public Book save(Book book) {
        Long newId = ++bookId;
        book.setId(newId);
        bookMap.put(book.getId(), book);
        return bookMap.get(newId);
    }

    @Override
    public Book update(Book book) {
        bookId = book.getId();
        if(bookMap.get(bookId) != null){
            bookMap.put(bookId, book);
            return bookMap.get(bookId);
        }
        return null;
    }

    @Override
    public Book deleteById(Long id) {
        if(bookMap.get(id) != null){
            return bookMap.remove(id);
        }
        return null;
    }
}
